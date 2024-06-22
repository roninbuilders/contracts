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
				name: '_old',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: '_new',
				type: 'address',
			},
		],
		name: 'ContractAddressUpdated',
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
				indexed: false,
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: '_recipients',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: '_sharePercentages',
				type: 'uint256[]',
			},
		],
		name: 'SLPShared',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: '_recipients',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: '_sharePercentages',
				type: 'uint256[]',
			},
		],
		name: 'TokenShared',
		type: 'event',
	},
	{
		inputs: [],
		name: 'TOTAL_SHARE',
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
		name: 'acceptOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_newAddress',
				type: 'address',
			},
		],
		name: 'changeRewardContract',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_newAddress',
				type: 'address',
			},
		],
		name: 'changeSlpContract',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_recipients',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_sharePercentages',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_createdAt',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: '_signature',
				type: 'bytes',
			},
		],
		name: 'claimAndSplitSLP',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: '_recipients',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_sharePercentages',
				type: 'uint256[]',
			},
			{
				internalType: 'address',
				name: '_tokenContract',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_tokenId',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_createdAt',
				type: 'uint256',
			},
			{
				internalType: 'bytes',
				name: '_signature',
				type: 'bytes',
			},
		],
		name: 'claimAndSplitToken',
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
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'rewardContractAddress',
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
		name: 'slpContractAddress',
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
				name: '_candidate',
				type: 'address',
			},
		],
		name: 'tryTransferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const REWARD_SPLITTER: Contract<typeof abi> = {
	name: 'Reward Splitter',
	address: '0x13b17ae62ec87775222789d1c544fe1c1b3dccb3',
	is_deprecated: false,
	created_at: 1646053158,
	abi: abi,
}
export default REWARD_SPLITTER
