import { Contract } from '@/contract'
const abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'numerator',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'denominator',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'previousNumerator',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'previousDenominator',
				type: 'uint256',
			},
		],
		name: 'ThresholdUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'validator',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governor',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct IWeightedValidator.WeightedValidator[]',
				name: 'validators',
				type: 'tuple[]',
			},
		],
		name: 'ValidatorsAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'validators',
				type: 'address[]',
			},
		],
		name: 'ValidatorsRemoved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'validator',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governor',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct IWeightedValidator.WeightedValidator[]',
				name: 'validators',
				type: 'tuple[]',
			},
		],
		name: 'ValidatorsUpdated',
		type: 'event',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'validator',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governor',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256',
					},
				],
				internalType: 'struct IWeightedValidator.WeightedValidator[]',
				name: '_validatorList',
				type: 'tuple[]',
			},
		],
		name: 'addValidators',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_voteWeight',
				type: 'uint256',
			},
		],
		name: 'checkThreshold',
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
				name: '_governor',
				type: 'address',
			},
		],
		name: 'getGovernorWeight',
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
		name: 'getGovernors',
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
		inputs: [],
		name: 'getThreshold',
		outputs: [
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
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getValidatorInfo',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'validator',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governor',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256',
					},
				],
				internalType: 'struct IWeightedValidator.WeightedValidator[]',
				name: '_list',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_validator',
				type: 'address',
			},
		],
		name: 'getValidatorWeight',
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
		name: 'getValidators',
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
				components: [
					{
						internalType: 'address',
						name: 'validator',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governor',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256',
					},
				],
				internalType: 'struct IWeightedValidator.WeightedValidator[]',
				name: '_initValidators',
				type: 'tuple[]',
			},
			{
				internalType: 'uint256',
				name: '_numerator',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_denominator',
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
		name: 'minimumVoteWeight',
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
				internalType: 'address[]',
				name: '_validatorList',
				type: 'address[]',
			},
		],
		name: 'removeValidators',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_numerator',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_denominator',
				type: 'uint256',
			},
		],
		name: 'setThreshold',
		outputs: [
			{
				internalType: 'uint256',
				name: '_previousNum',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_previousDenom',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_addrList',
				type: 'address[]',
			},
		],
		name: 'sumGovernorWeights',
		outputs: [
			{
				internalType: 'uint256',
				name: '_weight',
				type: 'uint256',
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
		],
		name: 'sumValidatorWeights',
		outputs: [
			{
				internalType: 'uint256',
				name: '_weight',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'totalValidators',
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
		name: 'totalWeights',
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
				components: [
					{
						internalType: 'address',
						name: 'validator',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governor',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256',
					},
				],
				internalType: 'struct IWeightedValidator.WeightedValidator[]',
				name: '_validatorList',
				type: 'tuple[]',
			},
		],
		name: 'updateValidators',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_index',
				type: 'uint256',
			},
		],
		name: 'validators',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'validator',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governor',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256',
					},
				],
				internalType: 'struct IWeightedValidator.WeightedValidator',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const
const GOVERNANCE_ADMIN: Contract<typeof abi> = {
	name: 'Governance Admin',
	address: '0x84390b8cf3e612e8c80d9ea2e92bcd029151404a',
	is_deprecated: true,
	created_at: 1655882560,
	abi: abi,
}
export default GOVERNANCE_ADMIN
