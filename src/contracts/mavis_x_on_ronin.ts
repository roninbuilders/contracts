import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25518,
  address: '0x6331ea9d678e434f9c3fec0e868796f2a51e8685' as const,
  contract_name: 'MavisXOnRonin',
  display_name: 'Mavis X On Ronin',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739350756,
  abi: [
  {
    "name": "gm",
    "type": "function",
    "stateMutability": "pure",
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