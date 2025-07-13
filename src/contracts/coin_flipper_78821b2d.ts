import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34664,
  address: '0x744b467ce265dbc5078b43036271aec378821b2d' as const,
  contract_name: 'CoinFlipper',
  display_name: 'Coin Flipper',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1746539936,
  abi: [
  {
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CoinFlipInitiated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player_",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "configId_",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "reqHash_",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "choice_"
      },
      {
        "type": "uint256",
        "name": "nftId_"
      }
    ]
  },
  {
    "name": "CoinFlipPauseToggled",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "isPaused_"
      }
    ]
  },
  {
    "name": "CoinFlipResolved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player_",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "configId_",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "reqHash_",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "playerWin_"
      }
    ]
  },
  {
    "name": "ConfigDeleted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "configId_",
        "indexed": true
      }
    ]
  },
  {
    "name": "ConfigNFTAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "configId_",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nftId_"
      },
      {
        "type": "uint256",
        "name": "nftIndex_"
      }
    ]
  },
  {
    "name": "ConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "configId_",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "config_",
        "components": [
          {
            "type": "uint256",
            "name": "tokenType"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "tokenAmount"
          },
          {
            "type": "uint256",
            "name": "supply"
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
    "name": "coinFlipConfigs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint16",
        "name": "configId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "tokenType"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "tokenAmount"
      },
      {
        "type": "uint256",
        "name": "supply"
      }
    ]
  },
  {
    "name": "coinFlipData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "fulfilled"
      },
      {
        "type": "bool",
        "name": "choice"
      },
      {
        "type": "uint16",
        "name": "configId"
      },
      {
        "type": "address",
        "name": "player"
      },
      {
        "type": "uint256",
        "name": "nftId"
      }
    ]
  },
  {
    "name": "configureGas",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint64",
        "name": "_constantGas"
      },
      {
        "type": "uint64",
        "name": "_transferGas"
      }
    ],
    "outputs": []
  },
  {
    "name": "constantGas",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "deleteCoinFlipConfigs",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint16[]",
        "name": "_configIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "estimateFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "gasPrice"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "estFee"
      },
      {
        "type": "uint256",
        "name": "callbackGasLimit"
      }
    ]
  },
  {
    "name": "flipACoin",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bool",
        "name": "_choice"
      },
      {
        "type": "uint16",
        "name": "_configId"
      },
      {
        "type": "uint256",
        "name": "_nftId"
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
        "name": "_vrfCoordinator"
      },
      {
        "type": "uint64",
        "name": "_constantGas"
      },
      {
        "type": "uint64",
        "name": "_transferGas"
      }
    ],
    "outputs": []
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
    "name": "onERC721Received",
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
    "name": "playHistory",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "totalPlay"
      },
      {
        "type": "uint256",
        "name": "countWinning"
      }
    ]
  },
  {
    "name": "playersWinStreak",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "winStreak"
      }
    ]
  },
  {
    "name": "rawFulfillRandomSeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_reqHash"
      },
      {
        "type": "uint256",
        "name": "_randomSeed"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "rescueAssets",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_tokenTypes"
      },
      {
        "type": "address[]",
        "name": "_tokenAddresses"
      },
      {
        "type": "uint256[]",
        "name": "_tokenIds"
      },
      {
        "type": "uint256[]",
        "name": "_tokenAmounts"
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
    "name": "togglePauseFlipping",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_value"
      }
    ],
    "outputs": []
  },
  {
    "name": "tokenOfConfigByIndex",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint16",
        "name": "configId"
      },
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "id"
      }
    ]
  },
  {
    "name": "transferGas",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64"
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
    "name": "updateCoinFlipConfigs",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint16[]",
        "name": "_configIds"
      },
      {
        "type": "tuple[]",
        "name": "_configs",
        "components": [
          {
            "type": "uint256",
            "name": "tokenType"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "tokenAmount"
          },
          {
            "type": "uint256",
            "name": "supply"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "updateNftCoinFlipConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint16",
        "name": "_configId"
      },
      {
        "type": "tuple",
        "name": "_config",
        "components": [
          {
            "type": "uint256",
            "name": "tokenType"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "tokenAmount"
          },
          {
            "type": "uint256",
            "name": "supply"
          }
        ]
      },
      {
        "type": "uint256[]",
        "name": "_indexes"
      },
      {
        "type": "uint256[]",
        "name": "_ids"
      }
    ],
    "outputs": []
  },
  {
    "name": "vrfCoordinator",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract