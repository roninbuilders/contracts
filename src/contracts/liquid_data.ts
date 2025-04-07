import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27610,
  address: '0x993f79d35fad8fbbdad845f1c6e05217f5466452' as const,
  contract_name: 'LiquidData',
  display_name: 'Liquid Data',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742078493,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_liquidRon"
      },
      {
        "type": "address",
        "name": "_profile"
      },
      {
        "type": "address",
        "name": "_roninStaking"
      },
      {
        "type": "address",
        "name": "_validatorSet"
      }
    ]
  },
  {
    "name": "getStakingProxies",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getStats",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "tvl"
          },
          {
            "type": "uint256",
            "name": "lRONSupply"
          },
          {
            "type": "uint256",
            "name": "totalStaked"
          },
          {
            "type": "uint256",
            "name": "utilisation"
          },
          {
            "type": "uint256",
            "name": "totalRewards"
          },
          {
            "type": "uint256",
            "name": "totalProxies"
          },
          {
            "type": "tuple[]",
            "name": "data",
            "components": [
              {
                "type": "address",
                "name": "consensus"
              },
              {
                "type": "uint256",
                "name": "staked"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "getUserRequestWithdrawals",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "reqs",
        "components": [
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256",
            "name": "epoch"
          },
          {
            "type": "uint8",
            "name": "status"
          }
        ]
      }
    ]
  },
  {
    "name": "liquid",
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
    "name": "profile",
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
    "name": "roninStaking",
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
    "name": "startIndex",
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
    "name": "syncRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "trackedIndex",
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
    "name": "trackedRewards",
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
    "name": "validatorSet",
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