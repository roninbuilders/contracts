import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 164,
  address: '0x0000000000000000000000000000000000000011' as const,
  contract_name: 'SidechainValidator',
  display_name: 'Sidechain Validator',
  is_deprecated: true,
  is_proxy: false,
  proxy_to: false,
  created_at: undefined,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_acknowledgement"
      },
      {
        "type": "address[]",
        "name": "_validators"
      },
      {
        "type": "uint256",
        "name": "_num"
      },
      {
        "type": "uint256",
        "name": "_denom"
      }
    ]
  },
  {
    "name": "ThresholdUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_id",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_numerator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_denominator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_previousNumerator"
      },
      {
        "type": "uint256",
        "name": "_previousDenominator"
      }
    ]
  },
  {
    "name": "ValidatorAdded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_id",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_validator",
        "indexed": true
      }
    ]
  },
  {
    "name": "ValidatorRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_id",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_validator",
        "indexed": true
      }
    ]
  },
  {
    "name": "acknowledgement",
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
    "name": "addValidator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_id"
      },
      {
        "type": "address",
        "name": "_validator"
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
        "name": "_voteCount"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "denom",
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
    "name": "getValidators",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]",
        "name": "_validators"
      }
    ]
  },
  {
    "name": "isValidator",
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
    "name": "num",
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
    "name": "removeValidator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_id"
      },
      {
        "type": "address",
        "name": "_validator"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateQuorum",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_id"
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
    "name": "validatorCount",
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
    "name": "validators",
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract