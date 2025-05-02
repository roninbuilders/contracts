import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 32939,
  address: '0x7e6c760e3f99e478cfb92387976fef30def5f594' as const,
  contract_name: 'TamaBell',
  display_name: 'Tama Bell',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744228382,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_mokiNFT"
      }
    ]
  },
  {
    "name": "ArrayLengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidId",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidShiftCount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "LockPeriodNotOver",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MokiAlreadyLocked",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MokiNotLocked",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MaxShiftsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMax"
      }
    ]
  },
  {
    "name": "MokiEndedShift",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "mokiId",
        "indexed": true
      }
    ]
  },
  {
    "name": "MokiExtendedShift",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "mokiId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "additionalShifts"
      }
    ]
  },
  {
    "name": "MokiStartedShift",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "mokiId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "shifts"
      }
    ]
  },
  {
    "name": "OwnershipTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousOwner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true
      }
    ]
  },
  {
    "name": "ShiftDurationUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newDuration"
      }
    ]
  },
  {
    "name": "newMokiNFTContract",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_mokiNFT"
      }
    ]
  },
  {
    "name": "endShift",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_mokiId"
      }
    ],
    "outputs": []
  },
  {
    "name": "endShiftBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_mokiIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "extendShift",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_mokiId"
      },
      {
        "type": "uint256",
        "name": "_additionalShifts"
      }
    ],
    "outputs": []
  },
  {
    "name": "extendShiftBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_mokiIds"
      },
      {
        "type": "uint256[]",
        "name": "_additionalShifts"
      }
    ],
    "outputs": []
  },
  {
    "name": "forceEndShift",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_mokiIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "getShiftDetails",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_mokiIds"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "startTime"
          },
          {
            "type": "uint256",
            "name": "lockEndTime"
          }
        ]
      }
    ]
  },
  {
    "name": "getShiftTimeRemaining",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_mokiIds"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "lockInfo",
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
        "name": "startTime"
      },
      {
        "type": "uint256",
        "name": "lockEndTime"
      }
    ]
  },
  {
    "name": "maxShifts",
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
    "name": "mokiNFT",
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
    "name": "owner",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setMaxShifts",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_maxShifts"
      }
    ],
    "outputs": []
  },
  {
    "name": "setMokiNFTContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newMokiNFT"
      }
    ],
    "outputs": []
  },
  {
    "name": "setShiftDuration",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_shiftDuration"
      }
    ],
    "outputs": []
  },
  {
    "name": "shiftDuration",
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
    "name": "startShift",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_mokiId"
      },
      {
        "type": "uint256",
        "name": "_shifts"
      }
    ],
    "outputs": []
  },
  {
    "name": "startShiftBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_mokiIds"
      },
      {
        "type": "uint256[]",
        "name": "_shifts"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newOwner"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract