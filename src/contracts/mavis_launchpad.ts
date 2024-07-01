import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		name: 'AccessControlBadConfirmation',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'neededRole',
				type: 'bytes32',
			},
		],
		name: 'AccessControlUnauthorizedAccount',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'target',
				type: 'address',
			},
		],
		name: 'AddressEmptyCode',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrDuplicatedAllowedUser',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrEnforcedLaunchPause',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrExpectedLaunchPause',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: '',
				type: 'bytes4',
			},
		],
		name: 'ErrFallbackFailed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrFeeExceedsMintPrice',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'currency',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
		],
		name: 'ErrHasValueWhileMintByERC20',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'enum ILaunchpadStructs.StageType',
				name: 'expected',
				type: 'uint8',
			},
		],
		name: 'ErrIncorrectConditionalType',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'enum ILaunchpadStructs.StageType',
				name: 'actual',
				type: 'uint8',
			},
			{
				internalType: 'enum ILaunchpadStructs.StageType',
				name: 'expected',
				type: 'uint8',
			},
		],
		name: 'ErrIncorrectStageType',
		type: 'error',
	},
	{
		inputs: [
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
		name: 'ErrInsufficientTxValue',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidAllowedUser',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidAmountMintablePerReqToken',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidCreator',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidCurrency',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidFeeBasicPoint',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidFeeParty',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidFeeRecipient',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'sumSuppliesCondStg',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'launchSupply',
				type: 'uint256',
			},
		],
		name: 'ErrInvalidLaunchSupply',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidMaxMintablePerWallet',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidMaxSupply',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidRequirementToken',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidSignerAddress',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidStageIndex',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidStageLogicAddress',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidStageTime',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidStageType',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidTierId',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidTokenStandard',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: '',
				type: 'bytes4',
			},
		],
		name: 'ErrLengthMismatch',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'limitPerWallet',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'remainMintable',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'mintQuantity',
				type: 'uint256',
			},
		],
		name: 'ErrLimitPerWalletExceeded',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'remainingSupply',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'mintQuantity',
				type: 'uint256',
			},
		],
		name: 'ErrMaxSupplyExceeded',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'minter',
				type: 'address',
			},
		],
		name: 'ErrMinterNotAllowed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrMismatchMintQtyAndSumReqQty',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrNFTContractExisted',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrNFTContractNotExisted',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: '',
				type: 'bytes4',
			},
		],
		name: 'ErrNotAllowedCallingAccessControl',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'ErrNotOwnRequirementToken',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrNotZeroSupplyForPublicStage',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrStageEnded',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrStageNotStarted',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'sumReqQuantities',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'actualQuantity',
				type: 'uint256',
			},
		],
		name: 'ErrSumReqQuantitiesInsufficient',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'ErrTokenIdRedeemed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrTooMuchConditionalStages',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrUnsupportedNFTInterface',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: '',
				type: 'bytes4',
			},
		],
		name: 'ErrZeroAddress',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrZeroLaunchSupply',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrZeroMintQuantity',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrZeroReqQuantity',
		type: 'error',
	},
	{
		inputs: [],
		name: 'FailedInnerCall',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidInitialization',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NotInitializing',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ReentrancyGuardReentrantCall',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint8',
				name: 'stageIndex',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'allowUsers',
				type: 'address[]',
			},
		],
		name: 'AllowUsersAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint8',
				name: 'stageIndex',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'allowUsers',
				type: 'address[]',
			},
		],
		name: 'AllowUsersRemoved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint64',
				name: 'version',
				type: 'uint64',
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
				name: 'account',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
		],
		name: 'LaunchPaused',
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
			{
				indexed: false,
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
		],
		name: 'LaunchUnpaused',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'enum ILaunchpadStructs.TokenStandard',
				name: 'standard',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'creator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'launchpadSupply',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'allowCumulativeLimit',
				type: 'bool',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'recipient',
						type: 'address',
					},
					{
						internalType: 'uint16',
						name: 'feeBps',
						type: 'uint16',
					},
					{
						internalType: 'enum ILaunchpadStructs.FeeParty',
						name: 'party',
						type: 'uint8',
					},
					{
						internalType: 'uint72',
						name: '_reserved',
						type: 'uint72',
					},
				],
				indexed: false,
				internalType: 'struct ILaunchpadStructs.Allocation[]',
				name: 'allocations',
				type: 'tuple[]',
			},
			{
				components: [
					{
						components: [
							{
								internalType: 'uint64',
								name: 'startTime',
								type: 'uint64',
							},
							{
								internalType: 'uint64',
								name: 'endTime',
								type: 'uint64',
							},
							{
								internalType: 'uint32',
								name: 'maxMintablePerWallet',
								type: 'uint32',
							},
							{
								internalType: 'uint32',
								name: 'maxSupply',
								type: 'uint32',
							},
							{
								internalType: 'uint64',
								name: '_reserved',
								type: 'uint64',
							},
						],
						internalType: 'struct ILaunchpadStructs.GeneralConfigStage',
						name: 'config',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'currency',
								type: 'address',
							},
							{
								internalType: 'uint80',
								name: 'mintPrice',
								type: 'uint80',
							},
							{
								internalType: 'uint16',
								name: '_reserved',
								type: 'uint16',
							},
						],
						internalType: 'struct ILaunchpadStructs.PaymentInfo',
						name: 'paymentInfo',
						type: 'tuple',
					},
				],
				indexed: false,
				internalType: 'struct ILaunchpadStructs.PublicStage',
				name: 'publicStage',
				type: 'tuple',
			},
			{
				indexed: false,
				internalType: 'enum ILaunchpadStructs.StageType[]',
				name: 'stageTypes',
				type: 'uint8[]',
			},
			{
				indexed: false,
				internalType: 'bytes[]',
				name: 'stageDatas',
				type: 'bytes[]',
			},
			{
				indexed: false,
				internalType: 'uint8[]',
				name: 'stageIndexes',
				type: 'uint8[]',
			},
		],
		name: 'LaunchpadDataAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'enum ILaunchpadStructs.TokenStandard',
				name: 'standard',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'creator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'launchpadSupply',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'allowCumulativeLimit',
				type: 'bool',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'recipient',
						type: 'address',
					},
					{
						internalType: 'uint16',
						name: 'feeBps',
						type: 'uint16',
					},
					{
						internalType: 'enum ILaunchpadStructs.FeeParty',
						name: 'party',
						type: 'uint8',
					},
					{
						internalType: 'uint72',
						name: '_reserved',
						type: 'uint72',
					},
				],
				indexed: false,
				internalType: 'struct ILaunchpadStructs.Allocation[]',
				name: 'allocations',
				type: 'tuple[]',
			},
		],
		name: 'LaunchpadDataUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'total',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'totalMintedPerWallet',
				type: 'uint256',
			},
		],
		name: 'MintQuantityRecorded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'nftContract',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'recipient',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'mintQuantity',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: 'isMintAllPossible',
						type: 'bool',
					},
					{
						internalType: 'uint8',
						name: 'stageIndex',
						type: 'uint8',
					},
					{
						internalType: 'bytes',
						name: 'extraData',
						type: 'bytes',
					},
				],
				indexed: false,
				internalType: 'struct ILaunchpadStructs.MintParam',
				name: 'param',
				type: 'tuple',
			},
			{
				indexed: false,
				internalType: 'enum ILaunchpadStructs.StageType',
				name: 'stageType',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'sender',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'minter',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'actualPrice',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'actualMintQuantity',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'mintedIds',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'mintedAmounts',
				type: 'uint256[]',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'recipient',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'value',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct ILaunchpadStructs.PaymentShare[]',
				name: 'shares',
				type: 'tuple[]',
			},
		],
		name: 'MintSuccess',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'launchId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'oldAddress',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newAddress',
				type: 'address',
			},
		],
		name: 'NFTContractUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'enum ILaunchpadStructs.StageType[]',
				name: 'stageTypes',
				type: 'uint8[]',
			},
			{
				indexed: false,
				internalType: 'bytes[]',
				name: 'stageDatas',
				type: 'bytes[]',
			},
			{
				indexed: false,
				internalType: 'uint8[]',
				name: 'newStageIndexes',
				type: 'uint8[]',
			},
		],
		name: 'NewStageInfoAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint8',
				name: 'stageIndex',
				type: 'uint8',
			},
			{
				indexed: true,
				internalType: 'uint8',
				name: 'tierId',
				type: 'uint8',
			},
			{
				components: [
					{
						internalType: 'uint80',
						name: 'mintPrice',
						type: 'uint80',
					},
					{
						internalType: 'uint32',
						name: 'mintableLimit',
						type: 'uint32',
					},
					{
						internalType: 'uint144',
						name: '_reserved',
						type: 'uint144',
					},
				],
				indexed: false,
				internalType: 'struct ILaunchpadStructs.UserTier',
				name: 'userTier',
				type: 'tuple',
			},
		],
		name: 'NewTierAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'reqToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'tokenIds',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'requestRedeemPerIds',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'actualRedeemedPerIds',
				type: 'uint256[]',
			},
		],
		name: 'RequirementTokenRedeemed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'previousAdminRole',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'newAdminRole',
				type: 'bytes32',
			},
		],
		name: 'RoleAdminChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'sender',
				type: 'address',
			},
		],
		name: 'RoleGranted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'sender',
				type: 'address',
			},
		],
		name: 'RoleRevoked',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint8',
				name: 'stageIndex',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'stageData',
				type: 'bytes',
			},
		],
		name: 'StageInfoUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'enum ILaunchpadStructs.StageType[]',
				name: 'stageTypes',
				type: 'uint8[]',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'logicAddrs',
				type: 'address[]',
			},
		],
		name: 'StageLogicUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'newSwapForwarder',
				type: 'address',
			},
		],
		name: 'SwapForwarderUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint8',
				name: 'stageIndex',
				type: 'uint8',
			},
			{
				indexed: true,
				internalType: 'uint8',
				name: 'tierId',
				type: 'uint8',
			},
			{
				components: [
					{
						internalType: 'uint80',
						name: 'mintPrice',
						type: 'uint80',
					},
					{
						internalType: 'uint32',
						name: 'mintableLimit',
						type: 'uint32',
					},
					{
						internalType: 'uint144',
						name: '_reserved',
						type: 'uint144',
					},
				],
				indexed: false,
				internalType: 'struct ILaunchpadStructs.UserTier',
				name: 'userTier',
				type: 'tuple',
			},
		],
		name: 'TierInfoUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint8',
				name: 'stageIndex',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'uint8[]',
				name: 'tierIds',
				type: 'uint8[]',
			},
			{
				indexed: false,
				internalType: 'address[][]',
				name: 'usersByTier',
				type: 'address[][]',
			},
		],
		name: 'UsersAssignedToTier',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'wron',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'wronHelper',
				type: 'address',
			},
		],
		name: 'WronConfigUpdated',
		type: 'event',
	},
	{
		inputs: [],
		name: 'DEFAULT_ADMIN_ROLE',
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
		name: 'OPERATOR_ROLE',
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
		name: 'PAUSER_ROLE',
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
				name: 'nftContract',
				type: 'address',
			},
			{
				internalType: 'uint8',
				name: 'stageIndex',
				type: 'uint8',
			},
			{
				internalType: 'address[]',
				name: 'allowUsers',
				type: 'address[]',
			},
		],
		name: 'addAllowUsers',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
			{
				internalType: 'enum ILaunchpadStructs.TokenStandard',
				name: 'standard',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: 'creator',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'launchpadSupply',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'allowCumulativeLimit',
				type: 'bool',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'recipient',
						type: 'address',
					},
					{
						internalType: 'uint16',
						name: 'feeBps',
						type: 'uint16',
					},
					{
						internalType: 'enum ILaunchpadStructs.FeeParty',
						name: 'party',
						type: 'uint8',
					},
					{
						internalType: 'uint72',
						name: '_reserved',
						type: 'uint72',
					},
				],
				internalType: 'struct ILaunchpadStructs.Allocation[]',
				name: 'allocations',
				type: 'tuple[]',
			},
			{
				components: [
					{
						components: [
							{
								internalType: 'uint64',
								name: 'startTime',
								type: 'uint64',
							},
							{
								internalType: 'uint64',
								name: 'endTime',
								type: 'uint64',
							},
							{
								internalType: 'uint32',
								name: 'maxMintablePerWallet',
								type: 'uint32',
							},
							{
								internalType: 'uint32',
								name: 'maxSupply',
								type: 'uint32',
							},
							{
								internalType: 'uint64',
								name: '_reserved',
								type: 'uint64',
							},
						],
						internalType: 'struct ILaunchpadStructs.GeneralConfigStage',
						name: 'config',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'currency',
								type: 'address',
							},
							{
								internalType: 'uint80',
								name: 'mintPrice',
								type: 'uint80',
							},
							{
								internalType: 'uint16',
								name: '_reserved',
								type: 'uint16',
							},
						],
						internalType: 'struct ILaunchpadStructs.PaymentInfo',
						name: 'paymentInfo',
						type: 'tuple',
					},
				],
				internalType: 'struct ILaunchpadStructs.PublicStage',
				name: 'publicStage',
				type: 'tuple',
			},
			{
				internalType: 'enum ILaunchpadStructs.StageType[]',
				name: 'conditionalTypes',
				type: 'uint8[]',
			},
			{
				internalType: 'bytes[]',
				name: 'conditionalStages',
				type: 'bytes[]',
			},
		],
		name: 'addNewLaunchpad',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
			{
				internalType: 'enum ILaunchpadStructs.StageType[]',
				name: 'conditionalTypes',
				type: 'uint8[]',
			},
			{
				internalType: 'bytes[]',
				name: 'conditionalStages',
				type: 'bytes[]',
			},
		],
		name: 'addNewStageInfos',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
			{
				internalType: 'uint8',
				name: 'stageIndex',
				type: 'uint8',
			},
			{
				components: [
					{
						internalType: 'uint80',
						name: 'mintPrice',
						type: 'uint80',
					},
					{
						internalType: 'uint32',
						name: 'mintableLimit',
						type: 'uint32',
					},
					{
						internalType: 'uint144',
						name: '_reserved',
						type: 'uint144',
					},
				],
				internalType: 'struct ILaunchpadStructs.UserTier',
				name: 'userTier',
				type: 'tuple',
			},
		],
		name: 'addNewTierInfo',
		outputs: [
			{
				internalType: 'uint8',
				name: 'newTierId',
				type: 'uint8',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
			{
				internalType: 'uint8',
				name: 'stageIndex',
				type: 'uint8',
			},
			{
				internalType: 'uint8[]',
				name: 'tierIds',
				type: 'uint8[]',
			},
			{
				internalType: 'address[][]',
				name: 'usersByTier',
				type: 'address[][]',
			},
		],
		name: 'assignUsersToTier',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
			{
				internalType: 'uint8',
				name: 'stageIndex',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: 'minter',
				type: 'address',
			},
		],
		name: 'checkIsEligible',
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
				internalType: 'enum ILaunchpadStructs.StageType',
				name: 'stageType',
				type: 'uint8',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'execute',
		outputs: [
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getAllConstants',
		outputs: [
			{
				internalType: 'uint256',
				name: 'maxPercentage',
				type: 'uint256',
			},
			{
				internalType: 'uint32',
				name: 'infiniteLimit',
				type: 'uint32',
			},
			{
				internalType: 'uint8',
				name: 'publicStageIndex',
				type: 'uint8',
			},
			{
				internalType: 'uint64',
				name: 'infiniteTimestamp',
				type: 'uint64',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getAllLaunchpads',
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
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
		],
		name: 'getAllStages',
		outputs: [
			{
				internalType: 'uint256[][3]',
				name: 'stageIndexes',
				type: 'uint256[][3]',
			},
			{
				components: [
					{
						components: [
							{
								internalType: 'uint64',
								name: 'startTime',
								type: 'uint64',
							},
							{
								internalType: 'uint64',
								name: 'endTime',
								type: 'uint64',
							},
							{
								internalType: 'uint32',
								name: 'maxMintablePerWallet',
								type: 'uint32',
							},
							{
								internalType: 'uint32',
								name: 'maxSupply',
								type: 'uint32',
							},
							{
								internalType: 'uint64',
								name: '_reserved',
								type: 'uint64',
							},
						],
						internalType: 'struct ILaunchpadStructs.GeneralConfigStage',
						name: 'config',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'currency',
								type: 'address',
							},
							{
								internalType: 'uint80',
								name: 'mintPrice',
								type: 'uint80',
							},
							{
								internalType: 'uint16',
								name: '_reserved',
								type: 'uint16',
							},
						],
						internalType: 'struct ILaunchpadStructs.PaymentInfo',
						name: 'paymentInfo',
						type: 'tuple',
					},
				],
				internalType: 'struct ILaunchpadStructs.PublicStage',
				name: '',
				type: 'tuple',
			},
			{
				components: [
					{
						components: [
							{
								internalType: 'uint64',
								name: 'startTime',
								type: 'uint64',
							},
							{
								internalType: 'uint64',
								name: 'endTime',
								type: 'uint64',
							},
							{
								internalType: 'uint32',
								name: 'maxMintablePerWallet',
								type: 'uint32',
							},
							{
								internalType: 'uint32',
								name: 'maxSupply',
								type: 'uint32',
							},
							{
								internalType: 'uint64',
								name: '_reserved',
								type: 'uint64',
							},
						],
						internalType: 'struct ILaunchpadStructs.GeneralConfigStage',
						name: 'config',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'currency',
								type: 'address',
							},
							{
								internalType: 'uint80',
								name: 'mintPrice',
								type: 'uint80',
							},
							{
								internalType: 'uint16',
								name: '_reserved',
								type: 'uint16',
							},
						],
						internalType: 'struct ILaunchpadStructs.PaymentInfo',
						name: 'paymentInfo',
						type: 'tuple',
					},
				],
				internalType: 'struct ILaunchpadStructs.AllowListStage[]',
				name: '',
				type: 'tuple[]',
			},
			{
				components: [
					{
						components: [
							{
								internalType: 'uint64',
								name: 'startTime',
								type: 'uint64',
							},
							{
								internalType: 'uint64',
								name: 'endTime',
								type: 'uint64',
							},
							{
								internalType: 'uint32',
								name: 'maxMintablePerWallet',
								type: 'uint32',
							},
							{
								internalType: 'uint32',
								name: 'maxSupply',
								type: 'uint32',
							},
							{
								internalType: 'uint64',
								name: '_reserved',
								type: 'uint64',
							},
						],
						internalType: 'struct ILaunchpadStructs.GeneralConfigStage',
						name: 'config',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'address',
								name: 'currency',
								type: 'address',
							},
							{
								internalType: 'uint80',
								name: 'mintPrice',
								type: 'uint80',
							},
							{
								internalType: 'uint16',
								name: '_reserved',
								type: 'uint16',
							},
						],
						internalType: 'struct ILaunchpadStructs.PaymentInfo',
						name: 'paymentInfo',
						type: 'tuple',
					},
					{
						internalType: 'address',
						name: 'allowedToken',
						type: 'address',
					},
					{
						internalType: 'uint32',
						name: 'limitQtyPerReqToken',
						type: 'uint32',
					},
					{
						internalType: 'uint64',
						name: '_reserved',
						type: 'uint64',
					},
				],
				internalType: 'struct ILaunchpadStructs.TokenGatedStage[]',
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
				name: 'nftContract',
				type: 'address',
			},
		],
		name: 'getLaunchpadData',
		outputs: [
			{
				internalType: 'address',
				name: 'creator',
				type: 'address',
			},
			{
				internalType: 'enum ILaunchpadStructs.TokenStandard',
				name: 'standard',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: 'launchSupply',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'allowCumulativeLimit',
				type: 'bool',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'recipient',
						type: 'address',
					},
					{
						internalType: 'uint16',
						name: 'feeBps',
						type: 'uint16',
					},
					{
						internalType: 'enum ILaunchpadStructs.FeeParty',
						name: 'party',
						type: 'uint8',
					},
					{
						internalType: 'uint72',
						name: '_reserved',
						type: 'uint72',
					},
				],
				internalType: 'struct ILaunchpadStructs.Allocation[]',
				name: 'allocs',
				type: 'tuple[]',
			},
			{
				internalType: 'uint256',
				name: 'latestStageIndex',
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
				name: 'nftContract',
				type: 'address',
			},
			{
				internalType: 'uint8',
				name: 'stageIndex',
				type: 'uint8',
			},
		],
		name: 'getMintedQtyAtStage',
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
				name: 'nftContract',
				type: 'address',
			},
			{
				internalType: 'uint8',
				name: 'stageIndex',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
		],
		name: 'getMintedQtyByUserAtStage',
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
				name: 'nftContract',
				type: 'address',
			},
			{
				internalType: 'uint8',
				name: 'stageIndex',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: 'reqToken',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: 'tokenIds',
				type: 'uint256[]',
			},
		],
		name: 'getRedeemedInfos',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'redeemedAmounts',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: 'remainAmounts',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
		],
		name: 'getRoleAdmin',
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
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'index',
				type: 'uint256',
			},
		],
		name: 'getRoleMember',
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
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
		],
		name: 'getRoleMemberCount',
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
				internalType: 'enum ILaunchpadStructs.StageType[]',
				name: 'stageTypes',
				type: 'uint8[]',
			},
		],
		name: 'getStageLogicsOf',
		outputs: [
			{
				internalType: 'address[]',
				name: 'logics',
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
				name: 'nftContract',
				type: 'address',
			},
			{
				internalType: 'uint8',
				name: 'stageIndex',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
		],
		name: 'getTierOfUser',
		outputs: [
			{
				internalType: 'bool',
				name: 'hasTier',
				type: 'bool',
			},
			{
				components: [
					{
						internalType: 'uint80',
						name: 'mintPrice',
						type: 'uint80',
					},
					{
						internalType: 'uint32',
						name: 'mintableLimit',
						type: 'uint32',
					},
					{
						internalType: 'uint144',
						name: '_reserved',
						type: 'uint144',
					},
				],
				internalType: 'struct ILaunchpadStructs.UserTier',
				name: 'tierInfo',
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
				name: 'nftContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
		],
		name: 'getTotalMintedByUser',
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
				name: 'nftContract',
				type: 'address',
			},
		],
		name: 'getTotalMintedOfNFTContract',
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
		name: 'getWronConfigs',
		outputs: [
			{
				internalType: 'address',
				name: 'wron',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'wronHelper',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'grantRole',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'hasRole',
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
				name: 'admin',
				type: 'address',
			},
			{
				internalType: 'address[]',
				name: 'operators',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: 'pausers',
				type: 'address[]',
			},
			{
				internalType: 'address',
				name: 'wron',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'wronHelper',
				type: 'address',
			},
			{
				internalType: 'enum ILaunchpadStructs.StageType[]',
				name: 'stageTypes',
				type: 'uint8[]',
			},
			{
				internalType: 'address[]',
				name: 'logicAddrs',
				type: 'address[]',
			},
			{
				internalType: 'address',
				name: 'swapForwarder',
				type: 'address',
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
				internalType: 'address',
				name: 'forwarder',
				type: 'address',
			},
		],
		name: 'isTrustedForwarder',
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
				name: 'nftContract',
				type: 'address',
			},
		],
		name: 'pauseLaunch',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
		],
		name: 'pausedOf',
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
				name: 'nftContract',
				type: 'address',
			},
			{
				internalType: 'uint8',
				name: 'stageIndex',
				type: 'uint8',
			},
			{
				internalType: 'address[]',
				name: 'allowUsers',
				type: 'address[]',
			},
		],
		name: 'removeAllowUsers',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'callerConfirmation',
				type: 'address',
			},
		],
		name: 'renounceRole',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'revokeRole',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum ILaunchpadStructs.StageType[]',
				name: 'stageTypes',
				type: 'uint8[]',
			},
			{
				internalType: 'address[]',
				name: 'logicAddrs',
				type: 'address[]',
			},
		],
		name: 'setStageLogicAddresses',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'swapForwarder',
				type: 'address',
			},
		],
		name: 'setSwapForwarder',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'wron',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'wronHelper',
				type: 'address',
			},
		],
		name: 'setWronConfigs',
		outputs: [],
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
		inputs: [],
		name: 'trustedForwarder',
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
				name: 'nftContract',
				type: 'address',
			},
		],
		name: 'unpauseLaunch',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
			{
				internalType: 'enum ILaunchpadStructs.TokenStandard',
				name: 'standard',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: 'creator',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'launchpadSupply',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'allowCumulativeLimit',
				type: 'bool',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'recipient',
						type: 'address',
					},
					{
						internalType: 'uint16',
						name: 'feeBps',
						type: 'uint16',
					},
					{
						internalType: 'enum ILaunchpadStructs.FeeParty',
						name: 'party',
						type: 'uint8',
					},
					{
						internalType: 'uint72',
						name: '_reserved',
						type: 'uint72',
					},
				],
				internalType: 'struct ILaunchpadStructs.Allocation[]',
				name: 'allocations',
				type: 'tuple[]',
			},
		],
		name: 'updateLaunchpadInfo',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'oldNftContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'newNftContract',
				type: 'address',
			},
		],
		name: 'updateNftContract',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
			{
				internalType: 'uint8',
				name: 'stageIndex',
				type: 'uint8',
			},
			{
				internalType: 'bytes',
				name: 'stageData',
				type: 'bytes',
			},
		],
		name: 'updateStageInfo',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nftContract',
				type: 'address',
			},
			{
				internalType: 'uint8',
				name: 'stageIndex',
				type: 'uint8',
			},
			{
				internalType: 'uint8',
				name: 'tierId',
				type: 'uint8',
			},
			{
				components: [
					{
						internalType: 'uint80',
						name: 'mintPrice',
						type: 'uint80',
					},
					{
						internalType: 'uint32',
						name: 'mintableLimit',
						type: 'uint32',
					},
					{
						internalType: 'uint144',
						name: '_reserved',
						type: 'uint144',
					},
				],
				internalType: 'struct ILaunchpadStructs.UserTier',
				name: 'userTier',
				type: 'tuple',
			},
		],
		name: 'updateTierInfo',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const MAVIS_LAUNCHPAD: Contract<typeof abi> = {
	name: 'Mavis Launchpad',
	address: '0xcc586c388ba7449e885848033ee8350dc8cdd4a3',
	is_deprecated: false,
	created_at: 1719561138,
	abi: abi,
}
export default MAVIS_LAUNCHPAD
