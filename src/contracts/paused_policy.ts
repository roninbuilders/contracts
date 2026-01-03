import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37857,
  address: '0x9df9cea8686f1cf96e5e18baef7cc7b6ccee17a6' as const,
  contract_name: 'PausedPolicy',
  display_name: 'Paused Policy',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1763107958,
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