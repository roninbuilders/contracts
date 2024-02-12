import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'maxBatchSize',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'feePerBatch',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'string',
				name: 'campaignId',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'creator',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'enum SuperfineAirdropV3.AssetType',
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
				indexed: false,
				internalType: 'struct SuperfineAirdropV3.Asset[]',
				name: 'assets',
				type: 'tuple[]',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'maxBatchSize',
				type: 'uint256',
			},
		],
		name: 'AirdropCampaignCreated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'string',
				name: 'campaignId',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'creator',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'enum SuperfineAirdropV3.AssetType',
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
				indexed: false,
				internalType: 'struct SuperfineAirdropV3.Asset[]',
				name: 'assets',
				type: 'tuple[]',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'maxBatchSize',
				type: 'uint256',
			},
		],
		name: 'AirdropCampaignUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'string',
				name: 'campaignId',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'creator',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'enum SuperfineAirdropV3.AssetType',
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
				indexed: false,
				internalType: 'struct SuperfineAirdropV3.Asset[]',
				name: 'assets',
				type: 'tuple[]',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'recipients',
				type: 'address[]',
			},
		],
		name: 'AssetsAirdropped',
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
		inputs: [
			{
				internalType: 'string',
				name: 'campaignId',
				type: 'string',
			},
			{
				internalType: 'uint256[]',
				name: 'assetIndexes',
				type: 'uint256[]',
			},
			{
				internalType: 'address[]',
				name: 'recipients',
				type: 'address[]',
			},
		],
		name: 'airdrop',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'campaignId',
				type: 'string',
			},
			{
				components: [
					{
						internalType: 'enum SuperfineAirdropV3.AssetType',
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
				internalType: 'struct SuperfineAirdropV3.Asset[]',
				name: 'assets',
				type: 'tuple[]',
			},
		],
		name: 'createAirdropCampaign',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'numAssets',
				type: 'uint256',
			},
		],
		name: 'estimateAirdropFee',
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
				internalType: 'string',
				name: 'campaignId',
				type: 'string',
			},
		],
		name: 'getCampaignById',
		outputs: [
			{
				components: [
					{
						internalType: 'string',
						name: 'campaignId',
						type: 'string',
					},
					{
						internalType: 'address',
						name: 'creator',
						type: 'address',
					},
					{
						components: [
							{
								internalType: 'enum SuperfineAirdropV3.AssetType',
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
						internalType: 'struct SuperfineAirdropV3.Asset[]',
						name: 'assets',
						type: 'tuple[]',
					},
					{
						internalType: 'uint256',
						name: 'maxBatchSize',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'chargedFee',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: 'airdropStarted',
						type: 'bool',
					},
				],
				internalType: 'struct SuperfineAirdropV3.AirdropCampaign',
				name: '',
				type: 'tuple',
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
				internalType: 'uint256',
				name: 'newFee',
				type: 'uint256',
			},
		],
		name: 'setFeePerBatch',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'newSize',
				type: 'uint256',
			},
		],
		name: 'setMaxBatchSize',
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
	{
		inputs: [
			{
				internalType: 'string',
				name: 'campaignId',
				type: 'string',
			},
			{
				components: [
					{
						internalType: 'enum SuperfineAirdropV3.AssetType',
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
				internalType: 'struct SuperfineAirdropV3.Asset[]',
				name: 'assets',
				type: 'tuple[]',
			},
		],
		name: 'updateCampaign',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'recipient',
				type: 'address',
			},
		],
		name: 'withdrawAirdropFee',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const SUPERFINE_AIRDROP_V3: Contract<typeof abi> = {
	name: 'Superfine Airdrop V3',
	address: '0x27013d274aa60c6e6883aa2130e8b01249eb11d4',
	is_deprecated: false,
	updated_at: 1707758988,
	abi: abi,
}
export default SUPERFINE_AIRDROP_V3
