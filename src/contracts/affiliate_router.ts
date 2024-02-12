import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_affiliate',
				type: 'address',
			},
			{
				internalType: 'contract IKatanaRouter',
				name: '_router',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'ErrNonReentrancy',
		type: 'error',
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
		stateMutability: 'payable',
		type: 'fallback',
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
		inputs: [],
		name: 'affiliate',
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
		name: 'disableRouter',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bool',
				name: '_allowFail',
				type: 'bool',
			},
			{
				internalType: 'address',
				name: '_target',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_value',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: '_params',
				type: 'bytes',
			},
		],
		name: 'exec',
		outputs: [
			{
				internalType: 'bytes',
				name: '_returnOrRevertData',
				type: 'bytes',
			},
		],
		stateMutability: 'nonpayable',
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
		stateMutability: 'view',
		type: 'function',
	},
	{
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
		name: 'router',
		outputs: [
			{
				internalType: 'contract IKatanaRouter',
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
				name: '_affiliate',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '__feeRatio',
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
		stateMutability: 'payable',
		type: 'function',
	},
	{
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
		stateMutability: 'payable',
		type: 'function',
	},
	{
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
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
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
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
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
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
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
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
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
		stateMutability: 'payable',
		type: 'function',
	},
	{
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
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
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
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_owner',
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
	address: '0x7c645c35ab772be52a474b1e08414d55e8ea56d5',
	is_deprecated: false,
	updated_at: 1707758832,
	abi: abi,
}
export default AFFILIATE_ROUTER
