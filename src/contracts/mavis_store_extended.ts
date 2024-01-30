import { Contract } from '@/contract'
export const MAVIS_STORE_EXTENDED: Contract = {
	name: 'Mavis Store Extended',
	address: '0x7dae19d2eb633af6bc5624744aa0965bcb01368e',
	abi: [
		{
			inputs: [],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			inputs: [],
			name: 'ErrInsufficientAmountTokenIn',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrInsufficientPayment',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'sig',
					type: 'bytes4',
				},
			],
			name: 'ErrInvalidArrayLength',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrInvalidFirstTokenInPath',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrInvalidLastTokenInPath',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrInvalidNonce',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrInvalidOrderPrice',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrInvalidOrderQuantity',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrInvalidPathLength',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrInvalidPayServiceAddress',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrInvalidPaymentToken',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrInvalidRecordedReferralAmount',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrInvalidSignature',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrInvalidTotalCommissionRatio',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrInvalidTreasury',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrInvalidTreasuryAddress',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'sig',
					type: 'bytes4',
				},
			],
			name: 'ErrMismatchArrayLength',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrNotFoundGameSaleInfo',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrOrderAlreadyFinalized',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrOrderExpired',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrOutOfStock',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrPaymentTokenNotAllowed',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrUnauthorizedCancelRequester',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrWrongReceivedRONFlag',
			type: 'error',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bool',
					name: 'flag',
					type: 'bool',
				},
			],
			name: 'AllowedAllPaymentTokens',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'merchantId',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'skuHash',
					type: 'bytes32',
				},
				{
					indexed: false,
					internalType: 'string',
					name: 'sku',
					type: 'string',
				},
				{
					components: [
						{
							internalType: 'uint256',
							name: 'supply',
							type: 'uint256',
						},
						{
							internalType: 'bool',
							name: 'isAlreadyExists',
							type: 'bool',
						},
					],
					indexed: false,
					internalType: 'struct IMavisStoreConfig.GameItemSaleInfo',
					name: 'gameItemSaleInfo',
					type: 'tuple',
				},
			],
			name: 'GameItemSaleInfoUpdated',
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
					internalType: 'contract IKatanaRouter',
					name: 'router',
					type: 'address',
				},
			],
			name: 'KanataRouterUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'payService',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'nonce',
					type: 'uint256',
				},
			],
			name: 'NoncePayServiceIncreased',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'orderHash',
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
					indexed: true,
					internalType: 'uint256',
					name: 'merchantId',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'orderHash',
					type: 'bytes32',
				},
				{
					components: [
						{
							internalType: 'uint256',
							name: 'merchantId',
							type: 'uint256',
						},
						{
							internalType: 'string',
							name: 'sku',
							type: 'string',
						},
						{
							internalType: 'string',
							name: 'orderId',
							type: 'string',
						},
						{
							internalType: 'address',
							name: 'owner',
							type: 'address',
						},
						{
							internalType: 'address',
							name: 'payService',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'validUntil',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'pricePerUnit',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'quantity',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'nonce',
							type: 'uint256',
						},
						{
							internalType: 'address',
							name: 'paymentToken',
							type: 'address',
						},
					],
					indexed: false,
					internalType: 'struct Order',
					name: 'orderData',
					type: 'tuple',
				},
				{
					components: [
						{
							internalType: 'enum IStoreCommission.TreasuryType',
							name: 'treasuryType',
							type: 'uint8',
						},
						{
							internalType: 'address payable',
							name: 'recipient',
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
					internalType: 'struct IStoreCommission.Allocation[]',
					name: 'allocations',
					type: 'tuple[]',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'price',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'buyer',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'treasury',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'paidToken',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amountPaidToken',
					type: 'uint256',
				},
			],
			name: 'OrderPaymentSuccess',
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
					indexed: false,
					internalType: 'address[]',
					name: 'payServices',
					type: 'address[]',
				},
				{
					indexed: true,
					internalType: 'address[]',
					name: 'treasuries',
					type: 'address[]',
				},
			],
			name: 'PayServiceInfosUpdated',
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
					indexed: true,
					internalType: 'bool',
					name: 'allowed',
					type: 'bool',
				},
			],
			name: 'PaymentTokensAllowed',
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
					indexed: false,
					internalType: 'contract IStoreCommission',
					name: 'marketCommission',
					type: 'address',
				},
			],
			name: 'StoreCommissionAddressUpdated',
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
					internalType: 'contract IWRONHelper',
					name: 'wronHelper',
					type: 'address',
				},
			],
			name: 'WRONHelperUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'contract IWRON',
					name: 'wron',
					type: 'address',
				},
			],
			name: 'WRONUpdated',
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
			name: 'DOMAIN_SEPARATOR',
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
			inputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'merchantId',
							type: 'uint256',
						},
						{
							internalType: 'string',
							name: 'sku',
							type: 'string',
						},
						{
							internalType: 'string',
							name: 'orderId',
							type: 'string',
						},
						{
							internalType: 'address',
							name: 'owner',
							type: 'address',
						},
						{
							internalType: 'address',
							name: 'payService',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'validUntil',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'pricePerUnit',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'quantity',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'nonce',
							type: 'uint256',
						},
						{
							internalType: 'address',
							name: 'paymentToken',
							type: 'address',
						},
					],
					internalType: 'struct Order',
					name: 'order',
					type: 'tuple',
				},
			],
			name: 'cancelOrder',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getAllowedAllPaymentTokens',
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
					name: 'merchantId',
					type: 'uint256',
				},
				{
					internalType: 'string',
					name: 'sku',
					type: 'string',
				},
			],
			name: 'getGameItemSaleInfo',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'supply',
							type: 'uint256',
						},
						{
							internalType: 'bool',
							name: 'isAlreadyExists',
							type: 'bool',
						},
					],
					internalType: 'struct IMavisStoreConfig.GameItemSaleInfo',
					name: '',
					type: 'tuple',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getKatanaRouter',
			outputs: [
				{
					internalType: 'contract IKatanaRouter',
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
					name: 'payService',
					type: 'address',
				},
			],
			name: 'getNonce',
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
			inputs: [],
			name: 'getStoreCommission',
			outputs: [
				{
					internalType: 'contract IStoreCommission',
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
					name: 'payService',
					type: 'address',
				},
			],
			name: 'getTreasury',
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
			name: 'getWron',
			outputs: [
				{
					internalType: 'contract IWRON',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getWronHelper',
			outputs: [
				{
					internalType: 'contract IWRONHelper',
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
					name: 'payService',
					type: 'address',
				},
			],
			name: 'increaseNoncePayService',
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
					internalType: 'address[]',
					name: 'operators',
					type: 'address[]',
				},
				{
					internalType: 'contract IKatanaRouter',
					name: 'katanaRouter',
					type: 'address',
				},
				{
					internalType: 'contract IWRON',
					name: 'wron',
					type: 'address',
				},
				{
					internalType: 'contract IWRONHelper',
					name: 'wronHelper',
					type: 'address',
				},
				{
					internalType: 'contract IStoreCommission',
					name: 'storeCommission',
					type: 'address',
				},
				{
					internalType: 'bool',
					name: 'isAllowedAllPaymentTokens',
					type: 'bool',
				},
				{
					internalType: 'address[]',
					name: 'paymentTokens',
					type: 'address[]',
				},
				{
					internalType: 'address[]',
					name: 'payServices',
					type: 'address[]',
				},
				{
					internalType: 'address[]',
					name: 'treasuries',
					type: 'address[]',
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
					name: 'token',
					type: 'address',
				},
			],
			name: 'isPaymentTokenAllowed',
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
					name: 'hash',
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
					components: [
						{
							internalType: 'uint256',
							name: 'merchantId',
							type: 'uint256',
						},
						{
							internalType: 'string',
							name: 'sku',
							type: 'string',
						},
						{
							internalType: 'string',
							name: 'orderId',
							type: 'string',
						},
						{
							internalType: 'address',
							name: 'owner',
							type: 'address',
						},
						{
							internalType: 'address',
							name: 'payService',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'validUntil',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'pricePerUnit',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'quantity',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'nonce',
							type: 'uint256',
						},
						{
							internalType: 'address',
							name: 'paymentToken',
							type: 'address',
						},
					],
					internalType: 'struct Order',
					name: 'order',
					type: 'tuple',
				},
				{
					internalType: 'bytes',
					name: 'signature',
					type: 'bytes',
				},
			],
			name: 'payWithRON',
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'merchantId',
							type: 'uint256',
						},
						{
							internalType: 'string',
							name: 'sku',
							type: 'string',
						},
						{
							internalType: 'string',
							name: 'orderId',
							type: 'string',
						},
						{
							internalType: 'address',
							name: 'owner',
							type: 'address',
						},
						{
							internalType: 'address',
							name: 'payService',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'validUntil',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'pricePerUnit',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'quantity',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'nonce',
							type: 'uint256',
						},
						{
							internalType: 'address',
							name: 'paymentToken',
							type: 'address',
						},
					],
					internalType: 'struct Order',
					name: 'order',
					type: 'tuple',
				},
				{
					internalType: 'bytes',
					name: 'signature',
					type: 'bytes',
				},
			],
			name: 'payWithToken',
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
					internalType: 'bool',
					name: 'flag',
					type: 'bool',
				},
			],
			name: 'setAllowedAllPaymentTokens',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'merchantId',
					type: 'uint256',
				},
				{
					internalType: 'string[]',
					name: 'skus',
					type: 'string[]',
				},
				{
					internalType: 'uint256[]',
					name: 'newSupplies',
					type: 'uint256[]',
				},
			],
			name: 'setGameItemSaleInfo',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract IKatanaRouter',
					name: 'katanaRouter',
					type: 'address',
				},
			],
			name: 'setKatanaRouter',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address[]',
					name: 'payServices',
					type: 'address[]',
				},
				{
					internalType: 'address[]',
					name: 'treasuries',
					type: 'address[]',
				},
			],
			name: 'setPayServiceInfos',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address[]',
					name: 'tokens',
					type: 'address[]',
				},
				{
					internalType: 'bool',
					name: 'allowed',
					type: 'bool',
				},
			],
			name: 'setPaymentTokens',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract IStoreCommission',
					name: 'storeCommission',
					type: 'address',
				},
			],
			name: 'setStoreCommission',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract IWRON',
					name: 'wron',
					type: 'address',
				},
			],
			name: 'setWRON',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract IWRONHelper',
					name: 'wronHelper',
					type: 'address',
				},
			],
			name: 'setWRONHelper',
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
					components: [
						{
							internalType: 'uint256',
							name: 'merchantId',
							type: 'uint256',
						},
						{
							internalType: 'string',
							name: 'sku',
							type: 'string',
						},
						{
							internalType: 'string',
							name: 'orderId',
							type: 'string',
						},
						{
							internalType: 'address',
							name: 'owner',
							type: 'address',
						},
						{
							internalType: 'address',
							name: 'payService',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'validUntil',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'pricePerUnit',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'quantity',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'nonce',
							type: 'uint256',
						},
						{
							internalType: 'address',
							name: 'paymentToken',
							type: 'address',
						},
					],
					internalType: 'struct Order',
					name: 'order',
					type: 'tuple',
				},
				{
					internalType: 'bytes',
					name: 'signature',
					type: 'bytes',
				},
				{
					internalType: 'address[]',
					name: 'path',
					type: 'address[]',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
			],
			name: 'swapRONAndPay',
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'merchantId',
							type: 'uint256',
						},
						{
							internalType: 'string',
							name: 'sku',
							type: 'string',
						},
						{
							internalType: 'string',
							name: 'orderId',
							type: 'string',
						},
						{
							internalType: 'address',
							name: 'owner',
							type: 'address',
						},
						{
							internalType: 'address',
							name: 'payService',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'validUntil',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'pricePerUnit',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'quantity',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'nonce',
							type: 'uint256',
						},
						{
							internalType: 'address',
							name: 'paymentToken',
							type: 'address',
						},
					],
					internalType: 'struct Order',
					name: 'order',
					type: 'tuple',
				},
				{
					internalType: 'bytes',
					name: 'signature',
					type: 'bytes',
				},
				{
					internalType: 'uint256',
					name: 'amountIn',
					type: 'uint256',
				},
				{
					internalType: 'address[]',
					name: 'path',
					type: 'address[]',
				},
				{
					internalType: 'uint256',
					name: 'deadline',
					type: 'uint256',
				},
			],
			name: 'swapTokenAndPay',
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
	],
}
