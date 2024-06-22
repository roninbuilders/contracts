import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'ErrBodyPartAlreadyEvolved',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrBodyPartStillEvolving',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidPath',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidPathLength',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'evolvedPartCount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'axieLevel',
				type: 'uint256',
			},
		],
		name: 'ErrLevelNotReach',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrMaxEvolved',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrMaxEvolvedPart',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrNotAuthorized',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrNotExistPartEvolvedWaitsForCompletion',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrRequestPaymentAmountFailed',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract IAxie',
				name: 'axieContract',
				type: 'address',
			},
		],
		name: 'AxieContractUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'BoostCostMultiplierUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'EvolutionDurationUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'fees',
				type: 'uint256[]',
			},
		],
		name: 'EvolutionFeesUpdated',
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
				internalType: 'contract IMaterial',
				name: 'materialContractAddress',
				type: 'address',
			},
		],
		name: 'MaterialContractAddressUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'costs',
				type: 'uint256[]',
			},
		],
		name: 'MaterialCostsUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'axieId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'finishTs',
				type: 'uint256',
			},
		],
		name: 'PartEvolutionCreated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'axieId',
				type: 'uint256',
			},
		],
		name: 'PartEvolutionFinished',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'Paused',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'baseToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'paymentToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'evolutionFees',
				type: 'uint256[]',
			},
		],
		name: 'PaymentConfigsUpdated',
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
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'routerContract',
				type: 'address',
			},
		],
		name: 'RouterContractUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'specialMaterialCost',
				type: 'uint256',
			},
		],
		name: 'SpecialMaterialCostUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'treasury',
				type: 'address',
			},
		],
		name: 'TreasuryUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'Unpaused',
		type: 'event',
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
		name: 'MAX_PERCENTAGE',
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
				name: 'axieId',
				type: 'uint256',
			},
		],
		name: 'completePartEvolution',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'axieId',
				type: 'uint256',
			},
			{
				internalType: 'enum AxieGenetics.BodyPart',
				name: 'partId',
				type: 'uint8',
			},
			{
				internalType: 'bool',
				name: 'boosted',
				type: 'bool',
			},
			{
				internalType: 'address[]',
				name: 'path',
				type: 'address[]',
			},
		],
		name: 'evolvePart',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getAxieContract',
		outputs: [
			{
				internalType: 'contract IAxie',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getBoostCostMultiplier',
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
		name: 'getEvolutionDuration',
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
				name: 'axieId',
				type: 'uint256',
			},
		],
		name: 'getEvolutionInfo',
		outputs: [
			{
				components: [
					{
						internalType: 'enum IPartEvolution.EvolutionStatus',
						name: 'status',
						type: 'uint8',
					},
					{
						internalType: 'enum AxieGenetics.BodyPart',
						name: 'partId',
						type: 'uint8',
					},
					{
						internalType: 'uint256',
						name: 'finishTimestamp',
						type: 'uint256',
					},
				],
				internalType: 'struct IPartEvolution.EvolutionInfo',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getMaterialCosts',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'costs',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getPaymentConfigs',
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
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
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
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'index',
				type: 'uint256',
			},
		],
		name: 'getRoleMember',
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
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
		],
		name: 'getRoleMemberCount',
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
		name: 'getRouterContract',
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
		name: 'getSpecialMaterialCost',
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
		name: 'getTreasury',
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
		outputs: [],
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
				name: 'admin',
				type: 'address',
			},
			{
				internalType: 'contract IAxie',
				name: 'axieContract',
				type: 'address',
			},
			{
				internalType: 'contract IMaterial',
				name: 'materialContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'treasury',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: 'materialCosts',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256',
				name: 'costMultiplier',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'evolutionDuration',
				type: 'uint256',
			},
			{
				internalType: 'address[3]',
				name: 'paymentInfoAddr',
				type: 'address[3]',
			},
			{
				internalType: 'uint256[]',
				name: 'evolutionFees',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256',
				name: 'specialMaterialCost',
				type: 'uint256',
			},
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'axieId',
				type: 'uint256',
			},
		],
		name: 'isReadyToComplete',
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
		name: 'pause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'paused',
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
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'renounceRole',
		outputs: [],
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
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'setAxieContract',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'multiplier',
				type: 'uint256',
			},
		],
		name: 'setBoostCostMultiplier',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'duration',
				type: 'uint256',
			},
		],
		name: 'setEvolutionDuration',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IMaterial',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'setMaterialContract',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: 'costs',
				type: 'uint256[]',
			},
		],
		name: 'setMaterialCosts',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'baseToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'paymentToken',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: 'evolutionFees',
				type: 'uint256[]',
			},
		],
		name: 'setPaymentConfigs',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'routerContract',
				type: 'address',
			},
		],
		name: 'setRouterContract',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'cost',
				type: 'uint256',
			},
		],
		name: 'setSpecialMaterialCost',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'treasury',
				type: 'address',
			},
		],
		name: 'setTreasury',
		outputs: [],
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
		inputs: [],
		name: 'unpause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const PART_EVOLUTION_LOGIC: Contract<typeof abi> = {
	name: 'PartEvolutionLogic',
	address: '0x0e321b8dbf80a541375e7cee5124f80b93665083',
	is_deprecated: false,
	created_at: 1702269527,
	abi: abi,
}
export default PART_EVOLUTION_LOGIC
