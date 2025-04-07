import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25813,
  address: '0x408e26da44fec4151d76ae80f5bf4f4d1ae2d535' as const,
  contract_name: 'Names',
  display_name: 'Names',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1740148308,
  abi: [
  {
    "name": "byeByeQuatQuat",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "join"
      },
      {
        "type": "uint256",
        "name": "telegram"
      },
      {
        "type": "uint256",
        "name": "quat_portal"
      },
      {
        "type": "address",
        "name": "nooow"
      }
    ],
    "outputs": []
  },
  {
    "name": "helloQuatQuat",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "join"
      },
      {
        "type": "uint256",
        "name": "telegram"
      },
      {
        "type": "address",
        "name": "quat_portal"
      }
    ],
    "outputs": []
  },
  {
    "name": "katanaQuatIn",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address[]",
        "name": "join"
      },
      {
        "type": "uint256",
        "name": "telegram"
      },
      {
        "type": "address",
        "name": "quat_portal"
      }
    ],
    "outputs": []
  },
  {
    "name": "katanaQuatOut",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "join"
      },
      {
        "type": "uint256",
        "name": "telegram"
      },
      {
        "type": "uint256",
        "name": "quat_portal"
      },
      {
        "type": "address",
        "name": "nooow"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract