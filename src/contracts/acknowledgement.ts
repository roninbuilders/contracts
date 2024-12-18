import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_validator',
				type: 'address',
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
				internalType: 'address',
				name: '_oldAdmin',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_newAdmin',
				type: 'address',
			},
		],
		name: 'AdminChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_oldAdmin',
				type: 'address',
			},
		],
		name: 'AdminRemoved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
		],
		name: 'OperatorAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
		],
		name: 'OperatorRemoved',
		type: 'event',
	},
	{
		constant: true,
		inputs: [],
		name: 'DEPOSIT_CHANNEL',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'VALIDATOR_CHANNEL',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'WITHDRAWAL_CHANNEL',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
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
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		name: 'ackCount',
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
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		name: 'ackStatus',
		outputs: [
			{
				internalType: 'enum Acknowledgement.Status',
				name: '',
				type: 'uint8',
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
				internalType: 'string',
				name: '_channelName',
				type: 'string',
			},
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'bytes32',
				name: '_hash',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: '_validator',
				type: 'address',
			},
		],
		name: 'acknowledge',
		outputs: [
			{
				internalType: 'enum Acknowledgement.Status',
				name: '',
				type: 'uint8',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'string',
				name: '_name',
				type: 'string',
			},
		],
		name: 'addChannel',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address[]',
				name: '_addedOperators',
				type: 'address[]',
			},
		],
		name: 'addOperators',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'admin',
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
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_newAdmin',
				type: 'address',
			},
		],
		name: 'changeAdmin',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		name: 'enabledChannels',
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
		inputs: [
			{
				internalType: 'string',
				name: '_channelName',
				type: 'string',
			},
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'bytes32',
				name: '_hash',
				type: 'bytes32',
			},
		],
		name: 'getAcknowledgementStatus',
		outputs: [
			{
				internalType: 'enum Acknowledgement.Status',
				name: '',
				type: 'uint8',
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
				internalType: 'string',
				name: '_name',
				type: 'string',
			},
		],
		name: 'getChannelHash',
		outputs: [
			{
				internalType: 'bytes32',
				name: '_channel',
				type: 'bytes32',
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
				internalType: 'string',
				name: '_channelName',
				type: 'string',
			},
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
		name: 'hasValidatorAcknowledged',
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
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'operator',
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
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'operators',
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
	{
		constant: false,
		inputs: [],
		name: 'removeAdmin',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'string',
				name: '_name',
				type: 'string',
			},
		],
		name: 'removeChannel',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address[]',
				name: '_removedOperators',
				type: 'address[]',
			},
		],
		name: 'removeOperators',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_validator',
				type: 'address',
			},
		],
		name: 'updateValidator',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'validator',
		outputs: [
			{
				internalType: 'contract Validator',
				name: '',
				type: 'address',
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
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'validatorAck',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
] as const
const ACKNOWLEDGEMENT: Contract<typeof abi> = {
	name: 'Acknowledgement',
	address: '0x0000000000000000000000000000000000000022',
	is_deprecated: true,
	created_at: 0,
	abi: abi,
}
export default ACKNOWLEDGEMENT
