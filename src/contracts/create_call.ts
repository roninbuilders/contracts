import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 229,
  address: '0x7cbb62eaa69f79e6873cd1ecb2392971036cfaa4' as const,
  contract_name: 'CreateCall',
  display_name: 'Create Call',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1635392431,
  abi: [
  {
    "name": "ContractCreation",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newContract"
      }
    ]
  },
  {
    "name": "performCreate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes",
        "name": "deploymentData"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "newContract"
      }
    ]
  },
  {
    "name": "performCreate2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes",
        "name": "deploymentData"
      },
      {
        "type": "bytes32",
        "name": "salt"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "newContract"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract