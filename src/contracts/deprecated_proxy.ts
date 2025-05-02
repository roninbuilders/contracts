import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3,
  address: '0x3333333333333333333333333333333333333333' as const,
  contract_name: 'DeprecatedProxy',
  display_name: 'Deprecated Proxy',
  is_deprecated: true,
  is_proxy: true,
  proxy_to: '0x4444444444444444444444444444444444444444',
  created_at: 1746217865530,
  abi: [
  {
    "name": "transfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "name": "transfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract