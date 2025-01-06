import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_judge',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_withdrawJudge',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'BattleAlreadyClaimed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'BattleAlreadyMatched',
		type: 'error',
	},
	{
		inputs: [],
		name: 'BattleAlreadyNullified',
		type: 'error',
	},
	{
		inputs: [],
		name: 'BattleNotMatched',
		type: 'error',
	},
	{
		inputs: [],
		name: 'BattleSelfForbidden',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ClaimFromNonParticipant',
		type: 'error',
	},
	{
		inputs: [],
		name: 'EthFeeNumerTooHigh',
		type: 'error',
	},
	{
		inputs: [],
		name: 'EthStakeMustMatchMsgValue',
		type: 'error',
	},
	{
		inputs: [],
		name: 'EthStakeNotUnique',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ExceedsMaximumUniqueStakes',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ExistingStakes',
		type: 'error',
	},
	{
		inputs: [],
		name: 'FeeTooLow',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ForgedSignature',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ForgedWithdrawSignature',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidShortString',
		type: 'error',
	},
	{
		inputs: [],
		name: 'MustHaveStake',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NotAllowedParticipant',
		type: 'error',
	},
	{
		inputs: [],
		name: 'OnlyInitiatorCanNullify',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'str',
				type: 'string',
			},
		],
		name: 'StringTooLong',
		type: 'error',
	},
	{
		inputs: [],
		name: 'TransferFailed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'UniqueJudge',
		type: 'error',
	},
	{
		inputs: [],
		name: 'UserAlreadyWithdrawn',
		type: 'error',
	},
	{
		inputs: [],
		name: 'WithdrawFromNonParticipant',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ZeroAddressNotAllowed',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'battleId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'caller',
				type: 'address',
			},
		],
		name: 'BattleCanceled',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'battleId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'playerOne',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'playerTwo',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'assetEnum',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'contractAddr',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'amtOrTokenId',
				type: 'uint256[]',
			},
		],
		name: 'BattleInitialized',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'battleId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'playerOne',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'playerTwo',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'assetEnum',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'contractAddr',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'amtOrTokenId',
				type: 'uint256[]',
			},
		],
		name: 'BattleJoined',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'battleId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'caller',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'counterparty',
				type: 'address',
			},
		],
		name: 'BattleNullified',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'battleId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'winner',
				type: 'address',
			},
		],
		name: 'BattleWon',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [],
		name: 'EIP712DomainChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'ethFeeNumer',
				type: 'uint256',
			},
		],
		name: 'EthFeeNumerChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'feeChanged',
				type: 'uint256',
			},
		],
		name: 'FeeChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'newJudge',
				type: 'address',
			},
		],
		name: 'JudgeChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
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
				indexed: true,
				internalType: 'address',
				name: 'newWithdrawJudge',
				type: 'address',
			},
		],
		name: 'WithdrawJudgeChanged',
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
		name: 'battles',
		outputs: [
			{
				internalType: 'bool',
				name: 'claimed',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: 'matched',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: 'nullified',
				type: 'bool',
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'bool',
						name: 'isWinner',
						type: 'bool',
					},
					{
						internalType: 'bool',
						name: 'hasWithdrawn',
						type: 'bool',
					},
					{
						internalType: 'address',
						name: 'user',
						type: 'address',
					},
					{
						components: [
							{
								internalType: 'enum IBatchEscrow.AssetType',
								name: 'asset',
								type: 'uint8',
							},
							{
								internalType: 'address',
								name: 'contractAddr',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'amtOrTokenId',
								type: 'uint256',
							},
						],
						internalType: 'struct IBatchEscrow.BatchStake[]',
						name: 'stakes',
						type: 'tuple[]',
					},
				],
				internalType: 'struct IBatchBattle.BattleParticipant',
				name: 'one',
				type: 'tuple',
			},
			{
				components: [
					{
						internalType: 'bool',
						name: 'isWinner',
						type: 'bool',
					},
					{
						internalType: 'bool',
						name: 'hasWithdrawn',
						type: 'bool',
					},
					{
						internalType: 'address',
						name: 'user',
						type: 'address',
					},
					{
						components: [
							{
								internalType: 'enum IBatchEscrow.AssetType',
								name: 'asset',
								type: 'uint8',
							},
							{
								internalType: 'address',
								name: 'contractAddr',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'amtOrTokenId',
								type: 'uint256',
							},
						],
						internalType: 'struct IBatchEscrow.BatchStake[]',
						name: 'stakes',
						type: 'tuple[]',
					},
				],
				internalType: 'struct IBatchBattle.BattleParticipant',
				name: 'two',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'battleId',
				type: 'uint256',
			},
		],
		name: 'calcEthFee',
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
				name: 'feeNumer',
				type: 'uint256',
			},
		],
		name: 'changeEthFeeNumer',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'fee',
				type: 'uint256',
			},
		],
		name: 'changeFee',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newJudge',
				type: 'address',
			},
		],
		name: 'changeJudge',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newWithdrawJudge',
				type: 'address',
			},
		],
		name: 'changeWithdrawJudge',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'battleId',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'signature',
				type: 'bytes',
			},
		],
		name: 'claimProceeds',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'eip712Domain',
		outputs: [
			{
				internalType: 'bytes1',
				name: 'fields',
				type: 'bytes1',
			},
			{
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'version',
				type: 'string',
			},
			{
				internalType: 'uint256',
				name: 'chainId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'verifyingContract',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'salt',
				type: 'bytes32',
			},
			{
				internalType: 'uint256[]',
				name: 'extensions',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'battleId',
				type: 'uint256',
			},
		],
		name: 'emergencyRefund',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address payable',
				name: 'payee',
				type: 'address',
			},
		],
		name: 'emergencyWithdraw',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address payable',
				name: 'payee',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
		],
		name: 'emergencyWithdrawERC20',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address payable',
				name: 'payee',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'nft',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'emergencyWithdrawERC721',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'escrowAddr',
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
		name: 'ethFeeNumer',
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
				name: 'battleId',
				type: 'uint256',
			},
		],
		name: 'getBattle',
		outputs: [
			{
				components: [
					{
						internalType: 'bool',
						name: 'claimed',
						type: 'bool',
					},
					{
						internalType: 'bool',
						name: 'matched',
						type: 'bool',
					},
					{
						internalType: 'bool',
						name: 'nullified',
						type: 'bool',
					},
					{
						internalType: 'uint256',
						name: 'value',
						type: 'uint256',
					},
					{
						components: [
							{
								internalType: 'bool',
								name: 'isWinner',
								type: 'bool',
							},
							{
								internalType: 'bool',
								name: 'hasWithdrawn',
								type: 'bool',
							},
							{
								internalType: 'address',
								name: 'user',
								type: 'address',
							},
							{
								components: [
									{
										internalType: 'enum IBatchEscrow.AssetType',
										name: 'asset',
										type: 'uint8',
									},
									{
										internalType: 'address',
										name: 'contractAddr',
										type: 'address',
									},
									{
										internalType: 'uint256',
										name: 'amtOrTokenId',
										type: 'uint256',
									},
								],
								internalType: 'struct IBatchEscrow.BatchStake[]',
								name: 'stakes',
								type: 'tuple[]',
							},
						],
						internalType: 'struct IBatchBattle.BattleParticipant',
						name: 'one',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'bool',
								name: 'isWinner',
								type: 'bool',
							},
							{
								internalType: 'bool',
								name: 'hasWithdrawn',
								type: 'bool',
							},
							{
								internalType: 'address',
								name: 'user',
								type: 'address',
							},
							{
								components: [
									{
										internalType: 'enum IBatchEscrow.AssetType',
										name: 'asset',
										type: 'uint8',
									},
									{
										internalType: 'address',
										name: 'contractAddr',
										type: 'address',
									},
									{
										internalType: 'uint256',
										name: 'amtOrTokenId',
										type: 'uint256',
									},
								],
								internalType: 'struct IBatchEscrow.BatchStake[]',
								name: 'stakes',
								type: 'tuple[]',
							},
						],
						internalType: 'struct IBatchBattle.BattleParticipant',
						name: 'two',
						type: 'tuple',
					},
				],
				internalType: 'struct IBatchBattle.Battle',
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
				components: [
					{
						internalType: 'uint256',
						name: 'battleId',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'account',
						type: 'address',
					},
				],
				internalType: 'struct IBatchBattle.Claim',
				name: 'claim',
				type: 'tuple',
			},
		],
		name: 'getClaimTypedDataHash',
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
				internalType: 'address',
				name: 'challenging',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'enum IBatchEscrow.AssetType',
						name: 'asset',
						type: 'uint8',
					},
					{
						internalType: 'address',
						name: 'contractAddr',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'amtOrTokenId',
						type: 'uint256',
					},
				],
				internalType: 'struct IBatchEscrow.BatchStake[]',
				name: 'stakes',
				type: 'tuple[]',
			},
		],
		name: 'initBattle',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'battleId',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'enum IBatchEscrow.AssetType',
						name: 'asset',
						type: 'uint8',
					},
					{
						internalType: 'address',
						name: 'contractAddr',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'amtOrTokenId',
						type: 'uint256',
					},
				],
				internalType: 'struct IBatchEscrow.BatchStake[]',
				name: 'stakes',
				type: 'tuple[]',
			},
		],
		name: 'joinBattle',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'judge',
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
		name: 'nextBattleId',
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
				name: 'battleId',
				type: 'uint256',
			},
		],
		name: 'nullifyBattle',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		name: 'onERC721Received',
		outputs: [
			{
				internalType: 'bytes4',
				name: '',
				type: 'bytes4',
			},
		],
		stateMutability: 'nonpayable',
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
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newOwner',
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
		name: 'withdrawFee',
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
		name: 'withdrawJudge',
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
				name: 'battleId',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: 'signature',
				type: 'bytes',
			},
		],
		name: 'withdrawStake',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const DUEL_ARENA_BATTLE: Contract<typeof abi> = {
	name: 'Duel Arena Battle',
	address: '0xe3a360efad2f1dabfbfa3c354840dd64c7f9f0fb',
	is_deprecated: false,
	created_at: 1735578030,
	abi: abi,
}
export default DUEL_ARENA_BATTLE
