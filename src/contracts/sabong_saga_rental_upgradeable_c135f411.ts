import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36588,
  address: '0x5c2ff180b1f44343e244b72b3fdbfd7bc135f411' as const,
  contract_name: 'SabongSagaRentalUpgradeable',
  display_name: 'Sabong Saga Rental Upgradeable',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1754666123,
  abi: [
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
    "name": "EnforcedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrChickenDied",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrChickenNotDead",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrChickenNotOwned",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInsuranceAlreadyClaimed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidFeePercentage",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidInsuranceClaim",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidInsurancePrice",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidPayment",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrRentDurationNotExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrRentIdAlreadyUsed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrRentalAlreadyUnlisted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrTransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExpectedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ChickenListedForRent",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "rentId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "chickenId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      }
    ]
  },
  {
    "name": "ChickenRented",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "rentId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "renter",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "expiresAt"
      }
    ]
  },
  {
    "name": "ChickenUnlistedForRent",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "rentId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "chickenId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      }
    ]
  },
  {
    "name": "EmergencyETHRelease",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "FeePercentageUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "oldPercentage"
      },
      {
        "type": "uint256",
        "name": "newPercentage"
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
    "name": "InsuranceClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "rentId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "claimant",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
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
    "name": "claimInsurance",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_rentId"
      }
    ],
    "outputs": []
  },
  {
    "name": "emergencyReleaseETH",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_to"
      }
    ],
    "outputs": []
  },
  {
    "name": "feePercentage",
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
    "name": "feeWallet",
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
    "name": "genesisChicken",
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
    "name": "getRentalInfoBulk",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_rentIds"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "rentId"
          },
          {
            "type": "uint256",
            "name": "chickenId"
          },
          {
            "type": "uint256",
            "name": "ethPrice"
          },
          {
            "type": "uint256",
            "name": "insurancePrice"
          },
          {
            "type": "bool",
            "name": "insuranceClaimed"
          },
          {
            "type": "address",
            "name": "owner"
          },
          {
            "type": "address",
            "name": "renter"
          },
          {
            "type": "uint256",
            "name": "rentDuration"
          },
          {
            "type": "uint256",
            "name": "expiresAt"
          },
          {
            "type": "bool",
            "name": "activeListing"
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
        "name": "_genesisChicken"
      },
      {
        "type": "address",
        "name": "_legacyChicken"
      },
      {
        "type": "address",
        "name": "_feeWallet"
      },
      {
        "type": "uint256",
        "name": "_feePercentage"
      },
      {
        "type": "address",
        "name": "_revShareAddress"
      },
      {
        "type": "uint256",
        "name": "_revSharePercentage"
      },
      {
        "type": "address",
        "name": "_admin"
      }
    ],
    "outputs": []
  },
  {
    "name": "legacyChicken",
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
    "name": "listChickenForRent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_chickenId"
      },
      {
        "type": "uint256",
        "name": "_rentId"
      },
      {
        "type": "uint256",
        "name": "_ethPrice"
      },
      {
        "type": "uint256",
        "name": "_insurancePrice"
      },
      {
        "type": "uint256",
        "name": "_rentDuration"
      },
      {
        "type": "bytes",
        "name": "_signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "listChickenForRentBulk",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_chickenIds"
      },
      {
        "type": "uint256[]",
        "name": "_rentIds"
      },
      {
        "type": "uint256[]",
        "name": "_ethPrices"
      },
      {
        "type": "uint256[]",
        "name": "_insurancePrices"
      },
      {
        "type": "uint256[]",
        "name": "_rentDurations"
      },
      {
        "type": "bytes[]",
        "name": "_signatures"
      }
    ],
    "outputs": []
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
    "name": "rentChicken",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "uint256",
            "name": "rentId"
          },
          {
            "type": "uint256",
            "name": "chickenId"
          },
          {
            "type": "uint256",
            "name": "ethPrice"
          },
          {
            "type": "uint256",
            "name": "insurancePrice"
          },
          {
            "type": "address",
            "name": "renterAddress"
          },
          {
            "type": "address",
            "name": "ownerAddress"
          },
          {
            "type": "bytes",
            "name": "signature"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "rentals",
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
        "name": "rentId"
      },
      {
        "type": "uint256",
        "name": "chickenId"
      },
      {
        "type": "uint256",
        "name": "ethPrice"
      },
      {
        "type": "uint256",
        "name": "insurancePrice"
      },
      {
        "type": "bool",
        "name": "insuranceClaimed"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "renter"
      },
      {
        "type": "uint256",
        "name": "rentDuration"
      },
      {
        "type": "uint256",
        "name": "expiresAt"
      },
      {
        "type": "bool",
        "name": "activeListing"
      }
    ]
  },
  {
    "name": "revShareAddress",
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
    "name": "revSharePercentage",
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
    "name": "setFeePercentage",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newFeePercentage"
      }
    ],
    "outputs": []
  },
  {
    "name": "setFeeWallet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newFeeWallet"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGenesisChicken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_genesisChicken"
      }
    ],
    "outputs": []
  },
  {
    "name": "setLegacyChicken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_legacyChicken"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRevShareAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_revShareAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSigner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newSigner"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTreasuryAddress",
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
    "name": "unlistChickenForRent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_rentId"
      },
      {
        "type": "uint256",
        "name": "_chickenId"
      },
      {
        "type": "bytes",
        "name": "_signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "unlistChickenForRentBulk",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_rentIds"
      },
      {
        "type": "uint256[]",
        "name": "_chickenIds"
      },
      {
        "type": "bytes[]",
        "name": "_signatures"
      }
    ],
    "outputs": []
  },
  {
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract