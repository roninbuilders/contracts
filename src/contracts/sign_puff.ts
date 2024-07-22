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
				name: 'user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'continueNum',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'totalNum',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'timestamp',
				type: 'uint256',
			},
		],
		name: 'SignIn',
		type: 'event',
	},
	{
		inputs: [],
		name: 'BEGIN_TIME',
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
		name: 'acceptOwner',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'user',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'continueNum',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'totalNum',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'lastTime',
						type: 'uint256',
					},
				],
				internalType: 'struct SignPuff.ImportUserInfo[]',
				name: 'importUserInfos',
				type: 'tuple[]',
			},
		],
		name: 'importData',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'interval',
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
		name: 'renounceOwnership',
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
		inputs: [],
		name: 'signIn',
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
		name: 'signInInfo',
		outputs: [
			{
				internalType: 'bool',
				name: 'available',
				type: 'bool',
			},
			{
				internalType: 'uint256',
				name: 'userContinueNum',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'userTotalNum',
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
				name: '_timestamp',
				type: 'uint256',
			},
		],
		name: 'timeToCrycle',
		outputs: [
			{
				internalType: 'uint256',
				name: '_crycle',
				type: 'uint256',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
] as const
const SIGN_PUFF: Contract<typeof abi> = {
	name: 'Sign Puff',
	address: '0x72195defc317f7b1fa1895ddfbec6cce2b9fdfa2',
	is_deprecated: false,
	created_at: 1714838391,
	abi: abi,
}
export default SIGN_PUFF
