export const NAME_CHECKER = {
	name: 'Name Checker',
	address: '0xdb8eabf4f27baa9c5ebad23fee1cb12037b58065',
	abi: [
		{
			inputs: [],
			stateMutability: 'payable',
			type: 'constructor',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'total',
					type: 'uint256',
				},
			],
			name: 'TotalSubStringTooLarge',
			type: 'error',
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
					name: 'wordCount',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'bool',
					name: 'shouldForbid',
					type: 'bool',
				},
			],
			name: 'ForbiddenWordsUpdated',
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
					internalType: 'uint8',
					name: 'min',
					type: 'uint8',
				},
				{
					indexed: false,
					internalType: 'uint8',
					name: 'max',
					type: 'uint8',
				},
			],
			name: 'WordRangeUpdated',
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
			inputs: [
				{
					internalType: 'string',
					name: 'name',
					type: 'string',
				},
			],
			name: 'containsBlacklistedWord',
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
					internalType: 'string',
					name: 'name',
					type: 'string',
				},
			],
			name: 'containsInvalidCharacter',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'string',
					name: 'name',
					type: 'string',
				},
			],
			name: 'forbidden',
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
					internalType: 'string',
					name: 'str',
					type: 'string',
				},
			],
			name: 'getAllSubStrings',
			outputs: [
				{
					internalType: 'string[]',
					name: 'subStrings',
					type: 'string[]',
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
			name: 'getWordRange',
			outputs: [
				{
					internalType: 'uint8',
					name: 'min',
					type: 'uint8',
				},
				{
					internalType: 'uint8',
					name: 'max',
					type: 'uint8',
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
					internalType: 'uint8',
					name: 'min',
					type: 'uint8',
				},
				{
					internalType: 'uint8',
					name: 'max',
					type: 'uint8',
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
					internalType: 'string',
					name: 'str',
					type: 'string',
				},
			],
			name: 'pack',
			outputs: [
				{
					internalType: 'uint256',
					name: 'packed',
					type: 'uint256',
				},
			],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'string[]',
					name: 'strs',
					type: 'string[]',
				},
			],
			name: 'packBulk',
			outputs: [
				{
					internalType: 'uint256[]',
					name: 'packeds',
					type: 'uint256[]',
				},
			],
			stateMutability: 'pure',
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
					internalType: 'uint256[]',
					name: 'packedWords',
					type: 'uint256[]',
				},
				{
					internalType: 'bool',
					name: 'shouldForbid',
					type: 'bool',
				},
			],
			name: 'setForbiddenWords',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'string[]',
					name: 'words',
					type: 'string[]',
				},
				{
					internalType: 'bool',
					name: 'shouldForbid',
					type: 'bool',
				},
			],
			name: 'setForbiddenWords',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint8',
					name: 'min',
					type: 'uint8',
				},
				{
					internalType: 'uint8',
					name: 'max',
					type: 'uint8',
				},
			],
			name: 'setWordRange',
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
					name: 'strlen',
					type: 'uint256',
				},
			],
			name: 'totalSubString',
			outputs: [
				{
					internalType: 'uint256',
					name: 'total',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'min',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'max',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
	],
}
