import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'InsufficientFee',
		type: 'error',
	},
	{
		inputs: [],
		name: 'OnlyCoordinatorCanFulfill',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'feeReceiver',
				type: 'address',
			},
		],
		name: 'FeeReceiverChanged',
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
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'targetTokenId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'materialTokenIds',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint16',
				name: 'successRate',
				type: 'uint16',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'upgraded',
				type: 'bool',
			},
		],
		name: 'MonsterMerged',
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
		name: 'FEE_RECEIVER',
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
		name: 'MINTER_ROLE',
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
		name: 'NYANGKIT',
		outputs: [
			{
				internalType: 'contract INyangKit',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'PAYMENT_TOKEN',
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
		name: 'RAGMON',
		outputs: [
			{
				internalType: 'contract IRagmon',
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
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'calculateAccumulatedValue',
		outputs: [
			{
				internalType: 'uint16',
				name: 'accumulatedValue',
				type: 'uint16',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum Rarity',
				name: 'rarity',
				type: 'uint8',
			},
		],
		name: 'calculateAccumulatedValues',
		outputs: [
			{
				internalType: 'uint16[]',
				name: '',
				type: 'uint16[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'targetTokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint256[]',
				name: 'materialTokenIds',
				type: 'uint256[]',
			},
		],
		name: 'calculateMergeSuccessRate',
		outputs: [
			{
				internalType: 'uint16',
				name: 'successRate',
				type: 'uint16',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum Rarity',
				name: 'rarity',
				type: 'uint8',
			},
			{
				internalType: 'uint8[]',
				name: 'materialLevels',
				type: 'uint8[]',
			},
		],
		name: 'calculateTotalValue',
		outputs: [
			{
				internalType: 'uint256',
				name: 'totalValue',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'callbackGasLimit',
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
				internalType: 'enum Rarity',
				name: 'rarity',
				type: 'uint8',
			},
			{
				internalType: 'uint16',
				name: 'successRate',
				type: 'uint16',
			},
		],
		name: 'estimateAdditionalCost',
		outputs: [
			{
				internalType: 'uint256',
				name: 'totalFee',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'gasPrice',
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
				internalType: 'enum Rarity',
				name: 'rarity',
				type: 'uint8',
			},
		],
		name: 'getBaseProbabilities',
		outputs: [
			{
				internalType: 'uint16[]',
				name: '',
				type: 'uint16[]',
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
				name: '_ragmon',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_nyangkit',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_vrfCoordinator',
				type: 'address',
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
				name: 'targetTokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint256[]',
				name: 'materialTokenIds',
				type: 'uint256[]',
			},
			{
				internalType: 'uint16',
				name: 'berryAmount',
				type: 'uint16',
			},
		],
		name: 'merge',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum Rarity',
				name: '',
				type: 'uint8',
			},
		],
		name: 'mergeCostByRarity',
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
				name: '_reqHash',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: '_randomSeed',
				type: 'uint256',
			},
		],
		name: 'rawFulfillRandomSeed',
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
		inputs: [
			{
				internalType: 'enum Rarity',
				name: 'rarity',
				type: 'uint8',
			},
			{
				internalType: 'uint16[]',
				name: 'baseProbabilities',
				type: 'uint16[]',
			},
		],
		name: 'setBaseProbabilities',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_feeReceiver',
				type: 'address',
			},
		],
		name: 'setFeeReceiver',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum Rarity',
				name: 'rarity',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: 'mergeCost',
				type: 'uint256',
			},
		],
		name: 'setMergeCost',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_paymentToken',
				type: 'address',
			},
		],
		name: 'setPaymentToken',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint16',
				name: '_treasuryRate',
				type: 'uint16',
			},
		],
		name: 'setTreasuryRate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_callbackGasLimit',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_gasPrice',
				type: 'uint256',
			},
		],
		name: 'setVRFVariables',
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
		name: 'treasuryRate',
		outputs: [
			{
				internalType: 'uint16',
				name: '',
				type: 'uint16',
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
	{
		inputs: [],
		name: 'vrfCoordinator',
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
const LEVEL_MERGE_1: Contract<typeof abi> = {
	name: 'Level Merge',
	address: '0x3c4752ba472d2da88ca86586f879dc32da72d336',
	is_deprecated: false,
	created_at: 1723600926,
	abi: abi,
}
export default LEVEL_MERGE_1
