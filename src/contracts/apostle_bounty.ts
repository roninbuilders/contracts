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
				indexed: false,
				internalType: 'uint256',
				name: '_bountyId',
				type: 'uint256',
			},
		],
		name: 'CancelBounty',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: '_bountyId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: '_bountyCreator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_classId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_mainSkillId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_otherSkillId_1',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_otherSkillId_2',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: '_minSkillLevels',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_minIV',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_reforgeCount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_numberToBuy',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: '_tokenAddress',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_pricePerApostle',
				type: 'uint256',
			},
		],
		name: 'CreateBounty',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: '_bountyId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: '_apostleIds',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'address',
				name: '_fulfiller',
				type: 'address',
			},
		],
		name: 'FulfillBounty',
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
				name: 'implementation',
				type: 'address',
			},
		],
		name: 'Upgraded',
		type: 'event',
	},
	{
		inputs: [],
		name: 'apostleContract',
		outputs: [
			{
				internalType: 'contract ApeironApostle',
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
				name: '_bountyId',
				type: 'uint256',
			},
		],
		name: 'cancelBounty',
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
		],
		name: 'cancelTimeMap',
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
				name: '_classId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_mainSkillId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_otherSkillId_1',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_otherSkillId_2',
				type: 'uint256',
			},
			{
				internalType: 'uint256[]',
				name: '_minSkillLevels',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256',
				name: '_minIV',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_numberToBuy',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_tokenAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_pricePerApostle',
				type: 'uint256',
			},
		],
		name: 'createBounty',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'currentBountyId',
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
		name: 'earningAddress',
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
		name: 'earningPercentage',
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
				name: '_bountyId',
				type: 'uint256',
			},
			{
				internalType: 'uint256[]',
				name: '_apostleIds',
				type: 'uint256[]',
			},
		],
		name: 'fulfillBounty',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_bountyId',
				type: 'uint256',
			},
		],
		name: 'getBountyData',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'bountyCreator',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'classId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'mainSkillId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'otherSkillId_1',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'otherSkillId_2',
						type: 'uint256',
					},
					{
						internalType: 'uint256[]',
						name: 'minSkillLevels',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: 'minIV',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'reforgeCount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'initialBountyNumber',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'remainingBountyNumber',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'tokenAddress',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'pricePerApostle',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: 'isCancelled',
						type: 'bool',
					},
				],
				internalType: 'struct ApostleBounty.BountyApostleData',
				name: '',
				type: 'tuple',
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
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'isWhitelistedToken',
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
		],
		name: 'lastFulfillTimeMap',
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
		name: 'percentageBase',
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
				name: '_apostleAddress',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_earningAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_percentageBase',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_earningPercentage',
				type: 'uint256',
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
				internalType: 'address[]',
				name: '_tokenAddressArray',
				type: 'address[]',
			},
			{
				internalType: 'bool',
				name: '_isWhitelisted',
				type: 'bool',
			},
		],
		name: 'updateWhitelistTokens',
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
] as const
const APOSTLE_BOUNTY: Contract<typeof abi> = {
	name: 'Apostle Bounty',
	address: '0x36b28d5d41dcc0068361219df1376d1f7fbb3c97',
	is_deprecated: false,
	created_at: 1724227656,
	abi: abi,
}
export default APOSTLE_BOUNTY
