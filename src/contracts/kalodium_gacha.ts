import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_gachaPrice',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_dailyRedeemAmount',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_kalodiumAddress',
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
				indexed: true,
				internalType: 'address',
				name: '_manager',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: '_newKalodium',
				type: 'address',
			},
		],
		name: 'kalodiumUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_player',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: '_paymentHash',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_price',
				type: 'uint256',
			},
		],
		name: 'playedGacha',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_manager',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_newPrice',
				type: 'uint256',
			},
		],
		name: 'priceUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_manager',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_newPrice',
				type: 'uint256',
			},
		],
		name: 'redeemAmountUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_player',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_unixTs',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'redeemedDaily',
		type: 'event',
	},
	{
		inputs: [],
		name: 'dailyRedeemAmount',
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
		name: 'gachaPrice',
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
		name: 'kalodium',
		outputs: [
			{
				internalType: 'contract IKalodium',
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
				name: 'account',
				type: 'address',
			},
		],
		name: 'lastClaimTs',
		outputs: [
			{
				internalType: 'uint256',
				name: 'unixTs',
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
				name: 'account',
				type: 'address',
			},
		],
		name: 'paymentCount',
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
				internalType: 'bytes32',
				name: '_paymentHash',
				type: 'bytes32',
			},
		],
		name: 'playGacha',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		name: 'proofOfPayment',
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
		name: 'redeemDaily',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_newAmount',
				type: 'uint256',
			},
		],
		name: 'setDailyRedeemAmount',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_newAddress',
				type: 'address',
			},
		],
		name: 'setKalodiumAddress',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_price',
				type: 'uint256',
			},
		],
		name: 'setPrice',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const KALODIUM_GACHA: Contract<typeof abi> = {
	name: 'Kalodium Gacha',
	address: '0x2b7e3ddd371f4593d3d488e2eff14381d1d3ec58',
	is_deprecated: false,
	created_at: 1722089098,
	abi: abi,
}
export default KALODIUM_GACHA
