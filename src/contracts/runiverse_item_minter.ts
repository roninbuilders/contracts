import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'contract IRuniverseItem',
				name: '_runiverseItem',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_signer',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'Address0Error',
		type: 'error',
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
		inputs: [
			{
				internalType: 'contract IERC20',
				name: 'token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'forwardERC20s',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: '_messageHash',
				type: 'bytes32',
			},
		],
		name: 'getEthSignedMessageHash',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '_message',
				type: 'string',
			},
		],
		name: 'getMessageHash',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getSigner',
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
				internalType: 'uint256[]',
				name: 'tokenIds',
				type: 'uint256[]',
			},
			{
				internalType: 'address[]',
				name: 'recipients',
				type: 'address[]',
			},
		],
		name: 'ownerMint',
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
		inputs: [],
		name: 'runiverseItem',
		outputs: [
			{
				internalType: 'contract IRuniverseItem',
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
				internalType: 'contract IRuniverseItem',
				name: '_newruniverseItemAddress',
				type: 'address',
			},
		],
		name: 'setRuniverseItem',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_signer',
				type: 'address',
			},
		],
		name: 'setSigner',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'signer',
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
				internalType: 'string',
				name: '_message',
				type: 'string',
			},
			{
				internalType: 'bytes',
				name: '_signature',
				type: 'bytes',
			},
		],
		name: 'verify',
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
				internalType: 'bytes',
				name: 'signature',
				type: 'bytes',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'verifyAndMint',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'withdrawAll',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
] as const
const RUNIVERSE_ITEM_MINTER: Contract<typeof abi> = {
	name: 'Runiverse Item Minter',
	address: '0x6576de94e7fa9039ab823c5719fd7f982b9a2714',
	is_deprecated: false,
	created_at: 1723928582,
	abi: abi,
}
export default RUNIVERSE_ITEM_MINTER
