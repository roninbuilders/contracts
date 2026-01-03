import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37785,
  address: '0x37e6fdc40f40b0fbc248c60c45cdadc42a3e96c0' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Marketplace System Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xfd643a94be280618a5e6235af163e8b76e450824',
  created_at: 1762883812,
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
        "type": "address",
        "name": "admin_"
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
    "name": "admin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "admin_"
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
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "implementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "implementation_"
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
] as const satisfies Abi,
  proxy_abi: [
  {
    "name": "InvalidGameRegistry",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "gameRegistry"
      }
    ]
  },
  {
    "name": "InvalidOperatorSignature",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "signer"
      }
    ]
  },
  {
    "name": "InvalidPayer",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "actual"
      },
      {
        "type": "address",
        "name": "expected"
      }
    ]
  },
  {
    "name": "InvalidPayerSignature",
    "type": "error",
    "inputs": [
      {
        "type": "bytes",
        "name": "signature"
      }
    ]
  },
  {
    "name": "InvalidPaymentAmount",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "actual"
      },
      {
        "type": "uint256",
        "name": "expected"
      }
    ]
  },
  {
    "name": "InvalidPaymentSource",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "actual"
      },
      {
        "type": "address",
        "name": "expected"
      }
    ]
  },
  {
    "name": "InvalidRecipient",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      }
    ]
  },
  {
    "name": "InvalidTaker",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "actual"
      },
      {
        "type": "address",
        "name": "expected"
      }
    ]
  },
  {
    "name": "MarketplaceReceiptNFTNotSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MissingRole",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "bytes32",
        "name": "expectedRole"
      }
    ]
  },
  {
    "name": "NativeTokenPaymentNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OrderAlreadyExecuted",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "orderId"
      }
    ]
  },
  {
    "name": "OrderExpired",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "currentTime"
      },
      {
        "type": "uint256",
        "name": "expiresAt"
      }
    ]
  },
  {
    "name": "UnauthorizedTaker",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "attemptedTaker"
      },
      {
        "type": "address",
        "name": "allowedTaker"
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
    "name": "OrderExecuted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "orderId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "taker",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "orderHash"
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
    "name": "MARKETPLACE_OPERATOR_ROLE",
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
    "name": "executedOrders",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "getGameRegistry",
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
    "name": "getId",
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
    "name": "hashOrder",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "order",
        "components": [
          {
            "type": "address",
            "name": "taker"
          },
          {
            "type": "uint256",
            "name": "orderId"
          },
          {
            "type": "uint64",
            "name": "expiresAt"
          },
          {
            "type": "tuple[]",
            "name": "payments",
            "components": [
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "address",
                "name": "from"
              },
              {
                "type": "address",
                "name": "to"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "gameRegistryAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "isTrustedForwarder",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "forwarder"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "marketplaceReceiptNFTContract",
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
    "name": "randomNumberCallback",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "randomNumber"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGameRegistry",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "gameRegistryAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPaused",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "shouldPause"
      }
    ],
    "outputs": []
  },
  {
    "name": "takeOrder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "tuple",
            "name": "order",
            "components": [
              {
                "type": "address",
                "name": "taker"
              },
              {
                "type": "uint256",
                "name": "orderId"
              },
              {
                "type": "uint64",
                "name": "expiresAt"
              },
              {
                "type": "tuple[]",
                "name": "payments",
                "components": [
                  {
                    "type": "address",
                    "name": "token"
                  },
                  {
                    "type": "address",
                    "name": "from"
                  },
                  {
                    "type": "address",
                    "name": "to"
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
            "type": "address",
            "name": "payer"
          },
          {
            "type": "bytes",
            "name": "payerSignature"
          },
          {
            "type": "bytes",
            "name": "operatorSignature"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "takeOrderWithCrossmint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "taker"
      },
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "tuple",
            "name": "order",
            "components": [
              {
                "type": "address",
                "name": "taker"
              },
              {
                "type": "uint256",
                "name": "orderId"
              },
              {
                "type": "uint64",
                "name": "expiresAt"
              },
              {
                "type": "tuple[]",
                "name": "payments",
                "components": [
                  {
                    "type": "address",
                    "name": "token"
                  },
                  {
                    "type": "address",
                    "name": "from"
                  },
                  {
                    "type": "address",
                    "name": "to"
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
            "type": "address",
            "name": "payer"
          },
          {
            "type": "bytes",
            "name": "payerSignature"
          },
          {
            "type": "bytes",
            "name": "operatorSignature"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "updateMarketplaceReceiptNFTContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_marketplaceReceiptNFT"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract