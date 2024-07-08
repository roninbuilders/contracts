import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		name: 'AmountOutUnderLimit',
		type: 'error',
	},
	{
		inputs: [],
		name: 'FeeExceedsMaximum',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InsufficientBalance',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidSignature',
		type: 'error',
	},
	{
		inputs: [],
		name: 'OrderExpired',
		type: 'error',
	},
	{
		inputs: [],
		name: 'Unauthorized',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'oldAdmin',
				type: 'address',
			},
			{
				indexed: true,
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
				name: 'trader',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'newBalance',
				type: 'uint256',
			},
		],
		name: 'BaseTokenBalanceDecreased',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'trader',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'newBalance',
				type: 'uint256',
			},
		],
		name: 'BaseTokenDeposited',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'BaseTokenFeeBalanceWithdrawn',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'trader',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'newBalance',
				type: 'uint256',
			},
		],
		name: 'BaseTokenWithdrawn',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'Erc20FeeBalanceWithdrawn',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'trader',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'tokenIn',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'tokenOut',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amountIn',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amountOut',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'feePercent',
				type: 'uint256',
			},
		],
		name: 'LimitOrderExecuted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'operator',
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
				name: 'operator',
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
				indexed: true,
				internalType: 'address',
				name: 'oldRouter',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newRouter',
				type: 'address',
			},
		],
		name: 'RouterChanged',
		type: 'event',
	},
	{
		stateMutability: 'payable',
		type: 'fallback',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
		],
		name: 'addOperator',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
		],
		name: 'approve',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'depositBaseToken',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getAdmin',
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
				name: 'trader',
				type: 'address',
			},
		],
		name: 'getBaseTokenBalance',
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
		name: 'getBaseTokenFeeBalance',
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
		name: 'getRouter',
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
				name: 'admin_',
				type: 'address',
			},
		],
		name: 'initializeAdmin',
		outputs: [],
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
		],
		name: 'isOperator',
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
		],
		name: 'removeOperator',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newAdmin',
				type: 'address',
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
				name: 'newRouter',
				type: 'address',
			},
			{
				internalType: 'address[]',
				name: 'tokensToRevoke',
				type: 'address[]',
			},
		],
		name: 'setRouter',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'trader',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'amountIn',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'amountOutMin',
						type: 'uint256',
					},
					{
						internalType: 'address[]',
						name: 'path',
						type: 'address[]',
					},
					{
						internalType: 'uint256',
						name: 'deadline',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'feePercent',
						type: 'uint256',
					},
					{
						internalType: 'bytes',
						name: 'signature',
						type: 'bytes',
					},
					{
						internalType: 'uint256',
						name: 'slippagePercent',
						type: 'uint256',
					},
				],
				internalType: 'struct Order',
				name: 'order',
				type: 'tuple',
			},
		],
		name: 'swapExactRONForTokens',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'trader',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'amountIn',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'amountOutMin',
						type: 'uint256',
					},
					{
						internalType: 'address[]',
						name: 'path',
						type: 'address[]',
					},
					{
						internalType: 'uint256',
						name: 'deadline',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'feePercent',
						type: 'uint256',
					},
					{
						internalType: 'bytes',
						name: 'signature',
						type: 'bytes',
					},
					{
						internalType: 'uint256',
						name: 'slippagePercent',
						type: 'uint256',
					},
				],
				internalType: 'struct Order',
				name: 'order',
				type: 'tuple',
			},
		],
		name: 'swapExactTokensForRON',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'trader',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'amountIn',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'amountOutMin',
						type: 'uint256',
					},
					{
						internalType: 'address[]',
						name: 'path',
						type: 'address[]',
					},
					{
						internalType: 'uint256',
						name: 'deadline',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'feePercent',
						type: 'uint256',
					},
					{
						internalType: 'bytes',
						name: 'signature',
						type: 'bytes',
					},
					{
						internalType: 'uint256',
						name: 'slippagePercent',
						type: 'uint256',
					},
				],
				internalType: 'struct Order',
				name: 'order',
				type: 'tuple',
			},
		],
		name: 'swapExactTokensForTokens',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'withdrawBaseToken',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'withdrawBaseTokenFee',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
		],
		name: 'withdrawErc20Fee',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const LIMIT_ORDER_EXECUTOR: Contract<typeof abi> = {
	name: 'Limit Order Executor',
	address: '0x5c73c9e93ec2a05f0ddf3e301a1519435d25ce65',
	is_deprecated: false,
	created_at: 1718925389,
	abi: abi,
}
export default LIMIT_ORDER_EXECUTOR
