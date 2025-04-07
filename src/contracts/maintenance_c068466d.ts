import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 125,
  address: '0x44dcc40067233d3e45b93951184fb389c068466d' as const,
  contract_name: 'Maintenance',
  display_name: 'Maintenance',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1679636489,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "ErrCallerMustBeValidatorContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrZeroCodeContract",
    "type": "error",
    "inputs": []
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
    "name": "MaintenanceConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "minMaintenanceDurationInBlock"
      },
      {
        "type": "uint256",
        "name": "maxMaintenanceDurationInBlock"
      },
      {
        "type": "uint256",
        "name": "minOffsetToStartSchedule"
      },
      {
        "type": "uint256",
        "name": "maxOffsetToStartSchedule"
      },
      {
        "type": "uint256",
        "name": "maxSchedules"
      },
      {
        "type": "uint256",
        "name": "cooldownSecsToMaintain"
      }
    ]
  },
  {
    "name": "MaintenanceScheduleCancelled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "consensusAddr",
        "indexed": true
      }
    ]
  },
  {
    "name": "MaintenanceScheduled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "consensusAddr",
        "indexed": true
      },
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "from"
          },
          {
            "type": "uint256",
            "name": "to"
          },
          {
            "type": "uint256",
            "name": "lastUpdatedBlock"
          },
          {
            "type": "uint256",
            "name": "requestTimestamp"
          }
        ]
      }
    ]
  },
  {
    "name": "ValidatorContractUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "cancelSchedule",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_consensusAddr"
      }
    ],
    "outputs": []
  },
  {
    "name": "checkCooldownEnds",
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
        "type": "bool"
      }
    ]
  },
  {
    "name": "checkMaintained",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_consensusAddr"
      },
      {
        "type": "uint256",
        "name": "_block"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "checkMaintainedInBlockRange",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_consensusAddr"
      },
      {
        "type": "uint256",
        "name": "_fromBlock"
      },
      {
        "type": "uint256",
        "name": "_toBlock"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "checkManyMaintained",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "_addrList"
      },
      {
        "type": "uint256",
        "name": "_block"
      }
    ],
    "outputs": [
      {
        "type": "bool[]",
        "name": "_resList"
      }
    ]
  },
  {
    "name": "checkManyMaintainedInBlockRange",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "_addrList"
      },
      {
        "type": "uint256",
        "name": "_fromBlock"
      },
      {
        "type": "uint256",
        "name": "_toBlock"
      }
    ],
    "outputs": [
      {
        "type": "bool[]",
        "name": "_resList"
      }
    ]
  },
  {
    "name": "checkScheduled",
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
        "type": "bool"
      }
    ]
  },
  {
    "name": "cooldownSecsToMaintain",
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
    "name": "getSchedule",
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
            "type": "uint256",
            "name": "from"
          },
          {
            "type": "uint256",
            "name": "to"
          },
          {
            "type": "uint256",
            "name": "lastUpdatedBlock"
          },
          {
            "type": "uint256",
            "name": "requestTimestamp"
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
        "type": "address",
        "name": "__validatorContract"
      },
      {
        "type": "uint256",
        "name": "_minMaintenanceDurationInBlock"
      },
      {
        "type": "uint256",
        "name": "_maxMaintenanceDurationInBlock"
      },
      {
        "type": "uint256",
        "name": "_minOffsetToStartSchedule"
      },
      {
        "type": "uint256",
        "name": "_maxOffsetToStartSchedule"
      },
      {
        "type": "uint256",
        "name": "_maxSchedules"
      },
      {
        "type": "uint256",
        "name": "_cooldownSecsToMaintain"
      }
    ],
    "outputs": []
  },
  {
    "name": "maxMaintenanceDurationInBlock",
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
    "name": "maxOffsetToStartSchedule",
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
    "name": "maxSchedules",
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
    "name": "minMaintenanceDurationInBlock",
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
    "name": "minOffsetToStartSchedule",
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
    "name": "schedule",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_consensusAddr"
      },
      {
        "type": "uint256",
        "name": "_startedAtBlock"
      },
      {
        "type": "uint256",
        "name": "_endedAtBlock"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMaintenanceConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_minMaintenanceDurationInBlock"
      },
      {
        "type": "uint256",
        "name": "_maxMaintenanceDurationInBlock"
      },
      {
        "type": "uint256",
        "name": "_minOffsetToStartSchedule"
      },
      {
        "type": "uint256",
        "name": "_maxOffsetToStartSchedule"
      },
      {
        "type": "uint256",
        "name": "_maxSchedules"
      },
      {
        "type": "uint256",
        "name": "_cooldownSecsToMaintain"
      }
    ],
    "outputs": []
  },
  {
    "name": "setValidatorContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_addr"
      }
    ],
    "outputs": []
  },
  {
    "name": "totalSchedules",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "_count"
      }
    ]
  },
  {
    "name": "validatorContract",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract