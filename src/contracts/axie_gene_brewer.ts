import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 220,
  address: '0x54e91daf9362900f94d32bd084beff4bdb73ea62' as const,
  contract_name: 'AxieGeneBrewer',
  display_name: 'Axie Gene Brewer',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1619683208,
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
    "name": "addBreedingEvent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_breedingEvent"
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
    "name": "breedingEvents",
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
    "name": "brew",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_axieId"
      },
      {
        "type": "uint256",
        "name": "_birthDate"
      },
      {
        "type": "tuple",
        "name": "_sireGenes",
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
        "name": "_matronGenes",
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
        "type": "uint256",
        "name": "_initialSeed"
      }
    ],
    "outputs": [
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
    "name": "isAgamoGenes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
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
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "mutableBodies",
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
    "name": "partDetailRandomRatio",
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
    "name": "partGeneDetails",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "peekOffspringGenes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_axieId"
      },
      {
        "type": "uint256",
        "name": "_birthDate"
      },
      {
        "type": "tuple",
        "name": "_sireGenes",
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
        "name": "_matronGenes",
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
        "type": "uint256",
        "name": "_initialSeed"
      }
    ],
    "outputs": [
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
    "name": "removeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "removeBreedingEvent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_index"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMutableBodies",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_bodies"
      },
      {
        "type": "bool",
        "name": "_approve"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPartDetailRandomRatio",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_partDetailRandomRatio"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPartGeneDetails",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_partType"
      },
      {
        "type": "uint256[]",
        "name": "_partGeneDetails"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract