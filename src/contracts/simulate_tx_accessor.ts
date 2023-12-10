export const SIMULATE_TX_ACCESSOR = {
	name: 'Simulate Tx Accessor',
	address: '0x59ad6735bcd8152b84860cb256dd9e96b85f69da',
	abi: [
		{
			inputs: [],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: 'data',
					type: 'bytes',
				},
				{
					internalType: 'enum Enum.Operation',
					name: 'operation',
					type: 'uint8',
				},
			],
			name: 'simulate',
			outputs: [
				{
					internalType: 'uint256',
					name: 'estimate',
					type: 'uint256',
				},
				{
					internalType: 'bool',
					name: 'success',
					type: 'bool',
				},
				{
					internalType: 'bytes',
					name: 'returnData',
					type: 'bytes',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
