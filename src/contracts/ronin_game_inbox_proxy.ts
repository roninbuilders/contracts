import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3267,
  address: '0xf8218040d222e5242101c0b7a7ee7dbba14dc85e' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Ronin Game Inbox Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xabbb89c01338cb874fd73f025b1b2ebef620c393',
  created_at: 1720869871,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ]
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "BeaconUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beacon",
        "indexed": true
      }
    ]
  },
  {
    "name": "Upgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
        "indexed": true
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_config"
      }
    ]
  },
  {
    "name": "AggregateResult",
    "type": "error",
    "inputs": [
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
    "name": "SimulateResult",
    "type": "error",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "results",
        "components": [
          {
            "type": "address",
            "name": "userAddress"
          },
          {
            "type": "bool",
            "name": "success"
          },
          {
            "type": "bool",
            "name": "force"
          },
          {
            "type": "bytes",
            "name": "reason"
          }
        ]
      }
    ]
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "BeaconUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beacon",
        "indexed": true
      }
    ]
  },
  {
    "name": "DepositLUAToGame",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "DepositRonToGame",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "GameContractAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "gameContract"
      }
    ]
  },
  {
    "name": "GameContractRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "gameContract"
      }
    ]
  },
  {
    "name": "GameOffchainMintBatch",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "values"
      }
    ]
  },
  {
    "name": "HandleGameMessages",
    "type": "event",
    "inputs": []
  },
  {
    "name": "HandleGameResult",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "messageId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "result",
        "components": [
          {
            "type": "address",
            "name": "userAddress"
          },
          {
            "type": "bool",
            "name": "success"
          },
          {
            "type": "bool",
            "name": "force"
          },
          {
            "type": "bytes",
            "name": "reason"
          }
        ]
      }
    ]
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "version"
      }
    ]
  },
  {
    "name": "Upgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
        "indexed": true
      }
    ]
  },
  {
    "name": "addGameContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "gameContracts"
      }
    ],
    "outputs": []
  },
  {
    "name": "aggregate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "multiGameMessages",
        "components": [
          {
            "type": "address",
            "name": "target"
          },
          {
            "type": "bytes",
            "name": "data"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "aggregateAfterGameMessages",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "gameMessages",
        "components": [
          {
            "type": "bytes32",
            "name": "messageId"
          },
          {
            "type": "address",
            "name": "target"
          },
          {
            "type": "bytes",
            "name": "data"
          },
          {
            "type": "address",
            "name": "userAddress"
          },
          {
            "type": "bool",
            "name": "force"
          },
          {
            "type": "uint256",
            "name": "gasFee"
          }
        ]
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
            "name": "data"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "batchDepositGameNFT",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "checkIsGameContract",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_contract"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "config",
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
    "name": "depositLUAToGame",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "depositRonToGame",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "executedMessages",
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
    "name": "handle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "gameMessages",
        "components": [
          {
            "type": "bytes32",
            "name": "messageId"
          },
          {
            "type": "address",
            "name": "target"
          },
          {
            "type": "bytes",
            "name": "data"
          },
          {
            "type": "address",
            "name": "userAddress"
          },
          {
            "type": "bool",
            "name": "force"
          },
          {
            "type": "uint256",
            "name": "gasFee"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "address",
            "name": "userAddress"
          },
          {
            "type": "bool",
            "name": "success"
          },
          {
            "type": "bool",
            "name": "force"
          },
          {
            "type": "bytes",
            "name": "reason"
          }
        ]
      }
    ]
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "isGameContract",
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
    "name": "isSimulate",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "payToken",
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
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "postUpgrade",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "proxiableUUID",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "removeGameContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "gameContracts"
      }
    ],
    "outputs": []
  },
  {
    "name": "safeBatchBurn",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "safeBatchMint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "itemIds"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "safeBatchMintWithGame",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "safeBatchTransferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "simulate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "gameMessages",
        "components": [
          {
            "type": "bytes32",
            "name": "messageId"
          },
          {
            "type": "address",
            "name": "target"
          },
          {
            "type": "bytes",
            "name": "data"
          },
          {
            "type": "address",
            "name": "userAddress"
          },
          {
            "type": "bool",
            "name": "force"
          },
          {
            "type": "uint256",
            "name": "gasFee"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bool[]"
      },
      {
        "type": "bytes[]"
      }
    ]
  },
  {
    "name": "upgradeTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      }
    ],
    "outputs": []
  },
  {
    "name": "upgradeToAndCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract