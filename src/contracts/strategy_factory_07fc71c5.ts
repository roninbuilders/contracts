import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37614,
  address: '0xb7673629d70a6e4de8d543d1a575cf3e07fc71c5' as const,
  contract_name: 'StrategyFactory',
  display_name: 'Strategy Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1761491683,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "OwnableInvalidOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "OwnableUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "ContractsDeployed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "feeCollectorAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "deployer",
        "indexed": true
      },
      {
        "type": "string",
        "name": "tokenName"
      },
      {
        "type": "string",
        "name": "tokenSymbol"
      },
      {
        "type": "uint256",
        "name": "tokenSupply"
      },
      {
        "type": "address",
        "name": "collection721Address"
      },
      {
        "type": "address",
        "name": "teamWallet1"
      },
      {
        "type": "address",
        "name": "teamWallet2"
      },
      {
        "type": "address",
        "name": "teamWallet3"
      },
      {
        "type": "address",
        "name": "operatorAddress"
      },
      {
        "type": "address",
        "name": "strategyOwner"
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
    "name": "deployStrategyEcosystem",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "string",
            "name": "tokenName"
          },
          {
            "type": "string",
            "name": "tokenSymbol"
          },
          {
            "type": "uint256",
            "name": "tokenSupply"
          },
          {
            "type": "address",
            "name": "collection721Address"
          },
          {
            "type": "address",
            "name": "teamWallet1"
          },
          {
            "type": "address",
            "name": "teamWallet2"
          },
          {
            "type": "address",
            "name": "teamWallet3"
          },
          {
            "type": "address",
            "name": "operatorAddress"
          },
          {
            "type": "address",
            "name": "strategyOwner"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "address",
        "name": "feeCollectorAddress"
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