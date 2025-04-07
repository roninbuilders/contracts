import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25540,
  address: '0x02f376fe3e11634a866d2087f01427b09a235599' as const,
  contract_name: 'GnosisSafeProxyFactory',
  display_name: 'Gnosis Safe Proxy Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739354524,
  abi: [
  {
    "name": "ProxyCreation",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "proxy"
      },
      {
        "type": "address",
        "name": "singleton"
      }
    ]
  },
  {
    "name": "calculateCreateProxyWithNonceAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_singleton"
      },
      {
        "type": "bytes",
        "name": "initializer"
      },
      {
        "type": "uint256",
        "name": "saltNonce"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "safe"
      }
    ]
  },
  {
    "name": "createProxyWithNonce",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_singleton"
      },
      {
        "type": "bytes",
        "name": "initializer"
      },
      {
        "type": "uint256",
        "name": "saltNonce"
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
    "name": "proxyCreationCode",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "proxyRuntimeCode",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "userToProxy",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract