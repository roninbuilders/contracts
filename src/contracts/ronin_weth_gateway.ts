import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 221,
  address: '0x6abc078a2392abed76c23ade45883227b46f305d' as const,
  contract_name: 'RoninWETHGateway',
  display_name: 'Ronin WETH Gateway',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1612339763,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_roninWeth"
      }
    ]
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldAdmin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_newAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "AdminRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "OperatorAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_operator",
        "indexed": true
      }
    ]
  },
  {
    "name": "OperatorRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_operator",
        "indexed": true
      }
    ]
  },
  {
    "name": "WETHDeposited",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_depositId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_sender"
      },
      {
        "type": "address",
        "name": "_receiver",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_amount",
        "indexed": true
      }
    ]
  },
  {
    "name": "addOperators",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_addedOperators"
      }
    ],
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
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "depositWETH",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_depositId"
      },
      {
        "type": "address",
        "name": "_sender"
      },
      {
        "type": "address",
        "name": "_receiver"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "deposits",
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
        "name": "sender"
      },
      {
        "type": "address",
        "name": "receiver"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "operator",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "operators",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "removeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "removeOperators",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_removedOperators"
      }
    ],
    "outputs": []
  },
  {
    "name": "roninWeth",
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
    "name": "withdrawEther",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "withdrawToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_token"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract