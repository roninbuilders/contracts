export const SKY_MAVIS = {
	name: 'Sky Mavis',
	address: '0x41d8cf42236ae15cc7b0c0df619a95822d7ad423',
	abi: [
		{
			inputs: [
				{
					internalType: 'address',
					name: '_singleton',
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
	],
}
