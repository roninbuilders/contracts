export const MULTI_SEND_CALL_ONLY = {
	name: 'Multi Send Call Only',
	address: '0x40a2accbd92bca938b02010e17a5b8929b49130d',
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
