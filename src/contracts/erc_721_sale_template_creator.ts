import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37043,
  address: '0xfeccd5848649c9c6f22f875fa13a55d1bc28de2d' as const,
  contract_name: 'ERC721SaleTemplateCreator',
  display_name: 'ERC721 Sale Template Creator',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1757962083,
  abi: [
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
    "name": "InvalidArgs",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "reason"
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