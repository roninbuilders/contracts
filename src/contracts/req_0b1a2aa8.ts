import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 33622,
  address: '0x4345c32ab5cd131f97edeee638a7da420b1a2aa8' as const,
  contract_name: 'Req',
  display_name: 'Req',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744894440,
  abi: [
  {
    "name": "req",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "ids"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract