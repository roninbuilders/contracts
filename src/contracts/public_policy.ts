import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37854,
  address: '0x44efc30c89064a250aaade58243b5ccb1f9747a9' as const,
  contract_name: 'PublicPolicy',
  display_name: 'Public Policy',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1763107949,
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