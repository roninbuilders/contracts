import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'contract IWRON',
				name: '_WRON',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		stateMutability: 'payable',
		type: 'fallback',
	},
	{
		inputs: [],
		name: 'WRON',
		outputs: [
			{
				internalType: 'contract IWRON',
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
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'withdraw',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address payable',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'withdrawTo',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const WRON_HELPER: Contract<typeof abi> = {
	name: 'WRON Helper',
	address: '0xcaf3e62b27a3df0766721d1959d22b066e1a57f1',
	is_deprecated: false,
	created_at: 1682501508,
	abi: abi,
}
export default WRON_HELPER
