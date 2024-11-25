import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		name: 'getCurrentBlockTimestamp',
		outputs: [
			{
				internalType: 'uint256',
				name: 'timestamp',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'getEthBalance',
		outputs: [
			{
				internalType: 'uint256',
				name: 'balance',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'target',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'gasLimit',
						type: 'uint256',
					},
					{
						internalType: 'bytes',
						name: 'callData',
						type: 'bytes',
					},
				],
				internalType: 'struct KatanaInterfaceMulticall.Call[]',
				name: 'calls',
				type: 'tuple[]',
			},
		],
		name: 'multicall',
		outputs: [
			{
				internalType: 'uint256',
				name: 'blockNumber',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'bool',
						name: 'success',
						type: 'bool',
					},
					{
						internalType: 'uint256',
						name: 'gasUsed',
						type: 'uint256',
					},
					{
						internalType: 'bytes',
						name: 'returnData',
						type: 'bytes',
					},
				],
				internalType: 'struct KatanaInterfaceMulticall.Result[]',
				name: 'returnData',
				type: 'tuple[]',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const KATANA_INTERFACE_MULTICALL: Contract<typeof abi> = {
	name: 'Katana Interface Multicall',
	address: '0x48365cca8769c926ffbfe5b43f0e360363e8ee70',
	is_deprecated: false,
	created_at: 1732163875,
	abi: abi,
}
export default KATANA_INTERFACE_MULTICALL
