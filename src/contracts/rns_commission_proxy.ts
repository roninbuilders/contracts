import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'logic',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'admin',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		stateMutability: 'payable',
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
		stateMutability: 'payable',
		type: 'fallback',
	},
	{
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const RNS_COMMISSION_PROXY: Contract<typeof abi> = {
	name: 'RNS Commission Proxy',
	address: '0x1bece3a948c14eefbaace67fe6f51cd21b79aa21',
	is_deprecated: false,
	created_at: 1720085010,
	abi: abi,
}
export default RNS_COMMISSION_PROXY
