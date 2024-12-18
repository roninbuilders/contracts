import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'voter',
				type: 'address',
			},
		],
		name: 'ErrBridgeVoterIsAlreadyAdded',
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
		name: 'ErrConsensusAddressIsAlreadyAdded',
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
		name: 'ErrConsensusAddressIsNotAdded',
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
						internalType: 'address',
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
						name: 'bridgeVoter',
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
				internalType: 'address[]',
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
						internalType: 'address',
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
						name: 'bridgeVoter',
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
						internalType: 'address',
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
						name: 'bridgeVoter',
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
		inputs: [],
		name: 'getAllTrustedOrganizations',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
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
						name: 'bridgeVoter',
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
		name: 'getBridgeVoterWeight',
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
		name: 'getBridgeVoterWeights',
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
		inputs: [
			{
				internalType: 'address',
				name: '_consensusAddr',
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
				internalType: 'address[]',
				name: '_list',
				type: 'address[]',
			},
		],
		name: 'getConsensusWeights',
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
				internalType: 'address',
				name: '_consensusAddr',
				type: 'address',
			},
		],
		name: 'getTrustedOrganization',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
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
						name: 'bridgeVoter',
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
						internalType: 'address',
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
						name: 'bridgeVoter',
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
						internalType: 'address',
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
						name: 'bridgeVoter',
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
				name: '_trustedOrgs',
				type: 'tuple[]',
			},
			{
				internalType: 'uint256',
				name: '__num',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '__denom',
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
				internalType: 'address[]',
				name: '_list',
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
				internalType: 'address[]',
				name: '_list',
				type: 'address[]',
			},
		],
		name: 'sumBridgeVoterWeight',
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
		inputs: [
			{
				components: [
					{
						internalType: 'address',
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
						name: 'bridgeVoter',
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
const RONIN_TRUSTED_ORGANIZATION_3: Contract<typeof abi> = {
	name: 'Ronin Trusted Organization',
	address: '0x0aada85a2b3c9fb1be158d43e71cdcca6fe85e02',
	is_deprecated: false,
	created_at: 1697443041,
	abi: abi,
}
export default RONIN_TRUSTED_ORGANIZATION_3
