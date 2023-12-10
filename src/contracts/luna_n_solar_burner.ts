export const LUNA_N_SOLAR_BURNER = {
	name: 'Luna N Solar Burner',
	address: '0xe8475e0baffc6c34bf29c05c52c79c336bec5dfd',
	abi: [
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
					indexed: false,
					internalType: 'address',
					name: 'blacklist',
					type: 'address',
				},
			],
			name: 'BlacklistContractsUpdated',
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
					name: '_burntAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_burntCount',
					type: 'uint256',
				},
			],
			name: 'TokenBurnt',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_burnTokenContractAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_lunaId',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_solarId',
					type: 'uint256',
				},
			],
			name: 'TokenInfoUpdate',
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
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'addressBurntCountMap',
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
					name: '_burnCount',
					type: 'uint256',
				},
			],
			name: 'burnToken',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'burnTokenContract',
			outputs: [
				{
					internalType: 'contract ERC1155Burnable',
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
			inputs: [],
			name: 'lunaId',
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
			name: 'renounceOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_blacklist',
					type: 'address',
				},
			],
			name: 'setupBlacklistContracts',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_burnTokenContractAddress',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_lunaId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_solarId',
					type: 'uint256',
				},
			],
			name: 'setupTokenInfo',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'solarId',
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
	],
}
