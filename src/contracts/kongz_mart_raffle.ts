import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		name: 'ErrAlreadyRefunded',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrArrLengthMismatch',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrClaimPaused',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrFulfilled',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrNoIndexFound',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrNoRefund',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrNoRewardsLeft',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrNotVXorGenakaiHolder',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrRaffleNotResolved',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrRaffleResolved',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrWrongPlayer',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrWrongRewardType',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrWrongWinner',
		type: 'error',
	},
	{
		inputs: [],
		name: 'OnlyCoordinatorCanFulfill',
		type: 'error',
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
		inputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		name: 'VRFReqHashToRaffleVRFData',
		outputs: [
			{
				internalType: 'bool',
				name: 'fulfilled',
				type: 'bool',
			},
			{
				internalType: 'uint256',
				name: 'raffleId',
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
				name: '',
				type: 'address',
			},
		],
		name: 'authorisedCallers',
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
		name: 'banana',
		outputs: [
			{
				internalType: 'contract IERC20',
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
				internalType: 'bool',
				name: '_isNoLoss',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: '_isStopped',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: '_isNFT',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: '_isNative',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: '_lockEnforced',
				type: 'bool',
			},
			{
				internalType: 'uint128',
				name: '_minAmount',
				type: 'uint128',
			},
			{
				internalType: 'uint256',
				name: '_numWinners',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_startTs',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_endTs',
				type: 'uint256',
			},
		],
		name: 'createRaffle',
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
		],
		name: 'genkaitoRaffleId',
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
				internalType: 'uint256[]',
				name: '_raffleIds',
				type: 'uint256[]',
			},
			{
				internalType: 'address',
				name: '_player',
				type: 'address',
			},
		],
		name: 'getPlayerParticipationCounts',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
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
				name: '_raffleId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_player',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_startIndex',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_maxLen',
				type: 'uint256',
			},
		],
		name: 'getPlayerRaffleParticipations',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'player',
						type: 'address',
					},
					{
						internalType: 'bool',
						name: 'isRefunded',
						type: 'bool',
					},
					{
						internalType: 'uint256',
						name: 'amount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'playerRangeMax',
						type: 'uint256',
					},
				],
				internalType: 'struct KongzMartRaffle.ParticipationSlice[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_raffleId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_startIndex',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_maxLen',
				type: 'uint256',
			},
		],
		name: 'getRaffleParticipations',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'player',
						type: 'address',
					},
					{
						internalType: 'bool',
						name: 'isRefunded',
						type: 'bool',
					},
					{
						internalType: 'uint256',
						name: 'amount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'playerRangeMax',
						type: 'uint256',
					},
				],
				internalType: 'struct KongzMartRaffle.ParticipationSlice[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_raffleId',
				type: 'uint256',
			},
		],
		name: 'getRaffleWinners',
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
				internalType: 'uint256[]',
				name: '_ids',
				type: 'uint256[]',
			},
		],
		name: 'getRaffles',
		outputs: [
			{
				components: [
					{
						internalType: 'bool',
						name: 'isNoLoss',
						type: 'bool',
					},
					{
						internalType: 'bool',
						name: 'isStopped',
						type: 'bool',
					},
					{
						internalType: 'bool',
						name: 'isNFT',
						type: 'bool',
					},
					{
						internalType: 'bool',
						name: 'isNativeToken',
						type: 'bool',
					},
					{
						internalType: 'bool',
						name: 'lockEnforced',
						type: 'bool',
					},
					{
						internalType: 'bool',
						name: 'finalized',
						type: 'bool',
					},
					{
						internalType: 'uint128',
						name: 'minAmount',
						type: 'uint128',
					},
					{
						internalType: 'uint256',
						name: 'winnerAmount',
						type: 'uint256',
					},
					{
						internalType: 'bytes32',
						name: 'VRFReqHash',
						type: 'bytes32',
					},
					{
						internalType: 'uint256',
						name: 'startTs',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'endTs',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'participationsCount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'totalAmount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'seed',
						type: 'uint256',
					},
				],
				internalType: 'struct KongzMartRaffle.Raffle[]',
				name: '',
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
				name: '_user',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: '_raffleId',
				type: 'uint256[]',
			},
		],
		name: 'getUserRaffleTicketIds',
		outputs: [
			{
				internalType: 'uint256[][]',
				name: '',
				type: 'uint256[][]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
		],
		name: 'getWinnerIds',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_banana',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_vrfCoordinator',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_genkai',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_vx',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_treasury',
				type: 'address',
			},
		],
		name: 'initialize',
		stateMutability: 'nonpayable',
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
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'lockedEnumPerUser',
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
				name: '',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		name: 'onERC1155BatchReceived',
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
		name: 'onERC1155Received',
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
		inputs: [
			{
				internalType: 'uint256',
				name: '_raffleId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_genkaiId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_vxId',
				type: 'uint256',
			},
		],
		name: 'participateToRaffle',
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'raffleCounter',
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
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'raffleIndexWinners',
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
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'raffleParticipations',
		outputs: [
			{
				internalType: 'address',
				name: 'player',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'isRefunded',
				type: 'bool',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'playerRangeMax',
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
		],
		name: 'raffleUserParticipations',
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
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'raffleUserParticipationsCount',
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
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'raffleWinners',
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
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'raffleWinnersArr',
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
		name: 'raffles',
		outputs: [
			{
				internalType: 'bool',
				name: 'isNoLoss',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: 'isStopped',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: 'isNFT',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: 'isNativeToken',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: 'lockEnforced',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: 'finalized',
				type: 'bool',
			},
			{
				internalType: 'uint128',
				name: 'minAmount',
				type: 'uint128',
			},
			{
				internalType: 'uint256',
				name: 'winnerAmount',
				type: 'uint256',
			},
			{
				internalType: 'bytes32',
				name: 'VRFReqHash',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'startTs',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'endTs',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'participationsCount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'totalAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'seed',
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
				name: '_reqHash',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: '_randomSeed',
				type: 'uint256',
			},
		],
		name: 'rawFulfillRandomSeed',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_raffleId',
				type: 'uint256',
			},
		],
		name: 'refundLostRaffle',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: '_tokenTypes',
				type: 'uint256[]',
			},
			{
				internalType: 'address[]',
				name: '_tokenAddresses',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_tokenIds',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_tokenAmounts',
				type: 'uint256[]',
			},
		],
		name: 'rescueAssets',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_raffleId',
				type: 'uint256',
			},
		],
		name: 'resolveRaffleStep1',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_raffleId',
				type: 'uint256',
			},
			{
				internalType: 'uint256[]',
				name: '_winnerIndexes',
				type: 'uint256[]',
			},
		],
		name: 'resolveRaffleStep2',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_caller',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: '_value',
				type: 'bool',
			},
		],
		name: 'setCaller',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_treasury',
				type: 'address',
			},
		],
		name: 'setTreasury',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'interfaceId',
				type: 'bytes4',
			},
		],
		name: 'supportsInterface',
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
				internalType: 'bool',
				name: '_value',
				type: 'bool',
			},
		],
		name: 'togglePause',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'totalLockedPerUser',
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
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'transferOwnership',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'unlockAssets',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_startIndex',
				type: 'uint256',
			},
		],
		name: 'unlockGenkai',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_startIndex',
				type: 'uint256',
			},
		],
		name: 'unlockVx',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_raffleId',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: '_isNoLoss',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: '_isStopped',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: '_isNFT',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: '_isNative',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: '_lockEnforced',
				type: 'bool',
			},
			{
				internalType: 'uint128',
				name: '_minAmount',
				type: 'uint128',
			},
			{
				internalType: 'uint256',
				name: '_numWinners',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_startTs',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_endTs',
				type: 'uint256',
			},
		],
		name: 'updateRaffle',
		stateMutability: 'nonpayable',
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
		name: 'userRaffleTicketIds',
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
				name: '_user',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_len',
				type: 'uint256',
			},
		],
		name: 'viewGenkaiLockedPerUser',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_user',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_len',
				type: 'uint256',
			},
		],
		name: 'viewVxLockerPerUser',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'vrfCoordinator',
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
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'vxLockedEnumPerUser',
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
		name: 'vxToRaffleId',
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
				name: '',
				type: 'address',
			},
		],
		name: 'vxTotalLockedPerUser',
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
				name: '',
				type: 'address',
			},
		],
		name: 'winnerIDCounter',
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
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'winnerIDs',
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
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const KONGZ_MART_RAFFLE: Contract<typeof abi> = {
	name: 'Kongz Mart Raffle',
	address: '0x71e4863fa46bee2f86bf80a2162b55143de06675',
	is_deprecated: false,
	created_at: 1729516817,
	abi: abi,
}
export default KONGZ_MART_RAFFLE
