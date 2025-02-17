import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
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
				name: 'maker',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
		],
		name: 'MakerNonceUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'requester',
				type: 'address',
			},
		],
		name: 'OrderCancelled',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'maker',
						type: 'address',
					},
					{
						internalType: 'enum MarketOrder.OrderKind',
						name: 'kind',
						type: 'uint8',
					},
					{
						components: [
							{
								internalType: 'enum MarketAsset.TokenStandard',
								name: 'erc',
								type: 'uint8',
							},
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
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
						internalType: 'struct MarketAsset.Asset[]',
						name: 'assets',
						type: 'tuple[]',
					},
					{
						internalType: 'uint256',
						name: 'expiredAt',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'paymentToken',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'startedAt',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'basePrice',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'endedAt',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'endedPrice',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expectedState',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'marketFeePercentage',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct MarketOrder.Order',
				name: 'order',
				type: 'tuple',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'orderHash',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'settlePrice',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'settleToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'matcher',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'realPrice',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'acceptedSettlePrice',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'enum IMarketCommission.AllocType',
						name: 'allocType',
						type: 'uint8',
					},
					{
						internalType: 'address payable',
						name: 'recipient',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'owner',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'ratio',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'value',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct IMarketCommission.Allocation[]',
				name: 'receivedAllocs',
				type: 'tuple[]',
			},
		],
		name: 'OrderMatched',
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
		name: 'INTERFACE_NAME',
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
		name: 'MARKET_OPERATOR',
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
						name: 'maker',
						type: 'address',
					},
					{
						internalType: 'enum MarketOrder.OrderKind',
						name: 'kind',
						type: 'uint8',
					},
					{
						components: [
							{
								internalType: 'enum MarketAsset.TokenStandard',
								name: 'erc',
								type: 'uint8',
							},
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
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
						internalType: 'struct MarketAsset.Asset[]',
						name: 'assets',
						type: 'tuple[]',
					},
					{
						internalType: 'uint256',
						name: 'expiredAt',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'paymentToken',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'startedAt',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'basePrice',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'endedAt',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'endedPrice',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expectedState',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'marketFeePercentage',
						type: 'uint256',
					},
				],
				internalType: 'struct MarketOrder.Order',
				name: '_order',
				type: 'tuple',
			},
		],
		name: 'cancelOrder',
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
						internalType: 'enum MarketAsset.TokenStandard',
						name: 'erc',
						type: 'uint8',
					},
					{
						internalType: 'address',
						name: 'addr',
						type: 'address',
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
				internalType: 'struct MarketAsset.Asset[]',
				name: '_assets',
				type: 'tuple[]',
			},
		],
		name: 'getState',
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
		inputs: [],
		name: 'increaseNonceMaker',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_maker',
				type: 'address',
			},
		],
		name: 'makerNonce',
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
				name: '_hash',
				type: 'bytes32',
			},
		],
		name: 'orderFinalized',
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
				name: '_hash',
				type: 'bytes32',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'maker',
						type: 'address',
					},
					{
						internalType: 'enum MarketOrder.OrderKind',
						name: 'kind',
						type: 'uint8',
					},
					{
						components: [
							{
								internalType: 'enum MarketAsset.TokenStandard',
								name: 'erc',
								type: 'uint8',
							},
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
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
						internalType: 'struct MarketAsset.Asset[]',
						name: 'assets',
						type: 'tuple[]',
					},
					{
						internalType: 'uint256',
						name: 'expiredAt',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'paymentToken',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'startedAt',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'basePrice',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'endedAt',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'endedPrice',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expectedState',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'marketFeePercentage',
						type: 'uint256',
					},
				],
				internalType: 'struct MarketOrder.Order',
				name: '_order',
				type: 'tuple',
			},
		],
		name: 'orderValid',
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
				components: [
					{
						internalType: 'address',
						name: 'maker',
						type: 'address',
					},
					{
						internalType: 'enum MarketOrder.OrderKind',
						name: 'kind',
						type: 'uint8',
					},
					{
						components: [
							{
								internalType: 'enum MarketAsset.TokenStandard',
								name: 'erc',
								type: 'uint8',
							},
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
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
						internalType: 'struct MarketAsset.Asset[]',
						name: 'assets',
						type: 'tuple[]',
					},
					{
						internalType: 'uint256',
						name: 'expiredAt',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'paymentToken',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'startedAt',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'basePrice',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'endedAt',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'endedPrice',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expectedState',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'marketFeePercentage',
						type: 'uint256',
					},
				],
				internalType: 'struct MarketOrder.Order',
				name: '_order',
				type: 'tuple',
			},
			{
				internalType: 'bytes',
				name: '_signature',
				type: 'bytes',
			},
			{
				internalType: 'uint256',
				name: '_settlePrice',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_referralAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_expectedState',
				type: 'uint256',
			},
		],
		name: 'settleOrder',
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
				components: [
					{
						internalType: 'address',
						name: 'maker',
						type: 'address',
					},
					{
						internalType: 'enum MarketOrder.OrderKind',
						name: 'kind',
						type: 'uint8',
					},
					{
						components: [
							{
								internalType: 'enum MarketAsset.TokenStandard',
								name: 'erc',
								type: 'uint8',
							},
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
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
						internalType: 'struct MarketAsset.Asset[]',
						name: 'assets',
						type: 'tuple[]',
					},
					{
						internalType: 'uint256',
						name: 'expiredAt',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'paymentToken',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'startedAt',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'basePrice',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'endedAt',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'endedPrice',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expectedState',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'marketFeePercentage',
						type: 'uint256',
					},
				],
				internalType: 'struct MarketOrder.Order',
				name: '_order',
				type: 'tuple',
			},
			{
				internalType: 'bytes',
				name: '_signature',
				type: 'bytes',
			},
			{
				internalType: 'address',
				name: '_referralAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_expectedState',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: '_path',
				type: 'address[]',
			},
		],
		name: 'swapRONAndSettleOrder',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'maker',
						type: 'address',
					},
					{
						internalType: 'enum MarketOrder.OrderKind',
						name: 'kind',
						type: 'uint8',
					},
					{
						components: [
							{
								internalType: 'enum MarketAsset.TokenStandard',
								name: 'erc',
								type: 'uint8',
							},
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
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
						internalType: 'struct MarketAsset.Asset[]',
						name: 'assets',
						type: 'tuple[]',
					},
					{
						internalType: 'uint256',
						name: 'expiredAt',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'paymentToken',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'startedAt',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'basePrice',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'endedAt',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'endedPrice',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expectedState',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'marketFeePercentage',
						type: 'uint256',
					},
				],
				internalType: 'struct MarketOrder.Order',
				name: '_order',
				type: 'tuple',
			},
			{
				internalType: 'bytes',
				name: '_signature',
				type: 'bytes',
			},
			{
				internalType: 'uint256',
				name: '_settlePrice',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_referralAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_expectedState',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: '_path',
				type: 'address[]',
			},
		],
		name: 'swapTokensAndSettleOrder',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32[]',
				name: '_hashList',
				type: 'bytes32[]',
			},
		],
		name: 'tryBulkCancelOrderByHash',
		outputs: [
			{
				internalType: 'bool[]',
				name: '_orderAlreadyFinalized',
				type: 'bool[]',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const APP_AXIE_ORDER_EXCHANGE_1: Contract<typeof abi> = {
	name: 'App Axie Order Exchange',
	address: '0x0d8562a81b14fbc950656e3a3a4cdad57ccc0376',
	is_deprecated: false,
	created_at: 1684224080,
	abi: abi,
}
export default APP_AXIE_ORDER_EXCHANGE_1
