import { Contract } from '@/contract'
const abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_oldAdmin',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_newAdmin',
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
				name: '_oldAdmin',
				type: 'address',
			},
		],
		name: 'AdminRemoved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_spender',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_value',
				type: 'uint256',
			},
		],
		name: 'Approval',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_sender',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_amount0',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_amount1',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
		],
		name: 'Burn',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_sender',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_amount0',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_amount1',
				type: 'uint256',
			},
		],
		name: 'Mint',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_minter',
				type: 'address',
			},
		],
		name: 'MinterAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_minter',
				type: 'address',
			},
		],
		name: 'MinterRemoved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_sender',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_amount0In',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_amount1In',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_amount0Out',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_amount1Out',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
		],
		name: 'Swap',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint112',
				name: '_reserve0',
				type: 'uint112',
			},
			{
				indexed: false,
				internalType: 'uint112',
				name: '_reserve1',
				type: 'uint112',
			},
		],
		name: 'Sync',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_from',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_value',
				type: 'uint256',
			},
		],
		name: 'Transfer',
		type: 'event',
	},
	{
		constant: true,
		inputs: [],
		name: 'DOMAIN_SEPARATOR',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'MINIMUM_LIQUIDITY',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'PERMIT_TYPEHASH',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'RON_RELEASE_BLOCK',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'WRON',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address[]',
				name: '_addedMinters',
				type: 'address[]',
			},
		],
		name: 'addMinters',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'admin',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_spender',
				type: 'address',
			},
		],
		name: 'allowance',
		outputs: [
			{
				internalType: 'uint256',
				name: '_value',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_spender',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_value',
				type: 'uint256',
			},
		],
		name: 'approve',
		outputs: [
			{
				internalType: 'bool',
				name: '_success',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'balanceOf',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: '_value',
				type: 'uint256',
			},
		],
		name: 'burn',
		outputs: [
			{
				internalType: 'bool',
				name: '_success',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
		],
		name: 'burn',
		outputs: [
			{
				internalType: 'uint256',
				name: '_amount0',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amount1',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_from',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_value',
				type: 'uint256',
			},
		],
		name: 'burnFrom',
		outputs: [
			{
				internalType: 'bool',
				name: '_success',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_newAdmin',
				type: 'address',
			},
		],
		name: 'changeAdmin',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'decimals',
		outputs: [
			{
				internalType: 'uint8',
				name: '',
				type: 'uint8',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'factory',
		outputs: [
			{
				internalType: 'contract IKatanaFactory',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'getReserves',
		outputs: [
			{
				internalType: 'uint112',
				name: '',
				type: 'uint112',
			},
			{
				internalType: 'uint112',
				name: '',
				type: 'uint112',
			},
			{
				internalType: 'uint32',
				name: '',
				type: 'uint32',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_token0',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_token1',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_admin',
				type: 'address',
			},
			{
				internalType: 'string',
				name: '_name',
				type: 'string',
			},
			{
				internalType: 'string',
				name: '_symbol',
				type: 'string',
			},
		],
		name: 'initialize',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '_addr',
				type: 'address',
			},
		],
		name: 'isMinter',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_value',
				type: 'uint256',
			},
		],
		name: 'mint',
		outputs: [
			{
				internalType: 'bool',
				name: '_success',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
		],
		name: 'mint',
		outputs: [
			{
				internalType: 'uint256',
				name: '_liquidity',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'minter',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'minters',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'name',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'nonces',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_spender',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_value',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_deadline',
				type: 'uint256',
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
		name: 'permit',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'price0CumulativeLast',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'price1CumulativeLast',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [],
		name: 'removeAdmin',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address[]',
				name: '_removedMinters',
				type: 'address[]',
			},
		],
		name: 'removeMinters',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
		],
		name: 'skim',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: '_amount0Out',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amount1Out',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		name: 'swap',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'symbol',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [],
		name: 'sync',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'token0',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'token1',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'totalSupply',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_value',
				type: 'uint256',
			},
		],
		name: 'transfer',
		outputs: [
			{
				internalType: 'bool',
				name: '_success',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_value',
				type: 'uint256',
			},
		],
		name: 'transferFrom',
		outputs: [
			{
				internalType: 'bool',
				name: '_success',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const KATANA_PAIR: Contract<typeof abi> = {
	name: 'Katana Pair',
	address: '0x0af2cd30a569b0014fc6eb4e2f911902917590d2',
	is_deprecated: false,
	created_at: 1643278508,
	abi: abi,
}
export default KATANA_PAIR
