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
		inputs: [],
		name: 'ErrInvalidRatios',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidSlash',
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
				name: 'validator',
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
				indexed: false,
				internalType: 'uint256',
				name: 'missingVotesRatioTier1',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'missingVotesRatioTier2',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'jailDurationForMissingVotesRatioTier2',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'skipBridgeOperatorSlashingThreshold',
				type: 'uint256',
			},
		],
		name: 'BridgeOperatorSlashingConfigsUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'bridgeVotingThreshold',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'bridgeVotingSlashAmount',
				type: 'uint256',
			},
		],
		name: 'BridgeVotingSlashingConfigsUpdated',
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
				name: 'validators',
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
				indexed: true,
				internalType: 'address',
				name: 'validator',
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
				internalType: 'address',
				name: '_consensusAddr',
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
				internalType: 'address',
				name: '_validator',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_period',
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
				internalType: 'address',
				name: '_validator',
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
				name: '_validators',
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
				internalType: 'address',
				name: '_consensusAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_tier',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_period',
				type: 'uint256',
			},
		],
		name: 'execSlashBridgeOperator',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getBridgeOperatorSlashingConfigs',
		outputs: [
			{
				internalType: 'uint256',
				name: 'missingVotesRatioTier1_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'missingVotesRatioTier2_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'jailDurationForMissingVotesRatioTier2_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'skipBridgeOperatorSlashingThreshold_',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getBridgeVotingSlashingConfigs',
		outputs: [
			{
				internalType: 'uint256',
				name: 'bridgeVotingThreshold_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'bridgeVotingSlashAmount_',
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
				internalType: 'address',
				name: '_validator',
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
				internalType: 'address[]',
				name: '_validators',
				type: 'address[]',
			},
		],
		name: 'getManyCreditScores',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '_resultList',
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
				name: '_validator',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_period',
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
				name: '_bridgeOperatorSlashingConfigs',
				type: 'uint256[4]',
			},
			{
				internalType: 'uint256[2]',
				name: '_bridgeVotingSlashingConfigs',
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
				internalType: 'uint256',
				name: '_ratioTier1',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_ratioTier2',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_jailDurationTier2',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_skipSlashingThreshold',
				type: 'uint256',
			},
		],
		name: 'setBridgeOperatorSlashingConfigs',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_threshold',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_slashAmount',
				type: 'uint256',
			},
		],
		name: 'setBridgeVotingSlashingConfigs',
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
				name: '_tier1Threshold',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_tier2Threshold',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_slashAmountForTier2Threshold',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_jailDurationForTier2Threshold',
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
				internalType: 'address',
				name: '_consensusAddr',
				type: 'address',
			},
		],
		name: 'slashBridgeVoting',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_consensusAddr',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: '_header1',
				type: 'bytes',
			},
			{
				internalType: 'bytes',
				name: '_header2',
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
				internalType: 'address',
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
				name: '_validatorAddr',
				type: 'address',
			},
		],
		name: 'slashUnavailability',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_validators',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: '_period',
				type: 'uint256',
			},
		],
		name: 'updateCreditScores',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const SLASH_INDICATOR_2: Contract<typeof abi> = {
	name: 'Slash Indicator',
	address: '0x440baf1c4b008ee4d617a83401f06aa80f5163e9',
	is_deprecated: false,
	created_at: 1697443059,
	abi: abi,
}
export default SLASH_INDICATOR_2
