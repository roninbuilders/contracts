import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address payable',
				name: 'coldAddr',
				type: 'address',
			},
			{
				internalType: 'address payable',
				name: 'adminAddr',
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
				name: 'receiver',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'Deposit',
		type: 'event',
	},
	{
		inputs: [],
		stateMutability: 'payable',
		type: 'fallback',
	},
	{
		inputs: [],
		name: 'adminAddress',
		outputs: [
			{
				internalType: 'address payable',
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
				internalType: 'address payable',
				name: 'newAddress',
				type: 'address',
			},
		],
		name: 'changeColdAddress',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address payable',
				name: 'newAddress',
				type: 'address',
			},
		],
		name: 'changeImplAddress',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'newMinInput',
				type: 'uint256',
			},
		],
		name: 'changeMinInput',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'coldAddress',
		outputs: [
			{
				internalType: 'address payable',
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
				internalType: 'contract IERC20',
				name: 'instance',
				type: 'address',
			},
		],
		name: 'gatherErc20',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'gatherEth',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'implementation',
		outputs: [
			{
				internalType: 'address payable',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'kill',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'minimumInput',
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
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const EXCHANGE_DEPOSIT_1: Contract<typeof abi> = {
	name: 'Exchange Deposit',
	address: '0x6fe8c151dfcdf4780d254accccfa9c6e493c2b8c',
	is_deprecated: false,
	created_at: 1724213652,
	abi: abi,
}
export default EXCHANGE_DEPOSIT_1
