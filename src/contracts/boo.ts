import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25932,
  address: '0x4c40eaf3c458a81b2e8fa8c6bd9a246fecfee606' as const,
  contract_name: 'Boo',
  display_name: 'Boo',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1740478222,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "boo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract