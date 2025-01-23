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
		name: 'OwnershipTransferStarted',
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
		inputs: [],
		name: '_depositContract',
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
		name: '_supraGeneratorContract',
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
		name: 'acceptOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'depositContract',
		outputs: [
			{
				internalType: 'contract IDepositContract',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'freezeUpgradability',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '_functionSig',
				type: 'string',
			},
			{
				internalType: 'uint8',
				name: '_rngCount',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: '_numConfirmations',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_clientSeed',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_clientWalletAddress',
				type: 'address',
			},
		],
		name: 'generateRequest',
		outputs: [
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
				internalType: 'string',
				name: '_functionSig',
				type: 'string',
			},
			{
				internalType: 'uint8',
				name: '_rngCount',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: '_numConfirmations',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_clientWalletAddress',
				type: 'address',
			},
		],
		name: 'generateRequest',
		outputs: [
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
		inputs: [
			{
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
			{
				internalType: 'uint256[]',
				name: 'rngList',
				type: 'uint256[]',
			},
			{
				internalType: 'address',
				name: '_clientContractAddress',
				type: 'address',
			},
			{
				internalType: 'string',
				name: '_functionSig',
				type: 'string',
			},
		],
		name: 'rngCallback',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
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
				name: '_contractAddress',
				type: 'address',
			},
		],
		name: 'updateDepositContract',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_contractAddress',
				type: 'address',
			},
		],
		name: 'updateGeneratorContract',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const SUPRA_ROUTER_CONTRACT: Contract<typeof abi> = {
	name: 'Supra Router Contract',
	address: '0x8f9c975f2fbdf6c171cce21f949342031198ae3f',
	is_deprecated: false,
	created_at: 1736774333,
	abi: abi,
}
export default SUPRA_ROUTER_CONTRACT
