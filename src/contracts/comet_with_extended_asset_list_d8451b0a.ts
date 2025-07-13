import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 33458,
  address: '0xb32295cb646eb4288229136a116b3addd8451b0a' as const,
  contract_name: 'CometWithExtendedAssetList',
  display_name: 'Comet With Extended Asset List',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744106914,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "address",
            "name": "governor"
          },
          {
            "type": "address",
            "name": "pauseGuardian"
          },
          {
            "type": "address",
            "name": "baseToken"
          },
          {
            "type": "address",
            "name": "baseTokenPriceFeed"
          },
          {
            "type": "address",
            "name": "extensionDelegate"
          },
          {
            "type": "uint64",
            "name": "supplyKink"
          },
          {
            "type": "uint64",
            "name": "supplyPerYearInterestRateSlopeLow"
          },
          {
            "type": "uint64",
            "name": "supplyPerYearInterestRateSlopeHigh"
          },
          {
            "type": "uint64",
            "name": "supplyPerYearInterestRateBase"
          },
          {
            "type": "uint64",
            "name": "borrowKink"
          },
          {
            "type": "uint64",
            "name": "borrowPerYearInterestRateSlopeLow"
          },
          {
            "type": "uint64",
            "name": "borrowPerYearInterestRateSlopeHigh"
          },
          {
            "type": "uint64",
            "name": "borrowPerYearInterestRateBase"
          },
          {
            "type": "uint64",
            "name": "storeFrontPriceFactor"
          },
          {
            "type": "uint64",
            "name": "trackingIndexScale"
          },
          {
            "type": "uint64",
            "name": "baseTrackingSupplySpeed"
          },
          {
            "type": "uint64",
            "name": "baseTrackingBorrowSpeed"
          },
          {
            "type": "uint104",
            "name": "baseMinForRewards"
          },
          {
            "type": "uint104",
            "name": "baseBorrowMin"
          },
          {
            "type": "uint104",
            "name": "targetReserves"
          },
          {
            "type": "tuple[]",
            "name": "assetConfigs",
            "components": [
              {
                "type": "address",
                "name": "asset"
              },
              {
                "type": "address",
                "name": "priceFeed"
              },
              {
                "type": "uint8",
                "name": "decimals"
              },
              {
                "type": "uint64",
                "name": "borrowCollateralFactor"
              },
              {
                "type": "uint64",
                "name": "liquidateCollateralFactor"
              },
              {
                "type": "uint64",
                "name": "liquidationFactor"
              },
              {
                "type": "uint128",
                "name": "supplyCap"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Absurd",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AlreadyInitialized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BadAsset",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BadDecimals",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BadDiscount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BadMinimum",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BadPrice",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BorrowCFTooLarge",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BorrowTooSmall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientReserves",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInt104",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInt256",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidUInt104",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidUInt128",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidUInt64",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LiquidateCFTooLarge",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NegativeNumber",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoSelfTransfer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotCollateralized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotForSale",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotLiquidatable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Paused",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReentrantCallBlocked",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SupplyCapExceeded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TimestampTooLarge",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TooManyAssets",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TooMuchSlippage",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TransferInFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TransferOutFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Unauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AbsorbCollateral",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "absorber",
        "indexed": true
      },
      {
        "type": "address",
        "name": "borrower",
        "indexed": true
      },
      {
        "type": "address",
        "name": "asset",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "collateralAbsorbed"
      },
      {
        "type": "uint256",
        "name": "usdValue"
      }
    ]
  },
  {
    "name": "AbsorbDebt",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "absorber",
        "indexed": true
      },
      {
        "type": "address",
        "name": "borrower",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "basePaidOut"
      },
      {
        "type": "uint256",
        "name": "usdValue"
      }
    ]
  },
  {
    "name": "BuyCollateral",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "asset",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "baseAmount"
      },
      {
        "type": "uint256",
        "name": "collateralAmount"
      }
    ]
  },
  {
    "name": "PauseAction",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "supplyPaused"
      },
      {
        "type": "bool",
        "name": "transferPaused"
      },
      {
        "type": "bool",
        "name": "withdrawPaused"
      },
      {
        "type": "bool",
        "name": "absorbPaused"
      },
      {
        "type": "bool",
        "name": "buyPaused"
      }
    ]
  },
  {
    "name": "Supply",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "dst",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "SupplyCollateral",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "dst",
        "indexed": true
      },
      {
        "type": "address",
        "name": "asset",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "Transfer",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "TransferCollateral",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "address",
        "name": "asset",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "Withdraw",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "src",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "WithdrawCollateral",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "src",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "address",
        "name": "asset",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "WithdrawReserves",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "absorb",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "absorber"
      },
      {
        "type": "address[]",
        "name": "accounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "accrueAccount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "approveThis",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "manager"
      },
      {
        "type": "address",
        "name": "asset"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "assetList",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "balanceOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "baseBorrowMin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "baseMinForRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "baseScale",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "baseToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "baseTokenPriceFeed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "baseTrackingBorrowSpeed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "baseTrackingSupplySpeed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "borrowBalanceOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "borrowKink",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "borrowPerSecondInterestRateBase",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "borrowPerSecondInterestRateSlopeHigh",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "borrowPerSecondInterestRateSlopeLow",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "buyCollateral",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "asset"
      },
      {
        "type": "uint256",
        "name": "minAmount"
      },
      {
        "type": "uint256",
        "name": "baseAmount"
      },
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "decimals",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "extensionDelegate",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getAssetInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "i"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint8",
            "name": "offset"
          },
          {
            "type": "address",
            "name": "asset"
          },
          {
            "type": "address",
            "name": "priceFeed"
          },
          {
            "type": "uint64",
            "name": "scale"
          },
          {
            "type": "uint64",
            "name": "borrowCollateralFactor"
          },
          {
            "type": "uint64",
            "name": "liquidateCollateralFactor"
          },
          {
            "type": "uint64",
            "name": "liquidationFactor"
          },
          {
            "type": "uint128",
            "name": "supplyCap"
          }
        ]
      }
    ]
  },
  {
    "name": "getAssetInfoByAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "asset"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint8",
            "name": "offset"
          },
          {
            "type": "address",
            "name": "asset"
          },
          {
            "type": "address",
            "name": "priceFeed"
          },
          {
            "type": "uint64",
            "name": "scale"
          },
          {
            "type": "uint64",
            "name": "borrowCollateralFactor"
          },
          {
            "type": "uint64",
            "name": "liquidateCollateralFactor"
          },
          {
            "type": "uint64",
            "name": "liquidationFactor"
          },
          {
            "type": "uint128",
            "name": "supplyCap"
          }
        ]
      }
    ]
  },
  {
    "name": "getBorrowRate",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "utilization"
      }
    ],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "getCollateralReserves",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "asset"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "priceFeed"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getReserves",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "int256"
      }
    ]
  },
  {
    "name": "getSupplyRate",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "utilization"
      }
    ],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "getUtilization",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "governor",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "hasPermission",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "manager"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "initializeStorage",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "isAbsorbPaused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isAllowed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isBorrowCollateralized",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isBuyPaused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isLiquidatable",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isSupplyPaused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isTransferPaused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isWithdrawPaused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "liquidatorPoints",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint32",
        "name": "numAbsorbs"
      },
      {
        "type": "uint64",
        "name": "numAbsorbed"
      },
      {
        "type": "uint128",
        "name": "approxSpend"
      },
      {
        "type": "uint32",
        "name": "_reserved"
      }
    ]
  },
  {
    "name": "numAssets",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "pause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "supplyPaused"
      },
      {
        "type": "bool",
        "name": "transferPaused"
      },
      {
        "type": "bool",
        "name": "withdrawPaused"
      },
      {
        "type": "bool",
        "name": "absorbPaused"
      },
      {
        "type": "bool",
        "name": "buyPaused"
      }
    ],
    "outputs": []
  },
  {
    "name": "pauseGuardian",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "quoteCollateral",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "asset"
      },
      {
        "type": "uint256",
        "name": "baseAmount"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "storeFrontPriceFactor",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "supply",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "asset"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "supplyFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "dst"
      },
      {
        "type": "address",
        "name": "asset"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "supplyKink",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "supplyPerSecondInterestRateBase",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "supplyPerSecondInterestRateSlopeHigh",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "supplyPerSecondInterestRateSlopeLow",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "supplyTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "dst"
      },
      {
        "type": "address",
        "name": "asset"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "targetReserves",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "totalBorrow",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "totalSupply",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "totalsCollateral",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint128",
        "name": "totalSupplyAsset"
      },
      {
        "type": "uint128",
        "name": "_reserved"
      }
    ]
  },
  {
    "name": "trackingIndexScale",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "transfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "dst"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "transferAsset",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "dst"
      },
      {
        "type": "address",
        "name": "asset"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferAssetFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "src"
      },
      {
        "type": "address",
        "name": "dst"
      },
      {
        "type": "address",
        "name": "asset"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "src"
      },
      {
        "type": "address",
        "name": "dst"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "userBasic",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "int104",
        "name": "principal"
      },
      {
        "type": "uint64",
        "name": "baseTrackingIndex"
      },
      {
        "type": "uint64",
        "name": "baseTrackingAccrued"
      },
      {
        "type": "uint16",
        "name": "assetsIn"
      },
      {
        "type": "uint8",
        "name": "_reserved"
      }
    ]
  },
  {
    "name": "userCollateral",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint128",
        "name": "balance"
      },
      {
        "type": "uint128",
        "name": "_reserved"
      }
    ]
  },
  {
    "name": "userNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "asset"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "src"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "address",
        "name": "asset"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawReserves",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "address",
        "name": "asset"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract