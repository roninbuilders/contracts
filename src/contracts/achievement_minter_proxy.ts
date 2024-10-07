import { Contract } from '@/contract'
const abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'Paused',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'Unpaused',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'achievementSettingsForId',
		outputs: [
			{
				internalType: 'bool',
				name: 'isRepeatable',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: 'isPaused',
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
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_newMinter',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'addMinterForId',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_tokens',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: '_newMinters',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_ids',
				type: 'uint256[]',
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
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'disableRepeatForId',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'enableRepeatForId',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_minter',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'isMinterForId',
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
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_minter',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: '_ids',
				type: 'uint256[]',
			},
		],
		name: 'isMinterForIdsBatch',
		outputs: [
			{
				internalType: 'bool[]',
				name: '',
				type: 'bool[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_account',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'mintAchievement',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'address[]',
				name: '_accounts',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'mintAchievementBatch',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_tokens',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: '_accounts',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_ids',
				type: 'uint256[]',
			},
		],
		name: 'mintAchievements',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'owner',
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
		name: 'pauseAllMinting',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'pauseMintingForId',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: '_ids',
				type: 'uint256[]',
			},
		],
		name: 'pauseMintingForMany',
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
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_oldMinter',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'removeMinterForId',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_tokens',
				type: 'address[]',
			},
			{
				internalType: 'address[]',
				name: '_oldMinters',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_ids',
				type: 'uint256[]',
			},
		],
		name: 'removeMinters',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: '_isRepeatable',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: '_isPaused',
				type: 'bool',
			},
			{
				internalType: 'address',
				name: '_newMinter',
				type: 'address',
			},
		],
		name: 'setAchievementSettingsForId',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'unpauseAllMinting',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_id',
				type: 'uint256',
			},
		],
		name: 'unpauseMintingForId',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: '_ids',
				type: 'uint256[]',
			},
		],
		name: 'unpauseMintingForMany',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const ACHIEVEMENT_MINTER_PROXY: Contract<typeof abi> = {
	name: 'Achievement Minter Proxy',
	address: '0x700ec85fcac3c8b6e62a7549ea5b40dd28026def',
	is_deprecated: false,
	created_at: 1727131646,
	abi: abi,
}
export default ACHIEVEMENT_MINTER_PROXY
