import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 33326,
  address: '0xa787b3e0471b718bbfeaa59b502fd0c4ebd7b74e' as const,
  contract_name: 'BatchBlockhashStore',
  display_name: 'Batch Blockhash Store',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744606590,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "blockhashStoreAddr"
      }
    ]
  },
  {
    "name": "BHS",
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
    "name": "getBlockhashes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "blockNumbers"
      }
    ],
    "outputs": [
      {
        "type": "bytes32[]"
      }
    ]
  },
  {
    "name": "store",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "blockNumbers"
      }
    ],
    "outputs": []
  },
  {
    "name": "storeVerifyHeader",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "blockNumbers"
      },
      {
        "type": "bytes[]",
        "name": "headers"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract