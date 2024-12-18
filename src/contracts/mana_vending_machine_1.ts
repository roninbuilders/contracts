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
				internalType: 'uint256[]',
				name: 'quantities',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'totalEth',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'totalMana',
				type: 'uint256',
			},
		],
		name: 'PurchasePackages',
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
				internalType: 'address',
				name: '_address',
				type: 'address',
			},
		],
		name: 'getManaBalance',
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
				name: 'pkgId',
				type: 'uint8',
			},
		],
		name: 'getPackageFromId',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'manaQty',
						type: 'uint256',
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
						internalType: 'uint256',
						name: 'manaQty',
						type: 'uint256',
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
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'manaBalances',
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
				internalType: 'uint256',
				name: 'manaQty',
				type: 'uint256',
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
				internalType: 'uint256[]',
				name: '_qty',
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
				internalType: 'uint256[]',
				name: '_manaQty',
				type: 'uint256[]',
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
const MANA_VENDING_MACHINE_1: Contract<typeof abi> = {
	name: 'Mana Vending Machine',
	address: '0xd5c7e6257d264ede9cc7a2e74e52df65e727eb4e',
	is_deprecated: false,
	created_at: 1721411235,
	abi: abi,
}
export default MANA_VENDING_MACHINE_1
