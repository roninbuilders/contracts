import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25729,
  address: '0x0db999fa306545772728f321b46103c777d7c4fe' as const,
  contract_name: 'TokenWagerViewerData',
  display_name: 'Token Wager Viewer Data',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739980351,
  abi: [
  {
    "name": "Transfer",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "token",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "totalWageredForPartner",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
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