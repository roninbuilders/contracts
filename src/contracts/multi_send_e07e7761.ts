import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 233,
  address: '0xa238cbeb142c10ef7ad8442c6d1f9e89e07e7761' as const,
  contract_name: 'MultiSend',
  display_name: 'Multi Send',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1635392443,
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