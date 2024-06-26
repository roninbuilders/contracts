import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'payable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'AgreementExpiredOrNotYetStarted',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'steward',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'agreementHash',
				type: 'bytes32',
			},
		],
		name: 'AlreadyAssignedFor',
		type: 'error',
	},
	{
		inputs: [],
		name: 'AlreadyClaimed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'AlreadySubmited',
		type: 'error',
	},
	{
		inputs: [],
		name: 'AlreadyTerminated',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ExceedsMaxLevel',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ExpiredAgreement',
		type: 'error',
	},
	{
		inputs: [],
		name: 'FixedSalaryInvalidConfig',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'required',
				type: 'uint256',
			},
		],
		name: 'InsufficientAmount',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidConfig',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidDuration',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
		],
		name: 'InvalidOwnerOf',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidRatio',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidShortString',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'signer',
				type: 'address',
			},
		],
		name: 'InvalidSignature',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
		],
		name: 'NFTIsForbidden',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NativeValueShouldBeZero',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NullAddress',
		type: 'error',
	},
	{
		inputs: [],
		name: 'OwnerIsSteward',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
		],
		name: 'PayoutTokenIsForbidden',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RatioExceedMaxPercentage',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RewardSharingInvalidConfig',
		type: 'error',
	},
	{
		inputs: [],
		name: 'SignatureExpired',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes',
				name: 'signature',
				type: 'bytes',
			},
		],
		name: 'SignatureUsed',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'str',
				type: 'string',
			},
		],
		name: 'StringTooLong',
		type: 'error',
	},
	{
		inputs: [],
		name: 'TerminationTooEarly',
		type: 'error',
	},
	{
		inputs: [],
		name: 'Unauthorized',
		type: 'error',
	},
	{
		inputs: [],
		name: 'UnexistAgreement',
		type: 'error',
	},
	{
		inputs: [],
		name: 'UnknownSteward',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'submitter',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'agreementHash',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'depositAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint64',
				name: 'endAt',
				type: 'uint64',
			},
		],
		name: 'AgreementExtended',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'submitter',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'agreementHash',
				type: 'bytes32',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'owner',
						type: 'address',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Payout',
						name: 'payoutOption',
						type: 'uint8',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Permission',
						name: 'extensionRule',
						type: 'uint8',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Permission',
						name: 'earlyTermination',
						type: 'uint8',
					},
					{
						components: [
							{
								internalType: 'enum ILandDelegationV2Struct.RecipientOpt',
								name: 'recipientOpt',
								type: 'uint8',
							},
							{
								internalType: 'uint256',
								name: 'ratio',
								type: 'uint256',
							},
						],
						internalType: 'struct ILandDelegationV2Struct.Commission[]',
						name: 'payouts',
						type: 'tuple[]',
					},
					{
						internalType: 'uint256',
						name: 'salary',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'level',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'payoutToken',
						type: 'address',
					},
					{
						internalType: 'contract IERC721',
						name: 'nft',
						type: 'address',
					},
					{
						internalType: 'uint256[]',
						name: 'ids',
						type: 'uint256[]',
					},
					{
						internalType: 'address[]',
						name: 'acceptances',
						type: 'address[]',
					},
					{
						internalType: 'uint64',
						name: 'duration',
						type: 'uint64',
					},
					{
						internalType: 'string',
						name: 'agreementCode',
						type: 'string',
					},
				],
				indexed: false,
				internalType: 'struct ILandDelegationV2Struct.DelegationAgreement',
				name: 'agreement',
				type: 'tuple',
			},
		],
		name: 'AgreementSubmitted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'submitter',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'agreementHash',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'terminatedAt',
				type: 'uint256',
			},
		],
		name: 'AgreementTerminated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [],
		name: 'EIP712DomainChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'caller',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'payee',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'agreementHash',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'payout',
				type: 'uint256',
			},
		],
		name: 'EarningsClaimed',
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
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'maxLevel',
				type: 'uint256',
			},
		],
		name: 'MaxLevelUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'Paused',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'refundAddr',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'payoutToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'refundAmount',
				type: 'uint256',
			},
		],
		name: 'Refunded',
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
				indexed: false,
				internalType: 'uint256',
				name: 'newTerminationMinDuration',
				type: 'uint256',
			},
		],
		name: 'TerminationMinDurationUpdated',
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
				name: 'token',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'isBlacklisted',
				type: 'bool',
			},
		],
		name: 'TokenStatusUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'Unpaused',
		type: 'event',
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
		name: 'MAX_PERCENTAGE',
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
		name: 'NATIVE_TOKEN',
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
		name: 'PAUSER_ROLE',
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
		name: 'eip712Domain',
		outputs: [
			{
				internalType: 'bytes1',
				name: 'fields',
				type: 'bytes1',
			},
			{
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'version',
				type: 'string',
			},
			{
				internalType: 'uint256',
				name: 'chainId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'verifyingContract',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'salt',
				type: 'bytes32',
			},
			{
				internalType: 'uint256[]',
				name: 'extensions',
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
				name: 'agreementHash',
				type: 'bytes32',
			},
			{
				internalType: 'uint64',
				name: 'duration',
				type: 'uint64',
			},
			{
				internalType: 'uint64',
				name: 'validUntil',
				type: 'uint64',
			},
			{
				internalType: 'bytes',
				name: 'approvalSig',
				type: 'bytes',
			},
		],
		name: 'extendAgreement',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IERC721',
				name: 'nft',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
		],
		name: 'getAgreementOf',
		outputs: [
			{
				internalType: 'bytes32',
				name: 'agreementHash',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getAllAgreementHashes',
		outputs: [
			{
				internalType: 'bytes32[]',
				name: 'agreementHashes',
				type: 'bytes32[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'steward',
				type: 'address',
			},
		],
		name: 'getAssignedAgreements',
		outputs: [
			{
				internalType: 'bytes32[]',
				name: 'agreementHashes',
				type: 'bytes32[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'agreementHash',
				type: 'bytes32',
			},
		],
		name: 'getCurrentState',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'owner',
						type: 'address',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Payout',
						name: 'payoutOption',
						type: 'uint8',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Permission',
						name: 'extensionRule',
						type: 'uint8',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Permission',
						name: 'earlyTermination',
						type: 'uint8',
					},
					{
						internalType: 'uint64',
						name: 'terminatedAt',
						type: 'uint64',
					},
					{
						internalType: 'uint64',
						name: 'submittedAt',
						type: 'uint64',
					},
					{
						internalType: 'address',
						name: 'steward',
						type: 'address',
					},
					{
						internalType: 'uint64',
						name: 'endAt',
						type: 'uint64',
					},
					{
						internalType: 'address',
						name: 'payoutToken',
						type: 'address',
					},
					{
						internalType: 'contract IERC721',
						name: 'nft',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'salary',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'released',
						type: 'uint256',
					},
					{
						internalType: 'uint256[]',
						name: 'ids',
						type: 'uint256[]',
					},
				],
				internalType: 'struct ILandDelegationV2Struct.RealTimeAgreement',
				name: 'realTimeAgreement',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getMaxLevel',
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
				components: [
					{
						internalType: 'address',
						name: 'owner',
						type: 'address',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Payout',
						name: 'payoutOption',
						type: 'uint8',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Permission',
						name: 'extensionRule',
						type: 'uint8',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Permission',
						name: 'earlyTermination',
						type: 'uint8',
					},
					{
						components: [
							{
								internalType: 'enum ILandDelegationV2Struct.RecipientOpt',
								name: 'recipientOpt',
								type: 'uint8',
							},
							{
								internalType: 'uint256',
								name: 'ratio',
								type: 'uint256',
							},
						],
						internalType: 'struct ILandDelegationV2Struct.Commission[]',
						name: 'payouts',
						type: 'tuple[]',
					},
					{
						internalType: 'uint256',
						name: 'salary',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'level',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'payoutToken',
						type: 'address',
					},
					{
						internalType: 'contract IERC721',
						name: 'nft',
						type: 'address',
					},
					{
						internalType: 'uint256[]',
						name: 'ids',
						type: 'uint256[]',
					},
					{
						internalType: 'address[]',
						name: 'acceptances',
						type: 'address[]',
					},
					{
						internalType: 'uint64',
						name: 'duration',
						type: 'uint64',
					},
					{
						internalType: 'string',
						name: 'agreementCode',
						type: 'string',
					},
				],
				internalType: 'struct ILandDelegationV2Struct.DelegationAgreement',
				name: 'agreement',
				type: 'tuple',
			},
		],
		name: 'getStructAgreementHash',
		outputs: [
			{
				internalType: 'bytes32',
				name: 'structHash',
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
				name: 'agreementHash',
				type: 'bytes32',
			},
			{
				internalType: 'uint64',
				name: 'duration',
				type: 'uint64',
			},
			{
				internalType: 'uint256',
				name: 'depositAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint64',
				name: 'validUntil',
				type: 'uint64',
			},
		],
		name: 'getStructExtendAgreementHash',
		outputs: [
			{
				internalType: 'bytes32',
				name: 'structHash',
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
				name: 'agreementHash',
				type: 'bytes32',
			},
			{
				internalType: 'uint64',
				name: 'validUntil',
				type: 'uint64',
			},
		],
		name: 'getStructTerminateAgreementHash',
		outputs: [
			{
				internalType: 'bytes32',
				name: 'structHash',
				type: 'bytes32',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getTerminationMinDuration',
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
				name: 'token',
				type: 'address',
			},
		],
		name: 'getTokenStatus',
		outputs: [
			{
				internalType: 'bool',
				name: 'isBlacklisted',
				type: 'bool',
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
				name: 'admin',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'maxLevel',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'terminationMinDuration',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: 'pausers',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: 'operators',
				type: 'address[]',
			},
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'pause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'paused',
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
				name: 'maxLevel',
				type: 'uint256',
			},
		],
		name: 'setMaxLevel',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'terminationMinDuration',
				type: 'uint256',
			},
		],
		name: 'setTerminationMinDuration',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'shouldBlacklist',
				type: 'bool',
			},
		],
		name: 'setTokenStatus',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'owner',
						type: 'address',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Payout',
						name: 'payoutOption',
						type: 'uint8',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Permission',
						name: 'extensionRule',
						type: 'uint8',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Permission',
						name: 'earlyTermination',
						type: 'uint8',
					},
					{
						components: [
							{
								internalType: 'enum ILandDelegationV2Struct.RecipientOpt',
								name: 'recipientOpt',
								type: 'uint8',
							},
							{
								internalType: 'uint256',
								name: 'ratio',
								type: 'uint256',
							},
						],
						internalType: 'struct ILandDelegationV2Struct.Commission[]',
						name: 'payouts',
						type: 'tuple[]',
					},
					{
						internalType: 'uint256',
						name: 'salary',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'level',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'payoutToken',
						type: 'address',
					},
					{
						internalType: 'contract IERC721',
						name: 'nft',
						type: 'address',
					},
					{
						internalType: 'uint256[]',
						name: 'ids',
						type: 'uint256[]',
					},
					{
						internalType: 'address[]',
						name: 'acceptances',
						type: 'address[]',
					},
					{
						internalType: 'uint64',
						name: 'duration',
						type: 'uint64',
					},
					{
						internalType: 'string',
						name: 'agreementCode',
						type: 'string',
					},
				],
				internalType: 'struct ILandDelegationV2Struct.DelegationAgreement',
				name: 'agreement',
				type: 'tuple',
			},
			{
				internalType: 'address',
				name: 'steward',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'ownerSig',
				type: 'bytes',
			},
			{
				internalType: 'bytes',
				name: 'stewardSig',
				type: 'bytes',
			},
		],
		name: 'submitDelegationAgreement',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'owner',
						type: 'address',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Payout',
						name: 'payoutOption',
						type: 'uint8',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Permission',
						name: 'extensionRule',
						type: 'uint8',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Permission',
						name: 'earlyTermination',
						type: 'uint8',
					},
					{
						internalType: 'uint64',
						name: 'terminatedAt',
						type: 'uint64',
					},
					{
						internalType: 'uint64',
						name: 'submittedAt',
						type: 'uint64',
					},
					{
						internalType: 'address',
						name: 'steward',
						type: 'address',
					},
					{
						internalType: 'uint64',
						name: 'endAt',
						type: 'uint64',
					},
					{
						internalType: 'address',
						name: 'payoutToken',
						type: 'address',
					},
					{
						internalType: 'contract IERC721',
						name: 'nft',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'salary',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'released',
						type: 'uint256',
					},
					{
						internalType: 'uint256[]',
						name: 'ids',
						type: 'uint256[]',
					},
				],
				internalType: 'struct ILandDelegationV2Struct.RealTimeAgreement',
				name: 'currentState',
				type: 'tuple',
			},
		],
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
				internalType: 'bytes32',
				name: 'agreementHash',
				type: 'bytes32',
			},
			{
				internalType: 'uint64',
				name: 'validUntil',
				type: 'uint64',
			},
			{
				internalType: 'bytes',
				name: 'approvalSig',
				type: 'bytes',
			},
		],
		name: 'terminateAgreement',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'unpause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'owner',
						type: 'address',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Payout',
						name: 'payoutOption',
						type: 'uint8',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Permission',
						name: 'extensionRule',
						type: 'uint8',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Permission',
						name: 'earlyTermination',
						type: 'uint8',
					},
					{
						components: [
							{
								internalType: 'enum ILandDelegationV2Struct.RecipientOpt',
								name: 'recipientOpt',
								type: 'uint8',
							},
							{
								internalType: 'uint256',
								name: 'ratio',
								type: 'uint256',
							},
						],
						internalType: 'struct ILandDelegationV2Struct.Commission[]',
						name: 'payouts',
						type: 'tuple[]',
					},
					{
						internalType: 'uint256',
						name: 'salary',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'level',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'payoutToken',
						type: 'address',
					},
					{
						internalType: 'contract IERC721',
						name: 'nft',
						type: 'address',
					},
					{
						internalType: 'uint256[]',
						name: 'ids',
						type: 'uint256[]',
					},
					{
						internalType: 'address[]',
						name: 'acceptances',
						type: 'address[]',
					},
					{
						internalType: 'uint64',
						name: 'duration',
						type: 'uint64',
					},
					{
						internalType: 'string',
						name: 'agreementCode',
						type: 'string',
					},
				],
				internalType: 'struct ILandDelegationV2Struct.DelegationAgreement',
				name: 'agreement',
				type: 'tuple',
			},
		],
		name: 'validateAgreement',
		outputs: [
			{
				internalType: 'bool',
				name: 'isValid',
				type: 'bool',
			},
			{
				internalType: 'bytes',
				name: 'reason',
				type: 'bytes',
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
						name: 'owner',
						type: 'address',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Payout',
						name: 'payoutOption',
						type: 'uint8',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Permission',
						name: 'extensionRule',
						type: 'uint8',
					},
					{
						internalType: 'enum ILandDelegationV2Struct.Permission',
						name: 'earlyTermination',
						type: 'uint8',
					},
					{
						components: [
							{
								internalType: 'enum ILandDelegationV2Struct.RecipientOpt',
								name: 'recipientOpt',
								type: 'uint8',
							},
							{
								internalType: 'uint256',
								name: 'ratio',
								type: 'uint256',
							},
						],
						internalType: 'struct ILandDelegationV2Struct.Commission[]',
						name: 'payouts',
						type: 'tuple[]',
					},
					{
						internalType: 'uint256',
						name: 'salary',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'level',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'payoutToken',
						type: 'address',
					},
					{
						internalType: 'contract IERC721',
						name: 'nft',
						type: 'address',
					},
					{
						internalType: 'uint256[]',
						name: 'ids',
						type: 'uint256[]',
					},
					{
						internalType: 'address[]',
						name: 'acceptances',
						type: 'address[]',
					},
					{
						internalType: 'uint64',
						name: 'duration',
						type: 'uint64',
					},
					{
						internalType: 'string',
						name: 'agreementCode',
						type: 'string',
					},
				],
				internalType: 'struct ILandDelegationV2Struct.DelegationAgreement',
				name: 'agreement',
				type: 'tuple',
			},
			{
				internalType: 'address',
				name: 'steward',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'submitter',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'nativeAmount',
				type: 'uint256',
			},
		],
		name: 'validateAndCheckSubmissionEligibility',
		outputs: [
			{
				internalType: 'bool',
				name: 'isValid',
				type: 'bool',
			},
			{
				internalType: 'bytes',
				name: 'reason',
				type: 'bytes',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const
const LAND_DELEGATION_LOGIC: Contract<typeof abi> = {
	name: 'Land Delegation Logic',
	address: '0x8d34da00d712a5aa5444f7619ac6390abfb6e9e4',
	is_deprecated: false,
	created_at: 1705558627,
	abi: abi,
}
export default LAND_DELEGATION_LOGIC
