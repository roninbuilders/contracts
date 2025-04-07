import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 127,
  address: '0x5d518933351a0bc14b24b329b33b813565608769' as const,
  contract_name: 'Scatter',
  display_name: 'Scatter',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1677829119,
  abi: [
  {
    "name": "disperseRON",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_recipients"
      },
      {
        "type": "uint256[]",
        "name": "_values"
      }
    ],
    "outputs": []
  },
  {
    "name": "disperseToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "address[]",
        "name": "_recipients"
      },
      {
        "type": "uint256[]",
        "name": "_values"
      }
    ],
    "outputs": []
  },
  {
    "name": "disperseTokenSimple",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "address[]",
        "name": "_recipients"
      },
      {
        "type": "uint256[]",
        "name": "_values"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract