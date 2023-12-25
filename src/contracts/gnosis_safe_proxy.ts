import { Contract } from '@/contract'
export const GNOSIS_SAFE_PROXY: Contract = {
	name: 'Gnosis Safe Proxy',
	address: '0xbf3d15e733a5c11c6f4930705bfe9e16126126e0',
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
