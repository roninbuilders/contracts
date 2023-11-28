export const USDC_ABI = [
	{
		inputs: [],
		name: '',
		outputs: null,
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor',
		anonymous: false,
	},
	{
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
		inputs: [],
		name: 'Paused',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
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
		inputs: [],
		name: 'Unpaused',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
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
		inputs: [],
		name: 'initialize',
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
		inputs: [],
		name: 'removeAdmin',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
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
		inputs: [],
		name: 'unpause',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
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
