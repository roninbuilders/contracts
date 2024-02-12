import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'contract IERC721',
				name: '_tokenContract',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: '_ids',
				type: 'uint256[]',
			},
			{
				internalType: 'address[]',
				name: '_recipients',
				type: 'address[]',
			},
		],
		name: 'safeBatchTransfer',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IERC721',
				name: '_tokenContract',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: '_ids',
				type: 'uint256[]',
			},
			{
				internalType: 'address',
				name: '_recipient',
				type: 'address',
			},
		],
		name: 'safeBatchTransfer',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const ERC721_BATCH_TRANSFER: Contract<typeof abi> = {
	name: 'ERC721 Batch Transfer',
	address: '0x2368dfed532842db89b470fde9fd584d48d4f644',
	is_deprecated: false,
	updated_at: 1707758994,
	abi: abi,
}
export default ERC721_BATCH_TRANSFER
