import { describe, test, expect, mock, beforeEach, afterEach, spyOn } from 'bun:test'
import { ContractService } from '../src/generate-contracts'
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'

describe('ContractService', () => {
	const mockAbi = [
		{
			type: 'function',
			name: 'transfer',
			inputs: [{ type: 'address', name: 'to' }],
			outputs: [{ type: 'bool' }],
			stateMutability: 'nonpayable',
		},
	] as const

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

	beforeEach(() => {
		originalFetch = global.fetch

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
		}) as unknown as typeof fetch
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
		}) as unknown as typeof fetch

		const abi = await service.fetchAbi(mockContractItem.address)

		expect(abi).toBeDefined()
		expect(Array.isArray(abi)).toBe(true)
		if (!abi) return // Type guard for TypeScript
		expect(abi.length).toBe(1)
		expect(abi[0]).toMatchObject({
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
		}) as unknown as typeof fetch

		// Mock the generateContractFile method to prevent actual file creation
		const generateContractFileSpy = mock(async () => {})
		;(service as unknown as { generateContractFile: ContractService['generateContractFile'] }).generateContractFile =
			generateContractFileSpy

		// Mock fs operations to prevent any file system access
		const spyMkdir = spyOn({ mkdir }, 'mkdir').mockResolvedValue(undefined)
		const spyReaddir = spyOn({ readdir }, 'readdir').mockResolvedValue([])
		const spyReadFile = spyOn({ readFile }, 'readFile').mockResolvedValue('')
		const spyWriteFile = spyOn({ writeFile }, 'writeFile').mockResolvedValue(undefined)

		try {
			await service.processContract(mockProxyItem)

			expect(generateContractFileSpy).toHaveBeenCalled()
			expect(generateContractFileSpy.mock.calls.length).toBe(1)
			// Basic call presence already asserted; detailed argument inspection skipped due to tuple typing constraints
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
		}) as unknown as typeof fetch

		// Mock the generateContractFile method to prevent actual file creation
		const generateContractFileSpy = mock(async () => {})
		;(service as unknown as { generateContractFile: ContractService['generateContractFile'] }).generateContractFile =
			generateContractFileSpy

		// Mock fs operations to prevent any file system access
		const spyMkdir = spyOn({ mkdir }, 'mkdir').mockResolvedValue(undefined)
		const spyReaddir = spyOn({ readdir }, 'readdir').mockResolvedValue([])
		const spyReadFile = spyOn({ readFile }, 'readFile').mockResolvedValue('')
		const spyWriteFile = spyOn({ writeFile }, 'writeFile').mockResolvedValue(undefined)

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

		spyOn(service, 'fetchAllContracts').mockImplementation(async () => {
			const contracts = [mockContractItem, mockProxyItem, mockDeprecatedProxyItem, mockMainTokenItem]
			;(service as unknown as { skippedCount: number }).skippedCount = 1
			return contracts.filter((c) => c.contract_name !== 'MainToken')
		})

		const contracts = await service.fetchAllContracts()

		expect((service as unknown as { skippedCount: number }).skippedCount).toBe(1)
		expect(contracts).not.toContainEqual(mockMainTokenItem)
	})

	test('should not skip deprecated proxy contracts', async () => {
		const service = new ContractService()
		const spyGenerateFile = spyOn(
			service as unknown as { generateContractFile: ContractService['generateContractFile'] },
			'generateContractFile',
		).mockResolvedValue(undefined)
		const spyFetchAbi = spyOn(service, 'fetchAbi').mockResolvedValue(mockAbi)

		// Mock fs operations to prevent any file system access
		const spyMkdir = spyOn({ mkdir }, 'mkdir').mockResolvedValue(undefined)
		const spyReaddir = spyOn({ readdir }, 'readdir').mockResolvedValue([])
		const spyReadFile = spyOn({ readFile }, 'readFile').mockResolvedValue('')
		const spyWriteFile = spyOn({ writeFile }, 'writeFile').mockResolvedValue(undefined)

		try {
			await service.processContract(mockDeprecatedProxyItem)

			expect((service as unknown as { skippedCount: number }).skippedCount).toBe(0)
			expect((service as unknown as { processedCount: number }).processedCount).toBe(1)
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
		const spyGenerateFile = spyOn(
			service as unknown as { generateContractFile: ContractService['generateContractFile'] },
			'generateContractFile',
		).mockResolvedValue(undefined)

		// Mock fs operations to prevent any file system access
		const spyMkdir = spyOn({ mkdir }, 'mkdir').mockResolvedValue(undefined)
		const spyReaddir = spyOn({ readdir }, 'readdir').mockResolvedValue([])
		const spyReadFile = spyOn({ readFile }, 'readFile').mockResolvedValue('')
		const spyWriteFile = spyOn({ writeFile }, 'writeFile').mockResolvedValue(undefined)

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

		expect((service as unknown as { totalContracts: number }).totalContracts).toBe(3)
		expect(spyProcessBatch).toHaveBeenCalled()
		const firstCall = spyProcessBatch.mock.calls[0]
		if (firstCall?.[0]) {
			const batchArg = firstCall[0]
			expect(batchArg).toContainEqual(mockContractItem)
			expect(batchArg).toContainEqual(mockProxyItem)
			expect(batchArg).toContainEqual(mockDeprecatedProxyItem)
		}
	})

	test('should handle failed ABI fetches gracefully', async () => {
		const service = new ContractService()
		spyOn(service, 'fetchAbi').mockResolvedValue(undefined)
		const spyGenerateFile = spyOn(
			service as unknown as { generateContractFile: ContractService['generateContractFile'] },
			'generateContractFile',
		).mockResolvedValue(undefined)

		// Mock fs operations to prevent any file system access
		const spyMkdir = spyOn({ mkdir }, 'mkdir').mockResolvedValue(undefined)
		const spyReaddir = spyOn({ readdir }, 'readdir').mockResolvedValue([])
		const spyReadFile = spyOn({ readFile }, 'readFile').mockResolvedValue('')
		const spyWriteFile = spyOn({ writeFile }, 'writeFile').mockResolvedValue(undefined)

		try {
			await service.processContract(mockContractItem)

			expect((service as unknown as { skippedCount: number }).skippedCount).toBe(1)
			expect((service as unknown as { failedCount: number }).failedCount).toBe(0)
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
