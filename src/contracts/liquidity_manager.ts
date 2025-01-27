import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'Forbidden',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidAmountEth',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidAmountToken',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidMinPercentageBase',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint8',
				name: 'version',
				type: 'uint8',
			},
		],
		name: 'Initialized',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract IMainToken',
				name: 'token',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amountToken',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amountETH',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'pair',
				type: 'address',
			},
		],
		name: 'LiquidityAdded',
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
				name: 'token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amountToken',
				type: 'uint256',
			},
		],
		name: 'addLiquidityForToken',
		outputs: [
			{
				internalType: 'uint256',
				name: '_amountToken',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amountETH',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_lpAmount',
				type: 'uint256',
			},
		],
		stateMutability: 'payable',
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
		name: 'checkHasLiquidity',
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
				name: 'tokenA',
				type: 'address',
			},
		],
		name: 'computeUniV2Pair',
		outputs: [
			{
				internalType: 'address',
				name: 'pair',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'exists',
				type: 'bool',
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
				internalType: 'contract IUniswapV2Factory',
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
				name: '_uniswapV2Router',
				type: 'address',
			},
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'mainContract',
		outputs: [
			{
				internalType: 'contract IMainContract',
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
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'router',
		outputs: [
			{
				internalType: 'contract IUniswapV2Router',
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
				internalType: 'contract IMainContract',
				name: '_mainContract',
				type: 'address',
			},
		],
		name: 'setMainContractAddress',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_percentageBase',
				type: 'uint256',
			},
		],
		name: 'setMinPercentageBase',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_router',
				type: 'address',
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
				internalType: 'address',
				name: 'newOwner',
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
const LIQUIDITY_MANAGER: Contract<typeof abi> = {
	name: 'Liquidity Manager',
	address: '0x13a9a85ba9c827b6cda0d978de05c47544f0eacb',
	is_deprecated: false,
	created_at: 1737419818,
	abi: abi,
}
export default LIQUIDITY_MANAGER
