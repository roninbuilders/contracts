import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 33327,
  address: '0x6641415a61bce80d97a715054d1334360ab833eb' as const,
  contract_name: 'BlockhashStore',
  display_name: 'Blockhash Store',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744606569,
  abi: [
  {
    "name": "getBlockhash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "n"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "store",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "n"
      }
    ],
    "outputs": []
  },
  {
    "name": "storeEarliest",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "storeVerifyHeader",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "n"
      },
      {
        "type": "bytes",
        "name": "header"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract