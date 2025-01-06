import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'configuredFeeBps',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'configuredFeeReceiver',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'passed',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'max',
				type: 'uint256',
			},
		],
		name: 'ConfiguredFeeTooHigh',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'NotTheFeeOperator',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NullFeeReceiver',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'percent',
				type: 'uint256',
			},
		],
		name: 'ReductionPercentExceedMaximum',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'approved',
				type: 'bool',
			},
		],
		name: 'ApprovalForAll',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'conditionId',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'oracle',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'questionId',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'outcomeSlotCount',
				type: 'uint256',
			},
		],
		name: 'ConditionPreparation',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'conditionId',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'oracle',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'questionId',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'outcomeSlotCount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'payoutNumerators',
				type: 'uint256[]',
			},
		],
		name: 'ConditionResolution',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldFeeBps',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newFeeBps',
				type: 'uint256',
			},
		],
		name: 'FeeBpsUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldFeeReceiver',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newFeeReceiver',
				type: 'address',
			},
		],
		name: 'FeeReceiverUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'bps',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'expiration',
				type: 'uint256',
			},
		],
		name: 'FeeReductionConfigured',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'redeemer',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'contract IERC20',
				name: 'collateralToken',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'parentCollectionId',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'conditionId',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'indexSets',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'payout',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'fee',
				type: 'uint256',
			},
		],
		name: 'PayoutRedemption',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'stakeholder',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'contract IERC20',
				name: 'collateralToken',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'parentCollectionId',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'conditionId',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'partition',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'PositionSplit',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'stakeholder',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'contract IERC20',
				name: 'collateralToken',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'parentCollectionId',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'conditionId',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'partition',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'PositionsMerge',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'previousAdminRole',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'newAdminRole',
				type: 'bytes32',
			},
		],
		name: 'RoleAdminChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'sender',
				type: 'address',
			},
		],
		name: 'RoleGranted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'sender',
				type: 'address',
			},
		],
		name: 'RoleRevoked',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'ids',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'values',
				type: 'uint256[]',
			},
		],
		name: 'TransferBatch',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
		],
		name: 'TransferSingle',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'string',
				name: 'value',
				type: 'string',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
		],
		name: 'URI',
		type: 'event',
	},
	{
		inputs: [],
		name: 'ADMIN_ROLE',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'DEFAULT_ADMIN_ROLE',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'OPERATOR_ROLE',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'WHITELIST_ROLE',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
		],
		name: 'balanceOf',
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
				internalType: 'address[]',
				name: 'accounts',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'ids',
				type: 'uint256[]',
			},
		],
		name: 'balanceOfBatch',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'newFeeBps',
				type: 'uint256',
			},
		],
		name: 'configureFeeBps',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newReceiver',
				type: 'address',
			},
		],
		name: 'configureFeeReceiver',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'percent',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'expiration',
				type: 'uint256',
			},
		],
		name: 'configureFeeReduction',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'account',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'percent',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expiration',
						type: 'uint256',
					},
				],
				internalType: 'struct FeeManager.FeeReductionMsg',
				name: 'reductionMsg',
				type: 'tuple',
			},
			{
				internalType: 'bytes',
				name: 'signature',
				type: 'bytes',
			},
		],
		name: 'configureFeeReductionWithSig',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'feeBps',
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
		name: 'feeReceiver',
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
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'feeReductions',
		outputs: [
			{
				internalType: 'uint256',
				name: 'percent',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'expiration',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'parentCollectionId',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'conditionId',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'indexSet',
				type: 'uint256',
			},
		],
		name: 'getCollectionId',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'oracle',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'questionId',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'outcomeSlotCount',
				type: 'uint256',
			},
		],
		name: 'getConditionId',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'conditionId',
				type: 'bytes32',
			},
		],
		name: 'getOutcomeSlotCount',
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
				internalType: 'contract IERC20',
				name: 'collateralToken',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'collectionId',
				type: 'bytes32',
			},
		],
		name: 'getPositionId',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
		],
		name: 'getRoleAdmin',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newAdmin',
				type: 'address',
			},
		],
		name: 'grantAdmin',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newOperator',
				type: 'address',
			},
		],
		name: 'grantOperator',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'grantRole',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_whitelist',
				type: 'address',
			},
		],
		name: 'grantWhitelist',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'hasRole',
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
				components: [
					{
						internalType: 'address',
						name: 'account',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'percent',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expiration',
						type: 'uint256',
					},
				],
				internalType: 'struct FeeManager.FeeReductionMsg',
				name: 'reductionMsg',
				type: 'tuple',
			},
		],
		name: 'hashReductionMsg',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'admin',
				type: 'address',
			},
		],
		name: 'isAdmin',
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
				name: 'account',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
		],
		name: 'isApprovedForAll',
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
				name: 'guardian',
				type: 'address',
			},
		],
		name: 'isOperator',
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
				name: 'sender',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'recipient',
				type: 'address',
			},
		],
		name: 'isTransferAllowed',
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
				name: 'whitelist',
				type: 'address',
			},
		],
		name: 'isWhitelist',
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
				internalType: 'contract IERC20',
				name: 'collateralToken',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'parentCollectionId',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'conditionId',
				type: 'bytes32',
			},
			{
				internalType: 'uint256[]',
				name: 'partition',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'mergePositions',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		name: 'payoutDenominator',
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
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'payoutNumerators',
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
				name: 'oracle',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'questionId',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'outcomeSlotCount',
				type: 'uint256',
			},
		],
		name: 'prepareCondition',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IERC20',
				name: 'collateralToken',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'parentCollectionId',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'conditionId',
				type: 'bytes32',
			},
			{
				internalType: 'uint256[]',
				name: 'indexSets',
				type: 'uint256[]',
			},
		],
		name: 'redeemPositions',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'renounceRole',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'questionId',
				type: 'bytes32',
			},
			{
				internalType: 'uint256[]',
				name: 'payouts',
				type: 'uint256[]',
			},
		],
		name: 'reportPayouts',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'revokeRole',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: 'ids',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'safeBatchTransferFrom',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'safeTransferFrom',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'approved',
				type: 'bool',
			},
		],
		name: 'setApprovalForAll',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IERC20',
				name: 'collateralToken',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'parentCollectionId',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'conditionId',
				type: 'bytes32',
			},
			{
				internalType: 'uint256[]',
				name: 'partition',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'splitPosition',
		stateMutability: 'nonpayable',
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
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'uri',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const
const CONDITIONAL_TOKENS: Contract<typeof abi> = {
	name: 'Conditional Tokens',
	address: '0x79286025f402b685b77d8094d449860467eeda19',
	is_deprecated: false,
	created_at: 1735558133,
	abi: abi,
}
export default CONDITIONAL_TOKENS
