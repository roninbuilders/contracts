import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36219,
  address: '0x3aac70fabc16eb0593c0d3a6444ce7d1b692c5dc' as const,
  contract_name: 'Backdoor',
  display_name: 'Backdoor',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1752742106,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "Upgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
        "indexed": true
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "deposit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "foo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "address",
        "name": "_original"
      }
    ],
    "outputs": []
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      }
    ],
    "outputs": []
  },
  {
    "name": "proxiableUUID",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract