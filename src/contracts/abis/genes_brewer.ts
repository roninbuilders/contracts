export const GENES_BREWER_ABI = [
	{
		constant: false,
		inputs: [],
		name: '',
		outputs: null,
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_oldAdmin',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_newAdmin',
				type: 'address',

			},
		],
		name: 'AdminChanged',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_oldAdmin',
				type: 'address',

			},
		],
		name: 'AdminRemoved',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_breedingEvent',
				type: 'address',

			},
		],
		name: 'addBreedingEvent',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [],
		name: 'admin',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'address',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint256',

			},
		],
		name: 'breedingEvents',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'address',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_axieId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_birthDate',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_sireGenes',
				type: 'tuple',
				components: [
					{
						internal_type: '',
						name: 'x',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'y',
						type: 'uint256',
					},
				],

			},
			{
				internal_type: '',
				name: '_matronGenes',
				type: 'tuple',
				components: [
					{
						internal_type: '',
						name: 'x',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'y',
						type: 'uint256',
					},
				],

			},
			{
				internal_type: '',
				name: '_initialSeed',
				type: 'uint256',

			},
		],
		name: 'brew',
		outputs: [
			{
				internal_type: '',
				name: '_genes',
				type: 'tuple',
				components: [
					{
						internal_type: '',
						name: 'x',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'y',
						type: 'uint256',
					},
				],

			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_newAdmin',
				type: 'address',

			},
		],
		name: 'changeAdmin',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [
			{
				internal_type: '',
				name: '_genes',
				type: 'tuple',
				components: [
					{
						internal_type: '',
						name: 'x',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'y',
						type: 'uint256',
					},
				],

			},
		],
		name: 'isAgamoGenes',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bool',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint256',

			},
		],
		name: 'mutableBodies',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bool',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [],
		name: 'partDetailRandomRatio',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint256',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '',
				type: 'uint256',

			},
		],
		name: 'partGeneDetails',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint256',

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [
			{
				internal_type: '',
				name: '_axieId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_birthDate',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_sireGenes',
				type: 'tuple',
				components: [
					{
						internal_type: '',
						name: 'x',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'y',
						type: 'uint256',
					},
				],

			},
			{
				internal_type: '',
				name: '_matronGenes',
				type: 'tuple',
				components: [
					{
						internal_type: '',
						name: 'x',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'y',
						type: 'uint256',
					},
				],

			},
			{
				internal_type: '',
				name: '_initialSeed',
				type: 'uint256',

			},
		],
		name: 'peekOffspringGenes',
		outputs: [
			{
				internal_type: '',
				name: '_genes',
				type: 'tuple',
				components: [
					{
						internal_type: '',
						name: 'x',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'y',
						type: 'uint256',
					},
				],

			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'removeAdmin',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_index',
				type: 'uint256',

			},
		],
		name: 'removeBreedingEvent',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_bodies',
				type: 'uint256[]',

			},
			{
				internal_type: '',
				name: '_approve',
				type: 'bool',

			},
		],
		name: 'setMutableBodies',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_partDetailRandomRatio',
				type: 'uint256',

			},
		],
		name: 'setPartDetailRandomRatio',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_partType',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_partGeneDetails',
				type: 'uint256[]',

			},
		],
		name: 'setPartGeneDetails',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
]
