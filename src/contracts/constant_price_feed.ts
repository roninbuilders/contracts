import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 26005,
  address: '0x8ac2b57d15c84755a3333ad68025d2496ae3bebd' as const,
  contract_name: 'ConstantPriceFeed',
  display_name: 'Constant Price Feed',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1740703836,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "decimals_"
      },
      {
        "type": "int256",
        "name": "constantPrice_"
      }
    ]
  },
  {
    "name": "constantPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "int256"
      }
    ]
  },
  {
    "name": "decimals",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "description",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "latestRoundData",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint80",
        "name": "roundId"
      },
      {
        "type": "int256",
        "name": "answer"
      },
      {
        "type": "uint256",
        "name": "startedAt"
      },
      {
        "type": "uint256",
        "name": "updatedAt"
      },
      {
        "type": "uint80",
        "name": "answeredInRound"
      }
    ]
  },
  {
    "name": "version",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract