import { Contract } from '@/contract'
const ORDER_EXCHANGE_LOGIC: Contract = {
	name: 'Order Exchange Logic',
	address: '0xa74f8af1bcb92f3037e6235f26cfc55898a550a8',
	is_deprecated: false,
	updated_at: 1707575172,
	abi: [
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
					indexed: false,
					internalType: 'bytes32',
					name: 'hash',
					type: 'bytes32',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'maker',
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
					internalType: 'enum MarketOrder.OrderKind',
					name: 'kind',
					type: 'uint8',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'bidToken',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'bidPrice',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'paymentToken',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'settlePrice',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'sellerReceived',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'marketFeePercentage',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'marketFeeTaken',
					type: 'uint256',
				},
			],
			name: 'OrderMatched',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'token',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'referralAddr',
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
					internalType: 'address',
					name: 'receiver',
					type: 'address',
				},
			],
			name: 'ReferralRewardTransferred',
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
					internalType: 'uint256',
					name: '_expectedState',
					type: 'uint256',
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
					internalType: 'bytes',
					name: '_signature',
					type: 'bytes',
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
			name: 'settleOrder',
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
					internalType: 'uint256',
					name: '_expectedState',
					type: 'uint256',
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
					name: '_deadline',
					type: 'uint256',
				},
				{
					internalType: 'address[]',
					name: '_path',
					type: 'address[]',
				},
				{
					internalType: 'bytes',
					name: '_signature',
					type: 'bytes',
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
	],
}
export default ORDER_EXCHANGE_LOGIC
