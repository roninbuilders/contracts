import { Contract } from '@/contract'
const abi = [
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
		constant: false,
		inputs: [
			{
				internalType: 'contract AppraisalOracleInterface',
				name: 'newAppraisalOracle',
				type: 'address',
			},
		],
		name: '_setAppraisalOracle',
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
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
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
		constant: true,
		inputs: [],
		name: 'appraisalOracle',
		outputs: [
			{
				internalType: 'contract AppraisalOracleInterface',
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
		name: 'getAccountLiquidity',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
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
		inputs: [
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
				name: 'wire',
				type: 'tuple',
			},
			{
				internalType: 'address',
				name: 'cErc721Token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'getAppraisal',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		payable: false,
		stateMutability: 'pure',
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
			{
				internalType: 'contract CTokenInterface',
				name: 'cTokenModify',
				type: 'address',
			},
			{
				internalType: 'contract CErc20CollateralInterface',
				name: 'cErc20CollateralTokenModify',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'redeemTokens',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'borrowAmount',
				type: 'uint256',
			},
			{
				internalType: 'contract CErc721Interface',
				name: 'cErc721TokenModify',
				type: 'address',
			},
			{
				internalType: 'uint256[]',
				name: 'redeemErc721TokenIds',
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
		name: 'getHypotheticalAccountLiquidity',
		outputs: [
			{
				internalType: 'enum ComptrollerErrorReporter.Error',
				name: '',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
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
		inputs: [
			{
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'getTotalBorrows',
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
		inputs: [
			{
				internalType: 'contract CTokenInterface',
				name: 'cToken',
				type: 'address',
			},
		],
		name: 'isDeprecated',
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
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: 'cTokenBorrowed',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'cTokenCollateral',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'repayAmount',
				type: 'uint256',
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
		name: 'liquidateBorrowAllowed',
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
		inputs: [
			{
				internalType: 'address',
				name: 'cTokenBorrowed',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'cErc721TokenCollateral',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'repayAmount',
				type: 'uint256',
			},
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
		name: 'liquidateBorrowAllowedErc721',
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
		inputs: [
			{
				internalType: 'address',
				name: 'cTokenBorrowed',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'cErc20CollateralToken',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'repayAmount',
				type: 'uint256',
			},
		],
		name: 'liquidateCalculateSeizeCErc20Collateral',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
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
		inputs: [
			{
				internalType: 'address',
				name: 'cTokenBorrowed',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'cTokenCollateral',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'actualRepayAmount',
				type: 'uint256',
			},
		],
		name: 'liquidateCalculateSeizeTokens',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
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
		constant: false,
		inputs: [
			{
				internalType: 'address',
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
] as const
const LIQUIDITY_ASSESSOR: Contract<typeof abi> = {
	name: 'Liquidity Assessor',
	address: '0x9e97f0a5b8582a336123667338992d8a8499cdf3',
	is_deprecated: false,
	updated_at: 1707759004,
	abi: abi,
}
export default LIQUIDITY_ASSESSOR
