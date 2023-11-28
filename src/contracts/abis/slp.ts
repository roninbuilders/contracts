export const SLP_ABI = [
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_dailyPotionLimit',
				type: 'uint256',

			},
		],
		name: '',
		outputs: null,
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_oldAdmin',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_newAdmin',
				type: 'address',

			},
		],
		name: 'AdminChanged',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_oldAdmin',
				type: 'address',

			},
		],
		name: 'AdminRemoved',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_owner',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_spender',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_value',
				type: 'uint256',

			},
		],
		name: 'Approval',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_minter',
				type: 'address',

			},
		],
		name: 'MinterAdded',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_minter',
				type: 'address',

			},
		],
		name: 'MinterRemoved',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'Paused',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_owner',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_amount',
				type: 'uint256',

			},
		],
		name: 'SmoothLovePotionCheckpoint',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_spender',
				type: 'address',

			},
		],
		name: 'SpenderUnwhitelisted',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_spender',
				type: 'address',

			},
		],
		name: 'SpenderWhitelisted',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_from',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_to',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_value',
				type: 'uint256',

			},
		],
		name: 'Transfer',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'Unpaused',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_addedMinters',
				type: 'address[]',

			},
		],
		name: 'addMinters',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [],
		name: 'admin',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'address',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [
			{
				internal_type: '',
				name: '_owner',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_spender',
				type: 'address',

			},
		],
		name: 'allowance',
		outputs: [
			{
				internal_type: '',
				name: '_value',
				type: 'uint256',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_spender',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_value',
				type: 'uint256',

			},
		],
		name: 'approve',
		outputs: [
			{
				internal_type: '',
				name: '_success',
				type: 'bool',

			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_spender',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_value',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_data',
				type: 'bytes',

			},
		],
		name: 'approveAndCall',
		outputs: [
			{
				internal_type: '',
				name: '_success',
				type: 'bool',

			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_spender',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_value',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_data',
				type: 'bytes',

			},
		],
		name: 'approveAndCallPayable',
		outputs: [
			{
				internal_type: '',
				name: '_success',
				type: 'bool',

			},
		],
		payable: true,
		stateMutability: 'payable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [
			{
				internal_type: '',
				name: '',
				type: 'address',

			},
		],
		name: 'balanceOf',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint256',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_value',
				type: 'uint256',

			},
		],
		name: 'burn',
		outputs: [
			{
				internal_type: '',
				name: '_success',
				type: 'bool',

			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_from',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_value',
				type: 'uint256',

			},
		],
		name: 'burnFrom',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bool',

			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [],
		name: 'cappedSupply',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint256',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_newAdmin',
				type: 'address',

			},
		],
		name: 'changeAdmin',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_owner',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_amount',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_createdAt',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_signature',
				type: 'bytes',

			},
		],
		name: 'checkpoint',
		outputs: [
			{
				internal_type: '',
				name: '_balance',
				type: 'uint256',

			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_amount',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_createdAt',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_signature',
				type: 'bytes',

			},
			{
				internal_type: '',
				name: '_spender',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_approvedAmount',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_data',
				type: 'bytes',

			},
		],
		name: 'checkpointAndCall',
		outputs: [
			{
				internal_type: '',
				name: '_balance',
				type: 'uint256',

			},
		],
		payable: true,
		stateMutability: 'payable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [],
		name: 'dailyPotionLimit',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint256',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [],
		name: 'decimals',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint8',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [
			{
				internal_type: '',
				name: '_owner',
				type: 'address',

			},
		],
		name: 'getCheckpoint',
		outputs: [
			{
				internal_type: '',
				name: '_amount',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_createdAt',
				type: 'uint256',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [
			{
				internal_type: '',
				name: '_addr',
				type: 'address',

			},
		],
		name: 'isMinter',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bool',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_to',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_value',
				type: 'uint256',

			},
		],
		name: 'mint',
		outputs: [
			{
				internal_type: '',
				name: '_success',
				type: 'bool',

			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [
			{
				internal_type: '',
				name: '',
				type: 'address',

			},
		],
		name: 'minter',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bool',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint256',

			},
		],
		name: 'minters',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'address',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [],
		name: 'name',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'string',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'pause',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [],
		name: 'paused',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bool',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'removeAdmin',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_removedMinters',
				type: 'address[]',

			},
		],
		name: 'removeMinters',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_dailyPotionLimit',
				type: 'uint256',

			},
		],
		name: 'setDailyPotionLimit',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [],
		name: 'symbol',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'string',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [],
		name: 'totalSupply',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint256',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_to',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_value',
				type: 'uint256',

			},
		],
		name: 'transfer',
		outputs: [
			{
				internal_type: '',
				name: '_success',
				type: 'bool',

			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_from',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_to',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_value',
				type: 'uint256',

			},
		],
		name: 'transferFrom',
		outputs: [
			{
				internal_type: '',
				name: '_success',
				type: 'bool',

			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'unpause',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_spender',
				type: 'address',

			},
		],
		name: 'unwhitelist',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_spender',
				type: 'address',

			},
		],
		name: 'whitelist',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [
			{
				internal_type: '',
				name: '',
				type: 'address',

			},
		],
		name: 'whitelisted',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bool',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
]
