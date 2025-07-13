import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36043,
  address: '0xbb2d2f51bf9b56ec57cfb925fa05d36c3e80cf81' as const,
  contract_name: 'AlgebraInterfaceMulticall',
  display_name: 'Algebra Interface Multicall',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751631589,
  abi: [
  {
    "name": "gasLeft",
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
    "name": "gaslimit",
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
    "name": "getCurrentBlockTimestamp",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "getEthBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "balance"
      }
    ]
  },
  {
    "name": "multicall",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "calls",
        "components": [
          {
            "type": "address",
            "name": "target"
          },
          {
            "type": "uint256",
            "name": "gasLimit"
          },
          {
            "type": "bytes",
            "name": "callData"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "blockNumber"
      },
      {
        "type": "tuple[]",
        "name": "returnData",
        "components": [
          {
            "type": "bool",
            "name": "success"
          },
          {
            "type": "uint256",
            "name": "gasUsed"
          },
          {
            "type": "bytes",
            "name": "returnData"
          }
        ]
      }
    ]
  },
  {
    "name": "multicallWithGasLimitation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "calls",
        "components": [
          {
            "type": "address",
            "name": "target"
          },
          {
            "type": "uint256",
            "name": "gasLimit"
          },
          {
            "type": "bytes",
            "name": "callData"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "gasBuffer"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "blockNumber"
      },
      {
        "type": "tuple[]",
        "name": "returnData",
        "components": [
          {
            "type": "bool",
            "name": "success"
          },
          {
            "type": "uint256",
            "name": "gasUsed"
          },
          {
            "type": "bytes",
            "name": "returnData"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "lastSuccessIndex"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract