import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36235,
  address: '0x144a923bc9dec99f4bd075b14a6177bc9cf30d3a' as const,
  contract_name: 'MgoldBridge',
  display_name: 'Mgold Bridge',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1752803836,
  abi: [
  {
    "name": "BridgeTransfer20",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "BridgeTransfer721",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "bridgeTransferERC20",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": []
  },
  {
    "name": "bridgeTransferERC721",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "tos"
      },
      {
        "type": "uint256[]",
        "name": "tokenIds"
      },
      {
        "type": "address[]",
        "name": "token"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract