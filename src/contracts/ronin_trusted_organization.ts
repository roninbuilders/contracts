import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2068,
  address: '0xfebc8cfdfd13b69c08ac1b26e1df059260e5130f' as const,
  contract_name: 'RoninTrustedOrganization',
  display_name: 'Ronin Trusted Organization',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1711428461,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "ErrConsensusAddressIsAlreadyAdded",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ]
  },
  {
    "name": "ErrConsensusAddressIsNotAdded",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ]
  },
  {
    "name": "ErrContractTypeNotFound",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      }
    ]
  },
  {
    "name": "ErrDuplicated",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
  },
  {
    "name": "ErrEmptyArray",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrGovernorAddressIsAlreadyAdded",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ]
  },
  {
    "name": "ErrInvalidRequest",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidThreshold",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
  },
  {
    "name": "ErrInvalidVoteWeight",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
  },
  {
    "name": "ErrQueryForDupplicated",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrQueryForNonExistentConsensusAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrUnauthorized",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      },
      {
        "type": "uint8",
        "name": "expectedRole"
      }
    ]
  },
  {
    "name": "ErrUnexpectedInternalCall",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      },
      {
        "type": "uint8",
        "name": "expectedContractType"
      },
      {
        "type": "address",
        "name": "actual"
      }
    ]
  },
  {
    "name": "ErrZeroCodeContract",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ]
  },
  {
    "name": "ConsensusAddressOfTrustedOrgChanged",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "orgAfterChanged",
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
            "name": "__deprecatedBridgeVoter"
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
        "type": "address",
        "name": "oldConsensus"
      }
    ]
  },
  {
    "name": "ContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType",
        "indexed": true
      },
      {
        "type": "address",
        "name": "addr",
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
            "name": "__deprecatedBridgeVoter"
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
            "name": "__deprecatedBridgeVoter"
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
            "name": "__deprecatedBridgeVoter"
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
    "name": "countTrustedOrganization",
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
    "name": "execChangeConsensusAddressForTrustedOrg",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "oldAddr"
      },
      {
        "type": "address",
        "name": "newAddr"
      }
    ],
    "outputs": []
  },
  {
    "name": "getAllTrustedOrganizations",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "list",
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
            "name": "__deprecatedBridgeVoter"
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
    "name": "getConsensusWeight",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consensusAddr"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getConsensusWeightById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "cid"
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
        "name": "list"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getConsensusWeightsById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "cids"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getContract",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "contract_"
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
        "name": "res",
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
            "name": "__deprecatedBridgeVoter"
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
            "name": "__deprecatedBridgeVoter"
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
        "name": "trustedOrgs",
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
            "name": "__deprecatedBridgeVoter"
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
        "name": "num"
      },
      {
        "type": "uint256",
        "name": "denom"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "profileContract"
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
        "name": "list"
      }
    ],
    "outputs": []
  },
  {
    "name": "setContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "contractType"
      },
      {
        "type": "address",
        "name": "addr"
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
    "name": "sumConsensusWeight",
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
    "name": "sumGovernorWeight",
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
    "name": "totalWeight",
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
            "name": "__deprecatedBridgeVoter"
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