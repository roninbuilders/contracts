import { Contract } from '@/contract'
const ECOSYSTEM_FUND: Contract = {
	name: 'Ecosystem Fund',
	address: '0x1e7d74b6279e66f3dc6c0e50e69fb8da13432ba5',
	is_deprecated: false,
	updated_at: 1707575168,
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
export default ECOSYSTEM_FUND
