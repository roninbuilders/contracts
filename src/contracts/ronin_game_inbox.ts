import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5079,
  address: '0x4bba9f2cc156cb885fa5b605f693be20c5d1aa9b' as const,
  contract_name: 'RoninGameInbox',
  display_name: 'Ronin Game Inbox',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1730859948,
  abi: [
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