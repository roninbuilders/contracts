import { Contract } from '@/contract'
export const RONIN_GOVERNANCE_ADMIN: Contract = {
	name: 'Ronin Governance Admin',
	address: '0x946397dedfd2f79b75a72b322944a21c3240c9c3',
	abi: [
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
					name: '_proposalExpiryDuration',
					type: 'uint256',
				},
			],
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
			name: 'ErrCallerMustBeRoninTrustedOrgContract',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrCallerMustBeValidatorContract',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'methodSignature',
					type: 'bytes4',
				},
			],
			name: 'ErrProxyCallFailed',
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
					internalType: 'uint256',
					name: '_period',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_epoch',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address[]',
					name: '_operators',
					type: 'address[]',
				},
			],
			name: 'BridgeOperatorsApproved',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'bytes32',
					name: '_voteHash',
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
					name: '_voteHash',
					type: 'bytes32',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_consensusAddr',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_recipientAfterUnlockedFund',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_requestedAt',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_expiredAt',
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
					name: '_voteHash',
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
					indexed: false,
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'RoninTrustedOrganizationContractUpdated',
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
					internalType: 'uint256',
					name: '_epoch',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: '_voter',
					type: 'address',
				},
			],
			name: 'bridgeOperatorsVoted',
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
					name: '_globalProposal',
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
					name: '_consensusAddr',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_recipientAfterUnlockedFund',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_requestedAt',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_expiredAt',
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
					internalType: 'uint256',
					name: '_period',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_epoch',
					type: 'uint256',
				},
			],
			name: 'getBridgeOperatorVotingSignatures',
			outputs: [
				{
					internalType: 'address[]',
					name: '_voters',
					type: 'address[]',
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
			inputs: [],
			name: 'lastSyncedBridgeOperatorSetInfo',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'period',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'epoch',
							type: 'uint256',
						},
						{
							internalType: 'address[]',
							name: 'operators',
							type: 'address[]',
						},
					],
					internalType: 'struct BridgeOperatorsBallot.BridgeOperatorSet',
					name: '',
					type: 'tuple',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_bridgeVoter',
					type: 'address',
				},
			],
			name: 'lastVotedBlock',
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
					name: '_expiryTimestamp',
					type: 'uint256',
				},
				{
					internalType: 'enum GlobalProposal.TargetOption[]',
					name: '_targetOptions',
					type: 'uint8[]',
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
					name: '_globalProposal',
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
			name: 'proposeGlobalProposalStructAndCastVotes',
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
			inputs: [],
			name: 'roninTrustedOrganizationContract',
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
					internalType: 'address',
					name: '_addr',
					type: 'address',
				},
			],
			name: 'setRoninTrustedOrganizationContract',
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
					components: [
						{
							internalType: 'uint256',
							name: 'period',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'epoch',
							type: 'uint256',
						},
						{
							internalType: 'address[]',
							name: 'operators',
							type: 'address[]',
						},
					],
					internalType: 'struct BridgeOperatorsBallot.BridgeOperatorSet',
					name: '_ballot',
					type: 'tuple',
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
			name: 'voteBridgeOperatorsBySignatures',
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
					name: '_consensusAddr',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_recipientAfterUnlockedFund',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_requestedAt',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_expiredAt',
					type: 'uint256',
				},
			],
			name: 'voteEmergencyExit',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
