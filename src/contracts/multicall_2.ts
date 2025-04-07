import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 222,
  address: '0xc76d0d0d3aa608190f78db02bf2f5aef374fc0b9' as const,
  contract_name: 'Multicall2',
  display_name: 'Multicall 2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1635557898,
  abi: [
  {
    "name": "aggregate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_calls",
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
        "name": "_blockNumber"
      },
      {
        "type": "bytes[]",
        "name": "_returnData"
      }
    ]
  },
  {
    "name": "blockAndAggregate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_calls",
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
        "name": "_blockNumber"
      },
      {
        "type": "bytes32",
        "name": "_blockHash"
      },
      {
        "type": "tuple[]",
        "name": "_returnData",
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
    "name": "getBlockHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_blockNumber"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "_blockHash"
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
        "name": "_blockNumber"
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
        "name": "_coinbase"
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
        "name": "_difficulty"
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
        "name": "_gaslimit"
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
        "name": "_timestamp"
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
        "name": "_blockHash"
      }
    ]
  },
  {
    "name": "getRonBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_balance"
      }
    ]
  },
  {
    "name": "tryAggregate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_requireSuccess"
      },
      {
        "type": "tuple[]",
        "name": "_calls",
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
        "name": "_returnData",
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
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_requireSuccess"
      },
      {
        "type": "tuple[]",
        "name": "_calls",
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
        "name": "_blockNumber"
      },
      {
        "type": "bytes32",
        "name": "_blockHash"
      },
      {
        "type": "tuple[]",
        "name": "_returnData",
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