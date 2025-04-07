import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27612,
  address: '0x3a81aad90f3e3b1f3951185d1430d2b9d23ebfca' as const,
  contract_name: 'Escrow',
  display_name: 'Escrow',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742078493,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ]
  },
  {
    "name": "ErrNotVault",
    "type": "error",
    "inputs": []
  },
  {
    "name": "deposit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "address",
        "name": "_receiver"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract