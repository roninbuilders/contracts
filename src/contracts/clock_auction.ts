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
				name: '_seller',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_listingIndex',
				type: 'uint256',
			},
		],
		name: 'AuctionCancelled',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: '_seller',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_listingIndex',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: '_startingPrices',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: '_endingPrices',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'contract IERC20[]',
				name: '_exchangeTokens',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: '_durations',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_startingTimestamps',
				type: 'uint256',
			},
		],
		name: 'AuctionCreated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: '_seller',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: '_buyer',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_listingIndex',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'contract IERC20',
				name: '_token',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_totalPrice',
				type: 'uint256',
			},
		],
		name: 'AuctionSuccessful',
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
				internalType: 'address',
				name: '_seller',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_listingIndex',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: '_exchangeTokens',
				type: 'address',
			},
		],
		name: 'TokenAuctionCancelled',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [],
		name: 'Unpaused',
		type: 'event',
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
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'auctions',
		outputs: [
			{
				internalType: 'address',
				name: 'seller',
				type: 'address',
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
				internalType: 'bytes[]',
				name: '_pkgs',
				type: 'bytes[]',
			},
		],
		name: 'batchCreateAuctions',
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
		],
		name: 'cancelAuction',
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
				name: '_token',
				type: 'address',
			},
		],
		name: 'cancelTokenAuction',
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
			{
				internalType: 'uint256[]',
				name: '_startingPrices',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_endingPrices',
				type: 'uint256[]',
			},
			{
				internalType: 'contract IERC20[]',
				name: '_exchangeTokens',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_durations',
				type: 'uint256[]',
			},
		],
		name: 'createAuction',
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
				internalType: 'uint256[]',
				name: '_startingPrices',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_endingPrices',
				type: 'uint256[]',
			},
			{
				internalType: 'contract IERC20[]',
				name: '_exchangeTokens',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_durations',
				type: 'uint256[]',
			},
		],
		name: 'createAuction',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'exchangeContract',
		outputs: [
			{
				internalType: 'contract IExchange',
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
				internalType: 'address',
				name: '_seller',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_listingIndex',
				type: 'uint256',
			},
		],
		name: 'getAuctionInfos',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'startingPrice',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'endingPrice',
						type: 'uint256',
					},
					{
						internalType: 'contract IERC20',
						name: 'exchangeToken',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'duration',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'startedAt',
						type: 'uint256',
					},
				],
				internalType: 'struct IClockAuction.AuctionInfo[]',
				name: '',
				type: 'tuple[]',
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
				name: '_seller',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_listingIndex',
				type: 'uint256',
			},
		],
		name: 'getCurrentPrices',
		outputs: [
			{
				internalType: 'contract IERC20[]',
				name: '',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '',
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
				internalType: 'address',
				name: '_tokenAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_tokenNumber',
				type: 'uint256',
			},
		],
		name: 'getTokenAuctions',
		outputs: [
			{
				internalType: 'address[]',
				name: '_sellers',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_listingIndexes',
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
				internalType: 'address',
				name: '_tokenAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_tokenNumber',
				type: 'uint256',
			},
		],
		name: 'getTokenAuctionsCount',
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
				internalType: 'address',
				name: '_seller',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_listingIndex',
				type: 'uint256',
			},
		],
		name: 'isAuctionExisting',
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
		constant: true,
		inputs: [],
		name: 'ownerCut',
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
				internalType: 'address',
				name: '_seller',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_listingIndex',
				type: 'uint256',
			},
		],
		name: 'revalidateAuction',
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
		],
		name: 'revalidateRelatedAuctions',
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
				name: '_newOwnerCut',
				type: 'uint256',
			},
		],
		name: 'setOwnerCut',
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
				name: '_tokenMaxOccurrences',
				type: 'uint256',
			},
		],
		name: 'setTokenMaxOccurrences',
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
				name: '_seller',
				type: 'address',
			},
			{
				internalType: 'contract IERC20',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_bidAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_listingIndex',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_listingState',
				type: 'uint256',
			},
		],
		name: 'settleAuction',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'tokenMaxOccurrences',
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
		constant: false,
		inputs: [],
		name: 'unpause',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'contract IExchange',
				name: '_exchangeContract',
				type: 'address',
			},
		],
		name: 'updateExchangeContract',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [],
		name: 'withdrawEther',
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
		name: 'withdrawToken',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const CLOCK_AUCTION: Contract<typeof abi> = {
	name: 'Clock Auction',
	address: '0x004965ea925a7cc0dfa9c080bba9249aef5e9d54',
	is_deprecated: true,
	created_at: 1632220760,
	abi: abi,
}
export default CLOCK_AUCTION
