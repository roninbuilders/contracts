import { Contract } from '@/contract'
const MAVIS_PAY: Contract = {
	name: 'Mavis Pay',
	address: '0xb9a0914da17b460ff382da8924d9d23f77db0e28',
	is_deprecated: false,
	updated_at: 1701687746,
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
					indexed: true,
					internalType: 'address',
					name: '_merchant',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'bool',
					name: '_accepted',
					type: 'bool',
				},
			],
			name: 'AcceptedERC20TokenChange',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_merchant',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'bool',
					name: '_accepted',
					type: 'bool',
				},
			],
			name: 'AcceptedRONChange',
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
					name: '_merchant',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'bool',
					name: '_enabled',
					type: 'bool',
				},
			],
			name: 'MerchantUpdated',
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
					components: [
						{
							internalType: 'address',
							name: '_to',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: '_amount',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: '_maxAmountPaid',
							type: 'uint256',
						},
						{
							internalType: 'bytes',
							name: '_paymentReference',
							type: 'bytes',
						},
						{
							internalType: 'uint256',
							name: '_validUntil',
							type: 'uint256',
						},
						{
							internalType: 'address[]',
							name: '_path',
							type: 'address[]',
						},
					],
					indexed: false,
					internalType: 'struct MavisPay.PaymentRequest',
					name: '_request',
					type: 'tuple',
				},
			],
			name: 'PaymentComplete',
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
					internalType: 'bool',
					name: 'enabled',
					type: 'bool',
				},
			],
			name: 'WhitelistUpdated',
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
			name: 'MERCHANT_ROLE',
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
			name: 'MERCHANT_WHITELIST_ENABLED',
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
			name: 'WHITELIST_ROLE',
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
					internalType: 'address[]',
					name: '_path',
					type: 'address[]',
				},
				{
					internalType: 'uint256',
					name: '_amountOut',
					type: 'uint256',
				},
			],
			name: 'getAmountsIn',
			outputs: [
				{
					internalType: 'uint256[]',
					name: 'amountsIn',
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
					name: '_katanaRouter',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_admin',
					type: 'address',
				},
			],
			name: 'initialize',
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_merchant',
					type: 'address',
				},
			],
			name: 'isMerchantWhitelisted',
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
					name: '',
					type: 'address',
				},
			],
			name: 'merchantAcceptRON',
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
					name: '',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'merchantAcceptToken',
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
							internalType: 'address',
							name: '_to',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: '_amount',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: '_maxAmountPaid',
							type: 'uint256',
						},
						{
							internalType: 'bytes',
							name: '_paymentReference',
							type: 'bytes',
						},
						{
							internalType: 'uint256',
							name: '_validUntil',
							type: 'uint256',
						},
						{
							internalType: 'address[]',
							name: '_path',
							type: 'address[]',
						},
					],
					internalType: 'struct MavisPay.PaymentRequest',
					name: '_request',
					type: 'tuple',
				},
			],
			name: 'pay',
			outputs: [],
			stateMutability: 'payable',
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
					name: '_accepted',
					type: 'bool',
				},
			],
			name: 'setAcceptRON',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_merchant',
					type: 'address',
				},
				{
					internalType: 'bool',
					name: '_accepted',
					type: 'bool',
				},
			],
			name: 'setAcceptRON',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_merchant',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					internalType: 'bool',
					name: '_allowed',
					type: 'bool',
				},
			],
			name: 'setAllowedToken',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					internalType: 'bool',
					name: '_allowed',
					type: 'bool',
				},
			],
			name: 'setAllowedToken',
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
			name: 'unpause',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_merchant',
					type: 'address',
				},
				{
					internalType: 'bool',
					name: '_enabled',
					type: 'bool',
				},
			],
			name: 'updateMerchant',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bool',
					name: '_enabled',
					type: 'bool',
				},
			],
			name: 'updateWhitelist',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			stateMutability: 'payable',
			type: 'receive',
		},
	],
}
export default MAVIS_PAY
