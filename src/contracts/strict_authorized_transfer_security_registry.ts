import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 32784,
  address: '0xa000027a9b2802e1ddf7000061001e5c005a0000' as const,
  contract_name: 'StrictAuthorizedTransferSecurityRegistry',
  display_name: 'Strict Authorized Transfer Security Registry',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742225484,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "defaultOwner"
      },
      {
        "type": "address",
        "name": "eoaRegistry"
      }
    ]
  },
  {
    "name": "OnlyDirectCalls",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StrictAuthorizedTransferSecurityRegistry__ArrayLengthCannotBeZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StrictAuthorizedTransferSecurityRegistry__CallerDoesNotOwnList",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StrictAuthorizedTransferSecurityRegistry__CallerIsNotValidAuthorizer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StrictAuthorizedTransferSecurityRegistry__CallerMustBeWhitelistedOperator",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StrictAuthorizedTransferSecurityRegistry__CallerMustHaveElevatedPermissionsForSpecifiedNFT",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StrictAuthorizedTransferSecurityRegistry__ListDoesNotExist",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StrictAuthorizedTransferSecurityRegistry__ListOwnershipCannotBeTransferredToZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StrictAuthorizedTransferSecurityRegistry__ReceiverMustNotHaveDeployedCode",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StrictAuthorizedTransferSecurityRegistry__ReceiverProofOfEOASignatureUnverified",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StrictAuthorizedTransferSecurityRegistry__UnauthorizedTransfer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StrictAuthorizedTransferSecurityRegistry__UnsupportedSecurityLevel",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StrictAuthorizedTransferSecurityRegistry__UnsupportedSecurityLevelDetail",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StrictAuthorizedTransferSecurityRegistry__ZeroAddressNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TStoreAlreadyActivated",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TStoreNotSupported",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TloadTestContractDeploymentFailed",
    "type": "error",
    "inputs": []
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
        "type": "uint256",
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
    "name": "AppliedListToCollection",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "uint120",
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
        "type": "uint256",
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
    "name": "SetTransferSecurityLevel",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint8",
        "name": "level"
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "nonpayable"
  },
  {
    "name": "__activateTstore",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "addAccountToAuthorizers",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "addAccountToBlacklist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "addAccountToWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "addAccountsToAuthorizers",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      },
      {
        "type": "address[]",
        "name": "accounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "addAccountsToBlacklist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      },
      {
        "type": "address[]",
        "name": "accounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "addAccountsToWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      },
      {
        "type": "address[]",
        "name": "accounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "addAuthorizers",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      },
      {
        "type": "address[]",
        "name": "accounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "addOperators",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      },
      {
        "type": "address[]",
        "name": "accounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "afterAuthorizedTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": []
  },
  {
    "name": "afterAuthorizedTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "afterAuthorizedTransferWithAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "applyCollectionTransferPolicy",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
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
        "type": "uint120",
        "name": "id"
      }
    ],
    "outputs": []
  },
  {
    "name": "beforeAuthorizedTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "beforeAuthorizedTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": []
  },
  {
    "name": "beforeAuthorizedTransferWithAmount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "amount"
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
        "type": "uint120"
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
        "type": "uint120",
        "name": "sourceListId"
      }
    ],
    "outputs": [
      {
        "type": "uint120"
      }
    ]
  },
  {
    "name": "getAuthorizerAccounts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getAuthorizerAccountsByCollection",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getBlacklistedAccounts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getBlacklistedAccountsByCollection",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getWhitelistedAccounts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getWhitelistedAccountsByCollection",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "isAccountAuthorizer",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      },
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
    "name": "isAccountAuthorizerOfCollection",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
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
    "name": "isAccountBlacklisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      },
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
    "name": "isAccountBlacklistedByCollection",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
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
    "name": "isAccountWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      },
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
    "name": "isAccountWhitelistedByCollection",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
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
    "name": "isVerifiedEOA",
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
    "name": "lastListId",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint120"
      }
    ]
  },
  {
    "name": "listOwners",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "reassignOwnershipOfList",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint120",
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
    "name": "removeAccountFromAuthorizers",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeAccountFromBlacklist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeAccountFromWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeAccountsFromAuthorizers",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      },
      {
        "type": "address[]",
        "name": "accounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeAccountsFromBlacklist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      },
      {
        "type": "address[]",
        "name": "accounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeAccountsFromWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      },
      {
        "type": "address[]",
        "name": "accounts"
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
        "type": "uint120",
        "name": "id"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTransferSecurityLevelOfCollection",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint8",
        "name": "level"
      },
      {
        "type": "bool",
        "name": "enableAuthorizationMode"
      },
      {
        "type": "bool",
        "name": "authorizersCanSetWildcardOperators"
      },
      {
        "type": "bool",
        "name": "enableAccountFreezingMode"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTransferSecurityLevelOfCollection",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint8",
        "name": "level"
      }
    ],
    "outputs": []
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
    "name": "validateTransfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "validateTransfer",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      }
    ],
    "outputs": []
  },
  {
    "name": "validateTransfer",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      },
      {
        "type": "address",
        "name": "from"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract