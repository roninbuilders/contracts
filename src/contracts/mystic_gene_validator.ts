import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 355,
  address: '0x03cbdc84a8352735133b7989199c1b4d06fe2a77' as const,
  contract_name: 'MysticGeneValidator',
  display_name: 'Mystic Gene Validator',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1681181524,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_axieContract"
      }
    ]
  },
  {
    "name": "axieContract",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "isMystic",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint256",
        "name": "x"
      },
      {
        "type": "uint256",
        "name": "y"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isMystic",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract