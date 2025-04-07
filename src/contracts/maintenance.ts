import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2065,
  address: '0x1966d1facc5feff39a14b7c90d2ff568dc8a54c3' as const,
  contract_name: 'Maintenance',
  display_name: 'Maintenance',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1711428443,
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
    "name": "ErrNotOnMaintenance",
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
    "name": "MaintenanceExited",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
        "indexed": true
      }
    ]
  },
  {
    "name": "MaintenanceScheduleCancelled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "cid",
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
        "name": "cid",
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
        "name": "consensusAddr"
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
        "name": "consensusAddr"
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
        "name": "consensusAddr"
      },
      {
        "type": "uint256",
        "name": "atBlock"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "checkMaintainedById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "candidateId"
      },
      {
        "type": "uint256",
        "name": "atBlock"
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
        "name": "consensusAddr"
      },
      {
        "type": "uint256",
        "name": "fromBlock"
      },
      {
        "type": "uint256",
        "name": "toBlock"
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
        "name": "addrList"
      },
      {
        "type": "uint256",
        "name": "atBlock"
      }
    ],
    "outputs": [
      {
        "type": "bool[]"
      }
    ]
  },
  {
    "name": "checkManyMaintainedById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "idList"
      },
      {
        "type": "uint256",
        "name": "atBlock"
      }
    ],
    "outputs": [
      {
        "type": "bool[]"
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
        "name": "addrList"
      },
      {
        "type": "uint256",
        "name": "fromBlock"
      },
      {
        "type": "uint256",
        "name": "toBlock"
      }
    ],
    "outputs": [
      {
        "type": "bool[]"
      }
    ]
  },
  {
    "name": "checkManyMaintainedInBlockRangeById",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "idList"
      },
      {
        "type": "uint256",
        "name": "fromBlock"
      },
      {
        "type": "uint256",
        "name": "toBlock"
      }
    ],
    "outputs": [
      {
        "type": "bool[]"
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
        "name": "consensusAddr"
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
    "name": "exitMaintenance",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "consensusAddr"
      }
    ],
    "outputs": []
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
        "name": "consensusAddr"
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
        "name": "validatorContract"
      },
      {
        "type": "uint256",
        "name": "minMaintenanceDurationInBlock_"
      },
      {
        "type": "uint256",
        "name": "maxMaintenanceDurationInBlock_"
      },
      {
        "type": "uint256",
        "name": "minOffsetToStartSchedule_"
      },
      {
        "type": "uint256",
        "name": "maxOffsetToStartSchedule_"
      },
      {
        "type": "uint256",
        "name": "maxSchedule_"
      },
      {
        "type": "uint256",
        "name": "cooldownSecsToMaintain_"
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
    "name": "initializeV3",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "profileContract_"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV4",
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
        "name": "consensusAddr"
      },
      {
        "type": "uint256",
        "name": "startedAtBlock"
      },
      {
        "type": "uint256",
        "name": "endedAtBlock"
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
        "name": "minMaintenanceDurationInBlock_"
      },
      {
        "type": "uint256",
        "name": "maxMaintenanceDurationInBlock_"
      },
      {
        "type": "uint256",
        "name": "minOffsetToStartSchedule_"
      },
      {
        "type": "uint256",
        "name": "maxOffsetToStartSchedule_"
      },
      {
        "type": "uint256",
        "name": "maxSchedule_"
      },
      {
        "type": "uint256",
        "name": "cooldownSecsToMaintain_"
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
        "name": "count"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract