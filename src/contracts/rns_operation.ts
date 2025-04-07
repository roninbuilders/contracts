import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1873,
  address: '0xcd245263eddee593a5a66f93f74c58c544957339' as const,
  contract_name: 'RNSOperation',
  display_name: 'RNS Operation',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1710307789,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "rns_"
      },
      {
        "type": "address",
        "name": "resolver_"
      },
      {
        "type": "address",
        "name": "auction_"
      },
      {
        "type": "address",
        "name": "domainPrice_"
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
    "name": "auction",
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
    "name": "bulkMint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "tos"
      },
      {
        "type": "string[]",
        "name": "labels"
      },
      {
        "type": "uint64",
        "name": "duration"
      }
    ],
    "outputs": []
  },
  {
    "name": "bulkOverrideRenewalFees",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string[]",
        "name": "labels"
      },
      {
        "type": "uint256[]",
        "name": "yearlyUSDPrices"
      }
    ],
    "outputs": []
  },
  {
    "name": "bulkOverrideTiers",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string[]",
        "name": "labels"
      },
      {
        "type": "uint8[]",
        "name": "tiers"
      }
    ],
    "outputs": []
  },
  {
    "name": "bulkSetProtected",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string[]",
        "name": "labels"
      },
      {
        "type": "bool",
        "name": "shouldProtect"
      }
    ],
    "outputs": []
  },
  {
    "name": "domainPrice",
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
    "name": "reclaimUnbiddedNames",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "tos"
      },
      {
        "type": "string[]",
        "name": "labels"
      },
      {
        "type": "bool",
        "name": "allowFailure"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "resolver",
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
    "name": "rns",
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
    "name": "toIds",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "string[]",
        "name": "labels"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "ids"
      }
    ]
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