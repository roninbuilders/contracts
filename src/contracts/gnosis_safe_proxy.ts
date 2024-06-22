import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_singleton',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		stateMutability: 'payable',
		type: 'fallback',
	},
] as const
const GNOSIS_SAFE_PROXY: Contract<typeof abi> = {
	name: 'Gnosis Safe Proxy',
	address: '0xbf3d15e733a5c11c6f4930705bfe9e16126126e0',
	is_deprecated: false,
	created_at: 1692008982,
	abi: abi,
}
export default GNOSIS_SAFE_PROXY
