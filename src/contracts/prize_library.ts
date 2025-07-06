import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35991,
  address: '0x1b9627a5c9f8cf289d0ececf115d670a1e1108fc' as const,
  contract_name: 'PrizeLibrary',
  display_name: 'Prize Library',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751473213,
  abi: [
  {
    "name": "PrizeConfigured",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "prizeType"
      },
      {
        "type": "uint256",
        "name": "fdAmount"
      },
      {
        "type": "uint256",
        "name": "nftTokenId"
      }
    ]
  },
  {
    "name": "PrizeDistributed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "winner",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "prizeType"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "PrizeFundingVerified",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "raffleId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "poolAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "requiredBalance"
      },
      {
        "type": "uint256",
        "name": "actualBalance"
      }
    ]
  },
  {
    "name": "FIRE_DUST_TOKEN_ID",
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
    "name": "MAX_PRIZE_VALUE",
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
    "name": "MIN_PRIZE_VALUE",
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