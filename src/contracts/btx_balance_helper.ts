import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'balanceInfoOf',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
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
		name: 'btxToken',
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
] as const
const BTX_BALANCE_HELPER: Contract<typeof abi> = {
	name: 'BTX Balance Helper',
	address: '0xde4d0c3a4cb1c3f780554b182e108cf030960127',
	is_deprecated: false,
	created_at: 1731940859,
	abi: abi,
}
export default BTX_BALANCE_HELPER
