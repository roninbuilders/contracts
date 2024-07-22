import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'contract IMintableERC721V3',
				name: '_puffNewYearNFT',
				type: 'address',
			},
			{
				internalType: 'contract IMintableERC721V3',
				name: '_classicNFT',
				type: 'address',
			},
			{
				internalType: 'contract INFTShop',
				name: '_nftShop',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_claimCondition',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_totalSupply',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'nftId',
				type: 'uint256',
			},
		],
		name: 'Claim',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
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
		],
		name: 'ClaimConditionChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
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
		],
		name: 'FinishAtChanged',
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
				name: 'oldValue',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newValue',
				type: 'uint256',
			},
		],
		name: 'StartAtChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
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
		],
		name: 'TotalSupplyChanged',
		type: 'event',
	},
	{
		inputs: [],
		name: 'acceptOwner',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_user',
				type: 'address',
			},
		],
		name: 'available',
		outputs: [
			{
				internalType: 'uint256',
				name: 'totalNum',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'claimedNum',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'claim',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'claimCondition',
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
		name: 'classicNFT',
		outputs: [
			{
				internalType: 'contract IMintableERC721V3',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'finishAt',
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
		name: 'nftShop',
		outputs: [
			{
				internalType: 'contract INFTShop',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
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
		name: 'pendingOwner',
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
		name: 'puffNewYearNFT',
		outputs: [
			{
				internalType: 'contract IMintableERC721V3',
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
		inputs: [
			{
				internalType: 'uint256',
				name: '_condition',
				type: 'uint256',
			},
		],
		name: 'setClaimCondition',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_finishAt',
				type: 'uint256',
			},
		],
		name: 'setFinishAt',
		outputs: [],
		stateMutability: 'nonpayable',
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
		name: 'setPendingOwner',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_startAt',
				type: 'uint256',
			},
		],
		name: 'setStartAt',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_totalSupply',
				type: 'uint256',
			},
		],
		name: 'setTotalSupply',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'startAt',
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
		name: 'totalClaimed',
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
		name: 'totalSupply',
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
		],
		name: 'userClaimed',
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
] as const
const PUFF_NEW_YEAR_CLAIM: Contract<typeof abi> = {
	name: 'Puff New Year Claim',
	address: '0xfa351807651688853d4f7cf2faea3b2dee350ec7',
	is_deprecated: false,
	created_at: 1721398965,
	abi: abi,
}
export default PUFF_NEW_YEAR_CLAIM
