import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34123,
  address: '0x721c002d2cae3522602b93a0c48e11dc573a15e3' as const,
  contract_name: 'ModuleCollectionAndListManagement',
  display_name: 'Module Collection And List Management',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1745604637,
  abi: [
  {
    "name": "CreatorTokenTransferValidator__CallerDoesNotOwnList",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__CallerMustHaveElevatedPermissionsForSpecifiedNFT",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__CannotRenounceOwnershipOfDefaultList",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__CannotSetCustomRulesetOnManagedRulesetId",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__InvalidTransferSecurityLevel",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__ListDoesNotExist",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__ListOwnershipCannotBeTransferredToZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__RulesetIsNotRegistered",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AccountFrozenForCollection",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      }
    ]
  },
  {
    "name": "AccountUnfrozenForCollection",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      }
    ]
  },
  {
    "name": "AddedAccountToList",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "kind",
        "indexed": true
      },
      {
        "type": "uint48",
        "name": "id",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      }
    ]
  },
  {
    "name": "AddedCodeHashToList",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "kind",
        "indexed": true
      },
      {
        "type": "uint48",
        "name": "id",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "codehash",
        "indexed": true
      }
    ]
  },
  {
    "name": "AppliedListToCollection",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "uint48",
        "name": "id",
        "indexed": true
      }
    ]
  },
  {
    "name": "CreatedList",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "id",
        "indexed": true
      },
      {
        "type": "string",
        "name": "name"
      }
    ]
  },
  {
    "name": "ReassignedListOwnership",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "id",
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
    "name": "RemovedAccountFromList",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "kind",
        "indexed": true
      },
      {
        "type": "uint48",
        "name": "id",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      }
    ]
  },
  {
    "name": "RemovedCodeHashFromList",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "kind",
        "indexed": true
      },
      {
        "type": "uint48",
        "name": "id",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "codehash",
        "indexed": true
      }
    ]
  },
  {
    "name": "SetCollectionExpansionDatums",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "key",
        "indexed": true
      },
      {
        "type": "bytes",
        "name": "value"
      }
    ]
  },
  {
    "name": "SetCollectionExpansionWords",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "key",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "value"
      }
    ]
  },
  {
    "name": "SetCollectionRuleset",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "rulesetId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "customRuleset",
        "indexed": true
      }
    ]
  },
  {
    "name": "SetCollectionSecurityPolicyOptions",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "globalOptions"
      },
      {
        "type": "uint16",
        "name": "rulesetOptions"
      }
    ]
  },
  {
    "name": "SetTokenType",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "uint16",
        "name": "tokenType"
      }
    ]
  },
  {
    "name": "addAccountsToList",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint48",
        "name": "id"
      },
      {
        "type": "uint8",
        "name": "listType"
      },
      {
        "type": "address[]",
        "name": "accounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "addCodeHashesToList",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint48",
        "name": "id"
      },
      {
        "type": "uint8",
        "name": "listType"
      },
      {
        "type": "bytes32[]",
        "name": "codehashes"
      }
    ],
    "outputs": []
  },
  {
    "name": "applyListToCollection",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint48",
        "name": "id"
      }
    ],
    "outputs": []
  },
  {
    "name": "createList",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      }
    ],
    "outputs": [
      {
        "type": "uint48",
        "name": "id"
      }
    ]
  },
  {
    "name": "createListCopy",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "uint48",
        "name": "sourceListId"
      },
      {
        "type": "uint8[]",
        "name": "listTypes"
      }
    ],
    "outputs": [
      {
        "type": "uint48",
        "name": "id"
      }
    ]
  },
  {
    "name": "createListCopy",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "uint48",
        "name": "sourceListId"
      }
    ],
    "outputs": [
      {
        "type": "uint48",
        "name": "id"
      }
    ]
  },
  {
    "name": "freezeAccountsForCollection",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "address[]",
        "name": "accountsToFreeze"
      }
    ],
    "outputs": []
  },
  {
    "name": "reassignOwnershipOfList",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint48",
        "name": "id"
      },
      {
        "type": "address",
        "name": "newOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeAccountsFromList",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint48",
        "name": "id"
      },
      {
        "type": "uint8",
        "name": "listType"
      },
      {
        "type": "address[]",
        "name": "accounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeCodeHashesFromList",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint48",
        "name": "id"
      },
      {
        "type": "uint8",
        "name": "listType"
      },
      {
        "type": "bytes32[]",
        "name": "codehashes"
      }
    ],
    "outputs": []
  },
  {
    "name": "renounceOwnershipOfList",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint48",
        "name": "id"
      }
    ],
    "outputs": []
  },
  {
    "name": "setExpansionSettingsOfCollection",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "tuple[]",
        "name": "expansionWords",
        "components": [
          {
            "type": "bytes32",
            "name": "key"
          },
          {
            "type": "bytes32",
            "name": "value"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "expansionDatums",
        "components": [
          {
            "type": "bytes32",
            "name": "key"
          },
          {
            "type": "bytes",
            "name": "value"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setRulesetOfCollection",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint8",
        "name": "rulesetId"
      },
      {
        "type": "address",
        "name": "customRuleset"
      },
      {
        "type": "uint8",
        "name": "globalOptions"
      },
      {
        "type": "uint16",
        "name": "rulesetOptions"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTokenTypeOfCollection",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint16",
        "name": "tokenType"
      }
    ],
    "outputs": []
  },
  {
    "name": "unfreezeAccountsForCollection",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "address[]",
        "name": "accountsToUnfreeze"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract