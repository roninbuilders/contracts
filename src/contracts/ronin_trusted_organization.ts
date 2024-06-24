import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'ErrConsensusAddressIsAlreadyAdded',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'ErrConsensusAddressIsNotAdded',
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
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
		],
		name: 'ErrDuplicated',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrEmptyArray',
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
		name: 'ErrGovernorAddressIsAlreadyAdded',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidRequest',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
		],
		name: 'ErrInvalidThreshold',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
		],
		name: 'ErrInvalidVoteWeight',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrQueryForDupplicated',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrQueryForNonExistentConsensusAddress',
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
				components: [
					{
						internalType: 'TConsensus',
						name: 'consensusAddr',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governor',
						type: 'address',
					},
					{
						internalType: 'address',
						name: '__deprecatedBridgeVoter',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'addedBlock',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct IRoninTrustedOrganization.TrustedOrganization',
				name: 'orgAfterChanged',
				type: 'tuple',
			},
			{
				indexed: false,
				internalType: 'TConsensus',
				name: 'oldConsensus',
				type: 'address',
			},
		],
		name: 'ConsensusAddressOfTrustedOrgChanged',
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
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'numerator',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'denominator',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'previousNumerator',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'previousDenominator',
				type: 'uint256',
			},
		],
		name: 'ThresholdUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				components: [
					{
						internalType: 'TConsensus',
						name: 'consensusAddr',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governor',
						type: 'address',
					},
					{
						internalType: 'address',
						name: '__deprecatedBridgeVoter',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'addedBlock',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct IRoninTrustedOrganization.TrustedOrganization[]',
				name: 'orgs',
				type: 'tuple[]',
			},
		],
		name: 'TrustedOrganizationsAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'TConsensus[]',
				name: 'orgs',
				type: 'address[]',
			},
		],
		name: 'TrustedOrganizationsRemoved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				components: [
					{
						internalType: 'TConsensus',
						name: 'consensusAddr',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governor',
						type: 'address',
					},
					{
						internalType: 'address',
						name: '__deprecatedBridgeVoter',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'addedBlock',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct IRoninTrustedOrganization.TrustedOrganization[]',
				name: 'orgs',
				type: 'tuple[]',
			},
		],
		name: 'TrustedOrganizationsUpdated',
		type: 'event',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'TConsensus',
						name: 'consensusAddr',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governor',
						type: 'address',
					},
					{
						internalType: 'address',
						name: '__deprecatedBridgeVoter',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'addedBlock',
						type: 'uint256',
					},
				],
				internalType: 'struct IRoninTrustedOrganization.TrustedOrganization[]',
				name: '_list',
				type: 'tuple[]',
			},
		],
		name: 'addTrustedOrganizations',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_voteWeight',
				type: 'uint256',
			},
		],
		name: 'checkThreshold',
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
		name: 'countTrustedOrganization',
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
				internalType: 'TConsensus',
				name: 'oldAddr',
				type: 'address',
			},
			{
				internalType: 'TConsensus',
				name: 'newAddr',
				type: 'address',
			},
		],
		name: 'execChangeConsensusAddressForTrustedOrg',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getAllTrustedOrganizations',
		outputs: [
			{
				components: [
					{
						internalType: 'TConsensus',
						name: 'consensusAddr',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governor',
						type: 'address',
					},
					{
						internalType: 'address',
						name: '__deprecatedBridgeVoter',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'addedBlock',
						type: 'uint256',
					},
				],
				internalType: 'struct IRoninTrustedOrganization.TrustedOrganization[]',
				name: 'list',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: 'consensusAddr',
				type: 'address',
			},
		],
		name: 'getConsensusWeight',
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
				name: 'cid',
				type: 'address',
			},
		],
		name: 'getConsensusWeightById',
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
				name: 'list',
				type: 'address[]',
			},
		],
		name: 'getConsensusWeights',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'cids',
				type: 'address[]',
			},
		],
		name: 'getConsensusWeightsById',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
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
		inputs: [
			{
				internalType: 'address',
				name: '_governor',
				type: 'address',
			},
		],
		name: 'getGovernorWeight',
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
				internalType: 'address[]',
				name: '_list',
				type: 'address[]',
			},
		],
		name: 'getGovernorWeights',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '_res',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getThreshold',
		outputs: [
			{
				internalType: 'uint256',
				name: 'num_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'denom_',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus',
				name: '_consensusAddr',
				type: 'address',
			},
		],
		name: 'getTrustedOrganization',
		outputs: [
			{
				components: [
					{
						internalType: 'TConsensus',
						name: 'consensusAddr',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governor',
						type: 'address',
					},
					{
						internalType: 'address',
						name: '__deprecatedBridgeVoter',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'addedBlock',
						type: 'uint256',
					},
				],
				internalType: 'struct IRoninTrustedOrganization.TrustedOrganization',
				name: 'res',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_idx',
				type: 'uint256',
			},
		],
		name: 'getTrustedOrganizationAt',
		outputs: [
			{
				components: [
					{
						internalType: 'TConsensus',
						name: 'consensusAddr',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governor',
						type: 'address',
					},
					{
						internalType: 'address',
						name: '__deprecatedBridgeVoter',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'addedBlock',
						type: 'uint256',
					},
				],
				internalType: 'struct IRoninTrustedOrganization.TrustedOrganization',
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
				components: [
					{
						internalType: 'TConsensus',
						name: 'consensusAddr',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governor',
						type: 'address',
					},
					{
						internalType: 'address',
						name: '__deprecatedBridgeVoter',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'addedBlock',
						type: 'uint256',
					},
				],
				internalType: 'struct IRoninTrustedOrganization.TrustedOrganization[]',
				name: 'trustedOrgs',
				type: 'tuple[]',
			},
			{
				internalType: 'uint256',
				name: 'num',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'denom',
				type: 'uint256',
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
				name: 'profileContract',
				type: 'address',
			},
		],
		name: 'initializeV2',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'minimumVoteWeight',
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
				name: 'list',
				type: 'address[]',
			},
		],
		name: 'removeTrustedOrganizations',
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
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_numerator',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_denominator',
				type: 'uint256',
			},
		],
		name: 'setThreshold',
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
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'TConsensus[]',
				name: '_list',
				type: 'address[]',
			},
		],
		name: 'sumConsensusWeight',
		outputs: [
			{
				internalType: 'uint256',
				name: '_res',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_list',
				type: 'address[]',
			},
		],
		name: 'sumGovernorWeight',
		outputs: [
			{
				internalType: 'uint256',
				name: '_res',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_list',
				type: 'address[]',
			},
		],
		name: 'sumGovernorWeights',
		outputs: [
			{
				internalType: 'uint256',
				name: '_res',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'totalWeight',
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
		name: 'totalWeights',
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
				components: [
					{
						internalType: 'TConsensus',
						name: 'consensusAddr',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'governor',
						type: 'address',
					},
					{
						internalType: 'address',
						name: '__deprecatedBridgeVoter',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'addedBlock',
						type: 'uint256',
					},
				],
				internalType: 'struct IRoninTrustedOrganization.TrustedOrganization[]',
				name: '_list',
				type: 'tuple[]',
			},
		],
		name: 'updateTrustedOrganizations',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const RONIN_TRUSTED_ORGANIZATION: Contract<typeof abi> = {
	name: 'Ronin Trusted Organization',
	address: '0x83246543dfc871f078ed7cffca97095db85da08d',
	is_deprecated: false,
	created_at: 1718685426,
	abi: abi,
}
export default RONIN_TRUSTED_ORGANIZATION
