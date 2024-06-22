import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner_',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'affiliate',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'factory_',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'wron',
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
				indexed: true,
				internalType: 'address',
				name: 'taker',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'FeeTaken',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'affiliate',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'feeRatio',
				type: 'uint256',
			},
		],
		name: 'NewAffiliateInfo',
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
		inputs: [],
		name: 'DEFAULT_FEE_RATIO',
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
		name: 'MAX_PERCENTAGE',
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
		inputs: [],
		name: 'feeFraction',
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
		name: 'getAffiliate',
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
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'affiliate',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'feeRatio',
				type: 'uint256',
			},
		],
		name: 'setAffiliateInfo',
		outputs: [],
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
		inputs: [
			{
				internalType: 'address',
				name: 'owner_',
				type: 'address',
			},
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const AFFILIATE_ROUTER: Contract<typeof abi> = {
	name: 'Affiliate Router',
	address: '0x77f96cf7b98b963fb8a9b84787806d396d953b2b',
	is_deprecated: false,
	created_at: 1716265937,
	abi: abi,
}
export default AFFILIATE_ROUTER
