import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 976,
  address: '0x273cda3afe17eb7bcb028b058382a9010ae82b24' as const,
  contract_name: 'TransparentUpgradeableProxyV2',
  display_name: 'Bridge Slash Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xfc274ec92bbb1a1472884558d1b5caac6f8220ee',
  created_at: 1697614106,
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
    "name": "functionDelegateCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes",
        "name": "_data"
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
    "stateMutability": "payable",
    "inputs": []
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
    "name": "ErrLengthMismatch",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "msgSig"
      }
    ]
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
    "name": "BridgeSlashed",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "tier",
        "indexed": true
      },
      {
        "type": "address",
        "name": "bridgeOperator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "period",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "slashUntilPeriod"
      }
    ]
  },
  {
    "name": "BridgeTrackingIncorrectlyResponded",
    "type": "event",
    "inputs": []
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
    "name": "RemovalRequested",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "period",
        "indexed": true
      },
      {
        "type": "address",
        "name": "bridgeOperator",
        "indexed": true
      }
    ]
  },
  {
    "name": "MINIMUM_VOTE_THRESHOLD",
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
    "name": "REMOVE_DURATION_THRESHOLD",
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
    "name": "TIER_1_PENALTY_DURATION",
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
    "name": "TIER_2_PENALTY_DURATION",
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
    "name": "execSlashBridgeOperators",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "operators"
      },
      {
        "type": "uint256[]",
        "name": "ballots"
      },
      {
        "type": "uint256",
        "name": "totalBallot"
      },
      {
        "type": "uint256",
        "name": "totalVote"
      },
      {
        "type": "uint256",
        "name": "period"
      }
    ],
    "outputs": []
  },
  {
    "name": "getAddedPeriodOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "bridgeOperators"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "addedPeriods"
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
    "name": "getPenaltyDurations",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "penaltyDurations"
      }
    ]
  },
  {
    "name": "getSlashTier",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint256",
        "name": "ballot"
      },
      {
        "type": "uint256",
        "name": "totalVote"
      }
    ],
    "outputs": [
      {
        "type": "uint8",
        "name": "tier"
      }
    ]
  },
  {
    "name": "getSlashUntilPeriodOf",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "bridgeOperators"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "untilPeriods"
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
        "name": "validatorContract"
      },
      {
        "type": "address",
        "name": "bridgeManagerContract"
      },
      {
        "type": "address",
        "name": "bridgeTrackingContract"
      },
      {
        "type": "address",
        "name": "dposGA"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeREP2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "onBridgeOperatorsAdded",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "bridgeOperators"
      },
      {
        "type": "uint96[]"
      },
      {
        "type": "bool[]",
        "name": "addeds"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
      }
    ]
  },
  {
    "name": "onBridgeOperatorsRemoved",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]"
      },
      {
        "type": "bool[]"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
      }
    ]
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
    "name": "supportsInterface",
    "type": "function",
    "stateMutability": "pure",
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract