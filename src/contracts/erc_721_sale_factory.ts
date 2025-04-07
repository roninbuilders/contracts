import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 6177,
  address: '0x156aaa25339bf8fb15a9e9b1e03fc11d1c5a216e' as const,
  contract_name: 'ERC721SaleFactory',
  display_name: 'ERC721 Sale Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1735639618,
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