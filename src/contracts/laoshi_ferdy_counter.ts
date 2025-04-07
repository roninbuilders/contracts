import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27517,
  address: '0xda6a4570701de6b41c65f9b6ce57553a53413192' as const,
  contract_name: 'LaoshiFerdyCounter',
  display_name: 'Laoshi Ferdy Counter',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1741871860,
  abi: [
  {
    "name": "increment",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "number",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "setNumber",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newNumber"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract