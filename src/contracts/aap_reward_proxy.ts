export const AAP_REWARD_PROXY = {
	name: 'AAP Reward Proxy',
	address: '0xa5cb85d2910e7b384afa3121e7d0a6f623b05da3',
	abi: [
		{
			inputs: [
				{
					internalType: 'address',
					name: '_logic',
					type: 'address',
				},
				{
					internalType: 'bytes',
					name: '_data',
					type: 'bytes',
				},
			],
			stateMutability: 'payable',
			type: 'constructor',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'previousAdmin',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'newAdmin',
					type: 'address',
				},
			],
			name: 'AdminChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'beacon',
					type: 'address',
				},
			],
			name: 'BeaconUpgraded',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'implementation',
					type: 'address',
				},
			],
			name: 'Upgraded',
			type: 'event',
		},
		{
			stateMutability: 'payable',
			type: 'fallback',
		},
		{
			stateMutability: 'payable',
			type: 'receive',
		},
	],
}
