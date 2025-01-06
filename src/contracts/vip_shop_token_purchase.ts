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
				name: '_convertId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: '_userWalletAddress',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_accountId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_requestId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'string',
				name: '_packageId',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_targetTotalPurchaseAmount',
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
				name: '_tokenAmount',
				type: 'uint256',
			},
		],
		name: 'PurchaseSuccess',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_systemAddress',
				type: 'address',
			},
		],
		name: 'UpdatedSystemAddress',
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
				name: '_purchaseId',
				type: 'uint256',
			},
		],
		name: 'getPurchaseStructById',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'purchaseId',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'userAddress',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'accountId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'requestId',
						type: 'uint256',
					},
					{
						internalType: 'string',
						name: 'packageId',
						type: 'string',
					},
					{
						internalType: 'uint256',
						name: 'targetTotalPurchaseAmount',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'tokenAddress',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'tokenAmount',
						type: 'uint256',
					},
				],
				internalType: 'struct VIPShopTokenPurchase.PurchaseStruct',
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
				name: '_userAddress',
				type: 'address',
			},
			{
				internalType: 'string',
				name: '_packageId',
				type: 'string',
			},
		],
		name: 'getUserPurchasedPackageAmount',
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
		name: 'initialize',
		outputs: [],
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
				name: '_accountId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_requestId',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: '_packageId',
				type: 'string',
			},
			{
				internalType: 'uint256',
				name: '_targetTotalPurchaseAmount',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_tokenAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
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
		name: 'purchaseItem',
		outputs: [],
		stateMutability: 'nonpayable',
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
				name: '',
				type: 'uint256',
			},
		],
		name: 'requestIdMap',
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
				name: '_systemAddress',
				type: 'address',
			},
		],
		name: 'setupSystemAddress',
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
	{
		inputs: [
			{
				internalType: 'address',
				name: '_tokenAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_targetWallet',
				type: 'address',
			},
		],
		name: 'withdrawFunds',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const VIP_SHOP_TOKEN_PURCHASE: Contract<typeof abi> = {
	name: 'VIP Shop Token Purchase',
	address: '0x87a866bd87c5f410d49309cbe8deea49c8758122',
	is_deprecated: false,
	created_at: 1733997767,
	abi: abi,
}
export default VIP_SHOP_TOKEN_PURCHASE
