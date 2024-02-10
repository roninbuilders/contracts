import { Contract } from '@/contract'
const ERC721_BATCH_TRANSFER: Contract = {
	name: 'ERC721 Batch Transfer',
	address: '0x2368dfed532842db89b470fde9fd584d48d4f644',
	is_deprecated: false,
	updated_at: 1707575152,
	abi: [
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
	],
}
export default ERC721_BATCH_TRANSFER
