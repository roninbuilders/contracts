import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 29596,
  address: '0x000056f7000000ece9003ca63978907a00ffd100' as const,
  contract_name: 'SignedZone',
  display_name: 'Signed Zone',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742225046,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "zoneName"
      }
    ]
  },
  {
    "name": "CallerNotSeaport",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidController",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidExtraDataLength",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderHash"
      }
    ]
  },
  {
    "name": "InvalidFulfiller",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "expectedFulfiller"
      },
      {
        "type": "address",
        "name": "actualFulfiller"
      },
      {
        "type": "bytes32",
        "name": "orderHash"
      }
    ]
  },
  {
    "name": "InvalidReceivedItem",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "expectedReceivedIdentifier"
      },
      {
        "type": "uint256",
        "name": "actualReceievedIdentifier"
      },
      {
        "type": "bytes32",
        "name": "orderHash"
      }
    ]
  },
  {
    "name": "InvalidSIP6Version",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderHash"
      }
    ]
  },
  {
    "name": "InvalidSubstandardSupport",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "reason"
      },
      {
        "type": "uint256",
        "name": "substandardVersion"
      },
      {
        "type": "bytes32",
        "name": "orderHash"
      }
    ]
  },
  {
    "name": "InvalidSubstandardVersion",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderHash"
      }
    ]
  },
  {
    "name": "InvalidZoneParameterEncoding",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SignatureExpired",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "expiration"
      },
      {
        "type": "bytes32",
        "name": "orderHash"
      }
    ]
  },
  {
    "name": "SignerNotActive",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "signer"
      },
      {
        "type": "bytes32",
        "name": "orderHash"
      }
    ]
  },
  {
    "name": "UnsupportedFunctionSelector",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SeaportCompatibleContractDeployed",
    "type": "event",
    "inputs": []
  },
  {
    "name": "SignerAdded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "signer"
      }
    ]
  },
  {
    "name": "SignerRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "signer"
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "nonpayable"
  },
  {
    "name": "authorizeOrder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "zoneParameters",
        "components": [
          {
            "type": "bytes32",
            "name": "orderHash"
          },
          {
            "type": "address",
            "name": "fulfiller"
          },
          {
            "type": "address",
            "name": "offerer"
          },
          {
            "type": "tuple[]",
            "name": "offer",
            "components": [
              {
                "type": "uint8",
                "name": "itemType"
              },
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "identifier"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "consideration",
            "components": [
              {
                "type": "uint8",
                "name": "itemType"
              },
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "identifier"
              },
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "address",
                "name": "recipient"
              }
            ]
          },
          {
            "type": "bytes",
            "name": "extraData"
          },
          {
            "type": "bytes32[]",
            "name": "orderHashes"
          },
          {
            "type": "uint256",
            "name": "startTime"
          },
          {
            "type": "uint256",
            "name": "endTime"
          },
          {
            "type": "bytes32",
            "name": "zoneHash"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes4",
        "name": "authorizedOrderMagicValue"
      }
    ]
  },
  {
    "name": "getSeaportMetadata",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "tuple[]",
        "name": "schemas",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "bytes",
            "name": "metadata"
          }
        ]
      }
    ]
  },
  {
    "name": "supportsInterface",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes4",
        "name": "interfaceId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "validateOrder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "zoneParameters",
        "components": [
          {
            "type": "bytes32",
            "name": "orderHash"
          },
          {
            "type": "address",
            "name": "fulfiller"
          },
          {
            "type": "address",
            "name": "offerer"
          },
          {
            "type": "tuple[]",
            "name": "offer",
            "components": [
              {
                "type": "uint8",
                "name": "itemType"
              },
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "identifier"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "consideration",
            "components": [
              {
                "type": "uint8",
                "name": "itemType"
              },
              {
                "type": "address",
                "name": "token"
              },
              {
                "type": "uint256",
                "name": "identifier"
              },
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "address",
                "name": "recipient"
              }
            ]
          },
          {
            "type": "bytes",
            "name": "extraData"
          },
          {
            "type": "bytes32[]",
            "name": "orderHashes"
          },
          {
            "type": "uint256",
            "name": "startTime"
          },
          {
            "type": "uint256",
            "name": "endTime"
          },
          {
            "type": "bytes32",
            "name": "zoneHash"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes4",
        "name": "validOrderMagicValue"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract