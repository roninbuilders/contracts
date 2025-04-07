import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 26004,
  address: '0x7043720a1ad353237921e9056f4c145ff1474383' as const,
  contract_name: 'Timelock',
  display_name: 'Timelock',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1740703819,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "admin_"
      },
      {
        "type": "uint256",
        "name": "delay_"
      },
      {
        "type": "uint256",
        "name": "gracePeriod_"
      },
      {
        "type": "uint256",
        "name": "minimumDelay_"
      },
      {
        "type": "uint256",
        "name": "maxiumumDelay_"
      }
    ]
  },
  {
    "name": "CancelTransaction",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "txHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "target",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "string",
        "name": "signature"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "uint256",
        "name": "eta"
      }
    ]
  },
  {
    "name": "ExecuteTransaction",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "txHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "target",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "string",
        "name": "signature"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "uint256",
        "name": "eta"
      }
    ]
  },
  {
    "name": "NewAdmin",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "NewDelay",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newDelay",
        "indexed": true
      }
    ]
  },
  {
    "name": "NewPendingAdmin",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newPendingAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "QueueTransaction",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "txHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "target",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "string",
        "name": "signature"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "uint256",
        "name": "eta"
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "GRACE_PERIOD",
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
    "name": "MAXIMUM_DELAY",
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
    "name": "MINIMUM_DELAY",
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
    "name": "acceptAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "admin",
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
    "name": "cancelTransaction",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "string",
        "name": "signature"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "uint256",
        "name": "eta"
      }
    ],
    "outputs": []
  },
  {
    "name": "delay",
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
    "name": "executeTransaction",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "string",
        "name": "signature"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "uint256",
        "name": "eta"
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "pendingAdmin",
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
    "name": "queueTransaction",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "string",
        "name": "signature"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "uint256",
        "name": "eta"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "queuedTransactions",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "setDelay",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "delay_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPendingAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "pendingAdmin_"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract