import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2,
  address: '0x0987654321098765432109876543210987654321' as const,
  contract_name: 'TestProxy',
  display_name: 'Test Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x1111111111111111111111111111111111111111',
  created_at: 1746217865530,
  abi: [
  {
    "name": "transfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "name": "transfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract