import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'pythContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_katanaOracle',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'newAdmin',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'previousAdmin',
				type: 'address',
			},
		],
		name: 'NewAdmin',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'cTokenToPriceFeed',
		outputs: [
			{
				internalType: 'bytes32',
				name: 'basePriceId',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'quotePriceId',
				type: 'bytes32',
			},
			{
				internalType: 'uint32',
				name: 'inputDecimals',
				type: 'uint32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'decimalScale',
		outputs: [
			{
				internalType: 'int32',
				name: '',
				type: 'int32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'cToken',
				type: 'address',
			},
		],
		name: 'getUnderlyingDecimals',
		outputs: [
			{
				internalType: 'uint32',
				name: '',
				type: 'uint32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'cToken',
				type: 'address',
			},
		],
		name: 'getUnderlyingPrice',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'katanaOracle',
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
		inputs: [],
		name: 'owner',
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
		inputs: [],
		name: 'pyth',
		outputs: [
			{
				internalType: 'contract IPyth',
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
				name: 'newAdmin',
				type: 'address',
			},
		],
		name: 'setAdmin',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_katanaOracle',
				type: 'address',
			},
		],
		name: 'setKatanaOracle',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'cToken',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'basePriceId',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'quotePriceId',
				type: 'bytes32',
			},
			{
				internalType: 'uint8',
				name: 'inputDecimals',
				type: 'uint8',
			},
		],
		name: 'setPriceFeed',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const PYTH_ORACLE: Contract<typeof abi> = {
	name: 'Pyth Oracle',
	address: '0x41b3805bafc04c498de063888445783139aa9f6d',
	is_deprecated: false,
	updated_at: 1708909083,
	abi: abi,
}
export default PYTH_ORACLE
