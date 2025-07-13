import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 34125,
  address: '0x721c008fdff27bf06e7e123956e2fe03b63342e3' as const,
  contract_name: 'CreatorTokenTransferValidator',
  display_name: 'Creator Token Transfer Validator',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1745604661,
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
        "name": "eoaRegistry_"
      },
      {
        "type": "address",
        "name": "managementModule_"
      },
      {
        "type": "address",
        "name": "safeDelegateModule_"
      },
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "string",
        "name": "version"
      }
    ]
  },
  {
    "name": "CollateralizedPausableFlags__NotPaused",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CollateralizedPausableFlags__Paused",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CollateralizedPausableFlags__WithdrawFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__AmountExceedsAuthorization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__AuthorizationDisabledForCollection",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__CallerMustBeAnAuthorizer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__InvalidConstructorArgs",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__OnlyValidatorCanAccessThisFunction",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__TokenTypesDoNotMatch",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__WildcardOperatorsCannotBeAuthorizedForCollection",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyDirectCalls",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Ownable__CallerIsNotOwner",
    "type": "error",
    "inputs": []
  },
  {
    "name": "Ownable__NewOwnerIsZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PermitC__AmountExceedsStorageMaximum",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PermitC__ApprovalTransferExceededPermittedAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PermitC__ApprovalTransferPermitExpiredOrUnset",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PermitC__CallerMustBeOwnerOrOperator",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PermitC__InvalidTokenType",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PermitC__NonceAlreadyUsedOrRevoked",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PermitC__NonceNotUsedOrRevoked",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PermitC__OrderIsEitherCancelledOrFilled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PermitC__SignatureTransferExceededPermitExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PermitC__SignatureTransferExceededPermittedAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PermitC__SignatureTransferInvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PermitC__SignatureTransferPermitHashNotRegistered",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PermitC__UnableToFillMinimumRequestedQuantity",
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
    "name": "Approval",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "token",
        "indexed": true
      },
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint200",
        "name": "amount"
      },
      {
        "type": "uint48",
        "name": "expiration"
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
    "name": "Lockdown",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      }
    ]
  },
  {
    "name": "OrderClosed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "wasCancellation"
      }
    ]
  },
  {
    "name": "OrderFilled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "OrderOpened",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "fillableQuantity"
      }
    ]
  },
  {
    "name": "OrderRestored",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "orderId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amountRestoredToOrder"
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
    "name": "PausableFlagsUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "previousFlags"
      },
      {
        "type": "uint256",
        "name": "newFlags"
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
    "name": "__activateTstore",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
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
    "name": "allowance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "uint256",
        "name": "tokenType"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "allowedAmount"
      },
      {
        "type": "uint256",
        "name": "expiration"
      }
    ]
  },
  {
    "name": "allowance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "uint256",
        "name": "tokenType"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "bytes32",
        "name": "orderId"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "allowedAmount"
      },
      {
        "type": "uint256",
        "name": "expiration"
      }
    ]
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
        "type": "uint48",
        "name": "id"
      }
    ],
    "outputs": []
  },
  {
    "name": "approve",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenType"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "uint200",
        "name": "amount"
      },
      {
        "type": "uint48",
        "name": "expiration"
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
      },
      {
        "type": "uint256",
        "name": "tokenId"
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
    "name": "beforeAuthorizedTransferWithAmount",
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
    "name": "bindRuleset",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "rulesetId"
      },
      {
        "type": "address",
        "name": "ruleset"
      }
    ],
    "outputs": []
  },
  {
    "name": "boundRuleset",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "rulesetId"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "closePermittedOrder",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "uint256",
        "name": "tokenType"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "bytes32",
        "name": "orderId"
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
    "name": "domainSeparatorV4",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes32",
        "name": "domainSeparator"
      }
    ]
  },
  {
    "name": "fillPermittedOrderERC1155",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes",
        "name": "signedPermit"
      },
      {
        "type": "tuple",
        "name": "orderFillAmounts",
        "components": [
          {
            "type": "uint256",
            "name": "orderStartAmount"
          },
          {
            "type": "uint256",
            "name": "requestedFillAmount"
          },
          {
            "type": "uint256",
            "name": "minimumFillAmount"
          }
        ]
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "salt"
      },
      {
        "type": "uint48",
        "name": "expiration"
      },
      {
        "type": "bytes32",
        "name": "orderId"
      },
      {
        "type": "bytes32",
        "name": "advancedPermitHash"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "quantityFilled"
      },
      {
        "type": "bool",
        "name": "isError"
      }
    ]
  },
  {
    "name": "fillPermittedOrderERC20",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes",
        "name": "signedPermit"
      },
      {
        "type": "tuple",
        "name": "orderFillAmounts",
        "components": [
          {
            "type": "uint256",
            "name": "orderStartAmount"
          },
          {
            "type": "uint256",
            "name": "requestedFillAmount"
          },
          {
            "type": "uint256",
            "name": "minimumFillAmount"
          }
        ]
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "salt"
      },
      {
        "type": "uint48",
        "name": "expiration"
      },
      {
        "type": "bytes32",
        "name": "orderId"
      },
      {
        "type": "bytes32",
        "name": "advancedPermitHash"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "quantityFilled"
      },
      {
        "type": "bool",
        "name": "isError"
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
    "name": "getCollectionExpansionDatums",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "bytes32[]",
        "name": "keys"
      }
    ],
    "outputs": [
      {
        "type": "bytes[]",
        "name": "values"
      }
    ]
  },
  {
    "name": "getCollectionExpansionWords",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
      {
        "type": "bytes32[]",
        "name": "keys"
      }
    ],
    "outputs": [
      {
        "type": "bytes32[]",
        "name": "values"
      }
    ]
  },
  {
    "name": "getCollectionSecurityPolicy",
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
        "type": "tuple",
        "components": [
          {
            "type": "uint8",
            "name": "rulesetId"
          },
          {
            "type": "uint48",
            "name": "listId"
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
          },
          {
            "type": "uint16",
            "name": "tokenType"
          }
        ]
      }
    ]
  },
  {
    "name": "getFrozenAccountsByCollection",
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
    "name": "getListAccounts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint48",
        "name": "id"
      },
      {
        "type": "uint8",
        "name": "listType"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getListAccountsByCollection",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint8",
        "name": "listType"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getListCodeHashes",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint48",
        "name": "id"
      },
      {
        "type": "uint8",
        "name": "listType"
      }
    ],
    "outputs": [
      {
        "type": "bytes32[]"
      }
    ]
  },
  {
    "name": "getListCodeHashesByCollection",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint8",
        "name": "listType"
      }
    ],
    "outputs": [
      {
        "type": "bytes32[]"
      }
    ]
  },
  {
    "name": "invalidateUnorderedNonce",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "nonce"
      }
    ],
    "outputs": []
  },
  {
    "name": "isAccountFrozenForCollection",
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
    "name": "isAccountInList",
    "type": "function",
    "stateMutability": "view",
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
    "name": "isAccountInListByCollection",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint8",
        "name": "listType"
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
    "name": "isCodeHashInList",
    "type": "function",
    "stateMutability": "view",
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
        "type": "bytes32",
        "name": "codehash"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isCodeHashInListByCollection",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
      {
        "type": "uint8",
        "name": "listType"
      },
      {
        "type": "bytes32",
        "name": "codehash"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isRegisteredOrderAdditionalDataHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hash"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isRegistered"
      }
    ]
  },
  {
    "name": "isRegisteredTransferAdditionalDataHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "hash"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isRegistered"
      }
    ]
  },
  {
    "name": "isRulesetRegistered",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "ruleset"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isValidUnorderedNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "uint256",
        "name": "nonce"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isValid"
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
        "type": "uint48"
      }
    ]
  },
  {
    "name": "listOwners",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint48",
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
    "name": "lockdown",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "masterNonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
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
    "name": "pausableConfigurationSettings",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "_nativeValueToCheckPauseState"
      },
      {
        "type": "uint256",
        "name": "_pausableFlags"
      }
    ]
  },
  {
    "name": "pausableDepositCollateral",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "pause",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_pausableFlags"
      }
    ],
    "outputs": []
  },
  {
    "name": "permitTransferFromERC1155",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "permitAmount"
      },
      {
        "type": "uint256",
        "name": "expiration"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "transferAmount"
      },
      {
        "type": "bytes",
        "name": "signedPermit"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isError"
      }
    ]
  },
  {
    "name": "permitTransferFromERC20",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "permitAmount"
      },
      {
        "type": "uint256",
        "name": "expiration"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "transferAmount"
      },
      {
        "type": "bytes",
        "name": "signedPermit"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isError"
      }
    ]
  },
  {
    "name": "permitTransferFromERC721",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "expiration"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "bytes",
        "name": "signedPermit"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isError"
      }
    ]
  },
  {
    "name": "permitTransferFromWithAdditionalDataERC1155",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "permitAmount"
      },
      {
        "type": "uint256",
        "name": "expiration"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "transferAmount"
      },
      {
        "type": "bytes32",
        "name": "additionalData"
      },
      {
        "type": "bytes32",
        "name": "advancedPermitHash"
      },
      {
        "type": "bytes",
        "name": "signedPermit"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isError"
      }
    ]
  },
  {
    "name": "permitTransferFromWithAdditionalDataERC20",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "permitAmount"
      },
      {
        "type": "uint256",
        "name": "expiration"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "transferAmount"
      },
      {
        "type": "bytes32",
        "name": "additionalData"
      },
      {
        "type": "bytes32",
        "name": "advancedPermitHash"
      },
      {
        "type": "bytes",
        "name": "signedPermit"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isError"
      }
    ]
  },
  {
    "name": "permitTransferFromWithAdditionalDataERC721",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint256",
        "name": "expiration"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "bytes32",
        "name": "additionalData"
      },
      {
        "type": "bytes32",
        "name": "advancedPermitHash"
      },
      {
        "type": "bytes",
        "name": "signedPermit"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isError"
      }
    ]
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
    "name": "registerAdditionalDataHash",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "string",
        "name": "additionalDataTypeString"
      }
    ],
    "outputs": []
  },
  {
    "name": "registerRuleset",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "ruleset"
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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
    "name": "transferFromERC1155",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isError"
      }
    ]
  },
  {
    "name": "transferFromERC20",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isError"
      }
    ]
  },
  {
    "name": "transferFromERC721",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "id"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isError"
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
  },
  {
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "withdrawTo"
      },
      {
        "type": "uint256",
        "name": "withdrawAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateApprovalBySignature",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenType"
      },
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "nonce"
      },
      {
        "type": "uint200",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "uint48",
        "name": "approvalExpiration"
      },
      {
        "type": "uint48",
        "name": "sigDeadline"
      },
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "bytes",
        "name": "signedPermit"
      }
    ],
    "outputs": []
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
  },
  {
    "name": "validateTransferDelegateCall",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "authorizerCheckType"
      },
      {
        "type": "address",
        "name": "collection"
      },
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
    "outputs": [
      {
        "type": "bytes4",
        "name": "errorSelector"
      },
      {
        "type": "uint16",
        "name": "tokenType"
      }
    ]
  },
  {
    "name": "validateTransferSim",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
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
    "outputs": [
      {
        "type": "bool",
        "name": "isTransferAllowed"
      },
      {
        "type": "bytes4",
        "name": "errorCode"
      }
    ]
  },
  {
    "name": "validateTransferSim",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
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
    "outputs": [
      {
        "type": "bool",
        "name": "isTransferAllowed"
      },
      {
        "type": "bytes4",
        "name": "errorCode"
      }
    ]
  },
  {
    "name": "validateTransferSim",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
      },
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
    "outputs": [
      {
        "type": "bool",
        "name": "isTransferAllowed"
      },
      {
        "type": "bytes4",
        "name": "errorCode"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract