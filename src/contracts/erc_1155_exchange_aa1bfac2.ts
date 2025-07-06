import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34862,
  address: '0xf5755af0e448ca4cf3813c13e476d1d1aa1bfac2' as const,
  contract_name: 'ERC1155Exchange',
  display_name: 'ERC1155 Exchange',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1747307157,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "InvalidLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRoyaltyRegistry",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidTotalRoyaltyFees",
    "type": "error",
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
    "name": "OrderCancelled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "requester",
        "indexed": true
      }
    ]
  },
  {
    "name": "OrderMatched",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hash",
        "indexed": true
      },
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
        "name": "settleToken",
        "indexed": true
      },
      {
        "type": "address",
        "name": "matcher",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "acceptedSettlePrice"
      },
      {
        "type": "tuple[]",
        "name": "recipients",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "amount"
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
    "name": "RoyaltyRegistryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "royaltyRegistry"
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
    "name": "getRoyaltyRegistry",
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
    "name": "getSettledQuantity",
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
        "name": "settleQuantity"
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
        "name": "settleQuantity"
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
        "name": "settleQuantity"
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