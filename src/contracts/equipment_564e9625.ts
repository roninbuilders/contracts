import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2034,
  address: '0x8d5b8f6a024a487babc2a2bc399a575e564e9625' as const,
  contract_name: 'Equipment',
  display_name: 'Equipment',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1711312655,
  abi: [
  {
    "name": "EquippedItem",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "vxId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "itemId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "itemTokenType"
      },
      {
        "type": "uint256",
        "name": "uniqueItemBaseId"
      },
      {
        "type": "uint256",
        "name": "uniqueItemStats"
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
    "name": "UnequippedItem",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "vxId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "itemId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "itemTokenType"
      },
      {
        "type": "uint256",
        "name": "uniqueItemBaseId"
      },
      {
        "type": "uint256",
        "name": "uniqueItemStats"
      }
    ]
  },
  {
    "name": "VxScoreUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "vxId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newScore"
      },
      {
        "type": "uint256",
        "name": "oldScore"
      },
      {
        "type": "uint256",
        "name": "vxNonce"
      },
      {
        "type": "uint256",
        "name": "registryVersion",
        "indexed": true
      }
    ]
  },
  {
    "name": "equipItems",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[5]",
        "name": "_itemTypes"
      },
      {
        "type": "uint256[5]",
        "name": "_tokenTypes"
      },
      {
        "type": "uint256[5]",
        "name": "_itemIds"
      },
      {
        "type": "uint256",
        "name": "_vx"
      }
    ],
    "outputs": []
  },
  {
    "name": "equipmentRegistry",
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
    "name": "getGearScore",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_vx"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getGearScores",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_vxs"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getGeneratedVxScore",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_vx"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getGeneratedVxScores",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_vxs"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "scores"
      }
    ]
  },
  {
    "name": "getItems",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_vx"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "_tokenTypes"
      },
      {
        "type": "uint256[]",
        "name": "_itemIds"
      }
    ]
  },
  {
    "name": "getItemsBatch",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_vxs"
      }
    ],
    "outputs": [
      {
        "type": "uint256[][]",
        "name": "_tokenTypes"
      },
      {
        "type": "uint256[][]",
        "name": "_itemIds"
      }
    ]
  },
  {
    "name": "getVxInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_vx"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "score"
          },
          {
            "type": "uint256[]",
            "name": "itemsIds"
          },
          {
            "type": "uint256[]",
            "name": "itemsTokenTypes"
          }
        ]
      }
    ]
  },
  {
    "name": "getVxInfoBatch",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_vxs"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "_infos",
        "components": [
          {
            "type": "uint256",
            "name": "score"
          },
          {
            "type": "uint256[]",
            "name": "itemsIds"
          },
          {
            "type": "uint256[]",
            "name": "itemsTokenTypes"
          }
        ]
      }
    ]
  },
  {
    "name": "getVxSetScore",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_vx"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_score"
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
        "name": "_vxAddress"
      },
      {
        "type": "address",
        "name": "_vxArmoryAddress"
      },
      {
        "type": "address",
        "name": "_vxArmoryUniqueAddress"
      },
      {
        "type": "address",
        "name": "_equipmentRegistryAddress"
      },
      {
        "type": "address",
        "name": "_adventure"
      },
      {
        "type": "uint8",
        "name": "_maxItemType"
      }
    ],
    "outputs": []
  },
  {
    "name": "maxItemType",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setMax",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "_max"
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
    "name": "unequipItems",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[5]",
        "name": "_itemTypes"
      },
      {
        "type": "uint256",
        "name": "_vx"
      }
    ],
    "outputs": []
  },
  {
    "name": "vxArmory",
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
    "name": "vxArmoryUnique",
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
    "name": "vxKongz",
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
    "name": "vxNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "vxRegistryVersion",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "vxScore",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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