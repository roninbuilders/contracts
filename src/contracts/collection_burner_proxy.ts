import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35959,
  address: '0xcc201021b607506ab6390f9bf152cac3ee44fe1b' as const,
  contract_name: 'TransparentProxyOZv4_9_5',
  display_name: 'Collection Burner Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x16074131226bf829bd1e423fb29d127b9ca10260',
  created_at: 1751448471,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "logic"
      },
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ]
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "BeaconUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beacon",
        "indexed": true
      }
    ]
  },
  {
    "name": "Upgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
        "indexed": true
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "BurnFailed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "LengthMismatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "version"
      }
    ]
  },
  {
    "name": "bulkBurn",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "collections"
      },
      {
        "type": "uint256[][]",
        "name": "tokenIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "burn",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract