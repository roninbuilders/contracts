import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'pool',
				type: 'address',
			},
			{
				internalType: 'int16',
				name: 'tickBitmapIndex',
				type: 'int16',
			},
		],
		name: 'getPopulatedTicksInWord',
		outputs: [
			{
				components: [
					{
						internalType: 'int24',
						name: 'tick',
						type: 'int24',
					},
					{
						internalType: 'int128',
						name: 'liquidityNet',
						type: 'int128',
					},
					{
						internalType: 'uint128',
						name: 'liquidityGross',
						type: 'uint128',
					},
				],
				internalType: 'struct ITickLens.PopulatedTick[]',
				name: 'populatedTicks',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const
const TICK_LENS: Contract<typeof abi> = {
	name: 'Tick Lens',
	address: '0x05ad77f1e419dac0b580a2ca08cb1e3e33f946ee',
	is_deprecated: false,
	created_at: 1732163869,
	abi: abi,
}
export default TICK_LENS
