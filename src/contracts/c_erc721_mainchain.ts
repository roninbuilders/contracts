import { Contract } from '@/contract'
export const C_ERC721_MAINCHAIN: Contract = {
	name: 'C Erc721 Mainchain',
	address: '0x3fbc37b5d67b9d12f1034e39a285af31eb91dfae',
	abi: [
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: 'error',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'info',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'detail',
					type: 'uint256',
				},
			],
			name: 'Failure',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'minter',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: 'tokenIds',
					type: 'uint256[]',
				},
			],
			name: 'Mint',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'contract ComptrollerInterface',
					name: 'oldComptroller',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'contract ComptrollerInterface',
					name: 'newComptroller',
					type: 'address',
				},
			],
			name: 'NewComptroller',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'redeemer',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: 'tokenIds',
					type: 'uint256[]',
				},
			],
			name: 'Redeem',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: 'tokenIds',
					type: 'uint256[]',
				},
			],
			name: 'Transfer',
			type: 'event',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'contract ComptrollerInterface',
					name: 'newComptroller',
					type: 'address',
				},
			],
			name: '_setComptroller',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
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
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'accountTokens',
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
			name: 'geneValidator',
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
			inputs: [
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'getAccountTokens',
			outputs: [
				{
					internalType: 'uint256[]',
					name: '',
					type: 'uint256[]',
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
			constant: false,
			inputs: [
				{
					internalType: 'contract ComptrollerInterface',
					name: 'comptroller_',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'underlying_',
					type: 'address',
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
			],
			name: 'initialize',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'uint256[]',
					name: 'tokenIds',
					type: 'uint256[]',
				},
			],
			name: 'mint',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'nonpayable',
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
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: '',
					type: 'bytes',
				},
			],
			name: 'onERC721Received',
			outputs: [
				{
					internalType: 'bytes4',
					name: '',
					type: 'bytes4',
				},
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'uint256[]',
					name: 'tokenIds',
					type: 'uint256[]',
				},
				{
					components: [
						{
							internalType: 'address[]',
							name: 'appraisalTokens',
							type: 'address[]',
						},
						{
							internalType: 'uint256[]',
							name: 'appraisalLengths',
							type: 'uint256[]',
						},
						{
							internalType: 'uint256[]',
							name: 'appraisalTokenIds',
							type: 'uint256[]',
						},
						{
							internalType: 'uint256[]',
							name: 'appraisalValues',
							type: 'uint256[]',
						},
						{
							internalType: 'uint256',
							name: 'appraisalGoodUntil',
							type: 'uint256',
						},
						{
							internalType: 'bytes',
							name: 'signature',
							type: 'bytes',
						},
					],
					internalType: 'struct AppraisalStruct.Wire',
					name: 'appraisal',
					type: 'tuple',
				},
			],
			name: 'redeem',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: 'liquidator',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'borrower',
					type: 'address',
				},
				{
					internalType: 'uint256[]',
					name: 'tokenIds',
					type: 'uint256[]',
				},
			],
			name: 'seizeAndRedeem',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address payable',
					name: 'newAdmin',
					type: 'address',
				},
			],
			name: 'setAdmin',
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
					name: 'validator',
					type: 'address',
				},
			],
			name: 'setGeneValidator',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
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
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'tokenOwners',
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
