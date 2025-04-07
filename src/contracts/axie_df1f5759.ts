import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 201,
  address: '0xb628acacd0eb58b09bf025d80c818166df1f5759' as const,
  contract_name: 'Axie',
  display_name: 'Axie',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1657705369,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldAdmin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_newAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "AdminRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldAdmin",
        "indexed": true
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
    "name": "AxieBreedCountUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_axieId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_breedCount",
        "indexed": true
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
    "name": "AxieSpawn",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_axieId",
        "indexed": true
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
    "name": "AxieggSpawned",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_axieId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_sireId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_matronId",
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
    "name": "MinterAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_minter",
        "indexed": true
      }
    ]
  },
  {
    "name": "MinterRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_minter",
        "indexed": true
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
    "name": "SeederAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_seeder",
        "indexed": true
      }
    ]
  },
  {
    "name": "SeederRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_seeder",
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
    "name": "addMinters",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_addedMinters"
      }
    ],
    "outputs": []
  },
  {
    "name": "addSeeders",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_addedSeeders"
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
    "name": "areAxiesEligibleForPairing",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_sireId"
      },
      {
        "type": "uint256",
        "name": "_matronId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
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
    "name": "breedAxies",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_sireId"
      },
      {
        "type": "uint256",
        "name": "_matronId"
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
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newAdmin"
      }
    ],
    "outputs": []
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
    "name": "getRequirementsForBreeding",
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
        "type": "uint256"
      }
    ]
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
        "name": "_addr"
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
    "name": "minters",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
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
    "name": "preExecutionLogicContract",
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
    "name": "removeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "removeMinters",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_removedMinters"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeSeeders",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_removedSeeders"
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
    "name": "seeders",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
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
    "name": "setAxieBreedLimit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "_axieBreedLimit"
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
    "name": "setBreedingFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_breedingFee"
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
        "name": "_breedingFeeToken"
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
        "name": "_breedingPotion"
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
    "name": "setNeededPotionForBreeding",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_neededPotionForBreeding"
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
    "name": "setPreExecutionLogicContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_preExecutionLogicContract"
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
    "name": "setTokenReceiver",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenReceiver"
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
    "name": "stateOf",
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
        "type": "bytes"
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
        "name": "_interfaceId"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "_supported"
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
    "name": "tokenReceiver",
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