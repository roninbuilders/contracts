import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		name: 'ZeroValueETH',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'payee',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'battleId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'assetEnum',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'contractAddr',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'amtOrTokenId',
				type: 'uint256[]',
			},
		],
		name: 'Deposited',
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
				name: 'payee',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'battleId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'assetEnum',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'contractAddr',
				type: 'address[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'amtOrTokenId',
				type: 'uint256[]',
			},
		],
		name: 'Withdrawn',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'payee',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'battleId',
				type: 'uint256',
			},
			{
				components: [
					{
						internalType: 'enum IBatchEscrow.AssetType',
						name: 'asset',
						type: 'uint8',
					},
					{
						internalType: 'address',
						name: 'contractAddr',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'amtOrTokenId',
						type: 'uint256',
					},
				],
				internalType: 'struct IBatchEscrow.BatchStake[]',
				name: 'stakes',
				type: 'tuple[]',
			},
		],
		name: 'deposit',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
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
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'payee',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'battleId',
				type: 'uint256',
			},
		],
		name: 'depositsOf',
		outputs: [
			{
				components: [
					{
						internalType: 'enum IBatchEscrow.AssetType',
						name: 'asset',
						type: 'uint8',
					},
					{
						internalType: 'address',
						name: 'contractAddr',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'amtOrTokenId',
						type: 'uint256',
					},
				],
				internalType: 'struct IBatchEscrow.BatchStake[]',
				name: '',
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
				name: '',
				type: 'address',
			},
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
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		name: 'onERC721Received',
		outputs: [
			{
				internalType: 'bytes4',
				name: '',
				type: 'bytes4',
			},
		],
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
				name: 'payee',
				type: 'address',
			},
			{
				internalType: 'address payable',
				name: 'receiver',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'battleId',
				type: 'uint256',
			},
		],
		name: 'withdraw',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const DUEL_ARENA_ESCROW: Contract<typeof abi> = {
	name: 'Duel Arena Escrow',
	address: '0x8482dcd935b922959614aebfa4cf7fbcff9fb9eb',
	is_deprecated: false,
	created_at: 1735578030,
	abi: abi,
}
export default DUEL_ARENA_ESCROW
