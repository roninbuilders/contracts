export const MULTICALL_ABI = [
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_calls',
				type: 'tuple[]',
				components: [
					{
						internal_type: '',
						name: 'target',
						type: 'address',
					},
					{
						internal_type: '',
						name: 'callData',
						type: 'bytes',
					},
				],

			},
		],
		name: 'aggregate',
		outputs: [
			{
				internal_type: '',
				name: '_blockNumber',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_returnData',
				type: 'bytes[]',

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
				name: '_calls',
				type: 'tuple[]',
				components: [
					{
						internal_type: '',
						name: 'target',
						type: 'address',
					},
					{
						internal_type: '',
						name: 'callData',
						type: 'bytes',
					},
				],

			},
		],
		name: 'blockAndAggregate',
		outputs: [
			{
				internal_type: '',
				name: '_blockNumber',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_blockHash',
				type: 'bytes32',

			},
			{
				internal_type: '',
				name: '_returnData',
				type: 'tuple[]',
				components: [
					{
						internal_type: '',
						name: 'success',
						type: 'bool',
					},
					{
						internal_type: '',
						name: 'returnData',
						type: 'bytes',
					},
				],

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
				name: '_blockNumber',
				type: 'uint256',

			},
		],
		name: 'getBlockHash',
		outputs: [
			{
				internal_type: '',
				name: '_blockHash',
				type: 'bytes32',

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
		name: 'getBlockNumber',
		outputs: [
			{
				internal_type: '',
				name: '_blockNumber',
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
		name: 'getCurrentBlockCoinbase',
		outputs: [
			{
				internal_type: '',
				name: '_coinbase',
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
		name: 'getCurrentBlockDifficulty',
		outputs: [
			{
				internal_type: '',
				name: '_difficulty',
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
		name: 'getCurrentBlockGasLimit',
		outputs: [
			{
				internal_type: '',
				name: '_gaslimit',
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
		name: 'getCurrentBlockTimestamp',
		outputs: [
			{
				internal_type: '',
				name: '_timestamp',
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
		name: 'getLastBlockHash',
		outputs: [
			{
				internal_type: '',
				name: '_blockHash',
				type: 'bytes32',

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
		name: 'getRonBalance',
		outputs: [
			{
				internal_type: '',
				name: '_balance',
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
				name: '_requireSuccess',
				type: 'bool',

			},
			{
				internal_type: '',
				name: '_calls',
				type: 'tuple[]',
				components: [
					{
						internal_type: '',
						name: 'target',
						type: 'address',
					},
					{
						internal_type: '',
						name: 'callData',
						type: 'bytes',
					},
				],

			},
		],
		name: 'tryAggregate',
		outputs: [
			{
				internal_type: '',
				name: '_returnData',
				type: 'tuple[]',
				components: [
					{
						internal_type: '',
						name: 'success',
						type: 'bool',
					},
					{
						internal_type: '',
						name: 'returnData',
						type: 'bytes',
					},
				],

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
				name: '_requireSuccess',
				type: 'bool',

			},
			{
				internal_type: '',
				name: '_calls',
				type: 'tuple[]',
				components: [
					{
						internal_type: '',
						name: 'target',
						type: 'address',
					},
					{
						internal_type: '',
						name: 'callData',
						type: 'bytes',
					},
				],

			},
		],
		name: 'tryBlockAndAggregate',
		outputs: [
			{
				internal_type: '',
				name: '_blockNumber',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_blockHash',
				type: 'bytes32',

			},
			{
				internal_type: '',
				name: '_returnData',
				type: 'tuple[]',
				components: [
					{
						internal_type: '',
						name: 'success',
						type: 'bool',
					},
					{
						internal_type: '',
						name: 'returnData',
						type: 'bytes',
					},
				],

			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
]
