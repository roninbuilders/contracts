import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35541,
  address: '0x21948bb2a176310e91430613ee9e5624725887c0' as const,
  contract_name: 'SideChainGatewayBurner',
  display_name: 'Side Chain Gateway Burner',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1750062892,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      }
    ]
  },
  {
    "name": "AXS",
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
    "name": "SLP",
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
    "name": "USDC",
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
    "name": "WETH",
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
    "name": "burnAll",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "getAdmin",
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