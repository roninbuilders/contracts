import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 352,
  address: '0x8ec33467a63ff3c660369d60dcba3b98ebd3642d' as const,
  contract_name: 'Maximillion',
  display_name: 'Maximillion',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1681170038,
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