import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 29579,
  address: '0x0e97c887b61ccd952a53578b04763e7134429e05' as const,
  contract_name: 'KSZapRouterPosition',
  display_name: 'KS Zap Router Position',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742962896,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "ClientData",
    "type": "event",
    "inputs": [
      {
        "type": "bytes",
        "name": "_clientData"
      }
    ]
  },
  {
    "name": "ERC1155Collected",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_id",
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
    "name": "ERC20Collected",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_token",
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
    "name": "ERC721Collected",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_token",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_id",
        "indexed": true
      }
    ]
  },
  {
    "name": "ExecutorWhitelisted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_executor",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "_grantOrRevoke",
        "indexed": true
      }
    ]
  },
  {
    "name": "OwnershipTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousOwner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true
      }
    ]
  },
  {
    "name": "Paused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "Unpaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "UpdateGuardian",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "bool",
        "name": "grantOrRevoke"
      }
    ]
  },
  {
    "name": "UpdateOperator",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "bool",
        "name": "grantOrRevoke"
      }
    ]
  },
  {
    "name": "ValidatorWhitelisted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_validator",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "_grantOrRevoke",
        "indexed": true
      }
    ]
  },
  {
    "name": "ZapExecuted",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "_dexType",
        "indexed": true
      },
      {
        "type": "bytes",
        "name": "_srcInfo",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_validator"
      },
      {
        "type": "address",
        "name": "_executor"
      },
      {
        "type": "bytes",
        "name": "_zapInfo"
      },
      {
        "type": "bytes",
        "name": "_extraData"
      },
      {
        "type": "bytes",
        "name": "_initialData"
      },
      {
        "type": "bytes",
        "name": "_zapResults"
      }
    ]
  },
  {
    "name": "disableLogic",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "enableLogic",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "guardians",
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
    "name": "paused",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "rescueBatchERC1155",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "rescueBatchERC721",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256[]",
        "name": "_ids"
      },
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "rescueFunds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": []
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
    "name": "updateGuardian",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "bool",
        "name": "grantOrRevoke"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateOperator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "bool",
        "name": "grantOrRevoke"
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelistExecutors",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_executors"
      },
      {
        "type": "bool",
        "name": "_grantOrRevoke"
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelistValidators",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_validators"
      },
      {
        "type": "bool",
        "name": "_grantOrRevoke"
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelistedExecutor",
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
    "name": "whitelistedValidator",
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
    "name": "zap",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_desc",
        "components": [
          {
            "type": "uint16",
            "name": "zapFlags"
          },
          {
            "type": "bytes",
            "name": "srcInfo"
          },
          {
            "type": "bytes",
            "name": "zapInfo"
          },
          {
            "type": "bytes",
            "name": "extraData"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "_exe",
        "components": [
          {
            "type": "address",
            "name": "validator"
          },
          {
            "type": "address",
            "name": "executor"
          },
          {
            "type": "uint32",
            "name": "deadline"
          },
          {
            "type": "bytes",
            "name": "executorData"
          },
          {
            "type": "bytes",
            "name": "clientData"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "zapResults"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract