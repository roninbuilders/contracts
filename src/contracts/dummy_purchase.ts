import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36926,
  address: '0x92b39d4c1500f4688259983cc91a76f6641dc899' as const,
  contract_name: 'DummyPurchase',
  display_name: 'Dummy Purchase',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1757147720,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "PurchaseCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "receiver",
        "indexed": true
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint8",
        "name": "purchaseType"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "quantity"
      },
      {
        "type": "bytes32",
        "name": "packId"
      },
      {
        "type": "uint256",
        "name": "nonce"
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
    "name": "purchase",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint8",
        "name": "purchaseType"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bytes32",
        "name": "packId"
      },
      {
        "type": "uint256",
        "name": "quantity"
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawETH",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract