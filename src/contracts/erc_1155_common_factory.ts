import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4627,
  address: '0x907bdfdf0d9cadf8281eee75b62bdc8df8cf1ae7' as const,
  contract_name: 'ERC1155CommonFactory',
  display_name: 'ERC1155 Common Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1729071335,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "allowed"
      }
    ]
  },
  {
    "name": "AllowedCannotBeSelf",
    "type": "error",
    "inputs": []
  },
  {
    "name": "DeploymentFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExpectedAddressNotMatch",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "expected"
      },
      {
        "type": "address",
        "name": "actual"
      }
    ]
  },
  {
    "name": "NullAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnauthorizedDelegateCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "deploy",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "expected"
      },
      {
        "type": "bytes",
        "name": "args"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "instance"
      }
    ]
  },
  {
    "name": "getCreationCode",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "supportsInterface",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "bytes4",
        "name": "interfaceId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract