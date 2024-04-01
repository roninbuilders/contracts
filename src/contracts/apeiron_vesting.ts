import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'previousAdmin',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newAdmin',
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
				name: 'beacon',
				type: 'address',
			},
		],
		name: 'BeaconUpgraded',
		type: 'event',
	},
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
				indexed: true,
				internalType: 'address',
				name: 'beneficiary',
				type: 'address',
			},
		],
		name: 'RevokeVesting',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'FDVFactor',
				type: 'uint256',
			},
		],
		name: 'SetFDVFactor',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'percentageBase',
				type: 'uint256',
			},
		],
		name: 'SetPercentageBase',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'beneficiary',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'initialUnlockPercentage',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'cliff',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'start',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'duration',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'released',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'totalAmount',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: 'affectedByFDV',
						type: 'bool',
					},
				],
				indexed: false,
				internalType: 'struct ApeironVesting.VestingStruct',
				name: 'vesting',
				type: 'tuple',
			},
		],
		name: 'SetVesting',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'token',
				type: 'address',
			},
		],
		name: 'SetVestingToken',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'implementation',
				type: 'address',
			},
		],
		name: 'Upgraded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'beneficiary',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'VestingAmountAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'beneficiary',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'VestingReleased',
		type: 'event',
	},
	{
		inputs: [],
		name: 'FDVFactor',
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
				name: '_beneficiary',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_initialUnlockPercentage',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_cliff',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_start',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_duration',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_released',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_totalAmount',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: '_affectedByFDV',
				type: 'bool',
			},
		],
		name: 'addVestingAccount',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'aprsToken',
		outputs: [
			{
				internalType: 'contract IERC20Upgradeable',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'contractAmount',
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
				name: '_beneficiary',
				type: 'address',
			},
		],
		name: 'getAccountClaimableAndReleasedAmount',
		outputs: [
			{
				internalType: 'uint256',
				name: 'totalClaimable',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'totalReleased',
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
				name: '_beneficiary',
				type: 'address',
			},
		],
		name: 'getAccountTotalAmount',
		outputs: [
			{
				internalType: 'uint256',
				name: 'totalAmount',
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
				name: '_beneficiary',
				type: 'address',
			},
		],
		name: 'getCurrentVestedAmount',
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
		inputs: [
			{
				internalType: 'address',
				name: '_beneficiary',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_blockNum',
				type: 'uint256',
			},
		],
		name: 'getVestedAmount',
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
		inputs: [
			{
				internalType: 'address',
				name: '_beneficiary',
				type: 'address',
			},
		],
		name: 'getVestingAccount',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'initialUnlockPercentage',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'cliff',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'start',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'duration',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'released',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'totalAmount',
						type: 'uint256',
					},
					{
						internalType: 'bool',
						name: 'affectedByFDV',
						type: 'bool',
					},
				],
				internalType: 'struct ApeironVesting.VestingStruct[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'initialize',
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
		name: 'percentageBase',
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
				name: '_releaseAmount',
				type: 'uint256',
			},
		],
		name: 'release',
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
				name: '_beneficiary',
				type: 'address',
			},
		],
		name: 'revokeVestingAccount',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_FDVFactor',
				type: 'uint256',
			},
		],
		name: 'setFDVFactor',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_percentageBase',
				type: 'uint256',
			},
		],
		name: 'setPercentageBase',
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
		],
		name: 'setVestingToken',
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
		inputs: [
			{
				internalType: 'address',
				name: 'newImplementation',
				type: 'address',
			},
		],
		name: 'upgradeTo',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newImplementation',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'upgradeToAndCall',
		outputs: [],
		stateMutability: 'payable',
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
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'vestingMap',
		outputs: [
			{
				internalType: 'uint256',
				name: 'initialUnlockPercentage',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'cliff',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'start',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'duration',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'released',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'totalAmount',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'affectedByFDV',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const
const APEIRON_VESTING: Contract<typeof abi> = {
	name: 'Apeiron Vesting',
	address: '0x7ba6220c4ab971bdfd47c5f96b656d611e75a4f6',
	is_deprecated: false,
	updated_at: 1711423494,
	abi: abi,
}
export default APEIRON_VESTING
