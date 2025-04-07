import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25931,
  address: '0xaef5edeba3795cbee638627f0d02ddc711074857' as const,
  contract_name: 'Boo',
  display_name: 'Boo',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: undefined,
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