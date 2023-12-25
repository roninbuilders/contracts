import { Contract } from '@/contract'
export const BREEDING_EVENT_2022_LOGIC: Contract = {
	name: 'Breeding Event 2022 Logic',
	address: '0xe83d30a193c6fd3b1dcb8cc7c74b3ad1622ccc17',
	abi: [
		{
			inputs: [],
			stateMutability: 'nonpayable',
			type: 'constructor',
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
			inputs: [],
			name: 'getPeriod',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
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
					name: 'startedAtBlock_',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'endedAtBlock_',
					type: 'uint256',
				},
			],
			name: 'initialize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'isInPeriod',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
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
							internalType: 'uint256',
							name: 'x',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'y',
							type: 'uint256',
						},
					],
					internalType: 'struct AxieGenetics.Genes',
					name: '_sireGenes',
					type: 'tuple',
				},
				{
					components: [
						{
							internalType: 'uint256',
							name: 'x',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'y',
							type: 'uint256',
						},
					],
					internalType: 'struct AxieGenetics.Genes',
					name: '_matronGenes',
					type: 'tuple',
				},
				{
					components: [
						{
							internalType: 'uint256',
							name: 'x',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'y',
							type: 'uint256',
						},
					],
					internalType: 'struct AxieGenetics.Genes',
					name: '_genes',
					type: 'tuple',
				},
				{
					internalType: 'uint256',
					name: '_initialSeed',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'maybeMutateGenes',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'x',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'y',
							type: 'uint256',
						},
					],
					internalType: 'struct AxieGenetics.Genes',
					name: '',
					type: 'tuple',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
	],
}
