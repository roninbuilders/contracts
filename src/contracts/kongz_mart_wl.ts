import { Contract } from '@/contract'
const abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner_',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'governor_',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'bool_',
				type: 'bool',
			},
		],
		name: 'GovernorManaged',
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
				name: 'owner_',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'operator_',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'bool_',
				type: 'bool',
			},
		],
		name: 'OperatorManaged',
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
				name: 'owner_',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'bool_',
				type: 'bool',
			},
		],
		name: 'RequireOwnershipManaged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner_',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'treasury_',
				type: 'address',
			},
		],
		name: 'TreasuryManaged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner_',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'bool',
						name: 'isNativeToken',
						type: 'bool',
					},
					{
						internalType: 'uint32',
						name: 'amountAvailable',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'amountPurchased',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'startTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'endTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'tokenId',
						type: 'uint32',
					},
					{
						internalType: 'uint256',
						name: 'tokenPrice',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct KongzMartWL.VendingItem',
				name: 'item_',
				type: 'tuple',
			},
		],
		name: 'VendingItemAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner_',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'bool',
						name: 'isNativeToken',
						type: 'bool',
					},
					{
						internalType: 'uint32',
						name: 'amountAvailable',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'amountPurchased',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'startTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'endTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'tokenId',
						type: 'uint32',
					},
					{
						internalType: 'uint256',
						name: 'tokenPrice',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct KongzMartWL.VendingItem',
				name: 'item_',
				type: 'tuple',
			},
		],
		name: 'VendingItemGifted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner_',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'bool',
						name: 'isNativeToken',
						type: 'bool',
					},
					{
						internalType: 'uint32',
						name: 'amountAvailable',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'amountPurchased',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'startTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'endTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'tokenId',
						type: 'uint32',
					},
					{
						internalType: 'uint256',
						name: 'tokenPrice',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct KongzMartWL.VendingItem',
				name: 'before_',
				type: 'tuple',
			},
			{
				components: [
					{
						internalType: 'bool',
						name: 'isNativeToken',
						type: 'bool',
					},
					{
						internalType: 'uint32',
						name: 'amountAvailable',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'amountPurchased',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'startTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'endTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'tokenId',
						type: 'uint32',
					},
					{
						internalType: 'uint256',
						name: 'tokenPrice',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct KongzMartWL.VendingItem',
				name: 'after_',
				type: 'tuple',
			},
		],
		name: 'VendingItemModified',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'buyer_',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'bool',
						name: 'isNativeToken',
						type: 'bool',
					},
					{
						internalType: 'uint32',
						name: 'amountAvailable',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'amountPurchased',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'startTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'endTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'tokenId',
						type: 'uint32',
					},
					{
						internalType: 'uint256',
						name: 'tokenPrice',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct KongzMartWL.VendingItem',
				name: 'item_',
				type: 'tuple',
			},
		],
		name: 'VendingItemPurchased',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'owner_',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'bool',
						name: 'isNativeToken',
						type: 'bool',
					},
					{
						internalType: 'uint32',
						name: 'amountAvailable',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'amountPurchased',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'startTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'endTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'tokenId',
						type: 'uint32',
					},
					{
						internalType: 'uint256',
						name: 'tokenPrice',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct KongzMartWL.VendingItem',
				name: 'item_',
				type: 'tuple',
			},
		],
		name: 'VendingItemRemoved',
		type: 'event',
	},
	{
		inputs: [],
		name: 'BananaToken',
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
		inputs: [],
		name: 'GENKAI',
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
				internalType: 'address',
				name: 'controller_',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'bool_',
				type: 'bool',
			},
		],
		name: 'G_manageController',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'KONGZVX',
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
				internalType: 'address',
				name: 'governor_',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'bool_',
				type: 'bool',
			},
		],
		name: 'O_manageGovernor',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'address_',
				type: 'address',
			},
		],
		name: 'O_setBananaToken',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'address_',
				type: 'address',
			},
		],
		name: 'O_setGENKAI',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'address_',
				type: 'address',
			},
		],
		name: 'O_setKONGZVX',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bool',
				name: 'bool_',
				type: 'bool',
			},
		],
		name: 'O_setRequireHoldGENKAI',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bool',
				name: 'bool_',
				type: 'bool',
			},
		],
		name: 'O_setRequireHoldVx',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'address_',
				type: 'address',
			},
		],
		name: 'O_settreasuryAddress',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'bool',
						name: 'isNativeToken',
						type: 'bool',
					},
					{
						internalType: 'uint32',
						name: 'amountAvailable',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'amountPurchased',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'startTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'endTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'tokenId',
						type: 'uint32',
					},
					{
						internalType: 'uint256',
						name: 'tokenPrice',
						type: 'uint256',
					},
				],
				internalType: 'struct KongzMartWL.VendingItem',
				name: 'VendingItem_',
				type: 'tuple',
			},
		],
		name: 'addVendingItem',
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
		name: 'controllers',
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
		name: 'deleteMostRecentVendingItem',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'purchaser_',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: 'indexes_',
				type: 'uint256[]',
			},
		],
		name: 'getIndexToPurchasedBatch',
		outputs: [
			{
				internalType: 'bool[]',
				name: '',
				type: 'bool[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'index_',
				type: 'uint256',
			},
		],
		name: 'getPurchasersOfItem',
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
		inputs: [],
		name: 'getVendingItemsAll',
		outputs: [
			{
				components: [
					{
						internalType: 'bool',
						name: 'isNativeToken',
						type: 'bool',
					},
					{
						internalType: 'uint32',
						name: 'amountAvailable',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'amountPurchased',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'startTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'endTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'tokenId',
						type: 'uint32',
					},
					{
						internalType: 'uint256',
						name: 'tokenPrice',
						type: 'uint256',
					},
				],
				internalType: 'struct KongzMartWL.VendingItem[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getVendingItemsLength',
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
				name: 'start_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'end_',
				type: 'uint256',
			},
		],
		name: 'getVendingItemsPaginated',
		outputs: [
			{
				components: [
					{
						internalType: 'bool',
						name: 'isNativeToken',
						type: 'bool',
					},
					{
						internalType: 'uint32',
						name: 'amountAvailable',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'amountPurchased',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'startTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'endTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'tokenId',
						type: 'uint32',
					},
					{
						internalType: 'uint256',
						name: 'tokenPrice',
						type: 'uint256',
					},
				],
				internalType: 'struct KongzMartWL.VendingItem[]',
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
				name: '',
				type: 'address',
			},
		],
		name: 'governors',
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
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'indexToPurchased',
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
		name: 'indexToPurchasers',
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
				name: '_banana',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_treasury',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_vx',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_genkai',
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
				internalType: 'uint256',
				name: 'index_',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'bool',
						name: 'isNativeToken',
						type: 'bool',
					},
					{
						internalType: 'uint32',
						name: 'amountAvailable',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'amountPurchased',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'startTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'endTime',
						type: 'uint32',
					},
					{
						internalType: 'uint32',
						name: 'tokenId',
						type: 'uint32',
					},
					{
						internalType: 'uint256',
						name: 'tokenPrice',
						type: 'uint256',
					},
				],
				internalType: 'struct KongzMartWL.VendingItem',
				name: 'VendingItem_',
				type: 'tuple',
			},
		],
		name: 'modifyVendingItem',
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
				name: 'index_',
				type: 'uint256',
			},
		],
		name: 'purchaseVendingItem',
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'requireHoldGENKAI',
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
		name: 'requireHoldVX',
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
		inputs: [],
		name: 'treasuryAddress',
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
		name: 'vendingItems',
		outputs: [
			{
				internalType: 'bool',
				name: 'isNativeToken',
				type: 'bool',
			},
			{
				internalType: 'uint32',
				name: 'amountAvailable',
				type: 'uint32',
			},
			{
				internalType: 'uint32',
				name: 'amountPurchased',
				type: 'uint32',
			},
			{
				internalType: 'uint32',
				name: 'startTime',
				type: 'uint32',
			},
			{
				internalType: 'uint32',
				name: 'endTime',
				type: 'uint32',
			},
			{
				internalType: 'uint32',
				name: 'tokenId',
				type: 'uint32',
			},
			{
				internalType: 'uint256',
				name: 'tokenPrice',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const
const KONGZ_MART_WL: Contract<typeof abi> = {
	name: 'Kongz Mart WL',
	address: '0x779126c613c98e462141ccacc15859b82d126872',
	is_deprecated: false,
	created_at: 1729516805,
	abi: abi,
}
export default KONGZ_MART_WL
