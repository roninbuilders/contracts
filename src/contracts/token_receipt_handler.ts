export const TOKEN_RECEIPT_HANDLER = {
	name: 'Token Receipt Handler',
	address: '0x2ef1ca1a9a4a6b05eb784db98befb06d24859b16',
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
					internalType: 'address',
					name: 'user',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'originalToken',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'receiptToken',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'tokenId',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'BurnReceipt',
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
					internalType: 'address',
					name: 'originalToken',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'receiptToken',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'tokenId',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'CreateReceipt',
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
					indexed: false,
					internalType: 'address',
					name: 'originalToken',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'receiptToken',
					type: 'address',
				},
			],
			name: 'SetupTokenReceipt',
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
					internalType: 'address',
					name: '_stakeholder',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_assetAddress',
					type: 'address',
				},
				{
					internalType: 'uint256[]',
					name: '_tokenIds',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '_amounts',
					type: 'uint256[]',
				},
			],
			name: 'burnReceipts',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_stakeholder',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_assetAddress',
					type: 'address',
				},
				{
					internalType: 'uint256[]',
					name: '_tokenIds',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '_amounts',
					type: 'uint256[]',
				},
			],
			name: 'createReceipts',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_originalToken',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'getTokenRealOwner',
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
					internalType: 'address',
					name: '_originalToken',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_receiptToken',
					type: 'address',
				},
			],
			name: 'setupTokenReceipt',
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
			name: 'tokenReceiptables',
			outputs: [
				{
					internalType: 'contract ITokenReceiptable',
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
