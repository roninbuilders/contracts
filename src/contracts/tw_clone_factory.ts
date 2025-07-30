import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36430,
  address: '0x25548ba29a0071f30e4bdcd98ea72f79341b07a1' as const,
  contract_name: 'TWCloneFactory',
  display_name: 'TW Clone Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1743542871,
  abi: [
  {
    "name": "ProxyDeploymentFailed",
    "type": "error",
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
    "name": "ProxyDeployedV2",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
        "indexed": true
      },
      {
        "type": "address",
        "name": "proxy",
        "indexed": true
      },
      {
        "type": "address",
        "name": "deployer",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "inputSalt"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "bytes",
        "name": "extraData"
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
        "name": "_salt"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "deployedProxy"
      }
    ]
  },
  {
    "name": "deployProxyByImplementationV2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "bytes",
        "name": "extraData"
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