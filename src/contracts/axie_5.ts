import { Contract } from '@/contract'
const abi = [
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
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_approved',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: '_tokenId',
				type: 'uint256',
			},
		],
		name: 'Approval',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: '_approved',
				type: 'bool',
			},
		],
		name: 'ApprovalForAll',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: '_axieId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: '_breedCount',
				type: 'uint256',
			},
		],
		name: 'AxieBreedCountUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: '_axieId',
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
				indexed: false,
				internalType: 'struct AxieGenetics.Genes',
				name: '_genes',
				type: 'tuple',
			},
		],
		name: 'AxieEvolved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: '_axieId',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'sireId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'matronId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'birthDate',
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
						name: 'genes',
						type: 'tuple',
					},
					{
						internalType: 'uint8',
						name: 'breedCount',
						type: 'uint8',
					},
					{
						internalType: 'uint16',
						name: 'level',
						type: 'uint16',
					},
				],
				indexed: false,
				internalType: 'struct IAxie.Axie',
				name: '_axie',
				type: 'tuple',
			},
		],
		name: 'AxieMinted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: '_axieId',
				type: 'uint256',
			},
		],
		name: 'AxieSpawn',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: '_axieId',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'sireId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'matronId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'birthDate',
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
						name: 'genes',
						type: 'tuple',
					},
					{
						internalType: 'uint8',
						name: 'breedCount',
						type: 'uint8',
					},
					{
						internalType: 'uint16',
						name: 'level',
						type: 'uint16',
					},
				],
				indexed: false,
				internalType: 'struct IAxie.Axie',
				name: '_axie',
				type: 'tuple',
			},
			{
				components: [
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
						name: 'sireGenes',
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
						name: 'matronGenes',
						type: 'tuple',
					},
				],
				indexed: false,
				internalType: 'struct IAxie.Axiegg',
				name: '_axiegg',
				type: 'tuple',
			},
		],
		name: 'AxieggMinted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: '_axieId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: '_sireId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: '_matronId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'birthDate',
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
				indexed: false,
				internalType: 'struct AxieGenetics.Genes',
				name: 'sireGenes',
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
				indexed: false,
				internalType: 'struct AxieGenetics.Genes',
				name: 'matronGenes',
				type: 'tuple',
			},
		],
		name: 'AxieggSpawned',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_minter',
				type: 'address',
			},
		],
		name: 'MinterAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_minter',
				type: 'address',
			},
		],
		name: 'MinterRemoved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: '_tokenId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: '_nonce',
				type: 'uint256',
			},
		],
		name: 'NonceUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [],
		name: 'Paused',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bytes4',
				name: '_funcSig',
				type: 'bytes4',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: '_approved',
				type: 'bool',
			},
		],
		name: 'PermissionSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: '_approved',
				type: 'bool',
			},
		],
		name: 'PermissionSetAll',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_seeder',
				type: 'address',
			},
		],
		name: 'SeederAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_seeder',
				type: 'address',
			},
		],
		name: 'SeederRemoved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_spender',
				type: 'address',
			},
		],
		name: 'SpenderUnwhitelisted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_spender',
				type: 'address',
			},
		],
		name: 'SpenderWhitelisted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: '_tokenId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: '_approved',
				type: 'bool',
			},
		],
		name: 'TokenOperatorSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: '_tokenId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bytes4',
				name: '_funcSig',
				type: 'bytes4',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: '_approved',
				type: 'bool',
			},
		],
		name: 'TokenPermissionSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_from',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: '_tokenId',
				type: 'uint256',
			},
		],
		name: 'Transfer',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [],
		name: 'Unpaused',
		type: 'event',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address[]',
				name: '_addedMinters',
				type: 'address[]',
			},
		],
		name: 'addMinters',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address[]',
				name: '_addedSeeders',
				type: 'address[]',
			},
		],
		name: 'addSeeders',
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
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_tokenId',
				type: 'uint256',
			},
		],
		name: 'approve',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'uint256',
				name: '_sireId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_matronId',
				type: 'uint256',
			},
		],
		name: 'areAxiesEligibleForPairing',
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
		name: 'axie',
		outputs: [
			{
				internalType: 'uint256',
				name: 'sireId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'matronId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'birthDate',
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
				name: 'genes',
				type: 'tuple',
			},
			{
				internalType: 'uint8',
				name: 'breedCount',
				type: 'uint8',
			},
			{
				internalType: 'uint16',
				name: 'level',
				type: 'uint16',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'axieBreedLimit',
		outputs: [
			{
				internalType: 'uint8',
				name: '',
				type: 'uint8',
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
		name: 'axiegg',
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
				name: 'sireGenes',
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
				name: 'matronGenes',
				type: 'tuple',
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
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
		],
		name: 'balanceOf',
		outputs: [
			{
				internalType: 'uint256',
				name: '_balance',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'baseTokenURI',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
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
				internalType: 'uint256[]',
				name: '_axieIds',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_seeds',
				type: 'uint256[]',
			},
		],
		name: 'batchGrowAxieggsToAdults',
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
				name: '_ids',
				type: 'uint256[]',
			},
			{
				internalType: 'bytes[]',
				name: '_axiePackages',
				type: 'bytes[]',
			},
			{
				internalType: 'bytes[]',
				name: '_axieggPackages',
				type: 'bytes[]',
			},
			{
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
		],
		name: 'batchMintAxieggs',
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
				name: '_ids',
				type: 'uint256[]',
			},
			{
				internalType: 'bytes[]',
				name: '_packages',
				type: 'bytes[]',
			},
			{
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
		],
		name: 'batchMintAxies',
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
				name: '_sireId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_matronId',
				type: 'uint256',
			},
		],
		name: 'breedAxies',
		outputs: [
			{
				internalType: 'uint256',
				name: '_axieId',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'breedingFee',
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
		inputs: [],
		name: 'breedingFeeToken',
		outputs: [
			{
				internalType: 'contract IERC20',
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
		inputs: [],
		name: 'breedingPotion',
		outputs: [
			{
				internalType: 'contract IERC20Burnable',
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
		inputs: [],
		name: 'currentAxieId',
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
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: '_axieId',
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
				name: '_genes',
				type: 'tuple',
			},
		],
		name: 'evolveAxie',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'geneBrewerContract',
		outputs: [
			{
				internalType: 'contract IAxieGeneBrewer',
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
				name: '_tokenId',
				type: 'uint256',
			},
		],
		name: 'getApproved',
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
				name: '_axieId',
				type: 'uint256',
			},
		],
		name: 'getAxie',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'sireId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'matronId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'birthDate',
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
						name: 'genes',
						type: 'tuple',
					},
					{
						internalType: 'uint8',
						name: 'breedCount',
						type: 'uint8',
					},
					{
						internalType: 'uint16',
						name: 'level',
						type: 'uint16',
					},
				],
				internalType: 'struct IAxie.Axie',
				name: '',
				type: 'tuple',
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
		],
		name: 'getAxiegg',
		outputs: [
			{
				components: [
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
						name: 'sireGenes',
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
						name: 'matronGenes',
						type: 'tuple',
					},
				],
				internalType: 'struct IAxie.Axiegg',
				name: '',
				type: 'tuple',
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
		],
		name: 'getRequirementsForBreeding',
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
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: '_axieId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_seed',
				type: 'uint256',
			},
		],
		name: 'growAxieggToAdult',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
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
		name: 'hoppingAxieId',
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
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
		],
		name: 'isApprovedForAll',
		outputs: [
			{
				internalType: 'bool',
				name: '_approved',
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
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_tokenId',
				type: 'uint256',
			},
			{
				internalType: 'bytes4',
				name: '_funcSig',
				type: 'bytes4',
			},
		],
		name: 'isAuthorized',
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
				name: '_tokenId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
			{
				internalType: 'bytes4',
				name: '_funcSig',
				type: 'bytes4',
			},
		],
		name: 'isFunctionOperatorOfToken',
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
				internalType: 'address',
				name: '_addr',
				type: 'address',
			},
		],
		name: 'isMinter',
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
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
			{
				internalType: 'bytes4',
				name: '_funcSig',
				type: 'bytes4',
			},
		],
		name: 'isPermissionSet',
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
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
		],
		name: 'isPermissionSetAll',
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
				name: '_tokenId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
		],
		name: 'isTokenOperator',
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
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'sireId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'matronId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'birthDate',
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
						name: 'genes',
						type: 'tuple',
					},
					{
						internalType: 'uint8',
						name: 'breedCount',
						type: 'uint8',
					},
					{
						internalType: 'uint16',
						name: 'level',
						type: 'uint16',
					},
				],
				internalType: 'struct IAxie.Axie',
				name: '_axie',
				type: 'tuple',
			},
		],
		name: 'mintAxie',
		outputs: [
			{
				internalType: 'uint256',
				name: '_axieId',
				type: 'uint256',
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
				internalType: 'uint256',
				name: '_axieId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_hoppingAxieId',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'sireId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'matronId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'birthDate',
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
						name: 'genes',
						type: 'tuple',
					},
					{
						internalType: 'uint8',
						name: 'breedCount',
						type: 'uint8',
					},
					{
						internalType: 'uint16',
						name: 'level',
						type: 'uint16',
					},
				],
				internalType: 'struct IAxie.Axie',
				name: '_axie',
				type: 'tuple',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
		],
		name: 'mintPromoAxie',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'minter',
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
		name: 'minters',
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
		inputs: [],
		name: 'name',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
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
		name: 'neededPotionForBreeding',
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
		],
		name: 'nonces',
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
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'bytes4',
				name: '',
				type: 'bytes4',
			},
		],
		name: 'operatorPermission',
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
				name: '_tokenId',
				type: 'uint256',
			},
		],
		name: 'ownerOf',
		outputs: [
			{
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: false,
		inputs: [],
		name: 'pause',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'paused',
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
		name: 'preExecutionLogicContract',
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
				internalType: 'address[]',
				name: '_removedMinters',
				type: 'address[]',
			},
		],
		name: 'removeMinters',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address[]',
				name: '_removedSeeders',
				type: 'address[]',
			},
		],
		name: 'removeSeeders',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_tokenId',
				type: 'uint256',
			},
		],
		name: 'safeTransferFrom',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_tokenId',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: '_data',
				type: 'bytes',
			},
		],
		name: 'safeTransferFrom',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'seeder',
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
		name: 'seeders',
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
		constant: false,
		inputs: [
			{
				internalType: 'uint256',
				name: '_toAdultDuration',
				type: 'uint256',
			},
		],
		name: 'setAdultDuration',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: '_approved',
				type: 'bool',
			},
		],
		name: 'setAllPermissionFor',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: '_approved',
				type: 'bool',
			},
		],
		name: 'setApprovalForAll',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint8',
				name: '_axieBreedLimit',
				type: 'uint8',
			},
		],
		name: 'setAxieBreedLimit',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'string',
				name: '_baseTokenURI',
				type: 'string',
			},
		],
		name: 'setBaseTokenURI',
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
				name: '_breedingFee',
				type: 'uint256',
			},
		],
		name: 'setBreedingFee',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'contract IERC20',
				name: '_breedingFeeToken',
				type: 'address',
			},
		],
		name: 'setBreedingFeeToken',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'contract IERC20Burnable',
				name: '_breedingPotion',
				type: 'address',
			},
		],
		name: 'setBreedingPotionContract',
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
				name: '_currentAxieId',
				type: 'uint256',
			},
		],
		name: 'setCurrentAxieId',
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
				name: '_tokenId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
			{
				internalType: 'bytes4',
				name: '_funcSig',
				type: 'bytes4',
			},
			{
				internalType: 'bool',
				name: '_approved',
				type: 'bool',
			},
		],
		name: 'setFunctionOperatorForToken',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'contract IAxieGeneBrewer',
				name: '_geneBrewerContract',
				type: 'address',
			},
		],
		name: 'setGeneBrewerContract',
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
				name: '_axieIds',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_hoppingAxieIds',
				type: 'uint256[]',
			},
		],
		name: 'setHoppingAxieIds',
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
				name: '_neededPotionForBreeding',
				type: 'uint256[]',
			},
		],
		name: 'setNeededPotionForBreeding',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
			{
				internalType: 'bytes4',
				name: '_funcSig',
				type: 'bytes4',
			},
			{
				internalType: 'bool',
				name: '_approved',
				type: 'bool',
			},
		],
		name: 'setPermissionFor',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_preExecutionLogicContract',
				type: 'address',
			},
		],
		name: 'setPreExecutionLogicContract',
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
				name: '_tokenId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_operator',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: '_approved',
				type: 'bool',
			},
		],
		name: 'setTokenOperator',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_tokenReceiver',
				type: 'address',
			},
		],
		name: 'setTokenReceiver',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
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
		],
		name: 'stageOf',
		outputs: [
			{
				internalType: 'enum IAxie.AxieStage',
				name: '',
				type: 'uint8',
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
				name: '_tokenId',
				type: 'uint256',
			},
		],
		name: 'stateOf',
		outputs: [
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
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
				internalType: 'bytes4',
				name: '_interfaceId',
				type: 'bytes4',
			},
		],
		name: 'supportsInterface',
		outputs: [
			{
				internalType: 'bool',
				name: '_supported',
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
		name: 'symbol',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'toAdultDuration',
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
				name: '_index',
				type: 'uint256',
			},
		],
		name: 'tokenByIndex',
		outputs: [
			{
				internalType: 'uint256',
				name: '_tokenId',
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
				internalType: 'address',
				name: '_owner',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_index',
				type: 'uint256',
			},
		],
		name: 'tokenOfOwnerByIndex',
		outputs: [
			{
				internalType: 'uint256',
				name: '_tokenId',
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
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'bytes4',
				name: '',
				type: 'bytes4',
			},
		],
		name: 'tokenPermission',
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
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'tokenPermissionInfos',
		outputs: [
			{
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				internalType: 'bytes4',
				name: 'funcSig',
				type: 'bytes4',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'tokenReceiver',
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
				name: '_tokenId',
				type: 'uint256',
			},
		],
		name: 'tokenURI',
		outputs: [
			{
				internalType: 'string',
				name: '_uri',
				type: 'string',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'totalSupply',
		outputs: [
			{
				internalType: 'uint256',
				name: '_supply',
				type: 'uint256',
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
				internalType: 'address',
				name: '_from',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_tokenId',
				type: 'uint256',
			},
		],
		name: 'transferFrom',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [],
		name: 'unpause',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_spender',
				type: 'address',
			},
		],
		name: 'unwhitelist',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: '_spender',
				type: 'address',
			},
		],
		name: 'whitelist',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'whitelisted',
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
] as const
const AXIE_5: Contract<typeof abi> = {
	name: 'Axie',
	address: '0xb628acacd0eb58b09bf025d80c818166df1f5759',
	is_deprecated: false,
	created_at: 1657705369,
	abi: abi,
}
export default AXIE_5
