import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 32812,
  address: '0x008ebccae39d001200c3003c3225ce0a00690066' as const,
  contract_name: 'ERC721SeaDropCloneFactory',
  display_name: 'ERC721 Sea Drop Clone Factory',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739369847,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "DEFAULT_SEADROP",
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
    "name": "createClone",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "string",
        "name": "symbol"
      },
      {
        "type": "bytes32",
        "name": "salt"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "seaDropCloneableUpgradeableImplementation",
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