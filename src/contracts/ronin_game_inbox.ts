import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'contract IConfig',
				name: '_config',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'blockNumber',
				type: 'uint256',
			},
			{
				internalType: 'bytes[]',
				name: 'returnData',
				type: 'bytes[]',
			},
		],
		name: 'AggregateResult',
		type: 'error',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'userAddress',
						type: 'address',
					},
					{
						internalType: 'bool',
						name: 'success',
						type: 'bool',
					},
					{
						internalType: 'bool',
						name: 'force',
						type: 'bool',
					},
					{
						internalType: 'bytes',
						name: 'reason',
						type: 'bytes',
					},
				],
				internalType: 'struct RoninGameInbox.GameResult[]',
				name: 'results',
				type: 'tuple[]',
			},
		],
		name: 'SimulateResult',
		type: 'error',
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
				name: 'user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'DepositLUAToGame',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'DepositRonToGame',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'gameContract',
				type: 'address',
			},
		],
		name: 'GameContractAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'gameContract',
				type: 'address',
			},
		],
		name: 'GameContractRemoved',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'ids',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: 'values',
				type: 'uint256[]',
			},
		],
		name: 'GameOffchainMintBatch',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [],
		name: 'HandleGameMessages',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'messageId',
				type: 'bytes32',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'userAddress',
						type: 'address',
					},
					{
						internalType: 'bool',
						name: 'success',
						type: 'bool',
					},
					{
						internalType: 'bool',
						name: 'force',
						type: 'bool',
					},
					{
						internalType: 'bytes',
						name: 'reason',
						type: 'bytes',
					},
				],
				indexed: false,
				internalType: 'struct RoninGameInbox.GameResult',
				name: 'result',
				type: 'tuple',
			},
		],
		name: 'HandleGameResult',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint8',
				name: 'version',
				type: 'uint8',
			},
		],
		name: 'Initialized',
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
		inputs: [
			{
				internalType: 'address[]',
				name: 'gameContracts',
				type: 'address[]',
			},
		],
		name: 'addGameContract',
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
						name: 'target',
						type: 'address',
					},
					{
						internalType: 'bytes',
						name: 'data',
						type: 'bytes',
					},
				],
				internalType: 'struct RoninGameInbox.MultiGameMessage[]',
				name: 'multiGameMessages',
				type: 'tuple[]',
			},
		],
		name: 'aggregate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'bytes32',
						name: 'messageId',
						type: 'bytes32',
					},
					{
						internalType: 'address',
						name: 'target',
						type: 'address',
					},
					{
						internalType: 'bytes',
						name: 'data',
						type: 'bytes',
					},
					{
						internalType: 'address',
						name: 'userAddress',
						type: 'address',
					},
					{
						internalType: 'bool',
						name: 'force',
						type: 'bool',
					},
					{
						internalType: 'uint256',
						name: 'gasFee',
						type: 'uint256',
					},
				],
				internalType: 'struct RoninGameInbox.GameMessage[]',
				name: 'gameMessages',
				type: 'tuple[]',
			},
			{
				components: [
					{
						internalType: 'address',
						name: 'target',
						type: 'address',
					},
					{
						internalType: 'bytes',
						name: 'data',
						type: 'bytes',
					},
				],
				internalType: 'struct RoninGameInbox.Call[]',
				name: 'calls',
				type: 'tuple[]',
			},
		],
		name: 'aggregateAfterGameMessages',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'owner',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: 'ids',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
		],
		name: 'batchDepositGameNFT',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_contract',
				type: 'address',
			},
		],
		name: 'checkIsGameContract',
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
		name: 'config',
		outputs: [
			{
				internalType: 'contract IConfig',
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
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'depositLUAToGame',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'depositRonToGame',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		name: 'executedMessages',
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
				components: [
					{
						internalType: 'bytes32',
						name: 'messageId',
						type: 'bytes32',
					},
					{
						internalType: 'address',
						name: 'target',
						type: 'address',
					},
					{
						internalType: 'bytes',
						name: 'data',
						type: 'bytes',
					},
					{
						internalType: 'address',
						name: 'userAddress',
						type: 'address',
					},
					{
						internalType: 'bool',
						name: 'force',
						type: 'bool',
					},
					{
						internalType: 'uint256',
						name: 'gasFee',
						type: 'uint256',
					},
				],
				internalType: 'struct RoninGameInbox.GameMessage[]',
				name: 'gameMessages',
				type: 'tuple[]',
			},
		],
		name: 'handle',
		outputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'userAddress',
						type: 'address',
					},
					{
						internalType: 'bool',
						name: 'success',
						type: 'bool',
					},
					{
						internalType: 'bool',
						name: 'force',
						type: 'bool',
					},
					{
						internalType: 'bytes',
						name: 'reason',
						type: 'bytes',
					},
				],
				internalType: 'struct RoninGameInbox.GameResult[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'nonpayable',
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
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'isGameContract',
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
		name: 'isSimulate',
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
				name: 'token',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'payToken',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'postUpgrade',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'proxiableUUID',
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
				internalType: 'address[]',
				name: 'gameContracts',
				type: 'address[]',
			},
		],
		name: 'removeGameContract',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: 'ids',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: 'itemIds',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
		],
		name: 'safeBatchMint',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: 'ids',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
		],
		name: 'safeBatchMintWithGame',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'bytes32',
						name: 'messageId',
						type: 'bytes32',
					},
					{
						internalType: 'address',
						name: 'target',
						type: 'address',
					},
					{
						internalType: 'bytes',
						name: 'data',
						type: 'bytes',
					},
					{
						internalType: 'address',
						name: 'userAddress',
						type: 'address',
					},
					{
						internalType: 'bool',
						name: 'force',
						type: 'bool',
					},
					{
						internalType: 'uint256',
						name: 'gasFee',
						type: 'uint256',
					},
				],
				internalType: 'struct RoninGameInbox.GameMessage[]',
				name: 'gameMessages',
				type: 'tuple[]',
			},
		],
		name: 'simulate',
		outputs: [
			{
				internalType: 'bool[]',
				name: '',
				type: 'bool[]',
			},
			{
				internalType: 'bytes[]',
				name: '',
				type: 'bytes[]',
			},
		],
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
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const RONIN_GAME_INBOX: Contract<typeof abi> = {
	name: 'Ronin Game Inbox',
	address: '0x4bba9f2cc156cb885fa5b605f693be20c5d1aa9b',
	is_deprecated: false,
	created_at: 1730859948,
	abi: abi,
}
export default RONIN_GAME_INBOX
