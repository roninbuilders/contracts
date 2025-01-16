import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'contract ITokenAdminRegistry',
				name: 'tokenAdminRegistry',
				type: 'address',
			},
			{
				internalType: 'contract RegistryModuleOwnerCustom',
				name: 'tokenAdminModule',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'rmnProxy',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'ccipRouter',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'Create2EmptyBytecode',
		type: 'error',
	},
	{
		inputs: [],
		name: 'FailedDeployment',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'balance',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'needed',
				type: 'uint256',
			},
		],
		name: 'InsufficientBalance',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidZeroAddress',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint64',
				name: 'remoteChainSelector',
				type: 'uint64',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'remotePoolFactory',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'remoteRouter',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'remoteRMNProxy',
						type: 'address',
					},
					{
						internalType: 'uint8',
						name: 'remoteTokenDecimals',
						type: 'uint8',
					},
				],
				indexed: false,
				internalType: 'struct TokenPoolFactory.RemoteChainConfig',
				name: 'remoteChainConfig',
				type: 'tuple',
			},
		],
		name: 'RemoteChainConfigUpdated',
		type: 'event',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint64',
						name: 'remoteChainSelector',
						type: 'uint64',
					},
					{
						internalType: 'bytes',
						name: 'remotePoolAddress',
						type: 'bytes',
					},
					{
						internalType: 'bytes',
						name: 'remotePoolInitCode',
						type: 'bytes',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'remotePoolFactory',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'remoteRouter',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'remoteRMNProxy',
								type: 'address',
							},
							{
								internalType: 'uint8',
								name: 'remoteTokenDecimals',
								type: 'uint8',
							},
						],
						internalType: 'struct TokenPoolFactory.RemoteChainConfig',
						name: 'remoteChainConfig',
						type: 'tuple',
					},
					{
						internalType: 'enum TokenPoolFactory.PoolType',
						name: 'poolType',
						type: 'uint8',
					},
					{
						internalType: 'bytes',
						name: 'remoteTokenAddress',
						type: 'bytes',
					},
					{
						internalType: 'bytes',
						name: 'remoteTokenInitCode',
						type: 'bytes',
					},
					{
						components: [
							{
								internalType: 'bool',
								name: 'isEnabled',
								type: 'bool',
							},
							{
								internalType: 'uint128',
								name: 'capacity',
								type: 'uint128',
							},
							{
								internalType: 'uint128',
								name: 'rate',
								type: 'uint128',
							},
						],
						internalType: 'struct RateLimiter.Config',
						name: 'rateLimiterConfig',
						type: 'tuple',
					},
				],
				internalType: 'struct TokenPoolFactory.RemoteTokenPoolInfo[]',
				name: 'remoteTokenPools',
				type: 'tuple[]',
			},
			{
				internalType: 'uint8',
				name: 'localTokenDecimals',
				type: 'uint8',
			},
			{
				internalType: 'bytes',
				name: 'tokenInitCode',
				type: 'bytes',
			},
			{
				internalType: 'bytes',
				name: 'tokenPoolInitCode',
				type: 'bytes',
			},
			{
				internalType: 'bytes32',
				name: 'salt',
				type: 'bytes32',
			},
		],
		name: 'deployTokenAndTokenPool',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
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
				internalType: 'uint8',
				name: 'localTokenDecimals',
				type: 'uint8',
			},
			{
				components: [
					{
						internalType: 'uint64',
						name: 'remoteChainSelector',
						type: 'uint64',
					},
					{
						internalType: 'bytes',
						name: 'remotePoolAddress',
						type: 'bytes',
					},
					{
						internalType: 'bytes',
						name: 'remotePoolInitCode',
						type: 'bytes',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'remotePoolFactory',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'remoteRouter',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'remoteRMNProxy',
								type: 'address',
							},
							{
								internalType: 'uint8',
								name: 'remoteTokenDecimals',
								type: 'uint8',
							},
						],
						internalType: 'struct TokenPoolFactory.RemoteChainConfig',
						name: 'remoteChainConfig',
						type: 'tuple',
					},
					{
						internalType: 'enum TokenPoolFactory.PoolType',
						name: 'poolType',
						type: 'uint8',
					},
					{
						internalType: 'bytes',
						name: 'remoteTokenAddress',
						type: 'bytes',
					},
					{
						internalType: 'bytes',
						name: 'remoteTokenInitCode',
						type: 'bytes',
					},
					{
						components: [
							{
								internalType: 'bool',
								name: 'isEnabled',
								type: 'bool',
							},
							{
								internalType: 'uint128',
								name: 'capacity',
								type: 'uint128',
							},
							{
								internalType: 'uint128',
								name: 'rate',
								type: 'uint128',
							},
						],
						internalType: 'struct RateLimiter.Config',
						name: 'rateLimiterConfig',
						type: 'tuple',
					},
				],
				internalType: 'struct TokenPoolFactory.RemoteTokenPoolInfo[]',
				name: 'remoteTokenPools',
				type: 'tuple[]',
			},
			{
				internalType: 'bytes',
				name: 'tokenPoolInitCode',
				type: 'bytes',
			},
			{
				internalType: 'bytes32',
				name: 'salt',
				type: 'bytes32',
			},
			{
				internalType: 'enum TokenPoolFactory.PoolType',
				name: 'poolType',
				type: 'uint8',
			},
		],
		name: 'deployTokenPoolWithExistingToken',
		outputs: [
			{
				internalType: 'address',
				name: 'poolAddress',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'typeAndVersion',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const
const TOKEN_POOL_FACTORY: Contract<typeof abi> = {
	name: 'Token Pool Factory',
	address: '0xdec8a6f06fdda5aae262631f37b79f182a23464b',
	is_deprecated: false,
	created_at: 1734469815,
	abi: abi,
}
export default TOKEN_POOL_FACTORY
