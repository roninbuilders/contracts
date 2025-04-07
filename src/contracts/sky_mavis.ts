import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 296,
  address: '0x41d8cf42236ae15cc7b0c0df619a95822d7ad423' as const,
  contract_name: 'GnosisSafeProxy',
  display_name: 'Sky Mavis',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1660732269,
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