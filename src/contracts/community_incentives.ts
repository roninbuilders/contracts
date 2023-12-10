export const COMMUNITY_INCENTIVES = {
	name: 'Community Incentives',
	address: '0xf603d9a18a5aaca2d11cb43cbb2b6abc4a5b3e61',
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
