import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
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
				name: 'buyer',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'package',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'quantity',
				type: 'uint256',
			},
		],
		name: 'PurchaseEvent',
		type: 'event',
	},
	{
		inputs: [],
		name: 'contractBalance',
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
				internalType: 'uint8',
				name: 'packageIndex',
				type: 'uint8',
			},
		],
		name: 'getPackageFromIndex',
		outputs: [
			{
				components: [
					{
						internalType: 'string',
						name: 'packageId',
						type: 'string',
					},
					{
						internalType: 'uint256',
						name: 'price',
						type: 'uint256',
					},
				],
				internalType: 'struct ManaVendingMachine.Package',
				name: '',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getPackages',
		outputs: [
			{
				components: [
					{
						internalType: 'string',
						name: 'packageId',
						type: 'string',
					},
					{
						internalType: 'uint256',
						name: 'price',
						type: 'uint256',
					},
				],
				internalType: 'struct ManaVendingMachine.Package[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getPkgQty',
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
		name: 'packages',
		outputs: [
			{
				internalType: 'string',
				name: 'packageId',
				type: 'string',
			},
			{
				internalType: 'uint256',
				name: 'price',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'pkgQty',
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
				internalType: 'uint256',
				name: '_index',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_quantity',
				type: 'uint256',
			},
		],
		name: 'purchasePackage',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: '_indices',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_quantities',
				type: 'uint256[]',
			},
		],
		name: 'purchasePackages',
		outputs: [],
		stateMutability: 'payable',
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
				internalType: 'string[]',
				name: '_packageIds',
				type: 'string[]',
			},
			{
				internalType: 'uint256[]',
				name: '_prices',
				type: 'uint256[]',
			},
		],
		name: 'setPackages',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_vaultAdress',
				type: 'address',
			},
		],
		name: 'setVaultAddress',
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
		inputs: [],
		name: 'vaultAddress',
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
		inputs: [
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'withdraw',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'withdrawAll',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const MANA_VENDING_MACHINE_2: Contract<typeof abi> = {
	name: 'Mana Vending Machine',
	address: '0x946c66d2e9847539f109f5e9959cc1fb0baf9f37',
	is_deprecated: false,
	created_at: 1736536484,
	abi: abi,
}
export default MANA_VENDING_MACHINE_2
