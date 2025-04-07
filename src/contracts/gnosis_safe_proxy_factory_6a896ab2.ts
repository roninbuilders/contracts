import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 234,
  address: '0xa6b71e26c5e0845f74c812102ca7114b6a896ab2' as const,
  contract_name: 'GnosisSafeProxyFactory',
  display_name: 'Gnosis Safe Proxy Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1635392395,
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
    "name": "createProxy",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "singleton"
      },
      {
        "type": "bytes",
        "name": "data"
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
    "name": "createProxyWithCallback",
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
      },
      {
        "type": "address",
        "name": "callback"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract