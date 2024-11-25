import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'permit2',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'weth9',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governance',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'v2Factory',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'v3Factory',
						type: 'address',
					},
					{
						internalType: 'bytes32',
						name: 'pairInitCodeHash',
						type: 'bytes32',
					},
					{
						internalType: 'bytes32',
						name: 'poolInitCodeHash',
						type: 'bytes32',
					},
				],
				internalType: 'struct RouterParameters',
				name: 'params',
				type: 'tuple',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'BalanceTooLow',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ContractLocked',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ETHNotAccepted',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'commandIndex',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'message',
				type: 'bytes',
			},
		],
		name: 'ExecutionFailed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'FromAddressIsNotOwner',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InsufficientETH',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InsufficientToken',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidBips',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'commandType',
				type: 'uint256',
			},
		],
		name: 'InvalidCommandType',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidPath',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidReserves',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidSpender',
		type: 'error',
	},
	{
		inputs: [],
		name: 'LengthMismatch',
		type: 'error',
	},
	{
		inputs: [],
		name: 'SliceOutOfBounds',
		type: 'error',
	},
	{
		inputs: [],
		name: 'TransactionDeadlinePassed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'UnsafeCast',
		type: 'error',
	},
	{
		inputs: [],
		name: 'V2InvalidPath',
		type: 'error',
	},
	{
		inputs: [],
		name: 'V2TooLittleReceived',
		type: 'error',
	},
	{
		inputs: [],
		name: 'V2TooMuchRequested',
		type: 'error',
	},
	{
		inputs: [],
		name: 'V2UnauthorizedPath',
		type: 'error',
	},
	{
		inputs: [],
		name: 'V3InvalidAmountOut',
		type: 'error',
	},
	{
		inputs: [],
		name: 'V3InvalidCaller',
		type: 'error',
	},
	{
		inputs: [],
		name: 'V3InvalidSwap',
		type: 'error',
	},
	{
		inputs: [],
		name: 'V3TooLittleReceived',
		type: 'error',
	},
	{
		inputs: [],
		name: 'V3TooMuchRequested',
		type: 'error',
	},
	{
		inputs: [],
		name: 'V3UnauthorizedSwap',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes',
				name: 'commands',
				type: 'bytes',
			},
			{
				internalType: 'bytes[]',
				name: 'inputs',
				type: 'bytes[]',
			},
		],
		name: 'execute',
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes',
				name: 'commands',
				type: 'bytes',
			},
			{
				internalType: 'bytes[]',
				name: 'inputs',
				type: 'bytes[]',
			},
			{
				internalType: 'uint256',
				name: 'deadline',
				type: 'uint256',
			},
		],
		name: 'execute',
		stateMutability: 'payable',
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
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'katanaV3SwapCallback',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const AGGREGATE_ROUTER: Contract<typeof abi> = {
	name: 'Aggregate Router',
	address: '0x5f0acdd3ec767514ff1bf7e79949640bf94576bd',
	is_deprecated: false,
	created_at: 1732174992,
	abi: abi,
}
export default AGGREGATE_ROUTER
