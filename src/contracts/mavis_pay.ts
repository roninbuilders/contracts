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
				indexed: true,
				internalType: 'bytes32',
				name: 'orderId',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'price',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'paymentToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'validUntil',
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
				name: 'payToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'PaymentSuccess',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
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
		name: 'WRON',
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
		name: 'allowedAllPaymentTokens',
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
				name: 'token',
				type: 'address',
			},
		],
		name: 'allowedPaymentToken',
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
				internalType: 'bool',
				name: 'allowedAllPaymentTokens',
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
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'katanaRouterContract',
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
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'payService',
						type: 'address',
					},
					{
						internalType: 'bytes32',
						name: 'orderId',
						type: 'bytes32',
					},
					{
						internalType: 'uint256',
						name: 'validUntil',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'price',
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
				internalType: 'struct GemOrder',
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
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'payService',
						type: 'address',
					},
					{
						internalType: 'bytes32',
						name: 'orderId',
						type: 'bytes32',
					},
					{
						internalType: 'uint256',
						name: 'validUntil',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'price',
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
				internalType: 'struct GemOrder',
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
						internalType: 'address',
						name: 'payService',
						type: 'address',
					},
					{
						internalType: 'bytes32',
						name: 'orderId',
						type: 'bytes32',
					},
					{
						internalType: 'uint256',
						name: 'validUntil',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'price',
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
				internalType: 'struct GemOrder',
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
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'payService',
						type: 'address',
					},
					{
						internalType: 'bytes32',
						name: 'orderId',
						type: 'bytes32',
					},
					{
						internalType: 'uint256',
						name: 'validUntil',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'price',
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
				internalType: 'struct GemOrder',
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
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'wronHelperContract',
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
] as const
const MAVIS_PAY: Contract<typeof abi> = {
	name: 'Mavis Pay',
	address: '0x584514fa22f057a4b49ea136a0c4e8e89d9178df',
	is_deprecated: false,
	created_at: 1730272654,
	abi: abi,
}
export default MAVIS_PAY
