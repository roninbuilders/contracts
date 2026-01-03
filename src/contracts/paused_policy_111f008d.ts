import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37728,
  address: '0xf6fc7d9d61d452867e20d0bb647255c4111f008d' as const,
  contract_name: 'PausedPolicy',
  display_name: 'Paused Policy',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1762244917,
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