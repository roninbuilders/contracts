import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37463,
  address: '0x4c8169bc1fb1a8aeb0d2cb02aa3e5d88ec6bce0a' as const,
  contract_name: 'TransparentProxyOZv4_9_5',
  display_name: 'Codex Machine Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x6594f1b1de10adba6661153cfa82d9bb001c3540',
  created_at: 1760596144,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "logic"
      },
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "bytes",
        "name": "data"
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
    "name": "AllRewardsOutOfStock",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ArrayLengthMismatch",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "expected"
      },
      {
        "type": "uint256",
        "name": "actual"
      }
    ]
  },
  {
    "name": "ErrCeilingNotHigherThanFloor",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "floor"
      },
      {
        "type": "uint256",
        "name": "ceiling"
      }
    ]
  },
  {
    "name": "InsufficientTickets",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "available"
      },
      {
        "type": "uint256",
        "name": "required"
      }
    ]
  },
  {
    "name": "InsufficientVRFFee",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "provided"
      },
      {
        "type": "uint256",
        "name": "required"
      }
    ]
  },
  {
    "name": "InvalidGasConfiguration",
    "type": "error",
    "inputs": [
      {
        "type": "uint32",
        "name": "fixedGas"
      },
      {
        "type": "uint32",
        "name": "dynamicGas"
      }
    ]
  },
  {
    "name": "InvalidProbabilityDistribution",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "totalWeight"
      }
    ]
  },
  {
    "name": "InvalidRewardConfiguration",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "accessoryId"
      }
    ]
  },
  {
    "name": "InvalidSigner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "signer"
      }
    ]
  },
  {
    "name": "InvalidTicketConfiguration",
    "type": "error",
    "inputs": [
      {
        "type": "uint32",
        "name": "ticketsNeeded"
      }
    ]
  },
  {
    "name": "NumTicketsNotDivisible",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "numTickets"
      },
      {
        "type": "uint256",
        "name": "ticketsNeededEachRoll"
      }
    ]
  },
  {
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RewardSupplyExhausted",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "accessoryId"
      }
    ]
  },
  {
    "name": "SignatureExpired",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "uint256",
        "name": "currentTime"
      }
    ]
  },
  {
    "name": "UnknownRequestHash",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestHash"
      }
    ]
  },
  {
    "name": "UsedNonce",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "uint256",
        "name": "nonce"
      }
    ]
  },
  {
    "name": "ZeroAddress",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      }
    ]
  },
  {
    "name": "AccessoryContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAccessoryContract",
        "indexed": true
      }
    ]
  },
  {
    "name": "AccessoryMintFailed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "accessoryId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "quantity"
      }
    ]
  },
  {
    "name": "GasConfigurationUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "fixedGasLimit",
        "indexed": true
      },
      {
        "type": "uint32",
        "name": "dynamicGasPerRoll",
        "indexed": true
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
    "name": "PoolExhausted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestHash",
        "indexed": true
      }
    ]
  },
  {
    "name": "RewardAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "accessoryId",
        "indexed": true
      },
      {
        "type": "uint32",
        "name": "maxSupply"
      },
      {
        "type": "uint32",
        "name": "weight"
      }
    ]
  },
  {
    "name": "RewardInfoUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "index",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "accessoryId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "rewardInfo",
        "components": [
          {
            "type": "uint256",
            "name": "accessoryId"
          },
          {
            "type": "uint32",
            "name": "maxSupply"
          },
          {
            "type": "uint32",
            "name": "weight"
          },
          {
            "type": "uint32",
            "name": "rolledQuantity"
          }
        ]
      }
    ]
  },
  {
    "name": "RewardMinted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "accessoryId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "quantity"
      }
    ]
  },
  {
    "name": "RewardRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "accessoryId",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleAdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "previousAdminRole",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "newAdminRole",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleGranted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleRevoked",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "RollCompleted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "tuple[]",
        "name": "inStockRewards",
        "components": [
          {
            "type": "uint256",
            "name": "accessoryId"
          },
          {
            "type": "uint32",
            "name": "maxSupply"
          },
          {
            "type": "uint32",
            "name": "weight"
          },
          {
            "type": "uint32",
            "name": "rolledQuantity"
          }
        ]
      },
      {
        "type": "uint256[]",
        "name": "mintQuantitiesForEachType"
      },
      {
        "type": "uint256[]",
        "name": "newRatios"
      }
    ]
  },
  {
    "name": "RollStarted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "numPouches",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "numTickets"
      },
      {
        "type": "uint256",
        "name": "masterNonce"
      },
      {
        "type": "uint256",
        "name": "vrfFee"
      }
    ]
  },
  {
    "name": "TicketConfigurationUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "ticketsNeededEachRoll",
        "indexed": true
      }
    ]
  },
  {
    "name": "UnorderedNonceInvalidation",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "word"
      },
      {
        "type": "uint256",
        "name": "mask"
      }
    ]
  },
  {
    "name": "UnorderedNonceUsed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig",
        "indexed": true
      },
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nonce"
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
    "name": "VRFCoordinatorAddressUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newCoordinator",
        "indexed": true
      }
    ]
  },
  {
    "name": "CODEX_ROLL_TYPE_HASH",
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
    "name": "DEFAULT_ADMIN_ROLE",
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
    "name": "MAX_PERCENTAGE",
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
    "name": "OPERATOR_ROLE",
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
    "name": "PAUSER_ROLE",
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
    "name": "SIGNER_ROLE",
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
    "name": "addReward",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "accessoryId"
      },
      {
        "type": "uint32",
        "name": "maxSupply"
      },
      {
        "type": "uint32",
        "name": "weight"
      }
    ],
    "outputs": []
  },
  {
    "name": "domainSeparator",
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
    "name": "estimateVRFFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "numPouches"
      },
      {
        "type": "uint256",
        "name": "gasPrice"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "estimatedFee"
      },
      {
        "type": "uint256",
        "name": "callbackGasLimit"
      }
    ]
  },
  {
    "name": "findInStockRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "accessoryId"
          },
          {
            "type": "uint32",
            "name": "maxSupply"
          },
          {
            "type": "uint32",
            "name": "weight"
          },
          {
            "type": "uint32",
            "name": "rolledQuantity"
          }
        ]
      }
    ]
  },
  {
    "name": "getAllRewards",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "accessoryId"
          },
          {
            "type": "uint32",
            "name": "maxSupply"
          },
          {
            "type": "uint32",
            "name": "weight"
          },
          {
            "type": "uint32",
            "name": "rolledQuantity"
          }
        ]
      }
    ]
  },
  {
    "name": "getAxieAccessoryContract",
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
    "name": "getGasConfiguration",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint32",
            "name": "fixedGasLimit"
          },
          {
            "type": "uint32",
            "name": "dynamicGasPerRoll"
          }
        ]
      }
    ]
  },
  {
    "name": "getRandomRequestInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestHash"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint96",
            "name": "numPouches"
          }
        ]
      }
    ]
  },
  {
    "name": "getRewardInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "accessoryId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "accessoryId"
          },
          {
            "type": "uint32",
            "name": "maxSupply"
          },
          {
            "type": "uint32",
            "name": "weight"
          },
          {
            "type": "uint32",
            "name": "rolledQuantity"
          }
        ]
      }
    ]
  },
  {
    "name": "getRoleAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getRoleMember",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getRoleMemberCount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getTicketsNeededEachRoll",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32"
      }
    ]
  },
  {
    "name": "getUserTicketsUsed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "uint32"
      }
    ]
  },
  {
    "name": "grantRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "hasRole",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[4]",
        "name": "authorizers"
      },
      {
        "type": "address",
        "name": "vrfCoordinator_"
      },
      {
        "type": "address",
        "name": "axieAccessory_"
      },
      {
        "type": "uint32",
        "name": "ticketsNeededEachRoll_"
      },
      {
        "type": "uint32",
        "name": "fixedGasLimit_"
      },
      {
        "type": "uint32",
        "name": "dynamicGasPerRoll_"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "axieAccessory_"
      }
    ],
    "outputs": []
  },
  {
    "name": "isUsedNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "uint256",
        "name": "nonce"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "pauseContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
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
        "name": "reqHash"
      },
      {
        "type": "uint256",
        "name": "randomSeed"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeReward",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "accessoryId"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "revokeRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "roll",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint32",
        "name": "numTickets"
      },
      {
        "type": "uint256",
        "name": "masterNonce"
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "uint256",
        "name": "gasPriceToFulfill"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "requestHash"
      }
    ]
  },
  {
    "name": "setAccessoryContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAccessoryContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGasConfiguration",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "fixedGasLimit"
      },
      {
        "type": "uint32",
        "name": "dynamicGasPerRoll"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTicketsNeededEachRoll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "ticketsNeeded"
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
    "name": "unpauseContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "updateReward",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "accessoryId"
      },
      {
        "type": "uint32",
        "name": "maxSupply"
      },
      {
        "type": "uint32",
        "name": "weight"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract