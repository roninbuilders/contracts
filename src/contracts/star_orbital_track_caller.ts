import { Contract } from '@/contract'
export const STAR_ORBITAL_TRACK_CALLER: Contract = {
	name: 'Star Orbital Track Caller',
	address: '0x1f06a79a926f5416dbf2b2a14fb42dc073a63a25',
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
					name: '_starOrbitalTrackAddress',
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
					indexed: false,
					internalType: 'uint256[]',
					name: '_starArray',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_successPlanetArray',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_failPlanetArray',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'string[]',
					name: '_failReasonArray',
					type: 'string[]',
				},
			],
			name: 'PlanetOwnerDetachPlanetSummary',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_starArray',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_successPlanetArray',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_failPlanetArray',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'string[]',
					name: '_failReasonArray',
					type: 'string[]',
				},
			],
			name: 'RenewRentingOrbitalTrackSummary',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_successPlanetArray',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_failPlanetArray',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'string[]',
					name: '_failReasonArray',
					type: 'string[]',
				},
			],
			name: 'RentingOrbitalTrackSummary',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_successPlanetArray',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_failPlanetArray',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'string[]',
					name: '_failReasonArray',
					type: 'string[]',
				},
			],
			name: 'StarOwnerAttachOwnPlanetSummary',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_starArray',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_successPlanetArray',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_failPlanetArray',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'string[]',
					name: '_failReasonArray',
					type: 'string[]',
				},
			],
			name: 'StarOwnerDetachPlanetSummary',
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
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_starIdArray',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '_planetIdArray',
					type: 'uint256[]',
				},
			],
			name: 'planetOwnerDetachPlanet',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_starIdArray',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '_planetIdArray',
					type: 'uint256[]',
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
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
				{
					internalType: 'uint256[]',
					name: '_planetIdArray',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '_inviteGroupIdArray',
					type: 'uint256[]',
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
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
				{
					internalType: 'uint256[]',
					name: '_planetIdArray',
					type: 'uint256[]',
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
					internalType: 'uint256[]',
					name: '_starIdArray',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '_planetIdArray',
					type: 'uint256[]',
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
					name: '_starOrbitalTrackAddress',
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
