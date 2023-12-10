export const MULTI_SEND = {
	name: 'Multi Send',
	address: '0xa238cbeb142c10ef7ad8442c6d1f9e89e07e7761',
	abi: [
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
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
	],
}
