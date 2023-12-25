import { Contract } from '@/contract'
export const BLACKLIST: Contract = {
	name: 'Blacklist',
	address: '0x40e858815094091f406f6c84bdd0e4fd0bc4f06d',
	abi: [
		{
			inputs: [],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: '_admin',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'bool',
					name: '_enabled',
					type: 'bool',
				},
			],
			name: 'AdminAccessSet',
			type: 'event',
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
					internalType: 'bool',
					name: '_status',
					type: 'bool',
				},
			],
			name: 'ContractDisabled',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'enum Blacklist.BLACKLIST_TYPE',
					name: '_type',
					type: 'uint8',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_owner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_tokenId',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'bool',
					name: '_enable',
					type: 'bool',
				},
			],
			name: 'NFTBlacklisted',
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
					name: 'implementation',
					type: 'address',
				},
			],
			name: 'Upgraded',
			type: 'event',
		},
		{
			inputs: [],
			name: 'MAX_INPUT_LENGTH',
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
					components: [
						{
							internalType: 'enum Blacklist.BLACKLIST_TYPE',
							name: '_type',
							type: 'uint8',
						},
						{
							internalType: 'address',
							name: '_owner',
							type: 'address',
						},
						{
							internalType: 'address',
							name: '_token',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: '_id',
							type: 'uint256',
						},
						{
							internalType: 'bool',
							name: '_enable',
							type: 'bool',
						},
					],
					internalType: 'struct Blacklist.Input[]',
					name: '_inputs',
					type: 'tuple[]',
				},
			],
			name: 'blacklistNFTs',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_owner',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_id',
					type: 'uint256',
				},
			],
			name: 'blacklistedNFT',
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
							internalType: 'enum Blacklist.BLACKLIST_TYPE',
							name: '_type',
							type: 'uint8',
						},
						{
							internalType: 'address',
							name: '_owner',
							type: 'address',
						},
						{
							internalType: 'address',
							name: '_token',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: '_id',
							type: 'uint256',
						},
						{
							internalType: 'bool',
							name: '_enable',
							type: 'bool',
						},
					],
					internalType: 'struct Blacklist.Input',
					name: '_input',
					type: 'tuple',
				},
			],
			name: 'canBlacklistNFT',
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
			name: 'disabled',
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
					internalType: 'enum Blacklist.BLACKLIST_TYPE',
					name: '_type',
					type: 'uint8',
				},
				{
					internalType: 'address',
					name: '_owner',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_token',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_id',
					type: 'uint256',
				},
			],
			name: 'getBlacklistKey',
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
			name: 'initialize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'admin',
					type: 'address',
				},
			],
			name: 'isAdmin',
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
					name: 'admin',
					type: 'address',
				},
				{
					internalType: 'bool',
					name: 'enabled',
					type: 'bool',
				},
			],
			name: 'setAdmin',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bool',
					name: '_status',
					type: 'bool',
				},
			],
			name: 'setDisabled',
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
	],
}
