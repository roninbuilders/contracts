import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36915,
  address: '0xdd4bbfcfb74de89d29fbd92ebccb42d86419bb1a' as const,
  contract_name: 'Pack',
  display_name: 'Pack',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1757059156,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_miner1155"
      },
      {
        "type": "address",
        "name": "_adminWallet"
      },
      {
        "type": "address",
        "name": "_vrfCoordinator"
      }
    ]
  },
  {
    "name": "EmptyArray",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidPackConfiguration",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidVRFRequest",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LenMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotAdmin",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotApproved",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TooManyPacksRequested",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnknownPack",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PackOpened",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "packId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "PackOpened",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "packTokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nftId",
        "indexed": true
      }
    ]
  },
  {
    "name": "PackOpeningFulfilled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "requestHash",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "nftIds"
      }
    ]
  },
  {
    "name": "PackOpeningFulfilled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "requestHash",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "nftIds"
      }
    ]
  },
  {
    "name": "PackOpeningRequested",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "requestHash",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
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
    "name": "ShopItemAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "id",
        "indexed": true
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
    "name": "CALLBACK_GAS_LIMIT",
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
    "name": "MAX_PACKS_PER_REQUEST",
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
    "name": "REQUEST_TIMEOUT",
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
    "name": "VRF_GAS_PRICE_MULTIPLIER",
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
    "name": "adminWallet",
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
    "name": "callbackGasLimit",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "createNFTPack",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "packId"
      },
      {
        "type": "uint256",
        "name": "packTokenId"
      },
      {
        "type": "string",
        "name": "ch"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "od"
      }
    ],
    "outputs": []
  },
  {
    "name": "emergencyPause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "emergencyRefundFailedVRFRequest",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
      }
    ],
    "outputs": []
  },
  {
    "name": "emergencyUnpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "gasPrice",
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
    "name": "getUserByReqHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "isUserRequested",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "miner1155",
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
    "name": "onERC1155BatchReceived",
    "type": "function",
    "stateMutability": "pure",
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
    "stateMutability": "pure",
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
    "name": "openPacks",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokenIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "packDef",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "packId"
      },
      {
        "type": "string",
        "name": "chain"
      },
      {
        "type": "uint8",
        "name": "pType"
      }
    ]
  },
  {
    "name": "packOfToken",
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
    "name": "packRequests",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "user"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "bool",
        "name": "fulfilled"
      },
      {
        "type": "bool",
        "name": "emergencyRefunded"
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
    "name": "tokenOfPack",
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
    "name": "validVRFRequests",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract