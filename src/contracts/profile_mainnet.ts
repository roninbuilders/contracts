import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		name: 'ErrCallPrecompiled',
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
		inputs: [
			{
				internalType: 'enum RoleAccess',
				name: 'infoType',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: 'value',
				type: 'uint256',
			},
		],
		name: 'ErrDuplicatedInfo',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes',
				name: 'pubkey',
				type: 'bytes',
			},
		],
		name: 'ErrDuplicatedPubkey',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'vrfKeyHash',
				type: 'bytes32',
			},
		],
		name: 'ErrDuplicatedVRFKeyHash',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrExistentProfile',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrIdAndConsensusDiffer',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes',
				name: 'pubkey',
				type: 'bytes',
			},
			{
				internalType: 'bytes',
				name: 'proofOfPossession',
				type: 'bytes',
			},
		],
		name: 'ErrInvalidProofOfPossession',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensus',
				type: 'address',
			},
		],
		name: 'ErrLookUpIdFailed',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'vrfKeyHash',
				type: 'bytes32',
			},
		],
		name: 'ErrLookUpIdFromVRFKeyFailed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrNonExistentProfile',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrProfileChangeCooldownNotEnded',
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
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
			{
				internalType: 'enum ContractType',
				name: 'expectedContractType',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: 'actual',
				type: 'address',
			},
		],
		name: 'ErrUnexpectedInternalCall',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'cid',
				type: 'address',
			},
		],
		name: 'ErrValidatorOnRenunciation',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'enum RoleAccess',
				name: 'infoType',
				type: 'uint8',
			},
		],
		name: 'ErrZeroAddress',
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
		inputs: [],
		name: 'ErrZeroPubkey',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
		],
		name: 'ConsensusAddressOfNonGovernorChanged',
		type: 'event',
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
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
		],
		name: 'ProfileAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'enum RoleAccess',
				name: 'addressType',
				type: 'uint8',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'ProfileAddressChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'admin',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'treasury',
				type: 'address',
			},
		],
		name: 'ProfileMigrated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'pubkey',
				type: 'bytes',
			},
		],
		name: 'PubkeyChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bytes',
				name: 'pubkey',
				type: 'bytes',
			},
			{
				indexed: false,
				internalType: 'bytes',
				name: 'proofOfPossession',
				type: 'bytes',
			},
		],
		name: 'PubkeyVerified',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'bytes32',
				name: 'vrfKeyHash',
				type: 'bytes32',
			},
		],
		name: 'VRFKeyHashChanged',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'bytes[][2]',
				name: 'listOfPublicKey',
				type: 'bytes[][2]',
			},
		],
		name: 'arePublicKeysRegistered',
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
				name: 'id',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'newAdminAddr',
				type: 'address',
			},
		],
		name: 'changeAdminAddr',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
			{
				internalType: 'TConsensus',
				name: 'newConsensusAddr',
				type: 'address',
			},
		],
		name: 'changeConsensusAddr',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'pubkey',
				type: 'bytes',
			},
			{
				internalType: 'bytes',
				name: 'proofOfPossession',
				type: 'bytes',
			},
		],
		name: 'changePubkey',
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
			{
				internalType: 'address payable',
				name: '',
				type: 'address',
			},
		],
		name: 'changeTreasuryAddr',
		outputs: [],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'vrfKeyHash',
				type: 'bytes32',
			},
		],
		name: 'changeVRFKeyHash',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'admin',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'treasury',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'pubkey',
				type: 'bytes',
			},
			{
				internalType: 'bytes',
				name: 'proofOfPossession',
				type: 'bytes',
			},
		],
		name: 'execApplyValidatorCandidate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensus',
				type: 'address',
			},
		],
		name: 'getConsensus2Id',
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
				internalType: 'enum ContractType',
				name: 'contractType',
				type: 'uint8',
			},
		],
		name: 'getContract',
		outputs: [
			{
				internalType: 'address payable',
				name: 'contract_',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getCooldownConfig',
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
				name: 'id',
				type: 'address',
			},
		],
		name: 'getId2Admin',
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
				name: 'id',
				type: 'address',
			},
		],
		name: 'getId2BeaconInfo',
		outputs: [
			{
				internalType: 'bytes32',
				name: 'vrfKeyHash',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: 'vrfKeyHashLastChange',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'registeredAt',
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
				name: 'id',
				type: 'address',
			},
		],
		name: 'getId2Consensus',
		outputs: [
			{
				internalType: 'TConsensus',
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
				name: 'id',
				type: 'address',
			},
		],
		name: 'getId2OldConsensus',
		outputs: [
			{
				internalType: 'TConsensus',
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
				name: 'id',
				type: 'address',
			},
		],
		name: 'getId2OldPubkey',
		outputs: [
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
		],
		name: 'getId2Profile',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'id',
						type: 'address',
					},
					{
						internalType: 'TConsensus',
						name: 'consensus',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'admin',
						type: 'address',
					},
					{
						internalType: 'address payable',
						name: 'treasury',
						type: 'address',
					},
					{
						internalType: 'address',
						name: '__reservedGovernor',
						type: 'address',
					},
					{
						internalType: 'bytes',
						name: 'pubkey',
						type: 'bytes',
					},
					{
						internalType: 'uint256',
						name: 'profileLastChange',
						type: 'uint256',
					},
					{
						internalType: 'bytes',
						name: 'oldPubkey',
						type: 'bytes',
					},
					{
						internalType: 'TConsensus',
						name: 'oldConsensus',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'registeredAt',
						type: 'uint256',
					},
					{
						internalType: 'bytes32',
						name: 'vrfKeyHash',
						type: 'bytes32',
					},
					{
						internalType: 'uint256',
						name: 'vrfKeyHashLastChange',
						type: 'uint256',
					},
				],
				internalType: 'struct IProfile.CandidateProfile',
				name: '',
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
				name: 'id',
				type: 'address',
			},
		],
		name: 'getId2ProfileLastChange',
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
				name: 'id',
				type: 'address',
			},
		],
		name: 'getId2Pubkey',
		outputs: [
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
		],
		name: 'getId2RegisteredAt',
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
				name: 'id',
				type: 'address',
			},
		],
		name: 'getId2Treasury',
		outputs: [
			{
				internalType: 'address payable',
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
				name: 'id',
				type: 'address',
			},
		],
		name: 'getId2VRFKeyHash',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
		],
		name: 'getId2VRFKeyHashLastChange',
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
				internalType: 'TConsensus[]',
				name: 'consensusList',
				type: 'address[]',
			},
		],
		name: 'getManyConsensus2Id',
		outputs: [
			{
				internalType: 'address[]',
				name: 'idList',
				type: 'address[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'idList',
				type: 'address[]',
			},
		],
		name: 'getManyId2Admin',
		outputs: [
			{
				internalType: 'address[]',
				name: 'adminList',
				type: 'address[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'idList',
				type: 'address[]',
			},
		],
		name: 'getManyId2Consensus',
		outputs: [
			{
				internalType: 'TConsensus[]',
				name: 'consensusList',
				type: 'address[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'idList',
				type: 'address[]',
			},
		],
		name: 'getManyId2RegisteredAt',
		outputs: [
			{
				internalType: 'uint256[]',
				name: 'registeredAtList',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'vrfKeyHash',
				type: 'bytes32',
			},
		],
		name: 'getVRFKeyHash2BeaconInfo',
		outputs: [
			{
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'vrfKeyHashLastChange',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'registeredAt',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'vrfKeyHash',
				type: 'bytes32',
			},
		],
		name: 'getVRFKeyHash2Id',
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
				internalType: 'address',
				name: 'stakingContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'trustedOrgContract',
				type: 'address',
			},
		],
		name: 'initializeV2',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'cooldown',
				type: 'uint256',
			},
		],
		name: 'initializeV3',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'migrateOmissionREP4',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'precompileVerifyBLSPublicKeyAddress',
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
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'cooldown',
				type: 'uint256',
			},
		],
		name: 'setCooldownConfig',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensus',
				type: 'address',
			},
		],
		name: 'tryGetConsensus2Id',
		outputs: [
			{
				internalType: 'bool',
				name: 'found',
				type: 'bool',
			},
			{
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'vrfKeyHash',
				type: 'bytes32',
			},
		],
		name: 'tryGetVRFKeyHash2Id',
		outputs: [
			{
				internalType: 'bool',
				name: 'found',
				type: 'bool',
			},
			{
				internalType: 'address',
				name: 'id',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const
const PROFILE_MAINNET: Contract<typeof abi> = {
	name: 'ProfileMainnet',
	address: '0xf2686639c1c8d291059eb19ab3c5e75683e50ad2',
	is_deprecated: false,
	created_at: 1718685423,
	abi: abi,
}
export default PROFILE_MAINNET
