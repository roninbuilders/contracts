import { Contract } from '@/contract'
export const AAP_REWARD: Contract = {
	name: 'AAP Reward',
	address: '0xbe5a2fba697d6e06b09558b339b502e8398b9e77',
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
					name: '_rewardAddress',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_nftId',
					type: 'uint256',
				},
			],
			name: 'AddedApprovedReward',
			type: 'event',
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
					name: '_claimerAddress',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_rewardAddress',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_nftId',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_totalClaimedValue',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_claimedValue',
					type: 'uint256',
				},
			],
			name: 'ForceUpdateTargetReward',
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
					name: '_rewardAddress',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_nftId',
					type: 'uint256',
				},
			],
			name: 'RemovedApprovedReward',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_requestAddress',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_rewardAddress',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_nftId',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_totalClaimedValue',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_claimedValue',
					type: 'uint256',
				},
			],
			name: 'RewardClaimed',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_systemAddress',
					type: 'address',
				},
			],
			name: 'UpdatedSystemAddress',
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
					components: [
						{
							internalType: 'enum AAPReward.NFT_TYPE',
							name: 'nftType',
							type: 'uint8',
						},
						{
							internalType: 'address',
							name: 'rewardAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'nftId',
							type: 'uint256',
						},
					],
					internalType: 'struct AAPReward.RewardStruct[]',
					name: 'rewardStructs',
					type: 'tuple[]',
				},
			],
			name: 'addApprovedRewardArray',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'enum AAPReward.NFT_TYPE[]',
					name: '_nftTypeArray',
					type: 'uint8[]',
				},
				{
					internalType: 'address[]',
					name: '_rewardAddressArray',
					type: 'address[]',
				},
				{
					internalType: 'uint256[]',
					name: '_nftIdArray',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '_totalAmountArray',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256',
					name: '_time',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: '_signature',
					type: 'bytes',
				},
			],
			name: 'claimRewards',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
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
			name: 'claimerRewardInfoMap',
			outputs: [
				{
					internalType: 'enum AAPReward.NFT_TYPE',
					name: 'nftType',
					type: 'uint8',
				},
				{
					internalType: 'address',
					name: 'rewardAddress',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'nftId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'totalAmount',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'claimed',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'enum AAPReward.NFT_TYPE',
					name: '_nftType',
					type: 'uint8',
				},
				{
					internalType: 'address',
					name: '_claimerAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_rewardAddress',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_nftId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_totalAmount',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_claimed',
					type: 'uint256',
				},
			],
			name: 'forceUpdateTargetReward',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getApprovedRewardArray',
			outputs: [
				{
					components: [
						{
							internalType: 'enum AAPReward.NFT_TYPE',
							name: 'nftType',
							type: 'uint8',
						},
						{
							internalType: 'address',
							name: 'rewardAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'nftId',
							type: 'uint256',
						},
					],
					internalType: 'struct AAPReward.RewardStruct[]',
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
					internalType: 'address',
					name: '_claimerAddress',
					type: 'address',
				},
			],
			name: 'getClaimerWholeRewardStruct',
			outputs: [
				{
					components: [
						{
							internalType: 'enum AAPReward.NFT_TYPE',
							name: 'nftType',
							type: 'uint8',
						},
						{
							internalType: 'address',
							name: 'rewardAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'nftId',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'totalAmount',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'claimed',
							type: 'uint256',
						},
					],
					internalType: 'struct AAPReward.ClaimerRewardStruct[]',
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
					internalType: 'address',
					name: '_claimerAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_rewardAddress',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_nftId',
					type: 'uint256',
				},
			],
			name: 'getTargetReward',
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
				{
					components: [
						{
							internalType: 'enum AAPReward.NFT_TYPE',
							name: 'nftType',
							type: 'uint8',
						},
						{
							internalType: 'address',
							name: 'rewardAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'nftId',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'totalAmount',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'claimed',
							type: 'uint256',
						},
					],
					internalType: 'struct AAPReward.ClaimerRewardStruct',
					name: '',
					type: 'tuple',
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
					components: [
						{
							internalType: 'enum AAPReward.NFT_TYPE',
							name: 'nftType',
							type: 'uint8',
						},
						{
							internalType: 'address',
							name: 'rewardAddress',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'nftId',
							type: 'uint256',
						},
					],
					internalType: 'struct AAPReward.RewardStruct[]',
					name: 'rewardStructs',
					type: 'tuple[]',
				},
			],
			name: 'removeApprovedRewardArray',
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
					internalType: 'address',
					name: '_systemAddress',
					type: 'address',
				},
			],
			name: 'setupSystemAddress',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'interfaceId',
					type: 'bytes4',
				},
			],
			name: 'supportsInterface',
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
		{
			stateMutability: 'payable',
			type: 'receive',
		},
	],
}
