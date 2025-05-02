import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27613,
  address: '0x1d44ffbd7b56f183137234be347b84883ac75d53' as const,
  contract_name: 'LiquidProxy',
  display_name: 'Liquid Proxy',
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
        "name": "_roninStaking"
      },
      {
        "type": "address",
        "name": "_wron"
      },
      {
        "type": "address",
        "name": "_vault"
      }
    ]
  },
  {
    "name": "ErrNotVault",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrSameAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrWithdrawFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "delegateAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_amounts"
      },
      {
        "type": "address[]",
        "name": "_consensusAddrs"
      }
    ],
    "outputs": []
  },
  {
    "name": "harvest",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_consensusAddrs"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "harvestAndDelegateRewards",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "_consensusAddrs"
      },
      {
        "type": "address",
        "name": "_consensusAddrDst"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "lastDelegatingTimestamp",
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
    "name": "redelegateAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_amounts"
      },
      {
        "type": "address[]",
        "name": "_consensusAddrsSrc"
      },
      {
        "type": "address[]",
        "name": "_consensusAddrsDst"
      }
    ],
    "outputs": []
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
    "name": "undelegateAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "_amounts"
      },
      {
        "type": "address[]",
        "name": "_consensusAddrs"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "vault",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract