import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'ErrCallerMustBeValidatorContract',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrZeroCodeContract',
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
				name: 'consensusAddr',
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
				name: 'consensusAddr',
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
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'ValidatorContractUpdated',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_consensusAddr',
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
				internalType: 'address',
				name: '_consensusAddr',
				type: 'address',
			},
		],
		name: 'checkCooldownEnds',
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
				name: '_consensusAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_block',
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
				name: '_consensusAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_fromBlock',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_toBlock',
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
				internalType: 'address[]',
				name: '_addrList',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: '_block',
				type: 'uint256',
			},
		],
		name: 'checkManyMaintained',
		outputs: [
			{
				internalType: 'bool[]',
				name: '_resList',
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
				name: '_addrList',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: '_fromBlock',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_toBlock',
				type: 'uint256',
			},
		],
		name: 'checkManyMaintainedInBlockRange',
		outputs: [
			{
				internalType: 'bool[]',
				name: '_resList',
				type: 'bool[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_consensusAddr',
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
				internalType: 'address',
				name: '_consensusAddr',
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
				name: '__validatorContract',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_minMaintenanceDurationInBlock',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_maxMaintenanceDurationInBlock',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_minOffsetToStartSchedule',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_maxOffsetToStartSchedule',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_maxSchedules',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_cooldownSecsToMaintain',
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
		name: 'maxSchedules',
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
				internalType: 'address',
				name: '_consensusAddr',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_startedAtBlock',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_endedAtBlock',
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
				internalType: 'uint256',
				name: '_minMaintenanceDurationInBlock',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_maxMaintenanceDurationInBlock',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_minOffsetToStartSchedule',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_maxOffsetToStartSchedule',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_maxSchedules',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_cooldownSecsToMaintain',
				type: 'uint256',
			},
		],
		name: 'setMaintenanceConfig',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_addr',
				type: 'address',
			},
		],
		name: 'setValidatorContract',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'totalSchedules',
		outputs: [
			{
				internalType: 'uint256',
				name: '_count',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'validatorContract',
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
] as const
const MAINTENANCE: Contract<typeof abi> = {
	name: 'Maintenance',
	address: '0x44dcc40067233d3e45b93951184fb389c068466d',
	is_deprecated: false,
	updated_at: 0,
	abi: abi,
}
export default MAINTENANCE
