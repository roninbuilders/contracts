import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25622,
  address: '0x1dce40dc2afa7131c4838c8bff635ae9d198d1ce' as const,
  contract_name: 'Api3ReaderProxyV1Factory',
  display_name: 'Api 3 Reader Proxy V1 Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739452292,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "initialOwner"
      },
      {
        "type": "address",
        "name": "api3ServerV1OevExtension_"
      }
    ]
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
    "name": "DeployedApi3ReaderProxyV1",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "proxy",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "dapiName"
      },
      {
        "type": "uint256",
        "name": "dappId"
      },
      {
        "type": "bytes",
        "name": "metadata"
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
    "name": "api3ServerV1OevExtension",
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
    "name": "computeApi3ReaderProxyV1Address",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName"
      },
      {
        "type": "uint256",
        "name": "dappId"
      },
      {
        "type": "bytes",
        "name": "metadata"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "proxy"
      }
    ]
  },
  {
    "name": "deployApi3ReaderProxyV1",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName"
      },
      {
        "type": "uint256",
        "name": "dappId"
      },
      {
        "type": "bytes",
        "name": "metadata"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "proxy"
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