import { Contract } from '@/contract'
const abi = [
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
] as const
const ZOIDS_NFT_PROXY: Contract<typeof abi> = {
	name: 'Zoids NFT Proxy',
	address: '0x1ff0ec95560c3bf3bf01d5071ac9140819be429a',
	is_deprecated: false,
	created_at: 1699337968,
	abi: abi,
}
export default ZOIDS_NFT_PROXY
