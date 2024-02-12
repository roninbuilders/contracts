import { Contract } from '@/contract'
const REWARDS: Contract = {
	name: 'Rewards',
	address: '0xd217ad3332335e5dca5ca566d35177f25d92059c',
	is_deprecated: false,
	updated_at: 1707575156,
	abi: [
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
	],
}
export default REWARDS
