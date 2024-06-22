import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'payable',
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
		inputs: [],
		name: 'charge',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'recipients',
				type: 'address[]',
			},
		],
		name: 'getBatchBalance',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
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
				internalType: 'address payable[]',
				name: 'addrs',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'amnts',
				type: 'uint256[]',
			},
		],
		name: 'withdrawls',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
] as const
const MULTI_SEND: Contract<typeof abi> = {
	name: 'Multi Send',
	address: '0x263eebee6ced9ff47fc9208cd461114e79a03f27',
	is_deprecated: false,
	created_at: 1698084111,
	abi: abi,
}
export default MULTI_SEND
