export const STAKING_VESTING = {
	name: 'Staking Vesting',
	address: '0xf07121671f929d89ea6caee8e3d26bd7ed63cfeb',
	abi: [
		{
			inputs: [],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			inputs: [],
			name: 'ErrCallerMustBeValidatorContract',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrInsufficientBalance',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrRecipientRevert',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrZeroCodeContract',
			type: 'error',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'BlockProducerBonusPerBlockUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'blockNumber',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'recipient',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'blockProducerAmount',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'bridgeOperatorAmount',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'contractBalance',
					type: 'uint256',
				},
			],
			name: 'BonusTransferFailed',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'blockNumber',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'recipient',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'blockProducerAmount',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'bridgeOperatorAmount',
					type: 'uint256',
				},
			],
			name: 'BonusTransferred',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'BridgeOperatorBonusPerBlockUpdated',
			type: 'event',
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
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'ValidatorContractUpdated',
			type: 'event',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'blockProducerBlockBonus',
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
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'bridgeOperatorBlockBonus',
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
					internalType: 'address',
					name: '__validatorContract',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '__blockProducerBonusPerBlock',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '__bridgeOperatorBonusPerBlock',
					type: 'uint256',
				},
			],
			name: 'initialize',
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'lastBlockSendingBonus',
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
			inputs: [],
			name: 'receiveRON',
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bool',
					name: '_forBlockProducer',
					type: 'bool',
				},
				{
					internalType: 'bool',
					name: '_forBridgeOperator',
					type: 'bool',
				},
			],
			name: 'requestBonus',
			outputs: [
				{
					internalType: 'bool',
					name: '_success',
					type: 'bool',
				},
				{
					internalType: 'uint256',
					name: '_blockProducerBonus',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_bridgeOperatorBonus',
					type: 'uint256',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'setBlockProducerBonusPerBlock',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'setBridgeOperatorBonusPerBlock',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_addr',
					type: 'address',
				},
			],
			name: 'setValidatorContract',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'validatorContract',
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
	],
}
