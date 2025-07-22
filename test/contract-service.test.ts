import { describe, test, expect, mock, beforeEach, afterEach, spyOn } from 'bun:test'
import { ContractService } from '../src/generate-contracts'
import fs from 'node:fs/promises'
import path from 'node:path'

describe('ContractService', () => {
	const mockAbi = [
		{
			type: 'function',
			name: 'transfer',
			inputs: [{ type: 'address', name: 'to' }],
			outputs: [{ type: 'bool' }],
			stateMutability: 'nonpayable',
		},
	]

	const mockContractItem = {
		id: 1,
		address: '0x1234567890123456789012345678901234567890' as `0x${string}`,
		contract_name: 'TestContract',
		display_name: 'Test Contract',
		is_deprecated: false,
		is_proxy: false,
		proxy_to: '',
		created_at: Date.now(),
	}

	const mockProxyItem = {
		...mockContractItem,
		id: 2,
		address: '0x0987654321098765432109876543210987654321' as `0x${string}`,
		contract_name: 'TestProxy',
		display_name: 'Test Proxy',
		is_proxy: true,
		proxy_to: '0x1111111111111111111111111111111111111111',
	}

	const mockDeprecatedProxyItem = {
		...mockProxyItem,
		id: 3,
		address: '0x3333333333333333333333333333333333333333' as `0x${string}`,
		contract_name: 'DeprecatedProxy',
		display_name: 'Deprecated Proxy',
		is_deprecated: true,
		proxy_to: '0x4444444444444444444444444444444444444444',
	}

	const mockMainTokenItem = {
		...mockContractItem,
		id: 4,
		contract_name: 'MainToken',
		display_name: 'Main Token',
	}

	let originalFetch: typeof fetch
	let mockFs: typeof fs

	beforeEach(() => {
		originalFetch = global.fetch
		mockFs = {
			mkdir: mock(async () => {}),
			readdir: mock(async () => []),
			readFile: mock(async () => ''),
			writeFile: mock(async () => {}),
		} as unknown as typeof fs

		global.fetch = mock(async (url: string) => {
			if (url.includes('/abi')) {
				return new Response(
					JSON.stringify({
						status: true,
						result: {
							output: {
								abi: mockAbi,
							},
						},
					}),
				)
			}
			return new Response(
				JSON.stringify({
					status: true,
					result: {
						items: [mockContractItem, mockProxyItem, mockDeprecatedProxyItem, mockMainTokenItem],
						total: 4,
						hasNext: false,
					},
				}),
			)
		})
	})

	afterEach(() => {
		global.fetch = originalFetch
		mock.restore()
	})

	test('fetchContracts should retrieve contract list', async () => {
		const service = new ContractService()
		const result = await service.fetchContracts(1)
		expect(result.items).toBeDefined()
		expect(result.items[0]).toEqual(mockContractItem)
	})

	test('fetchAbi should retrieve contract ABI', async () => {
		const service = new ContractService()

		global.fetch = mock(async () => {
			return new Response(
				JSON.stringify({
					status: true,
					result: {
						output: {
							abi: mockAbi,
						},
					},
				}),
			)
		})

		const abi = await service.fetchAbi(mockContractItem.address)

		expect(abi).toBeDefined()
		expect(Array.isArray(abi)).toBe(true)
		expect(abi!.length).toBe(1)
		expect(abi![0]).toMatchObject({
			type: 'function',
			name: 'transfer',
			inputs: [{ type: 'address', name: 'to' }],
			outputs: [{ type: 'bool' }],
			stateMutability: 'nonpayable',
		})
	})

	test('transformContractName should format contract names correctly', () => {
		const service = new ContractService()

		expect(service.transformContractName('MyContract')).toBe('my_contract')
		expect(service.transformContractName('my-contract')).toBe('my_contract')
		expect(service.transformContractName('myContract123')).toBe('my_contract_123')
		expect(service.transformContractName('MY_CONTRACT')).toBe('my_contract')
		expect(service.transformContractName('my.contract')).toBe('my_contract')

		expect(service.transformContractName('MyContract', 123)).toBe('my_contract_123')
	})

	test('processContract should handle proxy contracts', async () => {
		const service = new ContractService()

		global.fetch = mock(async (url: string) => {
			if (url.includes('/abi')) {
				return new Response(
					JSON.stringify({
						status: true,
						result: {
							output: {
								abi: mockAbi,
							},
						},
					}),
				)
			}
			return new Response(
				JSON.stringify({
					status: false,
				}),
			)
		})

		// Mock the generateContractFile method to prevent actual file creation
		const generateContractFileSpy = mock(async () => {})
		service['generateContractFile'] = generateContractFileSpy

		// Mock fs operations to prevent any file system access
		const spyMkdir = spyOn(fs, 'mkdir').mockResolvedValue(undefined as any)
		const spyReaddir = spyOn(fs, 'readdir').mockResolvedValue([] as any)
		const spyReadFile = spyOn(fs, 'readFile').mockResolvedValue('')
		const spyWriteFile = spyOn(fs, 'writeFile').mockResolvedValue(undefined as any)

		try {
			await service.processContract(mockProxyItem)

			expect(generateContractFileSpy).toHaveBeenCalled()
			const calls = generateContractFileSpy.mock.calls
			expect(calls.length).toBe(1)

			const [[contractArg]] = calls

			expect(contractArg).toHaveProperty('abi')
		} finally {
			// Restore all mocks
			spyMkdir.mockRestore()
			spyReaddir.mockRestore()
			spyReadFile.mockRestore()
			spyWriteFile.mockRestore()
		}
	})

	test('processBatch should handle multiple contracts', async () => {
		const service = new ContractService()

		global.fetch = mock(async () => {
			return new Response(
				JSON.stringify({
					status: true,
					result: {
						output: {
							abi: mockAbi,
						},
					},
				}),
			)
		})

		// Mock the generateContractFile method to prevent actual file creation
		const generateContractFileSpy = mock(async () => {})
		service['generateContractFile'] = generateContractFileSpy

		// Mock fs operations to prevent any file system access
		const spyMkdir = spyOn(fs, 'mkdir').mockResolvedValue(undefined as any)
		const spyReaddir = spyOn(fs, 'readdir').mockResolvedValue([] as any)
		const spyReadFile = spyOn(fs, 'readFile').mockResolvedValue('')
		const spyWriteFile = spyOn(fs, 'writeFile').mockResolvedValue(undefined as any)

		try {
			await service.processBatch([mockContractItem, mockProxyItem])

			expect(generateContractFileSpy.mock.calls.length).toBe(2)
		} finally {
			// Restore all mocks
			spyMkdir.mockRestore()
			spyReaddir.mockRestore()
			spyReadFile.mockRestore()
			spyWriteFile.mockRestore()
		}
	})

	test('should skip MainToken contracts', async () => {
		const service = new ContractService()
		const spyGenerateFile = spyOn(service as any, 'generateContractFile')

		spyOn(service, 'fetchAllContracts').mockImplementation(async () => {
			const contracts = [mockContractItem, mockProxyItem, mockDeprecatedProxyItem, mockMainTokenItem]
			service['skippedCount'] = 1
			return contracts.filter((c) => c.contract_name !== 'MainToken')
		})

		const contracts = await service.fetchAllContracts()

		expect(service['skippedCount']).toBe(1)
		expect(contracts).not.toContainEqual(mockMainTokenItem)
	})

	test('should not skip deprecated proxy contracts', async () => {
		const service = new ContractService()
		const spyGenerateFile = spyOn(service as any, 'generateContractFile').mockResolvedValue(undefined)
		const spyFetchAbi = spyOn(service, 'fetchAbi').mockResolvedValue(mockAbi)

		// Mock fs operations to prevent any file system access
		const spyMkdir = spyOn(fs, 'mkdir').mockResolvedValue(undefined as any)
		const spyReaddir = spyOn(fs, 'readdir').mockResolvedValue([] as any)
		const spyReadFile = spyOn(fs, 'readFile').mockResolvedValue('')
		const spyWriteFile = spyOn(fs, 'writeFile').mockResolvedValue(undefined as any)

		try {
			await service.processContract(mockDeprecatedProxyItem)

			expect(service['skippedCount']).toBe(0)
			expect(service['processedCount']).toBe(1)
			expect(spyFetchAbi).toHaveBeenCalledTimes(2)
			expect(spyGenerateFile).toHaveBeenCalled()
		} finally {
			// Restore all mocks
			spyMkdir.mockRestore()
			spyReaddir.mockRestore()
			spyReadFile.mockRestore()
			spyWriteFile.mockRestore()
		}
	})

	test('should fetch ABIs for both proxy and implementation contracts', async () => {
		const service = new ContractService()
		const spyFetchAbi = spyOn(service, 'fetchAbi').mockResolvedValue(mockAbi)
		const spyGenerateFile = spyOn(service as any, 'generateContractFile').mockResolvedValue(undefined)

		// Mock fs operations to prevent any file system access
		const spyMkdir = spyOn(fs, 'mkdir').mockResolvedValue(undefined as any)
		const spyReaddir = spyOn(fs, 'readdir').mockResolvedValue([] as any)
		const spyReadFile = spyOn(fs, 'readFile').mockResolvedValue('')
		const spyWriteFile = spyOn(fs, 'writeFile').mockResolvedValue(undefined as any)

		try {
			await service.processContract(mockProxyItem)

			expect(spyFetchAbi).toHaveBeenCalledWith(mockProxyItem.address)
			expect(spyFetchAbi).toHaveBeenCalledWith(mockProxyItem.proxy_to)
			expect(spyFetchAbi).toHaveBeenCalledTimes(2)
		} finally {
			// Restore all mocks
			spyGenerateFile.mockRestore()
			spyMkdir.mockRestore()
			spyReaddir.mockRestore()
			spyReadFile.mockRestore()
			spyWriteFile.mockRestore()
		}
	})

	test('should process all contracts except MainToken in update', async () => {
		const service = new ContractService()

		spyOn(service, 'fetchAllContracts').mockResolvedValue([mockContractItem, mockProxyItem, mockDeprecatedProxyItem])

		const spyProcessBatch = spyOn(service, 'processBatch').mockResolvedValue(undefined)

		await service.update()

		expect(service['totalContracts']).toBe(3)
		expect(spyProcessBatch).toHaveBeenCalled()
		const batchArg = spyProcessBatch.mock.calls[0][0]
		expect(batchArg).toContainEqual(mockContractItem)
		expect(batchArg).toContainEqual(mockProxyItem)
		expect(batchArg).toContainEqual(mockDeprecatedProxyItem)
	})

	test('should handle failed ABI fetches gracefully', async () => {
		const service = new ContractService()
		const spyFetchAbi = spyOn(service, 'fetchAbi').mockResolvedValue(undefined)
		const spyGenerateFile = spyOn(service as any, 'generateContractFile').mockResolvedValue(undefined)

		// Mock fs operations to prevent any file system access
		const spyMkdir = spyOn(fs, 'mkdir').mockResolvedValue(undefined as any)
		const spyReaddir = spyOn(fs, 'readdir').mockResolvedValue([] as any)
		const spyReadFile = spyOn(fs, 'readFile').mockResolvedValue('')
		const spyWriteFile = spyOn(fs, 'writeFile').mockResolvedValue(undefined as any)

		try {
			await service.processContract(mockContractItem)

			expect(service['skippedCount']).toBe(1)
			expect(service['failedCount']).toBe(0)
			expect(spyGenerateFile).not.toHaveBeenCalled()
		} finally {
			// Restore all mocks
			spyMkdir.mockRestore()
			spyReaddir.mockRestore()
			spyReadFile.mockRestore()
			spyWriteFile.mockRestore()
		}
	})
})
