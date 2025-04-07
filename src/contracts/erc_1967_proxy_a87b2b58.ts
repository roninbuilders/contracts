import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25623,
  address: '0xbbf6e0d078c7f5750d0732cd8f3eace9a87b2b58' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'ERC1967 Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x4d8100a15d8ae27077e9f8201cc22812b84be2ff',
  created_at: 1739452304,
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
    "name": "FailedInnerCall",
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