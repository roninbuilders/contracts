import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2033,
  address: '0x7bc7e63e55e5a174efc70296a37629ddc72311dd' as const,
  contract_name: 'KongProxy',
  display_name: 'Equipment Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xb96a00b33f7f071e813627f11e23fc12a979f79b',
  created_at: 1711312661,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "address",
        "name": "_admin"
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
    "name": "updateEquipmentRegistry",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_reg"
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