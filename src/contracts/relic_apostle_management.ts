import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: '_admin',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: '_enabled',
				type: 'bool',
			},
		],
		name: 'AdminAccessSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'previousAdmin',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newAdmin',
				type: 'address',
			},
		],
		name: 'AdminChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'beacon',
				type: 'address',
			},
		],
		name: 'BeaconUpgraded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_planetOwner',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_planetID',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'string',
				name: '_seedPlanetID',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: '_slotsWithApostleIDs',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: '_apostleIDs',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: '_genes',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: '_ivs',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: '_createTimes',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'enum RelicApostleManagement.ACTION_TYPE[]',
				name: '_actions',
				type: 'uint8[]',
			},
		],
		name: 'ManageRelicApostle',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_planetOwner',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'planetID',
						type: 'uint256',
					},
					{
						internalType: 'string',
						name: 'seedPlanetID',
						type: 'string',
					},
					{
						internalType: 'uint256[]',
						name: 'slotsWithApostleIDs',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'apostleIDs',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'genes',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'ivs',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'createTimes',
						type: 'uint256[]',
					},
					{
						internalType: 'enum RelicApostleManagement.ACTION_TYPE[]',
						name: 'actions',
						type: 'uint8[]',
					},
				],
				indexed: false,
				internalType: 'struct RelicApostleManagement.ApostlePayload[]',
				name: '_payloads',
				type: 'tuple[]',
			},
		],
		name: 'ManageRelicApostlesSummary',
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
				internalType: 'uint256[]',
				name: '_reforgingPriceArray',
				type: 'uint256[]',
			},
		],
		name: 'ReforgePriceUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint8',
				name: '_mintType',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_saleSchedule',
				type: 'uint256',
			},
		],
		name: 'SaleScheduleUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'implementation',
				type: 'address',
			},
		],
		name: 'Upgraded',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: '_planetIDs',
				type: 'uint256[]',
			},
			{
				internalType: 'string[]',
				name: '_seedPlanetIDs',
				type: 'string[]',
			},
		],
		name: 'getPlanetNonceArray',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'planetResult',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: 'seedPlanetResult',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: '_planetIds',
				type: 'uint256[]',
			},
			{
				internalType: 'string[]',
				name: '_seedPlanetIds',
				type: 'string[]',
			},
		],
		name: 'getPlanetSlotsWithApostleIDsMapping',
		outputs: [
			{
				internalType: 'uint256[][]',
				name: '',
				type: 'uint256[][]',
			},
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
		inputs: [],
		name: 'getReforgingAnimaPriceArray',
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
		inputs: [],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'admin',
				type: 'address',
			},
		],
		name: 'isAdmin',
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
						name: 'planetID',
						type: 'uint256',
					},
					{
						internalType: 'string',
						name: 'seedPlanetID',
						type: 'string',
					},
					{
						internalType: 'uint256[]',
						name: 'slotsWithApostleIDs',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'apostleIDs',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'genes',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'ivs',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'createTimes',
						type: 'uint256[]',
					},
					{
						internalType: 'enum RelicApostleManagement.ACTION_TYPE[]',
						name: 'actions',
						type: 'uint8[]',
					},
				],
				internalType: 'struct RelicApostleManagement.ApostlePayload[]',
				name: '_payloads',
				type: 'tuple[]',
			},
			{
				internalType: 'uint256',
				name: '_time',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: '_signature',
				type: 'bytes',
			},
		],
		name: 'manageRelicApostles',
		outputs: [],
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
				name: 'admin',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'enabled',
				type: 'bool',
			},
		],
		name: 'setAdmin',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bool',
				name: '_isEnabled',
				type: 'bool',
			},
		],
		name: 'setEnabled',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: '_reforgingPriceArray',
				type: 'uint256[]',
			},
		],
		name: 'setupReforgePrice',
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
		inputs: [
			{
				internalType: 'address',
				name: '_tokenReceiptHandler',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_planetAddress',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_apostleAddress',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_animaAddress',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_systemAddress',
				type: 'address',
			},
		],
		name: 'updateContractSetting',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newImplementation',
				type: 'address',
			},
		],
		name: 'upgradeTo',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newImplementation',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'upgradeToAndCall',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_wallet',
				type: 'address',
			},
		],
		name: 'withdrawFunds',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const RELIC_APOSTLE_MANAGEMENT: Contract<typeof abi> = {
	name: 'Relic Apostle Management',
	address: '0x3cd60694fa8b069c8b8b982cab663616eee0d6bb',
	is_deprecated: false,
	created_at: 1724227908,
	abi: abi,
}
export default RELIC_APOSTLE_MANAGEMENT
