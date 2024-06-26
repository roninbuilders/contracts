import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_recipients',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_values',
				type: 'uint256[]',
			},
		],
		name: 'disperseRON',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'address[]',
				name: '_recipients',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_values',
				type: 'uint256[]',
			},
		],
		name: 'disperseToken',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'address[]',
				name: '_recipients',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_values',
				type: 'uint256[]',
			},
		],
		name: 'disperseTokenSimple',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const SCATTER: Contract<typeof abi> = {
	name: 'Scatter',
	address: '0x5d518933351a0bc14b24b329b33b813565608769',
	is_deprecated: false,
	created_at: 1677829119,
	abi: abi,
}
export default SCATTER
