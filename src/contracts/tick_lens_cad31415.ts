import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35324,
  address: '0x13fce0acbe6fb11641ab753212550574cad31415' as const,
  contract_name: 'TickLens',
  display_name: 'Tick Lens',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1749134317,
  abi: [
  {
    "name": "getClosestActiveTicks",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "pool"
      },
      {
        "type": "int24",
        "name": "targetTick"
      }
    ],
    "outputs": [
      {
        "type": "tuple[2]",
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
  },
  {
    "name": "getNextActiveTicks",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "pool"
      },
      {
        "type": "int24",
        "name": "startingTick"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bool",
        "name": "upperDirection"
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
  },
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
        "name": "tickTableIndex"
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