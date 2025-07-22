import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36291,
  address: '0x7b525c648eb683e660aae3974e361b44a3bf5e6d' as const,
  contract_name: 'MarketUpdateTimelock',
  display_name: 'Market Update Timelock',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1753097199,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "governor_"
      },
      {
        "type": "uint256",
        "name": "delay_"
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
    "name": "SetDelay",
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
    "name": "SetGovernor",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldGovernor",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newGovernor",
        "indexed": true
      }
    ]
  },
  {
    "name": "SetMarketUpdateProposer",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldMarketAdmin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newMarketAdmin",
        "indexed": true
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
    "name": "governor",
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
    "name": "marketUpdateProposer",
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
    "name": "setGovernor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newGovernor"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMarketUpdateProposer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newMarketUpdateProposer"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract