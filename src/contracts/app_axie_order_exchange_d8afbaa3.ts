import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 118,
  address: '0x36d8d8a8a68520d15005e5a7e0ec2154d8afbaa3' as const,
  contract_name: 'AppAxieOrderExchange',
  display_name: 'App Axie Order Exchange',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1679367229,
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
        "type": "bytes32",
        "name": "hash"
      },
      {
        "type": "address",
        "name": "maker"
      },
      {
        "type": "address",
        "name": "matcher"
      },
      {
        "type": "uint8",
        "name": "kind"
      },
      {
        "type": "address",
        "name": "bidToken"
      },
      {
        "type": "uint256",
        "name": "bidPrice"
      },
      {
        "type": "address",
        "name": "paymentToken"
      },
      {
        "type": "uint256",
        "name": "settlePrice"
      },
      {
        "type": "uint256",
        "name": "sellerReceived"
      },
      {
        "type": "uint256",
        "name": "marketFeePercentage"
      },
      {
        "type": "uint256",
        "name": "marketFeeTaken"
      }
    ]
  },
  {
    "name": "ReferralRewardTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address",
        "name": "referralAddr"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "receiver"
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
    "name": "INTERFACE_NAME",
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
    "name": "cancelOrder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_order",
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
            "name": "basePrice"
          },
          {
            "type": "uint256",
            "name": "endedAt"
          },
          {
            "type": "uint256",
            "name": "endedPrice"
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
            "type": "uint256",
            "name": "marketFeePercentage"
          }
        ]
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
        "name": "_assets",
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
    "name": "makerNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_maker"
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
        "name": "_hash"
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
        "name": "_hash"
      },
      {
        "type": "tuple",
        "name": "_order",
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
            "name": "basePrice"
          },
          {
            "type": "uint256",
            "name": "endedAt"
          },
          {
            "type": "uint256",
            "name": "endedPrice"
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
            "type": "uint256",
            "name": "marketFeePercentage"
          }
        ]
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
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_expectedState"
      },
      {
        "type": "uint256",
        "name": "_settlePrice"
      },
      {
        "type": "address",
        "name": "_referralAddr"
      },
      {
        "type": "bytes",
        "name": "_signature"
      },
      {
        "type": "tuple",
        "name": "_order",
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
            "name": "basePrice"
          },
          {
            "type": "uint256",
            "name": "endedAt"
          },
          {
            "type": "uint256",
            "name": "endedPrice"
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
            "type": "uint256",
            "name": "marketFeePercentage"
          }
        ]
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
    "name": "swapTokensAndSettleOrder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_expectedState"
      },
      {
        "type": "uint256",
        "name": "_settlePrice"
      },
      {
        "type": "address",
        "name": "_referralAddr"
      },
      {
        "type": "uint256",
        "name": "_deadline"
      },
      {
        "type": "address[]",
        "name": "_path"
      },
      {
        "type": "bytes",
        "name": "_signature"
      },
      {
        "type": "tuple",
        "name": "_order",
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
            "name": "basePrice"
          },
          {
            "type": "uint256",
            "name": "endedAt"
          },
          {
            "type": "uint256",
            "name": "endedPrice"
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
            "type": "uint256",
            "name": "marketFeePercentage"
          }
        ]
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
        "name": "_hashList"
      }
    ],
    "outputs": [
      {
        "type": "bool[]",
        "name": "_orderAlreadyFinalized"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract