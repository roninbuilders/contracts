export const AXIE_RELEASE = {
	name: 'Axie Release',
	address: '0x144697847f4bf184534af5945abe0fb5f1b14fba',
	abi: [
		{
			inputs: [
				{
					internalType: 'address',
					name: '_axieContract',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_itemContract',
					type: 'address',
				},
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
				{
					internalType: 'address',
					name: '_treasury',
					type: 'address',
				},
				{
					internalType: 'uint256[]',
					name: '_newItemTypes',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '_newItemRatios',
					type: 'uint256[]',
				},
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_oldAdmin',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_newAdmin',
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
					name: '_oldAdmin',
					type: 'address',
				},
			],
			name: 'AdminRemoved',
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
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'ItemContractUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_operator',
					type: 'address',
				},
			],
			name: 'OperatorAdded',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_operator',
					type: 'address',
				},
			],
			name: 'OperatorRemoved',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: '_startedAtBlock',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_endedAtBlock',
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
					internalType: 'uint256[]',
					name: '_itemTypes',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: '_itemRatios',
					type: 'uint256[]',
				},
			],
			name: 'RewardItemRaritiesUpdated',
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
					name: '_itemId',
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
					name: '_user',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_itemId',
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
					indexed: false,
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_claimedAmount',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_total',
					type: 'uint256',
				},
			],
			name: 'UserRewardUpdated',
			type: 'event',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address[]',
					name: '_addedOperators',
					type: 'address[]',
				},
			],
			name: 'addOperators',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'admin',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'axieBlacklisted',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'axieContract',
			outputs: [
				{
					internalType: 'contract Axie',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'axieReleased',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: '_newAdmin',
					type: 'address',
				},
			],
			name: 'changeAdmin',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [],
			name: 'claimAllRewards',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
			],
			name: 'claimAllRewardsFor',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
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
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
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
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
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
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
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
					name: '_itemIds',
					type: 'uint256[]',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'getRewardItemRarities',
			outputs: [
				{
					internalType: 'uint256[]',
					name: '',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '',
					type: 'uint256[]',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'isInPeriod',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'itemContract',
			outputs: [
				{
					internalType: 'contract ItemCollection',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'operator',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'operators',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
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
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_axieIds',
					type: 'uint256[]',
				},
			],
			name: 'releaseAxies',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
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
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [],
			name: 'removeAdmin',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address[]',
					name: '_removedOperators',
					type: 'address[]',
				},
			],
			name: 'removeOperators',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
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
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: '_axieContract',
					type: 'address',
				},
			],
			name: 'setAxieContract',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
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
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: '_itemContract',
					type: 'address',
				},
			],
			name: 'setItemContract',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
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
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_newItemTypes',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '_newItemRatios',
					type: 'uint256[]',
				},
			],
			name: 'setRewardItemRarities',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: '_treasury',
					type: 'address',
				},
			],
			name: 'setTreasury',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'treasury',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
	],
}
