import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
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
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'reason',
				type: 'bytes',
			},
		],
		name: 'ExternalCallFailed',
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
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: 'operators',
				type: 'address[]',
			},
		],
		name: 'getManyTotalBallots',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '_res',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum IBridgeTracking.VoteKind',
				name: 'kind',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: 'requestId',
				type: 'uint256',
			},
		],
		name: 'handleVoteApproved',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'bridgeContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'validatorContract',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'startedAtBlock_',
				type: 'uint256',
			},
		],
		name: 'initialize',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'initializeREP2',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'initializeV2',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'bridgeManager',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'bridgeSlash',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'bridgeReward',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'dposGA',
				type: 'address',
			},
		],
		name: 'initializeV3',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum IBridgeTracking.VoteKind',
				name: 'kind',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: 'requestId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
		],
		name: 'recordVote',
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
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'startedAtBlock',
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
				name: 'period',
				type: 'uint256',
			},
		],
		name: 'totalBallot',
		outputs: [
			{
				internalType: 'uint256',
				name: 'totalBallot_',
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
				name: 'period',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'bridgeOperator',
				type: 'address',
			},
		],
		name: 'totalBallotOf',
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
				name: 'period',
				type: 'uint256',
			},
		],
		name: 'totalVote',
		outputs: [
			{
				internalType: 'uint256',
				name: 'totalVote_',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const
const BRIDGE_TRACKING: Contract<typeof abi> = {
	name: 'Bridge Tracking',
	address: '0x9521dbe27803f5d31da86d5846e7fe011d235018',
	is_deprecated: false,
	created_at: 1722410264,
	abi: abi,
}
export default BRIDGE_TRACKING
