import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_oldAdmin',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_newAdmin',
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
				name: '_oldAdmin',
				type: 'address',
			},
		],
		name: 'AdminRemoved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: '_creator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_listingIndex',
				type: 'uint256',
			},
		],
		name: 'ListingCreated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_creator',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: '_listingIndex',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'enum IExchange.TokenType[]',
						name: 'tokenTypes',
						type: 'uint8[]',
					},
					{
						internalType: 'address[]',
						name: 'tokenAddresses',
						type: 'address[]',
					},
					{
						internalType: 'uint256[]',
						name: 'tokenNumbers',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: 'createdAt',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct IExchange.Listing',
				name: '_listing',
				type: 'tuple',
			},
		],
		name: 'ListingDataCreated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
		],
		name: 'OperatorAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
		],
		name: 'OperatorRemoved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [],
		name: 'Paused',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract IERC20',
				name: '_token',
				type: 'address',
			},
		],
		name: 'TokenAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract IERC20',
				name: '_token',
				type: 'address',
			},
		],
		name: 'TokenRemoved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [],
		name: 'Unpaused',
		type: 'event',
	},
	{
		payable: false,
		stateMutability: 'nonpayable',
		type: 'fallback',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_auctionType',
				type: 'address',
			},
		],
		name: 'addAuctionType',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address[]',
				name: '_addedOperators',
				type: 'address[]',
			},
		],
		name: 'addOperators',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'contract IERC20[]',
				name: '_tokens',
				type: 'address[]',
			},
		],
		name: 'addTokens',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'admin',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'auctionTypes',
		outputs: [
			{
				internalType: 'contract IAbstractAuction',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'autoRevalidate',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: '_startingIndex',
				type: 'uint256',
			},
			{
				internalType: 'enum IExchange.TokenType[][]',
				name: '_tokenTypePkgs',
				type: 'uint8[][]',
			},
			{
				internalType: 'address[][]',
				name: '_tokenAddressPkgs',
				type: 'address[][]',
			},
			{
				internalType: 'uint256[][]',
				name: '_tokenNumberPkgs',
				type: 'uint256[][]',
			},
		],
		name: 'batchCreateListings',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '_facilitator',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_listingIndex',
				type: 'uint256',
			},
		],
		name: 'canFacilitateListing',
		outputs: [
			{
				internalType: 'bool',
				name: '_result',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_newAdmin',
				type: 'address',
			},
		],
		name: 'changeAdmin',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [],
		name: 'completeInitilization',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'enum IExchange.TokenType[]',
				name: '_tokenTypes',
				type: 'uint8[]',
			},
			{
				internalType: 'address[]',
				name: '_tokenAddresses',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_tokenNumbers',
				type: 'uint256[]',
			},
		],
		name: 'createOrGetListing',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'exchangeTokenMap',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'exchangeTokens',
		outputs: [
			{
				internalType: 'contract IERC20',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'getExchangeTokenCount',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'uint256',
				name: '_listingIndex',
				type: 'uint256',
			},
		],
		name: 'getListing',
		outputs: [
			{
				internalType: 'enum IExchange.TokenType[]',
				name: '_tokenTypes',
				type: 'uint8[]',
			},
			{
				internalType: 'address[]',
				name: '_tokenAddresses',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_tokenNumbers',
				type: 'uint256[]',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'uint256',
				name: '_listingIndex',
				type: 'uint256',
			},
		],
		name: 'getListingState',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'getListingsCount',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'enum IExchange.TokenType[]',
				name: '_tokenTypes',
				type: 'uint8[]',
			},
			{
				internalType: 'address[]',
				name: '_tokenAddresses',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_tokenNumbers',
				type: 'uint256[]',
			},
		],
		name: 'getMultipleTokensState',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '_bidder',
				type: 'address',
			},
			{
				internalType: 'contract IERC20',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'hasEnoughToken',
		outputs: [
			{
				internalType: 'bool',
				name: '_result',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'initialized',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'contract IERC20',
				name: '_token',
				type: 'address',
			},
		],
		name: 'isTokenExchangeable',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		name: 'listingMap',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'listings',
		outputs: [
			{
				internalType: 'uint256',
				name: 'createdAt',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'operator',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'operators',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [],
		name: 'pause',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'paused',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [],
		name: 'removeAdmin',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: '_index',
				type: 'uint256',
			},
		],
		name: 'removeAuctionType',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address[]',
				name: '_removedOperators',
				type: 'address[]',
			},
		],
		name: 'removeOperators',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'contract IERC20',
				name: '_token',
				type: 'address',
			},
		],
		name: 'removeToken',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'bool',
				name: '_value',
				type: 'bool',
			},
		],
		name: 'setAutoRevalidate',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_stakeHolder',
				type: 'address',
			},
		],
		name: 'setStakeHolder',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: '_listingIndex',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_seller',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_buyer',
				type: 'address',
			},
			{
				internalType: 'contract IERC20',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_auctioneerCut',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_sellerProceeds',
				type: 'uint256',
			},
		],
		name: 'settleDeal',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'stakeHolder',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [],
		name: 'unpause',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const EXCHANGE: Contract<typeof abi> = {
	name: 'Exchange',
	address: '0xd873aca0c666a306e452baf090837d786515ec3f',
	is_deprecated: true,
	created_at: 1638422036,
	abi: abi,
}
export default EXCHANGE
