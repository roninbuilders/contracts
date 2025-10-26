import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37302,
  address: '0x405792cbed87fbb34afa505f768c8edf8f9504e9' as const,
  contract_name: 'SimplePaymentReceiver',
  display_name: 'Simple Payment Receiver',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1758758112,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "PaymentReceived",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "paymentId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "payer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "emergencyWithdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "getBalance",
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
    "name": "getPayment",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "paymentId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "payer"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "getRecentPayments",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "count"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "paymentIds"
      },
      {
        "type": "address[]",
        "name": "payers"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      },
      {
        "type": "uint256[]",
        "name": "timestamps"
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
    "name": "payments",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "payer"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "totalPayments",
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
  },
  {
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract