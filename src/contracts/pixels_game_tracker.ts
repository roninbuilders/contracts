export const PIXELS_GAME_TRACKER = {
	name: 'Pixels Game Tracker',
	address: '0x02790f32ad7e7eaaecfb0ad21950829932f1a2ee',
	abi: [
		{
			inputs: [],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'userAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'blockTimestamp',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'string',
					name: 'uid',
					type: 'string',
				},
			],
			name: 'DailyLogDone',
			type: 'event',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: '_userDays',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			name: '_userUid',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'string',
					name: 'uid',
					type: 'string',
				},
			],
			name: 'dailyLog',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'userAddress',
					type: 'address',
				},
			],
			name: 'hasSignInToday',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
	],
}
