import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25627,
  address: '0x25c6f371cf8d4200b89df84f9de69d011013b086' as const,
  contract_name: 'OwnableCallForwarder',
  display_name: 'Ownable Call Forwarder',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739452226,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      }
    ]
  },
  {
    "name": "OwnershipTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousOwner",
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
    "name": "forwardCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "forwardTarget"
      },
      {
        "type": "bytes",
        "name": "forwardedCalldata"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "returnedData"
      }
    ]
  },
  {
    "name": "owner",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "transferOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newOwner"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract