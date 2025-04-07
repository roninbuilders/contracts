import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 110,
  address: '0x2368dfed532842db89b470fde9fd584d48d4f644' as const,
  contract_name: 'ERC721Batch',
  display_name: 'ERC721 Batch Transfer',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1646053149,
  abi: [
  {
    "name": "safeBatchTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenContract"
      },
      {
        "type": "uint256[]",
        "name": "_ids"
      },
      {
        "type": "address[]",
        "name": "_recipients"
      }
    ],
    "outputs": []
  },
  {
    "name": "safeBatchTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_tokenContract"
      },
      {
        "type": "uint256[]",
        "name": "_ids"
      },
      {
        "type": "address",
        "name": "_recipient"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract