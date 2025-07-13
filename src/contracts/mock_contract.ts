import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36111,
  address: '0x16cf823d839192cbd511084409ba0d31259edf5b' as const,
  contract_name: 'MockContract',
  display_name: 'Mock Contract',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1752142976,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "_message"
      }
    ]
  },
  {
    "name": "message",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract