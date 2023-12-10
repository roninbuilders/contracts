export const BRIDGE_REWARD = {
	name: 'Bridge Reward',
	address: '0x6d457615c1b08ab8d5ec2a0410440e23a17f7c38',
	abi: [
		{
			inputs: [],
			stateMutability: 'payable',
			type: 'constructor',
		},
		{
			inputs: [
				{
					internalType: 'enum ContractType',
					name: 'contractType',
					type: 'uint8',
				},
			],
			name: 'ErrContractTypeNotFound',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'msgSig',
					type: 'bytes4',
				},
				{
					internalType: 'uint256',
					name: 'currentBalance',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'sendAmount',
					type: 'uint256',
				},
			],
			name: 'ErrInsufficientBalance',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'msgSig',
					type: 'bytes4',
				},
			],
			name: 'ErrInvalidArguments',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'msgSig',
					type: 'bytes4',
				},
			],
			name: 'ErrLengthMismatch',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'msgSig',
					type: 'bytes4',
				},
			],
			name: 'ErrRecipientRevert',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'period',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'latestRewardedPeriod',
					type: 'uint256',
				},
			],
			name: 'ErrSyncTooFarPeriod',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'msgSig',
					type: 'bytes4',
				},
				{
					internalType: 'enum RoleAccess',
					name: 'expectedRole',
					type: 'uint8',
				},
			],
			name: 'ErrUnauthorized',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'msgSig',
					type: 'bytes4',
				},
			],
			name: 'ErrUnauthorizedCall',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'msgSig',
					type: 'bytes4',
				},
				{
					internalType: 'enum ContractType',
					name: 'expectedContractType',
					type: 'uint8',
				},
				{
					internalType: 'address',
					name: 'actual',
					type: 'address',
				},
			],
			name: 'ErrUnexpectedInternalCall',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'addr',
					type: 'address',
				},
			],
			name: 'ErrZeroCodeContract',
			type: 'error',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'period',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'operator',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'BridgeRewardScatterFailed',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'period',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'operator',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'BridgeRewardScattered',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'period',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'operator',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'BridgeRewardSlashed',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: 'requestingPeriod',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'latestPeriod',
					type: 'uint256',
				},
			],
			name: 'BridgeRewardSyncTooFarPeriod',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [],
			name: 'BridgeTrackingIncorrectlyResponded',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'enum ContractType',
					name: 'contractType',
					type: 'uint8',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'addr',
					type: 'address',
				},
			],
			name: 'ContractUpdated',
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
					indexed: true,
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'balanceBefore',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'SafeReceived',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: 'newRewardPerPeriod',
					type: 'uint256',
				},
			],
			name: 'UpdatedRewardPerPeriod',
			type: 'event',
		},
		{
			inputs: [
				{
					internalType: 'address[]',
					name: 'operators',
					type: 'address[]',
				},
				{
					internalType: 'uint256[]',
					name: 'ballots',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256',
					name: 'totalBallot',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'totalVote',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'period',
					type: 'uint256',
				},
			],
			name: 'execSyncReward',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'enum ContractType',
					name: 'contractType',
					type: 'uint8',
				},
			],
			name: 'getContract',
			outputs: [
				{
					internalType: 'address',
					name: 'contract_',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getLatestRewardedPeriod',
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
			name: 'getRewardPerPeriod',
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
			name: 'getTotalRewardScattered',
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
			name: 'getTotalRewardToppedUp',
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
					name: 'bridgeManagerContract',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'bridgeTrackingContract',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'bridgeSlashContract',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'validatorSetContract',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'dposGA',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'rewardPerPeriod',
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
			name: 'initializeREP2',
			outputs: [],
			stateMutability: 'nonpayable',
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
					internalType: 'enum ContractType',
					name: 'contractType',
					type: 'uint8',
				},
				{
					internalType: 'address',
					name: 'addr',
					type: 'address',
				},
			],
			name: 'setContract',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'rewardPerPeriod',
					type: 'uint256',
				},
			],
			name: 'setRewardPerPeriod',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'periodLength',
					type: 'uint256',
				},
			],
			name: 'syncReward',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
