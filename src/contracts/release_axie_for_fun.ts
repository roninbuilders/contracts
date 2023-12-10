export const RELEASE_AXIE_FOR_FUN = {
	name: 'Release Axie For Fun',
	address: '0xfda966be65c5234a9126e7a8321edd013d3832e3',
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
					name: 'axieContractAddress',
					type: 'address',
				},
			],
			name: 'AxieContractAddressUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_axieIds',
					type: 'uint256[]',
				},
			],
			name: 'AxiesReleased',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint8',
					name: 'version',
					type: 'uint8',
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
					indexed: false,
					internalType: 'address',
					name: 'treasuryAddress',
					type: 'address',
				},
			],
			name: 'TreasuryAddressUpdated',
			type: 'event',
		},
		{
			inputs: [],
			name: 'axieContract',
			outputs: [
				{
					internalType: 'contract IAxie',
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
					name: '_owner',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_treasury',
					type: 'address',
				},
				{
					internalType: 'contract IAxie',
					name: '_axieContract',
					type: 'address',
				},
			],
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
					name: '_axieIds',
					type: 'uint256[]',
				},
			],
			name: 'releaseAxies',
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
					internalType: 'contract IAxie',
					name: '_addr',
					type: 'address',
				},
			],
			name: 'setAxieContract',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_addr',
					type: 'address',
				},
			],
			name: 'setTreasury',
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
	],
}
