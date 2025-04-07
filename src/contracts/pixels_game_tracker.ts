import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 998,
  address: '0x02790f32ad7e7eaaecfb0ad21950829932f1a2ee' as const,
  contract_name: 'PixelsGameTracker',
  display_name: 'Pixels Game Tracker',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1698084336,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "DailyLogDone",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "userAddress"
      },
      {
        "type": "uint256",
        "name": "blockTimestamp"
      },
      {
        "type": "string",
        "name": "uid"
      }
    ]
  },
  {
    "name": "_userDays",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "_userUid",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "dailyLog",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "uid"
      }
    ],
    "outputs": []
  },
  {
    "name": "hasSignInToday",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "userAddress"
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