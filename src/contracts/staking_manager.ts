import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_proxyTo',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_minClaimedBlocks',
				type: 'uint256',
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
				name: '_new',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_old',
				type: 'address',
			},
		],
		name: 'ProxyUpdated',
		type: 'event',
	},
	{
		payable: true,
		stateMutability: 'payable',
		type: 'fallback',
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
		name: 'blockRewards',
		outputs: [
			{
				internalType: 'uint256',
				name: 'fromBlock',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'rewardPerBlock',
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
		constant: true,
		inputs: [],
		name: 'implementation',
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
		inputs: [],
		name: 'minClaimedBlocks',
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
				internalType: 'contract IERC20',
				name: 'stakingToken',
				type: 'address',
			},
			{
				internalType: 'contract IERC20',
				name: 'rewardToken',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'accumulatedRewardsPerShare',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'lastSyncedBlock',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'startedAtBlock',
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
		name: 'proxyType',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'pure',
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
				internalType: 'uint256',
				name: '_minClaimedBlocks',
				type: 'uint256',
			},
		],
		name: 'setMinClaimedBlocks',
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
				name: '_newProxyTo',
				type: 'address',
			},
		],
		name: 'updateProxyTo',
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
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'userRewardInfo',
		outputs: [
			{
				internalType: 'uint256',
				name: 'debitedRewards',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'creditedRewards',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'lastClaimedBlock',
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
] as const
const STAKING_MANAGER: Contract<typeof abi> = {
	name: 'Staking Manager',
	address: '0x8bd81a19420bad681b7bfc20e703ebd8e253782d',
	is_deprecated: false,
	created_at: 1632969648,
	abi: abi,
}
export default STAKING_MANAGER
