import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37373,
  address: '0x11f5813bc3a0e4d97b24878f6bd2601df9a682ed' as const,
  contract_name: 'StructHash',
  display_name: 'Struct Hash',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1759804689,
  abi: [
  {
    "name": "_hash",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "bytes",
        "name": "abiEncodedUserOrder"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract