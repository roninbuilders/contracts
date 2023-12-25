import { Contract } from '@/contract'
export const RNS_DOMAIN_PRICE: Contract = {
	name: 'RNS Domain Price',
	address: '0x2f8c5e6bbe526d0c88979269f2b249271491717c',
	abi: [
		{
			inputs: [],
			stateMutability: 'payable',
			type: 'constructor',
		},
		{
			inputs: [
				{
					internalType: 'int32',
					name: 'expo1',
					type: 'int32',
				},
				{
					internalType: 'int32',
					name: 'expo2',
					type: 'int32',
				},
				{
					internalType: 'int64',
					name: 'price1',
					type: 'int64',
				},
			],
			name: 'ErrComputedPriceTooLarge',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'int32',
					name: 'expo',
					type: 'int32',
				},
			],
			name: 'ErrExponentTooLarge',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ExceedAuctionDomainExpiry',
			type: 'error',
		},
		{
			inputs: [],
			name: 'InvalidArrayLength',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'n',
					type: 'uint256',
				},
			],
			name: 'PeriodNumOverflowedUint16',
			type: 'error',
		},
		{
			inputs: [],
			name: 'RenewalFeeIsNotOverriden',
			type: 'error',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'operator',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint192',
					name: 'ratio',
					type: 'uint192',
				},
				{
					indexed: false,
					internalType: 'uint64',
					name: 'period',
					type: 'uint64',
				},
			],
			name: 'DomainPriceScaleRuleUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'operator',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'labelHash',
					type: 'bytes32',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'price',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'proofHash',
					type: 'bytes32',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'setType',
					type: 'uint256',
				},
			],
			name: 'DomainPriceUpdated',
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
					name: 'operator',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'maxLength',
					type: 'uint256',
				},
			],
			name: 'MaxRenewalFeeLengthUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'operator',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'contract IPyth',
					name: 'pyth',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'maxAcceptableAge',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'pythIdForRONUSD',
					type: 'bytes32',
				},
			],
			name: 'PythOracleConfigUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'operator',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'labelLength',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'renewalFee',
					type: 'uint256',
				},
			],
			name: 'RenewalFeeByLengthUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'operator',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'labelHash',
					type: 'bytes32',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'inverseRenewalFee',
					type: 'uint256',
				},
			],
			name: 'RenewalFeeOverridingUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'previousAdminRole',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'newAdminRole',
					type: 'bytes32',
				},
			],
			name: 'RoleAdminChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'sender',
					type: 'address',
				},
			],
			name: 'RoleGranted',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'sender',
					type: 'address',
				},
			],
			name: 'RoleRevoked',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'operator',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'ratio',
					type: 'uint256',
				},
			],
			name: 'TaxRatioUpdated',
			type: 'event',
		},
		{
			inputs: [],
			name: 'DEFAULT_ADMIN_ROLE',
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
			name: 'MAX_PERCENTAGE',
			outputs: [
				{
					internalType: 'uint64',
					name: '',
					type: 'uint64',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'OPERATOR_ROLE',
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
			name: 'OVERRIDER_ROLE',
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
			name: 'USD_DECIMALS',
			outputs: [
				{
					internalType: 'uint8',
					name: '',
					type: 'uint8',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32[]',
					name: 'lbHashes',
					type: 'bytes32[]',
				},
				{
					internalType: 'uint256[]',
					name: 'usdPrices',
					type: 'uint256[]',
				},
			],
			name: 'bulkOverrideRenewalFees',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32[]',
					name: 'lbHashes',
					type: 'bytes32[]',
				},
				{
					internalType: 'uint256[]',
					name: 'ronPrices',
					type: 'uint256[]',
				},
				{
					internalType: 'bytes32[]',
					name: 'proofHashes',
					type: 'bytes32[]',
				},
				{
					internalType: 'uint256[]',
					name: 'setTypes',
					type: 'uint256[]',
				},
			],
			name: 'bulkSetDomainPrice',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32[]',
					name: 'lbHashes',
					type: 'bytes32[]',
				},
				{
					internalType: 'uint256[]',
					name: 'ronPrices',
					type: 'uint256[]',
				},
				{
					internalType: 'bytes32[]',
					name: 'proofHashes',
					type: 'bytes32[]',
				},
				{
					internalType: 'uint256[]',
					name: 'setTypes',
					type: 'uint256[]',
				},
			],
			name: 'bulkTrySetDomainPrice',
			outputs: [
				{
					internalType: 'bool[]',
					name: 'updated',
					type: 'bool[]',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'ronWei',
					type: 'uint256',
				},
			],
			name: 'convertRONToUSD',
			outputs: [
				{
					internalType: 'uint256',
					name: 'usdWei',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'usdWei',
					type: 'uint256',
				},
			],
			name: 'convertUSDToRON',
			outputs: [
				{
					internalType: 'uint256',
					name: 'ronWei',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'string',
					name: 'label',
					type: 'string',
				},
			],
			name: 'getDomainPrice',
			outputs: [
				{
					internalType: 'uint256',
					name: 'usdPrice',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'ronPrice',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'string',
					name: 'label',
					type: 'string',
				},
			],
			name: 'getOverriddenRenewalFee',
			outputs: [
				{
					internalType: 'uint256',
					name: 'usdFee',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getPythOracleConfig',
			outputs: [
				{
					internalType: 'contract IPyth',
					name: 'pyth',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'maxAcceptableAge',
					type: 'uint256',
				},
				{
					internalType: 'bytes32',
					name: 'pythIdForRONUSD',
					type: 'bytes32',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'string',
					name: 'label',
					type: 'string',
				},
				{
					internalType: 'uint256',
					name: 'duration',
					type: 'uint256',
				},
			],
			name: 'getRenewalFee',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'usd',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'ron',
							type: 'uint256',
						},
					],
					internalType: 'struct INSDomainPrice.UnitPrice',
					name: 'basePrice',
					type: 'tuple',
				},
				{
					components: [
						{
							internalType: 'uint256',
							name: 'usd',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'ron',
							type: 'uint256',
						},
					],
					internalType: 'struct INSDomainPrice.UnitPrice',
					name: 'tax',
					type: 'tuple',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getRenewalFeeByLengths',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'labelLength',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'fee',
							type: 'uint256',
						},
					],
					internalType: 'struct INSDomainPrice.RenewalFee[]',
					name: 'renewalFees',
					type: 'tuple[]',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
			],
			name: 'getRoleAdmin',
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
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'uint256',
					name: 'index',
					type: 'uint256',
				},
			],
			name: 'getRoleMember',
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
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
			],
			name: 'getRoleMemberCount',
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
			name: 'getScaleDownRuleForDomainPrice',
			outputs: [
				{
					components: [
						{
							internalType: 'uint192',
							name: 'ratio',
							type: 'uint192',
						},
						{
							internalType: 'uint64',
							name: 'period',
							type: 'uint64',
						},
					],
					internalType: 'struct PeriodScaler',
					name: 'scaleRule',
					type: 'tuple',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getTaxRatio',
			outputs: [
				{
					internalType: 'uint256',
					name: 'ratio',
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
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'grantRole',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'hasRole',
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
					name: 'admin',
					type: 'address',
				},
				{
					internalType: 'address[]',
					name: 'operators',
					type: 'address[]',
				},
				{
					components: [
						{
							internalType: 'uint256',
							name: 'labelLength',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'fee',
							type: 'uint256',
						},
					],
					internalType: 'struct INSDomainPrice.RenewalFee[]',
					name: 'renewalFees',
					type: 'tuple[]',
				},
				{
					internalType: 'uint256',
					name: 'taxRatio',
					type: 'uint256',
				},
				{
					components: [
						{
							internalType: 'uint192',
							name: 'ratio',
							type: 'uint192',
						},
						{
							internalType: 'uint64',
							name: 'period',
							type: 'uint64',
						},
					],
					internalType: 'struct PeriodScaler',
					name: 'domainPriceScaleRule',
					type: 'tuple',
				},
				{
					internalType: 'contract IPyth',
					name: 'pyth',
					type: 'address',
				},
				{
					internalType: 'contract INSAuction',
					name: 'auction',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'maxAcceptableAge',
					type: 'uint256',
				},
				{
					internalType: 'bytes32',
					name: 'pythIdForRONUSD',
					type: 'bytes32',
				},
			],
			name: 'initialize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'renounceRole',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'revokeRole',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract IPyth',
					name: 'pyth',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'maxAcceptableAge',
					type: 'uint256',
				},
				{
					internalType: 'bytes32',
					name: 'pythIdForRONUSD',
					type: 'bytes32',
				},
			],
			name: 'setPythOracleConfig',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'labelLength',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'fee',
							type: 'uint256',
						},
					],
					internalType: 'struct INSDomainPrice.RenewalFee[]',
					name: 'renewalFees',
					type: 'tuple[]',
				},
			],
			name: 'setRenewalFeeByLengths',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					components: [
						{
							internalType: 'uint192',
							name: 'ratio',
							type: 'uint192',
						},
						{
							internalType: 'uint64',
							name: 'period',
							type: 'uint64',
						},
					],
					internalType: 'struct PeriodScaler',
					name: 'scaleRule',
					type: 'tuple',
				},
			],
			name: 'setScaleDownRuleForDomainPrice',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'ratio',
					type: 'uint256',
				},
			],
			name: 'setTaxRatio',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'interfaceId',
					type: 'bytes4',
				},
			],
			name: 'supportsInterface',
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
	],
}
