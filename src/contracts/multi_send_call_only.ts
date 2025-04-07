import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 236,
  address: '0x40a2accbd92bca938b02010e17a5b8929b49130d' as const,
  contract_name: 'MultiSendCallOnly',
  display_name: 'Multi Send Call Only',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1635392455,
  abi: [
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