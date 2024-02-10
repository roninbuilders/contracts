import { Contract } from '@/contract'
const SUPERFINE_REWARD_DISTRIBUTION_V1: Contract = {
	name: 'Superfine Reward Distribution V1',
	address: '0x94c3974c3890ed4767810ec420d0b35165c355a0',
	is_deprecated: false,
	updated_at: 1707575157,
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
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'string',
					name: 'requestId',
					type: 'string',
				},
				{
					indexed: false,
					internalType: 'string',
					name: 'campaignId',
					type: 'string',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'campaignCreator',
					type: 'address',
				},
				{
					components: [
						{
							internalType: 'enum SuperfineRewardDistributionV1.RewardType',
							name: 'rewardType',
							type: 'uint8',
						},
						{
							internalType: 'address',
							name: 'rewardAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'tokenId',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'amount',
							type: 'uint256',
						},
					],
					indexed: false,
					internalType: 'struct SuperfineRewardDistributionV1.Reward[]',
					name: 'rewards',
					type: 'tuple[]',
				},
				{
					indexed: false,
					internalType: 'address[]',
					name: 'winners',
					type: 'address[]',
				},
			],
			name: 'RewardsDistributed',
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
			],
			name: 'SuperfineCampaignCreated',
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
			],
			name: 'SuperfineCampaignUpdated',
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
					internalType: 'uint256',
					name: 'numRewards',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'nativeReward',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'campaignFee',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: 'signature',
					type: 'bytes',
				},
			],
			name: 'createSuperfineCampaign',
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'string',
					name: 'requestId',
					type: 'string',
				},
				{
					internalType: 'string',
					name: 'campaignId',
					type: 'string',
				},
				{
					components: [
						{
							internalType: 'enum SuperfineRewardDistributionV1.RewardType',
							name: 'rewardType',
							type: 'uint8',
						},
						{
							internalType: 'address',
							name: 'rewardAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'tokenId',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'amount',
							type: 'uint256',
						},
					],
					internalType: 'struct SuperfineRewardDistributionV1.Reward[]',
					name: 'rewards',
					type: 'tuple[]',
				},
				{
					internalType: 'address[]',
					name: 'winners',
					type: 'address[]',
				},
				{
					internalType: 'bytes',
					name: 'signature',
					type: 'bytes',
				},
			],
			name: 'distributeRewards',
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
							internalType: 'uint256',
							name: 'numRewards',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'totalNativeReward',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'chargedFee',
							type: 'uint256',
						},
						{
							internalType: 'bool',
							name: 'distributionStarted',
							type: 'bool',
						},
					],
					internalType: 'struct SuperfineRewardDistributionV1.SuperfineCampaign',
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
					internalType: 'address',
					name: 'winner',
					type: 'address',
				},
				{
					internalType: 'string',
					name: 'campaignId',
					type: 'string',
				},
			],
			name: 'getDistributedRewards',
			outputs: [
				{
					components: [
						{
							internalType: 'enum SuperfineRewardDistributionV1.RewardType',
							name: 'rewardType',
							type: 'uint8',
						},
						{
							internalType: 'address',
							name: 'rewardAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'tokenId',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'amount',
							type: 'uint256',
						},
					],
					internalType: 'struct SuperfineRewardDistributionV1.Reward[]',
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
		{
			inputs: [
				{
					internalType: 'string',
					name: 'campaignId',
					type: 'string',
				},
				{
					internalType: 'uint256',
					name: 'newNumRewards',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'newNativeReward',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'newCampaignFee',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: 'signature',
					type: 'bytes',
				},
			],
			name: 'updateSuperfineCampaign',
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
			name: 'withdrawCampaignFee',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
export default SUPERFINE_REWARD_DISTRIBUTION_V1
