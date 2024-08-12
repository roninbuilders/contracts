import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		name: 'ErrFullfilled',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidRonCost',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidTier',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrNotEnoughGs',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrNotOwner',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrPotion',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrToomanyRuns',
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
				indexed: true,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'vx',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'bool',
						name: 'eventSuccess',
						type: 'bool',
					},
					{
						internalType: 'uint8',
						name: 'state',
						type: 'uint8',
					},
					{
						internalType: 'uint8',
						name: 'tier',
						type: 'uint8',
					},
					{
						internalType: 'uint8',
						name: 'encounterId',
						type: 'uint8',
					},
					{
						internalType: 'uint8',
						name: 'deductedHp',
						type: 'uint8',
					},
					{
						internalType: 'uint16',
						name: 'expEarned',
						type: 'uint16',
					},
					{
						internalType: 'uint16',
						name: 'kongiumEarned',
						type: 'uint16',
					},
					{
						internalType: 'uint16',
						name: 'fallbackKongium',
						type: 'uint16',
					},
					{
						internalType: 'uint16',
						name: 'eventData',
						type: 'uint16',
					},
				],
				indexed: false,
				internalType: 'struct IJungleLogic.GameData',
				name: 'gData',
				type: 'tuple',
			},
			{
				components: [
					{
						internalType: 'uint8',
						name: 'extraExp',
						type: 'uint8',
					},
					{
						internalType: 'uint16',
						name: 'extraKongium',
						type: 'uint16',
					},
					{
						internalType: 'uint16',
						name: 'fallbackKongium',
						type: 'uint16',
					},
					{
						internalType: 'address[2]',
						name: 'rewardAddress',
						type: 'address[2]',
					},
					{
						internalType: 'uint256[2]',
						name: 'tokenId',
						type: 'uint256[2]',
					},
					{
						internalType: 'uint256[2]',
						name: 'amounts',
						type: 'uint256[2]',
					},
				],
				indexed: false,
				internalType: 'struct IJungleLogic.RewardData',
				name: 'rData',
				type: 'tuple',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'timestamp',
				type: 'uint256',
			},
		],
		name: 'AdventureDone',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'seasonId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'commiter',
				type: 'address',
			},
		],
		name: 'CommitKongium',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'vxId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'potionType',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'Healed',
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
				indexed: true,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'KongiumBurn',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'KongiumMint',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'vx',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'requestId',
				type: 'uint256',
			},
		],
		name: 'ManyAdventuresCompleted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'vx',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'requestId',
				type: 'uint256',
			},
		],
		name: 'ManyAdventuresStarted',
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
				indexed: false,
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'prize',
				type: 'uint256',
			},
		],
		name: 'StartSeason',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'tokenIds',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'newLevels',
				type: 'uint256[]',
			},
		],
		name: 'UpgradeVX',
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
		name: 'GSReq',
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
		name: 'KONGIUM_ID',
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
		name: 'LVL_ID',
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
		name: 'POTION_1',
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
		name: 'POTION_2',
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
		name: 'VX_GENE_ID',
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
				name: '',
				type: 'address',
			},
		],
		name: 'allowedCollections',
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
				name: '',
				type: 'address',
			},
		],
		name: 'approvedContract',
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
				name: '',
				type: 'address',
			},
		],
		name: 'canGetExp',
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
				name: '_season',
				type: 'uint256',
			},
		],
		name: 'claimNana',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'commitKongium',
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
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'committedKongium',
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
		name: 'consumables',
		outputs: [
			{
				internalType: 'contract IConsume',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'equipment',
		outputs: [
			{
				internalType: 'contract IEquipment',
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
		],
		name: 'extraData',
		outputs: [
			{
				internalType: 'contract IKongzExtraData',
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
				name: '_vx',
				type: 'uint256',
			},
		],
		name: 'getGene',
		outputs: [
			{
				internalType: 'uint256',
				name: 'gene',
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
				name: '_vxs',
				type: 'uint256[]',
			},
		],
		name: 'getKongStats',
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
				name: '_season',
				type: 'uint256',
			},
			{
				internalType: 'uint256[]',
				name: '_vxs',
				type: 'uint256[]',
			},
		],
		name: 'getKreditSpent',
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
				name: '_vxId',
				type: 'uint256',
			},
		],
		name: 'getLevel',
		outputs: [
			{
				internalType: 'uint256',
				name: '_level',
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
				name: '_vx',
				type: 'uint256',
			},
		],
		name: 'getMaxHp',
		outputs: [
			{
				internalType: 'uint256',
				name: 'maxHp',
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
				name: '_seasons',
				type: 'uint256[]',
			},
			{
				internalType: 'address',
				name: '_user',
				type: 'address',
			},
		],
		name: 'getMultiSeasonRewardData',
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
				name: '',
				type: 'uint256',
			},
		],
		name: 'globalCommittedKongium',
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
				name: '_collec',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'grantExp',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_vxId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_potionType',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'heal',
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
		name: 'healPerPotion',
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
		name: 'hp',
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
				name: '_nanas',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_vx',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_slices',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_logic',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_consumable',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_extra',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_vrfCoordinator',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_equip',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_trait',
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
		inputs: [],
		name: 'isPaused',
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
				name: '_user',
				type: 'address',
			},
		],
		name: 'kongium',
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
		name: 'logic',
		outputs: [
			{
				internalType: 'contract IJungleLogic',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'lootHolder',
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
		name: 'lottery',
		outputs: [
			{
				internalType: 'address payable',
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
				name: '',
				type: 'bytes32',
			},
		],
		name: 'multiRunData',
		outputs: [
			{
				internalType: 'bool',
				name: 'fulfilled',
				type: 'bool',
			},
			{
				internalType: 'uint8',
				name: 'tier',
				type: 'uint8',
			},
			{
				internalType: 'uint8',
				name: 'vxLvl',
				type: 'uint8',
			},
			{
				internalType: 'uint8',
				name: 'amount',
				type: 'uint8',
			},
			{
				internalType: 'uint16',
				name: 'gearScore',
				type: 'uint16',
			},
			{
				internalType: 'uint16',
				name: 'id',
				type: 'uint16',
			},
			{
				internalType: 'uint256',
				name: 'maxHp',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'user',
				type: 'address',
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
		inputs: [],
		name: 'nanas',
		outputs: [
			{
				internalType: 'contract INana',
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
				name: '_operator',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_from',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_value',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: '_data',
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
				internalType: 'uint256[]',
				name: '_vxIds',
				type: 'uint256[]',
			},
		],
		name: 'remainingHp',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'currentHp',
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
				name: '_vxId',
				type: 'uint256',
			},
		],
		name: 'remainingHp',
		outputs: [
			{
				internalType: 'uint256',
				name: 'currentHp',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
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
				internalType: 'uint256',
				name: '_vxId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_tier',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'run',
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'season',
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
		name: 'seasonDuration',
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
		name: 'seasonLastUpdate',
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
		name: 'seasonSliceRewardBalance',
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
		name: 'seasonStartTime',
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
				name: '_collec',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: '_val',
				type: 'bool',
			},
		],
		name: 'setExp',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bool',
				name: '_val',
				type: 'bool',
			},
		],
		name: 'setPause',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'slices',
		outputs: [
			{
				internalType: 'contract ISlice',
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
		name: 'slicesSpent',
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
		name: 'startSeason',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'tierCount',
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
		name: 'tierRonCost',
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
		name: 'tierSliceCost',
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
		name: 'traitRegistry',
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
		name: 'treasury',
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
				internalType: 'address[]',
				name: '_collecs',
				type: 'address[]',
			},
			{
				internalType: 'bool[]',
				name: '_values',
				type: 'bool[]',
			},
		],
		name: 'updateAllowedCollections',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_contracts',
				type: 'address[]',
			},
			{
				internalType: 'bool[]',
				name: '_values',
				type: 'bool[]',
			},
		],
		name: 'updateApprovedContracts',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_equip',
				type: 'address',
			},
		],
		name: 'updateEquipment',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_collec',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_extra',
				type: 'address',
			},
		],
		name: 'updateExtraData',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_tier',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_req',
				type: 'uint256',
			},
		],
		name: 'updateGSReq',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_potion',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_hp',
				type: 'uint256',
			},
		],
		name: 'updateHeal',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_logic',
				type: 'address',
			},
		],
		name: 'updateLogic',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_loot',
				type: 'address',
			},
		],
		name: 'updateLoot',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_lottery',
				type: 'address',
			},
		],
		name: 'updateLottery',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_length',
				type: 'uint256',
			},
		],
		name: 'updateSeasonLength',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_count',
				type: 'uint256',
			},
		],
		name: 'updateTierCount',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_tier',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_slice',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_ron',
				type: 'uint256',
			},
		],
		name: 'updateTierSliceAndRonCost',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_trait',
				type: 'address',
			},
		],
		name: 'updateTrait',
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
		name: 'updateTreasury',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: '_vx',
				type: 'uint256[]',
			},
		],
		name: 'upgradeVxLvl',
		stateMutability: 'nonpayable',
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
		inputs: [],
		name: 'vx',
		outputs: [
			{
				internalType: 'contract ERC721x',
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
		name: 'vxActionTimestamp',
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
		name: 'vxXp',
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
const JUNGLE_ADVENTURE_V2: Contract<typeof abi> = {
	name: 'Jungle Adventure V2',
	address: '0xf81e5b1dd4fffdf719f281b7805cd6a0d6b9a075',
	is_deprecated: false,
	created_at: 1712249214,
	abi: abi,
}
export default JUNGLE_ADVENTURE_V2
