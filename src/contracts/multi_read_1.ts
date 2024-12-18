import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'initialTokens',
				type: 'address[]',
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
				name: 'oldOwner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'OwnerSet',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'tokenAddr',
				type: 'address',
			},
		],
		name: 'addErc20Token',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'changeOwner',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'wallets',
				type: 'address[]',
			},
		],
		name: 'getBalances',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'nativeBalances',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[][]',
				name: 'tokenBalances',
				type: 'uint256[][]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getErc20TokenList',
		outputs: [
			{
				internalType: 'address[]',
				name: '',
				type: 'address[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getOwner',
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
				name: 'tokenAddr',
				type: 'address',
			},
		],
		name: 'removeErc20Token',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const MULTI_READ_1: Contract<typeof abi> = {
	name: 'Multi Read',
	address: '0xab46619e072e88e30fc29f9bcdaa11ad4fe7df98',
	is_deprecated: false,
	created_at: 1727286620,
	abi: abi,
}
export default MULTI_READ_1
