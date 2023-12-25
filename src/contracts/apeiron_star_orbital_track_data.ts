import { Contract } from '@/contract'
export const APEIRON_STAR_ORBITAL_TRACK_DATA: Contract = {
	name: 'Apeiron Star Orbital Track Data',
	address: '0xf42a9fae76d6ba57dc874024aff7ec67bfb1d79d',
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
					indexed: false,
					internalType: 'uint256',
					name: '_planetId',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_cooldown',
					type: 'uint256',
				},
			],
			name: 'PlanetOrbitalTrackCooldownMapUpdated',
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
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_otSlotCount',
					type: 'uint256',
				},
			],
			name: 'addStarOrbitalTrackData',
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
					name: '_slotIndex',
					type: 'uint256',
				},
				{
					components: [
						{
							internalType: 'enum StarMeta.OrbitalTrackState',
							name: 'rentingState',
							type: 'uint8',
						},
						{
							internalType: 'uint256',
							name: 'availableTrackTime',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'inviteGroupId',
							type: 'uint256',
						},
						{
							internalType: 'address',
							name: 'tokenAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'rentalFee',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'rentalDuration',
							type: 'uint256',
						},
						{
							internalType: 'bool',
							name: 'canBeRenew',
							type: 'bool',
						},
						{
							internalType: 'uint256',
							name: 'listingTime',
							type: 'uint256',
						},
						{
							internalType: 'address',
							name: 'planetOwnerAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'originalRentalStartTime',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'rentalStartTime',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'attachedPlanetId',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'rentalEndTime',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'rentalFeeAfterPlatform',
							type: 'uint256',
						},
					],
					internalType: 'struct StarMeta.StarOrbitalTrackData',
					name: '_orbitalTrackData',
					type: 'tuple',
				},
			],
			name: 'checkNAddOrUpdateStarOrbitalTracksRentedData',
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
					name: '_tier',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_ultranova',
					type: 'uint256',
				},
			],
			name: 'checkNInitStarOrbitalTrackData',
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
					name: '_planetId',
					type: 'uint256',
				},
			],
			name: 'checkOwnerAttachPlanet',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
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
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_planetId',
					type: 'uint256',
				},
			],
			name: 'checkPlanetAttachedIndex',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
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
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_planetId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_inviteGroupId',
					type: 'uint256',
				},
			],
			name: 'checkRentalAttachPlanet',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
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
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
				{
					internalType: 'bool',
					name: '_isNewInviteGroup',
					type: 'bool',
				},
				{
					internalType: 'uint256',
					name: '_inviteGroupId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_numberOfTracks',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_duration',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: '_tokenAddress',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_cost',
					type: 'uint256',
				},
				{
					internalType: 'address[]',
					name: '_inviteAddressList',
					type: 'address[]',
				},
				{
					internalType: 'uint256',
					name: '_maxCountForEachAddress',
					type: 'uint256',
				},
				{
					internalType: 'bool',
					name: '_canBeRenew',
					type: 'bool',
				},
			],
			name: 'dataUpdateRentalSetting',
			outputs: [
				{
					internalType: 'uint256',
					name: 'count',
					type: 'uint256',
				},
				{
					internalType: 'uint256[]',
					name: 'resultArray',
					type: 'uint256[]',
				},
			],
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
			],
			name: 'getStarOrbitalTrackData',
			outputs: [
				{
					components: [
						{
							internalType: 'enum StarMeta.OrbitalTrackState',
							name: 'rentingState',
							type: 'uint8',
						},
						{
							internalType: 'uint256',
							name: 'availableTrackTime',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'inviteGroupId',
							type: 'uint256',
						},
						{
							internalType: 'address',
							name: 'tokenAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'rentalFee',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'rentalDuration',
							type: 'uint256',
						},
						{
							internalType: 'bool',
							name: 'canBeRenew',
							type: 'bool',
						},
						{
							internalType: 'uint256',
							name: 'listingTime',
							type: 'uint256',
						},
						{
							internalType: 'address',
							name: 'planetOwnerAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'originalRentalStartTime',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'rentalStartTime',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'attachedPlanetId',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'rentalEndTime',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'rentalFeeAfterPlatform',
							type: 'uint256',
						},
					],
					internalType: 'struct StarMeta.StarOrbitalTrackData[]',
					name: '',
					type: 'tuple[]',
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
					internalType: 'uint256',
					name: '_slotIndex',
					type: 'uint256',
				},
			],
			name: 'getStarOrbitalTrackDataWithIndex',
			outputs: [
				{
					components: [
						{
							internalType: 'enum StarMeta.OrbitalTrackState',
							name: 'rentingState',
							type: 'uint8',
						},
						{
							internalType: 'uint256',
							name: 'availableTrackTime',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'inviteGroupId',
							type: 'uint256',
						},
						{
							internalType: 'address',
							name: 'tokenAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'rentalFee',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'rentalDuration',
							type: 'uint256',
						},
						{
							internalType: 'bool',
							name: 'canBeRenew',
							type: 'bool',
						},
						{
							internalType: 'uint256',
							name: 'listingTime',
							type: 'uint256',
						},
						{
							internalType: 'address',
							name: 'planetOwnerAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'originalRentalStartTime',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'rentalStartTime',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'attachedPlanetId',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'rentalEndTime',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'rentalFeeAfterPlatform',
							type: 'uint256',
						},
					],
					internalType: 'struct StarMeta.StarOrbitalTrackData',
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
				{
					internalType: 'uint256',
					name: '_inviteGroupId',
					type: 'uint256',
				},
			],
			name: 'getStarOrbitalTrackInviteListData',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'inviteGroupId',
							type: 'uint256',
						},
						{
							internalType: 'address[]',
							name: 'inviteAddressList',
							type: 'address[]',
						},
						{
							internalType: 'uint256',
							name: 'maxCountForEachAddress',
							type: 'uint256',
						},
					],
					internalType: 'struct StarMeta.StarOrbitalTrackInviteListData',
					name: 'emptyData',
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
				{
					internalType: 'uint256[]',
					name: '_inviteGroupIds',
					type: 'uint256[]',
				},
			],
			name: 'getStarOrbitalTrackInviteListDataArray',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'inviteGroupId',
							type: 'uint256',
						},
						{
							internalType: 'address[]',
							name: 'inviteAddressList',
							type: 'address[]',
						},
						{
							internalType: 'uint256',
							name: 'maxCountForEachAddress',
							type: 'uint256',
						},
					],
					internalType: 'struct StarMeta.StarOrbitalTrackInviteListData[]',
					name: 'resultArray',
					type: 'tuple[]',
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
			name: 'getStarOrbitalTrackRentedData',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'slotIndex',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'planetId',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'rentalFeeAfterPlatform',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'oldRentalEndTime',
							type: 'uint256',
						},
					],
					internalType: 'struct StarMeta.StarOrbitalTrackRentedData[]',
					name: '',
					type: 'tuple[]',
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
					name: '',
					type: 'uint256',
				},
			],
			name: 'planetOrbitalTrackCooldownMap',
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
					internalType: 'uint256',
					name: '_slotIndex',
					type: 'uint256',
				},
			],
			name: 'removeStarOrbitalTrackSlot',
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
					name: '_planetId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_cooldown',
					type: 'uint256',
				},
			],
			name: 'setPlanetOrbitalTrackCooldownMap',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_starTierBaseTrackNumberArray',
					type: 'uint256[]',
				},
			],
			name: 'setupTierBaseTrackNumberArray',
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
			],
			name: 'starTierBaseTrackNumberArray',
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
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_slotIndex',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_availableTrackTime',
					type: 'uint256',
				},
			],
			name: 'updateDetachOrbitalTrackData',
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
					name: '_slotIndex',
					type: 'uint256',
				},
				{
					components: [
						{
							internalType: 'enum StarMeta.OrbitalTrackState',
							name: 'rentingState',
							type: 'uint8',
						},
						{
							internalType: 'uint256',
							name: 'availableTrackTime',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'inviteGroupId',
							type: 'uint256',
						},
						{
							internalType: 'address',
							name: 'tokenAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'rentalFee',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'rentalDuration',
							type: 'uint256',
						},
						{
							internalType: 'bool',
							name: 'canBeRenew',
							type: 'bool',
						},
						{
							internalType: 'uint256',
							name: 'listingTime',
							type: 'uint256',
						},
						{
							internalType: 'address',
							name: 'planetOwnerAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'originalRentalStartTime',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'rentalStartTime',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'attachedPlanetId',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'rentalEndTime',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'rentalFeeAfterPlatform',
							type: 'uint256',
						},
					],
					internalType: 'struct StarMeta.StarOrbitalTrackData',
					name: '_starOrbitalTrackData',
					type: 'tuple',
				},
			],
			name: 'updateStarOrbitalTrackData',
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
