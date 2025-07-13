import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35999,
  address: '0x8abbf3bc5c50b61d21a864e6e0c2560c0cd58636' as const,
  contract_name: 'AlgebraVaultFactoryStub',
  display_name: 'Algebra Vault Factory Stub',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751631376,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_algebraCommunityVault"
      }
    ]
  },
  {
    "name": "createVaultForPool",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "defaultAlgebraCommunityVault",
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
    "name": "getVaultForPool",
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