import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37723,
  address: '0x8359af961081cb096bf62d6da62d33f1277a8623' as const,
  contract_name: 'PublicPolicy',
  display_name: 'Public Policy',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1762244908,
  abi: [
  {
    "name": "validateTransfer",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      },
      {
        "type": "uint256"
      },
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract