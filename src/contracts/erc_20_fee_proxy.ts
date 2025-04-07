import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 199,
  address: '0xae23992483feda6e718a808ce824f6864f13b64b' as const,
  contract_name: 'ERC20FeeProxy',
  display_name: 'ERC20 Fee Proxy',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1665385411,
  abi: [
  {
    "name": "TransferWithReferenceAndFee",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bytes",
        "name": "paymentReference",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "feeAmount"
      },
      {
        "type": "address",
        "name": "feeAddress"
      }
    ]
  },
  {
    "name": "transferFromWithReferenceAndFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "address",
        "name": "_to"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "bytes",
        "name": "_paymentReference"
      },
      {
        "type": "uint256",
        "name": "_feeAmount"
      },
      {
        "type": "address",
        "name": "_feeAddress"
      }
    ],
    "outputs": []
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract