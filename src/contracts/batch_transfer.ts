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
				internalType: 'address',
				name: 'tokenAddress',
				type: 'address',
			},
			{
				internalType: 'address[]',
				name: 'recipients',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'tokenIds',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
		],
		name: 'batchTransferERC1155',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'tokenAddress',
				type: 'address',
			},
			{
				internalType: 'address[]',
				name: 'recipients',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
		],
		name: 'batchTransferERC20',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'tokenAddress',
				type: 'address',
			},
			{
				internalType: 'address[]',
				name: 'recipients',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'tokenIds',
				type: 'uint256[]',
			},
		],
		name: 'batchTransferERC721',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const BATCH_TRANSFER: Contract<typeof abi> = {
	name: 'Batch Transfer',
	address: '0xd51dc8f3885d48736da2759fa91ffcc85801dc6f',
	is_deprecated: false,
	updated_at: 1708386985,
	abi: abi,
}
export default BATCH_TRANSFER
