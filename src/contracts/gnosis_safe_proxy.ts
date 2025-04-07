import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25545,
  address: '0x29f299e36851cf525ca2c79eef790e57c11174d3' as const,
  contract_name: 'GnosisSafeProxy',
  display_name: 'Gnosis Safe Proxy',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739354527,
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