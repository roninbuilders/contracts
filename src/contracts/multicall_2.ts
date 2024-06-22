import { Contract } from '@/contract'
const abi = [
	{
		constant: false,
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'target',
						type: 'address',
					},
					{
						internalType: 'bytes',
						name: 'callData',
						type: 'bytes',
					},
				],
				internalType: 'struct Multicall2.Call[]',
				name: '_calls',
				type: 'tuple[]',
			},
		],
		name: 'aggregate',
		outputs: [
			{
				internalType: 'uint256',
				name: '_blockNumber',
				type: 'uint256',
			},
			{
				internalType: 'bytes[]',
				name: '_returnData',
				type: 'bytes[]',
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
				components: [
					{
						internalType: 'address',
						name: 'target',
						type: 'address',
					},
					{
						internalType: 'bytes',
						name: 'callData',
						type: 'bytes',
					},
				],
				internalType: 'struct Multicall2.Call[]',
				name: '_calls',
				type: 'tuple[]',
			},
		],
		name: 'blockAndAggregate',
		outputs: [
			{
				internalType: 'uint256',
				name: '_blockNumber',
				type: 'uint256',
			},
			{
				internalType: 'bytes32',
				name: '_blockHash',
				type: 'bytes32',
			},
			{
				components: [
					{
						internalType: 'bool',
						name: 'success',
						type: 'bool',
					},
					{
						internalType: 'bytes',
						name: 'returnData',
						type: 'bytes',
					},
				],
				internalType: 'struct Multicall2.Result[]',
				name: '_returnData',
				type: 'tuple[]',
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
				internalType: 'uint256',
				name: '_blockNumber',
				type: 'uint256',
			},
		],
		name: 'getBlockHash',
		outputs: [
			{
				internalType: 'bytes32',
				name: '_blockHash',
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
		name: 'getBlockNumber',
		outputs: [
			{
				internalType: 'uint256',
				name: '_blockNumber',
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
		name: 'getCurrentBlockCoinbase',
		outputs: [
			{
				internalType: 'address',
				name: '_coinbase',
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
		name: 'getCurrentBlockDifficulty',
		outputs: [
			{
				internalType: 'uint256',
				name: '_difficulty',
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
		name: 'getCurrentBlockGasLimit',
		outputs: [
			{
				internalType: 'uint256',
				name: '_gaslimit',
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
		name: 'getCurrentBlockTimestamp',
		outputs: [
			{
				internalType: 'uint256',
				name: '_timestamp',
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
		name: 'getLastBlockHash',
		outputs: [
			{
				internalType: 'bytes32',
				name: '_blockHash',
				type: 'bytes32',
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
				name: '_addr',
				type: 'address',
			},
		],
		name: 'getRonBalance',
		outputs: [
			{
				internalType: 'uint256',
				name: '_balance',
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
				internalType: 'bool',
				name: '_requireSuccess',
				type: 'bool',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'target',
						type: 'address',
					},
					{
						internalType: 'bytes',
						name: 'callData',
						type: 'bytes',
					},
				],
				internalType: 'struct Multicall2.Call[]',
				name: '_calls',
				type: 'tuple[]',
			},
		],
		name: 'tryAggregate',
		outputs: [
			{
				components: [
					{
						internalType: 'bool',
						name: 'success',
						type: 'bool',
					},
					{
						internalType: 'bytes',
						name: 'returnData',
						type: 'bytes',
					},
				],
				internalType: 'struct Multicall2.Result[]',
				name: '_returnData',
				type: 'tuple[]',
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
				internalType: 'bool',
				name: '_requireSuccess',
				type: 'bool',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'target',
						type: 'address',
					},
					{
						internalType: 'bytes',
						name: 'callData',
						type: 'bytes',
					},
				],
				internalType: 'struct Multicall2.Call[]',
				name: '_calls',
				type: 'tuple[]',
			},
		],
		name: 'tryBlockAndAggregate',
		outputs: [
			{
				internalType: 'uint256',
				name: '_blockNumber',
				type: 'uint256',
			},
			{
				internalType: 'bytes32',
				name: '_blockHash',
				type: 'bytes32',
			},
			{
				components: [
					{
						internalType: 'bool',
						name: 'success',
						type: 'bool',
					},
					{
						internalType: 'bytes',
						name: 'returnData',
						type: 'bytes',
					},
				],
				internalType: 'struct Multicall2.Result[]',
				name: '_returnData',
				type: 'tuple[]',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const MULTICALL_2: Contract<typeof abi> = {
	name: 'Multicall 2',
	address: '0xc76d0d0d3aa608190f78db02bf2f5aef374fc0b9',
	is_deprecated: false,
	created_at: 1635557898,
	abi: abi,
}
export default MULTICALL_2
