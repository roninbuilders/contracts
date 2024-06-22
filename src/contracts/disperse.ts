import { Contract } from '@/contract'
const abi = [
	{
		constant: false,
		inputs: [
			{
				name: 'token',
				type: 'address',
			},
			{
				name: 'recipients',
				type: 'address[]',
			},
			{
				name: 'values',
				type: 'uint256[]',
			},
		],
		name: 'disperseTokenSimple',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				name: 'token',
				type: 'address',
			},
			{
				name: 'recipients',
				type: 'address[]',
			},
			{
				name: 'values',
				type: 'uint256[]',
			},
		],
		name: 'disperseToken',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				name: 'recipients',
				type: 'address[]',
			},
			{
				name: 'values',
				type: 'uint256[]',
			},
		],
		name: 'disperseEther',
		outputs: [],
		payable: true,
		stateMutability: 'payable',
		type: 'function',
	},
] as const
const DISPERSE: Contract<typeof abi> = {
	name: 'Disperse',
	address: '0x14978681c5f8ce2f6b66d1f1551b0ec67405574c',
	is_deprecated: true,
	created_at: 1620737178,
	abi: abi,
}
export default DISPERSE
