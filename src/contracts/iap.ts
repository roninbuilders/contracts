import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_superAdmin',
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
				internalType: 'string',
				name: 'id',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'price',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'buyer',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'recipient',
				type: 'address',
			},
		],
		name: 'Purchase',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'withdrawer',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'cutId',
				type: 'string',
			},
		],
		name: 'Withdraw',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'cutId',
				type: 'string',
			},
		],
		name: 'getCutBalance',
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
		name: 'listProducts',
		outputs: [
			{
				components: [
					{
						internalType: 'string',
						name: 'id',
						type: 'string',
					},
				],
				internalType: 'struct IAP.Product[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'listRevShares',
		outputs: [
			{
				components: [
					{
						internalType: 'address payable',
						name: 'to',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256',
					},
				],
				internalType: 'struct IAP.RevShare[]',
				name: '',
				type: 'tuple[]',
			},
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
				internalType: 'string',
				name: 'productId',
				type: 'string',
			},
			{
				internalType: 'address',
				name: 'recipient',
				type: 'address',
			},
			{
				internalType: 'string',
				name: 'cutId',
				type: 'string',
			},
			{
				internalType: 'int256',
				name: 'timestamp',
				type: 'int256',
			},
			{
				internalType: 'bytes',
				name: 'signature',
				type: 'bytes',
			},
		],
		name: 'purchaseProduct',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'newCatalogAdmins',
				type: 'address[]',
			},
		],
		name: 'updateCatalogAdmins',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'string',
						name: 'id',
						type: 'string',
					},
				],
				internalType: 'struct IAP.Product[]',
				name: 'newProducts',
				type: 'tuple[]',
			},
			{
				internalType: 'address',
				name: 'newPurchaseSigner',
				type: 'address',
			},
		],
		name: 'updateProducts',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address payable',
						name: 'to',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256',
					},
				],
				internalType: 'struct IAP.RevShare[]',
				name: 'newRevShares',
				type: 'tuple[]',
			},
			{
				internalType: 'uint256',
				name: 'newRevShareCutWeight',
				type: 'uint256',
			},
		],
		name: 'updateRevShares',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_newSuperAdmin',
				type: 'address',
			},
		],
		name: 'updateSuperAdmin',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'cutId',
				type: 'string',
			},
			{
				internalType: 'int256',
				name: 'timestamp',
				type: 'int256',
			},
			{
				internalType: 'bytes',
				name: 'signature',
				type: 'bytes',
			},
		],
		name: 'withdrawCut',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const IAP: Contract<typeof abi> = {
	name: 'IAP',
	address: '0xcaef47717e49c82deec1a2eebde6d1f5bebfd3ba',
	is_deprecated: false,
	updated_at: 1707758981,
	abi: abi,
}
export default IAP
