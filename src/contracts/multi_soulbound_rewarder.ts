import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'erc1155',
				type: 'address',
			},
		],
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
				indexed: true,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'rewardToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'RewardClaimed',
		type: 'event',
	},
	{
		inputs: [],
		name: 'achievement',
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
				name: 'id',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'reward_index',
				type: 'uint256',
			},
			{
				internalType: 'uint256[]',
				name: 'nftIds',
				type: 'uint256[]',
			},
		],
		name: 'addNfts',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'claimer',
				type: 'address',
			},
		],
		name: 'claim',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: 'ids',
				type: 'uint256[]',
			},
			{
				internalType: 'address[]',
				name: 'claimers',
				type: 'address[]',
			},
		],
		name: 'claimAll',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: 'tokenIds',
				type: 'uint256[]',
			},
			{
				internalType: 'enum MultiSoulboundRewarder.RewardType[]',
				name: 'rewardTypes',
				type: 'uint8[]',
			},
			{
				internalType: 'address[]',
				name: 'rewardTokens',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'totalRewards',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: 'rewardsPerTokens',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[][]',
				name: 'nftIdsArr',
				type: 'uint256[][]',
			},
		],
		name: 'configureRewards',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
		],
		name: 'endReward',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: 'ids',
				type: 'uint256[]',
			},
		],
		name: 'endRewards',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'rewardIndex',
				type: 'uint256',
			},
		],
		name: 'getNextNFTRewardId',
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
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'mintingStoppedForToken',
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
		inputs: [
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'reward_index',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'rewardToken',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'totalReward',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'rewardsPerToken',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'enabled',
				type: 'bool',
			},
		],
		name: 'modifyReward',
		outputs: [],
		stateMutability: 'nonpayable',
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
				internalType: 'uint256[]',
				name: 'ids',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: 'values',
				type: 'uint256[]',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'onERC1155BatchReceived',
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
				name: 'id',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'onERC1155Received',
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
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
		],
		name: 'previewReward',
		outputs: [
			{
				internalType: 'address[]',
				name: '',
				type: 'address[]',
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
				internalType: 'uint256[]',
				name: 'ids',
				type: 'uint256[]',
			},
			{
				internalType: 'address[]',
				name: 'users',
				type: 'address[]',
			},
		],
		name: 'previewRewards',
		outputs: [
			{
				internalType: 'address[][]',
				name: '',
				type: 'address[][]',
			},
			{
				internalType: 'uint256[][]',
				name: '',
				type: 'uint256[][]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'rewardIndex',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'nftStartIndex',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'nftEndIndex',
				type: 'uint256',
			},
		],
		name: 'recoverReward',
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
				name: 'erc1155',
				type: 'address',
			},
		],
		name: 'setAchievementToken',
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
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'tokenRewards',
		outputs: [
			{
				internalType: 'enum MultiSoulboundRewarder.RewardType',
				name: 'rewardType',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: 'rewardToken',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'totalReward',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'rewardsPerToken',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'totalClaimed',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'claimCount',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'enabled',
				type: 'bool',
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
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'tokenUserClaims',
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
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const MULTI_SOULBOUND_REWARDER: Contract<typeof abi> = {
	name: 'Multi Soulbound Rewarder',
	address: '0xc0b3d1912150c45b5b9f8f2f5facd1dbe2f134e8',
	is_deprecated: false,
	created_at: 1727131904,
	abi: abi,
}
export default MULTI_SOULBOUND_REWARDER
