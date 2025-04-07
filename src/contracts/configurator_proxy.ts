import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27486,
  address: '0x48a7b84770221fef9b98e6bd95084cda3b74d636' as const,
  contract_name: 'ConfiguratorProxy',
  display_name: 'Configurator Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x408e316be903a61cd7eeccb88fd49b5c7ed53773',
  created_at: 1741826106,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "address",
        "name": "_admin"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ]
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "BeaconUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beacon",
        "indexed": true
      }
    ]
  },
  {
    "name": "Upgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
        "indexed": true
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "admin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "admin_"
      }
    ]
  },
  {
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "implementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "implementation_"
      }
    ]
  },
  {
    "name": "upgradeTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      }
    ],
    "outputs": []
  },
  {
    "name": "upgradeToAndCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AlreadyInitialized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AssetDoesNotExist",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ConfigurationAlreadyExists",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Unauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AddAsset",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "assetConfig",
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
  },
  {
    "name": "CometDeployed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newComet",
        "indexed": true
      }
    ]
  },
  {
    "name": "GovernorTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldGovernor",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newGovernor",
        "indexed": true
      }
    ]
  },
  {
    "name": "SetBaseBorrowMin",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "uint104",
        "name": "oldBaseBorrowMin"
      },
      {
        "type": "uint104",
        "name": "newBaseBorrowMin"
      }
    ]
  },
  {
    "name": "SetBaseMinForRewards",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "uint104",
        "name": "oldBaseMinForRewards"
      },
      {
        "type": "uint104",
        "name": "newBaseMinForRewards"
      }
    ]
  },
  {
    "name": "SetBaseTokenPriceFeed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "address",
        "name": "oldBaseTokenPriceFeed",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newBaseTokenPriceFeed",
        "indexed": true
      }
    ]
  },
  {
    "name": "SetBaseTrackingBorrowSpeed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "oldBaseTrackingBorrowSpeed"
      },
      {
        "type": "uint64",
        "name": "newBaseTrackingBorrowSpeed"
      }
    ]
  },
  {
    "name": "SetBaseTrackingSupplySpeed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "oldBaseTrackingSupplySpeed"
      },
      {
        "type": "uint64",
        "name": "newBaseTrackingSupplySpeed"
      }
    ]
  },
  {
    "name": "SetBorrowKink",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "oldKink"
      },
      {
        "type": "uint64",
        "name": "newKink"
      }
    ]
  },
  {
    "name": "SetBorrowPerYearInterestRateBase",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "oldIRBase"
      },
      {
        "type": "uint64",
        "name": "newIRBase"
      }
    ]
  },
  {
    "name": "SetBorrowPerYearInterestRateSlopeHigh",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "oldIRSlopeHigh"
      },
      {
        "type": "uint64",
        "name": "newIRSlopeHigh"
      }
    ]
  },
  {
    "name": "SetBorrowPerYearInterestRateSlopeLow",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "oldIRSlopeLow"
      },
      {
        "type": "uint64",
        "name": "newIRSlopeLow"
      }
    ]
  },
  {
    "name": "SetConfiguration",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "oldConfiguration",
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
      },
      {
        "type": "tuple",
        "name": "newConfiguration",
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
    "name": "SetExtensionDelegate",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "address",
        "name": "oldExt",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newExt",
        "indexed": true
      }
    ]
  },
  {
    "name": "SetFactory",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "address",
        "name": "oldFactory",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newFactory",
        "indexed": true
      }
    ]
  },
  {
    "name": "SetGovernor",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "address",
        "name": "oldGovernor",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newGovernor",
        "indexed": true
      }
    ]
  },
  {
    "name": "SetPauseGuardian",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "address",
        "name": "oldPauseGuardian",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newPauseGuardian",
        "indexed": true
      }
    ]
  },
  {
    "name": "SetStoreFrontPriceFactor",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "oldStoreFrontPriceFactor"
      },
      {
        "type": "uint64",
        "name": "newStoreFrontPriceFactor"
      }
    ]
  },
  {
    "name": "SetSupplyKink",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "oldKink"
      },
      {
        "type": "uint64",
        "name": "newKink"
      }
    ]
  },
  {
    "name": "SetSupplyPerYearInterestRateBase",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "oldIRBase"
      },
      {
        "type": "uint64",
        "name": "newIRBase"
      }
    ]
  },
  {
    "name": "SetSupplyPerYearInterestRateSlopeHigh",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "oldIRSlopeHigh"
      },
      {
        "type": "uint64",
        "name": "newIRSlopeHigh"
      }
    ]
  },
  {
    "name": "SetSupplyPerYearInterestRateSlopeLow",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "oldIRSlopeLow"
      },
      {
        "type": "uint64",
        "name": "newIRSlopeLow"
      }
    ]
  },
  {
    "name": "SetTargetReserves",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "uint104",
        "name": "oldTargetReserves"
      },
      {
        "type": "uint104",
        "name": "newTargetReserves"
      }
    ]
  },
  {
    "name": "UpdateAsset",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "oldAssetConfig",
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
      },
      {
        "type": "tuple",
        "name": "newAssetConfig",
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
  },
  {
    "name": "UpdateAssetBorrowCollateralFactor",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "address",
        "name": "asset",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "oldBorrowCF"
      },
      {
        "type": "uint64",
        "name": "newBorrowCF"
      }
    ]
  },
  {
    "name": "UpdateAssetLiquidateCollateralFactor",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "address",
        "name": "asset",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "oldLiquidateCF"
      },
      {
        "type": "uint64",
        "name": "newLiquidateCF"
      }
    ]
  },
  {
    "name": "UpdateAssetLiquidationFactor",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "address",
        "name": "asset",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "oldLiquidationFactor"
      },
      {
        "type": "uint64",
        "name": "newLiquidationFactor"
      }
    ]
  },
  {
    "name": "UpdateAssetPriceFeed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "address",
        "name": "asset",
        "indexed": true
      },
      {
        "type": "address",
        "name": "oldPriceFeed"
      },
      {
        "type": "address",
        "name": "newPriceFeed"
      }
    ]
  },
  {
    "name": "UpdateAssetSupplyCap",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy",
        "indexed": true
      },
      {
        "type": "address",
        "name": "asset",
        "indexed": true
      },
      {
        "type": "uint128",
        "name": "oldSupplyCap"
      },
      {
        "type": "uint128",
        "name": "newSupplyCap"
      }
    ]
  },
  {
    "name": "addAsset",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "tuple",
        "name": "assetConfig",
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
    ],
    "outputs": []
  },
  {
    "name": "deploy",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "factory",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getAssetIndex",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
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
    "name": "getConfiguration",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "governor_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBaseBorrowMin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "uint104",
        "name": "newBaseBorrowMin"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBaseMinForRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "uint104",
        "name": "newBaseMinForRewards"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBaseTokenPriceFeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "address",
        "name": "newBaseTokenPriceFeed"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBaseTrackingBorrowSpeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "uint64",
        "name": "newBaseTrackingBorrowSpeed"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBaseTrackingSupplySpeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "uint64",
        "name": "newBaseTrackingSupplySpeed"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBorrowKink",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "uint64",
        "name": "newBorrowKink"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBorrowPerYearInterestRateBase",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "uint64",
        "name": "newBase"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBorrowPerYearInterestRateSlopeHigh",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "uint64",
        "name": "newSlope"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBorrowPerYearInterestRateSlopeLow",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "uint64",
        "name": "newSlope"
      }
    ],
    "outputs": []
  },
  {
    "name": "setConfiguration",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "tuple",
        "name": "newConfiguration",
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
    ],
    "outputs": []
  },
  {
    "name": "setExtensionDelegate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "address",
        "name": "newExtensionDelegate"
      }
    ],
    "outputs": []
  },
  {
    "name": "setFactory",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "address",
        "name": "newFactory"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGovernor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "address",
        "name": "newGovernor"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPauseGuardian",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "address",
        "name": "newPauseGuardian"
      }
    ],
    "outputs": []
  },
  {
    "name": "setStoreFrontPriceFactor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "uint64",
        "name": "newStoreFrontPriceFactor"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSupplyKink",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "uint64",
        "name": "newSupplyKink"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSupplyPerYearInterestRateBase",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "uint64",
        "name": "newBase"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSupplyPerYearInterestRateSlopeHigh",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "uint64",
        "name": "newSlope"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSupplyPerYearInterestRateSlopeLow",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "uint64",
        "name": "newSlope"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTargetReserves",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "uint104",
        "name": "newTargetReserves"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferGovernor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newGovernor"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateAsset",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "tuple",
        "name": "newAssetConfig",
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
    ],
    "outputs": []
  },
  {
    "name": "updateAssetBorrowCollateralFactor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "address",
        "name": "asset"
      },
      {
        "type": "uint64",
        "name": "newBorrowCF"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateAssetLiquidateCollateralFactor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "address",
        "name": "asset"
      },
      {
        "type": "uint64",
        "name": "newLiquidateCF"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateAssetLiquidationFactor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "address",
        "name": "asset"
      },
      {
        "type": "uint64",
        "name": "newLiquidationFactor"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateAssetPriceFeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "address",
        "name": "asset"
      },
      {
        "type": "address",
        "name": "newPriceFeed"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateAssetSupplyCap",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cometProxy"
      },
      {
        "type": "address",
        "name": "asset"
      },
      {
        "type": "uint128",
        "name": "newSupplyCap"
      }
    ],
    "outputs": []
  },
  {
    "name": "version",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract