import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 223,
  address: '0xde9dcc27aa1552d591fc9b9c21881fee43bd8118' as const,
  contract_name: 'Sablier',
  display_name: 'Sablier',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1658215141,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "CancelStream",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "streamId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "senderBalance"
      },
      {
        "type": "uint256",
        "name": "recipientBalance"
      }
    ]
  },
  {
    "name": "CreateStream",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "streamId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "deposit"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "startTime"
      },
      {
        "type": "uint256",
        "name": "stopTime"
      }
    ]
  },
  {
    "name": "WithdrawFromStream",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "streamId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "balanceOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "streamId"
      },
      {
        "type": "address",
        "name": "who"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "balance"
      }
    ]
  },
  {
    "name": "cancelStream",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "streamId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "createStream",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint256",
        "name": "deposit"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "startTime"
      },
      {
        "type": "uint256",
        "name": "stopTime"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "deltaOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "streamId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "delta"
      }
    ]
  },
  {
    "name": "getStream",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "streamId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "sender"
      },
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint256",
        "name": "deposit"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "startTime"
      },
      {
        "type": "uint256",
        "name": "stopTime"
      },
      {
        "type": "uint256",
        "name": "remainingBalance"
      },
      {
        "type": "uint256",
        "name": "ratePerSecond"
      }
    ]
  },
  {
    "name": "nextStreamId",
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
    "name": "withdrawFromStream",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "streamId"
      },
      {
        "type": "uint256",
        "name": "amount"
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