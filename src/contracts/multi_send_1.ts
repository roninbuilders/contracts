import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [
			{
				internalType: 'bytes',
				name: 'transactions',
				type: 'bytes',
			},
		],
		name: 'multiSend',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
] as const
const MULTI_SEND_1: Contract<typeof abi> = {
	name: 'Multi Send',
	address: '0xa238cbeb142c10ef7ad8442c6d1f9e89e07e7761',
	is_deprecated: false,
	created_at: 1635392443,
	abi: abi,
}
export default MULTI_SEND_1
