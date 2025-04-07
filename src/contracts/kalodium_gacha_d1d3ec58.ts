import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3472,
  address: '0x2b7e3ddd371f4593d3d488e2eff14381d1d3ec58' as const,
  contract_name: 'KalodiumGacha',
  display_name: 'Kalodium Gacha',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1722089098,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_gachaPrice"
      },
      {
        "type": "uint256",
        "name": "_dailyRedeemAmount"
      },
      {
        "type": "address",
        "name": "_kalodiumAddress"
      }
    ]
  },
  {
    "name": "kalodiumUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_manager",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_newKalodium"
      }
    ]
  },
  {
    "name": "playedGacha",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_player",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "_paymentHash"
      },
      {
        "type": "uint256",
        "name": "_price"
      }
    ]
  },
  {
    "name": "priceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_manager",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_newPrice"
      }
    ]
  },
  {
    "name": "redeemAmountUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_manager",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_newPrice"
      }
    ]
  },
  {
    "name": "redeemedDaily",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_player",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_unixTs"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ]
  },
  {
    "name": "dailyRedeemAmount",
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
    "name": "gachaPrice",
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
    "name": "kalodium",
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
    "name": "lastClaimTs",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "unixTs"
      }
    ]
  },
  {
    "name": "paymentCount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "playGacha",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_paymentHash"
      }
    ],
    "outputs": []
  },
  {
    "name": "proofOfPayment",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "redeemDaily",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setDailyRedeemAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "setKalodiumAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_price"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract