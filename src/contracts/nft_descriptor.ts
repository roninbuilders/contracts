import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5240,
  address: '0x8f5d2b4b95677833ac62718cf09152efcfe0ad94' as const,
  contract_name: 'NFTDescriptor',
  display_name: 'NFT Descriptor',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1732163848,
  abi: [
  {
    "name": "constructTokenURI",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "tuple",
        "name": "params",
        "components": [
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "address",
            "name": "quoteTokenAddress"
          },
          {
            "type": "address",
            "name": "baseTokenAddress"
          },
          {
            "type": "string",
            "name": "quoteTokenSymbol"
          },
          {
            "type": "string",
            "name": "baseTokenSymbol"
          },
          {
            "type": "uint8",
            "name": "quoteTokenDecimals"
          },
          {
            "type": "uint8",
            "name": "baseTokenDecimals"
          },
          {
            "type": "bool",
            "name": "flipRatio"
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
            "type": "int24",
            "name": "tickCurrent"
          },
          {
            "type": "int24",
            "name": "tickSpacing"
          },
          {
            "type": "uint24",
            "name": "fee"
          },
          {
            "type": "address",
            "name": "poolAddress"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "string"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract