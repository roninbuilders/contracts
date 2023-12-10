export const C_ETHER_PROXY = {
	name: 'C Ether Proxy',
	address: '0x1bf2b273745df6a38e5e5f907dcd4d204a4bfe30',
	abi: [
		{
			inputs: [
				{
					internalType: 'contract ComptrollerInterface',
					name: 'comptroller_',
					type: 'address',
				},
				{
					internalType: 'contract InterestRateModel',
					name: 'interestRateModel_',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'initialExchangeRateMantissa_',
					type: 'uint256',
				},
				{
					internalType: 'string',
					name: 'name_',
					type: 'string',
				},
				{
					internalType: 'string',
					name: 'symbol_',
					type: 'string',
				},
				{
					internalType: 'uint8',
					name: 'decimals_',
					type: 'uint8',
				},
				{
					internalType: 'address payable',
					name: 'admin_',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'implementation_',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'oldImplementation',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'newImplementation',
					type: 'address',
				},
			],
			name: 'NewImplementation',
			type: 'event',
		},
		{
			payable: true,
			stateMutability: 'payable',
			type: 'fallback',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: 'implementation_',
					type: 'address',
				},
			],
			name: '_setImplementation',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'accrualBlockNumber',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'admin',
			outputs: [
				{
					internalType: 'address payable',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'borrowIndex',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'comptroller',
			outputs: [
				{
					internalType: 'contract ComptrollerInterface',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'decimals',
			outputs: [
				{
					internalType: 'uint8',
					name: '',
					type: 'uint8',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'implementation',
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
			constant: true,
			inputs: [],
			name: 'interestRateModel',
			outputs: [
				{
					internalType: 'contract InterestRateModel',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'name',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'pendingAdmin',
			outputs: [
				{
					internalType: 'address payable',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'protocolSeizeShareMantissa',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'reserveFactorMantissa',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'symbol',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'totalBorrows',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'totalReserves',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'totalSupply',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'underlying',
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
	],
}
