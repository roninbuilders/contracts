import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25653,
  address: '0x6a06a56be902f8053d3bb6ee240ddd5516485672' as const,
  contract_name: 'Maximillion',
  display_name: 'Maximillion',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739540501,
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