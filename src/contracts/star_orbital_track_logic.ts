import { Contract } from '@/contract'
export const STAR_ORBITAL_TRACK_LOGIC: Contract = {
	name: 'Star Orbital Track Logic',
	address: '0xa92b2fbb6df4fd59d1617841b07e8c7a3bdb541b',
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
					name: '_starOrbitalTrackDataAddress',
					type: 'address',
				},
			],
			name: 'ContractSettingUpdated',
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
					name: '_renterAddress',
					type: 'address',
				},
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
			name: 'checkCanRenewRentingOrbitalTrack',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract IBlacklist',
					name: '_blacklistContract',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
				{
					internalType: 'contract IApeironStar',
					name: '_starContract',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_planetOwner',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_planetId',
					type: 'uint256',
				},
				{
					internalType: 'contract IApeironPlanet',
					name: '_planetContract',
					type: 'address',
				},
			],
			name: 'checkIsBlacklistedForAttachingPlanet',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_renterAddress',
					type: 'address',
				},
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
				{
					internalType: 'uint256',
					name: '_planetId',
					type: 'uint256',
				},
			],
			name: 'checkReachMaxCount',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_planetOwnerAddress',
					type: 'address',
				},
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
					internalType: 'address',
					name: '_starContractAddress',
					type: 'address',
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
			name: 'checkRentingOrbitalTrack',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_renterAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_starContractAddress',
					type: 'address',
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
					internalType: 'bool',
					name: '_isInvited',
					type: 'bool',
				},
			],
			name: 'checkSlotCanBeRent',
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
			name: 'getPlanetAttachedIndex',
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
					name: '_planetId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_slotIndex',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_earlyDetachFeePercent',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_percentMaxValue',
					type: 'uint256',
				},
			],
			name: 'getPlanetOwnerDetachPlanetBalance',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'planetOwnerReceive',
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
			name: 'getRentalSlotIndexWithInviteGroupID',
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
					name: '_planetId',
					type: 'uint256',
				},
			],
			name: 'getStarOwnerAttachSlotIndex',
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
					name: '_planetId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_slotIndex',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_earlyDetachFeePercent',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_percentMaxValue',
					type: 'uint256',
				},
			],
			name: 'getStarOwnerDetachPlanetBalance',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'planetOwnerReceive',
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
					name: '_invitee',
					type: 'address',
				},
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
			name: 'isInvitedStarOrbitalTrack',
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
			inputs: [],
			name: 'starOrbitalTrackDataContract',
			outputs: [
				{
					internalType: 'contract IApeironStarOrbitalTrackData',
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
					name: '_starOrbitalTrackDataAddress',
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
