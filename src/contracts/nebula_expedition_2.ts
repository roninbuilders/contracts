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
				internalType: 'uint256',
				name: 'expeditionId',
				type: 'uint256',
			},
		],
		name: 'ExpeditionClaimableNow',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'expeditionId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'planetIds',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'optionalAssetIds',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'keyAmount',
				type: 'uint256',
			},
		],
		name: 'JoinedExpedition',
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
				name: 'expeditionId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'startFrom',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'endTo',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'string',
						name: 'name',
						type: 'string',
					},
					{
						internalType: 'address',
						name: 'addr',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'minAmount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'maxAmount',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct ExpeditionMeta.StakeInfo',
				name: 'requiredPlanets',
				type: 'tuple',
			},
			{
				components: [
					{
						internalType: 'string',
						name: 'name',
						type: 'string',
					},
					{
						internalType: 'address',
						name: 'addr',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'minAmount',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'maxAmount',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct ExpeditionMeta.StakeInfo',
				name: 'optionalAsset',
				type: 'tuple',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'requiredKeyAmount',
				type: 'uint256',
			},
		],
		name: 'UpdatedExpedition',
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
				internalType: 'uint256',
				name: '_expeditionId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_keyAmount',
				type: 'uint256',
			},
		],
		name: 'exchangeKeyToToken',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_expeditionId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_keyAmount',
				type: 'uint256',
			},
		],
		name: 'exchangeTokenToKey',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_expeditionId',
				type: 'uint256',
			},
		],
		name: 'getExpeditionInfoList',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'startFrom',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'endTo',
						type: 'uint256',
					},
					{
						components: [
							{
								internalType: 'string',
								name: 'name',
								type: 'string',
							},
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'minAmount',
								type: 'uint256',
							},
							{
								internalType: 'uint256',
								name: 'maxAmount',
								type: 'uint256',
							},
						],
						internalType: 'struct ExpeditionMeta.StakeInfo',
						name: 'requiredPlanet',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'string',
								name: 'name',
								type: 'string',
							},
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'minAmount',
								type: 'uint256',
							},
							{
								internalType: 'uint256',
								name: 'maxAmount',
								type: 'uint256',
							},
						],
						internalType: 'struct ExpeditionMeta.StakeInfo',
						name: 'optionalAsset',
						type: 'tuple',
					},
					{
						internalType: 'uint256[]',
						name: 'optionalAssetWhitelistIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: 'requiredKeyAmount',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: 'isClaimableNow',
						type: 'bool',
					},
				],
				internalType: 'struct ExpeditionMeta.ExpeditionInfo',
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
				internalType: 'uint256',
				name: '_expeditionId',
				type: 'uint256',
			},
		],
		name: 'getExpeditionState',
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
				name: '_expeditionId',
				type: 'uint256',
			},
		],
		name: 'getUserExpedition',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'joinedAt',
						type: 'uint256',
					},
					{
						internalType: 'uint256[]',
						name: 'planetIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'optionalAssetIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: 'keyAmount',
						type: 'uint256',
					},
				],
				internalType: 'struct ExpeditionMeta.JoinExpedition',
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
				name: '_user',
				type: 'address',
			},
		],
		name: 'getUserExpeditionIds',
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
				internalType: 'uint256',
				name: '_expeditionId',
				type: 'uint256',
			},
			{
				internalType: 'uint256[]',
				name: '_planetIds',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_assetIds',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256',
				name: '_keyAmount',
				type: 'uint256',
			},
		],
		name: 'joinExpedition',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'lastExpeditionId',
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
				internalType: 'uint256',
				name: '_expeditionId',
				type: 'uint256',
			},
		],
		name: 'setExpeditionClaimable',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_expeditionId',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'startFrom',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'endTo',
						type: 'uint256',
					},
					{
						components: [
							{
								internalType: 'string',
								name: 'name',
								type: 'string',
							},
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'minAmount',
								type: 'uint256',
							},
							{
								internalType: 'uint256',
								name: 'maxAmount',
								type: 'uint256',
							},
						],
						internalType: 'struct ExpeditionMeta.StakeInfo',
						name: 'requiredPlanet',
						type: 'tuple',
					},
					{
						components: [
							{
								internalType: 'string',
								name: 'name',
								type: 'string',
							},
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'minAmount',
								type: 'uint256',
							},
							{
								internalType: 'uint256',
								name: 'maxAmount',
								type: 'uint256',
							},
						],
						internalType: 'struct ExpeditionMeta.StakeInfo',
						name: 'optionalAsset',
						type: 'tuple',
					},
					{
						internalType: 'uint256[]',
						name: 'optionalAssetWhitelistIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: 'requiredKeyAmount',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: 'isClaimableNow',
						type: 'bool',
					},
				],
				internalType: 'struct ExpeditionMeta.ExpeditionInfo',
				name: '_info',
				type: 'tuple',
			},
		],
		name: 'setupExpeditionInfo',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_stakingAndKeys',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_tokenReceipt',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_blacklist',
				type: 'address',
			},
		],
		name: 'setupPeerContracts',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_assetAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'stakeFT',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_expeditionId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_assetAddress',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: '_tokenIds',
				type: 'uint256[]',
			},
		],
		name: 'stakeNFT',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'stakingAndKeysAddress',
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
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_assetAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'unstakeFT',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_expeditionId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_assetAddress',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: '_tokenIds',
				type: 'uint256[]',
			},
		],
		name: 'unstakeNFT',
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
const NEBULA_EXPEDITION_2: Contract<typeof abi> = {
	name: 'Nebula Expedition',
	address: '0x20d1b46d17ea3444f4d321bad01833f535c6b16f',
	is_deprecated: false,
	created_at: 1703172652,
	abi: abi,
}
export default NEBULA_EXPEDITION_2
