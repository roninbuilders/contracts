import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 2041,
  address: '0x309971c1bb60dea6d1d85f2424773fc4e2c92e93' as const,
  contract_name: 'RoninVRFCoordinatorLegacy',
  display_name: 'Ronin VRF Coordinator Legacy',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1711104211,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "CallerIsNotAConsumer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrUnauthorizedConsumer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientFee",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidArrayLength",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidGasPrice",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidProofSeed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRefundAddress",
    "type": "error",
    "inputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "InvalidSender",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "expectedSender"
      }
    ]
  },
  {
    "name": "Locked",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RandomRequestAlreadyFinalized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RequestHashNotFound",
    "type": "error",
    "inputs": []
  },
  {
    "name": "WrongRandomRequest",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AddressWhitelisted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "addr",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "status",
        "indexed": true
      }
    ]
  },
  {
    "name": "ConstantFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "constantFee"
      }
    ]
  },
  {
    "name": "GasAfterPaymentCalculationUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gasCost"
      }
    ]
  },
  {
    "name": "GasToEstimateRandomFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "gasCost"
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
    "name": "OraclesAdded",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "keyHashes"
      },
      {
        "type": "address[]",
        "name": "oracleAddrs"
      }
    ]
  },
  {
    "name": "OraclesRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "keyHashes"
      }
    ]
  },
  {
    "name": "OwnershipTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousOwner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true
      }
    ]
  },
  {
    "name": "Paused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "RandomSeedFulfilled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestHash",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "randomSeed"
      },
      {
        "type": "uint256",
        "name": "requestValue"
      },
      {
        "type": "uint256",
        "name": "refundAmount"
      },
      {
        "type": "uint256",
        "name": "paymentAmount"
      },
      {
        "type": "uint256",
        "name": "constantFee"
      },
      {
        "type": "bool",
        "name": "callbackResult"
      }
    ]
  },
  {
    "name": "RandomSeedRequested",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash",
        "indexed": true
      },
      {
        "type": "tuple",
        "name": "request",
        "components": [
          {
            "type": "uint256",
            "name": "blockNumber"
          },
          {
            "type": "uint256",
            "name": "callbackGasLimit"
          },
          {
            "type": "uint256",
            "name": "gasPrice"
          },
          {
            "type": "uint256",
            "name": "gasFee"
          },
          {
            "type": "address",
            "name": "requester"
          },
          {
            "type": "address",
            "name": "consumer"
          },
          {
            "type": "address",
            "name": "refundAddr"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "constantFee"
          }
        ]
      }
    ]
  },
  {
    "name": "TreasuryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "treasury"
      }
    ]
  },
  {
    "name": "Unpaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "WhitelistAllChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "status",
        "indexed": true
      }
    ]
  },
  {
    "name": "addOracles",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "keyHashList"
      },
      {
        "type": "address[]",
        "name": "oracleAddrList"
      }
    ],
    "outputs": []
  },
  {
    "name": "constantFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "estimateRequestRandomFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "callbackGasLimit"
      },
      {
        "type": "uint256",
        "name": "gasPrice"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "fulfillRandomSeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "proof",
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
        "type": "tuple",
        "name": "req",
        "components": [
          {
            "type": "uint256",
            "name": "blockNumber"
          },
          {
            "type": "uint256",
            "name": "callbackGasLimit"
          },
          {
            "type": "uint256",
            "name": "gasPrice"
          },
          {
            "type": "uint256",
            "name": "gasFee"
          },
          {
            "type": "address",
            "name": "requester"
          },
          {
            "type": "address",
            "name": "consumer"
          },
          {
            "type": "address",
            "name": "refundAddr"
          },
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "constantFee"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "paymentAmount"
      }
    ]
  },
  {
    "name": "gasAfterPaymentCalculation",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "gasToEstimateRandomFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getRandomRequestHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consumer"
      },
      {
        "type": "uint256",
        "name": "nonce"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "hash"
      }
    ]
  },
  {
    "name": "getRandomRequestNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "consumer"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "nonce"
      }
    ]
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "uint256",
        "name": "gasToEstimateRandomFee_"
      },
      {
        "type": "uint256",
        "name": "gasAfterPaymentCalculation_"
      },
      {
        "type": "uint256",
        "name": "constantFee_"
      },
      {
        "type": "address",
        "name": "treasury_"
      }
    ],
    "outputs": []
  },
  {
    "name": "initializeV2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "isWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "keyHash",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "uint256[2]",
        "name": "publicKey"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "oracleAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "keyHash"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "owner",
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
    "name": "pause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "paused",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "removeOracles",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "keyHashList"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "requestFinalized",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "finalized"
      }
    ]
  },
  {
    "name": "requestRandomSeed",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "callbackGasLimit"
      },
      {
        "type": "uint256",
        "name": "gasPrice"
      },
      {
        "type": "address",
        "name": "consumer"
      },
      {
        "type": "address",
        "name": "refundAddress"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
      }
    ]
  },
  {
    "name": "setConstantFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "constantFee_"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGasAfterPaymentCalculation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "gas"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGasToEstimateRandomFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "gas"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTreasury",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "treasury_"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "treasury",
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "whitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "addr"
      },
      {
        "type": "bool",
        "name": "status"
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelistAllAddresses",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "status"
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelistedAll",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract