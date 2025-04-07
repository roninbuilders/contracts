import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 6137,
  address: '0xaa1dca22d0266e0be5627a220016236e77bde798' as const,
  contract_name: 'MultiSend',
  display_name: 'Multi Send',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1735115130,
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