export const REWARDS = {
	name: 'Rewards',
	address: '0xd217ad3332335e5dca5ca566d35177f25d92059c',
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
