import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25928,
  address: '0x9d05d1f5b0424f8fde534bc196ffb6dd211d902a' as const,
  contract_name: 'GnosisSafeProxy',
  display_name: 'Gnosis Safe Proxy',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1696069151,
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