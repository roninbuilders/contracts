import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'implementation',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: '_data',
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
] as const
const MIRPASS_V4_PROXY: Contract<typeof abi> = {
	name: 'Mirpass V4 Proxy',
	address: '0x36ad85bade93ec08dfddc0dd0186bf685d7c3962',
	is_deprecated: false,
	created_at: 1729989561,
	abi: abi,
}
export default MIRPASS_V4_PROXY
