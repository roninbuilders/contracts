import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37823,
  address: '0x113ac145cadff2bcb6790caedae15c0d7c8cb5d9' as const,
  contract_name: 'WethUnwrapper',
  display_name: 'Weth Unwrapper',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1750651468,
  abi: [
  {
    "name": "notifyFillOrder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "address",
        "name": "takerAsset"
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256",
        "name": "takingAmount"
      },
      {
        "type": "bytes",
        "name": "interactiveData"
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