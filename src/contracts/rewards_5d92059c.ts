import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 320,
  address: '0xd217ad3332335e5dca5ca566d35177f25d92059c' as const,
  contract_name: 'GnosisSafeProxy',
  display_name: 'Rewards',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1660894269,
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