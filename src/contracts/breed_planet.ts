import { Contract } from '@/contract'
const BREED_PLANET: Contract = {
	name: 'Breed Planet',
	address: '0xe862af84683aac9572e0780b0e6eb44f9cf3bb76',
	is_deprecated: false,
	updated_at: 1702972187,
	abi: [
		{
			inputs: [],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			inputs: [],
			name: 'OnlyCoordinatorCanFulfill',
			type: 'error',
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
					internalType: 'uint256',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'BreedSuccess',
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
					internalType: 'bytes32',
					name: '_requestHash',
					type: 'bytes32',
				},
			],
			name: 'RequestBreed',
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
			inputs: [
				{
					internalType: 'bytes32',
					name: '',
					type: 'bytes32',
				},
			],
			name: 'BreedStructMap',
			outputs: [
				{
					internalType: 'address',
					name: 'userAddress',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'planetAId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'planetBId',
					type: 'uint256',
				},
				{
					internalType: 'bool',
					name: 'shouldUseMiniBlackhole',
					type: 'bool',
				},
				{
					internalType: 'bool',
					name: 'isDone',
					type: 'bool',
				},
				{
					internalType: 'uint256',
					name: 'planetId',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'additionBornBaseInterval',
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
			name: 'addonGasPrice',
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
					name: '',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'animaPrices',
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
			name: 'animaToMiniBlackhole',
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
			name: 'animaToken',
			outputs: [
				{
					internalType: 'contract IERC20Upgradeable',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'apeironGodiverseCollection',
			outputs: [
				{
					internalType: 'contract ERC1155BurnableUpgradeable',
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
					name: '',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'apeironGodiverseCollectionNumbers',
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
			name: 'aprsPrice',
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
			name: 'aprsToken',
			outputs: [
				{
					internalType: 'contract IERC20Upgradeable',
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
			name: 'bornBaseInterval',
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
			name: 'breedPlanetDataContract',
			outputs: [
				{
					internalType: 'contract IBreedPlanetData',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'callbackGaslimit',
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
			name: 'currentPlanetId',
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
					name: 'planetId',
					type: 'uint256',
				},
			],
			name: 'getParentID',
			outputs: [
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
			inputs: [],
			name: 'isPrimevalActive',
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
			name: 'minAnimaUse',
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
			name: 'minMiniBlackholeUse',
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
			name: 'miniBlackholeTokenId',
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
			name: 'normalBreedBaseInterval',
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
			name: 'planetAttributeManagerContract',
			outputs: [
				{
					internalType: 'contract PlanetAttributeManager',
					name: '',
					type: 'address',
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
			name: 'primevalApeironGodiverseCollectionNumbers',
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
					name: '_reqHash',
					type: 'bytes32',
				},
				{
					internalType: 'uint256',
					name: '_randomSeed',
					type: 'uint256',
				},
			],
			name: 'rawFulfillRandomSeed',
			outputs: [],
			stateMutability: 'nonpayable',
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
					internalType: 'uint256',
					name: 'planetAId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'planetBId',
					type: 'uint256',
				},
				{
					internalType: 'bool',
					name: 'shouldUseMiniBlackhole',
					type: 'bool',
				},
			],
			name: 'requestBreed',
			outputs: [
				{
					internalType: 'bytes32',
					name: '',
					type: 'bytes32',
				},
			],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'planetAId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'planetBId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'animusUse',
					type: 'uint256',
				},
				{
					internalType: 'bool',
					name: 'shouldUseMiniBlackhole',
					type: 'bool',
				},
				{
					internalType: 'uint256',
					name: 'time',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: 'signature',
					type: 'bytes',
				},
			],
			name: 'requestBreedWithAnimus',
			outputs: [
				{
					internalType: 'bytes32',
					name: '',
					type: 'bytes32',
				},
			],
			stateMutability: 'payable',
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
			inputs: [
				{
					internalType: 'uint256',
					name: '_animaToMiniBlackhole',
					type: 'uint256',
				},
			],
			name: 'setAnimaToMiniBlackhole',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256[][]',
					name: '_apeironGodiverseCollectionNumbers',
					type: 'uint256[][]',
				},
				{
					internalType: 'bool',
					name: '_isPrimeval',
					type: 'bool',
				},
			],
			name: 'setApeironGodiverseCollectionNumber',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_aprsPrice',
					type: 'uint256',
				},
				{
					internalType: 'uint256[][]',
					name: '_animaPrices',
					type: 'uint256[][]',
				},
			],
			name: 'setAprsAndAnimaPrices',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_normalBreedBaseInterval',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_bornBaseInterval',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_additionBornBaseInterval',
					type: 'uint256',
				},
			],
			name: 'setBreedBornInterval',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_currentPlanetId',
					type: 'uint256',
				},
			],
			name: 'setCurrentPlanetId',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_miniBlackholeTokenId',
					type: 'uint256',
				},
			],
			name: 'setMiniBlackholeTokenId',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_minMiniBlackholeUse',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_minAnimaUse',
					type: 'uint256',
				},
			],
			name: 'setMinimumTokenUse',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bool',
					name: '_isPrimevalActive',
					type: 'bool',
				},
			],
			name: 'setPrimevalActive',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_ronToUseInRandomness',
					type: 'uint256',
				},
			],
			name: 'setRonToUseInRandomness',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_vrfCoordinator',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_callbackGaslimit',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_addonGasPrice',
					type: 'uint256',
				},
			],
			name: 'setupVRFCoordinator',
			outputs: [],
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
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_nftAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_breedAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_blacklistAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_apeironGodiverseCollectionAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_aprsTokenAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_animaTokenAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_planetAttributeManagerContract',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_systemAddress',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_ronToUseInRandomness',
					type: 'uint256',
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
		{
			inputs: [],
			name: 'vrfCoordinator',
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
					name: 'tokenAddress',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: 'wallet',
					type: 'address',
				},
			],
			name: 'withdrawFunds',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			stateMutability: 'payable',
			type: 'receive',
		},
	],
}
export default BREED_PLANET
