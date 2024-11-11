import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'InvalidAmountOfRON',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidArrayLength',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidRatio',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NullAddress',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'updatedBy',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'commissionIdx',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address payable',
				name: 'newRecipient',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'newName',
				type: 'string',
			},
		],
		name: 'CommissionInfoUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'updatedBy',
				type: 'address',
			},
			{
				components: [
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
						internalType: 'string',
						name: 'name',
						type: 'string',
					},
				],
				indexed: false,
				internalType: 'struct INSCommission.Commission[]',
				name: 'commissionInfos',
				type: 'tuple[]',
			},
		],
		name: 'CommissionsUpdated',
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
				name: 'commissionAmount',
				type: 'uint256',
			},
		],
		name: 'Distributed',
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
		name: 'SENDER_ROLE',
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
		name: 'getCommissions',
		outputs: [
			{
				components: [
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
						internalType: 'string',
						name: 'name',
						type: 'string',
					},
				],
				internalType: 'struct INSCommission.Commission[]',
				name: 'commissionInfos',
				type: 'tuple[]',
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
				components: [
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
						internalType: 'string',
						name: 'name',
						type: 'string',
					},
				],
				internalType: 'struct INSCommission.Commission[]',
				name: 'commissionInfos',
				type: 'tuple[]',
			},
			{
				internalType: 'address[]',
				name: 'allowedSenders',
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
				name: 'commissionIdx',
				type: 'uint256',
			},
			{
				internalType: 'address payable',
				name: 'newRecipient',
				type: 'address',
			},
			{
				internalType: 'string',
				name: 'newName',
				type: 'string',
			},
		],
		name: 'setCommissionInfo',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
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
						internalType: 'string',
						name: 'name',
						type: 'string',
					},
				],
				internalType: 'struct INSCommission.Commission[]',
				name: 'commissionInfos',
				type: 'tuple[]',
			},
		],
		name: 'setCommissions',
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
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const RNS_COMMISSION: Contract<typeof abi> = {
	name: 'RNS Commission',
	address: '0x70d1a6f75161e8d5de10e4aaa82aa1b423b4362a',
	is_deprecated: false,
	created_at: 1720085010,
	abi: abi,
}
export default RNS_COMMISSION
