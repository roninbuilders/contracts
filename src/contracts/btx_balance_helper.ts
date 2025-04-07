import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5179,
  address: '0xde4d0c3a4cb1c3f780554b182e108cf030960127' as const,
  contract_name: 'BTXBalanceHelper',
  display_name: 'BTX Balance Helper',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1731940859,
  abi: [
  {
    "name": "balanceInfoOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "btxToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract