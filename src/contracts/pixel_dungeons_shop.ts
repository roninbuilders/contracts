import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'contract IERC20',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'contract PixelDungeonsItems',
				name: '_items',
				type: 'address',
			},
			{
				internalType: 'address payable',
				name: '_recipient',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'recipient',
				type: 'address',
			},
		],
		name: 'InvalidRecipient',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
		],
		name: 'OwnableInvalidOwner',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'OwnableUnauthorizedAccount',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'productId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'ProductAlreadyPurchased',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ProductLimitReached',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ProductMissingItems',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ProductMissingPrice',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'productId',
				type: 'uint256',
			},
		],
		name: 'ProductNotFound',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'productId',
				type: 'uint256',
			},
		],
		name: 'ProductUnavailable',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ReentrancyGuardReentrantCall',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
		],
		name: 'SafeERC20FailedOperation',
		type: 'error',
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
				name: 'productId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'available',
				type: 'bool',
			},
		],
		name: 'ProductAvailabilityChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'productId',
				type: 'uint256',
			},
		],
		name: 'ProductCreated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'productId',
				type: 'uint256',
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
		name: 'ProductGifted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'productId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'ProductPurchased',
		type: 'event',
	},
	{
		inputs: [],
		name: 'MAX_PRODUCTS',
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
				name: '_price',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: '_available',
				type: 'bool',
			},
			{
				internalType: 'uint256[]',
				name: '_itemIds',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_itemAmounts',
				type: 'uint256[]',
			},
		],
		name: 'addProduct',
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
		inputs: [],
		name: 'getProducts',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'price',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: 'available',
						type: 'bool',
					},
					{
						internalType: 'uint256[]',
						name: 'itemIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'itemAmounts',
						type: 'uint256[]',
					},
				],
				internalType: 'struct PixelDungeonsShop.Product[]',
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
				name: '_productId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_account',
				type: 'address',
			},
		],
		name: 'gift',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'items',
		outputs: [
			{
				internalType: 'contract PixelDungeonsItems',
				name: '',
				type: 'address',
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
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'products',
		outputs: [
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'price',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'available',
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
				name: '_productId',
				type: 'uint256',
			},
		],
		name: 'purchase',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'recipient',
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
		inputs: [],
		name: 'renounceOwnership',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: '_available',
				type: 'bool',
			},
		],
		name: 'setAvailable',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address payable',
				name: '_recipient',
				type: 'address',
			},
		],
		name: 'setRecipient',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'token',
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
const PIXEL_DUNGEONS_SHOP: Contract<typeof abi> = {
	name: 'Pixel Dungeons Shop',
	address: '0x36278457936460c0e7429aebf1bccd5061e1d0c1',
	is_deprecated: false,
	created_at: 1734266458,
	abi: abi,
}
export default PIXEL_DUNGEONS_SHOP
