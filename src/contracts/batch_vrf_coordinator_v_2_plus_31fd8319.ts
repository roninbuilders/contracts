import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 33332,
  address: '0xff327ef3b73346f2aacd6ec02c70440d31fd8319' as const,
  contract_name: 'BatchVRFCoordinatorV2Plus',
  display_name: 'Batch VRF Coordinator V2 Plus',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744607134,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "coordinatorAddr"
      }
    ]
  },
  {
    "name": "ErrorReturned",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId",
        "indexed": true
      },
      {
        "type": "string",
        "name": "reason"
      }
    ]
  },
  {
    "name": "RawErrorReturned",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId",
        "indexed": true
      },
      {
        "type": "bytes",
        "name": "lowLevelData"
      }
    ]
  },
  {
    "name": "COORDINATOR",
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
    "name": "fulfillRandomWords",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "proofs",
        "components": [
          {
            "type": "uint256[2]",
            "name": "pk"
          },
          {
            "type": "uint256[2]",
            "name": "gamma"
          },
          {
            "type": "uint256",
            "name": "c"
          },
          {
            "type": "uint256",
            "name": "s"
          },
          {
            "type": "uint256",
            "name": "seed"
          },
          {
            "type": "address",
            "name": "uWitness"
          },
          {
            "type": "uint256[2]",
            "name": "cGammaWitness"
          },
          {
            "type": "uint256[2]",
            "name": "sHashWitness"
          },
          {
            "type": "uint256",
            "name": "zInv"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "rcs",
        "components": [
          {
            "type": "uint64",
            "name": "blockNum"
          },
          {
            "type": "uint256",
            "name": "subId"
          },
          {
            "type": "uint32",
            "name": "callbackGasLimit"
          },
          {
            "type": "uint32",
            "name": "numWords"
          },
          {
            "type": "address",
            "name": "sender"
          },
          {
            "type": "bytes",
            "name": "extraArgs"
          }
        ]
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract