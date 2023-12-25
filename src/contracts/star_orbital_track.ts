import { Contract } from '@/contract'
export const STAR_ORBITAL_TRACK: Contract = {
	name: 'Star Orbital Track',
	address: '0xd60e471612a994c67ffc22da55080c7b76e834b8',
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
					name: '_starAddress',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_starDataAddress',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_starOrbitalTrackDataAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_starOrbitalTrackLogicAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_planetAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_blacklistAddress',
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
					indexed: false,
					internalType: 'address',
					name: '_tokenReceipt',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_platformAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_platformFeePercent',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_treasuryAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_treasuryFeePercent',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_earlyDetachFeePercent',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_percentMaxValue',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_detachCooldown',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_minimumDuration',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_starReceiptAddress',
					type: 'address',
				},
			],
			name: 'OrbitalSettingUpdated',
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
					indexed: false,
					internalType: 'uint256',
					name: '_inviteGroupId',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_slotIndexCount',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_slotIndexArray',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_duration',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_tokenAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_cost',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address[]',
					name: '_inviteAddress',
					type: 'address[]',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_maxCountForEachAddress',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'bool',
					name: '_canBeRenew',
					type: 'bool',
				},
			],
			name: 'OrbitalTracksUpdated',
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
					internalType: 'uint256',
					name: '_planetId',
					type: 'uint256',
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
					name: '_rentalEndTime',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_tokenAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_rentalFee',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_inviteGroupId',
					type: 'uint256',
				},
			],
			name: 'PlanetAttachedOrbitalTrack',
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
					name: '_planetId',
					type: 'uint256',
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
					name: '_originalRentalStartTime',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_planetCooldown',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_obCooldown',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_starOwnerAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_planetOwnerAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'bool',
					name: '_isStarOwnerDetach',
					type: 'bool',
				},
			],
			name: 'PlanetDetachedOrbitalTrack',
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
					name: '_planetId',
					type: 'uint256',
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
					name: '_originalRentalStartTime',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_rentalEndTime',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_tokenAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_rentalFee',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_starOwnerAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_planetOwnerAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_inviteGroupId',
					type: 'uint256',
				},
			],
			name: 'PlanetRenewOrbitalTrack',
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
			name: 'approvedTokenAddresses',
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
			name: 'detachCooldown',
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
			name: 'earlyDetachFeePercent',
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
			name: 'initialize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'minimumDuration',
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
					name: 'operator',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'tokenId',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: 'data',
					type: 'bytes',
				},
			],
			name: 'onERC721Received',
			outputs: [
				{
					internalType: 'bytes4',
					name: '',
					type: 'bytes4',
				},
			],
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
			inputs: [
				{
					internalType: 'address',
					name: '_detacherAddress',
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
			],
			name: 'planetOwnerDetachPlanet',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'platformAddress',
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
			name: 'platformFeePercent',
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
					name: '_attacherAddress',
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
			],
			name: 'renewRentingOrbitalTrack',
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
					name: '_attacherAddress',
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
					internalType: 'uint256',
					name: '_inviteGroupId',
					type: 'uint256',
				},
			],
			name: 'rentingOrbitalTrack',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_admin',
					type: 'address',
				},
				{
					internalType: 'bool',
					name: '_enabled',
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
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					internalType: 'bool',
					name: '_isApproved',
					type: 'bool',
				},
			],
			name: 'setApprovedTokenAddresses',
			outputs: [],
			stateMutability: 'nonpayable',
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
					name: '_attacherAddress',
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
			],
			name: 'starOwnerAttachOwnPlanet',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_detacherAddress',
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
			],
			name: 'starOwnerDetachPlanet',
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
					name: '_starAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_starDataAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_starOrbitalTrackDataAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_starOrbitalTrackLogicAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_planetAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_blacklistAddress',
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
					name: '_tokenReceipt',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_platformAddress',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_platformFeePercent',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: '_treasuryAddress',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_treasuryFeePercent',
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
				{
					internalType: 'uint256',
					name: '_detachCooldown',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_minimumDuration',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: '_starReceiptAddress',
					type: 'address',
				},
			],
			name: 'updateOrbitalSetting',
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
			name: 'updateRentalSetting',
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
