import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
		],
		name: 'AddedOwner',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'approvedHash',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
		],
		name: 'ApproveHash',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'handler',
				type: 'address',
			},
		],
		name: 'ChangedFallbackHandler',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'guard',
				type: 'address',
			},
		],
		name: 'ChangedGuard',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'threshold',
				type: 'uint256',
			},
		],
		name: 'ChangedThreshold',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'module',
				type: 'address',
			},
		],
		name: 'DisabledModule',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'module',
				type: 'address',
			},
		],
		name: 'EnabledModule',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'txHash',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'payment',
				type: 'uint256',
			},
		],
		name: 'ExecutionFailure',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'module',
				type: 'address',
			},
		],
		name: 'ExecutionFromModuleFailure',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'module',
				type: 'address',
			},
		],
		name: 'ExecutionFromModuleSuccess',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'txHash',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'payment',
				type: 'uint256',
			},
		],
		name: 'ExecutionSuccess',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
		],
		name: 'RemovedOwner',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'sender',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
		],
		name: 'SafeReceived',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'initiator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'owners',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'threshold',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'initializer',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'fallbackHandler',
				type: 'address',
			},
		],
		name: 'SafeSetup',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'msgHash',
				type: 'bytes32',
			},
		],
		name: 'SignMsg',
		type: 'event',
	},
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'fallback',
	},
	{
		inputs: [],
		name: 'VERSION',
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
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_threshold',
				type: 'uint256',
			},
		],
		name: 'addOwnerWithThreshold',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'hashToApprove',
				type: 'bytes32',
			},
		],
		name: 'approveHash',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		name: 'approvedHashes',
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
				name: '_threshold',
				type: 'uint256',
			},
		],
		name: 'changeThreshold',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'dataHash',
				type: 'bytes32',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
			{
				internalType: 'bytes',
				name: 'signatures',
				type: 'bytes',
			},
			{
				internalType: 'uint256',
				name: 'requiredSignatures',
				type: 'uint256',
			},
		],
		name: 'checkNSignatures',
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'dataHash',
				type: 'bytes32',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
			{
				internalType: 'bytes',
				name: 'signatures',
				type: 'bytes',
			},
		],
		name: 'checkSignatures',
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'prevModule',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'module',
				type: 'address',
			},
		],
		name: 'disableModule',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'domainSeparator',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'module',
				type: 'address',
			},
		],
		name: 'enableModule',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
			{
				internalType: 'enum Enum.Operation',
				name: 'operation',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: 'safeTxGas',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'baseGas',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'gasPrice',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'gasToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'refundReceiver',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_nonce',
				type: 'uint256',
			},
		],
		name: 'encodeTransactionData',
		outputs: [
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
			{
				internalType: 'enum Enum.Operation',
				name: 'operation',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: 'safeTxGas',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'baseGas',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'gasPrice',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'gasToken',
				type: 'address',
			},
			{
				internalType: 'address payable',
				name: 'refundReceiver',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'signatures',
				type: 'bytes',
			},
		],
		name: 'execTransaction',
		outputs: [
			{
				internalType: 'bool',
				name: 'success',
				type: 'bool',
			},
		],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
			{
				internalType: 'enum Enum.Operation',
				name: 'operation',
				type: 'uint8',
			},
		],
		name: 'execTransactionFromModule',
		outputs: [
			{
				internalType: 'bool',
				name: 'success',
				type: 'bool',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
			{
				internalType: 'enum Enum.Operation',
				name: 'operation',
				type: 'uint8',
			},
		],
		name: 'execTransactionFromModuleReturnData',
		outputs: [
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
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getChainId',
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
				internalType: 'address',
				name: 'start',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'pageSize',
				type: 'uint256',
			},
		],
		name: 'getModulesPaginated',
		outputs: [
			{
				internalType: 'address[]',
				name: 'array',
				type: 'address[]',
			},
			{
				internalType: 'address',
				name: 'next',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getOwners',
		outputs: [
			{
				internalType: 'address[]',
				name: '',
				type: 'address[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'offset',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'length',
				type: 'uint256',
			},
		],
		name: 'getStorageAt',
		outputs: [
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getThreshold',
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
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
			{
				internalType: 'enum Enum.Operation',
				name: 'operation',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: 'safeTxGas',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'baseGas',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'gasPrice',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'gasToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'refundReceiver',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_nonce',
				type: 'uint256',
			},
		],
		name: 'getTransactionHash',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'module',
				type: 'address',
			},
		],
		name: 'isModuleEnabled',
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
				name: 'owner',
				type: 'address',
			},
		],
		name: 'isOwner',
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
		inputs: [],
		name: 'nonce',
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
				internalType: 'address',
				name: 'prevOwner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_threshold',
				type: 'uint256',
			},
		],
		name: 'removeOwner',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
			{
				internalType: 'enum Enum.Operation',
				name: 'operation',
				type: 'uint8',
			},
		],
		name: 'requiredTxGas',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
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
				name: 'handler',
				type: 'address',
			},
		],
		name: 'setFallbackHandler',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'guard',
				type: 'address',
			},
		],
		name: 'setGuard',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_owners',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: '_threshold',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
			{
				internalType: 'address',
				name: 'fallbackHandler',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'paymentToken',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'payment',
				type: 'uint256',
			},
			{
				internalType: 'address payable',
				name: 'paymentReceiver',
				type: 'address',
			},
		],
		name: 'setup',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		name: 'signedMessages',
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
				internalType: 'address',
				name: 'targetContract',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'calldataPayload',
				type: 'bytes',
			},
		],
		name: 'simulateAndRevert',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'prevOwner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'oldOwner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'swapOwner',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const GNOSIS_SAFE_1: Contract<typeof abi> = {
	name: 'Gnosis Safe',
	address: '0xf4139132a1360cf5aea3e5896975f0050ba4d475',
	is_deprecated: false,
	created_at: 1735558133,
	abi: abi,
}
export default GNOSIS_SAFE_1
