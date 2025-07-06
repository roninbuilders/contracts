import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35990,
  address: '0x1892b8e7332d44b847d8f1738dac0c29ca980746' as const,
  contract_name: 'RaffleLibrary',
  display_name: 'Raffle Library',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751466799,
  abi: [
  {
    "name": "RaffleStateChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "active"
      },
      {
        "type": "bool",
        "name": "completed"
      },
      {
        "type": "string",
        "name": "reason"
      }
    ]
  },
  {
    "name": "TicketsPurchased",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "buyer",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "ticketCount"
      },
      {
        "type": "uint256[]",
        "name": "ticketNumbers"
      },
      {
        "type": "uint256",
        "name": "totalCost"
      },
      {
        "type": "uint8",
        "name": "paymentMethod"
      }
    ]
  },
  {
    "name": "MAX_RAFFLE_DURATION",
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
    "name": "MAX_TICKETS_PER_TX",
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
    "name": "MIN_RAFFLE_DURATION",
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
    "name": "MIN_TEST_DURATION",
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
    "name": "MIN_TEST_DURATION_EXTENDED",
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