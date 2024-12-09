import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_factory',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_WETH9',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'WETH9',
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
		name: 'factory',
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
		name: 'governance',
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
				internalType: 'int256',
				name: 'amount0Delta',
				type: 'int256',
			},
			{
				internalType: 'int256',
				name: 'amount1Delta',
				type: 'int256',
			},
			{
				internalType: 'bytes',
				name: 'path',
				type: 'bytes',
			},
		],
		name: 'katanaV3SwapCallback',
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes',
				name: 'path',
				type: 'bytes',
			},
			{
				internalType: 'uint256',
				name: 'amountIn',
				type: 'uint256',
			},
		],
		name: 'quoteExactInput',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountOut',
				type: 'uint256',
			},
			{
				internalType: 'uint160[]',
				name: 'sqrtPriceX96AfterList',
				type: 'uint160[]',
			},
			{
				internalType: 'uint32[]',
				name: 'initializedTicksCrossedList',
				type: 'uint32[]',
			},
			{
				internalType: 'uint256',
				name: 'gasEstimate',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'tokenIn',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'tokenOut',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'amountIn',
						type: 'uint256',
					},
					{
						internalType: 'uint24',
						name: 'fee',
						type: 'uint24',
					},
					{
						internalType: 'uint160',
						name: 'sqrtPriceLimitX96',
						type: 'uint160',
					},
				],
				internalType: 'struct IQuoterV2.QuoteExactInputSingleParams',
				name: 'params',
				type: 'tuple',
			},
		],
		name: 'quoteExactInputSingle',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountOut',
				type: 'uint256',
			},
			{
				internalType: 'uint160',
				name: 'sqrtPriceX96After',
				type: 'uint160',
			},
			{
				internalType: 'uint32',
				name: 'initializedTicksCrossed',
				type: 'uint32',
			},
			{
				internalType: 'uint256',
				name: 'gasEstimate',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes',
				name: 'path',
				type: 'bytes',
			},
			{
				internalType: 'uint256',
				name: 'amountOut',
				type: 'uint256',
			},
		],
		name: 'quoteExactOutput',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountIn',
				type: 'uint256',
			},
			{
				internalType: 'uint160[]',
				name: 'sqrtPriceX96AfterList',
				type: 'uint160[]',
			},
			{
				internalType: 'uint32[]',
				name: 'initializedTicksCrossedList',
				type: 'uint32[]',
			},
			{
				internalType: 'uint256',
				name: 'gasEstimate',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'tokenIn',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'tokenOut',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'amount',
						type: 'uint256',
					},
					{
						internalType: 'uint24',
						name: 'fee',
						type: 'uint24',
					},
					{
						internalType: 'uint160',
						name: 'sqrtPriceLimitX96',
						type: 'uint160',
					},
				],
				internalType: 'struct IQuoterV2.QuoteExactOutputSingleParams',
				name: 'params',
				type: 'tuple',
			},
		],
		name: 'quoteExactOutputSingle',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountIn',
				type: 'uint256',
			},
			{
				internalType: 'uint160',
				name: 'sqrtPriceX96After',
				type: 'uint160',
			},
			{
				internalType: 'uint32',
				name: 'initializedTicksCrossed',
				type: 'uint32',
			},
			{
				internalType: 'uint256',
				name: 'gasEstimate',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const QUOTER_V2: Contract<typeof abi> = {
	name: 'Quoter V2',
	address: '0x84ab2f9fdc4bf66312b0819d879437b8749efdf2',
	is_deprecated: false,
	created_at: 1732163872,
	abi: abi,
}
export default QUOTER_V2