import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 530,
  address: '0x2880ab155794e7179c9ee2e38200202908c17b43' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Pyth Upgradable Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xa2aa501b19aff244d90cc15a4cf739d2725b5729',
  created_at: 1692987312,
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
    "name": "InsufficientFee",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidArgument",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidGovernanceDataSource",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidGovernanceMessage",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidGovernanceTarget",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidUpdateData",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidUpdateDataSource",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidWormholeAddressToSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidWormholeVaa",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoFreshUpdate",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OldGovernanceMessage",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PriceFeedNotFound",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PriceFeedNotFoundWithinRange",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StalePrice",
    "type": "error",
    "inputs": []
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
    "name": "BatchPriceFeedUpdate",
    "type": "event",
    "inputs": [
      {
        "type": "uint16",
        "name": "chainId"
      },
      {
        "type": "uint64",
        "name": "sequenceNumber"
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
    "name": "ContractUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldImplementation"
      },
      {
        "type": "address",
        "name": "newImplementation"
      }
    ]
  },
  {
    "name": "DataSourcesSet",
    "type": "event",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "oldDataSources",
        "components": [
          {
            "type": "uint16",
            "name": "chainId"
          },
          {
            "type": "bytes32",
            "name": "emitterAddress"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "newDataSources",
        "components": [
          {
            "type": "uint16",
            "name": "chainId"
          },
          {
            "type": "bytes32",
            "name": "emitterAddress"
          }
        ]
      }
    ]
  },
  {
    "name": "FeeSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "oldFee"
      },
      {
        "type": "uint256",
        "name": "newFee"
      }
    ]
  },
  {
    "name": "GovernanceDataSourceSet",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "oldDataSource",
        "components": [
          {
            "type": "uint16",
            "name": "chainId"
          },
          {
            "type": "bytes32",
            "name": "emitterAddress"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "newDataSource",
        "components": [
          {
            "type": "uint16",
            "name": "chainId"
          },
          {
            "type": "bytes32",
            "name": "emitterAddress"
          }
        ]
      },
      {
        "type": "uint64",
        "name": "initialSequence"
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
    "name": "PriceFeedUpdate",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "publishTime"
      },
      {
        "type": "int64",
        "name": "price"
      },
      {
        "type": "uint64",
        "name": "conf"
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
    "name": "ValidPeriodSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "oldValidPeriod"
      },
      {
        "type": "uint256",
        "name": "newValidPeriod"
      }
    ]
  },
  {
    "name": "WormholeAddressSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldWormholeAddress"
      },
      {
        "type": "address",
        "name": "newWormholeAddress"
      }
    ]
  },
  {
    "name": "chainId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint16"
      }
    ]
  },
  {
    "name": "executeGovernanceInstruction",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes",
        "name": "encodedVM"
      }
    ],
    "outputs": []
  },
  {
    "name": "getEmaPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "price",
        "components": [
          {
            "type": "int64",
            "name": "price"
          },
          {
            "type": "uint64",
            "name": "conf"
          },
          {
            "type": "int32",
            "name": "expo"
          },
          {
            "type": "uint256",
            "name": "publishTime"
          }
        ]
      }
    ]
  },
  {
    "name": "getEmaPriceNoOlderThan",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "age"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "price",
        "components": [
          {
            "type": "int64",
            "name": "price"
          },
          {
            "type": "uint64",
            "name": "conf"
          },
          {
            "type": "int32",
            "name": "expo"
          },
          {
            "type": "uint256",
            "name": "publishTime"
          }
        ]
      }
    ]
  },
  {
    "name": "getEmaPriceUnsafe",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "price",
        "components": [
          {
            "type": "int64",
            "name": "price"
          },
          {
            "type": "uint64",
            "name": "conf"
          },
          {
            "type": "int32",
            "name": "expo"
          },
          {
            "type": "uint256",
            "name": "publishTime"
          }
        ]
      }
    ]
  },
  {
    "name": "getPrice",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "price",
        "components": [
          {
            "type": "int64",
            "name": "price"
          },
          {
            "type": "uint64",
            "name": "conf"
          },
          {
            "type": "int32",
            "name": "expo"
          },
          {
            "type": "uint256",
            "name": "publishTime"
          }
        ]
      }
    ]
  },
  {
    "name": "getPriceNoOlderThan",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "age"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "price",
        "components": [
          {
            "type": "int64",
            "name": "price"
          },
          {
            "type": "uint64",
            "name": "conf"
          },
          {
            "type": "int32",
            "name": "expo"
          },
          {
            "type": "uint256",
            "name": "publishTime"
          }
        ]
      }
    ]
  },
  {
    "name": "getPriceUnsafe",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "price",
        "components": [
          {
            "type": "int64",
            "name": "price"
          },
          {
            "type": "uint64",
            "name": "conf"
          },
          {
            "type": "int32",
            "name": "expo"
          },
          {
            "type": "uint256",
            "name": "publishTime"
          }
        ]
      }
    ]
  },
  {
    "name": "getUpdateFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "updateData"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "feeAmount"
      }
    ]
  },
  {
    "name": "getUpdateFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "updateDataSize"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "feeAmount"
      }
    ]
  },
  {
    "name": "getValidTimePeriod",
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
    "name": "governanceDataSource",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint16",
            "name": "chainId"
          },
          {
            "type": "bytes32",
            "name": "emitterAddress"
          }
        ]
      }
    ]
  },
  {
    "name": "governanceDataSourceIndex",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32"
      }
    ]
  },
  {
    "name": "hashDataSource",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "tuple",
        "name": "ds",
        "components": [
          {
            "type": "uint16",
            "name": "chainId"
          },
          {
            "type": "bytes32",
            "name": "emitterAddress"
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "wormhole"
      },
      {
        "type": "uint16[]",
        "name": "dataSourceEmitterChainIds"
      },
      {
        "type": "bytes32[]",
        "name": "dataSourceEmitterAddresses"
      },
      {
        "type": "uint16",
        "name": "governanceEmitterChainId"
      },
      {
        "type": "bytes32",
        "name": "governanceEmitterAddress"
      },
      {
        "type": "uint64",
        "name": "governanceInitialSequence"
      },
      {
        "type": "uint256",
        "name": "validTimePeriodSeconds"
      },
      {
        "type": "uint256",
        "name": "singleUpdateFeeInWei"
      }
    ],
    "outputs": []
  },
  {
    "name": "isValidDataSource",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint16",
        "name": "dataSourceChainId"
      },
      {
        "type": "bytes32",
        "name": "dataSourceEmitterAddress"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isValidGovernanceDataSource",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint16",
        "name": "governanceChainId"
      },
      {
        "type": "bytes32",
        "name": "governanceEmitterAddress"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "lastExecutedGovernanceSequence",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "latestPriceInfoPublishTime",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "priceId"
      }
    ],
    "outputs": [
      {
        "type": "uint64"
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
    "name": "parseAuthorizeGovernanceDataSourceTransferPayload",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "bytes",
        "name": "encodedPayload"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "sgds",
        "components": [
          {
            "type": "bytes",
            "name": "claimVaa"
          }
        ]
      }
    ]
  },
  {
    "name": "parseGovernanceInstruction",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "bytes",
        "name": "encodedInstruction"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "gi",
        "components": [
          {
            "type": "uint8",
            "name": "module"
          },
          {
            "type": "uint8",
            "name": "action"
          },
          {
            "type": "uint16",
            "name": "targetChainId"
          },
          {
            "type": "bytes",
            "name": "payload"
          }
        ]
      }
    ]
  },
  {
    "name": "parsePriceFeedUpdates",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "updateData"
      },
      {
        "type": "bytes32[]",
        "name": "priceIds"
      },
      {
        "type": "uint64",
        "name": "minPublishTime"
      },
      {
        "type": "uint64",
        "name": "maxPublishTime"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "name": "priceFeeds",
        "components": [
          {
            "type": "bytes32",
            "name": "id"
          },
          {
            "type": "tuple",
            "name": "price",
            "components": [
              {
                "type": "int64",
                "name": "price"
              },
              {
                "type": "uint64",
                "name": "conf"
              },
              {
                "type": "int32",
                "name": "expo"
              },
              {
                "type": "uint256",
                "name": "publishTime"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "emaPrice",
            "components": [
              {
                "type": "int64",
                "name": "price"
              },
              {
                "type": "uint64",
                "name": "conf"
              },
              {
                "type": "int32",
                "name": "expo"
              },
              {
                "type": "uint256",
                "name": "publishTime"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "parseRequestGovernanceDataSourceTransferPayload",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "bytes",
        "name": "encodedPayload"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "sgdsClaim",
        "components": [
          {
            "type": "uint32",
            "name": "governanceDataSourceIndex"
          }
        ]
      }
    ]
  },
  {
    "name": "parseSetDataSourcesPayload",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "bytes",
        "name": "encodedPayload"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "sds",
        "components": [
          {
            "type": "tuple[]",
            "name": "dataSources",
            "components": [
              {
                "type": "uint16",
                "name": "chainId"
              },
              {
                "type": "bytes32",
                "name": "emitterAddress"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "parseSetFeePayload",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "bytes",
        "name": "encodedPayload"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "sf",
        "components": [
          {
            "type": "uint256",
            "name": "newFee"
          }
        ]
      }
    ]
  },
  {
    "name": "parseSetValidPeriodPayload",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "bytes",
        "name": "encodedPayload"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "svp",
        "components": [
          {
            "type": "uint256",
            "name": "newValidPeriod"
          }
        ]
      }
    ]
  },
  {
    "name": "parseSetWormholeAddressPayload",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "bytes",
        "name": "encodedPayload"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "sw",
        "components": [
          {
            "type": "address",
            "name": "newWormholeAddress"
          }
        ]
      }
    ]
  },
  {
    "name": "parseUpgradeContractPayload",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "bytes",
        "name": "encodedPayload"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "uc",
        "components": [
          {
            "type": "address",
            "name": "newImplementation"
          }
        ]
      }
    ]
  },
  {
    "name": "priceFeedExists",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
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
    "name": "pythUpgradableMagic",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32"
      }
    ]
  },
  {
    "name": "queryPriceFeed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "priceFeed",
        "components": [
          {
            "type": "bytes32",
            "name": "id"
          },
          {
            "type": "tuple",
            "name": "price",
            "components": [
              {
                "type": "int64",
                "name": "price"
              },
              {
                "type": "uint64",
                "name": "conf"
              },
              {
                "type": "int32",
                "name": "expo"
              },
              {
                "type": "uint256",
                "name": "publishTime"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "emaPrice",
            "components": [
              {
                "type": "int64",
                "name": "price"
              },
              {
                "type": "uint64",
                "name": "conf"
              },
              {
                "type": "int32",
                "name": "expo"
              },
              {
                "type": "uint256",
                "name": "publishTime"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "singleUpdateFeeInWei",
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
    "name": "updatePriceFeeds",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "updateData"
      }
    ],
    "outputs": []
  },
  {
    "name": "updatePriceFeedsIfNecessary",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "updateData"
      },
      {
        "type": "bytes32[]",
        "name": "priceIds"
      },
      {
        "type": "uint64[]",
        "name": "publishTimes"
      }
    ],
    "outputs": []
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
    "name": "validDataSources",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint16",
            "name": "chainId"
          },
          {
            "type": "bytes32",
            "name": "emitterAddress"
          }
        ]
      }
    ]
  },
  {
    "name": "validTimePeriodSeconds",
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
    "name": "version",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "wormhole",
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