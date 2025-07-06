import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 33646,
  address: '0x1ab4d651d78f832dd8cb60605a1fff80c86b4567' as const,
  contract_name: 'AssetList',
  display_name: 'Asset List',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744105411,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
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
    "name": "BorrowCFTooLarge",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LiquidateCFTooLarge",
    "type": "error",
    "inputs": []
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
    "name": "numAssets",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract