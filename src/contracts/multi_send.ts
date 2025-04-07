import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25546,
  address: '0xe78e19491724e0acda38ecf3364a91a98fd1f33b' as const,
  contract_name: 'MultiSend',
  display_name: 'Multi Send',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739354908,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "multiSend",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "transactions"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract