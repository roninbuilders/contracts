import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 7204,
  address: '0x341f783e47abdde16ff138491248b4b19d2706bd' as const,
  contract_name: 'Operator',
  display_name: 'Operator',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1736944462,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "link"
      },
      {
        "type": "address",
        "name": "owner"
      }
    ]
  },
  {
    "name": "AuthorizedSendersChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "senders"
      },
      {
        "type": "address",
        "name": "changedBy"
      }
    ]
  },
  {
    "name": "CancelOracleRequest",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestId",
        "indexed": true
      }
    ]
  },
  {
    "name": "OracleRequest",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "specId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "requester"
      },
      {
        "type": "bytes32",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "payment"
      },
      {
        "type": "address",
        "name": "callbackAddr"
      },
      {
        "type": "bytes4",
        "name": "callbackFunctionId"
      },
      {
        "type": "uint256",
        "name": "cancelExpiration"
      },
      {
        "type": "uint256",
        "name": "dataVersion"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ]
  },
  {
    "name": "OracleResponse",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestId",
        "indexed": true
      }
    ]
  },
  {
    "name": "OwnableContractAccepted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "acceptedContract",
        "indexed": true
      }
    ]
  },
  {
    "name": "OwnershipTransferRequested",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
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
        "name": "from",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      }
    ]
  },
  {
    "name": "TargetsUpdatedAuthorizedSenders",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "targets"
      },
      {
        "type": "address[]",
        "name": "senders"
      },
      {
        "type": "address",
        "name": "changedBy"
      }
    ]
  },
  {
    "name": "EXPIRYTIME",
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
    "name": "acceptAuthorizedReceivers",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "targets"
      },
      {
        "type": "address[]",
        "name": "senders"
      }
    ],
    "outputs": []
  },
  {
    "name": "acceptOwnableContracts",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "ownable"
      }
    ],
    "outputs": []
  },
  {
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "cancelOracleRequest",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "payment"
      },
      {
        "type": "bytes4",
        "name": "callbackFunc"
      },
      {
        "type": "uint256",
        "name": "expiration"
      }
    ],
    "outputs": []
  },
  {
    "name": "cancelOracleRequestByRequester",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "payment"
      },
      {
        "type": "bytes4",
        "name": "callbackFunc"
      },
      {
        "type": "uint256",
        "name": "expiration"
      }
    ],
    "outputs": []
  },
  {
    "name": "distributeFunds",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address[]",
        "name": "receivers"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "fulfillOracleRequest",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "payment"
      },
      {
        "type": "address",
        "name": "callbackAddress"
      },
      {
        "type": "bytes4",
        "name": "callbackFunctionId"
      },
      {
        "type": "uint256",
        "name": "expiration"
      },
      {
        "type": "bytes32",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "fulfillOracleRequest2",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "payment"
      },
      {
        "type": "address",
        "name": "callbackAddress"
      },
      {
        "type": "bytes4",
        "name": "callbackFunctionId"
      },
      {
        "type": "uint256",
        "name": "expiration"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "getAuthorizedSenders",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getChainlinkToken",
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
    "name": "isAuthorizedSender",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "onTokenTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "operatorRequest",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      },
      {
        "type": "uint256",
        "name": "payment"
      },
      {
        "type": "bytes32",
        "name": "specId"
      },
      {
        "type": "bytes4",
        "name": "callbackFunctionId"
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "dataVersion"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "oracleRequest",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      },
      {
        "type": "uint256",
        "name": "payment"
      },
      {
        "type": "bytes32",
        "name": "specId"
      },
      {
        "type": "address",
        "name": "callbackAddress"
      },
      {
        "type": "bytes4",
        "name": "callbackFunctionId"
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "dataVersion"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
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
    "name": "ownerForward",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "ownerTransferAndCall",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "success"
      }
    ]
  },
  {
    "name": "setAuthorizedSenders",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "senders"
      }
    ],
    "outputs": []
  },
  {
    "name": "setAuthorizedSendersOn",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "targets"
      },
      {
        "type": "address[]",
        "name": "senders"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferOwnableContracts",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "ownable"
      },
      {
        "type": "address",
        "name": "newOwner"
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
        "name": "to"
      }
    ],
    "outputs": []
  },
  {
    "name": "typeAndVersion",
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
    "name": "withdrawable",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract