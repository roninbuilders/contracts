import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35992,
  address: '0x539825f9610f167a13f2897519e4f7b269110049' as const,
  contract_name: 'ValidationLibrary',
  display_name: 'Validation Library',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751466820,
  abi: [
  {
    "name": "ContractPaused",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "reason"
      }
    ]
  },
  {
    "name": "InsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "uint256",
        "name": "required"
      },
      {
        "type": "uint256",
        "name": "available"
      }
    ]
  },
  {
    "name": "InvalidAddress",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      },
      {
        "type": "string",
        "name": "context"
      }
    ]
  },
  {
    "name": "InvalidParameters",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "parameter"
      },
      {
        "type": "string",
        "name": "reason"
      }
    ]
  },
  {
    "name": "InvalidPaymentAmount",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "sent"
      },
      {
        "type": "uint256",
        "name": "required"
      }
    ]
  },
  {
    "name": "InvalidRaffleId",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId"
      }
    ]
  },
  {
    "name": "InvalidTicketCount",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "count"
      },
      {
        "type": "uint256",
        "name": "max"
      }
    ]
  },
  {
    "name": "PrizeNotFunded",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId"
      }
    ]
  },
  {
    "name": "RaffleAlreadyCompleted",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId"
      }
    ]
  },
  {
    "name": "RaffleNotActive",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId"
      }
    ]
  },
  {
    "name": "RaffleNotExpired",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId"
      }
    ]
  },
  {
    "name": "UnauthorizedAccess",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      },
      {
        "type": "string",
        "name": "operation"
      }
    ]
  },
  {
    "name": "VRFRequestFailed",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "reason"
      }
    ]
  },
  {
    "name": "MAX_ARRAY_LENGTH",
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
    "name": "MAX_OWNERS",
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
    "name": "MAX_TICKET_PRICE",
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
    "name": "MIN_TICKET_PRICE",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract