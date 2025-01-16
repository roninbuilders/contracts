import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'wallets',
				type: 'address[]',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'tokenAddress',
						type: 'address',
					},
					{
						internalType: 'uint8',
						name: 'tokenType',
						type: 'uint8',
					},
					{
						internalType: 'uint256[]',
						name: 'tokenIds',
						type: 'uint256[]',
					},
				],
				internalType: 'struct MultiReadV2.TokenQuery[]',
				name: 'tokens',
				type: 'tuple[]',
			},
		],
		name: 'getBalances',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'nativeBalances',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[][][]',
				name: 'tokenBalances',
				type: 'uint256[][][]',
			},
		],
		stateMutability: 'view',
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
				name: 'wallets',
				type: 'address[]',
			},
		],
		name: 'getERC20Balances',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'tokenBalances',
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
				name: 'tokenAddress',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'startId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'endId',
				type: 'uint256',
			},
		],
		name: 'getERC721Owners',
		outputs: [
			{
				internalType: 'address[]',
				name: 'owners',
				type: 'address[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'wallets',
				type: 'address[]',
			},
		],
		name: 'getNativeBalances',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'nativeBalances',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const
const MULTI_READ_V2: Contract<typeof abi> = {
	name: 'Multi Read V2',
	address: '0x02fde6dae2176048dc6a010e694d4c6140d91c15',
	is_deprecated: false,
	created_at: 0,
	abi: abi,
}
export default MULTI_READ_V2
