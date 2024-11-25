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
			{
				internalType: 'address',
				name: '_nonfungiblePositionManager',
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
		inputs: [
			{
				internalType: 'address',
				name: 'token0',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'token1',
				type: 'address',
			},
			{
				internalType: 'uint24',
				name: 'fee',
				type: 'uint24',
			},
			{
				internalType: 'uint160',
				name: 'sqrtPriceX96',
				type: 'uint160',
			},
		],
		name: 'createAndInitializePoolIfNecessary',
		outputs: [
			{
				internalType: 'address',
				name: 'pool',
				type: 'address',
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
				components: [
					{
						internalType: 'address',
						name: 'pair',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'liquidityToMigrate',
						type: 'uint256',
					},
					{
						internalType: 'uint8',
						name: 'percentageToMigrate',
						type: 'uint8',
					},
					{
						internalType: 'address',
						name: 'token0',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'token1',
						type: 'address',
					},
					{
						internalType: 'uint24',
						name: 'fee',
						type: 'uint24',
					},
					{
						internalType: 'int24',
						name: 'tickLower',
						type: 'int24',
					},
					{
						internalType: 'int24',
						name: 'tickUpper',
						type: 'int24',
					},
					{
						internalType: 'uint256',
						name: 'amount0Min',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'amount1Min',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'recipient',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'deadline',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: 'refundAsETH',
						type: 'bool',
					},
				],
				internalType: 'struct IV3Migrator.MigrateParams',
				name: 'params',
				type: 'tuple',
			},
		],
		name: 'migrate',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes[]',
				name: 'data',
				type: 'bytes[]',
			},
		],
		name: 'multicall',
		outputs: [
			{
				internalType: 'bytes[]',
				name: 'results',
				type: 'bytes[]',
			},
		],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'nonfungiblePositionManager',
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
				name: 'value',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
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
		name: 'selfPermit',
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
			{
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'expiry',
				type: 'uint256',
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
		name: 'selfPermitAllowed',
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
			{
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'expiry',
				type: 'uint256',
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
		name: 'selfPermitAllowedIfNecessary',
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
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
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
		name: 'selfPermitIfNecessary',
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const V3_MIGRATOR: Contract<typeof abi> = {
	name: 'V3 Migrator',
	address: '0x0124c9ce7e77ed166f6d53af679b491555b5c0f7',
	is_deprecated: false,
	created_at: 1732163866,
	abi: abi,
}
export default V3_MIGRATOR
