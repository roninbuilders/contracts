import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'ALREADY_ACTIVE',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'msgSender',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'recipient',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'active',
				type: 'bool',
			},
		],
		name: 'Claim',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'recipient',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'Clawback',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'recipient',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'start',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'end',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'unlockFrequency',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'cliff',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'unlockPerPeriod',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'active',
				type: 'bool',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'vested',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'instantUnlock',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'instantUnlockTransfer',
				type: 'uint256',
			},
		],
		name: 'Create',
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
				name: 'oldRecipient',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newRecipient',
				type: 'address',
			},
		],
		name: 'TransferVesting',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_recipient',
				type: 'address',
			},
		],
		name: 'claim',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_recipient',
				type: 'address',
			},
		],
		name: 'claimable',
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
				name: '_recipient',
				type: 'address',
			},
		],
		name: 'clawback',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_recipient',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_start',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_length',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_unlockFrequency',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_cliff',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_instantUnlock',
				type: 'uint256',
			},
		],
		name: 'create',
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
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'recipients',
		outputs: [
			{
				internalType: 'uint64',
				name: 'start',
				type: 'uint64',
			},
			{
				internalType: 'uint64',
				name: 'end',
				type: 'uint64',
			},
			{
				internalType: 'uint64',
				name: 'lastUnlock',
				type: 'uint64',
			},
			{
				internalType: 'uint32',
				name: 'cliff',
				type: 'uint32',
			},
			{
				internalType: 'uint32',
				name: 'unlockFrequency',
				type: 'uint32',
			},
			{
				internalType: 'uint248',
				name: 'unlockPerPeriod',
				type: 'uint248',
			},
			{
				internalType: 'bool',
				name: 'active',
				type: 'bool',
			},
			{
				internalType: 'uint256',
				name: 'vested',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'claimed',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
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
		inputs: [],
		name: 'token',
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
				name: '_oldRecipient',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_newRecipient',
				type: 'address',
			},
		],
		name: 'transferVesting',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const KDR_VESTING: Contract<typeof abi> = {
	name: 'KDR Vesting',
	address: '0x2e1626e16ba42b9cb0a5f041b994f15e4a314b6d',
	is_deprecated: false,
	created_at: 1734455094,
	abi: abi,
}
export default KDR_VESTING
