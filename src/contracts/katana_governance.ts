import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'InvalidInitialization',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidLength',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NotInitializing',
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
		name: 'OwnableInvalidOwner',
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
		name: 'OwnableUnauthorizedAccount',
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
				internalType: 'address',
				name: 'actor',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'allowed',
				type: 'bool',
			},
		],
		name: 'AllowedActorUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'by',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'factory',
				type: 'address',
			},
		],
		name: 'FactoryUpdated',
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
				indexed: true,
				internalType: 'address',
				name: 'token0',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'token1',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'pair',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'allPairsLength',
				type: 'uint256',
			},
		],
		name: 'PairCreated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'newImpl',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'oldImpl',
				type: 'address',
			},
		],
		name: 'PairProxyUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'by',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint40',
				name: 'whitelistUntil',
				type: 'uint40',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'allowed',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'bool[]',
				name: 'statuses',
				type: 'bool[]',
			},
		],
		name: 'PermissionUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'by',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'oldRouter',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newRouter',
				type: 'address',
			},
		],
		name: 'RouterUpdated',
		type: 'event',
	},
	{
		inputs: [],
		name: 'INIT_CODE_PAIR_HASH',
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
				internalType: 'uint256',
				name: 'index',
				type: 'uint256',
			},
		],
		name: 'allPairs',
		outputs: [
			{
				internalType: 'address',
				name: 'pair',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'allPairsLength',
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
		name: 'allowedAll',
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
				name: 'tokenA',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'tokenB',
				type: 'address',
			},
		],
		name: 'createPair',
		outputs: [
			{
				internalType: 'address',
				name: 'pair',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'tokenA',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'tokenB',
				type: 'address',
			},
			{
				internalType: 'uint40',
				name: 'whitelistUntil',
				type: 'uint40',
			},
			{
				internalType: 'address[]',
				name: 'alloweds',
				type: 'address[]',
			},
			{
				internalType: 'bool[]',
				name: 'statuses',
				type: 'bool[]',
			},
		],
		name: 'createPairAndSetPermission',
		outputs: [
			{
				internalType: 'address',
				name: 'pair',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint24',
				name: 'fee',
				type: 'uint24',
			},
			{
				internalType: 'int24',
				name: 'tickSpacing',
				type: 'int24',
			},
			{
				internalType: 'uint8',
				name: 'feeProtocolNum',
				type: 'uint8',
			},
			{
				internalType: 'uint8',
				name: 'feeProtocolDen',
				type: 'uint8',
			},
		],
		name: 'enableFeeAmount',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getManyTokensWhitelistInfo',
		outputs: [
			{
				internalType: 'address[]',
				name: 'tokens',
				type: 'address[]',
			},
			{
				internalType: 'uint40[]',
				name: 'whitelistedUntils',
				type: 'uint40[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'tokenA',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'tokenB',
				type: 'address',
			},
		],
		name: 'getPair',
		outputs: [
			{
				internalType: 'address',
				name: 'pair',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getPositionManager',
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
		name: 'getRouter',
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
		name: 'getV2Factory',
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
		name: 'getV3Factory',
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
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
		],
		name: 'getWhitelistUntil',
		outputs: [
			{
				internalType: 'uint40',
				name: '',
				type: 'uint40',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'getWhitelistedTokensFor',
		outputs: [
			{
				internalType: 'address[]',
				name: 'tokens',
				type: 'address[]',
			},
			{
				internalType: 'uint40[]',
				name: 'whitelistUntils',
				type: 'uint40[]',
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
				internalType: 'address',
				name: 'factory',
				type: 'address',
			},
		],
		name: 'initialize',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'v3Factory',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'positionManager',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'v3Migrator',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'legacyPermissionedRouter',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'aggregateRouter',
				type: 'address',
			},
		],
		name: 'initializeV2',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'actor',
				type: 'address',
			},
		],
		name: 'isAllowedActor',
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
				internalType: 'address[]',
				name: 'tokens',
				type: 'address[]',
			},
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'isAuthorized',
		outputs: [
			{
				internalType: 'bool',
				name: 'authorized',
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
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'isAuthorized',
		outputs: [
			{
				internalType: 'bool',
				name: 'authorized',
				type: 'bool',
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
		inputs: [],
		name: 'pairImplementation',
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
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'actor',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'allowed',
				type: 'bool',
			},
		],
		name: 'setAllowedActor',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bool',
				name: 'shouldAllow',
				type: 'bool',
			},
		],
		name: 'setAllowedAll',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'impl',
				type: 'address',
			},
		],
		name: 'setPairImplementation',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
			{
				internalType: 'uint40',
				name: 'whitelistUntil',
				type: 'uint40',
			},
			{
				internalType: 'address[]',
				name: 'alloweds',
				type: 'address[]',
			},
			{
				internalType: 'bool[]',
				name: 'statuses',
				type: 'bool[]',
			},
		],
		name: 'setPermission',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'router',
				type: 'address',
			},
		],
		name: 'setRouter',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newTreasury',
				type: 'address',
			},
		],
		name: 'setTreasury',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'toggleFlashLoanPermission',
		stateMutability: 'nonpayable',
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
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'treasury',
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
] as const
const KATANA_GOVERNANCE: Contract<typeof abi> = {
	name: 'Katana Governance',
	address: '0x082c33e95956e360f97703ce20ad7bcaa5c9a754',
	is_deprecated: false,
	created_at: 1732174992,
	abi: abi,
}
export default KATANA_GOVERNANCE
