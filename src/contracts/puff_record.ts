import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_nonce',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'tokenType',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
		],
		name: 'Record',
		type: 'event',
	},
	{
		inputs: [],
		name: 'nonce',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'tokenType',
				type: 'uint256',
			},
		],
		name: 'search',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const PUFF_RECORD: Contract<typeof abi> = {
	name: 'Puff Record',
	address: '0x96fae041a03a77b6b69cafb6847c0054bbb85357',
	is_deprecated: false,
	created_at: 1721399205,
	abi: abi,
}
export default PUFF_RECORD
