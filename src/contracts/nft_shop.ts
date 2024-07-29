import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'contract IERC20',
				name: '_WETH',
				type: 'address',
			},
			{
				internalType: 'address payable',
				name: '_receiver',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
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
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'contract IERC20',
				name: 'paymentToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'cost',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'contract IMintableERC721V5',
				name: 'receiveNFT',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'nftIds',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'timestamp',
				type: 'uint256',
			},
		],
		name: 'Buy',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldValue',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newValue',
				type: 'uint256',
			},
		],
		name: 'FinishAtChanged',
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
				internalType: 'contract IERC20',
				name: 'paymentToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'cost',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'contract IMintableERC721V5',
				name: 'receiveNFT',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'receiveNum',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'available',
				type: 'bool',
			},
		],
		name: 'ItemChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract IMintableERC721V5',
				name: 'nft',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldSupply',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newSupply',
				type: 'uint256',
			},
		],
		name: 'NftSupplyChanged',
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
				internalType: 'address',
				name: 'oldReceiver',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newReceiver',
				type: 'address',
			},
		],
		name: 'ReceiverChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldValue',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newValue',
				type: 'uint256',
			},
		],
		name: 'StartAtChanged',
		type: 'event',
	},
	{
		inputs: [],
		name: 'WETH',
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
		name: 'acceptOwner',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IERC20[]',
				name: '_paymentTokens',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_costs',
				type: 'uint256[]',
			},
			{
				internalType: 'contract IMintableERC721V5[]',
				name: '_receiveNFTs',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_receiveNums',
				type: 'uint256[]',
			},
		],
		name: 'addItems',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'allItems',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'contract IERC20',
						name: 'paymentToken',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'cost',
						type: 'uint256',
					},
					{
						internalType: 'contract IMintableERC721V5',
						name: 'receiveNFT',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'receiveNum',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: 'available',
						type: 'bool',
					},
				],
				internalType: 'struct NFTShop.Item[]',
				name: 'itemList',
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
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_cost',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_receiveNum',
				type: 'uint256',
			},
		],
		name: 'buy',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'contract IERC20',
						name: 'paymentToken',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'cost',
						type: 'uint256',
					},
					{
						internalType: 'contract IMintableERC721V5',
						name: 'receiveNFT',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'receiveNum',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: 'available',
						type: 'bool',
					},
				],
				internalType: 'struct NFTShop.Item[]',
				name: '_items',
				type: 'tuple[]',
			},
		],
		name: 'changeItems',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address payable',
				name: '_receiver',
				type: 'address',
			},
		],
		name: 'changeReceiver',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IMintableERC721V5',
				name: '_nft',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_num',
				type: 'uint256',
			},
		],
		name: 'changeSupply',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: '_ids',
				type: 'uint256[]',
			},
		],
		name: 'disableItems',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: '_ids',
				type: 'uint256[]',
			},
		],
		name: 'enableItems',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'finishAt',
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
		name: 'itemArrayLength',
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
		name: 'itemLength',
		outputs: [
			{
				internalType: 'uint256',
				name: 'length',
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
		name: 'items',
		outputs: [
			{
				internalType: 'uint256',
				name: 'id',
				type: 'uint256',
			},
			{
				internalType: 'contract IERC20',
				name: 'paymentToken',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'cost',
				type: 'uint256',
			},
			{
				internalType: 'contract IMintableERC721V5',
				name: 'receiveNFT',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'receiveNum',
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
				internalType: 'contract IMintableERC721V5',
				name: '',
				type: 'address',
			},
		],
		name: 'nftSelled',
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
				internalType: 'contract IMintableERC721V5',
				name: '',
				type: 'address',
			},
		],
		name: 'nftSupply',
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
		name: 'pendingOwner',
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
		name: 'receiver',
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
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_finishAt',
				type: 'uint256',
			},
		],
		name: 'setFinishAt',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_addr',
				type: 'address',
			},
		],
		name: 'setPendingOwner',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_startAt',
				type: 'uint256',
			},
		],
		name: 'setStartAt',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'startAt',
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
				name: '',
				type: 'address',
			},
			{
				internalType: 'contract IMintableERC721V5',
				name: '',
				type: 'address',
			},
		],
		name: 'userBuyed',
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
const NFT_SHOP: Contract<typeof abi> = {
	name: 'NFT Shop',
	address: '0xb43018e260c1bbbcd33f1c3d96482fdd106a54a8',
	is_deprecated: false,
	created_at: 1721399760,
	abi: abi,
}
export default NFT_SHOP
