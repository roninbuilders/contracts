import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 461,
  address: '0xbf3d15e733a5c11c6f4930705bfe9e16126126e0' as const,
  contract_name: 'GnosisSafeProxy',
  display_name: 'Gnosis Safe Proxy',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1692008982,
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