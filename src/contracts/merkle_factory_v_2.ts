import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5567,
  address: '0xe84a14924c6ff691ac4605cf435ce5df75f52ed2' as const,
  contract_name: 'MerkleFactoryV2',
  display_name: 'Merkle Factory V2',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1733782636,
  abi: [
  {
    "name": "FactoryMerkleContractExists",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "id"
      }
    ]
  },
  {
    "name": "FactoryZeroToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MerkleCreated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "benefactor",
        "indexed": true
      },
      {
        "type": "address",
        "name": "calendarAddress",
        "indexed": true
      },
      {
        "type": "string",
        "name": "id"
      }
    ]
  },
  {
    "name": "createMerkle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "_id"
      },
      {
        "type": "address",
        "name": "_token"
      },
      {
        "type": "address",
        "name": "_benefactor"
      },
      {
        "type": "uint256",
        "name": "_claimFee"
      },
      {
        "type": "address",
        "name": "_feeCollector"
      },
      {
        "type": "address",
        "name": "_feeSetter"
      },
      {
        "type": "address[]",
        "name": "_postClaimHandlers"
      },
      {
        "type": "uint256",
        "name": "_maxClaimFee"
      },
      {
        "type": "bool",
        "name": "_shouldPayClaimFeeOnlyOnce"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "merkleContracts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "string"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract