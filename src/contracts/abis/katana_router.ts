export const KATANA_ROUTER_ABI = [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_factory',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_WRON',
				type: 'address',
			},
		],
		payable: !1,
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		payable: !0,
		stateMutability: 'payable',
		type: 'fallback',
	},
	{
		constant: !0,
		inputs: [],
		name: 'WRON',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: !1,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: !1,
		inputs: [
			{
				internalType: 'address',
				name: '_tokenA',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_tokenB',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_amountADesired',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountBDesired',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountAMin',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountBMin',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
			},
		],
		name: 'addLiquidity',
		outputs: [
			{
				internalType: 'uint256',
				name: '_amountA',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountB',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_liquidity',
				type: 'uint256',
			},
		],
		payable: !1,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: !1,
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_amountTokenDesired',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountTokenMin',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountRONMin',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
			},
		],
		name: 'addLiquidityRON',
		outputs: [
			{
				internalType: 'uint256',
				name: '_amountToken',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountRON',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_liquidity',
				type: 'uint256',
			},
		],
		payable: !0,
		stateMutability: 'payable',
		type: 'function',
	},
	{
		constant: !0,
		inputs: [],
		name: 'factory',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: !1,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: !0,
		inputs: [
			{
				internalType: 'uint256',
				name: '_amountOut',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_reserveIn',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_reserveOut',
				type: 'uint256',
			},
		],
		name: 'getAmountIn',
		outputs: [
			{
				internalType: 'uint256',
				name: '_amountIn',
				type: 'uint256',
			},
		],
		payable: !1,
		stateMutability: 'pure',
		type: 'function',
	},
	{
		constant: !0,
		inputs: [
			{
				internalType: 'uint256',
				name: '_amountIn',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_reserveIn',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_reserveOut',
				type: 'uint256',
			},
		],
		name: 'getAmountOut',
		outputs: [
			{
				internalType: 'uint256',
				name: '_amountOut',
				type: 'uint256',
			},
		],
		payable: !1,
		stateMutability: 'pure',
		type: 'function',
	},
	{
		constant: !0,
		inputs: [
			{
				internalType: 'uint256',
				name: '_amountOut',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: '_path',
				type: 'address[]',
			},
		],
		name: 'getAmountsIn',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '_amounts',
				type: 'uint256[]',
			},
		],
		payable: !1,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: !0,
		inputs: [
			{
				internalType: 'uint256',
				name: '_amountIn',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: '_path',
				type: 'address[]',
			},
		],
		name: 'getAmountsOut',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '_amounts',
				type: 'uint256[]',
			},
		],
		payable: !1,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: !0,
		inputs: [
			{
				internalType: 'uint256',
				name: '_amountA',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_reserveA',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_reserveB',
				type: 'uint256',
			},
		],
		name: 'quote',
		outputs: [
			{
				internalType: 'uint256',
				name: '_amountB',
				type: 'uint256',
			},
		],
		payable: !1,
		stateMutability: 'pure',
		type: 'function',
	},
	{
		constant: !1,
		inputs: [
			{
				internalType: 'address',
				name: '_tokenA',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_tokenB',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_liquidity',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountAMin',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountBMin',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
			},
		],
		name: 'removeLiquidity',
		outputs: [
			{
				internalType: 'uint256',
				name: '_amountA',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountB',
				type: 'uint256',
			},
		],
		payable: !1,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: !1,
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_liquidity',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountTokenMin',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountRONMin',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
			},
		],
		name: 'removeLiquidityRON',
		outputs: [
			{
				internalType: 'uint256',
				name: '_amountToken',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountRON',
				type: 'uint256',
			},
		],
		payable: !1,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: !1,
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_liquidity',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountTokenMin',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountRONMin',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
			},
		],
		name: 'removeLiquidityRONSupportingFeeOnTransferTokens',
		outputs: [
			{
				internalType: 'uint256',
				name: '_amountRON',
				type: 'uint256',
			},
		],
		payable: !1,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: !1,
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_liquidity',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountTokenMin',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountRONMin',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: '_approveMax',
				type: 'bool',
			},
			{
				internalType: 'uint8',
				name: '_v',
				type: 'uint8',
			},
			{
				internalType: 'bytes32',
				name: '_r',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: '_s',
				type: 'bytes32',
			},
		],
		name: 'removeLiquidityRONWithPermit',
		outputs: [
			{
				internalType: 'uint256',
				name: '_amountToken',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountRON',
				type: 'uint256',
			},
		],
		payable: !1,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: !1,
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_liquidity',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountTokenMin',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountRONMin',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: '_approveMax',
				type: 'bool',
			},
			{
				internalType: 'uint8',
				name: '_v',
				type: 'uint8',
			},
			{
				internalType: 'bytes32',
				name: '_r',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: '_s',
				type: 'bytes32',
			},
		],
		name: 'removeLiquidityRONWithPermitSupportingFeeOnTransferTokens',
		outputs: [
			{
				internalType: 'uint256',
				name: '_amountRON',
				type: 'uint256',
			},
		],
		payable: !1,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: !1,
		inputs: [
			{
				internalType: 'address',
				name: '_tokenA',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_tokenB',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_liquidity',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountAMin',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountBMin',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: '_approveMax',
				type: 'bool',
			},
			{
				internalType: 'uint8',
				name: '_v',
				type: 'uint8',
			},
			{
				internalType: 'bytes32',
				name: '_r',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: '_s',
				type: 'bytes32',
			},
		],
		name: 'removeLiquidityWithPermit',
		outputs: [
			{
				internalType: 'uint256',
				name: '_amountA',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountB',
				type: 'uint256',
			},
		],
		payable: !1,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: !1,
		inputs: [
			{
				internalType: 'uint256',
				name: '_amountOutMin',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: '_path',
				type: 'address[]',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
			},
		],
		name: 'swapExactRONForTokens',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '_amounts',
				type: 'uint256[]',
			},
		],
		payable: !0,
		stateMutability: 'payable',
		type: 'function',
	},
	{
		constant: !1,
		inputs: [
			{
				internalType: 'uint256',
				name: '_amountOutMin',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: '_path',
				type: 'address[]',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
			},
		],
		name: 'swapExactRONForTokensSupportingFeeOnTransferTokens',
		outputs: [],
		payable: !0,
		stateMutability: 'payable',
		type: 'function',
	},
	{
		constant: !1,
		inputs: [
			{
				internalType: 'uint256',
				name: '_amountIn',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountOutMin',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: '_path',
				type: 'address[]',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
			},
		],
		name: 'swapExactTokensForRON',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '_amounts',
				type: 'uint256[]',
			},
		],
		payable: !1,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: !1,
		inputs: [
			{
				internalType: 'uint256',
				name: '_amountIn',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountOutMin',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: '_path',
				type: 'address[]',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
			},
		],
		name: 'swapExactTokensForRONSupportingFeeOnTransferTokens',
		outputs: [],
		payable: !1,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: !1,
		inputs: [
			{
				internalType: 'uint256',
				name: '_amountIn',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountOutMin',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: '_path',
				type: 'address[]',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
			},
		],
		name: 'swapExactTokensForTokens',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '_amounts',
				type: 'uint256[]',
			},
		],
		payable: !1,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: !1,
		inputs: [
			{
				internalType: 'uint256',
				name: '_amountIn',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountOutMin',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: '_path',
				type: 'address[]',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
			},
		],
		name: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
		outputs: [],
		payable: !1,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: !1,
		inputs: [
			{
				internalType: 'uint256',
				name: '_amountOut',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: '_path',
				type: 'address[]',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
			},
		],
		name: 'swapRONForExactTokens',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '_amounts',
				type: 'uint256[]',
			},
		],
		payable: !0,
		stateMutability: 'payable',
		type: 'function',
	},
	{
		constant: !1,
		inputs: [
			{
				internalType: 'uint256',
				name: '_amountOut',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountInMax',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: '_path',
				type: 'address[]',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
			},
		],
		name: 'swapTokensForExactRON',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '_amounts',
				type: 'uint256[]',
			},
		],
		payable: !1,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: !1,
		inputs: [
			{
				internalType: 'uint256',
				name: '_amountOut',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountInMax',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: '_path',
				type: 'address[]',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
			},
		],
		name: 'swapTokensForExactTokens',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '_amounts',
				type: 'uint256[]',
			},
		],
		payable: !1,
		stateMutability: 'nonpayable',
		type: 'function',
	},
]
