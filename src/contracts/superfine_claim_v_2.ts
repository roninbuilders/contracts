import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 115,
  address: '0x32a5712b9a68b970c4a01172be95c4479f3290e8' as const,
  contract_name: 'SuperfineClaimV2',
  display_name: 'Superfine Claim V2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1685614312,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "OwnershipTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousOwner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true
      }
    ]
  },
  {
    "name": "claimAssets",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "campaignId"
      },
      {
        "type": "address",
        "name": "campaignCreator"
      },
      {
        "type": "tuple[]",
        "name": "assets",
        "components": [
          {
            "type": "uint8",
            "name": "assetType"
          },
          {
            "type": "address",
            "name": "assetAddress"
          },
          {
            "type": "uint256",
            "name": "assetId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "getClaimedAssets",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "claimant"
      },
      {
        "type": "string",
        "name": "campaignId"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint8",
            "name": "assetType"
          },
          {
            "type": "address",
            "name": "assetAddress"
          },
          {
            "type": "uint256",
            "name": "assetId"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ]
  },
  {
    "name": "owner",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setOperators",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "operators"
      },
      {
        "type": "bool[]",
        "name": "isOperators"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newOwner"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract