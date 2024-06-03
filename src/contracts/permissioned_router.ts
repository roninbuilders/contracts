import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'factory_',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'wron_',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'WRON',
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
				name: 'tokenA',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'tokenB',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amountADesired',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountBDesired',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountAMin',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountBMin',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
			},
		],
		name: 'addLiquidity',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountA',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountB',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'liquidity',
				type: 'uint256',
			},
		],
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
			{
				internalType: 'uint256',
				name: 'amountTokenDesired',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountTokenMin',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountRONMin',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
			},
		],
		name: 'addLiquidityRON',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountToken',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountRON',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'liquidity',
				type: 'uint256',
			},
		],
		stateMutability: 'payable',
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
		inputs: [
			{
				internalType: 'uint256',
				name: 'amountOut',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'reserveIn',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'reserveOut',
				type: 'uint256',
			},
		],
		name: 'getAmountIn',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountIn',
				type: 'uint256',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'amountIn',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'reserveIn',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'reserveOut',
				type: 'uint256',
			},
		],
		name: 'getAmountOut',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountOut',
				type: 'uint256',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'amountOut',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: 'path',
				type: 'address[]',
			},
		],
		name: 'getAmountsIn',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'amountIn',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: 'path',
				type: 'address[]',
			},
		],
		name: 'getAmountsOut',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getGovernance',
		outputs: [
			{
				internalType: 'contract IKatanaGovernance',
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
				internalType: 'uint256',
				name: 'amountA',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'reserveA',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'reserveB',
				type: 'uint256',
			},
		],
		name: 'quote',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountB',
				type: 'uint256',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'tokenA',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'tokenB',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'liquidity',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountAMin',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountBMin',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
			},
		],
		name: 'removeLiquidity',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountA',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountB',
				type: 'uint256',
			},
		],
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
			{
				internalType: 'uint256',
				name: 'liquidity',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountTokenMin',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountRONMin',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
			},
		],
		name: 'removeLiquidityRON',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountToken',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountRON',
				type: 'uint256',
			},
		],
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
			{
				internalType: 'uint256',
				name: 'liquidity',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountTokenMin',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountRONMin',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
			},
		],
		name: 'removeLiquidityRONSupportingFeeOnTransferTokens',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountRON',
				type: 'uint256',
			},
		],
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
			{
				internalType: 'uint256',
				name: 'liquidity',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountTokenMin',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountRONMin',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'approveMax',
				type: 'bool',
			},
			{
				internalType: 'uint8',
				name: 'v',
				type: 'uint8',
			},
			{
				internalType: 'bytes32',
				name: 'r',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 's',
				type: 'bytes32',
			},
		],
		name: 'removeLiquidityRONWithPermit',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountToken',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountRON',
				type: 'uint256',
			},
		],
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
			{
				internalType: 'uint256',
				name: 'liquidity',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountTokenMin',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountRONMin',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'approveMax',
				type: 'bool',
			},
			{
				internalType: 'uint8',
				name: 'v',
				type: 'uint8',
			},
			{
				internalType: 'bytes32',
				name: 'r',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 's',
				type: 'bytes32',
			},
		],
		name: 'removeLiquidityRONWithPermitSupportingFeeOnTransferTokens',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountRON',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'tokenA',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'tokenB',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'liquidity',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountAMin',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountBMin',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'approveMax',
				type: 'bool',
			},
			{
				internalType: 'uint8',
				name: 'v',
				type: 'uint8',
			},
			{
				internalType: 'bytes32',
				name: 'r',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 's',
				type: 'bytes32',
			},
		],
		name: 'removeLiquidityWithPermit',
		outputs: [
			{
				internalType: 'uint256',
				name: 'amountA',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountB',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
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
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
			},
		],
		name: 'swapExactRONForTokens',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
		],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
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
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
			},
		],
		name: 'swapExactRONForTokensSupportingFeeOnTransferTokens',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
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
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
			},
		],
		name: 'swapExactTokensForRON',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
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
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
			},
		],
		name: 'swapExactTokensForRONSupportingFeeOnTransferTokens',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
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
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
			},
		],
		name: 'swapExactTokensForTokens',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
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
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
			},
		],
		name: 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'amountOut',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: 'path',
				type: 'address[]',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
			},
		],
		name: 'swapRONForExactTokens',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
		],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'amountOut',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountInMax',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: 'path',
				type: 'address[]',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
			},
		],
		name: 'swapTokensForExactRON',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'amountOut',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'amountInMax',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: 'path',
				type: 'address[]',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
			},
		],
		name: 'swapTokensForExactTokens',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const PERMISSIONED_ROUTER: Contract<typeof abi> = {
	name: 'Permissioned Router',
	address: '0xc05afc8c9353c1dd5f872eccfacd60fd5a2a9ac7',
	is_deprecated: false,
	updated_at: 1717375360,
	abi: abi,
}
export default PERMISSIONED_ROUTER
