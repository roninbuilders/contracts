import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 6622,
  address: '0x02fde6dae2176048dc6a010e694d4c6140d91c15' as const,
  contract_name: 'MultiReadV2',
  display_name: 'Multi Read V2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: undefined,
  abi: [
  {
    "name": "getBalances",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "wallets"
      },
      {
        "type": "tuple[]",
        "name": "tokens",
        "components": [
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint8",
            "name": "tokenType"
          },
          {
            "type": "uint256[]",
            "name": "tokenIds"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "nativeBalances"
      },
      {
        "type": "uint256[][][]",
        "name": "tokenBalances"
      }
    ]
  },
  {
    "name": "getERC20Balances",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "address[]",
        "name": "wallets"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "tokenBalances"
      }
    ]
  },
  {
    "name": "getERC721Owners",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "uint256",
        "name": "startId"
      },
      {
        "type": "uint256",
        "name": "endId"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "owners"
      }
    ]
  },
  {
    "name": "getNativeBalances",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address[]",
        "name": "wallets"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]",
        "name": "nativeBalances"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract