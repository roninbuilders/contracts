export const C_ERC721_STAKING = {
	name: 'C Erc721 Staking',
	address: '0xe791c6924691d8208a3c31e997091c19ecc7369e',
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
					indexed: true,
					internalType: 'address',
					name: 'newAdmin',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'previousAdmin',
					type: 'address',
				},
			],
			name: 'NewAdmin',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'newCollateralStakingManager',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'previousCollateralStakingManager',
					type: 'address',
				},
			],
			name: 'NewCollateralStakingManager',
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
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: 'newCollateralStakingManagerInterface',
					type: 'address',
				},
			],
			name: '_setCollateralStakingManager',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
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
			name: 'collateralStakingManagerInterface',
			outputs: [
				{
					internalType: 'contract CollateralStakingManagerInterface',
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
				{
					internalType: 'contract CollateralStakingManagerInterface',
					name: 'collateralStakingManagerInterface_',
					type: 'address',
				},
			],
			name: 'initialize',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'isCErc721Staking',
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
