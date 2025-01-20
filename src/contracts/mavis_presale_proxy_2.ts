import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'beacon',
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
		inputs: [
			{
				internalType: 'address',
				name: 'target',
				type: 'address',
			},
		],
		name: 'AddressEmptyCode',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'beacon',
				type: 'address',
			},
		],
		name: 'ERC1967InvalidBeacon',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'implementation',
				type: 'address',
			},
		],
		name: 'ERC1967InvalidImplementation',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ERC1967NonPayable',
		type: 'error',
	},
	{
		inputs: [],
		name: 'FailedInnerCall',
		type: 'error',
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
		inputs: [],
		stateMutability: 'payable',
		type: 'fallback',
	},
] as const
const MAVIS_PRESALE_PROXY_2: Contract<typeof abi> = {
	name: 'Mavis Presale Proxy',
	address: '0x69e2099fbc9020f8dd29c2d959ca15e5d529f041',
	is_deprecated: false,
	created_at: 1736825002,
	abi: abi,
}
export default MAVIS_PRESALE_PROXY_2
