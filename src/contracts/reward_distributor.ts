import { Contract } from '@/contract'
const REWARD_DISTRIBUTOR: Contract = {
	name: 'Reward Distributor',
	address: '0x1a35e7ed2a2476129a32612644c8426bf8e8730c',
	is_deprecated: false,
	updated_at: 1707575160,
	abi: [
		{
			inputs: [
				{
					internalType: 'address',
					name: '_operator',
					type: 'address',
				},
				{
					internalType: 'uint256[]',
					name: '_rewardIds',
					type: 'uint256[]',
				},
				{
					internalType: 'contract IERC20[]',
					name: '_tokenAddresses',
					type: 'address[]',
				},
				{
					internalType: 'uint256[]',
					name: '_conversionRates',
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
			inputs: [],
			name: 'Paused',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_owner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_rewardId',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_total',
					type: 'uint256',
				},
			],
			name: 'RewardClaimed',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [],
			name: 'Unpaused',
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
			constant: false,
			inputs: [
				{
					internalType: 'uint256',
					name: '_rewardId',
					type: 'uint256',
				},
				{
					internalType: 'contract IERC20',
					name: '_tokenAddress',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_conversionRate',
					type: 'uint256',
				},
			],
			name: 'addRewardToken',
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
			inputs: [
				{
					internalType: 'address',
					name: '_owner',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_rewardId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_createdAt',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: '_signature',
					type: 'bytes',
				},
			],
			name: 'claim',
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
					name: '_owner',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_rewardId',
					type: 'uint256',
				},
			],
			name: 'getClaimed',
			outputs: [
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_createdAt',
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
			inputs: [],
			name: 'pause',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'paused',
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
			name: 'rewardMap',
			outputs: [
				{
					internalType: 'contract IERC20',
					name: 'tokenAddress',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'conversionRate',
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
			name: 'unpause',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [],
			name: 'withdrawEther',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'contract IERC20',
					name: '_token',
					type: 'address',
				},
			],
			name: 'withdrawToken',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
export default REWARD_DISTRIBUTOR
