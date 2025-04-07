import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5243,
  address: '0x8766648aa6586cc7cd2cdb2bd911eec78cab89ea' as const,
  contract_name: 'NonfungibleTokenPositionDescriptor',
  display_name: 'Nonfungible Token Position Descriptor',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1732163860,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_WRON"
      },
      {
        "type": "bytes32",
        "name": "_nativeCurrencyLabelBytes"
      }
    ]
  },
  {
    "name": "WRON",
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
    "name": "flipRatio",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token0"
      },
      {
        "type": "address",
        "name": "token1"
      },
      {
        "type": "uint256",
        "name": "chainId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "nativeCurrencyLabel",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "nativeCurrencyLabelBytes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "tokenRatioPriority",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "chainId"
      }
    ],
    "outputs": [
      {
        "type": "int256"
      }
    ]
  },
  {
    "name": "tokenURI",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "positionManager"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "string"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract