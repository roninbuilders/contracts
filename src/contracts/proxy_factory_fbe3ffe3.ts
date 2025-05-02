import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3734,
  address: '0x211b9caeb879160e8261990147ef4405fbe3ffe3' as const,
  contract_name: 'ProxyFactory',
  display_name: 'Proxy Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1724213733,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ]
  },
  {
    "name": "deployNewInstance",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "salt"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "dst"
      }
    ]
  },
  {
    "name": "mainAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract