import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'AccessControlBadConfirmation',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'neededRole',
				type: 'bytes32',
			},
		],
		name: 'AccessControlUnauthorizedAccount',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'target',
				type: 'address',
			},
		],
		name: 'AddressEmptyCode',
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
		name: 'AddressInsufficientBalance',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'implementation',
				type: 'address',
			},
		],
		name: 'ERC1967InvalidImplementation',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ERC1967NonPayable',
		type: 'error',
	},
	{
		inputs: [],
		name: 'EnforcedPause',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ExpectedPause',
		type: 'error',
	},
	{
		inputs: [],
		name: 'FailedInnerCall',
		type: 'error',
	},
	{
		inputs: [],
		name: 'GachaFailed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidAddress',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidExternalGeneration',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidInitialization',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidInputs',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidItemContract',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidNFTContract',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidRecipient',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidRewardTable',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidRewardTableInput',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidSignature',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidTokenContract',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidValidatorContract',
		type: 'error',
	},
	{
		inputs: [],
		name: 'MainnetNotAllowed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NoValidatorContract',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NotInitializing',
		type: 'error',
	},
	{
		inputs: [],
		name: 'SignatureAlreadyUsed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'SignatureExpired',
		type: 'error',
	},
	{
		inputs: [],
		name: 'UUPSUnauthorizedCallContext',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'slot',
				type: 'bytes32',
			},
		],
		name: 'UUPSUnsupportedProxiableUUID',
		type: 'error',
	},
	{
		inputs: [],
		name: 'UnknownNetwork',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'minExternalGeneration',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'multiplier',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'threshold',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct RandomNumberConsumer.HonestyCheckParams',
				name: 'oldParams',
				type: 'tuple',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'minExternalGeneration',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'multiplier',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'threshold',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct RandomNumberConsumer.HonestyCheckParams',
				name: 'newParams',
				type: 'tuple',
			},
		],
		name: 'CheckParamsUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'treasuryAddress',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'FundsSentToTreasury',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'wallet',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tableId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'randomNumber',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'externalGeneration',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'internalGeneration',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'isHonest',
				type: 'bool',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'rewardIndex',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'uint256[]',
						name: 'tokenIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'tokenAmounts',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: 'ronAmount',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct GachaReward',
				name: 'reward',
				type: 'tuple',
			},
		],
		name: 'GachaCompleted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'externalGeneration',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'internalGeneration',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'isHonest',
				type: 'bool',
			},
		],
		name: 'GenerationAdvanced',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint64',
				name: 'version',
				type: 'uint64',
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
				internalType: 'contract BaseERC1155',
				name: 'newContract',
				type: 'address',
			},
		],
		name: 'ItemContractUpdated',
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
				internalType: 'uint256',
				name: 'tableId',
				type: 'uint256',
			},
		],
		name: 'RewardTableDeleted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tableId',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'uint256[]',
						name: 'costTokenIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'costTokenAmounts',
						type: 'uint256[]',
					},
					{
						components: [
							{
								internalType: 'uint256[]',
								name: 'tokenIds',
								type: 'uint256[]',
							},
							{
								internalType: 'uint256[]',
								name: 'tokenAmounts',
								type: 'uint256[]',
							},
							{
								internalType: 'uint256',
								name: 'ronAmount',
								type: 'uint256',
							},
						],
						internalType: 'struct GachaReward[]',
						name: 'rewards',
						type: 'tuple[]',
					},
					{
						internalType: 'uint256[]',
						name: 'chanceRanges',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: 'totalChance',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct GachaRewardTable',
				name: 'newTable',
				type: 'tuple',
			},
		],
		name: 'RewardTableUpdated',
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
				name: 'oldAddress',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newAddress',
				type: 'address',
			},
		],
		name: 'TreasuryUpdated',
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
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'implementation',
				type: 'address',
			},
		],
		name: 'Upgraded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'contract Validator',
				name: 'oldContract',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'contract Validator',
				name: 'newContract',
				type: 'address',
			},
		],
		name: 'ValidatorContractUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
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
		],
		name: 'Withdraw',
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
		name: 'REWARD_TABLE_HIGH',
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
		name: 'REWARD_TABLE_LOW',
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
		name: 'REWARD_TABLE_MEDIUM',
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
		name: 'UPGRADER_ROLE',
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
		name: 'UPGRADE_INTERFACE_VERSION',
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
		inputs: [
			{
				internalType: 'uint256',
				name: 'tableId',
				type: 'uint256',
			},
		],
		name: 'adminDeleteRewardTable',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'minExternalGeneration',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'multiplier',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'threshold',
						type: 'uint256',
					},
				],
				internalType: 'struct RandomNumberConsumer.HonestyCheckParams',
				name: 'params',
				type: 'tuple',
			},
		],
		name: 'adminSetHonestyCheckParams',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract BaseERC1155',
				name: 'itemContract',
				type: 'address',
			},
		],
		name: 'adminSetItemContract',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tableId',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'uint256[]',
						name: 'costTokenIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'costTokenAmounts',
						type: 'uint256[]',
					},
					{
						components: [
							{
								internalType: 'uint256[]',
								name: 'tokenIds',
								type: 'uint256[]',
							},
							{
								internalType: 'uint256[]',
								name: 'tokenAmounts',
								type: 'uint256[]',
							},
							{
								internalType: 'uint256',
								name: 'ronAmount',
								type: 'uint256',
							},
						],
						internalType: 'struct GachaReward[]',
						name: 'rewards',
						type: 'tuple[]',
					},
					{
						internalType: 'uint256[]',
						name: 'chances',
						type: 'uint256[]',
					},
				],
				internalType: 'struct GachaRewardTableInput',
				name: 'input',
				type: 'tuple',
			},
		],
		name: 'adminSetRewardTable',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address payable',
				name: 'newTreasuryAddress',
				type: 'address',
			},
		],
		name: 'adminSetTreasuryAddress',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract Validator',
				name: 'validator',
				type: 'address',
			},
		],
		name: 'adminSetValidatorContract',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address payable',
				name: 'recipient',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'adminWithdraw',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address payable',
				name: 'recipient',
				type: 'address',
			},
		],
		name: 'adminWithdrawAll',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'rewardTableId',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'randomNumber',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'generation',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expireTime',
						type: 'uint256',
					},
					{
						internalType: 'bytes',
						name: 'signature',
						type: 'bytes',
					},
					{
						internalType: 'bool',
						name: 'verifyMessageHash',
						type: 'bool',
					},
				],
				internalType: 'struct VerifiableRandomNumber',
				name: 'payload',
				type: 'tuple',
			},
		],
		name: 'gacha',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getHonestyCheckParams',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'minExternalGeneration',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'multiplier',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'threshold',
						type: 'uint256',
					},
				],
				internalType: 'struct RandomNumberConsumer.HonestyCheckParams',
				name: '',
				type: 'tuple',
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
		],
		name: 'getInternalGeneration',
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
				name: 'tableId',
				type: 'uint256',
			},
		],
		name: 'getRewardTable',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256[]',
						name: 'costTokenIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'costTokenAmounts',
						type: 'uint256[]',
					},
					{
						components: [
							{
								internalType: 'uint256[]',
								name: 'tokenIds',
								type: 'uint256[]',
							},
							{
								internalType: 'uint256[]',
								name: 'tokenAmounts',
								type: 'uint256[]',
							},
							{
								internalType: 'uint256',
								name: 'ronAmount',
								type: 'uint256',
							},
						],
						internalType: 'struct GachaReward[]',
						name: 'rewards',
						type: 'tuple[]',
					},
					{
						internalType: 'uint256[]',
						name: 'chanceRanges',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: 'totalChance',
						type: 'uint256',
					},
				],
				internalType: 'struct GachaRewardTable',
				name: '',
				type: 'tuple',
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
		inputs: [],
		name: 'getStorage',
		outputs: [
			{
				components: [
					{
						internalType: 'contract BaseERC1155',
						name: 'itemContract',
						type: 'address',
					},
					{
						internalType: 'uint256[]',
						name: 'rewardTableIDs',
						type: 'uint256[]',
					},
					{
						components: [
							{
								internalType: 'uint256[]',
								name: 'costTokenIds',
								type: 'uint256[]',
							},
							{
								internalType: 'uint256[]',
								name: 'costTokenAmounts',
								type: 'uint256[]',
							},
							{
								components: [
									{
										internalType: 'uint256[]',
										name: 'tokenIds',
										type: 'uint256[]',
									},
									{
										internalType: 'uint256[]',
										name: 'tokenAmounts',
										type: 'uint256[]',
									},
									{
										internalType: 'uint256',
										name: 'ronAmount',
										type: 'uint256',
									},
								],
								internalType: 'struct GachaReward[]',
								name: 'rewards',
								type: 'tuple[]',
							},
							{
								internalType: 'uint256[]',
								name: 'chances',
								type: 'uint256[]',
							},
						],
						internalType: 'struct GachaRewardTableInput[]',
						name: 'rewardTables',
						type: 'tuple[]',
					},
				],
				internalType: 'struct TMAGacha.StorageView',
				name: '',
				type: 'tuple',
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
				components: [
					{
						internalType: 'address',
						name: 'adminAddress',
						type: 'address',
					},
					{
						internalType: 'contract BaseERC1155',
						name: 'itemContract',
						type: 'address',
					},
					{
						internalType: 'uint256[]',
						name: 'rewardTableIDs',
						type: 'uint256[]',
					},
					{
						components: [
							{
								internalType: 'uint256[]',
								name: 'costTokenIds',
								type: 'uint256[]',
							},
							{
								internalType: 'uint256[]',
								name: 'costTokenAmounts',
								type: 'uint256[]',
							},
							{
								components: [
									{
										internalType: 'uint256[]',
										name: 'tokenIds',
										type: 'uint256[]',
									},
									{
										internalType: 'uint256[]',
										name: 'tokenAmounts',
										type: 'uint256[]',
									},
									{
										internalType: 'uint256',
										name: 'ronAmount',
										type: 'uint256',
									},
								],
								internalType: 'struct GachaReward[]',
								name: 'rewards',
								type: 'tuple[]',
							},
							{
								internalType: 'uint256[]',
								name: 'chances',
								type: 'uint256[]',
							},
						],
						internalType: 'struct GachaRewardTableInput[]',
						name: 'rewardTables',
						type: 'tuple[]',
					},
				],
				internalType: 'struct TMAGachaInitializer',
				name: '_initializer',
				type: 'tuple',
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
		inputs: [],
		name: 'proxiableUUID',
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
				internalType: 'address',
				name: 'callerConfirmation',
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
		inputs: [],
		name: 'treasuryAddress',
		outputs: [
			{
				internalType: 'address payable',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
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
				internalType: 'address',
				name: 'newImplementation',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'upgradeToAndCall',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'validatorContract',
		outputs: [
			{
				internalType: 'contract Validator',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'version',
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
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const TMA_GACHA_3: Contract<typeof abi> = {
	name: 'TMA Gacha',
	address: '0xc25a4b276d35067c111a3652145b99b819c01c56',
	is_deprecated: false,
	created_at: 1727879201,
	abi: abi,
}
export default TMA_GACHA_3
