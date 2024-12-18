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
		name: 'ErrCallerMustBeGovernanceAdminContract',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrCallerMustBeMaintenanceContract',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrCallerMustBeRoninTrustedOrgContract',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrCallerMustBeValidatorContract',
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
		name: 'MaintenanceContractUpdated',
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
		name: 'RoninGovernanceAdminContractUpdated',
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
		name: 'RoninTrustedOrganizationContractUpdated',
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
		name: 'maintenanceContract',
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
		name: 'roninGovernanceAdminContract',
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
		name: 'roninTrustedOrganizationContract',
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
				internalType: 'address',
				name: '_addr',
				type: 'address',
			},
		],
		name: 'setMaintenanceContract',
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
		name: 'setRoninGovernanceAdminContract',
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
		name: 'setRoninTrustedOrganizationContract',
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
] as const
const SLASH_INDICATOR_3: Contract<typeof abi> = {
	name: 'Slash Indicator',
	address: '0x056500e6028048db7fca81ac307008a9042605f3',
	is_deprecated: false,
	created_at: 1680774283,
	abi: abi,
}
export default SLASH_INDICATOR_3
