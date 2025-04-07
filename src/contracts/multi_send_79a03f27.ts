import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 997,
  address: '0x263eebee6ced9ff47fc9208cd461114e79a03f27' as const,
  contract_name: 'MultiSend',
  display_name: 'Multi Send',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1698084111,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": []
  },
  {
    "name": "OwnerSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldOwner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true
      }
    ]
  },
  {
    "name": "changeOwner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "charge",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "getBatchBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "recipients"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getOwner",
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
    "name": "withdrawls",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address[]",
        "name": "addrs"
      },
      {
        "type": "uint256[]",
        "name": "amnts"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract