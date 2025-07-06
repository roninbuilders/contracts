import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34813,
  address: '0x7ead8ef549d7395562e54f5f9cf680966fd38e3f' as const,
  contract_name: 'ExhaustGas',
  display_name: 'Exhaust Gas',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1747120976,
  abi: [
  {
    "name": "burn",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "x"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract