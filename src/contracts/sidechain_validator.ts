import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_acknowledgement',
				type: 'address',
			},
			{
				internalType: 'address[]',
				name: '_validators',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: '_num',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_denom',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: '_numerator',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: '_denominator',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_previousNumerator',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_previousDenominator',
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
				name: '_id',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_validator',
				type: 'address',
			},
		],
		name: 'ValidatorAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_validator',
				type: 'address',
			},
		],
		name: 'ValidatorRemoved',
		type: 'event',
	},
	{
		constant: true,
		inputs: [],
		name: 'acknowledgement',
		outputs: [
			{
				internalType: 'contract Acknowledgement',
				name: '',
				type: 'address',
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
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_validator',
				type: 'address',
			},
		],
		name: 'addValidator',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'uint256',
				name: '_voteCount',
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
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'denom',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
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
		name: 'getValidators',
		outputs: [
			{
				internalType: 'address[]',
				name: '_validators',
				type: 'address[]',
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
		name: 'isValidator',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'num',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
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
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_validator',
				type: 'address',
			},
		],
		name: 'removeValidator',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
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
		name: 'updateQuorum',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'validatorCount',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
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
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'validators',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
] as const
const SIDECHAIN_VALIDATOR: Contract<typeof abi> = {
	name: 'Sidechain Validator',
	address: '0x0000000000000000000000000000000000000011',
	is_deprecated: true,
	updated_at: 1707758993,
	abi: abi,
}
export default SIDECHAIN_VALIDATOR
