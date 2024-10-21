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
		name: 'InvalidDropData',
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
		name: 'InvalidInterval',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidMaxCheckin',
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
		name: 'MainnetNotAllowed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'MaxCheckinReached',
		type: 'error',
	},
	{
		inputs: [],
		name: 'MintFailed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NoValidatorContract',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NotInitializing',
		type: 'error',
	},
	{
		inputs: [],
		name: 'SignatureAlreadyUsed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'SignatureExpired',
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
				internalType: 'uint256',
				name: 'oldInterval',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newInterval',
				type: 'uint256',
			},
		],
		name: 'CheckinIntervalUpdated',
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
				name: 'wallet',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'tokenID',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'timestamp',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'seed',
				type: 'uint256',
			},
		],
		name: 'ItemMinted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldMaxCheckin',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newMaxCheckin',
				type: 'uint256',
			},
		],
		name: 'MaxCheckinUpdated',
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
				internalType: 'contract BaseERC1155',
				name: 'newItemContract',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'newDropTokenIDs',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'newDropChances',
				type: 'uint256[]',
			},
		],
		name: 'RaffleParamsUpdated',
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
				name: 'newInterval',
				type: 'uint256',
			},
		],
		name: 'adminSetCheckinInterval',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'newMaxCheckin',
				type: 'uint256',
			},
		],
		name: 'adminSetMaxCheckin',
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
				internalType: 'contract BaseERC1155',
				name: 'itemContract',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: 'dropTokenIDs',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: 'dropChances',
				type: 'uint256[]',
			},
		],
		name: 'adminUpdateRaffleParams',
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
				internalType: 'address',
				name: 'wallet',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'timestamp',
				type: 'uint256',
			},
		],
		name: 'checkinCount',
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
		name: 'checkinInterval',
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
				name: 'wallet',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'timestamp',
				type: 'uint256',
			},
		],
		name: 'checkinLeft',
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
		inputs: [],
		name: 'getStorage',
		outputs: [
			{
				components: [
					{
						internalType: 'contract BaseERC1155',
						name: '_itemContract',
						type: 'address',
					},
					{
						internalType: 'uint256[]',
						name: '_dropTokenIDs',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: '_dropChances',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: '_dropRanges',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: '_totalDropChances',
						type: 'uint256',
					},
				],
				internalType: 'struct ItemRaffle.ViewableStorage',
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
						internalType: 'address',
						name: 'adminAddress',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'checkinInterval',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'maxCheckin',
						type: 'uint256',
					},
					{
						internalType: 'contract BaseERC1155',
						name: 'itemContract',
						type: 'address',
					},
					{
						internalType: 'uint256[]',
						name: 'dropTokenIDs',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'dropChances',
						type: 'uint256[]',
					},
				],
				internalType: 'struct ItemRaffleInitializer',
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
		inputs: [],
		name: 'maxCheckin',
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
		name: 'mintItem',
		outputs: [
			{
				internalType: 'uint256',
				name: 'tokenID',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'seed',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expireTime',
						type: 'uint256',
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
				internalType: 'struct ItemRaffle.MintItemPayload',
				name: 'payload',
				type: 'tuple',
			},
		],
		name: 'mintWithCustomSeed',
		outputs: [
			{
				internalType: 'uint256',
				name: 'tokenID',
				type: 'uint256',
			},
		],
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
const ITEM_RAFFLE: Contract<typeof abi> = {
	name: 'Item Raffle',
	address: '0xad2fdc03606e6fedbe05f2d0ff7a33de5b234f3e',
	is_deprecated: false,
	created_at: 1726727988,
	abi: abi,
}
export default ITEM_RAFFLE
