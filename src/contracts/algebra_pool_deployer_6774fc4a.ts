import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35320,
  address: '0xd7cb0e0692f2d55a17ba81c1fe5501d66774fc4a' as const,
  contract_name: 'AlgebraPoolDeployer',
  display_name: 'Algebra Pool Deployer',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1749134179,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_factory"
      }
    ]
  },
  {
    "name": "deploy",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "plugin"
      },
      {
        "type": "address",
        "name": "token0"
      },
      {
        "type": "address",
        "name": "token1"
      },
      {
        "type": "address",
        "name": "deployer"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "pool"
      }
    ]
  },
  {
    "name": "getDeployParameters",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "_plugin"
      },
      {
        "type": "address",
        "name": "_factory"
      },
      {
        "type": "address",
        "name": "_token0"
      },
      {
        "type": "address",
        "name": "_token1"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract