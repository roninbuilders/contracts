import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'tokenId',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'quoteTokenAddress',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'baseTokenAddress',
						type: 'address',
					},
					{
						internalType: 'string',
						name: 'quoteTokenSymbol',
						type: 'string',
					},
					{
						internalType: 'string',
						name: 'baseTokenSymbol',
						type: 'string',
					},
					{
						internalType: 'uint8',
						name: 'quoteTokenDecimals',
						type: 'uint8',
					},
					{
						internalType: 'uint8',
						name: 'baseTokenDecimals',
						type: 'uint8',
					},
					{
						internalType: 'bool',
						name: 'flipRatio',
						type: 'bool',
					},
					{
						internalType: 'int24',
						name: 'tickLower',
						type: 'int24',
					},
					{
						internalType: 'int24',
						name: 'tickUpper',
						type: 'int24',
					},
					{
						internalType: 'int24',
						name: 'tickCurrent',
						type: 'int24',
					},
					{
						internalType: 'int24',
						name: 'tickSpacing',
						type: 'int24',
					},
					{
						internalType: 'uint24',
						name: 'fee',
						type: 'uint24',
					},
					{
						internalType: 'address',
						name: 'poolAddress',
						type: 'address',
					},
				],
				internalType: 'struct NFTDescriptor.ConstructTokenURIParams',
				name: 'params',
				type: 'tuple',
			},
		],
		name: 'constructTokenURI',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
] as const
const NFT_DESCRIPTOR: Contract<typeof abi> = {
	name: 'NFT Descriptor',
	address: '0x8f5d2b4b95677833ac62718cf09152efcfe0ad94',
	is_deprecated: false,
	created_at: 1732163848,
	abi: abi,
}
export default NFT_DESCRIPTOR
