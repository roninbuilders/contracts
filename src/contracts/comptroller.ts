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
				internalType: 'string',
				name: 'action',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'pauseState',
				type: 'bool',
			},
		],
		name: 'ActionPaused',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'cToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'action',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'pauseState',
				type: 'bool',
			},
		],
		name: 'ActionPaused',
		type: 'event',
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
				indexed: false,
				internalType: 'address',
				name: 'cToken',
				type: 'address',
			},
		],
		name: 'MarketListed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'contract CTokenInterface',
				name: 'cToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newBorrowCap',
				type: 'uint256',
			},
		],
		name: 'NewBorrowCap',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldBorrowCapGuardian',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newBorrowCapGuardian',
				type: 'address',
			},
		],
		name: 'NewBorrowCapGuardian',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldCloseFactorMantissa',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newCloseFactorMantissa',
				type: 'uint256',
			},
		],
		name: 'NewCloseFactor',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'cToken',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldCollateralFactorMantissa',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newCollateralFactorMantissa',
				type: 'uint256',
			},
		],
		name: 'NewCollateralFactor',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'market',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldLiquidationDiscountMantissa',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newLiquidationDiscountMantissa',
				type: 'uint256',
			},
		],
		name: 'NewLiquidationDiscount',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'market',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'oldLiquidationIncentiveMantissa',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newLiquidationIncentiveMantissa',
				type: 'uint256',
			},
		],
		name: 'NewLiquidationIncentive',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldPauseGuardian',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newPauseGuardian',
				type: 'address',
			},
		],
		name: 'NewPauseGuardian',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract PriceOracle',
				name: 'oldPriceOracle',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'contract PriceOracle',
				name: 'newPriceOracle',
				type: 'address',
			},
		],
		name: 'NewPriceOracle',
		type: 'event',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'contract Unitroller',
				name: 'unitroller',
				type: 'address',
			},
		],
		name: '_become',
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
				name: 'newBorrowCapGuardian',
				type: 'address',
			},
		],
		name: '_setBorrowCapGuardian',
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
				name: 'cToken',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'state',
				type: 'bool',
			},
		],
		name: '_setBorrowPaused',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
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
				internalType: 'uint256',
				name: 'newCloseFactorMantissa',
				type: 'uint256',
			},
		],
		name: '_setCloseFactor',
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
				name: 'cToken',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'newCollateralFactorMantissa',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'isErc721',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: 'isErc20Collateral',
				type: 'bool',
			},
		],
		name: '_setCollateralFactor',
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
				internalType: 'contract CompComptrollerInterface',
				name: 'newCompComptroller',
				type: 'address',
			},
		],
		name: '_setCompComptroller',
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
				name: 'market',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'newLiquidationDiscountMantissa',
				type: 'uint256',
			},
		],
		name: '_setLiquidationDiscountForMarket',
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
				name: 'market',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'newLiquidationIncentiveMantissa',
				type: 'uint256',
			},
		],
		name: '_setLiquidationIncentiveForMarket',
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
				internalType: 'contract LiquidityAssessorInterface',
				name: 'newLiquidityAssessor',
				type: 'address',
			},
		],
		name: '_setLiquidityAssessor',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'contract CTokenInterface[]',
				name: 'cTokens',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'newBorrowCaps',
				type: 'uint256[]',
			},
		],
		name: '_setMarketBorrowCaps',
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
				name: 'cToken',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'state',
				type: 'bool',
			},
		],
		name: '_setMintPaused',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
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
				name: 'newPauseGuardian',
				type: 'address',
			},
		],
		name: '_setPauseGuardian',
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
				internalType: 'contract PriceOracle',
				name: 'newOracle',
				type: 'address',
			},
		],
		name: '_setPriceOracle',
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
				internalType: 'bool',
				name: 'state',
				type: 'bool',
			},
		],
		name: '_setSeizePaused',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
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
				internalType: 'bool',
				name: 'state',
				type: 'bool',
			},
		],
		name: '_setTransferPaused',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
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
				name: 'cToken',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'isErc721',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: 'isErc20Collateral',
				type: 'bool',
			},
		],
		name: '_supportMarket',
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
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'allErc20BridgedMarkets',
		outputs: [
			{
				internalType: 'contract CErc20BridgedInterface',
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
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'allErc20CollateralMarkets',
		outputs: [
			{
				internalType: 'contract CErc20CollateralInterface',
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
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'allErc721Markets',
		outputs: [
			{
				internalType: 'contract CErc721Interface',
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
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'allMarkets',
		outputs: [
			{
				internalType: 'contract CTokenInterface',
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
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'cToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'borrower',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'borrowAmount',
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
		name: 'borrowAllowed',
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
		name: 'borrowCapGuardian',
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
				name: '',
				type: 'address',
			},
		],
		name: 'borrowCaps',
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
				name: '',
				type: 'address',
			},
		],
		name: 'borrowGuardianPaused',
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
		inputs: [],
		name: 'closeFactorMantissa',
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
		name: 'compComptroller',
		outputs: [
			{
				internalType: 'contract CompComptrollerInterface',
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
		name: 'comptrollerImplementation',
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
		name: 'getAllErc20CollateralMarkets',
		outputs: [
			{
				internalType: 'contract CErc20CollateralInterface[]',
				name: '',
				type: 'address[]',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'getAllErc721Markets',
		outputs: [
			{
				internalType: 'contract CErc721Interface[]',
				name: '',
				type: 'address[]',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'getAllMarkets',
		outputs: [
			{
				internalType: 'contract CTokenInterface[]',
				name: '',
				type: 'address[]',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'getBlockNumber',
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
				name: 'cToken',
				type: 'address',
			},
		],
		name: 'getBorrowGuardianPaused',
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
		inputs: [],
		name: 'getCloseFactorMantissa',
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
				name: 'asset',
				type: 'address',
			},
		],
		name: 'getCollateralFactorMantissa',
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
				name: 'market',
				type: 'address',
			},
		],
		name: 'getMarketLiquidationDiscount',
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
				name: 'market',
				type: 'address',
			},
		],
		name: 'getMarketLiquidationIncentive',
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
		name: 'getOracle',
		outputs: [
			{
				internalType: 'contract PriceOracle',
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
		name: 'isComptroller',
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
				name: 'cToken',
				type: 'address',
			},
		],
		name: 'isMarketListed',
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
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
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
		stateMutability: 'nonpayable',
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
		constant: true,
		inputs: [],
		name: 'liquidationDiscountMantissa',
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
				name: '',
				type: 'address',
			},
		],
		name: 'liquidationDiscountMantissaPerMarket',
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
		name: 'liquidationIncentiveMantissa',
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
				name: '',
				type: 'address',
			},
		],
		name: 'liquidationIncentiveMantissaPerMarket',
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
		name: 'liquidityAssessor',
		outputs: [
			{
				internalType: 'contract LiquidityAssessorInterface',
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
				name: '',
				type: 'address',
			},
		],
		name: 'markets',
		outputs: [
			{
				internalType: 'bool',
				name: 'isListed',
				type: 'bool',
			},
			{
				internalType: 'uint256',
				name: 'collateralFactorMantissa',
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
				name: 'cToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'minter',
				type: 'address',
			},
		],
		name: 'mintAllowed',
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
				name: 'cErc20CollateralToken',
				type: 'address',
			},
		],
		name: 'mintAllowedErc20Collateral',
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
				name: 'cErc721Token',
				type: 'address',
			},
		],
		name: 'mintAllowedErc721',
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
		],
		name: 'mintGuardianPaused',
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
		inputs: [],
		name: 'oracle',
		outputs: [
			{
				internalType: 'contract PriceOracle',
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
		name: 'pauseGuardian',
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
		name: 'pendingAdmin',
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
		name: 'pendingComptrollerImplementation',
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
				name: 'cToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'redeemer',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'redeemTokens',
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
		name: 'redeemAllowed',
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
				name: 'cErc20CollateralToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'redeemer',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'redeemTokens',
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
		name: 'redeemAllowedErc20Collateral',
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
				name: 'cErc721Token',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'redeemer',
				type: 'address',
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
		name: 'redeemAllowedErc721',
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
				internalType: 'uint256',
				name: 'redeemAmount',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'redeemTokens',
				type: 'uint256',
			},
		],
		name: 'redeemVerify',
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
				name: 'cToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'payer',
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
		],
		name: 'repayBorrowAllowed',
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
				name: 'cTokenCollateral',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'cTokenBorrowed',
				type: 'address',
			},
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
				internalType: 'uint256',
				name: 'seizeTokens',
				type: 'uint256',
			},
		],
		name: 'seizeAllowed',
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
				name: 'cErc20CollateralToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'cTokenBorrowed',
				type: 'address',
			},
		],
		name: 'seizeAllowedErc20Collateral',
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
				name: 'cErc721TokenCollateral',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'cTokenBorrowed',
				type: 'address',
			},
		],
		name: 'seizeAllowedErc721',
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
		name: 'seizeGuardianPaused',
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
				internalType: 'address',
				name: 'cToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'src',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'dst',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'transferTokens',
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
		name: 'transferAllowed',
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
		name: 'transferGuardianPaused',
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
] as const
const COMPTROLLER: Contract<typeof abi> = {
	name: 'Comptroller',
	address: '0x946ad76fd64b9a926128dfb27b189925d6f806b2',
	is_deprecated: false,
	created_at: 1678817400,
	abi: abi,
}
export default COMPTROLLER
