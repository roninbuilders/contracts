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
const GNOSIS_SAFE_PROXY_1: Contract<typeof abi> = {
	name: 'Gnosis Safe Proxy',
	address: '0xbb38191e724baf5a1fb2ebd0a7a32015982449a8',
	is_deprecated: false,
	created_at: 1680608964,
	abi: abi,
}
export default GNOSIS_SAFE_PROXY_1
