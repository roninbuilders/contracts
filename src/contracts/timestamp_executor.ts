import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25732,
  address: '0x575146b5a2f67bdfdfea9132642a7aa5fa714704' as const,
  contract_name: 'TimestampExecutor',
  display_name: 'Timestamp Executor',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739994056,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "execute",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "getTimestamp",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "setTimestamp",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_timestamp"
      }
    ],
    "outputs": []
  },
  {
    "name": "timestamp",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract