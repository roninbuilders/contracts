import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4538,
  address: '0x74d1ca99f9ed20f1b9ed4297ffe245ceaacf519e' as const,
  contract_name: 'TransparentProxyOZv4_9_5',
  display_name: 'Axie Breeding Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xd06bdf134e9c2f175900f1c2a9806242fa5429a0',
  created_at: 1728656609,
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
    "name": "AxieNotAuthorized",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      }
    ]
  },
  {
    "name": "AxieNotExisted",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      }
    ]
  },
  {
    "name": "BreedLimitReached",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      },
      {
        "type": "uint8",
        "name": "breedCount"
      },
      {
        "type": "uint8",
        "name": "breedLimit"
      }
    ]
  },
  {
    "name": "FailedToBurnPotion",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "FailedToChargeFee",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "InvalidPotionLength",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "length"
      },
      {
        "type": "uint8",
        "name": "breedLimit"
      }
    ]
  },
  {
    "name": "NotEligibleForPairing",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "sireId"
      },
      {
        "type": "uint256",
        "name": "matronId"
      }
    ]
  },
  {
    "name": "AxieBreedCountUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "breedCount",
        "indexed": true
      }
    ]
  },
  {
    "name": "AxieBreedLimitUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "axieBreedLimit"
      }
    ]
  },
  {
    "name": "AxieSpawn",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId",
        "indexed": true
      }
    ]
  },
  {
    "name": "AxieggSpawned",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "sireId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "matronId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "birthDate"
      },
      {
        "type": "tuple",
        "name": "sireGenes",
        "components": [
          {
            "type": "uint256",
            "name": "x"
          },
          {
            "type": "uint256",
            "name": "y"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "matronGenes",
        "components": [
          {
            "type": "uint256",
            "name": "x"
          },
          {
            "type": "uint256",
            "name": "y"
          }
        ]
      }
    ]
  },
  {
    "name": "BreedingFeeTokenUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "breedingFeeToken"
      }
    ]
  },
  {
    "name": "BreedingFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "breedingFee"
      }
    ]
  },
  {
    "name": "BreedingPotionUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "breedingPotion"
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
    "name": "NeededPotionForBreedingUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "neededPotionForBreeding"
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
    "name": "TokenReceiverUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenReceiver"
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
    "name": "areAxiesEligibleForPairing",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "sireId"
      },
      {
        "type": "uint256",
        "name": "matronId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "axieBreedLimit",
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
    "name": "breedAxies",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "sireId"
      },
      {
        "type": "uint256",
        "name": "matronId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "axieId"
      }
    ]
  },
  {
    "name": "breedingFee",
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
    "name": "breedingFeeToken",
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
    "name": "breedingPotion",
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
    "name": "getRequirementsForBreeding",
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
        "name": "admin"
      },
      {
        "type": "address",
        "name": "axieAddr"
      },
      {
        "type": "address",
        "name": "breedingFeeToken_"
      },
      {
        "type": "address",
        "name": "breedingPotion_"
      },
      {
        "type": "uint256",
        "name": "breedingFee_"
      },
      {
        "type": "address",
        "name": "tokenReceiver_"
      },
      {
        "type": "uint8",
        "name": "axieBreedLimit_"
      },
      {
        "type": "uint256[]",
        "name": "neededPotionForBreeding_"
      }
    ],
    "outputs": []
  },
  {
    "name": "neededPotionForBreeding",
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
    "name": "setAxieBreedLimit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "axieBreedLimit_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBreedingFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "breedingFee_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBreedingFeeToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "breedingFeeToken_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBreedingPotionContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "breedingPotion_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setNeededPotionForBreeding",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "neededPotionForBreeding_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTokenReceiver",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenReceiver_"
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
    "name": "tokenReceiver",
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