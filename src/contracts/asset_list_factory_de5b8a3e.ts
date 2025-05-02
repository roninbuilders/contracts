import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27489,
  address: '0x6c7ad26886c4073ec85b578d5bffe2d8de5b8a3e' as const,
  contract_name: 'AssetListFactory',
  display_name: 'Asset List Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1741826058,
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