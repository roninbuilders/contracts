import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_WRON',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: '_nativeCurrencyLabelBytes',
				type: 'bytes32',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'WRON',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'token0',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'token1',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'chainId',
				type: 'uint256',
			},
		],
		name: 'flipRatio',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'nativeCurrencyLabel',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'nativeCurrencyLabelBytes',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'chainId',
				type: 'uint256',
			},
		],
		name: 'tokenRatioPriority',
		outputs: [
			{
				internalType: 'int256',
				name: '',
				type: 'int256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract INonfungiblePositionManager',
				name: 'positionManager',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'tokenURI',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const
const NONFUNGIBLE_TOKEN_POSITION_DESCRIPTOR: Contract<typeof abi> = {
	name: 'Nonfungible Token Position Descriptor',
	address: '0x8766648aa6586cc7cd2cdb2bd911eec78cab89ea',
	is_deprecated: false,
	created_at: 1732163860,
	abi: abi,
}
export default NONFUNGIBLE_TOKEN_POSITION_DESCRIPTOR
