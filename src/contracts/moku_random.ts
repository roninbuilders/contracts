import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37367,
  address: '0x12b36f0c62d651c4bb4c7e9a03ed1032ac0d5af8' as const,
  contract_name: 'MokuRandom',
  display_name: 'Moku Random',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1759773906,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_vrfCoordinator"
      },
      {
        "type": "address[]",
        "name": "_approvedRequesters"
      }
    ]
  },
  {
    "name": "MokuRandom__InvalidAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MokuRandom__InvalidRequestHash",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MokuRandom__NotAuthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MokuRandom__RandomSeedAlreadyRequested",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ApprovedRequesterUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "requester",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isApproved"
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
    "name": "RandomSeedFulfilled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "id",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "randomSeed"
      }
    ]
  },
  {
    "name": "RandomSeedRequested",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "id",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "requestHash"
      }
    ]
  },
  {
    "name": "VRFCoordinatorUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "vrfCoordinator",
        "indexed": true
      }
    ]
  },
  {
    "name": "approvedRequesters",
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
    "name": "getApprovedStatuses",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "_requesters"
      }
    ],
    "outputs": [
      {
        "type": "bool[]"
      }
    ]
  },
  {
    "name": "getRandomSeeds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_ids"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint8",
            "name": "status"
          },
          {
            "type": "uint256",
            "name": "randomSeed"
          }
        ]
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
    "name": "randomSeeds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint8",
        "name": "status"
      },
      {
        "type": "uint256",
        "name": "randomSeed"
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
    "name": "requestRandomness",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_id"
      },
      {
        "type": "uint256",
        "name": "_callbackGasLimit"
      },
      {
        "type": "uint256",
        "name": "_gasPrice"
      }
    ],
    "outputs": []
  },
  {
    "name": "setApprovedRequester",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_requester"
      },
      {
        "type": "bool",
        "name": "_isApproved"
      }
    ],
    "outputs": []
  },
  {
    "name": "setVRFCoordinator",
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
    "name": "vrfRequestToId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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