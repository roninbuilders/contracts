import { Contract } from '@/contract'
const abi = [
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
				internalType: 'uint256',
				name: '_tier',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'chance',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'min',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'max',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'minChance',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'maxChance',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'token',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'reward',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'amount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'penalty',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'kongiumFallback',
						type: 'uint256',
					},
				],
				internalType: 'struct JungleLogic.GameEncounterParam',
				name: '_encounter',
				type: 'tuple',
			},
			{
				internalType: 'bool',
				name: '_enable',
				type: 'bool',
			},
		],
		name: 'addEncounter',
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
				components: [
					{
						internalType: 'uint256',
						name: 'eventType',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'level',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'hp',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'gs',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'kongiumFallback',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'chance',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'tokenReward',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'reward',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'amount',
						type: 'uint256',
					},
				],
				internalType: 'struct JungleLogic.GameEventParam',
				name: '_event',
				type: 'tuple',
			},
			{
				internalType: 'bool',
				name: '_enable',
				type: 'bool',
			},
		],
		name: 'addEvent',
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
		name: 'authorised',
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
				name: '_tier',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_eventId',
				type: 'uint256',
			},
		],
		name: 'disableEncounter',
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
				name: '_eventId',
				type: 'uint256',
			},
		],
		name: 'disableEvent',
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
				name: '_eventId',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'chance',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'min',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'max',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'minChance',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'maxChance',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'token',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'reward',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'amount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'penalty',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'kongiumFallback',
						type: 'uint256',
					},
				],
				internalType: 'struct JungleLogic.GameEncounterParam',
				name: '_encounter',
				type: 'tuple',
			},
		],
		name: 'editEncounterParams',
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
				name: '_eventId',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'eventType',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'level',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'hp',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'gs',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'kongiumFallback',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'chance',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'tokenReward',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'reward',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'amount',
						type: 'uint256',
					},
				],
				internalType: 'struct JungleLogic.GameEventParam',
				name: '_event',
				type: 'tuple',
			},
		],
		name: 'editEventParams',
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
				name: '_eventId',
				type: 'uint256',
			},
		],
		name: 'enableEncounter',
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
				name: '_eventId',
				type: 'uint256',
			},
		],
		name: 'enableEvent',
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
				name: '_start',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_end',
				type: 'uint256',
			},
		],
		name: 'getEncountertInfo',
		outputs: [
			{
				components: [
					{
						internalType: 'bool',
						name: 'hasIndex',
						type: 'bool',
					},
					{
						internalType: 'uint24',
						name: 'minSuccessChance',
						type: 'uint24',
					},
					{
						internalType: 'uint24',
						name: 'maxSuccessChance',
						type: 'uint24',
					},
					{
						internalType: 'uint16',
						name: 'gsMin',
						type: 'uint16',
					},
					{
						internalType: 'uint16',
						name: 'gsMax',
						type: 'uint16',
					},
					{
						internalType: 'uint16',
						name: 'penalty',
						type: 'uint16',
					},
					{
						internalType: 'uint16',
						name: 'kongiumFallback',
						type: 'uint16',
					},
					{
						internalType: 'uint24',
						name: 'chance',
						type: 'uint24',
					},
					{
						internalType: 'address',
						name: 'tokenReward',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'reward',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'amount',
						type: 'uint256',
					},
				],
				internalType: 'struct JungleLogic.GameEncounterInfo[]',
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
				name: '_tier',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_start',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_end',
				type: 'uint256',
			},
		],
		name: 'getEventInfo',
		outputs: [
			{
				components: [
					{
						internalType: 'bool',
						name: 'hasIndex',
						type: 'bool',
					},
					{
						internalType: 'uint8',
						name: 'eventType',
						type: 'uint8',
					},
					{
						internalType: 'uint8',
						name: 'levelRequirement',
						type: 'uint8',
					},
					{
						internalType: 'uint16',
						name: 'hpRequirement',
						type: 'uint16',
					},
					{
						internalType: 'uint16',
						name: 'gearScoreRequirement',
						type: 'uint16',
					},
					{
						internalType: 'uint16',
						name: 'kongiumFallback',
						type: 'uint16',
					},
					{
						internalType: 'uint24',
						name: 'chance',
						type: 'uint24',
					},
					{
						internalType: 'address',
						name: 'tokenReward',
						type: 'address',
					},
					{
						internalType: 'uint128',
						name: 'reward',
						type: 'uint128',
					},
					{
						internalType: 'uint128',
						name: 'amount',
						type: 'uint128',
					},
				],
				internalType: 'struct JungleLogic.GameEventInfo[]',
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
				name: '_currentLevel',
				type: 'uint256',
			},
		],
		name: 'getReqForLvl',
		outputs: [
			{
				internalType: 'uint256',
				name: 'exp',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'kongium',
				type: 'uint256',
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
		name: 'renounceOwnership',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_seed',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '__gearScore',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_currentHp',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '__level',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_tier',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_lootHolder',
				type: 'address',
			},
		],
		name: 'run',
		outputs: [
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
				internalType: 'struct IJungleLogic.GameData',
				name: 'gameData',
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
				internalType: 'struct IJungleLogic.RewardData',
				name: 'data',
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
				name: '_user',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: '_val',
				type: 'bool',
			},
		],
		name: 'setAuthorised',
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
		name: 'tierEnabledEncounterCounter',
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
		name: 'tierEnabledEventCounter',
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
		name: 'tierEncounterChanceMapping',
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
		name: 'tierEncounterCounter',
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
		name: 'tierEventChanceMapping',
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
		name: 'tierEventCounter',
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
		name: 'tierGameEncounterIdToIndex',
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
		name: 'tierGameEncounterQueue',
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
		name: 'tierGameEncounters',
		outputs: [
			{
				internalType: 'uint256',
				name: 'l1',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'l2',
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
		name: 'tierGameEventIdToIndex',
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
		name: 'tierGameEventQueue',
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
		name: 'tierGameEvents',
		outputs: [
			{
				internalType: 'uint256',
				name: 'l1',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'l2',
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
		name: 'tierMaxChanceCounter',
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
		name: 'tierMaxChanceEncounterCounter',
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
] as const
const JUNGLE_LOGIC: Contract<typeof abi> = {
	name: 'Jungle Logic',
	address: '0x72b7387169562b9849c4586371bbfbd44085f188',
	is_deprecated: false,
	created_at: 1712395672,
	abi: abi,
}
export default JUNGLE_LOGIC
