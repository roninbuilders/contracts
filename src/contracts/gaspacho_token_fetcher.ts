import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3227,
  address: '0x274dde3a88100cf4bc1e61d5cde3c0d1adb20d0a' as const,
  contract_name: 'GaspachoTokenFetcher',
  display_name: 'Gaspacho Token Fetcher',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1720645372,
  abi: [
  {
    "name": "ERC20BalanceOfBatch",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "_accounts"
      },
      {
        "type": "address[]",
        "name": "_tokens"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "ERC721EnumGetBatchTokensForUser",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      },
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "uint256",
        "name": "_startIndex"
      },
      {
        "type": "uint256",
        "name": "_maxLen"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "ERC721GetBatchTokensForUser",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      },
      {
        "type": "address",
        "name": "_tokenAddress"
      },
      {
        "type": "uint256",
        "name": "_startId"
      },
      {
        "type": "uint256",
        "name": "_maxLen"
      },
      {
        "type": "uint256",
        "name": "_maxId"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract