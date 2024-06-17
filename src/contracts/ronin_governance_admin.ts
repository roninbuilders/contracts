import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_roninChainId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_roninTrustedOrganizationContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_validatorContract',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_expiryDuration',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
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
		inputs: [],
		name: 'ErrInvalidVoteHash',
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
		inputs: [],
		name: 'ErrQueryForExpiredVote',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrQueryForNonExistentVote',
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
				internalType: 'bytes32',
				name: 'voteHash',
				type: 'bytes32',
			},
		],
		name: 'EmergencyExitPollApproved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'voteHash',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'validatorId',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'recipientAfterUnlockedFund',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'requestedAt',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'expiredAt',
				type: 'uint256',
			},
		],
		name: 'EmergencyExitPollCreated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'voteHash',
				type: 'bytes32',
			},
		],
		name: 'EmergencyExitPollExpired',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'voteHash',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'voter',
				type: 'address',
			},
		],
		name: 'EmergencyExitPollVoted',
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
				name: '_proposal',
				type: 'tuple',
			},
			{
				internalType: 'enum Ballot.VoteType',
				name: '_support',
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
				internalType: 'address',
				name: '_proxy',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_newAdmin',
				type: 'address',
			},
		],
		name: 'changeProxyAdmin',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'validatorId',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'recipientAfterUnlockedFund',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'requestedAt',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'expiredAt',
				type: 'uint256',
			},
		],
		name: 'createEmergencyExitPoll',
		outputs: [],
		stateMutability: 'nonpayable',
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
				internalType: 'bytes32',
				name: '_voteHash',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: '_voter',
				type: 'address',
			},
		],
		name: 'emergencyPollVoted',
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
		inputs: [
			{
				internalType: 'address',
				name: '_proxy',
				type: 'address',
			},
		],
		name: 'getProxyAdmin',
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
				internalType: 'address',
				name: '_proxy',
				type: 'address',
			},
		],
		name: 'getProxyImplementation',
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
			{
				internalType: 'enum Ballot.VoteType',
				name: '_support',
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
		inputs: [],
		name: 'roninChainId',
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
				name: '_expiryDuration',
				type: 'uint256',
			},
		],
		name: 'setProposalExpiryDuration',
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
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'voteHash',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'validatorId',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'recipientAfterUnlockedFund',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'requestedAt',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'expiredAt',
				type: 'uint256',
			},
		],
		name: 'voteEmergencyExit',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const RONIN_GOVERNANCE_ADMIN: Contract<typeof abi> = {
	name: 'Ronin Governance Admin',
	address: '0x70fd02049333337a534a9383149c9a99ddf65495',
	is_deprecated: false,
	updated_at: 1718584815,
	abi: abi,
}
export default RONIN_GOVERNANCE_ADMIN
