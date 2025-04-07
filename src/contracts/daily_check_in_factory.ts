import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 4629,
  address: '0xc71008091c58ef7e43412f58b203eb3ae8ab937b' as const,
  contract_name: 'DailyCheckInFactory',
  display_name: 'Daily Check In Factory',
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