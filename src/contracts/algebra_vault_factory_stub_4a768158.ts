import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35322,
  address: '0x955b95b8532fe75ddcf2161f61127be74a768158' as const,
  contract_name: 'AlgebraVaultFactoryStub',
  display_name: 'Algebra Vault Factory Stub',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1749134197,
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