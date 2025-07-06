import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 33064,
  address: '0x6bf49dec20ef49513948efa1e7073523e0ea222b' as const,
  contract_name: 'Create3Factory',
  display_name: 'Create 3 Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744336932,
  abi: [
  {
    "name": "deploy",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "bytes",
        "name": "creationCode"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "deployed"
      }
    ]
  },
  {
    "name": "getDeployed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "deployer"
      },
      {
        "type": "bytes32",
        "name": "salt"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "deployed"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract