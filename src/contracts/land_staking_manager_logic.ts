import { Contract } from '@/contract'
const LAND_STAKING_MANAGER_LOGIC: Contract = {
	name: 'Land Staking Manager Logic',
	address: '0xe78918abc57f7a3e6abdf7fe1d0da90ed8b92e26',
	is_deprecated: false,
	updated_at: 0,
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
					internalType: 'uint256',
					name: '_new',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_old',
					type: 'uint256',
				},
			],
			name: 'MinClaimedBlocksUpdated',
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
					name: '_pool',
					type: 'address',
				},
			],
			name: 'PoolWhitelisted',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: '_pool',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
				{
					components: [
						{
							internalType: 'uint256',
							name: 'debitedRewards',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'lastUpdatedBlock',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'lastClaimedBlock',
							type: 'uint256',
						},
					],
					indexed: false,
					internalType: 'struct ILandStakingManager.UserReward',
					name: '_rewardInfo',
					type: 'tuple',
				},
			],
			name: 'UserRewardUpdated',
			type: 'event',
		},
		{
			inputs: [],
			name: 'WRON',
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
					name: '_user',
					type: 'address',
				},
			],
			name: 'allocateRewards',
			outputs: [
				{
					internalType: 'address',
					name: '_rewardToken',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_earnedRewards',
					type: 'uint256',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_pool',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
			],
			name: 'canObtainRewards',
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
					name: '_pool',
					type: 'address',
				},
			],
			name: 'getCurrentLandWeight',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256[5]',
							name: 'landTypeWeight',
							type: 'uint256[5]',
						},
						{
							internalType: 'uint256',
							name: 'startedAtBlock',
							type: 'uint256',
						},
					],
					internalType: 'struct LandWeightConsumer.LandWeight',
					name: '_lw',
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
					name: '_pool',
					type: 'address',
				},
			],
			name: 'getLandWeight',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256[5]',
							name: 'landTypeWeight',
							type: 'uint256[5]',
						},
						{
							internalType: 'uint256',
							name: 'startedAtBlock',
							type: 'uint256',
						},
					],
					internalType: 'struct LandWeightConsumer.LandWeight[]',
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
					name: '_pool',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
			],
			name: 'getPendingRewards',
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
					name: '_pool',
					type: 'address',
				},
			],
			name: 'getPoolInfo',
			outputs: [
				{
					components: [
						{
							internalType: 'address',
							name: 'stakingToken',
							type: 'address',
						},
						{
							internalType: 'address',
							name: 'rewardToken',
							type: 'address',
						},
						{
							components: [
								{
									internalType: 'uint256[5]',
									name: 'landTypeWeight',
									type: 'uint256[5]',
								},
								{
									internalType: 'uint256',
									name: 'startedAtBlock',
									type: 'uint256',
								},
							],
							internalType: 'struct LandWeightConsumer.LandWeight[]',
							name: 'landWeight',
							type: 'tuple[]',
						},
					],
					internalType: 'struct ILandStakingManager.Pool',
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
					name: '_pool',
					type: 'address',
				},
			],
			name: 'getRewardTokenOfPool',
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
					name: '_admin',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_wron',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_minClaimedBlocks',
					type: 'uint256',
				},
			],
			name: 'initialize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_pool',
					type: 'address',
				},
			],
			name: 'isPoolWhitelisted',
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
			name: 'minClaimedBlocks',
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
					name: '',
					type: 'address',
				},
			],
			name: 'poolInfo',
			outputs: [
				{
					internalType: 'address',
					name: 'stakingToken',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'rewardToken',
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
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
			],
			name: 'resetRewards',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_minClaimedBlocks',
					type: 'uint256',
				},
			],
			name: 'setMinClaimedBlocks',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
			],
			name: 'syncRewardInfo',
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
					name: '_pool',
					type: 'address',
				},
				{
					internalType: 'uint256[5]',
					name: '_values',
					type: 'uint256[5]',
				},
				{
					internalType: 'uint256',
					name: '_startedAtBlock',
					type: 'uint256',
				},
			],
			name: 'updateLandWeights',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_pool',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_index',
					type: 'uint256',
				},
				{
					internalType: 'uint256[5]',
					name: '_values',
					type: 'uint256[5]',
				},
				{
					internalType: 'uint256',
					name: '_startedAtBlock',
					type: 'uint256',
				},
			],
			name: 'updateSpecificLandWeights',
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
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'userRewards',
			outputs: [
				{
					internalType: 'uint256',
					name: 'debitedRewards',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'lastUpdatedBlock',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'lastClaimedBlock',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address[]',
					name: '_pools',
					type: 'address[]',
				},
				{
					internalType: 'uint256[]',
					name: '_startedAtBlocks',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[5][]',
					name: '_landTypeWeights',
					type: 'uint256[5][]',
				},
			],
			name: 'whitelistPools',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'withdrawNativeToken',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract IERC20',
					name: '_token',
					type: 'address',
				},
			],
			name: 'withdrawToken',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			stateMutability: 'payable',
			type: 'receive',
		},
	],
}
export default LAND_STAKING_MANAGER_LOGIC
