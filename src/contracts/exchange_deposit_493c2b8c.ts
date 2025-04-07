import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3736,
  address: '0x6fe8c151dfcdf4780d254accccfa9c6e493c2b8c' as const,
  contract_name: 'ExchangeDeposit',
  display_name: 'Exchange Deposit',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1724213652,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "coldAddr"
      },
      {
        "type": "address",
        "name": "adminAddr"
      }
    ]
  },
  {
    "name": "Deposit",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "receiver",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "adminAddress",
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
    "name": "changeColdAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeImplAddress",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeMinInput",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newMinInput"
      }
    ],
    "outputs": []
  },
  {
    "name": "coldAddress",
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
    "name": "gatherErc20",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "instance"
      }
    ],
    "outputs": []
  },
  {
    "name": "gatherEth",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "implementation",
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
    "name": "kill",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "minimumInput",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract