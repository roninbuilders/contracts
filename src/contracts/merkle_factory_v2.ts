import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'string',
				name: 'id',
				type: 'string',
			},
		],
		name: 'FactoryMerkleContractExists',
		type: 'error',
	},
	{
		inputs: [],
		name: 'FactoryZeroToken',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'benefactor',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'calendarAddress',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'id',
				type: 'string',
			},
		],
		name: 'MerkleCreated',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '_id',
				type: 'string',
			},
			{
				internalType: 'address',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_benefactor',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_claimFee',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_feeCollector',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_feeSetter',
				type: 'address',
			},
			{
				internalType: 'contract IPostClaimHandler[]',
				name: '_postClaimHandlers',
				type: 'address[]',
			},
			{
				internalType: 'uint256',
				name: '_maxClaimFee',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: '_shouldPayClaimFeeOnlyOnce',
				type: 'bool',
			},
		],
		name: 'createMerkle',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		name: 'merkleContracts',
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
] as const
const MERKLE_FACTORY_V2: Contract<typeof abi> = {
	name: 'Merkle Factory V2',
	address: '0xe84a14924c6ff691ac4605cf435ce5df75f52ed2',
	is_deprecated: false,
	created_at: 1733782636,
	abi: abi,
}
export default MERKLE_FACTORY_V2
