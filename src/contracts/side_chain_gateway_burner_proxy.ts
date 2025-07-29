import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 215,
  address: '0xe35d62ebe18413d96ca2a2f7cf215bb21a406b4b' as const,
  contract_name: 'SidechainGatewayProxy',
  display_name: 'Side Chain Gateway Burner Proxy',
  is_deprecated: true,
  is_proxy: true,
  proxy_to: '0x000000000000000000000000000000000000dead',
  created_at: 1611574123,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_proxyTo"
      },
      {
        "type": "address",
        "name": "_registry"
      },
      {
        "type": "uint256",
        "name": "_maxPendingWithdrawal"
      }
    ]
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldAdmin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_newAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "AdminRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "Paused",
    "type": "event",
    "inputs": []
  },
  {
    "name": "ProxyUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_new",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_old",
        "indexed": true
      }
    ]
  },
  {
    "name": "RequestTokenWithdrawalSigAgain",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_withdrawalId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_tokenAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_mainchainAddress"
      },
      {
        "type": "uint32",
        "name": "_standard"
      },
      {
        "type": "uint256",
        "name": "_tokenNumber"
      }
    ]
  },
  {
    "name": "TokenDeposited",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "depositId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "tokenAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenNumber"
      }
    ]
  },
  {
    "name": "TokenWithdrew",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_withdrawId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_tokenAddress",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_mainchainAddress"
      },
      {
        "type": "uint32",
        "name": "_standard"
      },
      {
        "type": "uint256",
        "name": "_tokenNumber"
      }
    ]
  },
  {
    "name": "Unpaused",
    "type": "event",
    "inputs": []
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "admin",
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
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "deposits",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "tokenNumber"
      }
    ]
  },
  {
    "name": "implementation",
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
    "name": "maxPendingWithdrawal",
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
    "name": "pause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "paused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "proxyType",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "registry",
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
    "name": "removeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "updateMaxPendingWithdrawal",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_maxPendingWithdrawal"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateProxyTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newProxyTo"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateRegistry",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_registry"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawalCount",
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
    "name": "withdrawalSig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "withdrawalSigners",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "withdrawals",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "address",
        "name": "mainchainAddress"
      },
      {
        "type": "uint32",
        "name": "standard"
      },
      {
        "type": "uint256",
        "name": "tokenNumber"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract