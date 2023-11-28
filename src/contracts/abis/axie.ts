export const AXIE_ABI = [
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
				name: '_owner',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_approved',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_tokenId',
				type: 'uint256',

			},
		],
		name: 'Approval',
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
				name: '_owner',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_operator',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_approved',
				type: 'bool',

			},
		],
		name: 'ApprovalForAll',
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
				name: '_axieId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_breedCount',
				type: 'uint256',

			},
		],
		name: 'AxieBreedCountUpdated',
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
				name: '_axieId',
				type: 'uint256',

			},
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
		name: 'AxieEvolved',
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
				name: '_axieId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_axie',
				type: 'tuple',
				components: [
					{
						internal_type: '',
						name: 'sireId',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'matronId',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'birthDate',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'genes',
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
						name: 'breedCount',
						type: 'uint8',
					},
					{
						internal_type: '',
						name: 'level',
						type: 'uint16',
					},
				],

			},
		],
		name: 'AxieMinted',
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
				name: '_axieId',
				type: 'uint256',

			},
		],
		name: 'AxieSpawn',
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
				name: '_axieId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_axie',
				type: 'tuple',
				components: [
					{
						internal_type: '',
						name: 'sireId',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'matronId',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'birthDate',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'genes',
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
						name: 'breedCount',
						type: 'uint8',
					},
					{
						internal_type: '',
						name: 'level',
						type: 'uint16',
					},
				],

			},
			{
				internal_type: '',
				name: '_axiegg',
				type: 'tuple',
				components: [
					{
						internal_type: '',
						name: 'sireGenes',
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
						name: 'matronGenes',
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

			},
		],
		name: 'AxieggMinted',
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
				name: '_axieId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_sireId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_matronId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: 'birthDate',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: 'sireGenes',
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
				name: 'matronGenes',
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
		name: 'AxieggSpawned',
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
				name: '_minter',
				type: 'address',

			},
		],
		name: 'MinterAdded',
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
				name: '_minter',
				type: 'address',

			},
		],
		name: 'MinterRemoved',
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
				name: '_tokenId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_nonce',
				type: 'uint256',

			},
		],
		name: 'NonceUpdated',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'Paused',
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
				name: '_owner',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_operator',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_funcSig',
				type: 'bytes4',

			},
			{
				internal_type: '',
				name: '_approved',
				type: 'bool',

			},
		],
		name: 'PermissionSet',
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
				name: '_owner',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_operator',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_approved',
				type: 'bool',

			},
		],
		name: 'PermissionSetAll',
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
				name: '_seeder',
				type: 'address',

			},
		],
		name: 'SeederAdded',
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
				name: '_seeder',
				type: 'address',

			},
		],
		name: 'SeederRemoved',
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
				name: '_spender',
				type: 'address',

			},
		],
		name: 'SpenderUnwhitelisted',
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
				name: '_spender',
				type: 'address',

			},
		],
		name: 'SpenderWhitelisted',
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
				name: '_tokenId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_operator',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_approved',
				type: 'bool',

			},
		],
		name: 'TokenOperatorSet',
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
				name: '_tokenId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_operator',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_funcSig',
				type: 'bytes4',

			},
			{
				internal_type: '',
				name: '_approved',
				type: 'bool',

			},
		],
		name: 'TokenPermissionSet',
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
				name: '_from',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_to',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_tokenId',
				type: 'uint256',

			},
		],
		name: 'Transfer',
		outputs: null,
		payable: false,
		stateMutability: '',
		type: 'event',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'Unpaused',
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
				name: '_addedMinters',
				type: 'address[]',

			},
		],
		name: 'addMinters',
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
				name: '_addedSeeders',
				type: 'address[]',

			},
		],
		name: 'addSeeders',
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
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_to',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_tokenId',
				type: 'uint256',

			},
		],
		name: 'approve',
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
				name: '_sireId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_matronId',
				type: 'uint256',

			},
		],
		name: 'areAxiesEligibleForPairing',
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
		name: 'axie',
		outputs: [
			{
				internal_type: '',
				name: 'sireId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: 'matronId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: 'birthDate',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: 'genes',
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
				name: 'breedCount',
				type: 'uint8',

			},
			{
				internal_type: '',
				name: 'level',
				type: 'uint16',

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
		name: 'axieBreedLimit',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint8',

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
		name: 'axiegg',
		outputs: [
			{
				internal_type: '',
				name: 'sireGenes',
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
				name: 'matronGenes',
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
		constant: true,
		inputs: [
			{
				internal_type: '',
				name: '_owner',
				type: 'address',

			},
		],
		name: 'balanceOf',
		outputs: [
			{
				internal_type: '',
				name: '_balance',
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
		inputs: [],
		name: 'baseTokenURI',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'string',

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
				name: '_axieIds',
				type: 'uint256[]',

			},
			{
				internal_type: '',
				name: '_seeds',
				type: 'uint256[]',

			},
		],
		name: 'batchGrowAxieggsToAdults',
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
				name: '_ids',
				type: 'uint256[]',

			},
			{
				internal_type: '',
				name: '_axiePackages',
				type: 'bytes[]',

			},
			{
				internal_type: '',
				name: '_axieggPackages',
				type: 'bytes[]',

			},
			{
				internal_type: '',
				name: '_owner',
				type: 'address',

			},
		],
		name: 'batchMintAxieggs',
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
				name: '_ids',
				type: 'uint256[]',

			},
			{
				internal_type: '',
				name: '_packages',
				type: 'bytes[]',

			},
			{
				internal_type: '',
				name: '_owner',
				type: 'address',

			},
		],
		name: 'batchMintAxies',
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
				name: '_sireId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_matronId',
				type: 'uint256',

			},
		],
		name: 'breedAxies',
		outputs: [
			{
				internal_type: '',
				name: '_axieId',
				type: 'uint256',

			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [],
		name: 'breedingFee',
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
		inputs: [],
		name: 'breedingFeeToken',
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
		inputs: [],
		name: 'breedingPotion',
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
		inputs: [],
		name: 'currentAxieId',
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
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_axieId',
				type: 'uint256',

			},
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
		name: 'evolveAxie',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [],
		name: 'geneBrewerContract',
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
				name: '_tokenId',
				type: 'uint256',

			},
		],
		name: 'getApproved',
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
				name: '_axieId',
				type: 'uint256',

			},
		],
		name: 'getAxie',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'tuple',
				components: [
					{
						internal_type: '',
						name: 'sireId',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'matronId',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'birthDate',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'genes',
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
						name: 'breedCount',
						type: 'uint8',
					},
					{
						internal_type: '',
						name: 'level',
						type: 'uint16',
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
		constant: true,
		inputs: [
			{
				internal_type: '',
				name: '_axieId',
				type: 'uint256',

			},
		],
		name: 'getAxiegg',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'tuple',
				components: [
					{
						internal_type: '',
						name: 'sireGenes',
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
						name: 'matronGenes',
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
		],
		name: 'getRequirementsForBreeding',
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
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_axieId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_seed',
				type: 'uint256',

			},
		],
		name: 'growAxieggToAdult',
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
				name: '',
				type: 'uint256',

			},
		],
		name: 'hoppingAxieId',
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
				name: '_owner',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_operator',
				type: 'address',

			},
		],
		name: 'isApprovedForAll',
		outputs: [
			{
				internal_type: '',
				name: '_approved',
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
				name: '_operator',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_tokenId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_funcSig',
				type: 'bytes4',

			},
		],
		name: 'isAuthorized',
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
				name: '_tokenId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_operator',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_funcSig',
				type: 'bytes4',

			},
		],
		name: 'isFunctionOperatorOfToken',
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
				name: '_addr',
				type: 'address',

			},
		],
		name: 'isMinter',
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
				name: '_owner',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_operator',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_funcSig',
				type: 'bytes4',

			},
		],
		name: 'isPermissionSet',
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
				name: '_owner',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_operator',
				type: 'address',

			},
		],
		name: 'isPermissionSetAll',
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
				name: '_tokenId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_operator',
				type: 'address',

			},
		],
		name: 'isTokenOperator',
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
		constant: false,
		inputs: [
			{
				internal_type: '',
				name: '_to',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_axie',
				type: 'tuple',
				components: [
					{
						internal_type: '',
						name: 'sireId',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'matronId',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'birthDate',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'genes',
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
						name: 'breedCount',
						type: 'uint8',
					},
					{
						internal_type: '',
						name: 'level',
						type: 'uint16',
					},
				],

			},
		],
		name: 'mintAxie',
		outputs: [
			{
				internal_type: '',
				name: '_axieId',
				type: 'uint256',

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
				name: '_axieId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_hoppingAxieId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_axie',
				type: 'tuple',
				components: [
					{
						internal_type: '',
						name: 'sireId',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'matronId',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'birthDate',
						type: 'uint256',
					},
					{
						internal_type: '',
						name: 'genes',
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
						name: 'breedCount',
						type: 'uint8',
					},
					{
						internal_type: '',
						name: 'level',
						type: 'uint16',
					},
				],

			},
			{
				internal_type: '',
				name: '_to',
				type: 'address',

			},
		],
		name: 'mintPromoAxie',
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
				name: '',
				type: 'address',

			},
		],
		name: 'minter',
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
		name: 'minters',
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
		inputs: [],
		name: 'name',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'string',

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
		name: 'neededPotionForBreeding',
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
		],
		name: 'nonces',
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
				type: 'address',

			},
			{
				internal_type: '',
				name: '',
				type: 'address',

			},
			{
				internal_type: '',
				name: '',
				type: 'bytes4',

			},
		],
		name: 'operatorPermission',
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
				name: '_tokenId',
				type: 'uint256',

			},
		],
		name: 'ownerOf',
		outputs: [
			{
				internal_type: '',
				name: '_owner',
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
		inputs: [],
		name: 'pause',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: true,
		inputs: [],
		name: 'paused',
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
		name: 'preExecutionLogicContract',
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
				name: '_removedMinters',
				type: 'address[]',

			},
		],
		name: 'removeMinters',
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
				name: '_removedSeeders',
				type: 'address[]',

			},
		],
		name: 'removeSeeders',
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
				name: '_from',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_to',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_tokenId',
				type: 'uint256',

			},
		],
		name: 'safeTransferFrom',
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
				name: '_from',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_to',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_tokenId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_data',
				type: 'bytes',

			},
		],
		name: 'safeTransferFrom',
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
				name: '',
				type: 'address',

			},
		],
		name: 'seeder',
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
		name: 'seeders',
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
				name: '_toAdultDuration',
				type: 'uint256',

			},
		],
		name: 'setAdultDuration',
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
				name: '_operator',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_approved',
				type: 'bool',

			},
		],
		name: 'setAllPermissionFor',
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
				name: '_operator',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_approved',
				type: 'bool',

			},
		],
		name: 'setApprovalForAll',
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
				name: '_axieBreedLimit',
				type: 'uint8',

			},
		],
		name: 'setAxieBreedLimit',
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
				name: '_baseTokenURI',
				type: 'string',

			},
		],
		name: 'setBaseTokenURI',
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
				name: '_breedingFee',
				type: 'uint256',

			},
		],
		name: 'setBreedingFee',
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
				name: '_breedingFeeToken',
				type: 'address',

			},
		],
		name: 'setBreedingFeeToken',
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
				name: '_breedingPotion',
				type: 'address',

			},
		],
		name: 'setBreedingPotionContract',
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
				name: '_currentAxieId',
				type: 'uint256',

			},
		],
		name: 'setCurrentAxieId',
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
				name: '_tokenId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_operator',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_funcSig',
				type: 'bytes4',

			},
			{
				internal_type: '',
				name: '_approved',
				type: 'bool',

			},
		],
		name: 'setFunctionOperatorForToken',
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
				name: '_geneBrewerContract',
				type: 'address',

			},
		],
		name: 'setGeneBrewerContract',
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
				name: '_axieIds',
				type: 'uint256[]',

			},
			{
				internal_type: '',
				name: '_hoppingAxieIds',
				type: 'uint256[]',

			},
		],
		name: 'setHoppingAxieIds',
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
				name: '_neededPotionForBreeding',
				type: 'uint256[]',

			},
		],
		name: 'setNeededPotionForBreeding',
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
				name: '_operator',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_funcSig',
				type: 'bytes4',

			},
			{
				internal_type: '',
				name: '_approved',
				type: 'bool',

			},
		],
		name: 'setPermissionFor',
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
				name: '_preExecutionLogicContract',
				type: 'address',

			},
		],
		name: 'setPreExecutionLogicContract',
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
				name: '_tokenId',
				type: 'uint256',

			},
			{
				internal_type: '',
				name: '_operator',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_approved',
				type: 'bool',

			},
		],
		name: 'setTokenOperator',
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
				name: '_tokenReceiver',
				type: 'address',

			},
		],
		name: 'setTokenReceiver',
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
				name: '_axieId',
				type: 'uint256',

			},
		],
		name: 'stageOf',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'uint8',

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
				name: '_tokenId',
				type: 'uint256',

			},
		],
		name: 'stateOf',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'bytes',

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
				name: '_interfaceId',
				type: 'bytes4',

			},
		],
		name: 'supportsInterface',
		outputs: [
			{
				internal_type: '',
				name: '_supported',
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
		name: 'symbol',
		outputs: [
			{
				internal_type: '',
				name: '',
				type: 'string',

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
		name: 'toAdultDuration',
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
				name: '_index',
				type: 'uint256',

			},
		],
		name: 'tokenByIndex',
		outputs: [
			{
				internal_type: '',
				name: '_tokenId',
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
				name: '_owner',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_index',
				type: 'uint256',

			},
		],
		name: 'tokenOfOwnerByIndex',
		outputs: [
			{
				internal_type: '',
				name: '_tokenId',
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
				type: 'address',

			},
			{
				internal_type: '',
				name: '',
				type: 'bytes4',

			},
		],
		name: 'tokenPermission',
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
			{
				internal_type: '',
				name: '',
				type: 'uint256',

			},
		],
		name: 'tokenPermissionInfos',
		outputs: [
			{
				internal_type: '',
				name: 'operator',
				type: 'address',

			},
			{
				internal_type: '',
				name: 'funcSig',
				type: 'bytes4',

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
		name: 'tokenReceiver',
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
				name: '_tokenId',
				type: 'uint256',

			},
		],
		name: 'tokenURI',
		outputs: [
			{
				internal_type: '',
				name: '_uri',
				type: 'string',

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
		name: 'totalSupply',
		outputs: [
			{
				internal_type: '',
				name: '_supply',
				type: 'uint256',

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
				name: '_from',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_to',
				type: 'address',

			},
			{
				internal_type: '',
				name: '_tokenId',
				type: 'uint256',

			},
		],
		name: 'transferFrom',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
		anonymous: false,
	},
	{
		constant: false,
		inputs: [],
		name: 'unpause',
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
				name: '_spender',
				type: 'address',

			},
		],
		name: 'unwhitelist',
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
				name: '_spender',
				type: 'address',

			},
		],
		name: 'whitelist',
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
				name: '',
				type: 'address',

			},
		],
		name: 'whitelisted',
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
]
