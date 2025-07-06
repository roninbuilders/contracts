import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 33648,
  address: '0x18f86fda115c1c16436a674dc57cf3dd9d8ccf1c' as const,
  contract_name: 'AssetListFactory',
  display_name: 'Asset List Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744105399,
  abi: [
  {
    "name": "AssetListCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "assetList",
        "indexed": true
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
    "name": "createAssetList",
    "type": "function",
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
    ],
    "outputs": [
      {
        "type": "address",
        "name": "assetList"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract