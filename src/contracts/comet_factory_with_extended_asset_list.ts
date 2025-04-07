import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27530,
  address: '0x4df9e0f8e94a7a8a9aea6010cd9d341f8ecfe4c6' as const,
  contract_name: 'CometFactoryWithExtendedAssetList',
  display_name: 'Comet Factory With Extended Asset List',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1741884190,
  abi: [
  {
    "name": "clone",
    "type": "function",
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
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract