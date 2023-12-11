export const WETH = {
	name: 'Wrapped Ether',
	address: '0xc99a6a985ed2cac1ef41640596c5a5f9f4e19ef5',
	abi: [
		{
			constant: false,
			inputs: [],
			name: '',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'constructor',
			anonymous: false,
		},
		{
			constant: false,
			inputs: [
				{
					internal_type: '',
					name: '_owner',
					type: 'address',
				},
				{
					internal_type: '',
					name: '_spender',
					type: 'address',
				},
				{
					internal_type: '',
					name: '_value',
					type: 'uint256',
				},
			],
			name: 'Approval',
			outputs: [],
			payable: false,
			stateMutability: '',
			type: 'event',
			anonymous: false,
		},
		{
			constant: false,
			inputs: [
				{
					internal_type: '',
					name: '_sender',
					type: 'address',
				},
				{
					internal_type: '',
					name: '_value',
					type: 'uint256',
				},
			],
			name: 'Deposit',
			outputs: [],
			payable: false,
			stateMutability: '',
			type: 'event',
			anonymous: false,
		},
		{
			constant: false,
			inputs: [
				{
					internal_type: '',
					name: '_from',
					type: 'address',
				},
				{
					internal_type: '',
					name: '_to',
					type: 'address',
				},
				{
					internal_type: '',
					name: '_value',
					type: 'uint256',
				},
			],
			name: 'Transfer',
			outputs: [],
			payable: false,
			stateMutability: '',
			type: 'event',
			anonymous: false,
		},
		{
			constant: false,
			inputs: [
				{
					internal_type: '',
					name: '_sender',
					type: 'address',
				},
				{
					internal_type: '',
					name: '_value',
					type: 'uint256',
				},
			],
			name: 'Withdrawal',
			outputs: [],
			payable: false,
			stateMutability: '',
			type: 'event',
			anonymous: false,
		},
		{
			constant: true,
			inputs: [
				{
					internal_type: '',
					name: '',
					type: 'address',
				},
				{
					internal_type: '',
					name: '',
					type: 'address',
				},
			],
			name: 'allowance',
			outputs: [
				{
					internal_type: '',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
			anonymous: false,
		},
		{
			constant: false,
			inputs: [
				{
					internal_type: '',
					name: '_spender',
					type: 'address',
				},
				{
					internal_type: '',
					name: '_value',
					type: 'uint256',
				},
			],
			name: 'approve',
			outputs: [
				{
					internal_type: '',
					name: '_success',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
			anonymous: false,
		},
		{
			constant: true,
			inputs: [
				{
					internal_type: '',
					name: '',
					type: 'address',
				},
			],
			name: 'balanceOf',
			outputs: [
				{
					internal_type: '',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
			anonymous: false,
		},
		{
			constant: true,
			inputs: [],
			name: 'decimals',
			outputs: [
				{
					internal_type: '',
					name: '',
					type: 'uint8',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
			anonymous: false,
		},
		{
			constant: false,
			inputs: [],
			name: 'deposit',
			outputs: [],
			payable: true,
			stateMutability: 'payable',
			type: 'function',
			anonymous: false,
		},
		{
			constant: true,
			inputs: [],
			name: 'name',
			outputs: [
				{
					internal_type: '',
					name: '',
					type: 'string',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
			anonymous: false,
		},
		{
			constant: true,
			inputs: [],
			name: 'symbol',
			outputs: [
				{
					internal_type: '',
					name: '',
					type: 'string',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
			anonymous: false,
		},
		{
			constant: true,
			inputs: [],
			name: 'totalSupply',
			outputs: [
				{
					internal_type: '',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
			anonymous: false,
		},
		{
			constant: false,
			inputs: [
				{
					internal_type: '',
					name: '_to',
					type: 'address',
				},
				{
					internal_type: '',
					name: '_value',
					type: 'uint256',
				},
			],
			name: 'transfer',
			outputs: [
				{
					internal_type: '',
					name: '_success',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
			anonymous: false,
		},
		{
			constant: false,
			inputs: [
				{
					internal_type: '',
					name: '_from',
					type: 'address',
				},
				{
					internal_type: '',
					name: '_to',
					type: 'address',
				},
				{
					internal_type: '',
					name: '_value',
					type: 'uint256',
				},
			],
			name: 'transferFrom',
			outputs: [
				{
					internal_type: '',
					name: '_success',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
			anonymous: false,
		},
		{
			constant: false,
			inputs: [
				{
					internal_type: '',
					name: '_wad',
					type: 'uint256',
				},
			],
			name: 'withdraw',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
			anonymous: false,
		},
	],
}
