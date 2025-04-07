import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2816,
  address: '0x6d3aef8815e89e9117179d36673bf7584825db7d' as const,
  contract_name: 'ERC1967ProxyFactory',
  display_name: 'ERC1967 Proxy Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1717479951,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "ProxyDeployed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
        "indexed": true
      },
      {
        "type": "address",
        "name": "proxy"
      },
      {
        "type": "address",
        "name": "deployer",
        "indexed": true
      }
    ]
  },
  {
    "name": "deployProxyByImplementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_implementation"
      },
      {
        "type": "bytes",
        "name": "_data"
      },
      {
        "type": "bytes32",
        "name": "salt"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "deployedProxy"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract