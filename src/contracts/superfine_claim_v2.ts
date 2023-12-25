import { Contract } from '@/contract'
export const SUPERFINE_CLAIM_V2: Contract = {
	name: 'Superfine Claim V2',
	address: '0x32a5712b9a68b970c4a01172be95c4479f3290e8',
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
			inputs: [
				{
					internalType: 'string',
					name: 'campaignId',
					type: 'string',
				},
				{
					internalType: 'address',
					name: 'campaignCreator',
					type: 'address',
				},
				{
					components: [
						{
							internalType: 'enum SuperfineClaimV2.AssetType',
							name: 'assetType',
							type: 'uint8',
						},
						{
							internalType: 'address',
							name: 'assetAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'assetId',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'amount',
							type: 'uint256',
						},
					],
					internalType: 'struct SuperfineClaimV2.Asset[]',
					name: 'assets',
					type: 'tuple[]',
				},
				{
					internalType: 'bytes',
					name: 'signature',
					type: 'bytes',
				},
			],
			name: 'claimAssets',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'claimant',
					type: 'address',
				},
				{
					internalType: 'string',
					name: 'campaignId',
					type: 'string',
				},
			],
			name: 'getClaimedAssets',
			outputs: [
				{
					components: [
						{
							internalType: 'enum SuperfineClaimV2.AssetType',
							name: 'assetType',
							type: 'uint8',
						},
						{
							internalType: 'address',
							name: 'assetAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'assetId',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'amount',
							type: 'uint256',
						},
					],
					internalType: 'struct SuperfineClaimV2.Asset[]',
					name: '',
					type: 'tuple[]',
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
					internalType: 'address[]',
					name: 'operators',
					type: 'address[]',
				},
				{
					internalType: 'bool[]',
					name: 'isOperators',
					type: 'bool[]',
				},
			],
			name: 'setOperators',
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
	],
}
