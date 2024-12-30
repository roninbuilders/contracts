import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint64',
						name: 'chainSelector',
						type: 'uint64',
					},
					{
						internalType: 'uint64',
						name: 'sourceChainSelector',
						type: 'uint64',
					},
					{
						internalType: 'address',
						name: 'onRamp',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'rmnProxy',
						type: 'address',
					},
				],
				internalType: 'struct CommitStore.StaticConfig',
				name: 'staticConfig',
				type: 'tuple',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'expected',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32',
				name: 'actual',
				type: 'bytes32',
			},
		],
		name: 'ConfigDigestMismatch',
		type: 'error',
	},
	{
		inputs: [],
		name: 'CursedByRMN',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'expected',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'actual',
				type: 'uint256',
			},
		],
		name: 'ForkedChain',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidCommitStoreConfig',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'enum OCR2Base.InvalidConfigErrorType',
				name: 'errorType',
				type: 'uint8',
			},
		],
		name: 'InvalidConfig',
		type: 'error',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint64',
						name: 'min',
						type: 'uint64',
					},
					{
						internalType: 'uint64',
						name: 'max',
						type: 'uint64',
					},
				],
				internalType: 'struct CommitStore.Interval',
				name: 'interval',
				type: 'tuple',
			},
		],
		name: 'InvalidInterval',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidProof',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidRoot',
		type: 'error',
	},
	{
		inputs: [],
		name: 'LeavesCannotBeEmpty',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NonUniqueSignatures',
		type: 'error',
	},
	{
		inputs: [],
		name: 'OracleCannotBeZeroAddress',
		type: 'error',
	},
	{
		inputs: [],
		name: 'PausedError',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RootAlreadyCommitted',
		type: 'error',
	},
	{
		inputs: [],
		name: 'SignaturesOutOfRegistration',
		type: 'error',
	},
	{
		inputs: [],
		name: 'StaleReport',
		type: 'error',
	},
	{
		inputs: [],
		name: 'UnauthorizedSigner',
		type: 'error',
	},
	{
		inputs: [],
		name: 'UnauthorizedTransmitter',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'expected',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'actual',
				type: 'uint256',
			},
		],
		name: 'WrongMessageLength',
		type: 'error',
	},
	{
		inputs: [],
		name: 'WrongNumberOfSignatures',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				components: [
					{
						internalType: 'uint64',
						name: 'chainSelector',
						type: 'uint64',
					},
					{
						internalType: 'uint64',
						name: 'sourceChainSelector',
						type: 'uint64',
					},
					{
						internalType: 'address',
						name: 'onRamp',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'rmnProxy',
						type: 'address',
					},
				],
				indexed: false,
				internalType: 'struct CommitStore.StaticConfig',
				name: 'staticConfig',
				type: 'tuple',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'priceRegistry',
						type: 'address',
					},
				],
				indexed: false,
				internalType: 'struct CommitStore.DynamicConfig',
				name: 'dynamicConfig',
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
				internalType: 'uint32',
				name: 'previousConfigBlockNumber',
				type: 'uint32',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'configDigest',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint64',
				name: 'configCount',
				type: 'uint64',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'signers',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'transmitters',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint8',
				name: 'f',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'onchainConfig',
				type: 'bytes',
			},
			{
				indexed: false,
				internalType: 'uint64',
				name: 'offchainConfigVersion',
				type: 'uint64',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'offchainConfig',
				type: 'bytes',
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
				internalType: 'uint40',
				name: 'oldEpochAndRound',
				type: 'uint40',
			},
			{
				indexed: false,
				internalType: 'uint40',
				name: 'newEpochAndRound',
				type: 'uint40',
			},
		],
		name: 'LatestPriceEpochAndRoundSet',
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
				name: 'account',
				type: 'address',
			},
		],
		name: 'Paused',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				components: [
					{
						components: [
							{
								components: [
									{
										internalType: 'address',
										name: 'sourceToken',
										type: 'address',
									},
									{
										internalType: 'uint224',
										name: 'usdPerToken',
										type: 'uint224',
									},
								],
								internalType: 'struct Internal.TokenPriceUpdate[]',
								name: 'tokenPriceUpdates',
								type: 'tuple[]',
							},
							{
								components: [
									{
										internalType: 'uint64',
										name: 'destChainSelector',
										type: 'uint64',
									},
									{
										internalType: 'uint224',
										name: 'usdPerUnitGas',
										type: 'uint224',
									},
								],
								internalType: 'struct Internal.GasPriceUpdate[]',
								name: 'gasPriceUpdates',
								type: 'tuple[]',
							},
						],
						internalType: 'struct Internal.PriceUpdates',
						name: 'priceUpdates',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'uint64',
								name: 'min',
								type: 'uint64',
							},
							{
								internalType: 'uint64',
								name: 'max',
								type: 'uint64',
							},
						],
						internalType: 'struct CommitStore.Interval',
						name: 'interval',
						type: 'tuple',
					},
					{
						internalType: 'bytes32',
						name: 'merkleRoot',
						type: 'bytes32',
					},
				],
				indexed: false,
				internalType: 'struct CommitStore.CommitReport',
				name: 'report',
				type: 'tuple',
			},
		],
		name: 'ReportAccepted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'root',
				type: 'bytes32',
			},
		],
		name: 'RootRemoved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint64',
				name: 'oldSeqNum',
				type: 'uint64',
			},
			{
				indexed: false,
				internalType: 'uint64',
				name: 'newSeqNum',
				type: 'uint64',
			},
		],
		name: 'SequenceNumberSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'configDigest',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint32',
				name: 'epoch',
				type: 'uint32',
			},
		],
		name: 'Transmitted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'Unpaused',
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
		inputs: [],
		name: 'getDynamicConfig',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'priceRegistry',
						type: 'address',
					},
				],
				internalType: 'struct CommitStore.DynamicConfig',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getExpectedNextSequenceNumber',
		outputs: [
			{
				internalType: 'uint64',
				name: '',
				type: 'uint64',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getLatestPriceEpochAndRound',
		outputs: [
			{
				internalType: 'uint64',
				name: '',
				type: 'uint64',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'root',
				type: 'bytes32',
			},
		],
		name: 'getMerkleRoot',
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
		name: 'getStaticConfig',
		outputs: [
			{
				components: [
					{
						internalType: 'uint64',
						name: 'chainSelector',
						type: 'uint64',
					},
					{
						internalType: 'uint64',
						name: 'sourceChainSelector',
						type: 'uint64',
					},
					{
						internalType: 'address',
						name: 'onRamp',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'rmnProxy',
						type: 'address',
					},
				],
				internalType: 'struct CommitStore.StaticConfig',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getTransmitters',
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
				internalType: 'bytes32',
				name: 'root',
				type: 'bytes32',
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
		inputs: [],
		name: 'isUnpausedAndNotCursed',
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
		name: 'latestConfigDetails',
		outputs: [
			{
				internalType: 'uint32',
				name: 'configCount',
				type: 'uint32',
			},
			{
				internalType: 'uint32',
				name: 'blockNumber',
				type: 'uint32',
			},
			{
				internalType: 'bytes32',
				name: 'configDigest',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'latestConfigDigestAndEpoch',
		outputs: [
			{
				internalType: 'bool',
				name: 'scanLogs',
				type: 'bool',
			},
			{
				internalType: 'bytes32',
				name: 'configDigest',
				type: 'bytes32',
			},
			{
				internalType: 'uint32',
				name: 'epoch',
				type: 'uint32',
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
		inputs: [],
		name: 'pause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'paused',
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
				internalType: 'bytes32[]',
				name: 'rootToReset',
				type: 'bytes32[]',
			},
		],
		name: 'resetUnblessedRoots',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint40',
				name: 'latestPriceEpochAndRound',
				type: 'uint40',
			},
		],
		name: 'setLatestPriceEpochAndRound',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint64',
				name: 'minSeqNr',
				type: 'uint64',
			},
		],
		name: 'setMinSeqNr',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'signers',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: 'transmitters',
				type: 'address[]',
			},
			{
				internalType: 'uint8',
				name: 'f',
				type: 'uint8',
			},
			{
				internalType: 'bytes',
				name: 'onchainConfig',
				type: 'bytes',
			},
			{
				internalType: 'uint64',
				name: 'offchainConfigVersion',
				type: 'uint64',
			},
			{
				internalType: 'bytes',
				name: 'offchainConfig',
				type: 'bytes',
			},
		],
		name: 'setOCR2Config',
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
		inputs: [
			{
				internalType: 'bytes32[3]',
				name: 'reportContext',
				type: 'bytes32[3]',
			},
			{
				internalType: 'bytes',
				name: 'report',
				type: 'bytes',
			},
			{
				internalType: 'bytes32[]',
				name: 'rs',
				type: 'bytes32[]',
			},
			{
				internalType: 'bytes32[]',
				name: 'ss',
				type: 'bytes32[]',
			},
			{
				internalType: 'bytes32',
				name: 'rawVs',
				type: 'bytes32',
			},
		],
		name: 'transmit',
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
		inputs: [],
		name: 'unpause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32[]',
				name: 'hashedLeaves',
				type: 'bytes32[]',
			},
			{
				internalType: 'bytes32[]',
				name: 'proofs',
				type: 'bytes32[]',
			},
			{
				internalType: 'uint256',
				name: 'proofFlagBits',
				type: 'uint256',
			},
		],
		name: 'verify',
		outputs: [
			{
				internalType: 'uint256',
				name: 'timestamp',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const
const COMMIT_STORE: Contract<typeof abi> = {
	name: 'Commit Store',
	address: '0x28c66d9693b2634b2f3b170f6d9584eec2f72ff0',
	is_deprecated: false,
	created_at: 1733253150,
	abi: abi,
}
export default COMMIT_STORE
