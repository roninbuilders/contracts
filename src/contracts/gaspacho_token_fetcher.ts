import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_accounts',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: '_tokens',
				type: 'address[]',
			},
		],
		name: 'ERC20BalanceOfBatch',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_user',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_tokenAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_startIndex',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_maxLen',
				type: 'uint256',
			},
		],
		name: 'ERC721EnumGetBatchTokensForUser',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_user',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_tokenAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_startId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_maxLen',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_maxId',
				type: 'uint256',
			},
		],
		name: 'ERC721GetBatchTokensForUser',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const
const GASPACHO_TOKEN_FETCHER: Contract<typeof abi> = {
	name: 'Gaspacho Token Fetcher',
	address: '0x274dde3a88100cf4bc1e61d5cde3c0d1adb20d0a',
	is_deprecated: false,
	created_at: 1720645372,
	abi: abi,
}
export default GASPACHO_TOKEN_FETCHER
