import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35739,
  address: '0xcf642977657e7b3fc6b26e6e5091536bea61b6dc' as const,
  contract_name: 'TransparentProxyOZv4_9_5',
  display_name: 'NFT Mystery Pack Factory Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x12ed912662f7163c68422e3eaad7f78dcb691824',
  created_at: 1750747994,
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
    "name": "AccessControlBadConfirmation",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AccessControlUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "bytes32",
        "name": "neededRole"
      }
    ]
  },
  {
    "name": "AllTargetsPaused",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Create2EmptyBytecode",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Create2FailedDeployment",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Create2InsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "balance"
      },
      {
        "type": "uint256",
        "name": "needed"
      }
    ]
  },
  {
    "name": "ExpectedNotPaused",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ]
  },
  {
    "name": "ExpectedNotPausedAll",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRoyaltyRegistry",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidTotalRoyaltyFees",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidVRFCoordinator",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TargetPaused",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ]
  },
  {
    "name": "WrongPrediction",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CallbackGasLimitUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint32",
        "name": "fixedGasLimit",
        "indexed": true
      },
      {
        "type": "uint32",
        "name": "dynamicGasLimit",
        "indexed": true
      },
      {
        "type": "uint16",
        "name": "maxNumPackForOneRequest",
        "indexed": true
      }
    ]
  },
  {
    "name": "GlobalPaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "pauser",
        "indexed": true
      },
      {
        "type": "address",
        "name": "target",
        "indexed": true
      }
    ]
  },
  {
    "name": "GlobalPausedAll",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "pauser",
        "indexed": true
      }
    ]
  },
  {
    "name": "GlobalUnpaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "pauser",
        "indexed": true
      },
      {
        "type": "address",
        "name": "target",
        "indexed": true
      }
    ]
  },
  {
    "name": "GlobalUnpausedAll",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "pauser",
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
    "name": "PackCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "pack",
        "indexed": true
      },
      {
        "type": "address",
        "name": "creator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "nonce",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "salt"
      }
    ]
  },
  {
    "name": "PackInitialized",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "pack",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "mysteryPack",
        "components": [
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint96",
            "name": "unitPrice"
          },
          {
            "type": "uint40",
            "name": "activationTime"
          },
          {
            "type": "uint32",
            "name": "buybackExpiration"
          },
          {
            "type": "uint32",
            "name": "decayInterval"
          },
          {
            "type": "uint32",
            "name": "decayDuration"
          },
          {
            "type": "uint16",
            "name": "buybackStartRatio"
          },
          {
            "type": "uint16",
            "name": "buybackEndRatio"
          },
          {
            "type": "bool",
            "name": "buybackEnabled"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "rewardTiers",
        "components": [
          {
            "type": "uint96",
            "name": "price"
          },
          {
            "type": "uint16",
            "name": "ratio"
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
    "name": "RoyaltyRegistryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "royaltyRegistry"
      }
    ]
  },
  {
    "name": "UpgradeableBeaconUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "upgradeableBeacon",
        "indexed": true
      }
    ]
  },
  {
    "name": "VRFCoordinatorUpdated",
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
    "name": "createMysteryPack",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "predicted"
      },
      {
        "type": "tuple",
        "name": "mysteryPack",
        "components": [
          {
            "type": "address",
            "name": "paymentToken"
          },
          {
            "type": "uint96",
            "name": "unitPrice"
          },
          {
            "type": "uint40",
            "name": "activationTime"
          },
          {
            "type": "uint32",
            "name": "buybackExpiration"
          },
          {
            "type": "uint32",
            "name": "decayInterval"
          },
          {
            "type": "uint32",
            "name": "decayDuration"
          },
          {
            "type": "uint16",
            "name": "buybackStartRatio"
          },
          {
            "type": "uint16",
            "name": "buybackEndRatio"
          },
          {
            "type": "bool",
            "name": "buybackEnabled"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "rewardTiers",
        "components": [
          {
            "type": "uint96",
            "name": "price"
          },
          {
            "type": "uint16",
            "name": "ratio"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "packAddress"
      }
    ]
  },
  {
    "name": "fetchPlatformFees",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "salePrice"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ]
  },
  {
    "name": "fetchRoyaltyFees",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "salePrice"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ]
  },
  {
    "name": "getAllPacks",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getCallbackGasLimit",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32",
        "name": "fixedGasLimit"
      },
      {
        "type": "uint32",
        "name": "dynamicGasLimit"
      },
      {
        "type": "uint16",
        "name": "maxNumPackForOneRequest"
      }
    ]
  },
  {
    "name": "getCreatorNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "creator"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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
    "name": "getRoyaltyRegistry",
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
    "name": "getSaltOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "pack"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getUpgradeableBeacon",
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
    "name": "getVRFCoordinator",
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
    "name": "globalPause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "pack"
      }
    ],
    "outputs": []
  },
  {
    "name": "globalPaused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "globalPausedAll",
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
    "name": "globalUnpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "pack"
      }
    ],
    "outputs": []
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
        "name": "operator"
      },
      {
        "type": "address",
        "name": "pauser"
      },
      {
        "type": "address",
        "name": "upgradeableBeacon"
      },
      {
        "type": "uint32",
        "name": "fixedGasLimit"
      },
      {
        "type": "uint32",
        "name": "dynamicGasLimit"
      },
      {
        "type": "uint16",
        "name": "maxNumPackForOneRequest"
      },
      {
        "type": "address",
        "name": "royaltyRegistry"
      },
      {
        "type": "address",
        "name": "vrfCoordinator"
      }
    ],
    "outputs": []
  },
  {
    "name": "migrateVRFCoordinatorForPacks",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "packs"
      }
    ],
    "outputs": []
  },
  {
    "name": "predictAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "creator"
      },
      {
        "type": "uint256",
        "name": "nonce"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
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
        "name": "callerConfirmation"
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
    "name": "setCallbackGasLimit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "fixedGasLimit"
      },
      {
        "type": "uint32",
        "name": "dynamicGasLimit"
      },
      {
        "type": "uint16",
        "name": "maxNumPackForOneRequest"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRoyaltyRegistry",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "royaltyRegistry"
      }
    ],
    "outputs": []
  },
  {
    "name": "setUpgradeableBeacon",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "upgradeableBeacon"
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
    "name": "updateVRFCoordinator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newCoordinator"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract