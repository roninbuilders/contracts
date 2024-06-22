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
const REWARDS: Contract<typeof abi> = {
	name: 'Rewards',
	address: '0xd217ad3332335e5dca5ca566d35177f25d92059c',
	is_deprecated: false,
	created_at: 1660894269,
	abi: abi,
}
export default REWARDS
