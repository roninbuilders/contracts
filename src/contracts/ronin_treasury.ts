import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 404,
  address: '0x22cefc91e9b7c0f3890ebf9527ea89053490694e' as const,
  contract_name: 'GnosisSafeProxy',
  display_name: 'Ronin Treasury',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1660899702,
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