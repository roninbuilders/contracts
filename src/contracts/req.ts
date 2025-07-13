import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 33641,
  address: '0x7c130d75486211b9b66bab03b71f11b115a2edae' as const,
  contract_name: 'Req',
  display_name: 'Req',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744967069,
  abi: [
  {
    "name": "req",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32[]",
        "name": "ids"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract