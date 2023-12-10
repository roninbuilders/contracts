export const ECOSYSTEM_FUND = {
	name: 'Ecosystem Fund',
	address: '0x1e7d74b6279e66f3dc6c0e50e69fb8da13432ba5',
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
