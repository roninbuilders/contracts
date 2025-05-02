import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27417,
  address: '0xa3c98a7bebf6e1302ae382d47aafc0d3f17a0a4e' as const,
  contract_name: 'MiddlewareRouter',
  display_name: 'Middleware Router',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1741601951,
  abi: [
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "TARGET_CONTRACT",
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
    "name": "batchExecuteMultiTarget",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address[]",
        "name": "targets"
      },
      {
        "type": "bytes[]",
        "name": "dataArray"
      },
      {
        "type": "uint256[]",
        "name": "valueArray"
      }
    ],
    "outputs": []
  },
  {
    "name": "batchExecuteRaw",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "rawDataArray"
      },
      {
        "type": "uint256[]",
        "name": "valueArray"
      }
    ],
    "outputs": []
  },
  {
    "name": "executeOnTarget",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "commands"
      },
      {
        "type": "bytes[]",
        "name": "inputs"
      },
      {
        "type": "uint256",
        "name": "deadline"
      }
    ],
    "outputs": []
  },
  {
    "name": "executeRaw",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "rawData"
      }
    ],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract