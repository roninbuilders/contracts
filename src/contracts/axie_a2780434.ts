import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4539,
  address: '0x861f56cd7069d200f7c4fcb25e66670aa2780434' as const,
  contract_name: 'Axie',
  display_name: 'Axie',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1728656609,
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
    "name": "AxieStageNotReadyToGrow",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      },
      {
        "type": "uint8",
        "name": "stage"
      },
      {
        "type": "uint256",
        "name": "neededDuration"
      }
    ]
  },
  {
    "name": "EmptyGenes",
    "type": "error",
    "inputs": []
  },
  {
    "name": "HoppingAxieAlreadyOwned",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "hoppingAxieId"
      }
    ]
  },
  {
    "name": "InvalidHoppingAxieId",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      },
      {
        "type": "uint256",
        "name": "hoppingAxieId"
      }
    ]
  },
  {
    "name": "InvalidLength",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      }
    ]
  },
  {
    "name": "NonExistentAxie",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      }
    ]
  },
  {
    "name": "NonExistentToken",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "NotAxieAdult",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      }
    ]
  },
  {
    "name": "NotAxiegg",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      }
    ]
  },
  {
    "name": "REP15AlreadyAttachedContext",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "REP15AlreadyDelegatedOwnership",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "delegatee"
      },
      {
        "type": "uint64",
        "name": "until"
      }
    ]
  },
  {
    "name": "REP15ExceededMaxDetachingDuration",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "detachingDuration"
      }
    ]
  },
  {
    "name": "REP15ExistentContext",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash"
      }
    ]
  },
  {
    "name": "REP15InactiveOwnershipDelegation",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "REP15InsufficientApproval",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "address",
        "name": "delegatee"
      }
    ]
  },
  {
    "name": "REP15InvalidBatchLength",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      }
    ]
  },
  {
    "name": "REP15InvalidController",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "controller"
      }
    ]
  },
  {
    "name": "REP15InvalidDelegatee",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "delegatee"
      }
    ]
  },
  {
    "name": "REP15InvalidDelegationExpiration",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "until"
      }
    ]
  },
  {
    "name": "REP15NonexistentAttachedContext",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "REP15NonexistentContext",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash"
      }
    ]
  },
  {
    "name": "REP15NonexistentPendingOwnershipDelegation",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "REP15NotRequestedForDetachment",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "REP15RequestedForDetachment",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "REP15UnreadyForDetachment",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint64",
        "name": "current"
      },
      {
        "type": "uint64",
        "name": "readyAt"
      }
    ]
  },
  {
    "name": "UnauthorizedOperator",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "bytes4",
        "name": "sig"
      }
    ]
  },
  {
    "name": "Approval",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_approved",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_tokenId",
        "indexed": true
      }
    ]
  },
  {
    "name": "ApprovalForAll",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_operator",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "_approved"
      }
    ]
  },
  {
    "name": "AxieEvolved",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_axieId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "_genes",
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
    "name": "AxieLevelUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "level"
      }
    ]
  },
  {
    "name": "AxieMinted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_axieId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "_axie",
        "components": [
          {
            "type": "uint256",
            "name": "sireId"
          },
          {
            "type": "uint256",
            "name": "matronId"
          },
          {
            "type": "uint256",
            "name": "birthDate"
          },
          {
            "type": "tuple",
            "name": "genes",
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
            "type": "uint8",
            "name": "breedCount"
          },
          {
            "type": "uint16",
            "name": "level"
          }
        ]
      }
    ]
  },
  {
    "name": "AxieggMinted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_axieId",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "_axie",
        "components": [
          {
            "type": "uint256",
            "name": "sireId"
          },
          {
            "type": "uint256",
            "name": "matronId"
          },
          {
            "type": "uint256",
            "name": "birthDate"
          },
          {
            "type": "tuple",
            "name": "genes",
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
            "type": "uint8",
            "name": "breedCount"
          },
          {
            "type": "uint16",
            "name": "level"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "_axiegg",
        "components": [
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
      }
    ]
  },
  {
    "name": "BreedingInfoUpdated",
    "type": "event",
    "inputs": [
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
        "name": "axieId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "sireBreedCount"
      },
      {
        "type": "uint8",
        "name": "matronBreedCount"
      },
      {
        "type": "tuple",
        "name": "axiegg",
        "components": [
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
      }
    ]
  },
  {
    "name": "ContextAttached",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      }
    ]
  },
  {
    "name": "ContextDetached",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      }
    ]
  },
  {
    "name": "ContextDetachmentRequested",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      }
    ]
  },
  {
    "name": "ContextLockUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "locked"
      }
    ]
  },
  {
    "name": "ContextUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "controller",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "detachingDuration"
      }
    ]
  },
  {
    "name": "ContextUserAssigned",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
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
    "name": "NonceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_nonce",
        "indexed": true
      }
    ]
  },
  {
    "name": "OwnershipDelegationAccepted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "delegatee",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "until"
      }
    ]
  },
  {
    "name": "OwnershipDelegationStarted",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "delegatee",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "until"
      }
    ]
  },
  {
    "name": "OwnershipDelegationStopped",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "delegatee",
        "indexed": true
      }
    ]
  },
  {
    "name": "Paused",
    "type": "event",
    "inputs": []
  },
  {
    "name": "PermissionSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "address",
        "name": "_operator"
      },
      {
        "type": "bytes4",
        "name": "_funcSig"
      },
      {
        "type": "bool",
        "name": "_approved"
      }
    ]
  },
  {
    "name": "PermissionSetAll",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "address",
        "name": "_operator"
      },
      {
        "type": "bool",
        "name": "_approved"
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
    "name": "SpenderUnwhitelisted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_spender",
        "indexed": true
      }
    ]
  },
  {
    "name": "SpenderWhitelisted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_spender",
        "indexed": true
      }
    ]
  },
  {
    "name": "TokenOperatorSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "address",
        "name": "_operator"
      },
      {
        "type": "bool",
        "name": "_approved"
      }
    ]
  },
  {
    "name": "TokenPermissionSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "address",
        "name": "_operator"
      },
      {
        "type": "bytes4",
        "name": "_funcSig"
      },
      {
        "type": "bool",
        "name": "_approved"
      }
    ]
  },
  {
    "name": "Transfer",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_tokenId",
        "indexed": true
      }
    ]
  },
  {
    "name": "Unpaused",
    "type": "event",
    "inputs": []
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
    "name": "DOMAIN_SEPARATOR",
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
    "name": "DOMAIN_TYPEHASH",
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
    "name": "MINTER_ROLE",
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
    "name": "SEEDER_ROLE",
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
    "name": "acceptOwnershipDelegation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "admin",
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
    "name": "approve",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "attachContext",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "axie",
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
        "name": "sireId"
      },
      {
        "type": "uint256",
        "name": "matronId"
      },
      {
        "type": "uint256",
        "name": "birthDate"
      },
      {
        "type": "tuple",
        "name": "genes",
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
        "type": "uint8",
        "name": "breedCount"
      },
      {
        "type": "uint16",
        "name": "level"
      }
    ]
  },
  {
    "name": "axiegg",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
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
    "name": "balanceOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_balance"
      }
    ]
  },
  {
    "name": "baseTokenURI",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "batchAttachContexts",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "ctxHashes"
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "bytes[]",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "batchGrowAxieggsToAdults",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_axieIds"
      },
      {
        "type": "uint256[]",
        "name": "_seeds"
      }
    ],
    "outputs": []
  },
  {
    "name": "batchMintAxieggs",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_ids"
      },
      {
        "type": "bytes[]",
        "name": "_axiePackages"
      },
      {
        "type": "bytes[]",
        "name": "_axieggPackages"
      },
      {
        "type": "address",
        "name": "_owner"
      }
    ],
    "outputs": []
  },
  {
    "name": "batchMintAxies",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_ids"
      },
      {
        "type": "bytes[]",
        "name": "_packages"
      },
      {
        "type": "address",
        "name": "_owner"
      }
    ],
    "outputs": []
  },
  {
    "name": "createContext",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "controller"
      },
      {
        "type": "uint64",
        "name": "detachingDuration"
      },
      {
        "type": "bytes",
        "name": "ctxMsg"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "ctxHash"
      }
    ]
  },
  {
    "name": "currentAxieId",
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
    "name": "evolveAxie",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_axieId"
      },
      {
        "type": "tuple",
        "name": "_genes",
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
    ],
    "outputs": []
  },
  {
    "name": "execDetachContext",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "geneBrewerContract",
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
    "name": "getApproved",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getAxie",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_axieId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "sireId"
          },
          {
            "type": "uint256",
            "name": "matronId"
          },
          {
            "type": "uint256",
            "name": "birthDate"
          },
          {
            "type": "tuple",
            "name": "genes",
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
            "type": "uint8",
            "name": "breedCount"
          },
          {
            "type": "uint16",
            "name": "level"
          }
        ]
      }
    ]
  },
  {
    "name": "getAxiegg",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_axieId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
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
      }
    ]
  },
  {
    "name": "getContext",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "controller"
      },
      {
        "type": "uint64",
        "name": "detachingDuration"
      }
    ]
  },
  {
    "name": "getContextUser",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "user"
      }
    ]
  },
  {
    "name": "getOwnershipDelegatee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "delegatee"
      },
      {
        "type": "uint64",
        "name": "until"
      }
    ]
  },
  {
    "name": "getOwnershipManager",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "manager"
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
    "name": "growAxieggToAdult",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_axieId"
      },
      {
        "type": "uint256",
        "name": "_seed"
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
    "name": "hoppingAxieId",
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
    "name": "isApprovedForAll",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "address",
        "name": "_operator"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "_approved"
      }
    ]
  },
  {
    "name": "isAttachedWithContext",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isAuthorized",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_operator"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "bytes4",
        "name": "_funcSig"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isFunctionOperatorOfToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "address",
        "name": "_operator"
      },
      {
        "type": "bytes4",
        "name": "_funcSig"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isMinter",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isPermissionSet",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "address",
        "name": "_operator"
      },
      {
        "type": "bytes4",
        "name": "_funcSig"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isPermissionSetAll",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "address",
        "name": "_operator"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isTokenContextLocked",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isTokenOperator",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "address",
        "name": "_operator"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "maxDetachingDuration",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "mintAxie",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "tuple",
        "name": "_axie",
        "components": [
          {
            "type": "uint256",
            "name": "sireId"
          },
          {
            "type": "uint256",
            "name": "matronId"
          },
          {
            "type": "uint256",
            "name": "birthDate"
          },
          {
            "type": "tuple",
            "name": "genes",
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
            "type": "uint8",
            "name": "breedCount"
          },
          {
            "type": "uint16",
            "name": "level"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_axieId"
      }
    ]
  },
  {
    "name": "mintPromoAxie",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_axieId"
      },
      {
        "type": "uint256",
        "name": "_hoppingAxieId"
      },
      {
        "type": "tuple",
        "name": "_axie",
        "components": [
          {
            "type": "uint256",
            "name": "sireId"
          },
          {
            "type": "uint256",
            "name": "matronId"
          },
          {
            "type": "uint256",
            "name": "birthDate"
          },
          {
            "type": "tuple",
            "name": "genes",
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
            "type": "uint8",
            "name": "breedCount"
          },
          {
            "type": "uint16",
            "name": "level"
          }
        ]
      },
      {
        "type": "address",
        "name": "_to"
      }
    ],
    "outputs": []
  },
  {
    "name": "minter",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "minters",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
    "name": "name",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "nonces",
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
    "name": "operatorPermission",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "bytes4"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "ownerOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "_owner"
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
    "name": "pendingOwnershipDelegatee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "delegatee"
      },
      {
        "type": "uint64",
        "name": "until"
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
    "name": "requestDetachContext",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bytes",
        "name": "data"
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
    "name": "safeTransferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_from"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "safeTransferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_from"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ],
    "outputs": []
  },
  {
    "name": "seeder",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "seeders",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
    "name": "setAdultDuration",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_toAdultDuration"
      }
    ],
    "outputs": []
  },
  {
    "name": "setAllPermissionFor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_operator"
      },
      {
        "type": "bool",
        "name": "_approved"
      }
    ],
    "outputs": []
  },
  {
    "name": "setApprovalForAll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_operator"
      },
      {
        "type": "bool",
        "name": "_approved"
      }
    ],
    "outputs": []
  },
  {
    "name": "setAxieLevel",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      },
      {
        "type": "uint16",
        "name": "level"
      }
    ],
    "outputs": []
  },
  {
    "name": "setAxiePartsStage",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "axieId"
      },
      {
        "type": "tuple",
        "name": "newGene",
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
    ],
    "outputs": []
  },
  {
    "name": "setBaseTokenURI",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "_baseTokenURI"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBreedingInfo",
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
      },
      {
        "type": "uint256",
        "name": "axieId"
      }
    ],
    "outputs": []
  },
  {
    "name": "setContextLock",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "bool",
        "name": "lock"
      }
    ],
    "outputs": []
  },
  {
    "name": "setContextUser",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": []
  },
  {
    "name": "setCurrentAxieId",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_currentAxieId"
      }
    ],
    "outputs": []
  },
  {
    "name": "setFunctionOperatorForToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "address",
        "name": "_operator"
      },
      {
        "type": "bytes4",
        "name": "_funcSig"
      },
      {
        "type": "bool",
        "name": "_approved"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGeneBrewerContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_geneBrewerContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "setHoppingAxieIds",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_axieIds"
      },
      {
        "type": "uint256[]",
        "name": "_hoppingAxieIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPermissionFor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_operator"
      },
      {
        "type": "bytes4",
        "name": "_funcSig"
      },
      {
        "type": "bool",
        "name": "_approved"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTokenOperator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId"
      },
      {
        "type": "address",
        "name": "_operator"
      },
      {
        "type": "bool",
        "name": "_approved"
      }
    ],
    "outputs": []
  },
  {
    "name": "stageOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_axieId"
      }
    ],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "startDelegateOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "delegatee"
      },
      {
        "type": "uint64",
        "name": "until"
      }
    ],
    "outputs": []
  },
  {
    "name": "stateOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "stopOwnershipDelegation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
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
    "name": "symbol",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "toAdultDuration",
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
    "name": "tokenByIndex",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_index"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_tokenId"
      }
    ]
  },
  {
    "name": "tokenOfOwnerByIndex",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "uint256",
        "name": "_index"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_tokenId"
      }
    ]
  },
  {
    "name": "tokenPermission",
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
        "type": "bytes4"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "tokenPermissionInfos",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "bytes4",
        "name": "funcSig"
      }
    ]
  },
  {
    "name": "tokenURI",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId"
      }
    ],
    "outputs": [
      {
        "type": "string",
        "name": "_uri"
      }
    ]
  },
  {
    "name": "totalSupply",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "_supply"
      }
    ]
  },
  {
    "name": "transferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_from"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_tokenId"
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
    "name": "unwhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_spender"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateContext",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "ctxHash"
      },
      {
        "type": "address",
        "name": "newController"
      },
      {
        "type": "uint64",
        "name": "newDetachingDuration"
      }
    ],
    "outputs": []
  },
  {
    "name": "version",
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
    "name": "whitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_spender"
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelisted",
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract