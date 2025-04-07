import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 237,
  address: '0x59ad6735bcd8152b84860cb256dd9e96b85f69da' as const,
  contract_name: 'SimulateTxAccessor',
  display_name: 'Simulate Tx Accessor',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1635392386,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "simulate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "uint8",
        "name": "operation"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "estimate"
      },
      {
        "type": "bool",
        "name": "success"
      },
      {
        "type": "bytes",
        "name": "returnData"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract