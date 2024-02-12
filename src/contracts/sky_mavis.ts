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
const SKY_MAVIS: Contract<typeof abi> = {
	name: 'Sky Mavis',
	address: '0x41d8cf42236ae15cc7b0c0df619a95822d7ad423',
	is_deprecated: false,
	updated_at: 1707758991,
	abi: abi,
}
export default SKY_MAVIS
