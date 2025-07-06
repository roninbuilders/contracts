import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34315,
  address: '0x89c49f0a4c3f9c6b7bbe690463073f1813821ba6' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Sabong Saga Breeding Upgradeable Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xdda1a8678b02262343001df6e3960b08d57b4dfa',
  created_at: 1745851959,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "address",
        "name": "admin_"
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
    "name": "admin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "admin_"
      }
    ]
  },
  {
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "implementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "implementation_"
      }
    ]
  },
  {
    "name": "upgradeTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      }
    ],
    "outputs": []
  },
  {
    "name": "upgradeToAndCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
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
    "name": "BreedTime",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ERC1155InsufficientBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ERC20InsufficientBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrERC20TransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientNinunoBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidArrayLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidParents",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NonceAlreadyUsed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OwnableInvalidOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "OwnableUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnauthorizedOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "WithdrawalRequestIdAlreadyUsed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BatchBreed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "chickenLeftTokenIds",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "chickenRightTokenIds",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "newTokenIds"
      },
      {
        "type": "uint256[][][]",
        "name": "feathersData"
      },
      {
        "type": "uint256[][][]",
        "name": "resourcesData"
      }
    ]
  },
  {
    "name": "Breed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "chickenLeftTokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "chickenRightTokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newTokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amountToNinuno"
      },
      {
        "type": "uint256[][]",
        "name": "feathersData"
      },
      {
        "type": "uint256[][]",
        "name": "resourcesData"
      }
    ]
  },
  {
    "name": "BreedV2",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "chickenLeftTokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "chickenRightTokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "newTokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amountToNinuno"
      },
      {
        "type": "uint256[][]",
        "name": "feathersData"
      },
      {
        "type": "uint256[][]",
        "name": "resourcesData"
      },
      {
        "type": "uint256",
        "name": "breedingCooldownTime"
      }
    ]
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "version"
      }
    ]
  },
  {
    "name": "NinunoBalanceClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "withdrawalRequestId",
        "indexed": true
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
    "name": "breed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "uint256",
            "name": "chickenLeftTokenId"
          },
          {
            "type": "uint256",
            "name": "chickenRightTokenId"
          },
          {
            "type": "uint256",
            "name": "totalAmount"
          },
          {
            "type": "uint256",
            "name": "amountToVault"
          },
          {
            "type": "uint256",
            "name": "amountToNinuno"
          },
          {
            "type": "uint256",
            "name": "breedingCooldownTime"
          },
          {
            "type": "uint256[][]",
            "name": "feathersData"
          },
          {
            "type": "uint256[][]",
            "name": "resourcesData"
          }
        ]
      },
      {
        "type": "bytes",
        "name": "_sig"
      },
      {
        "type": "string",
        "name": "referralCode"
      }
    ],
    "outputs": []
  },
  {
    "name": "breedBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "uint256[]",
            "name": "chickenLeftTokenIds"
          },
          {
            "type": "uint256[]",
            "name": "chickenRightTokenIds"
          },
          {
            "type": "uint256[]",
            "name": "totalAmounts"
          },
          {
            "type": "uint256[]",
            "name": "amountsToVault"
          },
          {
            "type": "uint256[]",
            "name": "amountsToNinuno"
          },
          {
            "type": "uint256[]",
            "name": "breedingCooldownTimes"
          },
          {
            "type": "uint256[][][]",
            "name": "feathersData"
          },
          {
            "type": "uint256[][][]",
            "name": "resourcesData"
          },
          {
            "type": "bytes[]",
            "name": "signatures"
          }
        ]
      },
      {
        "type": "string",
        "name": "referralCode"
      }
    ],
    "outputs": []
  },
  {
    "name": "chickenBreedCount",
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
    "name": "chickenBreedTime",
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
    "name": "claimNinunoBalance",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "withdrawalRequestId"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bytes",
        "name": "_sig"
      }
    ],
    "outputs": []
  },
  {
    "name": "cock",
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
    "name": "feathers",
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
    "name": "genesis",
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
    "name": "getChickenBreedCountBatch",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokenIds"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getChickenBreedTimeBatch",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokenIds"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
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
        "name": "_cockAddress"
      },
      {
        "type": "address",
        "name": "_genesisAddress"
      },
      {
        "type": "address",
        "name": "_legacyAddress"
      },
      {
        "type": "address",
        "name": "_feathersAddress"
      },
      {
        "type": "address",
        "name": "_resourcesAddress"
      },
      {
        "type": "address",
        "name": "_treasury"
      },
      {
        "type": "address",
        "name": "_signer"
      }
    ],
    "outputs": []
  },
  {
    "name": "isGenesisBatch",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokenIds"
      }
    ],
    "outputs": [
      {
        "type": "bool[]"
      }
    ]
  },
  {
    "name": "isNinunoEligibleBatch",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokenIds"
      }
    ],
    "outputs": [
      {
        "type": "bool[]"
      }
    ]
  },
  {
    "name": "legacy",
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
    "name": "nonceTracker",
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
    "name": "referral",
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
    "name": "resources",
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
    "name": "signer",
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
    "name": "syncBreedingCooldown",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "uint256[]",
        "name": "breedingCooldowns"
      }
    ],
    "outputs": []
  },
  {
    "name": "syncBreedingCount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "uint256[]",
        "name": "breedingCounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "syncUsedNonces",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "nonces"
      },
      {
        "type": "bool[]",
        "name": "used"
      },
      {
        "type": "uint256",
        "name": "nonceTracker_"
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
    "name": "updateReferral",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_referral"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateSigner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_signer"
      }
    ],
    "outputs": []
  },
  {
    "name": "usedNonces",
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
    "name": "usedWithdrawalRequestIds",
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract