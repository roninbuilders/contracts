import { Contract } from '@/contract'
export const ZOIDS_NFT_PROXY: Contract = {
	name: 'Zoids NFT Proxy',
	address: '0x1ff0ec95560c3bf3bf01d5071ac9140819be429a',
	abi: [
		{
			inputs: [
				{
					internalType: 'address',
					name: 'logic',
					type: 'address',
				},
				{
					internalType: 'bytes',
					name: 'data',
					type: 'bytes',
				},
			],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			stateMutability: 'payable',
			type: 'fallback',
		},
		{
			stateMutability: 'payable',
			type: 'receive',
		},
	],
}
