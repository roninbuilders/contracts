import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35333,
  address: '0xb4f9b6b019e75cbe51af4425b2fc12797e2ee2a1' as const,
  contract_name: 'AlgebraInterfaceMulticall',
  display_name: 'Algebra Interface Multicall',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1749134389,
  abi: [
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract