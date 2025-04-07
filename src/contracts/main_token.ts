import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4,
  address: '0x1234567890123456789012345678901234567890' as const,
  contract_name: 'MainToken',
  display_name: 'Main Token',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744037820864,
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
] as const satisfies Abi
} as const satisfies Contract
export default contract