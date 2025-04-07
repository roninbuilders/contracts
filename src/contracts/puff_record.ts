import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3315,
  address: '0x96fae041a03a77b6b69cafb6847c0054bbb85357' as const,
  contract_name: 'PuffRecord',
  display_name: 'Puff Record',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1721399205,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_nonce"
      }
    ]
  },
  {
    "name": "Record",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "tokenType"
      },
      {
        "type": "address",
        "name": "user"
      }
    ]
  },
  {
    "name": "nonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "search",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "tokenType"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract