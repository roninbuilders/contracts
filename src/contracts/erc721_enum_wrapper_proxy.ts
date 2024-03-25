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
const ERC721_ENUM_WRAPPER_PROXY: Contract<typeof abi> = {
	name: 'ERC721 Enum Wrapper Proxy',
	address: '0xa26fd5db691f4f40d819d4ce86c19ac144315be1',
	is_deprecated: false,
	updated_at: 1711327158,
	abi: abi,
}
export default ERC721_ENUM_WRAPPER_PROXY
