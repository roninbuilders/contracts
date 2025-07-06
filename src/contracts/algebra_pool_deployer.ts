import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35998,
  address: '0x13bbca722f42652227d52141cbc97924dc9d3866' as const,
  contract_name: 'AlgebraPoolDeployer',
  display_name: 'Algebra Pool Deployer',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1751631361,
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