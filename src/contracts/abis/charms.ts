export const CHARMS_ABI = [
	{
		constant: false,
		inputs: [],
		name: '',
		outputs: null,
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'account',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'operator',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'approved',
				type: 'bool',

			},
		],
		name: 'ApprovalForAll',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'version',
				type: 'uint8',

			},
		],
		name: 'Initialized',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'account',
				type: 'address',

			},
		],
		name: 'Paused',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',

			},
			{
				internal_type: '',
				name: 'previousAdminRole',
				type: 'bytes32',

			},
			{
				internal_type: '',
				name: 'newAdminRole',
				type: 'bytes32',

			},
		],
		name: 'RoleAdminChanged',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',

			},
			{
				internal_type: '',
				name: 'account',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'sender',
				type: 'address',

			},
		],
		name: 'RoleGranted',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',

			},
			{
				internal_type: '',
				name: 'account',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'sender',
				type: 'address',

			},
		],
		name: 'RoleRevoked',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'operator',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'from',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'to',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'ids',
				type: 'uint256[]',

			},
			{
				internal_type: '',
				name: 'values',
				type: 'uint256[]',

			},
		],
		name: 'TransferBatch',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'operator',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'from',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'to',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'id',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: 'value',
				type: 'uint256',

			},
		],
		name: 'TransferSingle',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'value',
				type: 'string',

			},
			{
				internal_type: '',
				name: 'id',
				type: 'uint256',

			},
		],
		name: 'URI',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'account',
				type: 'address',

			},
		],
		name: 'Unpaused',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'DEFAULT_ADMIN_ROLE',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bytes32',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'MINTER_ROLE',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bytes32',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'PAUSER_ROLE',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bytes32',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'account',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'id',
				type: 'uint256',

			},
		],
		name: 'balanceOf',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint256',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'accounts',
				type: 'address[]',

			},
			{
				internal_type: '',
				name: 'ids',
				type: 'uint256[]',

			},
		],
		name: 'balanceOfBatch',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint256[]',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'account',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'id',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: 'value',
				type: 'uint256',

			},
		],
		name: 'burn',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'account',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'ids',
				type: 'uint256[]',

			},
			{
				internal_type: '',
				name: 'values',
				type: 'uint256[]',

			},
		],
		name: 'burnBatch',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',

			},
		],
		name: 'getRoleAdmin',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bytes32',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',

			},
			{
				internal_type: '',
				name: 'index',
				type: 'uint256',

			},
		],
		name: 'getRoleMember',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'address',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',

			},
		],
		name: 'getRoleMemberCount',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint256',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',

			},
			{
				internal_type: '',
				name: 'account',
				type: 'address',

			},
		],
		name: 'grantRole',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',

			},
			{
				internal_type: '',
				name: 'account',
				type: 'address',

			},
		],
		name: 'hasRole',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bool',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'name_',
				type: 'string',

			},
			{
				internal_type: '',
				name: 'symbol_',
				type: 'string',

			},
			{
				internal_type: '',
				name: '_admin',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_minters',
				type: 'address[]',

			},
		],
		name: 'initialize',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'account',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'operator',
				type: 'address',

			},
		],
		name: 'isApprovedForAll',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bool',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'to',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'id',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: 'amount',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: 'data',
				type: 'bytes',

			},
		],
		name: 'mint',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'to',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'ids',
				type: 'uint256[]',

			},
			{
				internal_type: '',
				name: 'amounts',
				type: 'uint256[]',

			},
			{
				internal_type: '',
				name: 'data',
				type: 'bytes',

			},
		],
		name: 'mintBatch',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'name',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'string',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'pause',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'paused',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bool',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',

			},
			{
				internal_type: '',
				name: 'account',
				type: 'address',

			},
		],
		name: 'renounceRole',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'role',
				type: 'bytes32',

			},
			{
				internal_type: '',
				name: 'account',
				type: 'address',

			},
		],
		name: 'revokeRole',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'from',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'to',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'ids',
				type: 'uint256[]',

			},
			{
				internal_type: '',
				name: 'amounts',
				type: 'uint256[]',

			},
			{
				internal_type: '',
				name: 'data',
				type: 'bytes',

			},
		],
		name: 'safeBatchTransferFrom',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'from',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'to',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'id',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: 'amount',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: 'data',
				type: 'bytes',

			},
		],
		name: 'safeTransferFrom',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'operator',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'approved',
				type: 'bool',

			},
		],
		name: 'setApprovalForAll',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: 'interfaceId',
				type: 'bytes4',

			},
		],
		name: 'supportsInterface',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bool',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'symbol',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'string',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'unpause',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint256',

			},
		],
		name: 'uri',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'string',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
]
