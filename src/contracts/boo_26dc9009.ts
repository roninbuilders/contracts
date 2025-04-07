import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25930,
  address: '0x1f40467275e9c832bc1470968d7c658f26dc9009' as const,
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