import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 1153,
  address: '0x4745e6b8d030b1b65964242b0005ed63c52bf333' as const,
  contract_name: 'PresailDroplet',
  display_name: 'Presail Droplet',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1699522829,
  abi: [
  {
    "name": "presailDistribute",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address[]",
        "name": "recipients"
      },
      {
        "type": "uint256[]",
        "name": "values"
      }
    ],
    "outputs": []
  },
  {
    "name": "presailDistributeToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address[]",
        "name": "recipients"
      },
      {
        "type": "uint256[]",
        "name": "values"
      }
    ],
    "outputs": []
  },
  {
    "name": "presailDistributeTokenSimple",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address[]",
        "name": "recipients"
      },
      {
        "type": "uint256[]",
        "name": "values"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract