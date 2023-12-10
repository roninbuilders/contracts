export const FAST_FINALITY_TRACKING = {
	name: 'Fast Finality Tracking',
	address: '0x241e507363d674c77a9930f31ea26bbc8857949c',
	abi: [
		{
			inputs: [],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			inputs: [],
			name: 'ErrCallerMustBeCoinbase',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'enum ContractType',
					name: 'contractType',
					type: 'uint8',
				},
			],
			name: 'ErrContractTypeNotFound',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrOncePerBlock',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'msgSig',
					type: 'bytes4',
				},
				{
					internalType: 'enum RoleAccess',
					name: 'expectedRole',
					type: 'uint8',
				},
			],
			name: 'ErrUnauthorized',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'addr',
					type: 'address',
				},
			],
			name: 'ErrZeroCodeContract',
			type: 'error',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'enum ContractType',
					name: 'contractType',
					type: 'uint8',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'addr',
					type: 'address',
				},
			],
			name: 'ContractUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint8',
					name: 'version',
					type: 'uint8',
				},
			],
			name: 'Initialized',
			type: 'event',
		},
		{
			inputs: [
				{
					internalType: 'enum ContractType',
					name: 'contractType',
					type: 'uint8',
				},
			],
			name: 'getContract',
			outputs: [
				{
					internalType: 'address',
					name: 'contract_',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'epoch',
					type: 'uint256',
				},
				{
					internalType: 'address[]',
					name: 'addrs',
					type: 'address[]',
				},
			],
			name: 'getManyFinalityVoteCounts',
			outputs: [
				{
					internalType: 'uint256[]',
					name: 'voteCounts',
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
					name: 'validatorContract',
					type: 'address',
				},
			],
			name: 'initialize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address[]',
					name: 'voters',
					type: 'address[]',
				},
			],
			name: 'recordFinality',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'enum ContractType',
					name: 'contractType',
					type: 'uint8',
				},
				{
					internalType: 'address',
					name: 'addr',
					type: 'address',
				},
			],
			name: 'setContract',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
