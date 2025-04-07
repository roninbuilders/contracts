import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 321,
  address: '0xf603d9a18a5aaca2d11cb43cbb2b6abc4a5b3e61' as const,
  contract_name: 'GnosisSafeProxy',
  display_name: 'Community Incentives',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1660893273,
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