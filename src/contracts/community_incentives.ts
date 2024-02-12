import { Contract } from '@/contract'
const COMMUNITY_INCENTIVES: Contract = {
	name: 'Community Incentives',
	address: '0xf603d9a18a5aaca2d11cb43cbb2b6abc4a5b3e61',
	is_deprecated: false,
	updated_at: 1707575171,
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
export default COMMUNITY_INCENTIVES
