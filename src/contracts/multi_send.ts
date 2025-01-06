import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [
			{
				internalType: 'bytes',
				name: 'transactions',
				type: 'bytes',
			},
		],
		name: 'multiSend',
		stateMutability: 'payable',
		type: 'function',
	},
] as const
const MULTI_SEND: Contract<typeof abi> = {
	name: 'Multi Send',
	address: '0xaa1dca22d0266e0be5627a220016236e77bde798',
	is_deprecated: false,
	created_at: 1735115130,
	abi: abi,
}
export default MULTI_SEND
