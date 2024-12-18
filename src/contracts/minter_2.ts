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
				name: 'account',
				type: 'address',
			},
		],
		name: 'AddressInsufficientBalance',
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
		name: 'InvalidAirdropId',
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
		name: 'InvalidValidatorContract',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ItemAlreadyMinted',
		type: 'error',
	},
	{
		inputs: [],
		name: 'MainnetNotAllowed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'MintExpired',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NoValidatorContract',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NotEnoughPayment',
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
		inputs: [],
		name: 'SignatureAlreadyUsed',
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
				internalType: 'contract BaseNFT',
				name: 'nftContract',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldMintPrice',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newMintPrice',
				type: 'uint256',
			},
		],
		name: 'MintPriceUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'airDropId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'mintedTokenIds',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'genesisTokenIds',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'recipients',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'mergedDetails',
				type: 'string',
			},
		],
		name: 'NFTAirDroppedBatch',
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
				name: 'price',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'details',
				type: 'string',
			},
		],
		name: 'OffchainItemPurchased',
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
				internalType: 'address',
				name: 'oldAddress',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newAddress',
				type: 'address',
			},
		],
		name: 'TreasuryUpdated',
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
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'contract BaseNFT',
				name: 'nftContract',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'recipient',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'itemId',
				type: 'string',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'mintedTokenId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'details',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'counterName',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'counterValue',
				type: 'uint256',
			},
		],
		name: 'UserMintedNFT',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'contract Validator',
				name: 'oldContract',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'contract Validator',
				name: 'newContract',
				type: 'address',
			},
		],
		name: 'ValidatorContractUpdated',
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
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'Withdraw',
		type: 'event',
	},
	{
		inputs: [],
		name: 'AIRDROP_ID_MULTIPLIER',
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
				internalType: 'uint256',
				name: 'airDropId',
				type: 'uint256',
			},
			{
				internalType: 'contract IExplicitTokenIdNFT',
				name: 'nftContract',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: 'genesisTokenIDs',
				type: 'uint256[]',
			},
			{
				internalType: 'address[]',
				name: 'accounts',
				type: 'address[]',
			},
			{
				internalType: 'bool',
				name: 'useSafeMint',
				type: 'bool',
			},
			{
				internalType: 'string',
				name: 'details',
				type: 'string',
			},
		],
		name: 'adminAirDropNFT',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IMintableToken',
				name: 'tokenContract',
				type: 'address',
			},
			{
				internalType: 'address[]',
				name: 'accounts',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
		],
		name: 'adminMintTokens',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract BaseNFT',
				name: 'nftContract',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'mintPrice',
				type: 'uint256',
			},
		],
		name: 'adminSetMintPrice',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address payable',
				name: 'newTreasuryAddress',
				type: 'address',
			},
		],
		name: 'adminSetTreasuryAddress',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract Validator',
				name: 'validator',
				type: 'address',
			},
		],
		name: 'adminSetValidatorContract',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address payable',
				name: 'recipient',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'adminWithdraw',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address payable',
				name: 'recipient',
				type: 'address',
			},
		],
		name: 'adminWithdrawAll',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'baseVersion',
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
				name: 'airDropId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'genesisTokenId',
				type: 'uint256',
			},
		],
		name: 'encodeTokenId',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract BaseNFT',
				name: 'nftContract',
				type: 'address',
			},
			{
				internalType: 'string',
				name: 'counterName',
				type: 'string',
			},
		],
		name: 'getMintCounter',
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
				internalType: 'contract BaseNFT',
				name: 'nftContract',
				type: 'address',
			},
		],
		name: 'getMintPrice',
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
				internalType: 'contract BaseNFT',
				name: 'nftContract',
				type: 'address',
			},
			{
				internalType: 'string',
				name: 'itemId',
				type: 'string',
			},
		],
		name: 'getUserMintedTokenId',
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
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
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
				components: [
					{
						internalType: 'uint256',
						name: 'price',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expireTime',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'recipient',
						type: 'address',
					},
					{
						internalType: 'string',
						name: 'details',
						type: 'string',
					},
					{
						internalType: 'bytes',
						name: 'signature',
						type: 'bytes',
					},
					{
						internalType: 'bool',
						name: 'verifyMessageHash',
						type: 'bool',
					},
				],
				internalType: 'struct Minter.OffchainPurchasePayload',
				name: 'payload',
				type: 'tuple',
			},
		],
		name: 'purchaseOffchainItem',
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
		name: 'treasuryAddress',
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
		inputs: [
			{
				components: [
					{
						internalType: 'contract BaseNFT',
						name: 'nftContract',
						type: 'address',
					},
					{
						internalType: 'string',
						name: 'itemId',
						type: 'string',
					},
					{
						internalType: 'uint256',
						name: 'expireTime',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'recipient',
						type: 'address',
					},
					{
						internalType: 'string',
						name: 'details',
						type: 'string',
					},
					{
						internalType: 'bytes',
						name: 'signature',
						type: 'bytes',
					},
					{
						internalType: 'string',
						name: 'counterName',
						type: 'string',
					},
					{
						internalType: 'bool',
						name: 'verifyMessageHash',
						type: 'bool',
					},
				],
				internalType: 'struct Minter.UserMintPayload',
				name: 'payload',
				type: 'tuple',
			},
		],
		name: 'userMintNFT',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'validatorContract',
		outputs: [
			{
				internalType: 'contract Validator',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const
const MINTER_2: Contract<typeof abi> = {
	name: 'Minter',
	address: '0x88bc7541153374fac167428cbc8d9d1bccb069ca',
	is_deprecated: false,
	created_at: 1715931102,
	abi: abi,
}
export default MINTER_2
