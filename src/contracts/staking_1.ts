import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'admin',
				type: 'address',
			},
		],
		name: 'ErrAdminOfAnyActivePoolForbidden',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrCannotTransferRON',
		type: 'error',
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
		],
		name: 'ErrDuplicated',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'poolId',
				type: 'address',
			},
		],
		name: 'ErrInactivePool',
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
		inputs: [],
		name: 'ErrInsufficientDelegatingAmount',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInsufficientStakingAmount',
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
		inputs: [],
		name: 'ErrInvalidArrays',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidCommissionRate',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidPoolShare',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrMigrateWasAdminAlreadyDone',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrOnlyPoolAdminAllowed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrPoolAdminForbidden',
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
		inputs: [],
		name: 'ErrStakingAmountLeft',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrThreeInteractionAddrsNotEqual',
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
		inputs: [],
		name: 'ErrUndelegateTooEarly',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrUndelegateZeroAmount',
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
		inputs: [],
		name: 'ErrUnstakeTooEarly',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrUnstakeZeroAmount',
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
		inputs: [],
		name: 'ErrZeroValue',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'minRate',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'maxRate',
				type: 'uint256',
			},
		],
		name: 'CommissionRateRangeUpdated',
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
				internalType: 'uint256',
				name: 'minSecs',
				type: 'uint256',
			},
		],
		name: 'CooldownSecsToUndelegateUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'delegator',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'poolId',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'Delegated',
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
		inputs: [],
		name: 'MigrateWasAdminDisabled',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [],
		name: 'MigrateWasAdminFinished',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'threshold',
				type: 'uint256',
			},
		],
		name: 'MinValidatorStakingAmountUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'poolId',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'admin',
				type: 'address',
			},
		],
		name: 'PoolApproved',
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
				indexed: true,
				internalType: 'address',
				name: 'poolId',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'shares',
				type: 'uint256',
			},
		],
		name: 'PoolSharesUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address[]',
				name: 'poolIds',
				type: 'address[]',
			},
		],
		name: 'PoolsDeprecated',
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
				internalType: 'address[]',
				name: 'poolIds',
				type: 'address[]',
			},
		],
		name: 'PoolsUpdateConflicted',
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
				internalType: 'address[]',
				name: 'poolIds',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'rewards',
				type: 'uint256[]',
			},
		],
		name: 'PoolsUpdateFailed',
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
				internalType: 'address[]',
				name: 'poolIds',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'aRps',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'shares',
				type: 'uint256[]',
			},
		],
		name: 'PoolsUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'poolId',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'RewardClaimed',
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
				name: 'poolId',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'Staked',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'poolId',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'oldAdmin',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newAdmin',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'StakeholderChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'poolId',
				type: 'address',
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
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'contractBalance',
				type: 'uint256',
			},
		],
		name: 'StakingAmountDeductFailed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'poolId',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'admin',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'contractBalance',
				type: 'uint256',
			},
		],
		name: 'StakingAmountTransferFailed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'delegator',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'poolId',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'Undelegated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'poolId',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'Unstaked',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'poolId',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'debited',
				type: 'uint256',
			},
		],
		name: 'UserRewardUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'secs',
				type: 'uint256',
			},
		],
		name: 'WaitingSecsToRevokeUpdated',
		type: 'event',
	},
	{
		stateMutability: 'payable',
		type: 'fallback',
	},
	{
		inputs: [],
		name: 'DEFAULT_ADDITION_GAS',
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
		name: 'MIGRATOR_ROLE',
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
		name: 'PERIOD_DURATION',
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
				name: 'candidateAdmin',
				type: 'address',
			},
			{
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
			{
				internalType: 'address payable',
				name: 'treasuryAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'commissionRate',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'pubkey',
				type: 'bytes',
			},
			{
				internalType: 'bytes',
				name: 'proofOfPossession',
				type: 'bytes',
			},
		],
		name: 'applyValidatorCandidate',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus[]',
				name: 'consensusAddrs',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
		],
		name: 'bulkUndelegate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus[]',
				name: 'consensusAddrList',
				type: 'address[]',
			},
		],
		name: 'claimRewards',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'cooldownSecsToUndelegate',
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
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
		],
		name: 'delegate',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus[]',
				name: 'consensusAddrList',
				type: 'address[]',
			},
			{
				internalType: 'TConsensus',
				name: 'consensusAddrDst',
				type: 'address',
			},
		],
		name: 'delegateRewards',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'disableMigrateWasAdmin',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'poolId',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'currAdminAddr',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'newAdminAddr',
				type: 'address',
			},
		],
		name: 'execChangeAdminAddr',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'poolId',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'execDeductStakingAmount',
		outputs: [
			{
				internalType: 'uint256',
				name: 'actualDeductingAmount_',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'poolIds',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: 'newPeriod',
				type: 'uint256',
			},
		],
		name: 'execDeprecatePools',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'poolIds',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'rewards',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
		],
		name: 'execRecordRewards',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getCommissionRateRange',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
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
		inputs: [
			{
				internalType: 'TConsensus[]',
				name: 'consensusAddrs',
				type: 'address[]',
			},
		],
		name: 'getManySelfStakings',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'selfStakings_',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'poolIds',
				type: 'address[]',
			},
		],
		name: 'getManySelfStakingsById',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'selfStakings_',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus[]',
				name: 'consensusAddrs',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: 'userList',
				type: 'address[]',
			},
		],
		name: 'getManyStakingAmounts',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'stakingAmounts',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'poolIds',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: 'userList',
				type: 'address[]',
			},
		],
		name: 'getManyStakingAmountsById',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'stakingAmounts',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus[]',
				name: 'consensusAddrs',
				type: 'address[]',
			},
		],
		name: 'getManyStakingTotals',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'stakingAmounts_',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'poolIds',
				type: 'address[]',
			},
		],
		name: 'getManyStakingTotalsById',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'stakingAmounts_',
				type: 'uint256[]',
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
		name: 'getPoolAddressOf',
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
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
		],
		name: 'getPoolDetail',
		outputs: [
			{
				internalType: 'address',
				name: 'admin',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'stakingAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'stakingTotal',
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
				name: 'poolId',
				type: 'address',
			},
		],
		name: 'getPoolDetailById',
		outputs: [
			{
				internalType: 'address',
				name: 'admin',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'stakingAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'stakingTotal',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
		],
		name: 'getReward',
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
				name: 'user',
				type: 'address',
			},
			{
				internalType: 'TConsensus[]',
				name: 'consensusAddrs',
				type: 'address[]',
			},
		],
		name: 'getRewards',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'rewards_',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
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
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'index',
				type: 'uint256',
			},
		],
		name: 'getRoleMember',
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
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
		],
		name: 'getRoleMemberCount',
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
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
		],
		name: 'getStakingAmount',
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
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
		],
		name: 'getStakingTotal',
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
		outputs: [],
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
				internalType: 'address',
				name: '__validatorContract',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '__minValidatorStakingAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '__maxCommissionRate',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '__cooldownSecsToUndelegate',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '__waitingSecsToRevoke',
				type: 'uint256',
			},
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'initializeV2',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '__profileContract',
				type: 'address',
			},
		],
		name: 'initializeV3',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'admin',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'migrator',
				type: 'address',
			},
		],
		name: 'initializeV4',
		outputs: [],
		stateMutability: 'nonpayable',
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
		name: 'isAdminOfActivePool',
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
				internalType: 'address[]',
				name: 'poolIds',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: 'admins',
				type: 'address[]',
			},
			{
				internalType: 'bool[]',
				name: 'flags',
				type: 'bool[]',
			},
		],
		name: 'migrateWasAdmin',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'minValidatorStakingAmount',
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
				internalType: 'TConsensus',
				name: 'consensusAddrSrc',
				type: 'address',
			},
			{
				internalType: 'TConsensus',
				name: 'consensusAddrDst',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'redelegate',
		outputs: [],
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
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
		],
		name: 'requestEmergencyExit',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
		],
		name: 'requestRenounce',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'effectiveDaysOnwards',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'commissionRate',
				type: 'uint256',
			},
		],
		name: 'requestUpdateCommissionRate',
		outputs: [],
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
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'minRate',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'maxRate',
				type: 'uint256',
			},
		],
		name: 'setCommissionRateRange',
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
				name: 'cooldownSecs',
				type: 'uint256',
			},
		],
		name: 'setCooldownSecsToUndelegate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'threshold',
				type: 'uint256',
			},
		],
		name: 'setMinValidatorStakingAmount',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'secs',
				type: 'uint256',
			},
		],
		name: 'setWaitingSecsToRevoke',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
		],
		name: 'stake',
		outputs: [],
		stateMutability: 'payable',
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
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'undelegate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'unstake',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'waitingSecsToRevoke',
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
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const STAKING_1: Contract<typeof abi> = {
	name: 'Staking',
	address: '0x214f8bad047f74f8e41f8932c1a3a8906974dc90',
	is_deprecated: false,
	created_at: 1709535694,
	abi: abi,
}
export default STAKING_1
