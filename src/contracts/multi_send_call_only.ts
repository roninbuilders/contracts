import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'bytes',
				name: 'transactions',
				type: 'bytes',
			},
		],
		name: 'multiSend',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
] as const
const MULTI_SEND_CALL_ONLY: Contract<typeof abi> = {
	name: 'Multi Send Call Only',
	address: '0x40a2accbd92bca938b02010e17a5b8929b49130d',
	is_deprecated: false,
	created_at: 1635392455,
	abi: abi,
}
export default MULTI_SEND_CALL_ONLY
