import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 3613,
  address: '0x4fa6c6b43f690db817c1eec77103964a758f24c8' as const,
  contract_name: 'GMSend',
  display_name: 'GM Send',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1723280371,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_config"
      }
    ]
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "BeaconUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beacon",
        "indexed": true
      }
    ]
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "version"
      }
    ]
  },
  {
    "name": "Upgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
        "indexed": true
      }
    ]
  },
  {
    "name": "batchCheckMinted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "mintIds"
      }
    ],
    "outputs": [
      {
        "type": "bool[]"
      }
    ]
  },
  {
    "name": "batchSend",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "minteds",
        "components": [
          {
            "type": "bytes32",
            "name": "mintId"
          },
          {
            "type": "address",
            "name": "to"
          },
          {
            "type": "uint256[]",
            "name": "tokenIds"
          },
          {
            "type": "uint256[]",
            "name": "itemIds"
          },
          {
            "type": "uint256[]",
            "name": "amounts"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "config",
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "proxiableUUID",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "upgradeTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      }
    ],
    "outputs": []
  },
  {
    "name": "upgradeToAndCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract