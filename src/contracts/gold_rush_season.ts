import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_admin',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_attestor',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'BeneficiaryLengthMismatch',
		type: 'error',
	},
	{
		inputs: [],
		name: 'BeneficiarySumMismatch',
		type: 'error',
	},
	{
		inputs: [],
		name: 'BulkCashinParamsLengthMismatch',
		type: 'error',
	},
	{
		inputs: [],
		name: 'BulkParamsLengthMismatch',
		type: 'error',
	},
	{
		inputs: [],
		name: 'CashInIdAlreadyRedeemed',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ExpiredRedemption',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ForgedSignature',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidShortString',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NewGuildEntryNotAdded',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NewPlayerEntryNotAdded',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NoBeneficiaries',
		type: 'error',
	},
	{
		inputs: [],
		name: 'NotAGuild',
		type: 'error',
	},
	{
		inputs: [],
		name: 'PlayerNotInFavorMap',
		type: 'error',
	},
	{
		inputs: [],
		name: 'SenderNotRedeemingPlayer',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'str',
				type: 'string',
			},
		],
		name: 'StringTooLong',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ValueTooSmallCheckDecimals',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ZeroAddressNotAllowed',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [],
		name: 'EIP712DomainChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'previousAdminRole',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'newAdminRole',
				type: 'bytes32',
			},
		],
		name: 'RoleAdminChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'sender',
				type: 'address',
			},
		],
		name: 'RoleGranted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'sender',
				type: 'address',
			},
		],
		name: 'RoleRevoked',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'player',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldValue',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newValue',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'reason',
				type: 'string',
			},
		],
		name: 'RoyalFavorAdjusted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'player',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'cashInId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'guildId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'beneficiaries',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'beneficiaryValues',
				type: 'uint256[]',
			},
		],
		name: 'RoyalFavorCashIn',
		type: 'event',
	},
	{
		inputs: [],
		name: 'ADJUSTER_ROLE',
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
		inputs: [],
		name: 'ADMIN_ROLE',
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
		inputs: [],
		name: 'DEFAULT_ADMIN_ROLE',
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
		inputs: [],
		name: 'NO_GUILD',
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
		name: 'ROYAL_FAVOR_DECIMALS',
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
				name: 'player',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'newValue',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'guildId',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: 'reason',
				type: 'string',
			},
		],
		name: 'adjustFavor',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'players',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'newValue',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: 'guildIds',
				type: 'uint256[]',
			},
			{
				internalType: 'string[]',
				name: 'reasons',
				type: 'string[]',
			},
		],
		name: 'bulkAdjustFavor',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'player',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'cashInId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'guildId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'deadline',
						type: 'uint256',
					},
					{
						internalType: 'address[]',
						name: 'beneficiaries',
						type: 'address[]',
					},
					{
						internalType: 'uint256[]',
						name: 'beneficiaryValues',
						type: 'uint256[]',
					},
				],
				internalType: 'struct IGoldRushSeason.RoyalFavorRedemption[]',
				name: 'rfrs',
				type: 'tuple[]',
			},
			{
				internalType: 'bytes[]',
				name: 'attesationSignatures',
				type: 'bytes[]',
			},
		],
		name: 'bulkCashIn',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'player',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'cashInId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'guildId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'deadline',
						type: 'uint256',
					},
					{
						internalType: 'address[]',
						name: 'beneficiaries',
						type: 'address[]',
					},
					{
						internalType: 'uint256[]',
						name: 'beneficiaryValues',
						type: 'uint256[]',
					},
				],
				internalType: 'struct IGoldRushSeason.RoyalFavorRedemption',
				name: 'rfr',
				type: 'tuple',
			},
			{
				internalType: 'bytes',
				name: 'attesationSignature',
				type: 'bytes',
			},
		],
		name: 'cashIn',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'eip712Domain',
		outputs: [
			{
				internalType: 'bytes1',
				name: 'fields',
				type: 'bytes1',
			},
			{
				internalType: 'string',
				name: 'name',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'version',
				type: 'string',
			},
			{
				internalType: 'uint256',
				name: 'chainId',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'verifyingContract',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: 'salt',
				type: 'bytes32',
			},
			{
				internalType: 'uint256[]',
				name: 'extensions',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getAllGuildIds',
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
		inputs: [],
		name: 'getAllGuildsFavor',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
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
		inputs: [],
		name: 'getAllPlayers',
		outputs: [
			{
				internalType: 'address[]',
				name: '',
				type: 'address[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getAllPlayersFavor',
		outputs: [
			{
				internalType: 'address[]',
				name: '',
				type: 'address[]',
			},
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
				internalType: 'uint256[]',
				name: 'guildIds',
				type: 'uint256[]',
			},
		],
		name: 'getBulkGuildsFavor',
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
				name: 'players',
				type: 'address[]',
			},
		],
		name: 'getBulkPlayersFavor',
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
				internalType: 'uint256',
				name: 'guildId',
				type: 'uint256',
			},
		],
		name: 'getGuildFavor',
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
				name: 'player',
				type: 'address',
			},
		],
		name: 'getPlayerFavor',
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
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
		],
		name: 'getRoleAdmin',
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
				components: [
					{
						internalType: 'address',
						name: 'player',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'cashInId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'guildId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'deadline',
						type: 'uint256',
					},
					{
						internalType: 'address[]',
						name: 'beneficiaries',
						type: 'address[]',
					},
					{
						internalType: 'uint256[]',
						name: 'beneficiaryValues',
						type: 'uint256[]',
					},
				],
				internalType: 'struct IGoldRushSeason.RoyalFavorRedemption',
				name: 'rfr',
				type: 'tuple',
			},
		],
		name: 'getRoyalFavorRedemptionTypedDataHash',
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
				name: 'adjuster',
				type: 'address',
			},
		],
		name: 'grantAdjusterRole',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'grantRole',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'hasRole',
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
				name: 'cashInId',
				type: 'uint256',
			},
		],
		name: 'isCashInRedeemed',
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
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'renounceRole',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'adjuster',
				type: 'address',
			},
		],
		name: 'revokeAdjusterRole',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'role',
				type: 'bytes32',
			},
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'revokeRole',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'royalFavorAttestor',
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
		name: 'royalFavorSum',
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
				internalType: 'bytes4',
				name: 'interfaceId',
				type: 'bytes4',
			},
		],
		name: 'supportsInterface',
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
				name: 'newAttestor',
				type: 'address',
			},
		],
		name: 'swapRoyalFavorAttestor',
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const GOLD_RUSH_SEASON: Contract<typeof abi> = {
	name: 'Gold Rush Season',
	address: '0x279f238ec237eb7e12b64386e4ec99c4d50c00eb',
	is_deprecated: false,
	created_at: 1731544037,
	abi: abi,
}
export default GOLD_RUSH_SEASON
