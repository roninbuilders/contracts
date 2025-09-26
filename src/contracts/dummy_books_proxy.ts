import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37138,
  address: '0x11f8f0f9480979e2040968329e82f06996ba6474' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Dummy Books Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x72f23fec25b04a9081f14f663936a2b53d03023f',
  created_at: 1758589871,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ]
  },
  {
    "name": "AddressEmptyCode",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ]
  },
  {
    "name": "ERC1967InvalidImplementation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      }
    ]
  },
  {
    "name": "ERC1967NonPayable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedCall",
    "type": "error",
    "inputs": []
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract