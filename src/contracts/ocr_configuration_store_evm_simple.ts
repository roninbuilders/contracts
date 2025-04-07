import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 7188,
  address: '0x239d97bb703a6890600c3f6b98b5a8597d397a9e' as const,
  contract_name: 'OCRConfigurationStoreEVMSimple',
  display_name: 'OCR Configuration Store EVM Simple',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1736848640,
  abi: [
  {
    "name": "NewConfiguration",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "configDigest",
        "indexed": true
      }
    ]
  },
  {
    "name": "addConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "configuration",
        "components": [
          {
            "type": "address[]",
            "name": "signers"
          },
          {
            "type": "address[]",
            "name": "transmitters"
          },
          {
            "type": "bytes",
            "name": "onchainConfig"
          },
          {
            "type": "bytes",
            "name": "offchainConfig"
          },
          {
            "type": "address",
            "name": "contractAddress"
          },
          {
            "type": "uint64",
            "name": "offchainConfigVersion"
          },
          {
            "type": "uint32",
            "name": "configCount"
          },
          {
            "type": "uint8",
            "name": "f"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "readConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "configDigest"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "address[]",
            "name": "signers"
          },
          {
            "type": "address[]",
            "name": "transmitters"
          },
          {
            "type": "bytes",
            "name": "onchainConfig"
          },
          {
            "type": "bytes",
            "name": "offchainConfig"
          },
          {
            "type": "address",
            "name": "contractAddress"
          },
          {
            "type": "uint64",
            "name": "offchainConfigVersion"
          },
          {
            "type": "uint32",
            "name": "configCount"
          },
          {
            "type": "uint8",
            "name": "f"
          }
        ]
      }
    ]
  },
  {
    "name": "typeAndVersion",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract