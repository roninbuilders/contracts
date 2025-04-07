import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25624,
  address: '0x2ab9f26e18b64848cd349582ca3b55c2d06f507d' as const,
  contract_name: 'Api3ServerV1',
  display_name: 'Api 3 Server V1',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739452265,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_accessControlRegistry"
      },
      {
        "type": "string",
        "name": "_adminRoleDescription"
      },
      {
        "type": "address",
        "name": "_manager"
      }
    ]
  },
  {
    "name": "SetDapiName",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dataFeedId",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "dapiName",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender"
      }
    ]
  },
  {
    "name": "UpdatedBeaconSetWithBeacons",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "beaconSetId",
        "indexed": true
      },
      {
        "type": "int224",
        "name": "value"
      },
      {
        "type": "uint32",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "UpdatedBeaconWithSignedData",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "beaconId",
        "indexed": true
      },
      {
        "type": "int224",
        "name": "value"
      },
      {
        "type": "uint32",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "UpdatedOevProxyBeaconSetWithSignedData",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "beaconSetId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "proxy",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "updateId",
        "indexed": true
      },
      {
        "type": "int224",
        "name": "value"
      },
      {
        "type": "uint32",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "UpdatedOevProxyBeaconWithSignedData",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "beaconId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "proxy",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "updateId",
        "indexed": true
      },
      {
        "type": "int224",
        "name": "value"
      },
      {
        "type": "uint32",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "Withdrew",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oevProxy",
        "indexed": true
      },
      {
        "type": "address",
        "name": "oevBeneficiary"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "DAPI_NAME_SETTER_ROLE_DESCRIPTION",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
      }
    ]
  },
  {
    "name": "accessControlRegistry",
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
    "name": "adminRole",
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
    "name": "adminRoleDescription",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string"
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
    "name": "dapiNameHashToDataFeedId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "dapiNameSetterRole",
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
    "name": "dapiNameToDataFeedId",
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
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "dataFeeds",
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
        "type": "int224",
        "name": "value"
      },
      {
        "type": "uint32",
        "name": "timestamp"
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
    "name": "manager",
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
    "name": "oevProxyToBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "oevProxyToIdToDataFeed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "proxy"
      },
      {
        "type": "bytes32",
        "name": "dataFeedId"
      }
    ],
    "outputs": [
      {
        "type": "int224",
        "name": "value"
      },
      {
        "type": "uint32",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "readDataFeedWithDapiNameHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiNameHash"
      }
    ],
    "outputs": [
      {
        "type": "int224",
        "name": "value"
      },
      {
        "type": "uint32",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "readDataFeedWithDapiNameHashAsOevProxy",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiNameHash"
      }
    ],
    "outputs": [
      {
        "type": "int224",
        "name": "value"
      },
      {
        "type": "uint32",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "readDataFeedWithId",
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
        "type": "int224",
        "name": "value"
      },
      {
        "type": "uint32",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "readDataFeedWithIdAsOevProxy",
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
        "type": "int224",
        "name": "value"
      },
      {
        "type": "uint32",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "setDapiName",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "dapiName"
      },
      {
        "type": "bytes32",
        "name": "dataFeedId"
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
  },
  {
    "name": "updateBeaconSetWithBeacons",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32[]",
        "name": "beaconIds"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "beaconSetId"
      }
    ]
  },
  {
    "name": "updateBeaconWithSignedData",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "airnode"
      },
      {
        "type": "bytes32",
        "name": "templateId"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "beaconId"
      }
    ]
  },
  {
    "name": "updateOevProxyDataFeedWithSignedData",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "oevProxy"
      },
      {
        "type": "bytes32",
        "name": "dataFeedId"
      },
      {
        "type": "bytes32",
        "name": "updateId"
      },
      {
        "type": "uint256",
        "name": "timestamp"
      },
      {
        "type": "bytes",
        "name": "data"
      },
      {
        "type": "bytes[]",
        "name": "packedOevUpdateSignatures"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "oevProxy"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract