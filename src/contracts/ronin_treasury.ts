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
const RONIN_TREASURY: Contract<typeof abi> = {
	name: 'Ronin Treasury',
	address: '0x22cefc91e9b7c0f3890ebf9527ea89053490694e',
	is_deprecated: false,
	updated_at: 1707758995,
	abi: abi,
}
export default RONIN_TREASURY
