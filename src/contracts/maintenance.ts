export const MAINTENANCE = {
	name: 'Maintenance',
	address: '0xca9f10769292f26850333264d618c1b5e91f394d',
	abi: [
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
			name: 'initializeV2',
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
			inputs: [],
			name: 'totalSchedule',
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
	],
}
