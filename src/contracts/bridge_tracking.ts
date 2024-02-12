import { Contract } from '@/contract'
const BRIDGE_TRACKING: Contract = {
	name: 'Bridge Tracking',
	address: '0xfca143fe2751a992e8cff2eb5d64eda809049295',
	is_deprecated: false,
	updated_at: 0,
	abi: [
		{
			inputs: [],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			inputs: [],
			name: 'ErrCallerMustBeBridgeContract',
			type: 'error',
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
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'BridgeContractUpdated',
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
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'ValidatorContractUpdated',
			type: 'event',
		},
		{
			inputs: [],
			name: 'bridgeContract',
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
					internalType: 'uint256',
					name: '_period',
					type: 'uint256',
				},
				{
					internalType: 'address[]',
					name: '_bridgeOperators',
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
					name: '_kind',
					type: 'uint8',
				},
				{
					internalType: 'uint256',
					name: '_requestId',
					type: 'uint256',
				},
			],
			name: 'handleVoteApproved',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_bridgeContract',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_validatorContract',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_startedAtBlock',
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
					internalType: 'enum IBridgeTracking.VoteKind',
					name: '_kind',
					type: 'uint8',
				},
				{
					internalType: 'uint256',
					name: '_requestId',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: '_operator',
					type: 'address',
				},
			],
			name: 'recordVote',
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
			name: 'setBridgeContract',
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
					name: '_period',
					type: 'uint256',
				},
			],
			name: 'totalBallots',
			outputs: [
				{
					internalType: 'uint256',
					name: '_totalBallots',
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
					name: '_period',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: '_bridgeOperator',
					type: 'address',
				},
			],
			name: 'totalBallotsOf',
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
					name: '_period',
					type: 'uint256',
				},
			],
			name: 'totalVotes',
			outputs: [
				{
					internalType: 'uint256',
					name: '_totalVotes',
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
	],
}
export default BRIDGE_TRACKING
