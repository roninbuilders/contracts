import { Contract } from '@/contract'
export const APEIRON_APOSTLE_SEASON_MINTING_CALLER: Contract = {
	name: 'Apeiron Apostle Season Minting Caller',
	address: '0xb110caa8128ddcd08c57b3cd0d9ba3e9fa0ed85a',
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
					name: '_minterAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_successDungeonApostleIdArray',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_failDungeonApostleIdArray',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'string[]',
					name: '_failReasonArray',
					type: 'string[]',
				},
			],
			name: 'SeasonMintSummary',
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
					internalType: 'uint8',
					name: '_mintType',
					type: 'uint8',
				},
				{
					internalType: 'enum ApostleMeta.ApostleClass[]',
					name: '_apostleClassArray',
					type: 'uint8[]',
				},
				{
					internalType: 'uint256[]',
					name: '_dungeonApostleIdArray',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '_geneArray',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '_ivArray',
					type: 'uint256[]',
				},
				{
					internalType: 'bool[]',
					name: '_isFreeMintArray',
					type: 'bool[]',
				},
				{
					internalType: 'uint256',
					name: '_userMaxFreeMintCount',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_userMaxSlotMintCount',
					type: 'uint256',
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
			name: 'requestMultiSeasonPurchase',
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
					name: '_apostleSeasonMintingAddress',
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
