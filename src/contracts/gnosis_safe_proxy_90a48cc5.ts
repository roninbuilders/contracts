import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35771,
  address: '0x8417ac6838be147ab0e201496b2e5edf90a48cc5' as const,
  contract_name: 'GnosisSafeProxy',
  display_name: 'Gnosis Safe Proxy',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1660642791,
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