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
				name: 'gameToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'roninToken',
				type: 'address',
			},
		],
		name: 'TokenUpdate',
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
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bool',
				name: 'enabled',
				type: 'bool',
			},
		],
		name: 'WithdrawEnabledUpdate',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'recipient',
				type: 'address',
			},
		],
		name: 'WithdrawFeeRecipientUpdate',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'fee',
				type: 'uint256',
			},
		],
		name: 'WithdrawFeeUpdate',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'withdrawHash',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint8',
				name: 'status',
				type: 'uint8',
			},
		],
		name: 'WithdrawStatusUpdateEvent',
		type: 'event',
	},
	{
		inputs: [],
		name: 'PRECENT_DENOMINATOR',
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
		name: '_WITHDRAW_TYPEHASH',
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
				internalType: 'address',
				name: 'gameToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'roninToken',
				type: 'address',
			},
		],
		name: 'addToken',
		outputs: [],
		stateMutability: 'nonpayable',
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
		inputs: [],
		name: 'crossAuthWeighted',
		outputs: [
			{
				internalType: 'contract ICrossAuthWeighted',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'domainSeparator',
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
		inputs: [],
		name: 'getChainId',
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
				name: 'dataHash',
				type: 'bytes32',
			},
		],
		name: 'hashTypedData',
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
				internalType: 'contract ICrossAuthWeighted',
				name: '_crossAuthWeighted',
				type: 'address',
			},
		],
		name: 'initialize',
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
				internalType: 'bool',
				name: 'enabled',
				type: 'bool',
			},
		],
		name: 'setWithdrawEnabled',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'fee',
				type: 'uint256',
			},
		],
		name: 'setWithdrawFee',
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
		],
		name: 'setWithdrawFeeRecipient',
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
		inputs: [
			{
				components: [
					{
						internalType: 'address',
						name: 'token',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'amount',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'from',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'to',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
				],
				internalType: 'struct LumiterraWithdraw.Withdraw',
				name: 'withdrawCalldata',
				type: 'tuple',
			},
			{
				internalType: 'bytes',
				name: 'poof',
				type: 'bytes',
			},
		],
		name: 'withdraw',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'withdrawEnabled',
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
		name: 'withdrawFee',
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
		name: 'withdrawFeeRecipient',
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
				components: [
					{
						internalType: 'address',
						name: 'token',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'amount',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'from',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'to',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
				],
				internalType: 'struct LumiterraWithdraw.Withdraw',
				name: 'withdrawCalldata',
				type: 'tuple',
			},
		],
		name: 'withdrawHash',
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
				components: [
					{
						internalType: 'address',
						name: 'token',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'amount',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'from',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'to',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
				],
				internalType: 'struct LumiterraWithdraw.Withdraw',
				name: 'withdrawCalldata',
				type: 'tuple',
			},
		],
		name: 'withdrawRollup',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const LUMITERRA_WITHDRAW: Contract<typeof abi> = {
	name: 'Lumiterra Withdraw',
	address: '0x60928dee31cf300b0919e14e6316b174490888e2',
	is_deprecated: false,
	created_at: 1727689311,
	abi: abi,
}
export default LUMITERRA_WITHDRAW
