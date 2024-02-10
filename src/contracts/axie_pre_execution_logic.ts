import { Contract } from '@/contract'
const AXIE_PRE_EXECUTION_LOGIC: Contract = {
	name: 'Axie Pre Execution Logic',
	address: '0x26101408945caf2e2fde23cc3c1e12982d7a3368',
	is_deprecated: false,
	updated_at: 1701254319,
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
			stateMutability: 'nonpayable',
			type: 'fallback',
		},
		{
			inputs: [
				{
					internalType: 'address[]',
					name: '_addedMinters',
					type: 'address[]',
				},
			],
			name: 'addMinters',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address[]',
					name: '_addedSeeders',
					type: 'address[]',
				},
			],
			name: 'addSeeders',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'admin',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'axieBreedLimit',
			outputs: [
				{
					internalType: 'uint8',
					name: '',
					type: 'uint8',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'baseTokenURI',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'breedingFee',
			outputs: [
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
			inputs: [],
			name: 'breedingFeeToken',
			outputs: [
				{
					internalType: 'contract IERC20',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'breedingPotion',
			outputs: [
				{
					internalType: 'contract IERC20Burnable',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_newAdmin',
					type: 'address',
				},
			],
			name: 'changeAdmin',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'currentAxieId',
			outputs: [
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
			inputs: [],
			name: 'geneBrewerContract',
			outputs: [
				{
					internalType: 'contract IAxieGeneBrewer',
					name: '',
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
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'name',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'pause',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'paused',
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
			inputs: [],
			name: 'preExecutionLogicContract',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'removeAdmin',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address[]',
					name: '_removedMinters',
					type: 'address[]',
				},
			],
			name: 'removeMinters',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address[]',
					name: '_removedSeeders',
					type: 'address[]',
				},
			],
			name: 'removeSeeders',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
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
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
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
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_toAdultDuration',
					type: 'uint256',
				},
			],
			name: 'setAdultDuration',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
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
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
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
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint8',
					name: '_axieBreedLimit',
					type: 'uint8',
				},
			],
			name: 'setAxieBreedLimit',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'string',
					name: '_baseTokenURI',
					type: 'string',
				},
			],
			name: 'setBaseTokenURI',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_breedingFee',
					type: 'uint256',
				},
			],
			name: 'setBreedingFee',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract IERC20',
					name: '_breedingFeeToken',
					type: 'address',
				},
			],
			name: 'setBreedingFeeToken',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract IERC20Burnable',
					name: '_breedingPotion',
					type: 'address',
				},
			],
			name: 'setBreedingPotionContract',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_currentAxieId',
					type: 'uint256',
				},
			],
			name: 'setCurrentAxieId',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
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
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract IAxieGeneBrewer',
					name: '_geneBrewerContract',
					type: 'address',
				},
			],
			name: 'setGeneBrewerContract',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_neededPotionForBreeding',
					type: 'uint256[]',
				},
			],
			name: 'setNeededPotionForBreeding',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
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
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_preExecutionLogicContract',
					type: 'address',
				},
			],
			name: 'setPreExecutionLogicContract',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
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
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_tokenReceiver',
					type: 'address',
				},
			],
			name: 'setTokenReceiver',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'symbol',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'toAdultDuration',
			outputs: [
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
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'tokenReceiver',
			outputs: [
				{
					internalType: 'address',
					name: '',
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
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'totalSupply',
			outputs: [
				{
					internalType: 'uint256',
					name: '_supply',
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
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'unpause',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_spender',
					type: 'address',
				},
			],
			name: 'unwhitelist',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_spender',
					type: 'address',
				},
			],
			name: 'whitelist',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
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
			stateMutability: 'view',
			type: 'function',
		},
	],
}
export default AXIE_PRE_EXECUTION_LOGIC
