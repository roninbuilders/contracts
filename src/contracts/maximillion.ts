import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25652,
  address: '0x8c47f2da7db3290a44bdbdd14bb3bf7e33a6a6bd' as const,
  contract_name: 'Maximillion',
  display_name: 'Maximillion',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739540135,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "cEther_"
      }
    ]
  },
  {
    "name": "cEther",
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
    "name": "repayBehalf",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "borrower"
      }
    ],
    "outputs": []
  },
  {
    "name": "repayBehalfExplicit",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "borrower"
      },
      {
        "type": "address",
        "name": "cEther_"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract