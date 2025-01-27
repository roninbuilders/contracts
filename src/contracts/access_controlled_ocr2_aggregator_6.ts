import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'contract LinkTokenInterface',
				name: '_link',
				type: 'address',
			},
			{
				internalType: 'int192',
				name: '_minAnswer',
				type: 'int192',
			},
			{
				internalType: 'int192',
				name: '_maxAnswer',
				type: 'int192',
			},
			{
				internalType: 'contract AccessControllerInterface',
				name: '_billingAccessController',
				type: 'address',
			},
			{
				internalType: 'contract AccessControllerInterface',
				name: '_requesterAccessController',
				type: 'address',
			},
			{
				internalType: 'uint8',
				name: '_decimals',
				type: 'uint8',
			},
			{
				internalType: 'string',
				name: 'description',
				type: 'string',
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
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
		],
		name: 'AddedAccess',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'int256',
				name: 'current',
				type: 'int256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'roundId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'updatedAt',
				type: 'uint256',
			},
		],
		name: 'AnswerUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract AccessControllerInterface',
				name: 'old',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'contract AccessControllerInterface',
				name: 'current',
				type: 'address',
			},
		],
		name: 'BillingAccessControllerSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint32',
				name: 'maximumGasPriceGwei',
				type: 'uint32',
			},
			{
				indexed: false,
				internalType: 'uint32',
				name: 'reasonableGasPriceGwei',
				type: 'uint32',
			},
			{
				indexed: false,
				internalType: 'uint32',
				name: 'observationPaymentGjuels',
				type: 'uint32',
			},
			{
				indexed: false,
				internalType: 'uint32',
				name: 'transmissionPaymentGjuels',
				type: 'uint32',
			},
			{
				indexed: false,
				internalType: 'uint24',
				name: 'accountingGas',
				type: 'uint24',
			},
		],
		name: 'BillingSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [],
		name: 'CheckAccessDisabled',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [],
		name: 'CheckAccessEnabled',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint32',
				name: 'previousConfigBlockNumber',
				type: 'uint32',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'configDigest',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint64',
				name: 'configCount',
				type: 'uint64',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'signers',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'transmitters',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint8',
				name: 'f',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'onchainConfig',
				type: 'bytes',
			},
			{
				indexed: false,
				internalType: 'uint64',
				name: 'offchainConfigVersion',
				type: 'uint64',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'offchainConfig',
				type: 'bytes',
			},
		],
		name: 'ConfigSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'contract LinkTokenInterface',
				name: 'oldLinkToken',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'contract LinkTokenInterface',
				name: 'newLinkToken',
				type: 'address',
			},
		],
		name: 'LinkTokenSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'roundId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'startedBy',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'startedAt',
				type: 'uint256',
			},
		],
		name: 'NewRound',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint32',
				name: 'aggregatorRoundId',
				type: 'uint32',
			},
			{
				indexed: false,
				internalType: 'int192',
				name: 'answer',
				type: 'int192',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'transmitter',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint32',
				name: 'observationsTimestamp',
				type: 'uint32',
			},
			{
				indexed: false,
				internalType: 'int192[]',
				name: 'observations',
				type: 'int192[]',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'observers',
				type: 'bytes',
			},
			{
				indexed: false,
				internalType: 'int192',
				name: 'juelsPerFeeCoin',
				type: 'int192',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'configDigest',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint40',
				name: 'epochAndRound',
				type: 'uint40',
			},
		],
		name: 'NewTransmission',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'transmitter',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'payee',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'contract LinkTokenInterface',
				name: 'linkToken',
				type: 'address',
			},
		],
		name: 'OraclePaid',
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
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
		],
		name: 'OwnershipTransferRequested',
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
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'transmitter',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'current',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'proposed',
				type: 'address',
			},
		],
		name: 'PayeeshipTransferRequested',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'transmitter',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'previous',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'current',
				type: 'address',
			},
		],
		name: 'PayeeshipTransferred',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
		],
		name: 'RemovedAccess',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract AccessControllerInterface',
				name: 'old',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'contract AccessControllerInterface',
				name: 'current',
				type: 'address',
			},
		],
		name: 'RequesterAccessControllerSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'requester',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'configDigest',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint32',
				name: 'epoch',
				type: 'uint32',
			},
			{
				indexed: false,
				internalType: 'uint8',
				name: 'round',
				type: 'uint8',
			},
		],
		name: 'RoundRequested',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'configDigest',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint32',
				name: 'epoch',
				type: 'uint32',
			},
		],
		name: 'Transmitted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'contract AggregatorValidatorInterface',
				name: 'previousValidator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint32',
				name: 'previousGasLimit',
				type: 'uint32',
			},
			{
				indexed: true,
				internalType: 'contract AggregatorValidatorInterface',
				name: 'currentValidator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint32',
				name: 'currentGasLimit',
				type: 'uint32',
			},
		],
		name: 'ValidatorConfigSet',
		type: 'event',
	},
	{
		inputs: [],
		name: 'acceptOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'transmitter',
				type: 'address',
			},
		],
		name: 'acceptPayeeship',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_user',
				type: 'address',
			},
		],
		name: 'addAccess',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'checkEnabled',
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
		inputs: [],
		name: 'decimals',
		outputs: [
			{
				internalType: 'uint8',
				name: '',
				type: 'uint8',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'description',
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
	{
		inputs: [],
		name: 'disableAccessCheck',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'enableAccessCheck',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_roundId',
				type: 'uint256',
			},
		],
		name: 'getAnswer',
		outputs: [
			{
				internalType: 'int256',
				name: '',
				type: 'int256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getBilling',
		outputs: [
			{
				internalType: 'uint32',
				name: 'maximumGasPriceGwei',
				type: 'uint32',
			},
			{
				internalType: 'uint32',
				name: 'reasonableGasPriceGwei',
				type: 'uint32',
			},
			{
				internalType: 'uint32',
				name: 'observationPaymentGjuels',
				type: 'uint32',
			},
			{
				internalType: 'uint32',
				name: 'transmissionPaymentGjuels',
				type: 'uint32',
			},
			{
				internalType: 'uint24',
				name: 'accountingGas',
				type: 'uint24',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getBillingAccessController',
		outputs: [
			{
				internalType: 'contract AccessControllerInterface',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getLinkToken',
		outputs: [
			{
				internalType: 'contract LinkTokenInterface',
				name: 'linkToken',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getRequesterAccessController',
		outputs: [
			{
				internalType: 'contract AccessControllerInterface',
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
				internalType: 'uint80',
				name: '_roundId',
				type: 'uint80',
			},
		],
		name: 'getRoundData',
		outputs: [
			{
				internalType: 'uint80',
				name: 'roundId',
				type: 'uint80',
			},
			{
				internalType: 'int256',
				name: 'answer',
				type: 'int256',
			},
			{
				internalType: 'uint256',
				name: 'startedAt',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'updatedAt',
				type: 'uint256',
			},
			{
				internalType: 'uint80',
				name: 'answeredInRound',
				type: 'uint80',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_roundId',
				type: 'uint256',
			},
		],
		name: 'getTimestamp',
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
		name: 'getTransmitters',
		outputs: [
			{
				internalType: 'address[]',
				name: '',
				type: 'address[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getValidatorConfig',
		outputs: [
			{
				internalType: 'contract AggregatorValidatorInterface',
				name: 'validator',
				type: 'address',
			},
			{
				internalType: 'uint32',
				name: 'gasLimit',
				type: 'uint32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_user',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: '_calldata',
				type: 'bytes',
			},
		],
		name: 'hasAccess',
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
		inputs: [],
		name: 'latestAnswer',
		outputs: [
			{
				internalType: 'int256',
				name: '',
				type: 'int256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'latestConfigDetails',
		outputs: [
			{
				internalType: 'uint32',
				name: 'configCount',
				type: 'uint32',
			},
			{
				internalType: 'uint32',
				name: 'blockNumber',
				type: 'uint32',
			},
			{
				internalType: 'bytes32',
				name: 'configDigest',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'latestConfigDigestAndEpoch',
		outputs: [
			{
				internalType: 'bool',
				name: 'scanLogs',
				type: 'bool',
			},
			{
				internalType: 'bytes32',
				name: 'configDigest',
				type: 'bytes32',
			},
			{
				internalType: 'uint32',
				name: 'epoch',
				type: 'uint32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'latestRound',
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
		name: 'latestRoundData',
		outputs: [
			{
				internalType: 'uint80',
				name: 'roundId',
				type: 'uint80',
			},
			{
				internalType: 'int256',
				name: 'answer',
				type: 'int256',
			},
			{
				internalType: 'uint256',
				name: 'startedAt',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'updatedAt',
				type: 'uint256',
			},
			{
				internalType: 'uint80',
				name: 'answeredInRound',
				type: 'uint80',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'latestTimestamp',
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
		name: 'latestTransmissionDetails',
		outputs: [
			{
				internalType: 'bytes32',
				name: 'configDigest',
				type: 'bytes32',
			},
			{
				internalType: 'uint32',
				name: 'epoch',
				type: 'uint32',
			},
			{
				internalType: 'uint8',
				name: 'round',
				type: 'uint8',
			},
			{
				internalType: 'int192',
				name: 'latestAnswer_',
				type: 'int192',
			},
			{
				internalType: 'uint64',
				name: 'latestTimestamp_',
				type: 'uint64',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'linkAvailableForPayment',
		outputs: [
			{
				internalType: 'int256',
				name: 'availableBalance',
				type: 'int256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'maxAnswer',
		outputs: [
			{
				internalType: 'int192',
				name: '',
				type: 'int192',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'minAnswer',
		outputs: [
			{
				internalType: 'int192',
				name: '',
				type: 'int192',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'transmitterAddress',
				type: 'address',
			},
		],
		name: 'oracleObservationCount',
		outputs: [
			{
				internalType: 'uint32',
				name: '',
				type: 'uint32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'transmitterAddress',
				type: 'address',
			},
		],
		name: 'owedPayment',
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
		name: 'owner',
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
				name: '_user',
				type: 'address',
			},
		],
		name: 'removeAccess',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'requestNewRound',
		outputs: [
			{
				internalType: 'uint80',
				name: '',
				type: 'uint80',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint32',
				name: 'maximumGasPriceGwei',
				type: 'uint32',
			},
			{
				internalType: 'uint32',
				name: 'reasonableGasPriceGwei',
				type: 'uint32',
			},
			{
				internalType: 'uint32',
				name: 'observationPaymentGjuels',
				type: 'uint32',
			},
			{
				internalType: 'uint32',
				name: 'transmissionPaymentGjuels',
				type: 'uint32',
			},
			{
				internalType: 'uint24',
				name: 'accountingGas',
				type: 'uint24',
			},
		],
		name: 'setBilling',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract AccessControllerInterface',
				name: '_billingAccessController',
				type: 'address',
			},
		],
		name: 'setBillingAccessController',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'signers',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: 'transmitters',
				type: 'address[]',
			},
			{
				internalType: 'uint8',
				name: 'f',
				type: 'uint8',
			},
			{
				internalType: 'bytes',
				name: 'onchainConfig',
				type: 'bytes',
			},
			{
				internalType: 'uint64',
				name: 'offchainConfigVersion',
				type: 'uint64',
			},
			{
				internalType: 'bytes',
				name: 'offchainConfig',
				type: 'bytes',
			},
		],
		name: 'setConfig',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract LinkTokenInterface',
				name: 'linkToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'recipient',
				type: 'address',
			},
		],
		name: 'setLinkToken',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'transmitters',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: 'payees',
				type: 'address[]',
			},
		],
		name: 'setPayees',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract AccessControllerInterface',
				name: 'requesterAccessController',
				type: 'address',
			},
		],
		name: 'setRequesterAccessController',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract AggregatorValidatorInterface',
				name: 'newValidator',
				type: 'address',
			},
			{
				internalType: 'uint32',
				name: 'newGasLimit',
				type: 'uint32',
			},
		],
		name: 'setValidatorConfig',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'transmitter',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'proposed',
				type: 'address',
			},
		],
		name: 'transferPayeeship',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32[3]',
				name: 'reportContext',
				type: 'bytes32[3]',
			},
			{
				internalType: 'bytes',
				name: 'report',
				type: 'bytes',
			},
			{
				internalType: 'bytes32[]',
				name: 'rs',
				type: 'bytes32[]',
			},
			{
				internalType: 'bytes32[]',
				name: 'ss',
				type: 'bytes32[]',
			},
			{
				internalType: 'bytes32',
				name: 'rawVs',
				type: 'bytes32',
			},
		],
		name: 'transmit',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'typeAndVersion',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [],
		name: 'version',
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
				name: 'recipient',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'withdrawFunds',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'transmitter',
				type: 'address',
			},
		],
		name: 'withdrawPayment',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const ACCESS_CONTROLLED_OCR2_AGGREGATOR_6: Contract<typeof abi> = {
	name: 'Access Controlled OCR2 Aggregator',
	address: '0xd07c6bf0c6c57d3eb3d77733fa650b2a58a840f2',
	is_deprecated: false,
	created_at: 1736951130,
	abi: abi,
}
export default ACCESS_CONTROLLED_OCR2_AGGREGATOR_6
