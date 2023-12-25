import { Contract } from '@/contract'
export const APEIRON_STAR_DATA: Contract = {
	name: 'Apeiron Star Data',
	address: '0x4a79611c7d0fc0f5ef0e023bfed4b292a3cd074e',
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
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'enum StarMeta.GodiverseSlot',
					name: '_slot',
					type: 'uint8',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_slotIndex',
					type: 'uint256',
				},
			],
			name: 'RemoveStarGodiverseMap',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'enum StarMeta.GodiverseSlot',
					name: '_slot',
					type: 'uint8',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_godiverseIdArray',
					type: 'uint256[]',
				},
			],
			name: 'SetAvailableGodiverseIdMap',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_godiverseIdArray',
					type: 'uint256[]',
				},
				{
					components: [
						{
							internalType: 'uint256',
							name: 'tierRequire',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'agingBuff',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'additionalOrbitalTrack',
							type: 'uint256',
						},
					],
					indexed: false,
					internalType: 'struct StarMeta.GodiverseInfo[]',
					name: '_sunInfoArray',
					type: 'tuple[]',
				},
			],
			name: 'SetGodiverseInfoMap',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'enum StarMeta.GodiverseSlot',
					name: '_slot',
					type: 'uint8',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_slotIndex',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_godiverseId',
					type: 'uint256',
				},
			],
			name: 'SetStarGodiverseMap',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_starGodiverseAttachmentAddress',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_starOrbitalTrackAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_blacklistAddress',
					type: 'address',
				},
			],
			name: 'UpdateStarFunctionContract',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_genId',
					type: 'uint256',
				},
			],
			name: 'UpdateStarGen',
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
			name: 'blacklistAddress',
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
					internalType: 'enum StarMeta.GodiverseSlot',
					name: '_slot',
					type: 'uint8',
				},
			],
			name: 'getAvailableGodiverseIdMap',
			outputs: [
				{
					internalType: 'uint256[]',
					name: '',
					type: 'uint256[]',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_godiverseId',
					type: 'uint256',
				},
			],
			name: 'getGodiverseInfo',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'tierRequire',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'agingBuff',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'additionalOrbitalTrack',
							type: 'uint256',
						},
					],
					internalType: 'struct StarMeta.GodiverseInfo',
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
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
			],
			name: 'getStarGenByStarId',
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
					name: '_starId',
					type: 'uint256',
				},
				{
					internalType: 'enum StarMeta.GodiverseSlot',
					name: '_slot',
					type: 'uint8',
				},
			],
			name: 'getStarGodiverseMapList',
			outputs: [
				{
					internalType: 'uint256[]',
					name: '',
					type: 'uint256[]',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
			],
			name: 'getStarGodiverseMapLists',
			outputs: [
				{
					internalType: 'uint256[]',
					name: '',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '',
					type: 'uint256[]',
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
			],
			name: 'godiverse_info_map',
			outputs: [
				{
					internalType: 'uint256',
					name: 'tierRequire',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'agingBuff',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'additionalOrbitalTrack',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'enum StarMeta.GodiverseSlot',
					name: '_slot',
					type: 'uint8',
				},
				{
					internalType: 'uint256[]',
					name: '_slotArray',
					type: 'uint256[]',
				},
			],
			name: 'initAvailableGodiverseIdMap',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_godiverseIdArray',
					type: 'uint256[]',
				},
				{
					components: [
						{
							internalType: 'uint256',
							name: 'tierRequire',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'agingBuff',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'additionalOrbitalTrack',
							type: 'uint256',
						},
					],
					internalType: 'struct StarMeta.GodiverseInfo[]',
					name: '_infoArray',
					type: 'tuple[]',
				},
			],
			name: 'initGodiverseInfoMap',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
				{
					internalType: 'enum StarMeta.GodiverseSlot',
					name: '_slot',
					type: 'uint8',
				},
				{
					internalType: 'uint256',
					name: '_slotCount',
					type: 'uint256',
				},
			],
			name: 'initStarGodiverseMap',
			outputs: [],
			stateMutability: 'nonpayable',
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
					name: '_starId',
					type: 'uint256',
				},
				{
					internalType: 'enum StarMeta.GodiverseSlot',
					name: '_slot',
					type: 'uint8',
				},
				{
					internalType: 'uint256',
					name: '_slotIndex',
					type: 'uint256',
				},
			],
			name: 'removeStarGodiverseMap',
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
					name: '_starId',
					type: 'uint256',
				},
				{
					internalType: 'enum StarMeta.GodiverseSlot',
					name: '_slot',
					type: 'uint8',
				},
				{
					internalType: 'uint256',
					name: '_slotIndex',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_godiverseId',
					type: 'uint256',
				},
			],
			name: 'setStarGodiverseMap',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'starGodiverseAttachmentAddress',
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
			name: 'starOrbitalTrackAddress',
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
					name: '_starGodiverseAttachmentAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_starOrbitalTrackAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_blacklistAddress',
					type: 'address',
				},
			],
			name: 'updateStarFunctionContractAddress',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_starGen',
					type: 'uint256',
				},
			],
			name: 'updateStarGenMap',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_starIds',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '_starGens',
					type: 'uint256[]',
				},
			],
			name: 'updateStarGenMaps',
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
