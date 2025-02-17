import { Contract } from '@/contract'
const abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'receiptHash',
				type: 'bytes32',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'enum Transfer.Kind',
						name: 'kind',
						type: 'uint8',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'tokenAddr',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'chainId',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Owner',
						name: 'mainchain',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'tokenAddr',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'chainId',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Owner',
						name: 'ronin',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'enum Token.Standard',
								name: 'erc',
								type: 'uint8',
							},
							{
								internalType: 'uint256',
								name: 'id',
								type: 'uint256',
							},
							{
								internalType: 'uint256',
								name: 'quantity',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Info',
						name: 'info',
						type: 'tuple',
					},
				],
				indexed: false,
				internalType: 'struct Transfer.Receipt',
				name: 'receipt',
				type: 'tuple',
			},
		],
		name: 'Deposited',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'receiptHash',
				type: 'bytes32',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'enum Transfer.Kind',
						name: 'kind',
						type: 'uint8',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'tokenAddr',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'chainId',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Owner',
						name: 'mainchain',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'tokenAddr',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'chainId',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Owner',
						name: 'ronin',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'enum Token.Standard',
								name: 'erc',
								type: 'uint8',
							},
							{
								internalType: 'uint256',
								name: 'id',
								type: 'uint256',
							},
							{
								internalType: 'uint256',
								name: 'quantity',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Info',
						name: 'info',
						type: 'tuple',
					},
				],
				indexed: false,
				internalType: 'struct Transfer.Receipt',
				name: 'receipt',
				type: 'tuple',
			},
		],
		name: 'MainchainWithdrew',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address[]',
				name: 'tokens',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'threshold',
				type: 'uint256[]',
			},
		],
		name: 'MinimumThresholdsUpdated',
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
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'numerator',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'denominator',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'previousNumerator',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'previousDenominator',
				type: 'uint256',
			},
		],
		name: 'ThresholdUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address[]',
				name: 'roninTokens',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'mainchainTokens',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'chainIds',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'enum Token.Standard[]',
				name: 'standards',
				type: 'uint8[]',
			},
		],
		name: 'TokenMapped',
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
				indexed: false,
				internalType: 'contract IWeightedValidator',
				name: '',
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
				indexed: false,
				internalType: 'bytes32',
				name: 'receiptHash',
				type: 'bytes32',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'enum Transfer.Kind',
						name: 'kind',
						type: 'uint8',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'tokenAddr',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'chainId',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Owner',
						name: 'mainchain',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'tokenAddr',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'chainId',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Owner',
						name: 'ronin',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'enum Token.Standard',
								name: 'erc',
								type: 'uint8',
							},
							{
								internalType: 'uint256',
								name: 'id',
								type: 'uint256',
							},
							{
								internalType: 'uint256',
								name: 'quantity',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Info',
						name: 'info',
						type: 'tuple',
					},
				],
				indexed: false,
				internalType: 'struct Transfer.Receipt',
				name: '',
				type: 'tuple',
			},
		],
		name: 'WithdrawalRequested',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'receiptHash',
				type: 'bytes32',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'enum Transfer.Kind',
						name: 'kind',
						type: 'uint8',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'tokenAddr',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'chainId',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Owner',
						name: 'mainchain',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'tokenAddr',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'chainId',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Owner',
						name: 'ronin',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'enum Token.Standard',
								name: 'erc',
								type: 'uint8',
							},
							{
								internalType: 'uint256',
								name: 'id',
								type: 'uint256',
							},
							{
								internalType: 'uint256',
								name: 'quantity',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Info',
						name: 'info',
						type: 'tuple',
					},
				],
				indexed: false,
				internalType: 'struct Transfer.Receipt',
				name: '',
				type: 'tuple',
			},
		],
		name: 'WithdrawalSignaturesRequested',
		type: 'event',
	},
	{
		stateMutability: 'payable',
		type: 'fallback',
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
		name: 'WITHDRAWAL_MIGRATOR',
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
				components: [
					{
						internalType: 'address',
						name: 'recipientAddr',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'tokenAddr',
						type: 'address',
					},
					{
						components: [
							{
								internalType: 'enum Token.Standard',
								name: 'erc',
								type: 'uint8',
							},
							{
								internalType: 'uint256',
								name: 'id',
								type: 'uint256',
							},
							{
								internalType: 'uint256',
								name: 'quantity',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Info',
						name: 'info',
						type: 'tuple',
					},
				],
				internalType: 'struct Transfer.Request[]',
				name: '_requests',
				type: 'tuple[]',
			},
			{
				internalType: 'uint256',
				name: '_chainId',
				type: 'uint256',
			},
		],
		name: 'bulkRequestWithdrawalFor',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: '_withdrawals',
				type: 'uint256[]',
			},
			{
				internalType: 'bytes[]',
				name: '_signatures',
				type: 'bytes[]',
			},
		],
		name: 'bulkSubmitWithdrawalSignatures',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_voteWeight',
				type: 'uint256',
			},
		],
		name: 'checkThreshold',
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
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'enum Transfer.Kind',
						name: 'kind',
						type: 'uint8',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'tokenAddr',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'chainId',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Owner',
						name: 'mainchain',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'tokenAddr',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'chainId',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Owner',
						name: 'ronin',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'enum Token.Standard',
								name: 'erc',
								type: 'uint8',
							},
							{
								internalType: 'uint256',
								name: 'id',
								type: 'uint256',
							},
							{
								internalType: 'uint256',
								name: 'quantity',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Info',
						name: 'info',
						type: 'tuple',
					},
				],
				internalType: 'struct Transfer.Receipt',
				name: '_receipt',
				type: 'tuple',
			},
		],
		name: 'depositFor',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
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
		name: 'depositVote',
		outputs: [
			{
				internalType: 'enum GatewayGovernance.VoteStatus',
				name: 'status',
				type: 'uint8',
			},
			{
				internalType: 'bytes32',
				name: 'finalHash',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_chainId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_depositId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_voter',
				type: 'address',
			},
		],
		name: 'depositVoted',
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
				name: '_roninToken',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_chainId',
				type: 'uint256',
			},
		],
		name: 'getMainchainToken',
		outputs: [
			{
				components: [
					{
						internalType: 'enum Token.Standard',
						name: 'erc',
						type: 'uint8',
					},
					{
						internalType: 'address',
						name: 'tokenAddr',
						type: 'address',
					},
				],
				internalType: 'struct MappedTokenConsumer.MappedToken',
				name: '_token',
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
		inputs: [],
		name: 'getThreshold',
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
				internalType: 'uint256',
				name: '_withdrawalId',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: '_validators',
				type: 'address[]',
			},
		],
		name: 'getWithdrawalSignatures',
		outputs: [
			{
				internalType: 'bytes[]',
				name: '_signatures',
				type: 'bytes[]',
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
				name: '_roleSetter',
				type: 'address',
			},
			{
				internalType: 'contract IWeightedValidator',
				name: '_validatorContract',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_numerator',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_denominator',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: '_withdrawalMigrators',
				type: 'address[]',
			},
			{
				internalType: 'address[][2]',
				name: '_packedAddresses',
				type: 'address[][2]',
			},
			{
				internalType: 'uint256[][2]',
				name: '_packedNumbers',
				type: 'uint256[][2]',
			},
			{
				internalType: 'enum Token.Standard[]',
				name: '_standards',
				type: 'uint8[]',
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
				internalType: 'uint256',
				name: '_withdrawalId',
				type: 'uint256',
			},
		],
		name: 'mainchainWithdrew',
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
		name: 'mainchainWithdrewVote',
		outputs: [
			{
				internalType: 'enum GatewayGovernance.VoteStatus',
				name: 'status',
				type: 'uint8',
			},
			{
				internalType: 'bytes32',
				name: 'finalHash',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_roninTokens',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: '_mainchainTokens',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_chainIds',
				type: 'uint256[]',
			},
			{
				internalType: 'enum Token.Standard[]',
				name: '_standards',
				type: 'uint8[]',
			},
		],
		name: 'mapTokens',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'markWithdrawalMigrated',
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
						name: 'recipientAddr',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'tokenAddr',
						type: 'address',
					},
					{
						components: [
							{
								internalType: 'enum Token.Standard',
								name: 'erc',
								type: 'uint8',
							},
							{
								internalType: 'uint256',
								name: 'id',
								type: 'uint256',
							},
							{
								internalType: 'uint256',
								name: 'quantity',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Info',
						name: 'info',
						type: 'tuple',
					},
				],
				internalType: 'struct Transfer.Request[]',
				name: '_requests',
				type: 'tuple[]',
			},
			{
				internalType: 'address[]',
				name: '_requesters',
				type: 'address[]',
			},
		],
		name: 'migrateWithdrawals',
		outputs: [],
		stateMutability: 'nonpayable',
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
		name: 'minimumThreshold',
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
		name: 'minimumVoteWeight',
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
		name: 'nonce',
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
				components: [
					{
						internalType: 'address',
						name: 'recipientAddr',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'tokenAddr',
						type: 'address',
					},
					{
						components: [
							{
								internalType: 'enum Token.Standard',
								name: 'erc',
								type: 'uint8',
							},
							{
								internalType: 'uint256',
								name: 'id',
								type: 'uint256',
							},
							{
								internalType: 'uint256',
								name: 'quantity',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Info',
						name: 'info',
						type: 'tuple',
					},
				],
				internalType: 'struct Transfer.Request',
				name: '_request',
				type: 'tuple',
			},
			{
				internalType: 'uint256',
				name: '_chainId',
				type: 'uint256',
			},
		],
		name: 'requestWithdrawalFor',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_withdrawalId',
				type: 'uint256',
			},
		],
		name: 'requestWithdrawalSignatures',
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
				internalType: 'address[]',
				name: '_tokens',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_thresholds',
				type: 'uint256[]',
			},
		],
		name: 'setMinimumThresholds',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_numerator',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_denominator',
				type: 'uint256',
			},
		],
		name: 'setThreshold',
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
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IWeightedValidator',
				name: '_validatorContract',
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
				internalType: 'uint256[]',
				name: '_withdrawalIds',
				type: 'uint256[]',
			},
		],
		name: 'tryBulkAcknowledgeMainchainWithdrew',
		outputs: [
			{
				internalType: 'bool[]',
				name: '_executedReceipts',
				type: 'bool[]',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'enum Transfer.Kind',
						name: 'kind',
						type: 'uint8',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'tokenAddr',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'chainId',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Owner',
						name: 'mainchain',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'tokenAddr',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'chainId',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Owner',
						name: 'ronin',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'enum Token.Standard',
								name: 'erc',
								type: 'uint8',
							},
							{
								internalType: 'uint256',
								name: 'id',
								type: 'uint256',
							},
							{
								internalType: 'uint256',
								name: 'quantity',
								type: 'uint256',
							},
						],
						internalType: 'struct Token.Info',
						name: 'info',
						type: 'tuple',
					},
				],
				internalType: 'struct Transfer.Receipt[]',
				name: '_receipts',
				type: 'tuple[]',
			},
		],
		name: 'tryBulkDepositFor',
		outputs: [
			{
				internalType: 'bool[]',
				name: '_executedReceipts',
				type: 'bool[]',
			},
		],
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
		inputs: [],
		name: 'validatorContract',
		outputs: [
			{
				internalType: 'contract IWeightedValidator',
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
				name: '',
				type: 'uint256',
			},
		],
		name: 'withdrawal',
		outputs: [
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				internalType: 'enum Transfer.Kind',
				name: 'kind',
				type: 'uint8',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'addr',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'tokenAddr',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'chainId',
						type: 'uint256',
					},
				],
				internalType: 'struct Token.Owner',
				name: 'mainchain',
				type: 'tuple',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'addr',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'tokenAddr',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'chainId',
						type: 'uint256',
					},
				],
				internalType: 'struct Token.Owner',
				name: 'ronin',
				type: 'tuple',
			},
			{
				components: [
					{
						internalType: 'enum Token.Standard',
						name: 'erc',
						type: 'uint8',
					},
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'quantity',
						type: 'uint256',
					},
				],
				internalType: 'struct Token.Info',
				name: 'info',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'withdrawalCount',
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
		name: 'withdrawalMigrated',
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
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const RONIN_GATEWAY_V2_1: Contract<typeof abi> = {
	name: 'Ronin Gateway V2',
	address: '0x75d23c8830bf28e5b88340638efc0f36e026b8a0',
	is_deprecated: true,
	created_at: 1655875728,
	abi: abi,
}
export default RONIN_GATEWAY_V2_1
