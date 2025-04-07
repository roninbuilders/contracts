import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27676,
  address: '0xff0000b6c4352714cce809000d0cd30a0e0c8dce' as const,
  contract_name: 'TrustedForwarderFactory',
  display_name: 'Trusted Forwarder Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742222786,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "trustedForwarderImplementation_"
      }
    ]
  },
  {
    "name": "TrustedForwarderFactory__TrustedForwarderInitFailed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "address",
        "name": "appSigner"
      }
    ]
  },
  {
    "name": "TrustedForwarderCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "creator",
        "indexed": true
      },
      {
        "type": "address",
        "name": "trustedForwarder",
        "indexed": true
      }
    ]
  },
  {
    "name": "cloneTrustedForwarder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "address",
        "name": "appSigner"
      },
      {
        "type": "bytes32",
        "name": "salt"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "trustedForwarder"
      }
    ]
  },
  {
    "name": "forwarders",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isTrustedForwarder",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "trustedForwarderImplementation",
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