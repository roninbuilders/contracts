import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5247,
  address: '0x05ad77f1e419dac0b580a2ca08cb1e3e33f946ee' as const,
  contract_name: 'TickLens',
  display_name: 'Tick Lens',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1732163869,
  abi: [
  {
    "name": "getPopulatedTicksInWord",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "pool"
      },
      {
        "type": "int16",
        "name": "tickBitmapIndex"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "populatedTicks",
        "components": [
          {
            "type": "int24",
            "name": "tick"
          },
          {
            "type": "int128",
            "name": "liquidityNet"
          },
          {
            "type": "uint128",
            "name": "liquidityGross"
          }
        ]
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract