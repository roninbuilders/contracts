import { Contract } from '@/contract'
const MULTI_SEND_CALL_ONLY: Contract = {
	name: 'Multi Send Call Only',
	address: '0x40a2accbd92bca938b02010e17a5b8929b49130d',
	is_deprecated: false,
	updated_at: 0,
	abi: [
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
	],
}
export default MULTI_SEND_CALL_ONLY
