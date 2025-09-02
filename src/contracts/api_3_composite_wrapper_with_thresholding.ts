import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36739,
  address: '0xb419ecdd222981e7e54cec316797ecb799c6afdc' as const,
  contract_name: 'API3CompositeWrapperWithThresholding',
  display_name: 'API3 Composite Wrapper With Thresholding',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1754448561,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "baseCurrency"
      },
      {
        "type": "uint256",
        "name": "_baseCurrencyUnit"
      }
    ]
  },
  {
    "name": "AccessControlBadConfirmation",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AccessControlUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "bytes32",
        "name": "neededRole"
      }
    ]
  },
  {
    "name": "FeedNotSet",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "asset"
      }
    ]
  },
  {
    "name": "PriceIsStale",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CompositeFeedAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "asset",
        "indexed": true
      },
      {
        "type": "address",
        "name": "proxy1"
      },
      {
        "type": "address",
        "name": "proxy2"
      },
      {
        "type": "uint256",
        "name": "lowerThresholdInBase1"
      },
      {
        "type": "uint256",
        "name": "fixedPriceInBase1"
      },
      {
        "type": "uint256",
        "name": "lowerThresholdInBase2"
      },
      {
        "type": "uint256",
        "name": "fixedPriceInBase2"
      }
    ]
  },
  {
    "name": "CompositeFeedRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "asset",
        "indexed": true
      }
    ]
  },
  {
    "name": "CompositeFeedUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "asset",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "lowerThresholdInBase1"
      },
      {
        "type": "uint256",
        "name": "fixedPriceInBase1"
      },
      {
        "type": "uint256",
        "name": "lowerThresholdInBase2"
      },
      {
        "type": "uint256",
        "name": "fixedPriceInBase2"
      }
    ]
  },
  {
    "name": "RoleAdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "previousAdminRole",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "newAdminRole",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleGranted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleRevoked",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "API3_BASE_CURRENCY_UNIT",
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
    "name": "API3_HEARTBEAT",
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
    "name": "BASE_CURRENCY",
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
    "name": "BASE_CURRENCY_UNIT",
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
    "name": "DEFAULT_ADMIN_ROLE",
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
    "name": "ORACLE_MANAGER_ROLE",
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
    "name": "addCompositeFeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "asset"
      },
      {
        "type": "address",
        "name": "proxy1"
      },
      {
        "type": "address",
        "name": "proxy2"
      },
      {
        "type": "uint256",
        "name": "lowerThresholdInBase1"
      },
      {
        "type": "uint256",
        "name": "fixedPriceInBase1"
      },
      {
        "type": "uint256",
        "name": "lowerThresholdInBase2"
      },
      {
        "type": "uint256",
        "name": "fixedPriceInBase2"
      }
    ],
    "outputs": []
  },
  {
    "name": "compositeFeeds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "proxy1"
      },
      {
        "type": "address",
        "name": "proxy2"
      },
      {
        "type": "tuple",
        "name": "primaryThreshold",
        "components": [
          {
            "type": "uint256",
            "name": "lowerThresholdInBase"
          },
          {
            "type": "uint256",
            "name": "fixedPriceInBase"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "secondaryThreshold",
        "components": [
          {
            "type": "uint256",
            "name": "lowerThresholdInBase"
          },
          {
            "type": "uint256",
            "name": "fixedPriceInBase"
          }
        ]
      }
    ]
  },
  {
    "name": "getAssetPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "asset"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getPriceInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "asset"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "price"
      },
      {
        "type": "bool",
        "name": "isAlive"
      }
    ]
  },
  {
    "name": "getRoleAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "grantRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "hasRole",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "heartbeatStaleTimeLimit",
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
    "name": "removeCompositeFeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "asset"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "callerConfirmation"
      }
    ],
    "outputs": []
  },
  {
    "name": "revokeRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "setHeartbeatStaleTimeLimit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newHeartbeatStaleTimeLimit"
      }
    ],
    "outputs": []
  },
  {
    "name": "supportsInterface",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes4",
        "name": "interfaceId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "updateCompositeFeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "asset"
      },
      {
        "type": "uint256",
        "name": "lowerThresholdInBase1"
      },
      {
        "type": "uint256",
        "name": "fixedPriceInBase1"
      },
      {
        "type": "uint256",
        "name": "lowerThresholdInBase2"
      },
      {
        "type": "uint256",
        "name": "fixedPriceInBase2"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract