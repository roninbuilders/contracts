import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'minDelay',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: 'proposers',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: 'executors',
				type: 'address[]',
			},
			{
				internalType: 'address',
				name: 'admin',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'AccessControlBadConfirmation',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'neededRole',
				type: 'bytes32',
			},
		],
		name: 'AccessControlUnauthorizedAccount',
		type: 'error',
	},
	{
		inputs: [],
		name: 'FailedCall',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'delay',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'minDelay',
				type: 'uint256',
			},
		],
		name: 'TimelockInsufficientDelay',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'targets',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'payloads',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'values',
				type: 'uint256',
			},
		],
		name: 'TimelockInvalidOperationLength',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'caller',
				type: 'address',
			},
		],
		name: 'TimelockUnauthorizedCaller',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'predecessorId',
				type: 'bytes32',
			},
		],
		name: 'TimelockUnexecutedPredecessor',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'operationId',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'expectedStates',
				type: 'bytes32',
			},
		],
		name: 'TimelockUnexpectedOperationState',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'id',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'index',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'target',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'CallExecuted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'id',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'salt',
				type: 'bytes32',
			},
		],
		name: 'CallSalt',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'id',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'index',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'target',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'predecessor',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'delay',
				type: 'uint256',
			},
		],
		name: 'CallScheduled',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'id',
				type: 'bytes32',
			},
		],
		name: 'Cancelled',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldDuration',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newDuration',
				type: 'uint256',
			},
		],
		name: 'MinDelayChange',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'previousAdminRole',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'newAdminRole',
				type: 'bytes32',
			},
		],
		name: 'RoleAdminChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'sender',
				type: 'address',
			},
		],
		name: 'RoleGranted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'sender',
				type: 'address',
			},
		],
		name: 'RoleRevoked',
		type: 'event',
	},
	{
		inputs: [],
		name: 'CANCELLER_ROLE',
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
		inputs: [],
		name: 'DEFAULT_ADMIN_ROLE',
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
		inputs: [],
		name: 'EXECUTOR_ROLE',
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
		inputs: [],
		name: 'PROPOSER_ROLE',
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
				internalType: 'bytes32',
				name: 'id',
				type: 'bytes32',
			},
		],
		name: 'cancel',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'target',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'payload',
				type: 'bytes',
			},
			{
				internalType: 'bytes32',
				name: 'predecessor',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'salt',
				type: 'bytes32',
			},
		],
		name: 'execute',
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'targets',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'values',
				type: 'uint256[]',
			},
			{
				internalType: 'bytes[]',
				name: 'payloads',
				type: 'bytes[]',
			},
			{
				internalType: 'bytes32',
				name: 'predecessor',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'salt',
				type: 'bytes32',
			},
		],
		name: 'executeBatch',
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getMinDelay',
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
				internalType: 'bytes32',
				name: 'id',
				type: 'bytes32',
			},
		],
		name: 'getOperationState',
		outputs: [
			{
				internalType: 'enum TimelockController.OperationState',
				name: '',
				type: 'uint8',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
		],
		name: 'getRoleAdmin',
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
				internalType: 'bytes32',
				name: 'id',
				type: 'bytes32',
			},
		],
		name: 'getTimestamp',
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
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'grantRole',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'hasRole',
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
				name: 'target',
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
				internalType: 'bytes32',
				name: 'predecessor',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'salt',
				type: 'bytes32',
			},
		],
		name: 'hashOperation',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'targets',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'values',
				type: 'uint256[]',
			},
			{
				internalType: 'bytes[]',
				name: 'payloads',
				type: 'bytes[]',
			},
			{
				internalType: 'bytes32',
				name: 'predecessor',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'salt',
				type: 'bytes32',
			},
		],
		name: 'hashOperationBatch',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'id',
				type: 'bytes32',
			},
		],
		name: 'isOperation',
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
				internalType: 'bytes32',
				name: 'id',
				type: 'bytes32',
			},
		],
		name: 'isOperationDone',
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
				internalType: 'bytes32',
				name: 'id',
				type: 'bytes32',
			},
		],
		name: 'isOperationPending',
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
				internalType: 'bytes32',
				name: 'id',
				type: 'bytes32',
			},
		],
		name: 'isOperationReady',
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
				name: '',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		name: 'onERC1155BatchReceived',
		outputs: [
			{
				internalType: 'bytes4',
				name: '',
				type: 'bytes4',
			},
		],
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
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		name: 'onERC1155Received',
		outputs: [
			{
				internalType: 'bytes4',
				name: '',
				type: 'bytes4',
			},
		],
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
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		name: 'onERC721Received',
		outputs: [
			{
				internalType: 'bytes4',
				name: '',
				type: 'bytes4',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'callerConfirmation',
				type: 'address',
			},
		],
		name: 'renounceRole',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'revokeRole',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'target',
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
				internalType: 'bytes32',
				name: 'predecessor',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'salt',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'delay',
				type: 'uint256',
			},
		],
		name: 'schedule',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'targets',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'values',
				type: 'uint256[]',
			},
			{
				internalType: 'bytes[]',
				name: 'payloads',
				type: 'bytes[]',
			},
			{
				internalType: 'bytes32',
				name: 'predecessor',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'salt',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'delay',
				type: 'uint256',
			},
		],
		name: 'scheduleBatch',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'interfaceId',
				type: 'bytes4',
			},
		],
		name: 'supportsInterface',
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
				internalType: 'uint256',
				name: 'newDelay',
				type: 'uint256',
			},
		],
		name: 'updateDelay',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const TIMELOCK_1: Contract<typeof abi> = {
	name: 'Timelock',
	address: '0x96a774375f138f97d952764589712c7d9d317727',
	is_deprecated: false,
	created_at: 1734633324,
	abi: abi,
}
export default TIMELOCK_1
