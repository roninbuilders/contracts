import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25620,
  address: '0x5ab00e30453eead35025a761ed65d51d74574c24' as const,
  contract_name: 'AirseekerRegistry',
  display_name: 'Airseeker Registry',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739452331,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "owner_"
      },
      {
        "type": "address",
        "name": "api3ServerV1_"
      }
    ]
  },
  {
    "name": "OwnableInvalidOwner",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "OwnableUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "ActivatedDapiName",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName",
        "indexed": true
      }
    ]
  },
  {
    "name": "ActivatedDataFeedId",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dataFeedId",
        "indexed": true
      }
    ]
  },
  {
    "name": "DeactivatedDapiName",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName",
        "indexed": true
      }
    ]
  },
  {
    "name": "DeactivatedDataFeedId",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dataFeedId",
        "indexed": true
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
    "name": "RegisteredDataFeed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dataFeedId",
        "indexed": true
      },
      {
        "type": "bytes",
        "name": "dataFeedDetails"
      }
    ]
  },
  {
    "name": "UpdatedDapiNameUpdateParameters",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName",
        "indexed": true
      },
      {
        "type": "bytes",
        "name": "updateParameters"
      }
    ]
  },
  {
    "name": "UpdatedDataFeedIdUpdateParameters",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dataFeedId",
        "indexed": true
      },
      {
        "type": "bytes",
        "name": "updateParameters"
      }
    ]
  },
  {
    "name": "UpdatedSignedApiUrl",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "airnode",
        "indexed": true
      },
      {
        "type": "string",
        "name": "signedApiUrl"
      }
    ]
  },
  {
    "name": "MAXIMUM_BEACON_COUNT_IN_SET",
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
    "name": "MAXIMUM_SIGNED_API_URL_LENGTH",
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
    "name": "MAXIMUM_UPDATE_PARAMETERS_LENGTH",
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
    "name": "activeDapiNameCount",
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
    "name": "activeDataFeed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "dataFeedId"
      },
      {
        "type": "bytes32",
        "name": "dapiName"
      },
      {
        "type": "bytes",
        "name": "dataFeedDetails"
      },
      {
        "type": "int224",
        "name": "dataFeedValue"
      },
      {
        "type": "uint32",
        "name": "dataFeedTimestamp"
      },
      {
        "type": "int224[]",
        "name": "beaconValues"
      },
      {
        "type": "uint32[]",
        "name": "beaconTimestamps"
      },
      {
        "type": "bytes",
        "name": "updateParameters"
      },
      {
        "type": "string[]",
        "name": "signedApiUrls"
      }
    ]
  },
  {
    "name": "activeDataFeedCount",
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
    "name": "activeDataFeedIdCount",
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
    "name": "airnodeToSignedApiUrl",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "api3ServerV1",
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
    "name": "containsBytecode",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "dapiNameToUpdateParameters",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "updateParameters"
      }
    ]
  },
  {
    "name": "dataFeedIdToDetails",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "dataFeedIdToUpdateParameters",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dataFeedId"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "updateParameters"
      }
    ]
  },
  {
    "name": "dataFeedIsRegistered",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dataFeedId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "getBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getBlockBasefee",
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
    "name": "getBlockNumber",
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
    "name": "getBlockTimestamp",
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
    "name": "getChainId",
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
    "name": "multicall",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bytes[]",
        "name": "returndata"
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
    "name": "registerDataFeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes",
        "name": "dataFeedDetails"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "dataFeedId"
      }
    ]
  },
  {
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setDapiNameToBeActivated",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName"
      }
    ],
    "outputs": []
  },
  {
    "name": "setDapiNameToBeDeactivated",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName"
      }
    ],
    "outputs": []
  },
  {
    "name": "setDapiNameUpdateParameters",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName"
      },
      {
        "type": "bytes",
        "name": "updateParameters"
      }
    ],
    "outputs": []
  },
  {
    "name": "setDataFeedIdToBeActivated",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dataFeedId"
      }
    ],
    "outputs": []
  },
  {
    "name": "setDataFeedIdToBeDeactivated",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dataFeedId"
      }
    ],
    "outputs": []
  },
  {
    "name": "setDataFeedIdUpdateParameters",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dataFeedId"
      },
      {
        "type": "bytes",
        "name": "updateParameters"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSignedApiUrl",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "airnode"
      },
      {
        "type": "string",
        "name": "signedApiUrl"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferOwnership",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": []
  },
  {
    "name": "tryMulticall",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes[]",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bool[]",
        "name": "successes"
      },
      {
        "type": "bytes[]",
        "name": "returndata"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract