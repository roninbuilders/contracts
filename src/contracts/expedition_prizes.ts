import { Contract } from '@/contract'
export const EXPEDITION_PRIZES: Contract = {
	name: 'Expedition Prizes',
	address: '0x256546446be148e77dd8c1f7e15f80eb1e017395',
	abi: [
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
				{
					indexed: true,
					internalType: 'address',
					name: 'user',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'burnKeyAmount',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'treasureId',
					type: 'uint256',
				},
				{
					components: [
						{
							internalType: 'enum ExpeditionPrizes.PRIZE_TYPE',
							name: 'prizeType',
							type: 'uint8',
						},
						{
							internalType: 'address',
							name: 'addr',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'tokenId',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'amount',
							type: 'uint256',
						},
					],
					indexed: false,
					internalType: 'struct ExpeditionPrizes.Prize[]',
					name: 'prizes',
					type: 'tuple[]',
				},
			],
			name: 'ClaimableTreasure',
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
					indexed: true,
					internalType: 'uint256',
					name: 'treasureId',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'prizeAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'tokenId',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'ClaimedPrize',
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
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_treasureIds',
					type: 'uint256[]',
				},
			],
			name: 'claimTreasure',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'expeditionAddress',
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
					name: '_treasureId',
					type: 'uint256',
				},
			],
			name: 'getTreasureById',
			outputs: [
				{
					components: [
						{
							internalType: 'address',
							name: 'user',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'burnKeyAmount',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'treasureId',
							type: 'uint256',
						},
						{
							components: [
								{
									internalType: 'enum ExpeditionPrizes.PRIZE_TYPE',
									name: 'prizeType',
									type: 'uint8',
								},
								{
									internalType: 'address',
									name: 'addr',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'tokenId',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'amount',
									type: 'uint256',
								},
							],
							internalType: 'struct ExpeditionPrizes.Prize[]',
							name: 'prizes',
							type: 'tuple[]',
						},
					],
					internalType: 'struct ExpeditionPrizes.Treasure',
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
			name: 'getUserTreasureIds',
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
					internalType: 'address',
					name: 'operator',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{
					internalType: 'uint256[]',
					name: 'ids',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: 'values',
					type: 'uint256[]',
				},
				{
					internalType: 'bytes',
					name: 'data',
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
					name: 'operator',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'id',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: 'data',
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
					name: 'operator',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'tokenId',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: 'data',
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
				{
					components: [
						{
							internalType: 'address',
							name: 'user',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'burnKeyAmount',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'treasureId',
							type: 'uint256',
						},
						{
							components: [
								{
									internalType: 'enum ExpeditionPrizes.PRIZE_TYPE',
									name: 'prizeType',
									type: 'uint8',
								},
								{
									internalType: 'address',
									name: 'addr',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'tokenId',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'amount',
									type: 'uint256',
								},
							],
							internalType: 'struct ExpeditionPrizes.Prize[]',
							name: 'prizes',
							type: 'tuple[]',
						},
					],
					internalType: 'struct ExpeditionPrizes.Treasure[]',
					name: '_treasures',
					type: 'tuple[]',
				},
			],
			name: 'setBatchUserExpeditionTreasures',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_address',
					type: 'address',
				},
			],
			name: 'setExpedition',
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
	],
}
