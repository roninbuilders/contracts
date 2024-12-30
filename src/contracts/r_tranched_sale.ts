import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_nft',
				type: 'address',
			},
			{
				internalType: 'address payable',
				name: '_treasury',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_allocator',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'AllocationUsed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ExceedsAllocationQty',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ForgedSignature',
		type: 'error',
	},
	{
		inputs: [],
		name: 'IncorrectValue',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidQuantity',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidShortString',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NonExistantTranche',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'str',
				type: 'string',
			},
		],
		name: 'StringTooLong',
		type: 'error',
	},
	{
		inputs: [],
		name: 'TrancheNotYetOpen',
		type: 'error',
	},
	{
		inputs: [],
		name: 'TransferFailed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ZeroAddressNotAllowed',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [],
		name: 'EIP712DomainChanged',
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
		name: 'TRANCHE_OPS',
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
				internalType: 'uint32',
				name: 'nonce',
				type: 'uint32',
			},
		],
		name: 'allocationUsed',
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
		name: 'allocator',
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
		name: 'currentTranche',
		outputs: [
			{
				internalType: 'uint64',
				name: '',
				type: 'uint64',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'eip712Domain',
		outputs: [
			{
				internalType: 'bytes1',
				name: 'fields',
				type: 'bytes1',
			},
			{
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'version',
				type: 'string',
			},
			{
				internalType: 'uint256',
				name: 'chainId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'verifyingContract',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'salt',
				type: 'bytes32',
			},
			{
				internalType: 'uint256[]',
				name: 'extensions',
				type: 'uint256[]',
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
						internalType: 'uint32',
						name: 'nonce',
						type: 'uint32',
					},
					{
						internalType: 'uint64',
						name: 'trancheId',
						type: 'uint64',
					},
					{
						internalType: 'address',
						name: 'account',
						type: 'address',
					},
				],
				internalType: 'struct ITranchedSale.Allocation',
				name: 'allo',
				type: 'tuple',
			},
		],
		name: 'getAllocationTypedDataHash',
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
				internalType: 'uint64',
				name: 'qty',
				type: 'uint64',
			},
			{
				internalType: 'uint64',
				name: 'trancheId',
				type: 'uint64',
			},
		],
		name: 'getPrice',
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
				internalType: 'uint64',
				name: 'id',
				type: 'uint64',
			},
		],
		name: 'getTranche',
		outputs: [
			{
				components: [
					{
						internalType: 'bool',
						name: 'exists',
						type: 'bool',
					},
					{
						internalType: 'bool',
						name: 'signatureRequired',
						type: 'bool',
					},
					{
						internalType: 'uint64',
						name: 'id',
						type: 'uint64',
					},
					{
						internalType: 'uint64',
						name: 'qty',
						type: 'uint64',
					},
					{
						internalType: 'uint256',
						name: 'price',
						type: 'uint256',
					},
				],
				internalType: 'struct ITranchedSale.Tranche',
				name: '',
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
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
		],
		name: 'grantTrancheOpsRole',
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
				internalType: 'uint64',
				name: 'qty',
				type: 'uint64',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint64',
				name: 'trancheId',
				type: 'uint64',
			},
			{
				internalType: 'uint32',
				name: 'nonce',
				type: 'uint32',
			},
			{
				internalType: 'bytes',
				name: 'signature',
				type: 'bytes',
			},
		],
		name: 'mint',
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'nft',
		outputs: [
			{
				internalType: 'contract IrNFT',
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
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
		],
		name: 'revokeTrancheOpsRole',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_allocator',
				type: 'address',
			},
		],
		name: 'setAllocator',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint64',
				name: 'id',
				type: 'uint64',
			},
		],
		name: 'setCurrentTranche',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_nft',
				type: 'address',
			},
		],
		name: 'setNft',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint64',
				name: 'id',
				type: 'uint64',
			},
			{
				components: [
					{
						internalType: 'bool',
						name: 'exists',
						type: 'bool',
					},
					{
						internalType: 'bool',
						name: 'signatureRequired',
						type: 'bool',
					},
					{
						internalType: 'uint64',
						name: 'id',
						type: 'uint64',
					},
					{
						internalType: 'uint64',
						name: 'qty',
						type: 'uint64',
					},
					{
						internalType: 'uint256',
						name: 'price',
						type: 'uint256',
					},
				],
				internalType: 'struct ITranchedSale.Tranche',
				name: 'tranche',
				type: 'tuple',
			},
		],
		name: 'setTranche',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address payable',
				name: '_treasury',
				type: 'address',
			},
		],
		name: 'setTreasury',
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
		name: 'treasury',
		outputs: [
			{
				internalType: 'address payable',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'withdraw',
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const R_TRANCHED_SALE: Contract<typeof abi> = {
	name: 'R Tranched Sale',
	address: '0x224fe292cc0612de3ae5d263e45131afeb8bea61',
	is_deprecated: false,
	created_at: 1733724727,
	abi: abi,
}
export default R_TRANCHED_SALE
