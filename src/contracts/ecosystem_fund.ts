import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 319,
  address: '0x1e7d74b6279e66f3dc6c0e50e69fb8da13432ba5' as const,
  contract_name: 'GnosisSafeProxy',
  display_name: 'Ecosystem Fund',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1660893825,
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