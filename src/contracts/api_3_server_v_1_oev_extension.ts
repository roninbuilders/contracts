import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 25625,
  address: '0x55cf1079a115029a879ec3a11ba5d453272eb61d' as const,
  contract_name: 'Api3ServerV1OevExtension',
  display_name: 'Api 3 Server V1 Oev Extension',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1739452280,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "accessControlRegistry_"
      },
      {
        "type": "string",
        "name": "adminRoleDescription_"
      },
      {
        "type": "address",
        "name": "manager_"
      },
      {
        "type": "address",
        "name": "api3ServerV1_"
      }
    ]
  },
  {
    "name": "PaidOevBid",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "dappId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "updater",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "bidAmount"
      },
      {
        "type": "uint256",
        "name": "signedDataTimestampCutoff"
      },
      {
        "type": "address",
        "name": "auctioneer"
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
    "name": "UpdatedDappOevDataFeed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "dappId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "updater",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "dataFeedId"
      },
      {
        "type": "int224",
        "name": "updatedValue"
      },
      {
        "type": "uint32",
        "name": "updatedTimestamp"
      }
    ]
  },
  {
    "name": "Withdrew",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "sender"
      }
    ]
  },
  {
    "name": "AUCTIONEER_ROLE_DESCRIPTION",
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
    "name": "WITHDRAWER_ROLE_DESCRIPTION",
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
    "name": "auctioneerRole",
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
    "name": "dappIdToLastPaidBid",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "updater"
      },
      {
        "type": "uint32",
        "name": "signedDataTimestampCutoff"
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
    "name": "oevDataFeed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "dappId"
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
    "name": "payOevBid",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "dappId"
      },
      {
        "type": "uint256",
        "name": "bidAmount"
      },
      {
        "type": "uint32",
        "name": "signedDataTimestampCutoff"
      },
      {
        "type": "bytes",
        "name": "signature"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "simulateDappOevDataFeedUpdate",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "dappId"
      },
      {
        "type": "bytes[]",
        "name": "signedData"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "baseDataFeedId"
      },
      {
        "type": "int224",
        "name": "updatedValue"
      },
      {
        "type": "uint32",
        "name": "updatedTimestamp"
      }
    ]
  },
  {
    "name": "simulateExternalCall",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
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
    "name": "updateDappOevDataFeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "dappId"
      },
      {
        "type": "bytes[]",
        "name": "signedData"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "baseDataFeedId"
      },
      {
        "type": "int224",
        "name": "updatedValue"
      },
      {
        "type": "uint32",
        "name": "updatedTimestamp"
      }
    ]
  },
  {
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "recipient"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "withdrawerRole",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract