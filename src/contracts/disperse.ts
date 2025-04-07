import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 172,
  address: '0x14978681c5f8ce2f6b66d1f1551b0ec67405574c' as const,
  contract_name: 'Disperse',
  display_name: 'Disperse',
  is_deprecated: true,
  is_proxy: false,
  proxy_to: false,
  created_at: 1620737178,
  abi: [
  {
    "name": "disperseTokenSimple",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address[]",
        "name": "recipients"
      },
      {
        "type": "uint256[]",
        "name": "values"
      }
    ],
    "outputs": []
  },
  {
    "name": "disperseToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address[]",
        "name": "recipients"
      },
      {
        "type": "uint256[]",
        "name": "values"
      }
    ],
    "outputs": []
  },
  {
    "name": "disperseEther",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address[]",
        "name": "recipients"
      },
      {
        "type": "uint256[]",
        "name": "values"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract