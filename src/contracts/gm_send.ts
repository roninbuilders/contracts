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
				internalType: 'bytes32[]',
				name: 'mintIds',
				type: 'bytes32[]',
			},
		],
		name: 'batchCheckMinted',
		outputs: [
			{
				internalType: 'bool[]',
				name: '',
				type: 'bool[]',
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
						name: 'mintId',
						type: 'bytes32',
					},
					{
						internalType: 'address',
						name: 'to',
						type: 'address',
					},
					{
						internalType: 'uint256[]',
						name: 'tokenIds',
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
				internalType: 'struct GMSend.Minted[]',
				name: 'minteds',
				type: 'tuple[]',
			},
		],
		name: 'batchSend',
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
] as const
const GM_SEND: Contract<typeof abi> = {
	name: 'GM Send',
	address: '0x4fa6c6b43f690db817c1eec77103964a758f24c8',
	is_deprecated: false,
	created_at: 1723280371,
	abi: abi,
}
export default GM_SEND
