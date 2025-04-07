import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 136,
  address: '0x84390b8cf3e612e8c80d9ea2e92bcd029151404a' as const,
  contract_name: 'RoninValidator',
  display_name: 'Governance Admin',
  is_deprecated: true,
  is_proxy: false,
  proxy_to: false,
  created_at: 1655882560,
  abi: [
  {
    "name": "ThresholdUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "numerator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "denominator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "previousNumerator"
      },
      {
        "type": "uint256",
        "name": "previousDenominator"
      }
    ]
  },
  {
    "name": "ValidatorsAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce",
        "indexed": true
      },
      {
        "type": "tuple[]",
        "name": "validators",
        "components": [
          {
            "type": "address",
            "name": "validator"
          },
          {
            "type": "address",
            "name": "governor"
          },
          {
            "type": "uint256",
            "name": "weight"
          }
        ]
      }
    ]
  },
  {
    "name": "ValidatorsRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce",
        "indexed": true
      },
      {
        "type": "address[]",
        "name": "validators"
      }
    ]
  },
  {
    "name": "ValidatorsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce",
        "indexed": true
      },
      {
        "type": "tuple[]",
        "name": "validators",
        "components": [
          {
            "type": "address",
            "name": "validator"
          },
          {
            "type": "address",
            "name": "governor"
          },
          {
            "type": "uint256",
            "name": "weight"
          }
        ]
      }
    ]
  },
  {
    "name": "addValidators",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_validatorList",
        "components": [
          {
            "type": "address",
            "name": "validator"
          },
          {
            "type": "address",
            "name": "governor"
          },
          {
            "type": "uint256",
            "name": "weight"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "checkThreshold",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_voteWeight"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "getGovernorWeight",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_governor"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getGovernors",
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
    "name": "getThreshold",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getValidatorInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "_list",
        "components": [
          {
            "type": "address",
            "name": "validator"
          },
          {
            "type": "address",
            "name": "governor"
          },
          {
            "type": "uint256",
            "name": "weight"
          }
        ]
      }
    ]
  },
  {
    "name": "getValidatorWeight",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_validator"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getValidators",
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_initValidators",
        "components": [
          {
            "type": "address",
            "name": "validator"
          },
          {
            "type": "address",
            "name": "governor"
          },
          {
            "type": "uint256",
            "name": "weight"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "_numerator"
      },
      {
        "type": "uint256",
        "name": "_denominator"
      }
    ],
    "outputs": []
  },
  {
    "name": "minimumVoteWeight",
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
    "name": "nonce",
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
    "name": "removeValidators",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_validatorList"
      }
    ],
    "outputs": []
  },
  {
    "name": "setThreshold",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_numerator"
      },
      {
        "type": "uint256",
        "name": "_denominator"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_previousNum"
      },
      {
        "type": "uint256",
        "name": "_previousDenom"
      }
    ]
  },
  {
    "name": "sumGovernorWeights",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "_addrList"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_weight"
      }
    ]
  },
  {
    "name": "sumValidatorWeights",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "_addrList"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_weight"
      }
    ]
  },
  {
    "name": "totalValidators",
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
    "name": "totalWeights",
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
    "name": "updateValidators",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_validatorList",
        "components": [
          {
            "type": "address",
            "name": "validator"
          },
          {
            "type": "address",
            "name": "governor"
          },
          {
            "type": "uint256",
            "name": "weight"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "validators",
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
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "validator"
          },
          {
            "type": "address",
            "name": "governor"
          },
          {
            "type": "uint256",
            "name": "weight"
          }
        ]
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract