import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3298,
  address: '0x100319ddae3764b226a2512ceeb66dfa453cb8a6' as const,
  contract_name: 'Multicall',
  display_name: 'Multicall',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1714838427,
  abi: [
  {
    "name": "aggregate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "calls",
        "components": [
          {
            "type": "address",
            "name": "target"
          },
          {
            "type": "bytes",
            "name": "callData"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "blockNumber"
      },
      {
        "type": "bytes[]",
        "name": "returnData"
      }
    ]
  },
  {
    "name": "getBlockHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "blockNumber"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "blockHash"
      }
    ]
  },
  {
    "name": "getCurrentBlockCoinbase",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "coinbase"
      }
    ]
  },
  {
    "name": "getCurrentBlockDifficulty",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "difficulty"
      }
    ]
  },
  {
    "name": "getCurrentBlockGasLimit",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "gaslimit"
      }
    ]
  },
  {
    "name": "getCurrentBlockTimestamp",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "getEthBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "balance"
      }
    ]
  },
  {
    "name": "getLastBlockHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32",
        "name": "blockHash"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract