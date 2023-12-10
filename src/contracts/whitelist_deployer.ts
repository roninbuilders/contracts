export const WHITELIST_DEPLOYER = {
	name: 'Whitelist Deployer',
	address: '0x0000000000000000000000000000000000000033',
	abi: [
		{
			inputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_address',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'bool',
					name: '_status',
					type: 'bool',
				},
			],
			name: 'AddressWhitelisted',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_oldAdmin',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_newAdmin',
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
					name: '_oldAdmin',
					type: 'address',
				},
			],
			name: 'AdminRemoved',
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
			name: 'WhitelistAllChange',
			type: 'event',
		},
		{
			constant: true,
			inputs: [],
			name: 'admin',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: '_newAdmin',
					type: 'address',
				},
			],
			name: 'changeAdmin',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'address',
					name: '_address',
					type: 'address',
				},
			],
			name: 'isWhitelisted',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [],
			name: 'removeAdmin',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: '_address',
					type: 'address',
				},
				{
					internalType: 'bool',
					name: '_status',
					type: 'bool',
				},
			],
			name: 'whitelist',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'whitelistAll',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'bool',
					name: '_status',
					type: 'bool',
				},
			],
			name: 'whitelistAllAddresses',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'whitelisted',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
	],
}
