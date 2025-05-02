import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25929,
  address: '0x7e924b62a29ffc31b30927d22461c27bb1594af2' as const,
  contract_name: 'Boo',
  display_name: 'Boo',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1740477907,
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