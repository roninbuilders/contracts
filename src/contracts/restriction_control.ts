export const RESTRICTION_CONTROL = {
	name: 'Restriction Control',
	address: '0x0a2ccb496a78cb855673c679d14c42a9d8b0dfe0',
	abi: [
		{
			inputs: [
				{
					internalType: 'address',
					name: '_atiaShrine',
					type: 'address',
				},
			],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint8',
					name: 'version',
					type: 'uint8',
				},
			],
			name: 'Initialized',
			type: 'event',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'user',
					type: 'address',
				},
				{
					internalType: 'string',
					name: 'id',
					type: 'string',
				},
				{
					internalType: 'bytes',
					name: 'args',
					type: 'bytes',
				},
			],
			name: 'checkRestriction',
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
		{
			inputs: [
				{
					internalType: 'address',
					name: 'user',
					type: 'address',
				},
				{
					internalType: 'bytes',
					name: 'args',
					type: 'bytes',
				},
			],
			name: 'hasBlessingStatus',
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
		{
			inputs: [
				{
					internalType: 'address',
					name: 'user',
					type: 'address',
				},
				{
					internalType: 'bytes',
					name: 'args',
					type: 'bytes',
				},
			],
			name: 'hasBlessingStreak',
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
		{
			inputs: [
				{
					internalType: 'address',
					name: 'user',
					type: 'address',
				},
				{
					internalType: 'bytes',
					name: 'args',
					type: 'bytes',
				},
			],
			name: 'hasRonBalance',
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
		{
			inputs: [
				{
					internalType: 'address',
					name: 'user',
					type: 'address',
				},
				{
					internalType: 'bytes',
					name: 'args',
					type: 'bytes',
				},
			],
			name: 'hasTokenBalance',
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
		{
			inputs: [
				{
					internalType: 'address',
					name: 'user',
					type: 'address',
				},
				{
					internalType: 'bytes',
					name: '',
					type: 'bytes',
				},
			],
			name: 'isBlessingActive',
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
		{
			inputs: [
				{
					internalType: 'address',
					name: 'user',
					type: 'address',
				},
				{
					internalType: 'bytes',
					name: '',
					type: 'bytes',
				},
			],
			name: 'isBlessingInactive',
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
		{
			inputs: [
				{
					internalType: 'string',
					name: 'id',
					type: 'string',
				},
			],
			name: 'isValidRestriction',
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
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'interfaceId',
					type: 'bytes4',
				},
			],
			name: 'supportsInterface',
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
