import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1538,
  address: '0xf767c2a449778d4bed3a930c20ecb7e84e3f108b' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Expedition Prizes Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xa1c19b7f07678afa6db061c9d193ffb8a9eacc71',
  created_at: 1704968036,
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
    "inputs": []
  },
  {
    "name": "AdminAccessSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_admin"
      },
      {
        "type": "bool",
        "name": "_enabled"
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
    "name": "ClaimableTreasure",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "expeditionId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "burnKeyAmount"
      },
      {
        "type": "uint256",
        "name": "treasureId"
      },
      {
        "type": "tuple[]",
        "name": "prizes",
        "components": [
          {
            "type": "uint8",
            "name": "prizeType"
          },
          {
            "type": "address",
            "name": "addr"
          },
          {
            "type": "uint256",
            "name": "tokenId"
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
    "name": "ClaimedPrize",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "treasureId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "prizeAddress"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "claimTreasure",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_treasureIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "cleanBatchUserExpeditionTreasures",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_expeditionId"
      },
      {
        "type": "tuple[]",
        "name": "_treasures",
        "components": [
          {
            "type": "address",
            "name": "user"
          },
          {
            "type": "uint256",
            "name": "burnKeyAmount"
          },
          {
            "type": "uint256",
            "name": "treasureId"
          },
          {
            "type": "tuple[]",
            "name": "prizes",
            "components": [
              {
                "type": "uint8",
                "name": "prizeType"
              },
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "uint256",
                "name": "tokenId"
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
    "outputs": []
  },
  {
    "name": "expeditionAddress",
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
    "name": "getTreasureById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_treasureId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "user"
          },
          {
            "type": "uint256",
            "name": "burnKeyAmount"
          },
          {
            "type": "uint256",
            "name": "treasureId"
          },
          {
            "type": "tuple[]",
            "name": "prizes",
            "components": [
              {
                "type": "uint8",
                "name": "prizeType"
              },
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "uint256",
                "name": "tokenId"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "getUserTreasureIds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
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
    "name": "isAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "onERC1155BatchReceived",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "values"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
      }
    ]
  },
  {
    "name": "onERC1155Received",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
      }
    ]
  },
  {
    "name": "onERC721Received",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "bool",
        "name": "enabled"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBatchUserExpeditionTreasures",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_expeditionId"
      },
      {
        "type": "tuple[]",
        "name": "_treasures",
        "components": [
          {
            "type": "address",
            "name": "user"
          },
          {
            "type": "uint256",
            "name": "burnKeyAmount"
          },
          {
            "type": "uint256",
            "name": "treasureId"
          },
          {
            "type": "tuple[]",
            "name": "prizes",
            "components": [
              {
                "type": "uint8",
                "name": "prizeType"
              },
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "uint256",
                "name": "tokenId"
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
    "outputs": []
  },
  {
    "name": "setExpedition",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_address"
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
    "name": "withdrawERC1155",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "address",
        "name": "_targetWallet"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract