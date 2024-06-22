import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'contract CEther',
				name: 'cEther_',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		constant: true,
		inputs: [],
		name: 'cEther',
		outputs: [
			{
				internalType: 'contract CEther',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
		],
		name: 'repayBehalf',
		outputs: [],
		payable: true,
		stateMutability: 'payable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				internalType: 'contract CEther',
				name: 'cEther_',
				type: 'address',
			},
		],
		name: 'repayBehalfExplicit',
		outputs: [],
		payable: true,
		stateMutability: 'payable',
		type: 'function',
	},
] as const
const MAXIMILLION: Contract<typeof abi> = {
	name: 'Maximillion',
	address: '0x8ec33467a63ff3c660369d60dcba3b98ebd3642d',
	is_deprecated: false,
	created_at: 1681170038,
	abi: abi,
}
export default MAXIMILLION
