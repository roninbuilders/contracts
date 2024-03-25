import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_logic',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_admin',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: '_data',
				type: 'bytes',
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
				name: 'implementation',
				type: 'address',
			},
		],
		name: 'Upgraded',
		type: 'event',
	},
	{
		inputs: [],
		stateMutability: 'payable',
		type: 'fallback',
	},
	{
		inputs: [],
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const JUNGLE_SHOP_PROXY: Contract<typeof abi> = {
	name: 'Jungle Shop Proxy',
	address: '0xe206b322fe38eda3df95558e80d877a9e98bdc1a',
	is_deprecated: false,
	updated_at: 1711327157,
	abi: abi,
}
export default JUNGLE_SHOP_PROXY
