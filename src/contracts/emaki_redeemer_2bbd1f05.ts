import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3836,
  address: '0x0c9dc8911f0ca99838909f34b7b4576c2bbd1f05' as const,
  contract_name: 'EmakiRedeemer',
  display_name: 'Emaki Redeemer',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1724415553,
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
    "name": "ItemSelected",
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
    "name": "SPRAY_MASK",
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
    "name": "approvedColours",
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
    "name": "approvedPhysicalItems",
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
    "name": "chooseSprayCan",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_colourId"
      }
    ],
    "outputs": []
  },
  {
    "name": "emakiConsumable",
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_vrfCoordinator"
      },
      {
        "type": "address",
        "name": "_nana"
      },
      {
        "type": "address",
        "name": "_treasury"
      },
      {
        "type": "address",
        "name": "_emakiConsumable"
      }
    ],
    "outputs": []
  },
  {
    "name": "lootArray1155",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
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
    "name": "nana",
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
    "name": "pendingCount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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
    "name": "redeemNonce",
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
    "name": "redeemPhysical",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_itemId"
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
        "name": "nonce"
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
    "name": "resetRedeemer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
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
    "name": "treasury",
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
    "name": "updateApprovedPhysicalItems",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_itemId"
      },
      {
        "type": "bool",
        "name": "_value"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateColourApproval",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_colourId"
      },
      {
        "type": "bool",
        "name": "_value"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateEmakiConsumable",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_emakiConsumable"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateTreasury",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_treasury"
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