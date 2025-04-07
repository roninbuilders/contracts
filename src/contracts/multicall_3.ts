import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 367,
  address: '0xca11bde05977b3631167028862be2a173976ca11' as const,
  contract_name: 'Multicall3',
  display_name: 'Multicall 3',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1689897030,
  abi: [
  {
    "name": "aggregate",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "calls",
        "components": [
          {
            "type": "address",
            "name": "target"
          },
          {
            "type": "bytes",
            "name": "callData"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "blockNumber"
      },
      {
        "type": "bytes[]",
        "name": "returnData"
      }
    ]
  },
  {
    "name": "aggregate3",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "calls",
        "components": [
          {
            "type": "address",
            "name": "target"
          },
          {
            "type": "bool",
            "name": "allowFailure"
          },
          {
            "type": "bytes",
            "name": "callData"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "returnData",
        "components": [
          {
            "type": "bool",
            "name": "success"
          },
          {
            "type": "bytes",
            "name": "returnData"
          }
        ]
      }
    ]
  },
  {
    "name": "aggregate3Value",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "calls",
        "components": [
          {
            "type": "address",
            "name": "target"
          },
          {
            "type": "bool",
            "name": "allowFailure"
          },
          {
            "type": "uint256",
            "name": "value"
          },
          {
            "type": "bytes",
            "name": "callData"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "returnData",
        "components": [
          {
            "type": "bool",
            "name": "success"
          },
          {
            "type": "bytes",
            "name": "returnData"
          }
        ]
      }
    ]
  },
  {
    "name": "blockAndAggregate",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "calls",
        "components": [
          {
            "type": "address",
            "name": "target"
          },
          {
            "type": "bytes",
            "name": "callData"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "blockNumber"
      },
      {
        "type": "bytes32",
        "name": "blockHash"
      },
      {
        "type": "tuple[]",
        "name": "returnData",
        "components": [
          {
            "type": "bool",
            "name": "success"
          },
          {
            "type": "bytes",
            "name": "returnData"
          }
        ]
      }
    ]
  },
  {
    "name": "getBasefee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "basefee"
      }
    ]
  },
  {
    "name": "getBlockHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "blockNumber"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "blockHash"
      }
    ]
  },
  {
    "name": "getBlockNumber",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "blockNumber"
      }
    ]
  },
  {
    "name": "getChainId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "chainid"
      }
    ]
  },
  {
    "name": "getCurrentBlockCoinbase",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "coinbase"
      }
    ]
  },
  {
    "name": "getCurrentBlockDifficulty",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "difficulty"
      }
    ]
  },
  {
    "name": "getCurrentBlockGasLimit",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "gaslimit"
      }
    ]
  },
  {
    "name": "getCurrentBlockTimestamp",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "getEthBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
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
    "name": "getLastBlockHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32",
        "name": "blockHash"
      }
    ]
  },
  {
    "name": "tryAggregate",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bool",
        "name": "requireSuccess"
      },
      {
        "type": "tuple[]",
        "name": "calls",
        "components": [
          {
            "type": "address",
            "name": "target"
          },
          {
            "type": "bytes",
            "name": "callData"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "returnData",
        "components": [
          {
            "type": "bool",
            "name": "success"
          },
          {
            "type": "bytes",
            "name": "returnData"
          }
        ]
      }
    ]
  },
  {
    "name": "tryBlockAndAggregate",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bool",
        "name": "requireSuccess"
      },
      {
        "type": "tuple[]",
        "name": "calls",
        "components": [
          {
            "type": "address",
            "name": "target"
          },
          {
            "type": "bytes",
            "name": "callData"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "blockNumber"
      },
      {
        "type": "bytes32",
        "name": "blockHash"
      },
      {
        "type": "tuple[]",
        "name": "returnData",
        "components": [
          {
            "type": "bool",
            "name": "success"
          },
          {
            "type": "bytes",
            "name": "returnData"
          }
        ]
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract