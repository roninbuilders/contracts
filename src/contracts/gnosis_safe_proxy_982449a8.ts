import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1085,
  address: '0xbb38191e724baf5a1fb2ebd0a7a32015982449a8' as const,
  contract_name: 'GnosisSafeProxy',
  display_name: 'Gnosis Safe Proxy',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1680608964,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_singleton"
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract