import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				components: [
					{
						components: [
							{
								internalType: 'address',
								name: 'blessVoteAddr',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'curseVoteAddr',
								type: 'address',
							},
							{
								internalType: 'uint8',
								name: 'blessWeight',
								type: 'uint8',
							},
							{
								internalType: 'uint8',
								name: 'curseWeight',
								type: 'uint8',
							},
						],
						internalType: 'struct RMN.Voter[]',
						name: 'voters',
						type: 'tuple[]',
					},
					{
						internalType: 'uint16',
						name: 'blessWeightThreshold',
						type: 'uint16',
					},
					{
						internalType: 'uint16',
						name: 'curseWeightThreshold',
						type: 'uint16',
					},
				],
				internalType: 'struct RMN.Config',
				name: 'config',
				type: 'tuple',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'InvalidConfig',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'voter',
				type: 'address',
			},
			{
				internalType: 'bytes16',
				name: 'curseId',
				type: 'bytes16',
			},
		],
		name: 'ReusedCurseId',
		type: 'error',
	},
	{
		inputs: [],
		name: 'SubjectsMustBeStrictlyIncreasing',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'voter',
				type: 'address',
			},
		],
		name: 'UnauthorizedVoter',
		type: 'error',
	},
	{
		inputs: [],
		name: 'UnvoteToCurseNoop',
		type: 'error',
	},
	{
		inputs: [],
		name: 'VoteToBlessForbiddenDuringActiveGlobalCurse',
		type: 'error',
	},
	{
		inputs: [],
		name: 'VoteToBlessNoop',
		type: 'error',
	},
	{
		inputs: [],
		name: 'VoteToCurseNoop',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint32',
				name: 'configVersion',
				type: 'uint32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'voter',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'commitStore',
						type: 'address',
					},
					{
						internalType: 'bytes32',
						name: 'root',
						type: 'bytes32',
					},
				],
				indexed: false,
				internalType: 'struct IRMN.TaggedRoot',
				name: 'taggedRoot',
				type: 'tuple',
			},
		],
		name: 'AlreadyBlessed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint32',
				name: 'configVersion',
				type: 'uint32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'voter',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'commitStore',
						type: 'address',
					},
					{
						internalType: 'bytes32',
						name: 'root',
						type: 'bytes32',
					},
				],
				indexed: false,
				internalType: 'struct IRMN.TaggedRoot',
				name: 'taggedRoot',
				type: 'tuple',
			},
		],
		name: 'AlreadyVotedToBless',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint32',
				name: 'configVersion',
				type: 'uint32',
			},
			{
				components: [
					{
						components: [
							{
								internalType: 'address',
								name: 'blessVoteAddr',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'curseVoteAddr',
								type: 'address',
							},
							{
								internalType: 'uint8',
								name: 'blessWeight',
								type: 'uint8',
							},
							{
								internalType: 'uint8',
								name: 'curseWeight',
								type: 'uint8',
							},
						],
						internalType: 'struct RMN.Voter[]',
						name: 'voters',
						type: 'tuple[]',
					},
					{
						internalType: 'uint16',
						name: 'blessWeightThreshold',
						type: 'uint16',
					},
					{
						internalType: 'uint16',
						name: 'curseWeightThreshold',
						type: 'uint16',
					},
				],
				indexed: false,
				internalType: 'struct RMN.Config',
				name: 'config',
				type: 'tuple',
			},
		],
		name: 'ConfigSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bytes16',
				name: 'subject',
				type: 'bytes16',
			},
		],
		name: 'CurseLifted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint32',
				name: 'configVersion',
				type: 'uint32',
			},
			{
				indexed: false,
				internalType: 'bytes16',
				name: 'subject',
				type: 'bytes16',
			},
			{
				indexed: false,
				internalType: 'uint64',
				name: 'blockTimestamp',
				type: 'uint64',
			},
		],
		name: 'Cursed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
		],
		name: 'OwnershipTransferRequested',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'commitStore',
				type: 'address',
			},
		],
		name: 'PermaBlessedCommitStoreAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'commitStore',
				type: 'address',
			},
		],
		name: 'PermaBlessedCommitStoreRemoved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'voter',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bytes16',
				name: 'subject',
				type: 'bytes16',
			},
			{
				indexed: false,
				internalType: 'bytes28',
				name: 'onchainCursesHash',
				type: 'bytes28',
			},
			{
				indexed: false,
				internalType: 'bytes28',
				name: 'cursesHash',
				type: 'bytes28',
			},
		],
		name: 'SkippedUnvoteToCurse',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint32',
				name: 'configVersion',
				type: 'uint32',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'commitStore',
						type: 'address',
					},
					{
						internalType: 'bytes32',
						name: 'root',
						type: 'bytes32',
					},
				],
				indexed: false,
				internalType: 'struct IRMN.TaggedRoot',
				name: 'taggedRoot',
				type: 'tuple',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'wasBlessed',
				type: 'bool',
			},
		],
		name: 'TaggedRootBlessVotesReset',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint32',
				name: 'configVersion',
				type: 'uint32',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'commitStore',
						type: 'address',
					},
					{
						internalType: 'bytes32',
						name: 'root',
						type: 'bytes32',
					},
				],
				indexed: false,
				internalType: 'struct IRMN.TaggedRoot',
				name: 'taggedRoot',
				type: 'tuple',
			},
			{
				indexed: false,
				internalType: 'uint16',
				name: 'accumulatedWeight',
				type: 'uint16',
			},
		],
		name: 'TaggedRootBlessed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint32',
				name: 'configVersion',
				type: 'uint32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'voter',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bytes16',
				name: 'subject',
				type: 'bytes16',
			},
			{
				indexed: false,
				internalType: 'uint8',
				name: 'weight',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'bytes28',
				name: 'cursesHash',
				type: 'bytes28',
			},
			{
				indexed: false,
				internalType: 'uint16',
				name: 'remainingAccumulatedWeight',
				type: 'uint16',
			},
		],
		name: 'UnvotedToCurse',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint32',
				name: 'configVersion',
				type: 'uint32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'voter',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'commitStore',
						type: 'address',
					},
					{
						internalType: 'bytes32',
						name: 'root',
						type: 'bytes32',
					},
				],
				indexed: false,
				internalType: 'struct IRMN.TaggedRoot',
				name: 'taggedRoot',
				type: 'tuple',
			},
			{
				indexed: false,
				internalType: 'uint8',
				name: 'weight',
				type: 'uint8',
			},
		],
		name: 'VotedToBless',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint32',
				name: 'configVersion',
				type: 'uint32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'voter',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bytes16',
				name: 'subject',
				type: 'bytes16',
			},
			{
				indexed: false,
				internalType: 'bytes16',
				name: 'curseId',
				type: 'bytes16',
			},
			{
				indexed: false,
				internalType: 'uint8',
				name: 'weight',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'uint64',
				name: 'blockTimestamp',
				type: 'uint64',
			},
			{
				indexed: false,
				internalType: 'bytes28',
				name: 'cursesHash',
				type: 'bytes28',
			},
			{
				indexed: false,
				internalType: 'uint16',
				name: 'accumulatedWeight',
				type: 'uint16',
			},
		],
		name: 'VotedToCurse',
		type: 'event',
	},
	{
		inputs: [],
		name: 'acceptOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'commitStore',
						type: 'address',
					},
					{
						internalType: 'bytes32',
						name: 'root',
						type: 'bytes32',
					},
				],
				internalType: 'struct IRMN.TaggedRoot',
				name: 'taggedRoot',
				type: 'tuple',
			},
		],
		name: 'getBlessProgress',
		outputs: [
			{
				internalType: 'address[]',
				name: 'blessVoteAddrs',
				type: 'address[]',
			},
			{
				internalType: 'uint16',
				name: 'accumulatedWeight',
				type: 'uint16',
			},
			{
				internalType: 'bool',
				name: 'blessed',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getConfigDetails',
		outputs: [
			{
				internalType: 'uint32',
				name: 'version',
				type: 'uint32',
			},
			{
				internalType: 'uint32',
				name: 'blockNumber',
				type: 'uint32',
			},
			{
				components: [
					{
						components: [
							{
								internalType: 'address',
								name: 'blessVoteAddr',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'curseVoteAddr',
								type: 'address',
							},
							{
								internalType: 'uint8',
								name: 'blessWeight',
								type: 'uint8',
							},
							{
								internalType: 'uint8',
								name: 'curseWeight',
								type: 'uint8',
							},
						],
						internalType: 'struct RMN.Voter[]',
						name: 'voters',
						type: 'tuple[]',
					},
					{
						internalType: 'uint16',
						name: 'blessWeightThreshold',
						type: 'uint16',
					},
					{
						internalType: 'uint16',
						name: 'curseWeightThreshold',
						type: 'uint16',
					},
				],
				internalType: 'struct RMN.Config',
				name: 'config',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes16',
				name: 'subject',
				type: 'bytes16',
			},
		],
		name: 'getCurseProgress',
		outputs: [
			{
				internalType: 'address[]',
				name: 'curseVoteAddrs',
				type: 'address[]',
			},
			{
				internalType: 'bytes28[]',
				name: 'cursesHashes',
				type: 'bytes28[]',
			},
			{
				internalType: 'uint16',
				name: 'accumulatedWeight',
				type: 'uint16',
			},
			{
				internalType: 'bool',
				name: 'cursed',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getCursedSubjectsCount',
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
		name: 'getPermaBlessedCommitStores',
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
				internalType: 'uint256',
				name: 'offset',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'limit',
				type: 'uint256',
			},
		],
		name: 'getRecordedCurseRelatedOps',
		outputs: [
			{
				components: [
					{
						internalType: 'enum RMN.RecordedCurseRelatedOpTag',
						name: 'tag',
						type: 'uint8',
					},
					{
						internalType: 'uint64',
						name: 'blockTimestamp',
						type: 'uint64',
					},
					{
						internalType: 'bool',
						name: 'cursed',
						type: 'bool',
					},
					{
						internalType: 'address',
						name: 'curseVoteAddr',
						type: 'address',
					},
					{
						internalType: 'bytes16',
						name: 'subject',
						type: 'bytes16',
					},
					{
						internalType: 'bytes16',
						name: 'curseId',
						type: 'bytes16',
					},
				],
				internalType: 'struct RMN.RecordedCurseRelatedOp[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getRecordedCurseRelatedOpsCount',
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
						name: 'commitStore',
						type: 'address',
					},
					{
						internalType: 'bytes32',
						name: 'root',
						type: 'bytes32',
					},
				],
				internalType: 'struct IRMN.TaggedRoot',
				name: 'taggedRoot',
				type: 'tuple',
			},
		],
		name: 'isBlessed',
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
				internalType: 'bytes16',
				name: 'subject',
				type: 'bytes16',
			},
		],
		name: 'isCursed',
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
		name: 'isCursed',
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
		name: 'owner',
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
				internalType: 'bytes16',
				name: 'curseId',
				type: 'bytes16',
			},
			{
				internalType: 'bytes16[]',
				name: 'subjects',
				type: 'bytes16[]',
			},
		],
		name: 'ownerCurse',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'removes',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: 'adds',
				type: 'address[]',
			},
		],
		name: 'ownerRemoveThenAddPermaBlessedCommitStores',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'commitStore',
						type: 'address',
					},
					{
						internalType: 'bytes32',
						name: 'root',
						type: 'bytes32',
					},
				],
				internalType: 'struct IRMN.TaggedRoot[]',
				name: 'taggedRoots',
				type: 'tuple[]',
			},
		],
		name: 'ownerResetBlessVotes',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'curseVoteAddr',
						type: 'address',
					},
					{
						components: [
							{
								internalType: 'bytes16',
								name: 'subject',
								type: 'bytes16',
							},
							{
								internalType: 'bytes28',
								name: 'cursesHash',
								type: 'bytes28',
							},
						],
						internalType: 'struct RMN.UnvoteToCurseRequest',
						name: 'unit',
						type: 'tuple',
					},
					{
						internalType: 'bool',
						name: 'forceUnvote',
						type: 'bool',
					},
				],
				internalType: 'struct RMN.OwnerUnvoteToCurseRequest[]',
				name: 'ownerUnvoteToCurseRequests',
				type: 'tuple[]',
			},
		],
		name: 'ownerUnvoteToCurse',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						components: [
							{
								internalType: 'address',
								name: 'blessVoteAddr',
								type: 'address',
							},
							{
								internalType: 'address',
								name: 'curseVoteAddr',
								type: 'address',
							},
							{
								internalType: 'uint8',
								name: 'blessWeight',
								type: 'uint8',
							},
							{
								internalType: 'uint8',
								name: 'curseWeight',
								type: 'uint8',
							},
						],
						internalType: 'struct RMN.Voter[]',
						name: 'voters',
						type: 'tuple[]',
					},
					{
						internalType: 'uint16',
						name: 'blessWeightThreshold',
						type: 'uint16',
					},
					{
						internalType: 'uint16',
						name: 'curseWeightThreshold',
						type: 'uint16',
					},
				],
				internalType: 'struct RMN.Config',
				name: 'config',
				type: 'tuple',
			},
		],
		name: 'setConfig',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'typeAndVersion',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
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
						internalType: 'bytes16',
						name: 'subject',
						type: 'bytes16',
					},
					{
						internalType: 'bytes28',
						name: 'cursesHash',
						type: 'bytes28',
					},
				],
				internalType: 'struct RMN.UnvoteToCurseRequest[]',
				name: 'unvoteToCurseRequests',
				type: 'tuple[]',
			},
		],
		name: 'unvoteToCurse',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'commitStore',
						type: 'address',
					},
					{
						internalType: 'bytes32',
						name: 'root',
						type: 'bytes32',
					},
				],
				internalType: 'struct IRMN.TaggedRoot[]',
				name: 'taggedRoots',
				type: 'tuple[]',
			},
		],
		name: 'voteToBless',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes16',
				name: 'curseId',
				type: 'bytes16',
			},
			{
				internalType: 'bytes16[]',
				name: 'subjects',
				type: 'bytes16[]',
			},
		],
		name: 'voteToCurse',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const RMN: Contract<typeof abi> = {
	name: 'RMN',
	address: '0x01f8ac0f88bfd2cf6ba756d64a51ed295b7632a7',
	is_deprecated: false,
	created_at: 1730294292,
	abi: abi,
}
export default RMN
