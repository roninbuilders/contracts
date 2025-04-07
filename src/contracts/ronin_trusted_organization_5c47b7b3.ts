import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 138,
  address: '0x877a15cd0bf1667baab50b4c85fd79125c47b7b3' as const,
  contract_name: 'RoninTrustedOrganization',
  display_name: 'Ronin Trusted Organization',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1679636534,
  abi: [
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
    "name": "TrustedOrganizationsAdded",
    "type": "event",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "orgs",
        "components": [
          {
            "type": "address",
            "name": "consensusAddr"
          },
          {
            "type": "address",
            "name": "governor"
          },
          {
            "type": "address",
            "name": "bridgeVoter"
          },
          {
            "type": "uint256",
            "name": "weight"
          },
          {
            "type": "uint256",
            "name": "addedBlock"
          }
        ]
      }
    ]
  },
  {
    "name": "TrustedOrganizationsRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "orgs"
      }
    ]
  },
  {
    "name": "TrustedOrganizationsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "orgs",
        "components": [
          {
            "type": "address",
            "name": "consensusAddr"
          },
          {
            "type": "address",
            "name": "governor"
          },
          {
            "type": "address",
            "name": "bridgeVoter"
          },
          {
            "type": "uint256",
            "name": "weight"
          },
          {
            "type": "uint256",
            "name": "addedBlock"
          }
        ]
      }
    ]
  },
  {
    "name": "addTrustedOrganizations",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_list",
        "components": [
          {
            "type": "address",
            "name": "consensusAddr"
          },
          {
            "type": "address",
            "name": "governor"
          },
          {
            "type": "address",
            "name": "bridgeVoter"
          },
          {
            "type": "uint256",
            "name": "weight"
          },
          {
            "type": "uint256",
            "name": "addedBlock"
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
    "name": "countTrustedOrganizations",
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
    "name": "getAllTrustedOrganizations",
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
            "name": "consensusAddr"
          },
          {
            "type": "address",
            "name": "governor"
          },
          {
            "type": "address",
            "name": "bridgeVoter"
          },
          {
            "type": "uint256",
            "name": "weight"
          },
          {
            "type": "uint256",
            "name": "addedBlock"
          }
        ]
      }
    ]
  },
  {
    "name": "getBridgeVoterWeight",
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
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getBridgeVoterWeights",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "_list"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "_res"
      }
    ]
  },
  {
    "name": "getConsensusWeight",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_consensusAddr"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getConsensusWeights",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "_list"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "_res"
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
    "name": "getGovernorWeights",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "_list"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "_res"
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
        "type": "uint256",
        "name": "num_"
      },
      {
        "type": "uint256",
        "name": "denom_"
      }
    ]
  },
  {
    "name": "getTrustedOrganization",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_consensusAddr"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "consensusAddr"
          },
          {
            "type": "address",
            "name": "governor"
          },
          {
            "type": "address",
            "name": "bridgeVoter"
          },
          {
            "type": "uint256",
            "name": "weight"
          },
          {
            "type": "uint256",
            "name": "addedBlock"
          }
        ]
      }
    ]
  },
  {
    "name": "getTrustedOrganizationAt",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_idx"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address",
            "name": "consensusAddr"
          },
          {
            "type": "address",
            "name": "governor"
          },
          {
            "type": "address",
            "name": "bridgeVoter"
          },
          {
            "type": "uint256",
            "name": "weight"
          },
          {
            "type": "uint256",
            "name": "addedBlock"
          }
        ]
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
        "name": "_trustedOrgs",
        "components": [
          {
            "type": "address",
            "name": "consensusAddr"
          },
          {
            "type": "address",
            "name": "governor"
          },
          {
            "type": "address",
            "name": "bridgeVoter"
          },
          {
            "type": "uint256",
            "name": "weight"
          },
          {
            "type": "uint256",
            "name": "addedBlock"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "__num"
      },
      {
        "type": "uint256",
        "name": "__denom"
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
    "name": "removeTrustedOrganizations",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_list"
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
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "sumBridgeVoterWeights",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "_list"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_res"
      }
    ]
  },
  {
    "name": "sumConsensusWeights",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "_list"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_res"
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
        "name": "_list"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_res"
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
    "name": "updateTrustedOrganizations",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_list",
        "components": [
          {
            "type": "address",
            "name": "consensusAddr"
          },
          {
            "type": "address",
            "name": "governor"
          },
          {
            "type": "address",
            "name": "bridgeVoter"
          },
          {
            "type": "uint256",
            "name": "weight"
          },
          {
            "type": "uint256",
            "name": "addedBlock"
          }
        ]
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract