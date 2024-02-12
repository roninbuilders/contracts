import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: '_admin',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: '_enabled',
				type: 'bool',
			},
		],
		name: 'AdminAccessSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'previousAdmin',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newAdmin',
				type: 'address',
			},
		],
		name: 'AdminChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'beacon',
				type: 'address',
			},
		],
		name: 'BeaconUpgraded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_fromNetworkChainId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: '_requestIDs',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'enum ApeironBridgeMinter.NFT_TYPE',
				name: '_nftType',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: '_tokenIDs',
				type: 'uint256[]',
			},
		],
		name: 'MintAsset',
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
		name: 'apostleContract',
		outputs: [
			{
				internalType: 'contract IApeironApostle',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'blacklistContract',
		outputs: [
			{
				internalType: 'contract IBlacklist',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'godiverseCollectionContract',
		outputs: [
			{
				internalType: 'contract IApeironGodiverseCollection',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
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
		name: 'isAdmin',
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
				name: '_targetWallet',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_fromNetworkChainId',
				type: 'uint256',
			},
			{
				internalType: 'uint256[]',
				name: '_requestIDs',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_tokenIDs',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_genes',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_IVs',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_createTimes',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256',
				name: '_time',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: '_signature',
				type: 'bytes',
			},
		],
		name: 'mintApostle',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_targetWallet',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_fromNetworkChainId',
				type: 'uint256',
			},
			{
				internalType: 'uint256[]',
				name: '_requestIDs',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_tokenIDs',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_amounts',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256',
				name: '_time',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: '_signature',
				type: 'bytes',
			},
		],
		name: 'mintGodiverse',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_targetWallet',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_fromNetworkChainId',
				type: 'uint256',
			},
			{
				internalType: 'uint256[]',
				name: '_requestIDs',
				type: 'uint256[]',
			},
			{
				components: [
					{
						internalType: 'uint256[]',
						name: 'tokenIDs',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'genes',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'breedCounts',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'breedCountMaxs',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'createTimes',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'bornTimes',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'lastBreedTimes',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'parents',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'children',
						type: 'uint256[]',
					},
				],
				internalType: 'struct ApeironBridgeMinter.MintPlanetStruct',
				name: '_mintPlanetStructs',
				type: 'tuple',
			},
			{
				internalType: 'uint256',
				name: '_time',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: '_signature',
				type: 'bytes',
			},
		],
		name: 'mintPlanet',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_targetWallet',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_fromNetworkChainId',
				type: 'uint256',
			},
			{
				internalType: 'uint256[]',
				name: '_requestIDs',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_tokenIDs',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_genes',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256',
				name: '_time',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: '_signature',
				type: 'bytes',
			},
		],
		name: 'mintStar',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'mintedTokenMapping',
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
		name: 'planetContract',
		outputs: [
			{
				internalType: 'contract IApeironPlanet',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'primevalPlanetId',
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
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
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
				internalType: 'bool',
				name: 'enabled',
				type: 'bool',
			},
		],
		name: 'setAdmin',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'starContract',
		outputs: [
			{
				internalType: 'contract IApeironStar',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'starDataContract',
		outputs: [
			{
				internalType: 'contract IApeironStarData',
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
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'transferOwnership',
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
				name: '_planetContractAddress',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_starContractAddress',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_starDataContractAddress',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_apostleContractAddress',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_godiverseCollectionContractAddress',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_systemAddress',
				type: 'address',
			},
		],
		name: 'updateContractSetting',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_primevalPlanetId',
				type: 'uint256',
			},
		],
		name: 'updatePrimevalPlanetId',
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
		],
		name: 'upgradeTo',
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
] as const
const APEIRON_BRIDGE_MINTER: Contract<typeof abi> = {
	name: 'Apeiron Bridge Minter',
	address: '0xb85a5d588e88bba273b47704e3ce5ff0c8a36ab3',
	is_deprecated: false,
	updated_at: 1702606738,
	abi: abi,
}
export default APEIRON_BRIDGE_MINTER
