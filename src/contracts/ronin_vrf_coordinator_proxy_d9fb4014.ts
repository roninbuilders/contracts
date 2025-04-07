import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 364,
  address: '0x84f2690c61678de787c2641ac453ebc3d9fb4014' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Ronin VRF Coordinator Proxy',
  is_deprecated: true,
  is_proxy: true,
  proxy_to: '0xad2a6f1ecac0537f80fa82523a7c82206dd0f7d4',
  created_at: 1689913191,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "address",
        "name": "admin_"
      },
      {
        "type": "bytes",
        "name": "_data"
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
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "name": "admin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "admin_"
      }
    ]
  },
  {
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "implementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "implementation_"
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
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
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
    "inputs": []
  },
  {
    "name": "RONTransferFailed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
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
        "name": "_address",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "_status",
        "indexed": true
      }
    ]
  },
  {
    "name": "GasAfterPaymentCalculationUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_gasCost"
      }
    ]
  },
  {
    "name": "GasToEstimateRandomFeeUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_gasCost"
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
        "name": "keyHashList"
      },
      {
        "type": "address[]",
        "name": "oracleAddrList"
      }
    ]
  },
  {
    "name": "OraclesRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "keyHashList"
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
        "name": "offerAmount"
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
        "name": "reqHash"
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
          }
        ]
      }
    ]
  },
  {
    "name": "WhitelistAllChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "_status",
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
        "name": "_keyHashList"
      },
      {
        "type": "address[]",
        "name": "_oracleAddrList"
      }
    ],
    "outputs": []
  },
  {
    "name": "estimateRequestRandomFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_callbackGasLimit"
      },
      {
        "type": "uint256",
        "name": "_gasPrice"
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
        "name": "_proof",
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
        "name": "_req",
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
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_paymentAmount"
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
        "name": "_consumer"
      },
      {
        "type": "uint256",
        "name": "_nonce"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "_hash"
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
        "name": "_consumer"
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
        "name": "_admin"
      },
      {
        "type": "uint256",
        "name": "_gasToEstimateRandomFee"
      },
      {
        "type": "uint256",
        "name": "_gasAfterPaymentCalculation"
      }
    ],
    "outputs": []
  },
  {
    "name": "isWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_address"
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
        "name": "_keyHash"
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
    "name": "removeOracles",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "_keyHashList"
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
        "name": "_reqHash"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
        "name": "_callbackGasLimit"
      },
      {
        "type": "uint256",
        "name": "_gasPrice"
      },
      {
        "type": "address",
        "name": "_consumer"
      },
      {
        "type": "address",
        "name": "_refundAddress"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "_reqHash"
      }
    ]
  },
  {
    "name": "setGasAfterPaymentCalculation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_gas"
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
        "name": "_gas"
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
    "name": "whitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_address"
      },
      {
        "type": "bool",
        "name": "_status"
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelistAll",
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
    "name": "whitelistAllAddresses",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_status"
      }
    ],
    "outputs": []
  },
  {
    "name": "whitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract