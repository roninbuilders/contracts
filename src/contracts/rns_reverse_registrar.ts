export const RNS_REVERSE_REGISTRAR = {
	name: 'RNS Reverse Registrar',
	address: '0x2dcfb418410bc9c58ee58029fa3c69833a8f3231',
	abi: [
		{
			inputs: [],
			stateMutability: 'payable',
			type: 'constructor',
		},
		{
			inputs: [
				{
					internalType: 'bytes1',
					name: 'char',
					type: 'bytes1',
				},
			],
			name: 'InvalidCharacter',
			type: 'error',
		},
		{
			inputs: [],
			name: 'InvalidConfig',
			type: 'error',
		},
		{
			inputs: [],
			name: 'InvalidId',
			type: 'error',
		},
		{
			inputs: [],
			name: 'InvalidStringLength',
			type: 'error',
		},
		{
			inputs: [],
			name: 'NullAssignment',
			type: 'error',
		},
		{
			inputs: [],
			name: 'Unauthorized',
			type: 'error',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'contract INameResolver',
					name: 'resolver',
					type: 'address',
				},
			],
			name: 'DefaultResolverChanged',
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
					name: 'previousOwner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'OwnershipTransferred',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'addr',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'id',
					type: 'uint256',
				},
			],
			name: 'ReverseClaimed',
			type: 'event',
		},
		{
			inputs: [],
			name: 'CONTROLLER_ROLE',
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
					internalType: 'address',
					name: 'addr',
					type: 'address',
				},
			],
			name: 'claim',
			outputs: [
				{
					internalType: 'uint256',
					name: 'id',
					type: 'uint256',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'addr',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'resolver',
					type: 'address',
				},
			],
			name: 'claimWithResolver',
			outputs: [
				{
					internalType: 'uint256',
					name: 'id',
					type: 'uint256',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'addr',
					type: 'address',
				},
			],
			name: 'computeId',
			outputs: [
				{
					internalType: 'uint256',
					name: 'id',
					type: 'uint256',
				},
			],
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'id',
					type: 'uint256',
				},
			],
			name: 'getAddress',
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
			name: 'getDefaultResolver',
			outputs: [
				{
					internalType: 'contract INameResolver',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getRNSUnified',
			outputs: [
				{
					internalType: 'contract INSUnified',
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
					name: 'admin',
					type: 'address',
				},
				{
					internalType: 'contract INSUnified',
					name: 'rnsUnified',
					type: 'address',
				},
			],
			name: 'initialize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'owner',
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
			name: 'renounceOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract INameResolver',
					name: 'resolver',
					type: 'address',
				},
			],
			name: 'setDefaultResolver',
			outputs: [],
			stateMutability: 'nonpayable',
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
			name: 'setName',
			outputs: [
				{
					internalType: 'uint256',
					name: 'id',
					type: 'uint256',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'addr',
					type: 'address',
				},
				{
					internalType: 'string',
					name: 'name',
					type: 'string',
				},
			],
			name: 'setNameForAddr',
			outputs: [
				{
					internalType: 'uint256',
					name: 'id',
					type: 'uint256',
				},
			],
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
			stateMutability: 'pure',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'transferOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
