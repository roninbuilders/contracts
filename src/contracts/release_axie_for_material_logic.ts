import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1348,
  address: '0x9dcba64a0bf08b90d271f582e5dd84ccb79be977' as const,
  contract_name: 'ReleaseAxieForMaterial',
  display_name: 'ReleaseAxieForMaterialLogic',
  is_deprecated: true,
  is_proxy: false,
  proxy_to: false,
  created_at: 1702268420,
  abi: [
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
    "name": "ErrInsufficientUpfrontFee",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "estimatedRandomizationFee"
      }
    ]
  },
  {
    "name": "ErrInvalidAxieStage",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      }
    ]
  },
  {
    "name": "ErrInvalidInput",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
  },
  {
    "name": "ErrInvalidPercentValue",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrNotAuthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrReleaseRequestNotFound",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
      }
    ]
  },
  {
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AxieContractAddressUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "axieContractAddress"
      }
    ]
  },
  {
    "name": "AxieReleaseForMaterialFulfilled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "axieId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "seed",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "totalMaterial"
      }
    ]
  },
  {
    "name": "AxieReleaseForMaterialRequested",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "reqHash",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "axieIds"
      }
    ]
  },
  {
    "name": "AxiesReleased",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "axieIds"
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
    "name": "MaterialContractAddressUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "materialContractAddress"
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
    "name": "QtyBonusPercentByLevelGroupsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "ranges"
      },
      {
        "type": "uint256",
        "name": "levelAggregator"
      }
    ]
  },
  {
    "name": "QtyByBreedCountsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "ranges",
        "components": [
          {
            "type": "uint128",
            "name": "floor"
          },
          {
            "type": "uint128",
            "name": "ceiling"
          }
        ]
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
    "name": "TreasuryAddressUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "treasuryAddress"
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
    "name": "axieContract",
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
    "name": "estimateFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieNum"
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
    "name": "getMaxGasOnReleaseOneAxie",
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
    "name": "getQtyBonusPercentByLevelGroups",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "percents"
      },
      {
        "type": "uint256",
        "name": "levelAggregator"
      }
    ]
  },
  {
    "name": "getQtyByBreedCounts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "ranges",
        "components": [
          {
            "type": "uint128",
            "name": "floor"
          },
          {
            "type": "uint128",
            "name": "ceiling"
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
        "name": "owner_"
      },
      {
        "type": "address[]",
        "name": "operators"
      },
      {
        "type": "address[4]",
        "name": "packedAddrs"
      },
      {
        "type": "uint256",
        "name": "maxGasOnReleaseOneAxie"
      },
      {
        "type": "tuple[]",
        "name": "qtyByBreedCounts",
        "components": [
          {
            "type": "uint128",
            "name": "floor"
          },
          {
            "type": "uint128",
            "name": "ceiling"
          }
        ]
      },
      {
        "type": "uint16",
        "name": "levelAggregator"
      },
      {
        "type": "uint256[]",
        "name": "qtyBonusByLevels"
      }
    ],
    "outputs": []
  },
  {
    "name": "materialContract",
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
    "name": "pause",
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
    "name": "requestReleaseAxie",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "axieIds"
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
    "name": "setAxieContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaterialContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaxGasOnReleaseOneAxie",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "maxGas"
      }
    ],
    "outputs": []
  },
  {
    "name": "setQtyBonusPercentByLevelGroups",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint16",
        "name": "levelAggregator"
      },
      {
        "type": "uint256[]",
        "name": "percents"
      }
    ],
    "outputs": []
  },
  {
    "name": "setQtyByBreedCounts",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "ranges",
        "components": [
          {
            "type": "uint128",
            "name": "floor"
          },
          {
            "type": "uint128",
            "name": "ceiling"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setTreasury",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
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
        "name": "vrfCoordinator_"
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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