import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'num',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'denom',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'roninChainId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'expiryDuration',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'bridgeContract',
				type: 'address',
			},
			{
				internalType: 'address[]',
				name: 'callbackRegisters',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: 'bridgeOperators',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: 'governors',
				type: 'address[]',
			},
			{
				internalType: 'uint96[]',
				name: 'voteWeights',
				type: 'uint96[]',
			},
			{
				internalType: 'enum GlobalProposal.TargetOption[]',
				name: 'targetOptions',
				type: 'uint8[]',
			},
			{
				internalType: 'address[]',
				name: 'targets',
				type: 'address[]',
			},
		],
		stateMutability: 'payable',
		type: 'constructor',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'voter',
				type: 'address',
			},
		],
		name: 'ErrAlreadyVoted',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'bridgeOperator',
				type: 'address',
			},
		],
		name: 'ErrBridgeOperatorAlreadyExisted',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'bridgeOperator',
				type: 'address',
			},
		],
		name: 'ErrBridgeOperatorUpdateFailed',
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
		name: 'ErrCurrentProposalIsNotCompleted',
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
		name: 'ErrDuplicated',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'proposalHash',
				type: 'bytes32',
			},
		],
		name: 'ErrInsufficientGas',
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
			{
				internalType: 'uint256',
				name: 'actual',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'expected',
				type: 'uint256',
			},
		],
		name: 'ErrInvalidChainId',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidExpiryTimestamp',
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
		name: 'ErrInvalidOrder',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'actual',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'expected',
				type: 'bytes32',
			},
		],
		name: 'ErrInvalidProposal',
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
		name: 'ErrInvalidProposalNonce',
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
		name: 'ErrInvalidSignatures',
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
		name: 'ErrInvalidThreshold',
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
		name: 'ErrInvalidVoteWeight',
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
		name: 'ErrLengthMismatch',
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
		name: 'ErrOnlySelfCall',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrQueryForEmptyVote',
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
				name: 'interfaceId',
				type: 'bytes4',
			},
			{
				internalType: 'address',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'ErrUnsupportedInterface',
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
		name: 'ErrUnsupportedVoteType',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrVoteIsFinalized',
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
		name: 'ErrZeroAddress',
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
				internalType: 'address',
				name: 'governor',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'fromBridgeOperator',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'toBridgeOperator',
				type: 'address',
			},
		],
		name: 'BridgeOperatorUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bool[]',
				name: 'statuses',
				type: 'bool[]',
			},
			{
				indexed: false,
				internalType: 'uint96[]',
				name: 'voteWeights',
				type: 'uint96[]',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'governors',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'bridgeOperators',
				type: 'address[]',
			},
		],
		name: 'BridgeOperatorsAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bool[]',
				name: 'statuses',
				type: 'bool[]',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'bridgeOperators',
				type: 'address[]',
			},
		],
		name: 'BridgeOperatorsRemoved',
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
				indexed: true,
				internalType: 'uint256',
				name: 'round',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'proposalHash',
				type: 'bytes32',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'chainId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expiryTimestamp',
						type: 'uint256',
					},
					{
						internalType: 'address[]',
						name: 'targets',
						type: 'address[]',
					},
					{
						internalType: 'uint256[]',
						name: 'values',
						type: 'uint256[]',
					},
					{
						internalType: 'bytes[]',
						name: 'calldatas',
						type: 'bytes[]',
					},
					{
						internalType: 'uint256[]',
						name: 'gasAmounts',
						type: 'uint256[]',
					},
				],
				indexed: false,
				internalType: 'struct Proposal.ProposalDetail',
				name: 'proposal',
				type: 'tuple',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'globalProposalHash',
				type: 'bytes32',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expiryTimestamp',
						type: 'uint256',
					},
					{
						internalType: 'enum GlobalProposal.TargetOption[]',
						name: 'targetOptions',
						type: 'uint8[]',
					},
					{
						internalType: 'uint256[]',
						name: 'values',
						type: 'uint256[]',
					},
					{
						internalType: 'bytes[]',
						name: 'calldatas',
						type: 'bytes[]',
					},
					{
						internalType: 'uint256[]',
						name: 'gasAmounts',
						type: 'uint256[]',
					},
				],
				indexed: false,
				internalType: 'struct GlobalProposal.GlobalProposalDetail',
				name: 'globalProposal',
				type: 'tuple',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'creator',
				type: 'address',
			},
		],
		name: 'GlobalProposalCreated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bytes',
				name: 'callData',
				type: 'bytes',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'registers',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'bool[]',
				name: 'statuses',
				type: 'bool[]',
			},
			{
				indexed: false,
				internalType: 'bytes[]',
				name: 'returnDatas',
				type: 'bytes[]',
			},
		],
		name: 'Notified',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'proposalHash',
				type: 'bytes32',
			},
		],
		name: 'ProposalApproved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'chainId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'round',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'proposalHash',
				type: 'bytes32',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'chainId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expiryTimestamp',
						type: 'uint256',
					},
					{
						internalType: 'address[]',
						name: 'targets',
						type: 'address[]',
					},
					{
						internalType: 'uint256[]',
						name: 'values',
						type: 'uint256[]',
					},
					{
						internalType: 'bytes[]',
						name: 'calldatas',
						type: 'bytes[]',
					},
					{
						internalType: 'uint256[]',
						name: 'gasAmounts',
						type: 'uint256[]',
					},
				],
				indexed: false,
				internalType: 'struct Proposal.ProposalDetail',
				name: 'proposal',
				type: 'tuple',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'creator',
				type: 'address',
			},
		],
		name: 'ProposalCreated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'proposalHash',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'bool[]',
				name: 'successCalls',
				type: 'bool[]',
			},
			{
				indexed: false,
				internalType: 'bytes[]',
				name: 'returnDatas',
				type: 'bytes[]',
			},
		],
		name: 'ProposalExecuted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'proposalHash',
				type: 'bytes32',
			},
		],
		name: 'ProposalExpired',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'duration',
				type: 'uint256',
			},
		],
		name: 'ProposalExpiryDurationChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'proposalHash',
				type: 'bytes32',
			},
		],
		name: 'ProposalRejected',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'proposalHash',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'voter',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'enum Ballot.VoteType',
				name: 'support',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'weight',
				type: 'uint256',
			},
		],
		name: 'ProposalVoted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'enum GlobalProposal.TargetOption',
				name: 'targetOption',
				type: 'uint8',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'TargetOptionUpdated',
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
		inputs: [],
		name: 'DOMAIN_SEPARATOR',
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
				internalType: 'uint96[]',
				name: 'voteWeights',
				type: 'uint96[]',
			},
			{
				internalType: 'address[]',
				name: 'governors',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: 'bridgeOperators',
				type: 'address[]',
			},
		],
		name: 'addBridgeOperators',
		outputs: [
			{
				internalType: 'bool[]',
				name: 'addeds',
				type: 'bool[]',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expiryTimestamp',
						type: 'uint256',
					},
					{
						internalType: 'enum GlobalProposal.TargetOption[]',
						name: 'targetOptions',
						type: 'uint8[]',
					},
					{
						internalType: 'uint256[]',
						name: 'values',
						type: 'uint256[]',
					},
					{
						internalType: 'bytes[]',
						name: 'calldatas',
						type: 'bytes[]',
					},
					{
						internalType: 'uint256[]',
						name: 'gasAmounts',
						type: 'uint256[]',
					},
				],
				internalType: 'struct GlobalProposal.GlobalProposalDetail',
				name: 'globalProposal',
				type: 'tuple',
			},
			{
				internalType: 'enum Ballot.VoteType[]',
				name: 'supports_',
				type: 'uint8[]',
			},
			{
				components: [
					{
						internalType: 'uint8',
						name: 'v',
						type: 'uint8',
					},
					{
						internalType: 'bytes32',
						name: 'r',
						type: 'bytes32',
					},
					{
						internalType: 'bytes32',
						name: 's',
						type: 'bytes32',
					},
				],
				internalType: 'struct SignatureConsumer.Signature[]',
				name: 'signatures',
				type: 'tuple[]',
			},
		],
		name: 'castGlobalProposalBySignatures',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'chainId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expiryTimestamp',
						type: 'uint256',
					},
					{
						internalType: 'address[]',
						name: 'targets',
						type: 'address[]',
					},
					{
						internalType: 'uint256[]',
						name: 'values',
						type: 'uint256[]',
					},
					{
						internalType: 'bytes[]',
						name: 'calldatas',
						type: 'bytes[]',
					},
					{
						internalType: 'uint256[]',
						name: 'gasAmounts',
						type: 'uint256[]',
					},
				],
				internalType: 'struct Proposal.ProposalDetail',
				name: 'proposal',
				type: 'tuple',
			},
			{
				internalType: 'enum Ballot.VoteType[]',
				name: 'supports_',
				type: 'uint8[]',
			},
			{
				components: [
					{
						internalType: 'uint8',
						name: 'v',
						type: 'uint8',
					},
					{
						internalType: 'bytes32',
						name: 'r',
						type: 'bytes32',
					},
					{
						internalType: 'bytes32',
						name: 's',
						type: 'bytes32',
					},
				],
				internalType: 'struct SignatureConsumer.Signature[]',
				name: 'signatures',
				type: 'tuple[]',
			},
		],
		name: 'castProposalBySignatures',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'chainId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expiryTimestamp',
						type: 'uint256',
					},
					{
						internalType: 'address[]',
						name: 'targets',
						type: 'address[]',
					},
					{
						internalType: 'uint256[]',
						name: 'values',
						type: 'uint256[]',
					},
					{
						internalType: 'bytes[]',
						name: 'calldatas',
						type: 'bytes[]',
					},
					{
						internalType: 'uint256[]',
						name: 'gasAmounts',
						type: 'uint256[]',
					},
				],
				internalType: 'struct Proposal.ProposalDetail',
				name: 'proposal',
				type: 'tuple',
			},
			{
				internalType: 'enum Ballot.VoteType',
				name: 'support',
				type: 'uint8',
			},
		],
		name: 'castProposalVoteForCurrentNetwork',
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
				internalType: 'uint256',
				name: '_chainId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_round',
				type: 'uint256',
			},
		],
		name: 'deleteExpired',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'governors',
				type: 'address[]',
			},
		],
		name: 'getBridgeOperatorOf',
		outputs: [
			{
				internalType: 'address[]',
				name: 'bridgeOperators',
				type: 'address[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'bridgeOperator',
				type: 'address',
			},
		],
		name: 'getBridgeOperatorWeight',
		outputs: [
			{
				internalType: 'uint96',
				name: 'weight',
				type: 'uint96',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getBridgeOperators',
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
		name: 'getCallbackRegisters',
		outputs: [
			{
				internalType: 'address[]',
				name: 'registers',
				type: 'address[]',
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
		inputs: [],
		name: 'getFullBridgeOperatorInfos',
		outputs: [
			{
				internalType: 'address[]',
				name: 'governors',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: 'bridgeOperators',
				type: 'address[]',
			},
			{
				internalType: 'uint96[]',
				name: 'weights',
				type: 'uint96[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'round_',
				type: 'uint256',
			},
		],
		name: 'getGlobalProposalSignatures',
		outputs: [
			{
				internalType: 'address[]',
				name: 'voters',
				type: 'address[]',
			},
			{
				internalType: 'enum Ballot.VoteType[]',
				name: 'supports_',
				type: 'uint8[]',
			},
			{
				components: [
					{
						internalType: 'uint8',
						name: 'v',
						type: 'uint8',
					},
					{
						internalType: 'bytes32',
						name: 'r',
						type: 'bytes32',
					},
					{
						internalType: 'bytes32',
						name: 's',
						type: 'bytes32',
					},
				],
				internalType: 'struct SignatureConsumer.Signature[]',
				name: 'signatures',
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
				name: 'governor',
				type: 'address',
			},
		],
		name: 'getGovernorWeight',
		outputs: [
			{
				internalType: 'uint96',
				name: 'weight',
				type: 'uint96',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'governors',
				type: 'address[]',
			},
		],
		name: 'getGovernorWeights',
		outputs: [
			{
				internalType: 'uint96[]',
				name: 'weights',
				type: 'uint96[]',
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
		inputs: [
			{
				internalType: 'address[]',
				name: 'bridgeOperators',
				type: 'address[]',
			},
		],
		name: 'getGovernorsOf',
		outputs: [
			{
				internalType: 'address[]',
				name: 'governors',
				type: 'address[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getProposalExpiryDuration',
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
				name: '_chainId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_round',
				type: 'uint256',
			},
		],
		name: 'getProposalSignatures',
		outputs: [
			{
				internalType: 'address[]',
				name: '_voters',
				type: 'address[]',
			},
			{
				internalType: 'enum Ballot.VoteType[]',
				name: '_supports',
				type: 'uint8[]',
			},
			{
				components: [
					{
						internalType: 'uint8',
						name: 'v',
						type: 'uint8',
					},
					{
						internalType: 'bytes32',
						name: 'r',
						type: 'bytes32',
					},
					{
						internalType: 'bytes32',
						name: 's',
						type: 'bytes32',
					},
				],
				internalType: 'struct SignatureConsumer.Signature[]',
				name: '_signatures',
				type: 'tuple[]',
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
				name: 'num_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'denom_',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getTotalWeight',
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
				name: 'round_',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'voter',
				type: 'address',
			},
		],
		name: 'globalProposalVoted',
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
				name: 'addr',
				type: 'address',
			},
		],
		name: 'isBridgeOperator',
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
		inputs: [
			{
				internalType: 'uint256',
				name: '_chainId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_round',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_voter',
				type: 'address',
			},
		],
		name: 'proposalVoted',
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
				internalType: 'uint256',
				name: '_chainId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_expiryTimestamp',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: '_targets',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_values',
				type: 'uint256[]',
			},
			{
				internalType: 'bytes[]',
				name: '_calldatas',
				type: 'bytes[]',
			},
			{
				internalType: 'uint256[]',
				name: '_gasAmounts',
				type: 'uint256[]',
			},
		],
		name: 'propose',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'expiryTimestamp',
				type: 'uint256',
			},
			{
				internalType: 'enum GlobalProposal.TargetOption[]',
				name: 'targetOptions',
				type: 'uint8[]',
			},
			{
				internalType: 'uint256[]',
				name: 'values',
				type: 'uint256[]',
			},
			{
				internalType: 'bytes[]',
				name: 'calldatas',
				type: 'bytes[]',
			},
			{
				internalType: 'uint256[]',
				name: 'gasAmounts',
				type: 'uint256[]',
			},
		],
		name: 'proposeGlobal',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expiryTimestamp',
						type: 'uint256',
					},
					{
						internalType: 'enum GlobalProposal.TargetOption[]',
						name: 'targetOptions',
						type: 'uint8[]',
					},
					{
						internalType: 'uint256[]',
						name: 'values',
						type: 'uint256[]',
					},
					{
						internalType: 'bytes[]',
						name: 'calldatas',
						type: 'bytes[]',
					},
					{
						internalType: 'uint256[]',
						name: 'gasAmounts',
						type: 'uint256[]',
					},
				],
				internalType: 'struct GlobalProposal.GlobalProposalDetail',
				name: 'globalProposal',
				type: 'tuple',
			},
			{
				internalType: 'enum Ballot.VoteType[]',
				name: 'supports_',
				type: 'uint8[]',
			},
			{
				components: [
					{
						internalType: 'uint8',
						name: 'v',
						type: 'uint8',
					},
					{
						internalType: 'bytes32',
						name: 'r',
						type: 'bytes32',
					},
					{
						internalType: 'bytes32',
						name: 's',
						type: 'bytes32',
					},
				],
				internalType: 'struct SignatureConsumer.Signature[]',
				name: 'signatures',
				type: 'tuple[]',
			},
		],
		name: 'proposeGlobalProposalStructAndCastVotes',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'expiryTimestamp',
				type: 'uint256',
			},
			{
				internalType: 'address[]',
				name: 'targets',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'values',
				type: 'uint256[]',
			},
			{
				internalType: 'bytes[]',
				name: 'calldatas',
				type: 'bytes[]',
			},
			{
				internalType: 'uint256[]',
				name: 'gasAmounts',
				type: 'uint256[]',
			},
			{
				internalType: 'enum Ballot.VoteType',
				name: 'support',
				type: 'uint8',
			},
		],
		name: 'proposeProposalForCurrentNetwork',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'chainId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'expiryTimestamp',
						type: 'uint256',
					},
					{
						internalType: 'address[]',
						name: 'targets',
						type: 'address[]',
					},
					{
						internalType: 'uint256[]',
						name: 'values',
						type: 'uint256[]',
					},
					{
						internalType: 'bytes[]',
						name: 'calldatas',
						type: 'bytes[]',
					},
					{
						internalType: 'uint256[]',
						name: 'gasAmounts',
						type: 'uint256[]',
					},
				],
				internalType: 'struct Proposal.ProposalDetail',
				name: '_proposal',
				type: 'tuple',
			},
			{
				internalType: 'enum Ballot.VoteType[]',
				name: '_supports',
				type: 'uint8[]',
			},
			{
				components: [
					{
						internalType: 'uint8',
						name: 'v',
						type: 'uint8',
					},
					{
						internalType: 'bytes32',
						name: 'r',
						type: 'bytes32',
					},
					{
						internalType: 'bytes32',
						name: 's',
						type: 'bytes32',
					},
				],
				internalType: 'struct SignatureConsumer.Signature[]',
				name: '_signatures',
				type: 'tuple[]',
			},
		],
		name: 'proposeProposalStructAndCastVotes',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'registers',
				type: 'address[]',
			},
		],
		name: 'registerCallbacks',
		outputs: [
			{
				internalType: 'bool[]',
				name: 'registereds',
				type: 'bool[]',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'bridgeOperators',
				type: 'address[]',
			},
		],
		name: 'removeBridgeOperators',
		outputs: [
			{
				internalType: 'bool[]',
				name: 'removeds',
				type: 'bool[]',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum GlobalProposal.TargetOption[]',
				name: 'targetOptions',
				type: 'uint8[]',
			},
		],
		name: 'resolveTargets',
		outputs: [
			{
				internalType: 'address[]',
				name: 'targets',
				type: 'address[]',
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
		name: 'round',
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
				name: 'numerator',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'denominator',
				type: 'uint256',
			},
		],
		name: 'setThreshold',
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
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'governors',
				type: 'address[]',
			},
		],
		name: 'sumGovernorsWeight',
		outputs: [
			{
				internalType: 'uint256',
				name: 'sum',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'totalBridgeOperator',
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
				name: 'registers',
				type: 'address[]',
			},
		],
		name: 'unregisterCallbacks',
		outputs: [
			{
				internalType: 'bool[]',
				name: 'unregistereds',
				type: 'bool[]',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newBridgeOperator',
				type: 'address',
			},
		],
		name: 'updateBridgeOperator',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum GlobalProposal.TargetOption[]',
				name: 'targetOptions',
				type: 'uint8[]',
			},
			{
				internalType: 'address[]',
				name: 'targets',
				type: 'address[]',
			},
		],
		name: 'updateManyTargetOption',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
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
		name: 'vote',
		outputs: [
			{
				internalType: 'enum VoteStatusConsumer.VoteStatus',
				name: 'status',
				type: 'uint8',
			},
			{
				internalType: 'bytes32',
				name: 'hash',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'againstVoteWeight',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'forVoteWeight',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'expiryTimestamp',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const
const RONIN_BRIDGE_MANAGER: Contract<typeof abi> = {
	name: 'Ronin Bridge Manager',
	address: '0x5fa49e6ca54a9daa8eca4f403adbde5ee075d84a',
	is_deprecated: false,
	updated_at: 1707758983,
	abi: abi,
}
export default RONIN_BRIDGE_MANAGER
