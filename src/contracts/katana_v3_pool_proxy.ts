import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
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
const KATANA_V3_POOL_PROXY: Contract<typeof abi> = {
	name: 'Katana V3 Pool Proxy',
	address: '0x392d372f2a51610e9ac5b741379d5631ca9a1c7f',
	is_deprecated: false,
	created_at: 1732603221,
	abi: abi,
}
export default KATANA_V3_POOL_PROXY
