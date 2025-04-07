import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25513,
  address: '0x723b72fb368d08e0f6a4976dc860dcbf62bb6f56' as const,
  contract_name: 'FirstWarm',
  display_name: 'First Warm',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739346223,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "msg",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract