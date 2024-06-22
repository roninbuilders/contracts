import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'ErrCallPrecompiled',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrCallerMustBeJailedInTheCurrentPeriod',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrCannotSlashAValidatorTwiceOrSlashMoreThanOneValidatorInOneBlock',
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
		inputs: [],
		name: 'ErrEvidenceAlreadySubmitted',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInsufficientCreditScoreToBailOut',
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
		name: 'ErrInvalidCreditScoreConfig',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidCutOffPercentageConfig',
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
		name: 'ErrInvalidThreshold',
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
		name: 'ErrUnregisteredPublicKey',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrValidatorHasBailedOutPreviously',
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
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'usedCreditScore',
				type: 'uint256',
			},
		],
		name: 'BailedOut',
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
				name: 'gainCreditScore',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'maxCreditScore',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'bailOutCostMultiplier',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'cutOffPercentageAfterBailout',
				type: 'uint256',
			},
		],
		name: 'CreditScoreConfigsUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address[]',
				name: 'cids',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'creditScores',
				type: 'uint256[]',
			},
		],
		name: 'CreditScoresUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'slashDoubleSignAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'doubleSigningJailUntilBlock',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'doubleSigningOffsetLimitBlock',
				type: 'uint256',
			},
		],
		name: 'DoubleSignSlashingConfigsUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'slashFastFinalityAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'fastFinalityJailUntilBlock',
				type: 'uint256',
			},
		],
		name: 'FastFinalitySlashingConfigsUpdated',
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
				internalType: 'uint256',
				name: 'slashRandomBeaconAmount',
				type: 'uint256',
			},
		],
		name: 'RandomBeaconSlashingConfigsUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'enum IBaseSlash.SlashType',
				name: 'slashType',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
		],
		name: 'Slashed',
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
				name: 'validatorId',
				type: 'address',
			},
		],
		name: 'SlashingBeaconSkipped',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'unavailabilityTier1Threshold',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'unavailabilityTier2Threshold',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'slashAmountForUnavailabilityTier2Threshold',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'jailDurationForUnavailabilityTier2Threshold',
				type: 'uint256',
			},
		],
		name: 'UnavailabilitySlashingConfigsUpdated',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
		],
		name: 'bailOut',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensus',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
		],
		name: 'checkBailedOutAtPeriod',
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
				name: 'consensus',
				type: 'address',
			},
		],
		name: 'currentUnavailabilityIndicator',
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
				name: 'validatorIds',
				type: 'address[]',
			},
		],
		name: 'execResetCreditScores',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'validatorIds',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
		],
		name: 'execUpdateCreditScores',
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
				internalType: 'address payable',
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
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
		],
		name: 'getCreditScore',
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
		name: 'getCreditScoreConfigs',
		outputs: [
			{
				internalType: 'uint256',
				name: 'gainCreditScore_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'maxCreditScore_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'bailOutCostMultiplier_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'cutOffPercentageAfterBailout_',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getDoubleSignSlashingConfigs',
		outputs: [
			{
				internalType: 'uint256',
				name: 'slashDoubleSignAmount_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'doubleSigningJailUntilBlock_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'doubleSigningOffsetLimitBlock_',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getFastFinalitySlashingConfigs',
		outputs: [
			{
				internalType: 'uint256',
				name: 'slashFastFinalityAmount_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'fastFinalityJailUntilBlock_',
				type: 'uint256',
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
		name: 'getManyCreditScores',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'resultList',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getRandomBeaconSlashingConfigs',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: '_slashAmount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: '_activatedAtPeriod',
						type: 'uint256',
					},
				],
				internalType: 'struct ISlashRandomBeacon.SlashRandomBeaconConfig',
				name: 'config',
				type: 'tuple',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensus',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
		],
		name: 'getUnavailabilityIndicator',
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
		name: 'getUnavailabilitySlashingConfigs',
		outputs: [
			{
				internalType: 'uint256',
				name: 'unavailabilityTier1Threshold_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'unavailabilityTier2Threshold_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'slashAmountForUnavailabilityTier2Threshold_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'jailDurationForUnavailabilityTier2Threshold_',
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
				internalType: 'address',
				name: '__maintenanceContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '__roninTrustedOrganizationContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '__roninGovernanceAdminContract',
				type: 'address',
			},
			{
				internalType: 'uint256[4]',
				name: '',
				type: 'uint256[4]',
			},
			{
				internalType: 'uint256[2]',
				name: '',
				type: 'uint256[2]',
			},
			{
				internalType: 'uint256[3]',
				name: '_doubleSignSlashingConfigs',
				type: 'uint256[3]',
			},
			{
				internalType: 'uint256[4]',
				name: '_unavailabilitySlashingConfigs',
				type: 'uint256[4]',
			},
			{
				internalType: 'uint256[4]',
				name: '_creditScoreConfigs',
				type: 'uint256[4]',
			},
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'roninGovernanceAdminContract',
				type: 'address',
			},
		],
		name: 'initializeV2',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'profileContract',
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
				name: 'randomBeaconContract',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'randomBeaconSlashAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'activatedAtPeriod',
				type: 'uint256',
			},
		],
		name: 'initializeV4',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'lastUnavailabilitySlashedBlock',
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
		name: 'precompileValidateDoubleSignAddress',
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
		inputs: [],
		name: 'precompileValidateFastFinalityAddress',
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
				name: '_gainScore',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_maxScore',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_bailOutMultiplier',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_cutOffPercentage',
				type: 'uint256',
			},
		],
		name: 'setCreditScoreConfigs',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_slashAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_jailUntilBlock',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_offsetLimitBlock',
				type: 'uint256',
			},
		],
		name: 'setDoubleSignSlashingConfigs',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'slashAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'jailUntilBlock',
				type: 'uint256',
			},
		],
		name: 'setFastFinalitySlashingConfigs',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'slashAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'activatedAtPeriod',
				type: 'uint256',
			},
		],
		name: 'setRandomBeaconSlashingConfigs',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tier1Threshold',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'tier2Threshold',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'slashAmountForTier2',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'jailDurationForTier2',
				type: 'uint256',
			},
		],
		name: 'setUnavailabilitySlashingConfigs',
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
				internalType: 'bytes',
				name: 'header1',
				type: 'bytes',
			},
			{
				internalType: 'bytes',
				name: 'header2',
				type: 'bytes',
			},
		],
		name: 'slashDoubleSign',
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
				internalType: 'bytes',
				name: 'voterPublicKey',
				type: 'bytes',
			},
			{
				internalType: 'uint256',
				name: 'targetBlockNumber',
				type: 'uint256',
			},
			{
				internalType: 'bytes32[2]',
				name: 'targetBlockHash',
				type: 'bytes32[2]',
			},
			{
				internalType: 'bytes[][2]',
				name: 'listOfPublicKey',
				type: 'bytes[][2]',
			},
			{
				internalType: 'bytes[2]',
				name: 'aggregatedSignature',
				type: 'bytes[2]',
			},
		],
		name: 'slashFastFinality',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'validatorId',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
		],
		name: 'slashRandomBeacon',
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
		name: 'slashUnavailability',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const SLASH_INDICATOR: Contract<typeof abi> = {
	name: 'Slash Indicator',
	address: '0xd503747234cd3179508831de24be8990f50ebfc8',
	is_deprecated: false,
	created_at: 1718685429,
	abi: abi,
}
export default SLASH_INDICATOR
