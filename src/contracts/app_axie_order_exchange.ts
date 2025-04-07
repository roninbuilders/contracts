import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27345,
  address: '0xe22984ad7354fd53dc4fbd11cee685c012ad4ac2' as const,
  contract_name: 'AppAxieOrderExchange',
  display_name: 'App Axie Order Exchange',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1741321169,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
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
    "name": "MakerNonceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "maker"
      },
      {
        "type": "uint256",
        "name": "nonce"
      }
    ]
  },
  {
    "name": "OrderCancelled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32"
      },
      {
        "type": "address",
        "name": "requester"
      }
    ]
  },
  {
    "name": "OrderMatched",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "tuple",
            "name": "info",
            "components": [
              {
                "type": "address",
                "name": "maker"
              },
              {
                "type": "uint8",
                "name": "kind"
              },
              {
                "type": "tuple[]",
                "name": "assets",
                "components": [
                  {
                    "type": "uint8",
                    "name": "erc"
                  },
                  {
                    "type": "address",
                    "name": "addr"
                  },
                  {
                    "type": "uint256",
                    "name": "id"
                  },
                  {
                    "type": "uint256",
                    "name": "quantity"
                  }
                ]
              },
              {
                "type": "uint256",
                "name": "expiredAt"
              },
              {
                "type": "address",
                "name": "paymentToken"
              },
              {
                "type": "uint256",
                "name": "startedAt"
              },
              {
                "type": "uint256",
                "name": "baseUnitPrice"
              },
              {
                "type": "uint256",
                "name": "endedAt"
              },
              {
                "type": "uint256",
                "name": "endedUnitPrice"
              },
              {
                "type": "uint256",
                "name": "expectedState"
              },
              {
                "type": "uint256",
                "name": "nonce"
              },
              {
                "type": "bytes32",
                "name": "hash"
              },
              {
                "type": "bool",
                "name": "verified"
              }
            ]
          },
          {
            "type": "uint256",
            "name": "realPrice"
          },
          {
            "type": "bytes",
            "name": "extraData"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "address",
            "name": "refunder"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "settlePrice"
      },
      {
        "type": "address",
        "name": "settleToken"
      },
      {
        "type": "address",
        "name": "matcher"
      },
      {
        "type": "uint256",
        "name": "acceptedSettlePrice"
      },
      {
        "type": "tuple[]",
        "name": "receivedAllocs",
        "components": [
          {
            "type": "uint8",
            "name": "allocType"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "uint256",
            "name": "ratio"
          },
          {
            "type": "uint256",
            "name": "value"
          }
        ]
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
    "name": "MARKET_OPERATOR",
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
    "name": "bulkCancelOrders",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "orders"
      }
    ],
    "outputs": []
  },
  {
    "name": "cancelOrder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes",
        "name": "orderData"
      }
    ],
    "outputs": []
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
    "name": "getRoleMember",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getRoleMemberCount",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getState",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "assets",
        "components": [
          {
            "type": "uint8",
            "name": "erc"
          },
          {
            "type": "address",
            "name": "addr"
          },
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "uint256",
            "name": "quantity"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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
    "name": "increaseNonceMaker",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "interfaceName",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "makerNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "maker"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "orderFinalized",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hash"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "orderValid",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hash"
      },
      {
        "type": "bytes",
        "name": "orderData"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
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
        "name": "account"
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
    "name": "settleOrder",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "settleInfo",
        "components": [
          {
            "type": "bytes",
            "name": "orderData"
          },
          {
            "type": "bytes",
            "name": "signature"
          },
          {
            "type": "address",
            "name": "referralAddr"
          },
          {
            "type": "uint256",
            "name": "expectedState"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "address",
            "name": "refunder"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "settlePrice"
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
    "name": "swapRONAndSettleOrder",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "settleInfo",
        "components": [
          {
            "type": "bytes",
            "name": "orderData"
          },
          {
            "type": "bytes",
            "name": "signature"
          },
          {
            "type": "address",
            "name": "referralAddr"
          },
          {
            "type": "uint256",
            "name": "expectedState"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "address",
            "name": "refunder"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "address[]",
        "name": "path"
      }
    ],
    "outputs": []
  },
  {
    "name": "swapTokensAndSettleOrder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "settleInfo",
        "components": [
          {
            "type": "bytes",
            "name": "orderData"
          },
          {
            "type": "bytes",
            "name": "signature"
          },
          {
            "type": "address",
            "name": "referralAddr"
          },
          {
            "type": "uint256",
            "name": "expectedState"
          },
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "address",
            "name": "refunder"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "settlePrice"
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "address[]",
        "name": "path"
      }
    ],
    "outputs": []
  },
  {
    "name": "tryBulkCancelOrderByHash",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "hashList"
      }
    ],
    "outputs": [
      {
        "type": "bool[]",
        "name": "orderAlreadyFinalized"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract