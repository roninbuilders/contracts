import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25718,
  address: '0xa295add78996715fb0eeddaab373fde224fdfd5c' as const,
  contract_name: 'test',
  display_name: 'test',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739952776,
  abi: [
  {
    "name": "tester",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "testerr"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract