import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 945,
  address: '0xca9f10769292f26850333264d618c1b5e91f394d' as const,
  contract_name: 'Maintenance',
  display_name: 'Maintenance',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1697443023,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "ErrAlreadyOnMaintenance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrAlreadyScheduled",
    "type": "error",
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
    "name": "ErrCooldownTimeNotYetEnded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrEndBlockOutOfRange",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidMaintenanceDuration",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidMaintenanceDurationConfig",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrInvalidOffsetToStartScheduleConfigs",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrStartBlockOutOfRange",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrTotalOfSchedulesExceeded",
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
    "name": "ErrUnexistedSchedule",
    "type": "error",
    "inputs": []
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
    "name": "checkCooldownEnded",
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
    "name": "initializeV2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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
    "name": "maxSchedule",
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
    "name": "totalSchedule",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "_count"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract