import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27414,
  address: '0x7da921e551ef5ed40e664efd1f7d49ae3071ce76' as const,
  contract_name: 'MiddlewareRouter',
  display_name: 'Middleware Router',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1741599296,
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