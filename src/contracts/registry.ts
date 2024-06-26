import { Contract } from '@/contract'
const abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_oldAdmin',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_newAdmin',
				type: 'address',
			},
		],
		name: 'AdminChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_oldAdmin',
				type: 'address',
			},
		],
		name: 'AdminRemoved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'string',
				name: '_name',
				type: 'string',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: '_code',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_newAddress',
				type: 'address',
			},
		],
		name: 'ContractAddressUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_mainchainToken',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_sidechainToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint32',
				name: '_standard',
				type: 'uint32',
			},
		],
		name: 'TokenMapped',
		type: 'event',
	},
	{
		constant: true,
		inputs: [],
		name: 'ACKNOWLEDGEMENT',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'GATEWAY',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'VALIDATOR',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'WETH_TOKEN',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'admin',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_newAdmin',
				type: 'address',
			},
		],
		name: 'changeAdmin',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_mainchainToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_sidechainToken',
				type: 'address',
			},
		],
		name: 'clearMapToken',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		name: 'contractAddresses',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'string',
				name: '_name',
				type: 'string',
			},
		],
		name: 'getCode',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		payable: false,
		stateMutability: 'pure',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'string',
				name: '_name',
				type: 'string',
			},
		],
		name: 'getContract',
		outputs: [
			{
				internalType: 'address',
				name: '_address',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: '_isMainchain',
				type: 'bool',
			},
		],
		name: 'getMappedToken',
		outputs: [
			{
				internalType: 'address',
				name: '_mainchainToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_sidechainToken',
				type: 'address',
			},
			{
				internalType: 'uint32',
				name: '_standard',
				type: 'uint32',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'uint32',
				name: '_standard',
				type: 'uint32',
			},
			{
				internalType: 'bool',
				name: '_isMainchain',
				type: 'bool',
			},
		],
		name: 'isTokenMapped',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'mainchainMap',
		outputs: [
			{
				internalType: 'address',
				name: 'mainchainToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'sidechainToken',
				type: 'address',
			},
			{
				internalType: 'uint32',
				name: 'standard',
				type: 'uint32',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_mainchainToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_sidechainToken',
				type: 'address',
			},
			{
				internalType: 'uint32',
				name: '_standard',
				type: 'uint32',
			},
		],
		name: 'mapToken',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [],
		name: 'removeAdmin',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'sidechainMap',
		outputs: [
			{
				internalType: 'address',
				name: 'mainchainToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'sidechainToken',
				type: 'address',
			},
			{
				internalType: 'uint32',
				name: 'standard',
				type: 'uint32',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'string',
				name: '_name',
				type: 'string',
			},
			{
				internalType: 'address',
				name: '_newAddress',
				type: 'address',
			},
		],
		name: 'updateContract',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const REGISTRY: Contract<typeof abi> = {
	name: 'Registry',
	address: '0x3a860626b0467809d50c58bef89b8ac6247fd62a',
	is_deprecated: true,
	created_at: 1611574096,
	abi: abi,
}
export default REGISTRY
