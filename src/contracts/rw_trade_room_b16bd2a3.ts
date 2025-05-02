import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 29576,
  address: '0x41465944c0c8e468273033f4ddf9cad6b16bd2a3' as const,
  contract_name: 'RWTradeRoom',
  display_name: 'RW Trade Room',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742960882,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "initialCreationFee"
      },
      {
        "type": "uint256",
        "name": "initialCancellationFee"
      },
      {
        "type": "address",
        "name": "initialFeeRecipient"
      }
    ]
  },
  {
    "name": "CancellationFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "oldFee"
      },
      {
        "type": "uint256",
        "name": "newFee"
      }
    ]
  },
  {
    "name": "FeeRecipientUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldRecipient",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newRecipient",
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
    "name": "RealTokenBalanceDiscountUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMinBalance"
      }
    ]
  },
  {
    "name": "RefundPolicyUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "oldPolicy"
      },
      {
        "type": "bool",
        "name": "newPolicy"
      }
    ]
  },
  {
    "name": "RoomCancelled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "roomId",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoomCreated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "roomId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "creator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "targetWallet",
        "indexed": true
      },
      {
        "type": "tuple[]",
        "name": "creatorNFTs",
        "components": [
          {
            "type": "address",
            "name": "nftContract"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint8",
            "name": "standard"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "targetNFTs",
        "components": [
          {
            "type": "address",
            "name": "nftContract"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint8",
            "name": "standard"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "creatorTokens",
        "components": [
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "targetTokens",
        "components": [
          {
            "type": "address",
            "name": "tokenAddress"
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
    "name": "RoomCreationFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newFee"
      }
    ]
  },
  {
    "name": "TradeCompleted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "roomId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "seller",
        "indexed": true
      }
    ]
  },
  {
    "name": "REAL_TOKEN",
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
    "name": "cancelRoom",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_roomId"
      }
    ],
    "outputs": []
  },
  {
    "name": "completeTrade",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_roomId"
      }
    ],
    "outputs": []
  },
  {
    "name": "createRoom",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_creatorNFTs",
        "components": [
          {
            "type": "address",
            "name": "nftContract"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint8",
            "name": "standard"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "_targetNFTs",
        "components": [
          {
            "type": "address",
            "name": "nftContract"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint8",
            "name": "standard"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "_creatorTokens",
        "components": [
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "_targetTokens",
        "components": [
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "address",
        "name": "_targetWallet"
      }
    ],
    "outputs": []
  },
  {
    "name": "getActivePublicRooms",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "roomId"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "address",
            "name": "targetWallet"
          },
          {
            "type": "tuple[]",
            "name": "creatorNFTs",
            "components": [
              {
                "type": "address",
                "name": "nftContract"
              },
              {
                "type": "uint256",
                "name": "tokenId"
              },
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "uint8",
                "name": "standard"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "targetNFTs",
            "components": [
              {
                "type": "address",
                "name": "nftContract"
              },
              {
                "type": "uint256",
                "name": "tokenId"
              },
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "uint8",
                "name": "standard"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "creatorTokens",
            "components": [
              {
                "type": "address",
                "name": "tokenAddress"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "targetTokens",
            "components": [
              {
                "type": "address",
                "name": "tokenAddress"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "bool",
            "name": "isActive"
          },
          {
            "type": "uint256",
            "name": "createdAt"
          }
        ]
      }
    ]
  },
  {
    "name": "getContractStadisticts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "totalActiveRooms"
          },
          {
            "type": "uint256",
            "name": "totalCompletedRooms"
          },
          {
            "type": "uint256",
            "name": "totalRooms"
          },
          {
            "type": "uint256",
            "name": "totalRONFees"
          }
        ]
      }
    ]
  },
  {
    "name": "getFeeRecipient",
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
    "name": "getMyActiveRooms",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "roomId"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "address",
            "name": "targetWallet"
          },
          {
            "type": "tuple[]",
            "name": "creatorNFTs",
            "components": [
              {
                "type": "address",
                "name": "nftContract"
              },
              {
                "type": "uint256",
                "name": "tokenId"
              },
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "uint8",
                "name": "standard"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "targetNFTs",
            "components": [
              {
                "type": "address",
                "name": "nftContract"
              },
              {
                "type": "uint256",
                "name": "tokenId"
              },
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "uint8",
                "name": "standard"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "creatorTokens",
            "components": [
              {
                "type": "address",
                "name": "tokenAddress"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "targetTokens",
            "components": [
              {
                "type": "address",
                "name": "tokenAddress"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "bool",
            "name": "isActive"
          },
          {
            "type": "uint256",
            "name": "createdAt"
          }
        ]
      }
    ]
  },
  {
    "name": "getMyTradeRequests",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "roomId"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "address",
            "name": "targetWallet"
          },
          {
            "type": "tuple[]",
            "name": "creatorNFTs",
            "components": [
              {
                "type": "address",
                "name": "nftContract"
              },
              {
                "type": "uint256",
                "name": "tokenId"
              },
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "uint8",
                "name": "standard"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "targetNFTs",
            "components": [
              {
                "type": "address",
                "name": "nftContract"
              },
              {
                "type": "uint256",
                "name": "tokenId"
              },
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "uint8",
                "name": "standard"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "creatorTokens",
            "components": [
              {
                "type": "address",
                "name": "tokenAddress"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "targetTokens",
            "components": [
              {
                "type": "address",
                "name": "tokenAddress"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "bool",
            "name": "isActive"
          },
          {
            "type": "uint256",
            "name": "createdAt"
          }
        ]
      }
    ]
  },
  {
    "name": "getRoom",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_roomId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "address",
            "name": "targetWallet"
          },
          {
            "type": "tuple[]",
            "name": "creatorNFTs",
            "components": [
              {
                "type": "address",
                "name": "nftContract"
              },
              {
                "type": "uint256",
                "name": "tokenId"
              },
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "uint8",
                "name": "standard"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "targetNFTs",
            "components": [
              {
                "type": "address",
                "name": "nftContract"
              },
              {
                "type": "uint256",
                "name": "tokenId"
              },
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "uint8",
                "name": "standard"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "creatorTokens",
            "components": [
              {
                "type": "address",
                "name": "tokenAddress"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "targetTokens",
            "components": [
              {
                "type": "address",
                "name": "tokenAddress"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "uint256",
            "name": "cancelFee"
          },
          {
            "type": "uint256",
            "name": "creationFee"
          },
          {
            "type": "bool",
            "name": "isActive"
          },
          {
            "type": "bool",
            "name": "isCompleted"
          },
          {
            "type": "uint256",
            "name": "createdAt"
          }
        ]
      }
    ]
  },
  {
    "name": "getRoomCancellationFee",
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
    "name": "getRoomCreationFee",
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
    "name": "getUserRooms",
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
    "name": "onERC1155BatchReceived",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      },
      {
        "type": "bytes"
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
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bytes"
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
    "name": "roomCounter",
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
    "name": "rooms",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "address",
        "name": "targetWallet"
      },
      {
        "type": "uint256",
        "name": "cancelFee"
      },
      {
        "type": "uint256",
        "name": "creationFee"
      },
      {
        "type": "bool",
        "name": "isActive"
      },
      {
        "type": "bool",
        "name": "isCompleted"
      },
      {
        "type": "uint256",
        "name": "createdAt"
      }
    ]
  },
  {
    "name": "setFeeRecipient",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newRecipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRealTokenBalanceDiscount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMinBalance"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRoomCancellationFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newFee"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRoomCreationFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newFee"
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
    "name": "userRooms",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract