import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner_',
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
				name: 'previousOwner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		inputs: [],
		name: 'kill',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract INSUnified',
				name: 'rns',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'parentId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'resolver',
				type: 'address',
			},
			{
				internalType: 'uint64',
				name: 'duration',
				type: 'uint64',
			},
			{
				internalType: 'address[]',
				name: 'tos',
				type: 'address[]',
			},
			{
				internalType: 'string[]',
				name: 'labels',
				type: 'string[]',
			},
		],
		name: 'multiMint',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'tos',
				type: 'address[]',
			},
			{
				internalType: 'bytes[]',
				name: 'callDatas',
				type: 'bytes[]',
			},
			{
				internalType: 'uint256[]',
				name: 'values',
				type: 'uint256[]',
			},
		],
		name: 'multicall',
		outputs: [
			{
				internalType: 'bool[]',
				name: 'results',
				type: 'bool[]',
			},
			{
				internalType: 'bytes[]',
				name: 'returnDatas',
				type: 'bytes[]',
			},
		],
		stateMutability: 'payable',
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
		name: 'renounceOwnership',
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
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const OWNED_MULTICALLER_1: Contract<typeof abi> = {
	name: 'Owned Multicaller',
	address: '0x8975923d01132beb6c412f827f63d44712726e13',
	is_deprecated: false,
	created_at: 1699347565,
	abi: abi,
}
export default OWNED_MULTICALLER_1
