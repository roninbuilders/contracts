import { Contract } from '@/contract'
const abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'configDigest',
				type: 'bytes32',
			},
		],
		name: 'NewConfiguration',
		type: 'event',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address[]',
						name: 'signers',
						type: 'address[]',
					},
					{
						internalType: 'address[]',
						name: 'transmitters',
						type: 'address[]',
					},
					{
						internalType: 'bytes',
						name: 'onchainConfig',
						type: 'bytes',
					},
					{
						internalType: 'bytes',
						name: 'offchainConfig',
						type: 'bytes',
					},
					{
						internalType: 'address',
						name: 'contractAddress',
						type: 'address',
					},
					{
						internalType: 'uint64',
						name: 'offchainConfigVersion',
						type: 'uint64',
					},
					{
						internalType: 'uint32',
						name: 'configCount',
						type: 'uint32',
					},
					{
						internalType: 'uint8',
						name: 'f',
						type: 'uint8',
					},
				],
				internalType: 'struct OCRConfigurationStoreEVMSimple.ConfigurationEVMSimple',
				name: 'configuration',
				type: 'tuple',
			},
		],
		name: 'addConfig',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'configDigest',
				type: 'bytes32',
			},
		],
		name: 'readConfig',
		outputs: [
			{
				components: [
					{
						internalType: 'address[]',
						name: 'signers',
						type: 'address[]',
					},
					{
						internalType: 'address[]',
						name: 'transmitters',
						type: 'address[]',
					},
					{
						internalType: 'bytes',
						name: 'onchainConfig',
						type: 'bytes',
					},
					{
						internalType: 'bytes',
						name: 'offchainConfig',
						type: 'bytes',
					},
					{
						internalType: 'address',
						name: 'contractAddress',
						type: 'address',
					},
					{
						internalType: 'uint64',
						name: 'offchainConfigVersion',
						type: 'uint64',
					},
					{
						internalType: 'uint32',
						name: 'configCount',
						type: 'uint32',
					},
					{
						internalType: 'uint8',
						name: 'f',
						type: 'uint8',
					},
				],
				internalType: 'struct OCRConfigurationStoreEVMSimple.ConfigurationEVMSimple',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'typeAndVersion',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
] as const
const OCR_CONFIGURATION_STORE_EVM_SIMPLE: Contract<typeof abi> = {
	name: 'OCR Configuration Store EVM Simple',
	address: '0x239d97bb703a6890600c3f6b98b5a8597d397a9e',
	is_deprecated: false,
	created_at: 1736848640,
	abi: abi,
}
export default OCR_CONFIGURATION_STORE_EVM_SIMPLE
