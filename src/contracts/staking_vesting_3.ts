import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'ErrBonusAlreadySent',
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
		inputs: [
			{
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
			{
				internalType: 'uint256',
				name: 'currentBalance',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'sendAmount',
				type: 'uint256',
			},
		],
		name: 'ErrInsufficientBalance',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
		],
		name: 'ErrInvalidArguments',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
		],
		name: 'ErrRecipientRevert',
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
		inputs: [
			{
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
			{
				internalType: 'enum ContractType',
				name: 'expectedContractType',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: 'actual',
				type: 'address',
			},
		],
		name: 'ErrUnexpectedInternalCall',
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
				indexed: false,
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'BlockProducerBonusPerBlockUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'blockNumber',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'recipient',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'blockProducerAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'bridgeOperatorAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'contractBalance',
				type: 'uint256',
			},
		],
		name: 'BonusTransferFailed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'blockNumber',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'recipient',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'blockProducerAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'bridgeOperatorAmount',
				type: 'uint256',
			},
		],
		name: 'BonusTransferred',
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
		name: 'BridgeOperatorBonusPerBlockUpdated',
		type: 'event',
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
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'FastFinalityRewardPercentageUpdated',
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
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'blockProducerBlockBonus',
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
				name: '',
				type: 'uint256',
			},
		],
		name: 'bridgeOperatorBlockBonus',
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
		name: 'fastFinalityRewardPercentage',
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
				name: '__validatorContract',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '__blockProducerBonusPerBlock',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '__bridgeOperatorBonusPerBlock',
				type: 'uint256',
			},
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'payable',
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
				internalType: 'uint256',
				name: 'fastFinalityRewardPercent',
				type: 'uint256',
			},
		],
		name: 'initializeV3',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'lastBlockSendingBonus',
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
		name: 'receiveRON',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bool',
				name: 'forBlockProducer',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: 'forBridgeOperator',
				type: 'bool',
			},
		],
		name: 'requestBonus',
		outputs: [
			{
				internalType: 'bool',
				name: 'success',
				type: 'bool',
			},
			{
				internalType: 'uint256',
				name: 'blockProducerBonus',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'bridgeOperatorBonus',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'fastFinalityRewardPercent',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'setBlockProducerBonusPerBlock',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'setBridgeOperatorBonusPerBlock',
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
				name: 'percent',
				type: 'uint256',
			},
		],
		name: 'setFastFinalityRewardPercentage',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const STAKING_VESTING_3: Contract<typeof abi> = {
	name: 'Staking Vesting',
	address: '0x7ccbb3cd1b19bc1f1d5b7048400d41b1b796abad',
	is_deprecated: false,
	created_at: 1697443077,
	abi: abi,
}
export default STAKING_VESTING_3
