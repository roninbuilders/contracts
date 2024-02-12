import { Contract } from '@/contract'
const AXIE_GENE_BREWER: Contract = {
	name: 'Axie Gene Brewer',
	address: '0x54e91daf9362900f94d32bd084beff4bdb73ea62',
	is_deprecated: false,
	updated_at: 1707575155,
	abi: [
		{
			inputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_oldAdmin',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_newAdmin',
					type: 'address',
				},
			],
			name: 'AdminChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_oldAdmin',
					type: 'address',
				},
			],
			name: 'AdminRemoved',
			type: 'event',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'contract IAxieBreedingEvent',
					name: '_breedingEvent',
					type: 'address',
				},
			],
			name: 'addBreedingEvent',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'admin',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'breedingEvents',
			outputs: [
				{
					internalType: 'contract IAxieBreedingEvent',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'uint256',
					name: '_axieId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_birthDate',
					type: 'uint256',
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
					internalType: 'uint256',
					name: '_initialSeed',
					type: 'uint256',
				},
			],
			name: 'brew',
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
					name: '_genes',
					type: 'tuple',
				},
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: '_newAdmin',
					type: 'address',
				},
			],
			name: 'changeAdmin',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
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
					name: '_genes',
					type: 'tuple',
				},
			],
			name: 'isAgamoGenes',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'mutableBodies',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'partDetailRandomRatio',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
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
			name: 'partGeneDetails',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'uint256',
					name: '_axieId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_birthDate',
					type: 'uint256',
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
					internalType: 'uint256',
					name: '_initialSeed',
					type: 'uint256',
				},
			],
			name: 'peekOffspringGenes',
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
					name: '_genes',
					type: 'tuple',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [],
			name: 'removeAdmin',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'uint256',
					name: '_index',
					type: 'uint256',
				},
			],
			name: 'removeBreedingEvent',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_bodies',
					type: 'uint256[]',
				},
				{
					internalType: 'bool',
					name: '_approve',
					type: 'bool',
				},
			],
			name: 'setMutableBodies',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'uint256',
					name: '_partDetailRandomRatio',
					type: 'uint256',
				},
			],
			name: 'setPartDetailRandomRatio',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'uint256',
					name: '_partType',
					type: 'uint256',
				},
				{
					internalType: 'uint256[]',
					name: '_partGeneDetails',
					type: 'uint256[]',
				},
			],
			name: 'setPartGeneDetails',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
export default AXIE_GENE_BREWER
