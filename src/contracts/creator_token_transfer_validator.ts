import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27690,
  address: '0x721c002b0059009a671d00ad1700c9748146cd1b' as const,
  contract_name: 'CreatorTokenTransferValidator',
  display_name: 'Creator Token Transfer Validator',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742222591,
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
    "name": "CreatorTokenTransferValidator__AuthorizationDisabledForCollection",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__CallerDoesNotOwnList",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__CallerMustBeAnAuthorizer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__CallerMustBeWhitelisted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__CallerMustHaveElevatedPermissionsForSpecifiedNFT",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__CannotReassignOwnershipOfDefaultList",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__InvalidConstructorArgs",
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
    "name": "CreatorTokenTransferValidator__OperatorIsBlacklisted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__ReceiverAccountIsFrozen",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__ReceiverMustNotHaveDeployedCode",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__ReceiverProofOfEOASignatureUnverified",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__SenderAccountIsFrozen",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CreatorTokenTransferValidator__TokenIsSoulbound",
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
    "name": "AddedCodeHashToList",
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
        "type": "uint120",
        "name": "id",
        "indexed": true
      }
    ]
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
    "name": "RemovedCodeHashFromList",
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
        "type": "bytes32",
        "name": "codehash",
        "indexed": true
      }
    ]
  },
  {
    "name": "SetAccountFreezingModeEnabled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "enabled"
      }
    ]
  },
  {
    "name": "SetAuthorizationModeEnabled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "disabled"
      },
      {
        "type": "bool",
        "name": "authorizersCannotSetWildcardOperators"
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
    "name": "SetTransferSecurityLevel",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "collection",
        "indexed": true
      },
      {
        "type": "uint8",
        "name": "level"
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
    "name": "addCodeHashesToBlacklist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      },
      {
        "type": "bytes32[]",
        "name": "codehashes"
      }
    ],
    "outputs": []
  },
  {
    "name": "addCodeHashesToWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
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
        "type": "uint120",
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
        "type": "uint256"
      }
    ],
    "outputs": []
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
        "type": "uint120",
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
        "type": "uint120",
        "name": "sourceListId"
      }
    ],
    "outputs": [
      {
        "type": "uint120",
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
    "name": "getBlacklistedCodeHashes",
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
        "type": "bytes32[]"
      }
    ]
  },
  {
    "name": "getBlacklistedCodeHashesByCollection",
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
        "type": "bytes32[]"
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
            "type": "bool",
            "name": "disableAuthorizationMode"
          },
          {
            "type": "bool",
            "name": "authorizersCannotSetWildcardOperators"
          },
          {
            "type": "uint8",
            "name": "transferSecurityLevel"
          },
          {
            "type": "uint120",
            "name": "listId"
          },
          {
            "type": "bool",
            "name": "enableAccountFreezingMode"
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
    "name": "getWhitelistedCodeHashes",
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
        "type": "bytes32[]"
      }
    ]
  },
  {
    "name": "getWhitelistedCodeHashesByCollection",
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
    "name": "isCodeHashBlacklisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
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
    "name": "isCodeHashBlacklistedByCollection",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
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
    "name": "isCodeHashWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
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
    "name": "isCodeHashWhitelistedByCollection",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "collection"
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
        "type": "uint120"
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
    "name": "removeCodeHashesFromBlacklist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
      },
      {
        "type": "bytes32[]",
        "name": "codehashes"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeCodeHashesFromWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint120",
        "name": "id"
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
        "type": "uint120",
        "name": "id"
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
        "name": "disableAuthorizationMode"
      },
      {
        "type": "bool",
        "name": "disableWildcardOperators"
      },
      {
        "type": "bool",
        "name": "enableAccountFreezingMode"
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
    "name": "transferSecurityPolicies",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "level"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "callerConstraints"
      },
      {
        "type": "uint256",
        "name": "receiverConstraints"
      }
    ]
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
        "type": "uint256"
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