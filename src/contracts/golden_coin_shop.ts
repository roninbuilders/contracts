import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'contract IERC20',
				name: '_WETH',
				type: 'address',
			},
			{
				internalType: 'address payable',
				name: '_receiver',
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
				indexed: false,
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'contract IERC20',
				name: 'token',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'cost',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'reward',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'timestamp',
				type: 'uint256',
			},
		],
		name: 'Buy',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldValue',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newValue',
				type: 'uint256',
			},
		],
		name: 'DailyGoldenLimitChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldValue',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newValue',
				type: 'uint256',
			},
		],
		name: 'FinishAtChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'contract IERC20',
				name: 'token',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'cost',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'reward',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'available',
				type: 'bool',
			},
		],
		name: 'ItemChanged',
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
				name: 'oldReceiver',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newReceiver',
				type: 'address',
			},
		],
		name: 'ReceiverChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldValue',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newValue',
				type: 'uint256',
			},
		],
		name: 'StartAtChanged',
		type: 'event',
	},
	{
		inputs: [],
		name: 'WETH',
		outputs: [
			{
				internalType: 'contract IERC20',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'acceptOwner',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IERC20[]',
				name: '_tokens',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_costs',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_rewards',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_dailyLimits',
				type: 'uint256[]',
			},
		],
		name: 'addItems',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'allItems',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'contract IERC20',
						name: 'token',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'cost',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'reward',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'dailyLimit',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: 'available',
						type: 'bool',
					},
				],
				internalType: 'struct GoldenCoinShop.Item[]',
				name: 'itemList',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'contract IERC20',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_cost',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_reward',
				type: 'uint256',
			},
		],
		name: 'buy',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_limit',
				type: 'uint256',
			},
		],
		name: 'changeDailyGoldenLimit',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'contract IERC20',
						name: 'token',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'cost',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'reward',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'dailyLimit',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: 'available',
						type: 'bool',
					},
				],
				internalType: 'struct GoldenCoinShop.Item[]',
				name: '_items',
				type: 'tuple[]',
			},
		],
		name: 'changeItems',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address payable',
				name: '_receiver',
				type: 'address',
			},
		],
		name: 'changeReciever',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'dailyGoldenLimit',
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
				internalType: 'uint256[]',
				name: '_ids',
				type: 'uint256[]',
			},
		],
		name: 'disableItems',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: '_ids',
				type: 'uint256[]',
			},
		],
		name: 'enableItems',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'finishAt',
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
		name: 'globalBuyed',
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
		name: 'globalDailyBuyed',
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
		name: 'globalLast',
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
		name: 'interval',
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
		name: 'itemArrayLength',
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
		name: 'itemLength',
		outputs: [
			{
				internalType: 'uint256',
				name: 'length',
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
				name: '',
				type: 'uint256',
			},
		],
		name: 'items',
		outputs: [
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				internalType: 'contract IERC20',
				name: 'token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'cost',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'reward',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'dailyLimit',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'available',
				type: 'bool',
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
		name: 'pendingOwner',
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
		name: 'receiver',
		outputs: [
			{
				internalType: 'address payable',
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
				name: '_finishAt',
				type: 'uint256',
			},
		],
		name: 'setFinishAt',
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
		name: 'setPendingOwner',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_startAt',
				type: 'uint256',
			},
		],
		name: 'setStartAt',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'startAt',
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
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'userBuyed',
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
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_user',
				type: 'address',
			},
		],
		name: 'userDailyBuyed',
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
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'userLast',
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
] as const
const GOLDEN_COIN_SHOP: Contract<typeof abi> = {
	name: 'Golden Coin Shop',
	address: '0x23e972baea76d3efe49a381f372f113bb7917cd8',
	is_deprecated: false,
	created_at: 1721399862,
	abi: abi,
}
export default GOLDEN_COIN_SHOP
