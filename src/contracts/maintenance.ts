import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'ErrAlreadyOnMaintenance',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrAlreadyScheduled',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'enum ContractType',
				name: 'contractType',
				type: 'uint8',
			},
		],
		name: 'ErrContractTypeNotFound',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrCooldownTimeNotYetEnded',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrEndBlockOutOfRange',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidMaintenanceDuration',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidMaintenanceDurationConfig',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidOffsetToStartScheduleConfigs',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrNotOnMaintenance',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrStartBlockOutOfRange',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrTotalOfSchedulesExceeded',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
			{
				internalType: 'enum RoleAccess',
				name: 'expectedRole',
				type: 'uint8',
			},
		],
		name: 'ErrUnauthorized',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrUnexistedSchedule',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'ErrZeroCodeContract',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'enum ContractType',
				name: 'contractType',
				type: 'uint8',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'ContractUpdated',
		type: 'event',
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
				internalType: 'uint256',
				name: 'minMaintenanceDurationInBlock',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'maxMaintenanceDurationInBlock',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'minOffsetToStartSchedule',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'maxOffsetToStartSchedule',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'maxSchedules',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'cooldownSecsToMaintain',
				type: 'uint256',
			},
		],
		name: 'MaintenanceConfigUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
		],
		name: 'MaintenanceExited',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
		],
		name: 'MaintenanceScheduleCancelled',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'from',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'to',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'lastUpdatedBlock',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'requestTimestamp',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct IMaintenance.Schedule',
				name: '',
				type: 'tuple',
			},
		],
		name: 'MaintenanceScheduled',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
		],
		name: 'cancelSchedule',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
		],
		name: 'checkCooldownEnded',
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
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'atBlock',
				type: 'uint256',
			},
		],
		name: 'checkMaintained',
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
				name: 'candidateId',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'atBlock',
				type: 'uint256',
			},
		],
		name: 'checkMaintainedById',
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
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'fromBlock',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'toBlock',
				type: 'uint256',
			},
		],
		name: 'checkMaintainedInBlockRange',
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
				internalType: 'TConsensus[]',
				name: 'addrList',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: 'atBlock',
				type: 'uint256',
			},
		],
		name: 'checkManyMaintained',
		outputs: [
			{
				internalType: 'bool[]',
				name: '',
				type: 'bool[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'idList',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: 'atBlock',
				type: 'uint256',
			},
		],
		name: 'checkManyMaintainedById',
		outputs: [
			{
				internalType: 'bool[]',
				name: '',
				type: 'bool[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus[]',
				name: 'addrList',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: 'fromBlock',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'toBlock',
				type: 'uint256',
			},
		],
		name: 'checkManyMaintainedInBlockRange',
		outputs: [
			{
				internalType: 'bool[]',
				name: '',
				type: 'bool[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'idList',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: 'fromBlock',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'toBlock',
				type: 'uint256',
			},
		],
		name: 'checkManyMaintainedInBlockRangeById',
		outputs: [
			{
				internalType: 'bool[]',
				name: '',
				type: 'bool[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
		],
		name: 'checkScheduled',
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
		name: 'cooldownSecsToMaintain',
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
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
		],
		name: 'exitMaintenance',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum ContractType',
				name: 'contractType',
				type: 'uint8',
			},
		],
		name: 'getContract',
		outputs: [
			{
				internalType: 'address',
				name: 'contract_',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
		],
		name: 'getSchedule',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'from',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'to',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'lastUpdatedBlock',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'requestTimestamp',
						type: 'uint256',
					},
				],
				internalType: 'struct IMaintenance.Schedule',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'validatorContract',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'minMaintenanceDurationInBlock_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'maxMaintenanceDurationInBlock_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'minOffsetToStartSchedule_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'maxOffsetToStartSchedule_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'maxSchedule_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'cooldownSecsToMaintain_',
				type: 'uint256',
			},
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'initializeV2',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'profileContract_',
				type: 'address',
			},
		],
		name: 'initializeV3',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'initializeV4',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'maxMaintenanceDurationInBlock',
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
		name: 'maxOffsetToStartSchedule',
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
		name: 'maxSchedule',
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
		name: 'minMaintenanceDurationInBlock',
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
		name: 'minOffsetToStartSchedule',
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
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'startedAtBlock',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'endedAtBlock',
				type: 'uint256',
			},
		],
		name: 'schedule',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum ContractType',
				name: 'contractType',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'setContract',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'minMaintenanceDurationInBlock_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'maxMaintenanceDurationInBlock_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'minOffsetToStartSchedule_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'maxOffsetToStartSchedule_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'maxSchedule_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'cooldownSecsToMaintain_',
				type: 'uint256',
			},
		],
		name: 'setMaintenanceConfig',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'totalSchedule',
		outputs: [
			{
				internalType: 'uint256',
				name: 'count',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const
const MAINTENANCE: Contract<typeof abi> = {
	name: 'Maintenance',
	address: '0x1966d1facc5feff39a14b7c90d2ff568dc8a54c3',
	is_deprecated: false,
	created_at: 1711428443,
	abi: abi,
}
export default MAINTENANCE
