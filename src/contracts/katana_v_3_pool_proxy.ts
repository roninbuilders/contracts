import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5337,
  address: '0x392d372f2a51610e9ac5b741379d5631ca9a1c7f' as const,
  contract_name: 'KatanaV3PoolProxy',
  display_name: 'Katana V3 Pool Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xfe70f3f08637c67e451a5d74b292dfe7691d694f',
  created_at: 1732603221,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "Burn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "int24",
        "name": "tickLower",
        "indexed": true
      },
      {
        "type": "int24",
        "name": "tickUpper",
        "indexed": true
      },
      {
        "type": "uint128",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "amount0"
      },
      {
        "type": "uint256",
        "name": "amount1"
      }
    ]
  },
  {
    "name": "Collect",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "int24",
        "name": "tickLower",
        "indexed": true
      },
      {
        "type": "int24",
        "name": "tickUpper",
        "indexed": true
      },
      {
        "type": "uint128",
        "name": "amount0"
      },
      {
        "type": "uint128",
        "name": "amount1"
      }
    ]
  },
  {
    "name": "CollectProtocol",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint128",
        "name": "amount0"
      },
      {
        "type": "uint128",
        "name": "amount1"
      }
    ]
  },
  {
    "name": "Flash",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount0"
      },
      {
        "type": "uint256",
        "name": "amount1"
      },
      {
        "type": "uint256",
        "name": "paid0"
      },
      {
        "type": "uint256",
        "name": "paid1"
      }
    ]
  },
  {
    "name": "IncreaseObservationCardinalityNext",
    "type": "event",
    "inputs": [
      {
        "type": "uint16",
        "name": "observationCardinalityNextOld"
      },
      {
        "type": "uint16",
        "name": "observationCardinalityNextNew"
      }
    ]
  },
  {
    "name": "Initialize",
    "type": "event",
    "inputs": [
      {
        "type": "uint160",
        "name": "sqrtPriceX96"
      },
      {
        "type": "int24",
        "name": "tick"
      }
    ]
  },
  {
    "name": "Mint",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      },
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "int24",
        "name": "tickLower",
        "indexed": true
      },
      {
        "type": "int24",
        "name": "tickUpper",
        "indexed": true
      },
      {
        "type": "uint128",
        "name": "amount"
      },
      {
        "type": "uint256",
        "name": "amount0"
      },
      {
        "type": "uint256",
        "name": "amount1"
      }
    ]
  },
  {
    "name": "SetFeeProtocol",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "feeProtocolNumeratorOld"
      },
      {
        "type": "uint8",
        "name": "feeProtocolDenominatorOld"
      },
      {
        "type": "uint8",
        "name": "feeProtocolNumeratorNew"
      },
      {
        "type": "uint8",
        "name": "feeProtocolDenominatorNew"
      }
    ]
  },
  {
    "name": "Swap",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      },
      {
        "type": "address",
        "name": "recipient",
        "indexed": true
      },
      {
        "type": "int256",
        "name": "amount0"
      },
      {
        "type": "int256",
        "name": "amount1"
      },
      {
        "type": "uint160",
        "name": "sqrtPriceX96"
      },
      {
        "type": "uint128",
        "name": "liquidity"
      },
      {
        "type": "int24",
        "name": "tick"
      }
    ]
  },
  {
    "name": "burn",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "int24",
        "name": "tickLower"
      },
      {
        "type": "int24",
        "name": "tickUpper"
      },
      {
        "type": "uint128",
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount0"
      },
      {
        "type": "uint256",
        "name": "amount1"
      }
    ]
  },
  {
    "name": "collect",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "int24",
        "name": "tickLower"
      },
      {
        "type": "int24",
        "name": "tickUpper"
      },
      {
        "type": "uint128",
        "name": "amount0Requested"
      },
      {
        "type": "uint128",
        "name": "amount1Requested"
      }
    ],
    "outputs": [
      {
        "type": "uint128",
        "name": "amount0"
      },
      {
        "type": "uint128",
        "name": "amount1"
      }
    ]
  },
  {
    "name": "factory",
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
    "name": "fee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint24"
      }
    ]
  },
  {
    "name": "feeGrowthGlobal0X128",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "feeGrowthGlobal1X128",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "flash",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint256",
        "name": "amount0"
      },
      {
        "type": "uint256",
        "name": "amount1"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "governance",
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
    "name": "increaseObservationCardinalityNext",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint16",
        "name": "observationCardinalityNext"
      }
    ],
    "outputs": []
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint160",
        "name": "sqrtPriceX96"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeImmutables",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "factory_"
      },
      {
        "type": "address",
        "name": "token0_"
      },
      {
        "type": "address",
        "name": "token1_"
      },
      {
        "type": "uint24",
        "name": "fee_"
      },
      {
        "type": "int24",
        "name": "tickSpacing_"
      }
    ],
    "outputs": []
  },
  {
    "name": "liquidity",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint128"
      }
    ]
  },
  {
    "name": "maxLiquidityPerTick",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint128"
      }
    ]
  },
  {
    "name": "mint",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "int24",
        "name": "tickLower"
      },
      {
        "type": "int24",
        "name": "tickUpper"
      },
      {
        "type": "uint128",
        "name": "amount"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount0"
      },
      {
        "type": "uint256",
        "name": "amount1"
      }
    ]
  },
  {
    "name": "observations",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "uint32",
        "name": "blockTimestamp"
      },
      {
        "type": "int56",
        "name": "tickCumulative"
      },
      {
        "type": "uint160",
        "name": "secondsPerLiquidityCumulativeX128"
      },
      {
        "type": "bool",
        "name": "initialized"
      }
    ]
  },
  {
    "name": "observe",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint32[]",
        "name": "secondsAgos"
      }
    ],
    "outputs": [
      {
        "type": "int56[]",
        "name": "tickCumulatives"
      },
      {
        "type": "uint160[]",
        "name": "secondsPerLiquidityCumulativeX128s"
      }
    ]
  },
  {
    "name": "positionManager",
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
    "name": "positions",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "uint128",
        "name": "liquidity"
      },
      {
        "type": "uint256",
        "name": "feeGrowthInside0LastX128"
      },
      {
        "type": "uint256",
        "name": "feeGrowthInside1LastX128"
      },
      {
        "type": "uint128",
        "name": "tokensOwed0"
      },
      {
        "type": "uint128",
        "name": "tokensOwed1"
      }
    ]
  },
  {
    "name": "slot0",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint160",
        "name": "sqrtPriceX96"
      },
      {
        "type": "int24",
        "name": "tick"
      },
      {
        "type": "uint16",
        "name": "observationIndex"
      },
      {
        "type": "uint16",
        "name": "observationCardinality"
      },
      {
        "type": "uint16",
        "name": "observationCardinalityNext"
      },
      {
        "type": "uint8",
        "name": "feeProtocolNum"
      },
      {
        "type": "uint8",
        "name": "feeProtocolDen"
      },
      {
        "type": "bool",
        "name": "unlocked"
      }
    ]
  },
  {
    "name": "snapshotCumulativesInside",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "int24",
        "name": "tickLower"
      },
      {
        "type": "int24",
        "name": "tickUpper"
      }
    ],
    "outputs": [
      {
        "type": "int56",
        "name": "tickCumulativeInside"
      },
      {
        "type": "uint160",
        "name": "secondsPerLiquidityInsideX128"
      },
      {
        "type": "uint32",
        "name": "secondsInside"
      }
    ]
  },
  {
    "name": "swap",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "bool",
        "name": "zeroForOne"
      },
      {
        "type": "int256",
        "name": "amountSpecified"
      },
      {
        "type": "uint160",
        "name": "sqrtPriceLimitX96"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "int256",
        "name": "amount0"
      },
      {
        "type": "int256",
        "name": "amount1"
      }
    ]
  },
  {
    "name": "tickBitmap",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "int16"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "tickSpacing",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "int24"
      }
    ]
  },
  {
    "name": "ticks",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "int24"
      }
    ],
    "outputs": [
      {
        "type": "uint128",
        "name": "liquidityGross"
      },
      {
        "type": "int128",
        "name": "liquidityNet"
      },
      {
        "type": "uint256",
        "name": "feeGrowthOutside0X128"
      },
      {
        "type": "uint256",
        "name": "feeGrowthOutside1X128"
      },
      {
        "type": "int56",
        "name": "tickCumulativeOutside"
      },
      {
        "type": "uint160",
        "name": "secondsPerLiquidityOutsideX128"
      },
      {
        "type": "uint32",
        "name": "secondsOutside"
      },
      {
        "type": "bool",
        "name": "initialized"
      }
    ]
  },
  {
    "name": "token0",
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
    "name": "token1",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract