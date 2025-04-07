import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27524,
  address: '0x840281fad56dd88afba052b7f18be2a65796ecc6' as const,
  contract_name: 'BaseBulker',
  display_name: 'Base Bulker',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1741884277,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "admin_"
      },
      {
        "type": "address",
        "name": "wrappedNativeToken_"
      }
    ]
  },
  {
    "name": "FailedToSendNativeToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidArgument",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TransferInFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TransferOutFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Unauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UnhandledAction",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AdminTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldAdmin",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newAdmin",
        "indexed": true
      }
    ]
  },
  {
    "name": "ACTION_CLAIM_REWARD",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "ACTION_SUPPLY_ASSET",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "ACTION_SUPPLY_NATIVE_TOKEN",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "ACTION_TRANSFER_ASSET",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "ACTION_WITHDRAW_ASSET",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "ACTION_WITHDRAW_NATIVE_TOKEN",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "admin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "invoke",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "actions"
      },
      {
        "type": "bytes[]",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "sweepNativeToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      }
    ],
    "outputs": []
  },
  {
    "name": "sweepToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "address",
        "name": "asset"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "wrappedNativeToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract