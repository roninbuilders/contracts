export const CHRISTMAS_AXIE_RELEASE_2022 = {
	name: 'Christmas Axie Release 2022',
	address: '0x25e3ee4a68e5d13ea077272d8311a3f4b8a65943',
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
					name: '',
					type: 'address',
				},
			],
			name: 'AccessoryContractUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_axieIds',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'bool',
					name: '_blacklisted',
					type: 'bool',
				},
			],
			name: 'AxieBlacklistSet',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'AxieContractUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'user',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: 'axieIds',
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
					indexed: false,
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'Paused',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: '_startedAtTime',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_endedAtTime',
					type: 'uint256',
				},
			],
			name: 'PeriodUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint128[]',
					name: 'accessoryTypeIds',
					type: 'uint128[]',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: 'accessoryRatios',
					type: 'uint256[]',
				},
			],
			name: 'RewardAccessoryRaritiesUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: '_axieId',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_accessoryId',
					type: 'uint256',
				},
			],
			name: 'RewardUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'previousAdminRole',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'newAdminRole',
					type: 'bytes32',
				},
			],
			name: 'RoleAdminChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'sender',
					type: 'address',
				},
			],
			name: 'RoleGranted',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'sender',
					type: 'address',
				},
			],
			name: 'RoleRevoked',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'TreasuryUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'Unpaused',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'user',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'accessoryId',
					type: 'uint256',
				},
			],
			name: 'UserClaimed',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'user',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'claimedAmount',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'total',
					type: 'uint256',
				},
			],
			name: 'UserRewardUpdated',
			type: 'event',
		},
		{
			inputs: [],
			name: 'DEFAULT_ADMIN_ROLE',
			outputs: [
				{
					internalType: 'bytes32',
					name: '',
					type: 'bytes32',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'OPERATOR_ROLE',
			outputs: [
				{
					internalType: 'bytes32',
					name: '',
					type: 'bytes32',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'RATIO_LIMIT',
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
			name: 'accessoryContract',
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
			name: 'axieContract',
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
					name: '_axieId',
					type: 'uint256',
				},
			],
			name: 'checkAxieBlacklisted',
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
					name: '_axieId',
					type: 'uint256',
				},
			],
			name: 'checkAxieReleased',
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
			name: 'claimAllRewards',
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
			name: 'claimAllRewardsFor',
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
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'claimRewardsFor',
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
			],
			name: 'claimedAmounts',
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
			name: 'emergencyEndEvent',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getPeriod',
			outputs: [
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
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getRewardAccessoryRarities',
			outputs: [
				{
					internalType: 'uint128[]',
					name: '',
					type: 'uint128[]',
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
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
			],
			name: 'getRewardInfo',
			outputs: [
				{
					internalType: 'uint256',
					name: '_claimed',
					type: 'uint256',
				},
				{
					internalType: 'uint256[]',
					name: '_accessoryIds',
					type: 'uint256[]',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
			],
			name: 'getRoleAdmin',
			outputs: [
				{
					internalType: 'bytes32',
					name: '',
					type: 'bytes32',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'uint256',
					name: 'index',
					type: 'uint256',
				},
			],
			name: 'getRoleMember',
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
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
			],
			name: 'getRoleMemberCount',
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
			name: 'getTotalAxieReleased',
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
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'grantRole',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'hasRole',
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
					name: '_admin',
					type: 'address',
				},
				{
					internalType: 'address[]',
					name: '_operators',
					type: 'address[]',
				},
				{
					internalType: 'address',
					name: '__axieContract',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '__accessoryContract',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '__startedAtTime',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '__endedAtTime',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: '_treasury',
					type: 'address',
				},
				{
					internalType: 'uint128[]',
					name: '_newAccessoryTypes',
					type: 'uint128[]',
				},
				{
					internalType: 'uint256[]',
					name: '_newAccessoryRatios',
					type: 'uint256[]',
				},
			],
			name: 'initialize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'isInPeriod',
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
			name: 'pause',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'paused',
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
					name: '_initialSeed',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
			],
			name: 'randomRewards',
			outputs: [],
			stateMutability: 'nonpayable',
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
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'releasedAxies',
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
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'renounceRole',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'revokeRole',
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
			],
			name: 'rewards',
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
					name: '_addr',
					type: 'address',
				},
			],
			name: 'setAccessoryContract',
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
			name: 'setAxieContract',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_axieIds',
					type: 'uint256[]',
				},
				{
					internalType: 'bool',
					name: '_blacklisted',
					type: 'bool',
				},
			],
			name: 'setBlacklistAxies',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_newStartedAtBlock',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_newEndedAtBlock',
					type: 'uint256',
				},
			],
			name: 'setPeriod',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint128[]',
					name: '_newAccessoryTypeIds',
					type: 'uint128[]',
				},
				{
					internalType: 'uint256[]',
					name: '_newAccessoryRatios',
					type: 'uint256[]',
				},
			],
			name: 'setRewardAccessoryRarities',
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
		{
			inputs: [],
			name: 'unpause',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
