import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37920,
  address: '0x65cf7d1aeaa70bc8c0b0a22d4a71d2c95d55db93' as const,
  contract_name: 'DiamondProxy',
  display_name: 'Diamond Proxy',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1761833391,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_contractOwner"
      }
    ]
  },
  {
    "name": "InitializationFunctionReverted",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "_initializationContractAddress"
      },
      {
        "type": "bytes",
        "name": "_calldata"
      }
    ]
  },
  {
    "name": "DiamondCut",
    "type": "event",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_diamondCut",
        "components": [
          {
            "type": "address",
            "name": "facetAddress"
          },
          {
            "type": "uint8",
            "name": "action"
          },
          {
            "type": "bytes4[]",
            "name": "functionSelectors"
          }
        ]
      },
      {
        "type": "address",
        "name": "_init"
      },
      {
        "type": "bytes",
        "name": "_calldata"
      }
    ]
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
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract