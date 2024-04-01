import { Contract } from '@/contract'
const abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'vxId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'itemId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'itemTokenType',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'uniqueItemBaseId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'uniqueItemStats',
				type: 'uint256',
			},
		],
		name: 'EquippedItem',
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
				internalType: 'uint256',
				name: 'vxId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'itemId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'itemTokenType',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'uniqueItemBaseId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'uniqueItemStats',
				type: 'uint256',
			},
		],
		name: 'UnequippedItem',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'vxId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newScore',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldScore',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'vxNonce',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'registryVersion',
				type: 'uint256',
			},
		],
		name: 'VxScoreUpdated',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'uint256[5]',
				name: '_itemTypes',
				type: 'uint256[5]',
			},
			{
				internalType: 'uint256[5]',
				name: '_tokenTypes',
				type: 'uint256[5]',
			},
			{
				internalType: 'uint256[5]',
				name: '_itemIds',
				type: 'uint256[5]',
			},
			{
				internalType: 'uint256',
				name: '_vx',
				type: 'uint256',
			},
		],
		name: 'equipItems',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'equipmentRegistry',
		outputs: [
			{
				internalType: 'contract EquipmentRegistry',
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
		name: 'getGearScore',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
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
		name: 'getGearScores',
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
				internalType: 'uint256',
				name: '_vx',
				type: 'uint256',
			},
		],
		name: 'getGeneratedVxScore',
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
				name: '_vxs',
				type: 'uint256[]',
			},
		],
		name: 'getGeneratedVxScores',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'scores',
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
				name: '_vx',
				type: 'uint256',
			},
		],
		name: 'getItems',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '_tokenTypes',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_itemIds',
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
				name: '_vxs',
				type: 'uint256[]',
			},
		],
		name: 'getItemsBatch',
		outputs: [
			{
				internalType: 'uint256[][]',
				name: '_tokenTypes',
				type: 'uint256[][]',
			},
			{
				internalType: 'uint256[][]',
				name: '_itemIds',
				type: 'uint256[][]',
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
		name: 'getVxInfo',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'score',
						type: 'uint256',
					},
					{
						internalType: 'uint256[]',
						name: 'itemsIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'itemsTokenTypes',
						type: 'uint256[]',
					},
				],
				internalType: 'struct Equipment.VxInfo',
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
				internalType: 'uint256[]',
				name: '_vxs',
				type: 'uint256[]',
			},
		],
		name: 'getVxInfoBatch',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'score',
						type: 'uint256',
					},
					{
						internalType: 'uint256[]',
						name: 'itemsIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'itemsTokenTypes',
						type: 'uint256[]',
					},
				],
				internalType: 'struct Equipment.VxInfo[]',
				name: '_infos',
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
				name: '_vx',
				type: 'uint256',
			},
		],
		name: 'getVxSetScore',
		outputs: [
			{
				internalType: 'uint256',
				name: '_score',
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
				name: '_vxAddress',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_vxArmoryAddress',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_vxArmoryUniqueAddress',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_equipmentRegistryAddress',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_adventure',
				type: 'address',
			},
			{
				internalType: 'uint8',
				name: '_maxItemType',
				type: 'uint8',
			},
		],
		name: 'initialize',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'maxItemType',
		outputs: [
			{
				internalType: 'uint8',
				name: '',
				type: 'uint8',
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
		inputs: [],
		name: 'renounceOwnership',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint8',
				name: '_max',
				type: 'uint8',
			},
		],
		name: 'setMax',
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
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256[5]',
				name: '_itemTypes',
				type: 'uint256[5]',
			},
			{
				internalType: 'uint256',
				name: '_vx',
				type: 'uint256',
			},
		],
		name: 'unequipItems',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'vxArmory',
		outputs: [
			{
				internalType: 'contract IERC1155',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'vxArmoryUnique',
		outputs: [
			{
				internalType: 'contract IERC721',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'vxKongz',
		outputs: [
			{
				internalType: 'contract IERC721',
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
		name: 'vxNonce',
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
		name: 'vxRegistryVersion',
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
		name: 'vxScore',
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
] as const
const EQUIPMENT: Contract<typeof abi> = {
	name: 'Equipment',
	address: '0x8d5b8f6a024a487babc2a2bc399a575e564e9625',
	is_deprecated: false,
	updated_at: 1711394369,
	abi: abi,
}
export default EQUIPMENT
