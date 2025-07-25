import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2013,
  address: '0x0be0665abaea635f5dfd3f6ed067555995194baf' as const,
  contract_name: 'KongRedeemer',
  display_name: 'Kong Redeemer',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1711197725,
  abi: [
  {
    "name": "OnlyCoordinatorCanFulfill",
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
    "name": "ItemRedeemed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenType"
      },
      {
        "type": "address",
        "name": "lootAdd"
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_vrfCoordinator"
      }
    ],
    "outputs": []
  },
  {
    "name": "loot20Array",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "ticketReq"
      },
      {
        "type": "uint256",
        "name": "min"
      },
      {
        "type": "uint256",
        "name": "max"
      }
    ]
  },
  {
    "name": "loot721Array",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "ticketReq"
      }
    ]
  },
  {
    "name": "lootArray1155",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "ticketReq"
      },
      {
        "type": "uint256",
        "name": "itemCount"
      },
      {
        "type": "uint256",
        "name": "subGroupCount"
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
        "name": "_operator"
      },
      {
        "type": "address",
        "name": "_from"
      },
      {
        "type": "uint256",
        "name": "_id"
      },
      {
        "type": "uint256",
        "name": "_value"
      },
      {
        "type": "bytes",
        "name": "_data"
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
    "name": "populateArray1155",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_ticket"
      },
      {
        "type": "uint256",
        "name": "_ticketId"
      },
      {
        "type": "uint256",
        "name": "_ticketReq"
      },
      {
        "type": "uint256",
        "name": "_index"
      },
      {
        "type": "address",
        "name": "_lootAdd"
      },
      {
        "type": "uint256[][]",
        "name": "_groupIds"
      },
      {
        "type": "uint256[][]",
        "name": "_groupCounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "populateArray721",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_ticket"
      },
      {
        "type": "uint256",
        "name": "_ticketId"
      },
      {
        "type": "uint256",
        "name": "_ticketReq"
      },
      {
        "type": "uint256",
        "name": "_index"
      },
      {
        "type": "address",
        "name": "_lootAdd"
      },
      {
        "type": "uint256[]",
        "name": "_ids"
      }
    ],
    "outputs": []
  },
  {
    "name": "populateLoot20",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_ticket"
      },
      {
        "type": "uint256",
        "name": "_ticketId"
      },
      {
        "type": "uint256",
        "name": "_ticketReq"
      },
      {
        "type": "uint256",
        "name": "_index"
      },
      {
        "type": "address",
        "name": "_lootAdd"
      },
      {
        "type": "uint256",
        "name": "_min"
      },
      {
        "type": "uint256",
        "name": "_max"
      }
    ],
    "outputs": []
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
    "name": "redeem",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenType"
      },
      {
        "type": "address",
        "name": "_ticket"
      },
      {
        "type": "uint256",
        "name": "_ticketId"
      },
      {
        "type": "uint256",
        "name": "_index"
      },
      {
        "type": "address",
        "name": "_lootAdd"
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
    "name": "requestData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "tokenType"
      },
      {
        "type": "address",
        "name": "ticketAdd"
      },
      {
        "type": "uint256",
        "name": "ticketId"
      },
      {
        "type": "uint256",
        "name": "index"
      },
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "address",
        "name": "lootAdd"
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