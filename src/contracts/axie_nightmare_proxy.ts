import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5191,
  address: '0x51d1f017ddabbb257705b2972b26fdecdc5b0955' as const,
  contract_name: 'TransparentProxyOZv4_9_5',
  display_name: 'Axie Nightmare Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x197ecfdf9ce72e187dfd655507bd7fa545434f4a',
  created_at: 1731928418,
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
    "name": "IneligibleAxieBody",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      }
    ]
  },
  {
    "name": "IneligibleAxiePart",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      },
      {
        "type": "uint8",
        "name": "part"
      }
    ]
  },
  {
    "name": "InsufficientForVRFRequest",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "actual"
      },
      {
        "type": "uint256",
        "name": "expected"
      }
    ]
  },
  {
    "name": "InvalidNightmarePartDetails",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "actual"
      },
      {
        "type": "uint256",
        "name": "expected"
      }
    ]
  },
  {
    "name": "InvalidNightmareRarity",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "rarity"
      }
    ]
  },
  {
    "name": "InvalidProbability",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "probability"
      }
    ]
  },
  {
    "name": "NightmareSupplyRanOut",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "maxSupply"
      }
    ]
  },
  {
    "name": "NotEOA",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "refunderAddress"
      }
    ]
  },
  {
    "name": "NotNightmarePart",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      },
      {
        "type": "uint8",
        "name": "part"
      }
    ]
  },
  {
    "name": "NotPartEvolutionCallback",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotYetDevolved",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      },
      {
        "type": "uint8",
        "name": "part"
      }
    ]
  },
  {
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OutRangeValue",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "uint256",
        "name": "max"
      }
    ]
  },
  {
    "name": "UnderflowTotalSupply",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnknownNightmareRarity",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnknownRequestHash",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
      }
    ]
  },
  {
    "name": "UnknownRollType",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnsupportedClass",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "partClass"
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
    "name": "EstimatedGasForCallbacksUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "estimatedGasToRollPart",
        "indexed": true
      },
      {
        "type": "uint32",
        "name": "estimatedGasToRollBody",
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
    "name": "NightmareBodyAchieved",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "axieId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "seed"
      },
      {
        "type": "uint256",
        "name": "newSkinValue"
      },
      {
        "type": "uint256",
        "name": "updatedSupply"
      }
    ]
  },
  {
    "name": "NightmareBodyMissed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "axieId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "seed"
      }
    ]
  },
  {
    "name": "NightmareBodySupplyRanOut",
    "type": "event",
    "inputs": []
  },
  {
    "name": "NightmarePartAchieved",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "axieId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "part",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "partClass"
      },
      {
        "type": "uint256",
        "name": "seed"
      },
      {
        "type": "uint256",
        "name": "newSkinValue"
      },
      {
        "type": "uint256",
        "name": "newPartSupply"
      }
    ]
  },
  {
    "name": "NightmarePartDetailsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8[6][6]",
        "name": "nightmareRarities"
      },
      {
        "type": "uint8[6][6]",
        "name": "nightmarePartDetails"
      }
    ]
  },
  {
    "name": "NightmarePartMissed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "axieId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "part",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "partClass"
      },
      {
        "type": "uint256",
        "name": "seed"
      }
    ]
  },
  {
    "name": "NightmarePartSupplyRanOut",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "part",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "partClass",
        "indexed": true
      }
    ]
  },
  {
    "name": "NightmareProbabilityUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint16",
        "name": "bodyProbability"
      },
      {
        "type": "uint16[6]",
        "name": "commonProbabilities"
      },
      {
        "type": "uint16[6]",
        "name": "rareProbabilities"
      },
      {
        "type": "uint16",
        "name": "shinyProbability"
      }
    ]
  },
  {
    "name": "NightmareRolled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestHash",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "requestInfo",
        "components": [
          {
            "type": "uint256",
            "name": "axieId"
          },
          {
            "type": "uint8",
            "name": "part"
          },
          {
            "type": "uint8",
            "name": "rollType"
          }
        ]
      }
    ]
  },
  {
    "name": "NightmareSkinCleansed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "part",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "updatedSkin"
      },
      {
        "type": "bool",
        "name": "inheritable"
      },
      {
        "type": "uint256",
        "name": "updatedSupply"
      }
    ]
  },
  {
    "name": "OriginalSkinCached",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "part",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "skin"
      },
      {
        "type": "uint256",
        "name": "skinInherit"
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
    "name": "RollRequestFulfilled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestHash",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isAchieved",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "requestInfo",
        "components": [
          {
            "type": "uint256",
            "name": "axieId"
          },
          {
            "type": "uint8",
            "name": "part"
          },
          {
            "type": "uint8",
            "name": "rollType"
          }
        ]
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
    "name": "BODY_MAX_SUPPLY",
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
    "name": "RARE_NIGHTMARE_PART_MAX_SUPPLY",
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
    "name": "REGULAR_NIGHTMARE_PART_MAX_SUPPLY",
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
    "name": "cleanseNightmareSkin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      },
      {
        "type": "uint8",
        "name": "part"
      }
    ],
    "outputs": []
  },
  {
    "name": "estimateVRFFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "rollType"
      },
      {
        "type": "uint256",
        "name": "gasPrice"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "callbackGasLimit"
      },
      {
        "type": "uint256",
        "name": "estimatedFee"
      }
    ]
  },
  {
    "name": "getAxieContract",
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
    "name": "getBaseProbabilityForShiny",
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
    "name": "getGasEstimatedForCallbacks",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32"
      },
      {
        "type": "uint32"
      }
    ]
  },
  {
    "name": "getNightmareBodyProbability",
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
    "name": "getNightmareBodySupply",
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
    "name": "getOriginalSkin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      },
      {
        "type": "uint8",
        "name": "part"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "skin"
      },
      {
        "type": "bool",
        "name": "inheritable"
      }
    ]
  },
  {
    "name": "getOverallPartProbability",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "rarity"
      },
      {
        "type": "uint256",
        "name": "level"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getPartEvolutionContract",
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
    "name": "getRandomRequestInfoBy",
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
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "axieId"
          },
          {
            "type": "uint8",
            "name": "part"
          },
          {
            "type": "uint8",
            "name": "rollType"
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
    "name": "getShinyProbabilityByAxie",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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
        "type": "address",
        "name": "admin"
      },
      {
        "type": "address",
        "name": "axie"
      },
      {
        "type": "address",
        "name": "partDevolution"
      },
      {
        "type": "address",
        "name": "vrfCoordinator"
      },
      {
        "type": "uint16",
        "name": "bodyProbability"
      },
      {
        "type": "uint8[6][6]",
        "name": "nightmareRarities"
      },
      {
        "type": "uint8[6][6]",
        "name": "nightmarePartDetails"
      },
      {
        "type": "uint16[6]",
        "name": "commonProbabilities"
      },
      {
        "type": "uint16[6]",
        "name": "rareProbabilities"
      },
      {
        "type": "uint16",
        "name": "shinyProbability"
      },
      {
        "type": "uint32[2]",
        "name": "estimatedGasForCallbacks"
      }
    ],
    "outputs": []
  },
  {
    "name": "isEligibleForNightmareBody",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isEligibleForNightmarePart",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      },
      {
        "type": "uint8",
        "name": "part"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
    "name": "rollForNightmareBody",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "requester"
      },
      {
        "type": "uint256",
        "name": "axieId"
      },
      {
        "type": "uint8",
        "name": "part"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
      }
    ]
  },
  {
    "name": "rollForNightmarePart",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "requester"
      },
      {
        "type": "uint256",
        "name": "axieId"
      },
      {
        "type": "uint8",
        "name": "part"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
      }
    ]
  },
  {
    "name": "setEstimatedGasForCallbacks",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "estimatedGasToRollPart"
      },
      {
        "type": "uint32",
        "name": "estimatedGasToRollBody"
      }
    ],
    "outputs": []
  },
  {
    "name": "setNightmarePartDetails",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8[6][6]",
        "name": "nightmareRarities"
      },
      {
        "type": "uint8[6][6]",
        "name": "nightmarePartDetails"
      }
    ],
    "outputs": []
  },
  {
    "name": "setNightmareProbability",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint16",
        "name": "bodyProbability"
      },
      {
        "type": "uint16[6]",
        "name": "commonProbabilities"
      },
      {
        "type": "uint16[6]",
        "name": "rareProbabilities"
      },
      {
        "type": "uint16",
        "name": "shinyProbability"
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
    "name": "unpackAllNightmareDetails",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256[6][6]",
        "name": "supplies"
      },
      {
        "type": "uint8[6][6]",
        "name": "rarities"
      },
      {
        "type": "uint256[6][6]",
        "name": "partDetailValues"
      }
    ]
  },
  {
    "name": "unpackNightmareDetails",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "part"
      },
      {
        "type": "uint256",
        "name": "partClass"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "supply"
      },
      {
        "type": "uint8",
        "name": "rarity"
      },
      {
        "type": "uint256",
        "name": "partDetailValue"
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