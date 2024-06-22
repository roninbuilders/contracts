import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		name: 'ErrDepositPaused',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint8',
				name: 'gameId',
				type: 'uint8',
			},
		],
		name: 'ErrInvalidGameId',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidInput',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrInvalidTokenStandard',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrNullGameOwner',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'sig',
				type: 'bytes4',
			},
		],
		name: 'ErrUnauthorizedGameOwner',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'depositHash',
				type: 'bytes32',
			},
			{
				indexed: true,
				internalType: 'uint8',
				name: 'gameId',
				type: 'uint8',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'recipient',
				type: 'address',
			},
			{
				components: [
					{
						internalType: 'uint8',
						name: 'gameId',
						type: 'uint8',
					},
					{
						internalType: 'address',
						name: 'recipient',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'recipientNonce',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'sender',
						type: 'address',
					},
					{
						components: [
							{
								internalType: 'enum TokenStandard',
								name: 'erc',
								type: 'uint8',
							},
							{
								internalType: 'address',
								name: 'addr',
								type: 'address',
							},
							{
								internalType: 'uint256',
								name: 'id',
								type: 'uint256',
							},
							{
								internalType: 'uint256',
								name: 'quantity',
								type: 'uint256',
							},
						],
						internalType: 'struct Asset[]',
						name: 'assets',
						type: 'tuple[]',
					},
				],
				indexed: false,
				internalType: 'struct DepositRecord',
				name: 'record',
				type: 'tuple',
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
				internalType: 'uint8',
				name: 'gameId',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'GameOwnerUpdated',
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
				internalType: 'uint8',
				name: 'gameId',
				type: 'uint8',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'isPaused',
				type: 'bool',
			},
		],
		name: 'PauseStateUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint8',
				name: 'gameId',
				type: 'uint8',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'treasury',
				type: 'address',
			},
		],
		name: 'TreasuryUpdated',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'uint8',
				name: 'gameId',
				type: 'uint8',
			},
			{
				components: [
					{
						internalType: 'enum TokenStandard',
						name: 'erc',
						type: 'uint8',
					},
					{
						internalType: 'address',
						name: 'addr',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'quantity',
						type: 'uint256',
					},
				],
				internalType: 'struct Asset[]',
				name: 'assets',
				type: 'tuple[]',
			},
		],
		name: 'deposit',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'recipient',
				type: 'address',
			},
			{
				internalType: 'uint8',
				name: 'gameId',
				type: 'uint8',
			},
			{
				components: [
					{
						internalType: 'enum TokenStandard',
						name: 'erc',
						type: 'uint8',
					},
					{
						internalType: 'address',
						name: 'addr',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'id',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'quantity',
						type: 'uint256',
					},
				],
				internalType: 'struct Asset[]',
				name: 'assets',
				type: 'tuple[]',
			},
		],
		name: 'depositFor',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'recipient',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'recipientNonce',
				type: 'uint256',
			},
		],
		name: 'getDepositHash',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint8',
				name: 'gameId',
				type: 'uint8',
			},
		],
		name: 'getGameOwner',
		outputs: [
			{
				internalType: 'address',
				name: 'gameOwner',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint8',
				name: 'gameId',
				type: 'uint8',
			},
		],
		name: 'getGameTreasury',
		outputs: [
			{
				internalType: 'address',
				name: 'treasury',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint8',
				name: 'gameId',
				type: 'uint8',
			},
		],
		name: 'getPauseState',
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
				name: 'recipient',
				type: 'address',
			},
		],
		name: 'getRecipientNonce',
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
				internalType: 'bytes32',
				name: 'depositHash',
				type: 'bytes32',
			},
		],
		name: 'isDepositHashExisted',
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
				internalType: 'uint8',
				name: 'gameId',
				type: 'uint8',
			},
		],
		name: 'pauseDeposit',
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
				internalType: 'uint8',
				name: 'gameId',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'setGameOwner',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint8',
				name: 'gameId',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: 'treasury',
				type: 'address',
			},
		],
		name: 'setGameTreasury',
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
				internalType: 'uint8',
				name: 'gameId',
				type: 'uint8',
			},
		],
		name: 'unpauseDeposit',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const CLASSIC_PORTAL: Contract<typeof abi> = {
	name: 'Classic Portal',
	address: '0x13bb571088984647ece620e595f4be4bcddab204',
	is_deprecated: false,
	created_at: 1704962479,
	abi: abi,
}
export default CLASSIC_PORTAL
