import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'AccessControlBadConfirmation',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'neededRole',
				type: 'bytes32',
			},
		],
		name: 'AccessControlUnauthorizedAccount',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'target',
				type: 'address',
			},
		],
		name: 'AddressEmptyCode',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'implementation',
				type: 'address',
			},
		],
		name: 'ERC1967InvalidImplementation',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ERC1967NonPayable',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'numerator',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'denominator',
				type: 'uint256',
			},
		],
		name: 'ERC2981InvalidDefaultRoyalty',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'receiver',
				type: 'address',
			},
		],
		name: 'ERC2981InvalidDefaultRoyaltyReceiver',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'numerator',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'denominator',
				type: 'uint256',
			},
		],
		name: 'ERC2981InvalidTokenRoyalty',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'receiver',
				type: 'address',
			},
		],
		name: 'ERC2981InvalidTokenRoyaltyReceiver',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'sender',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
		],
		name: 'ERC721IncorrectOwner',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'ERC721InsufficientApproval',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'approver',
				type: 'address',
			},
		],
		name: 'ERC721InvalidApprover',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
		],
		name: 'ERC721InvalidOperator',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
		],
		name: 'ERC721InvalidOwner',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'receiver',
				type: 'address',
			},
		],
		name: 'ERC721InvalidReceiver',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'sender',
				type: 'address',
			},
		],
		name: 'ERC721InvalidSender',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'ERC721NonexistentToken',
		type: 'error',
	},
	{
		inputs: [],
		name: 'EnforcedPause',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ExpectedPause',
		type: 'error',
	},
	{
		inputs: [],
		name: 'FailedInnerCall',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidAddress',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidInitialization',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidInputs',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidNFTContract',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidRecipient',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidSignature',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidTokenContract',
		type: 'error',
	},
	{
		inputs: [],
		name: 'MainnetNotAllowed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NotInitializing',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ReentrancyGuardReentrantCall',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'length',
				type: 'uint256',
			},
		],
		name: 'StringsInsufficientHexLength',
		type: 'error',
	},
	{
		inputs: [],
		name: 'UUPSUnauthorizedCallContext',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'slot',
				type: 'bytes32',
			},
		],
		name: 'UUPSUnsupportedProxiableUUID',
		type: 'error',
	},
	{
		inputs: [],
		name: 'UnknownNetwork',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'approved',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'Approval',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'approved',
				type: 'bool',
			},
		],
		name: 'ApprovalForAll',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'string',
				name: 'oldURI',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'newURI',
				type: 'string',
			},
		],
		name: 'BaseTokenURIUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'string',
				name: 'oldURI',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'newURI',
				type: 'string',
			},
		],
		name: 'ContractURIUpdated',
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
				internalType: 'uint96',
				name: 'royaltyFraction',
				type: 'uint96',
			},
		],
		name: 'DefaultRoyaltyInfoUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint64',
				name: 'version',
				type: 'uint64',
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
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'oldURI',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'newURI',
				type: 'string',
			},
		],
		name: 'TokenURIUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'Transfer',
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
				internalType: 'address',
				name: 'implementation',
				type: 'address',
			},
		],
		name: 'Upgraded',
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
		name: 'MINTER_ROLE',
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
		name: 'UPGRADER_ROLE',
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
		name: 'UPGRADE_INTERFACE_VERSION',
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
		inputs: [
			{
				internalType: 'string',
				name: 'newBaseTokenURI',
				type: 'string',
			},
		],
		name: 'adminSetBaseTokenURI',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'newContractURI',
				type: 'string',
			},
		],
		name: 'adminSetContractURI',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'recipient',
				type: 'address',
			},
			{
				internalType: 'uint96',
				name: 'royaltyFraction',
				type: 'uint96',
			},
		],
		name: 'adminSetDefaultRoyaltyInfo',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'dummyOwner',
				type: 'address',
			},
		],
		name: 'adminSetDummyOwner',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'approve',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
		],
		name: 'balanceOf',
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
		name: 'baseTokenURI',
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
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'burn',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'contractURI',
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
		name: 'currentTokenIdCounter',
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
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'getApproved',
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
				components: [
					{
						internalType: 'string',
						name: 'tokenName',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'tokenSymbol',
						type: 'string',
					},
					{
						internalType: 'address',
						name: 'adminAddress',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'dummyOwner',
						type: 'address',
					},
					{
						internalType: 'string',
						name: 'contractURI',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'baseTokenURI',
						type: 'string',
					},
					{
						internalType: 'address',
						name: 'royaltyRecipient',
						type: 'address',
					},
					{
						internalType: 'uint96',
						name: 'royaltyFraction',
						type: 'uint96',
					},
				],
				internalType: 'struct NFTContractInitializer',
				name: '_initializer',
				type: 'tuple',
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
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
		],
		name: 'isApprovedForAll',
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
		name: 'name',
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
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'ownerOf',
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
		inputs: [],
		name: 'proxiableUUID',
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
				name: 'callerConfirmation',
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
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'salePrice',
				type: 'uint256',
			},
		],
		name: 'royaltyInfo',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
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
				name: 'to',
				type: 'address',
			},
		],
		name: 'safeMint',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
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
				name: 'from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'approved',
				type: 'bool',
			},
		],
		name: 'setApprovalForAll',
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
		name: 'symbol',
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
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'tokenURI',
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
		inputs: [
			{
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'transferFrom',
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
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newImplementation',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'upgradeToAndCall',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'version',
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
] as const
const TMA_FAMILIAR: Contract<typeof abi> = {
	name: 'TMA Familiar',
	address: '0x94498e19c5c120f30130bb2c51df42adfb66fdab',
	is_deprecated: false,
	created_at: 1711368276,
	abi: abi,
}
export default TMA_FAMILIAR
