import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 36556,
  address: '0xcefdb1d653b18d6cbbfcb5a6709cf9c64e9537e7' as const,
  contract_name: 'StandardPool',
  display_name: 'Standard Pool',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1752850090,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "deploymentParams",
        "components": [
          {
            "type": "string",
            "name": "name"
          },
          {
            "type": "string",
            "name": "symbol"
          },
          {
            "type": "uint8",
            "name": "tokenDecimals"
          },
          {
            "type": "address",
            "name": "initialOwner"
          },
          {
            "type": "address",
            "name": "pairedToken"
          },
          {
            "type": "uint256",
            "name": "initialPairedTokenToDeposit"
          },
          {
            "type": "bytes",
            "name": "encodedInitializationArgs"
          },
          {
            "type": "address",
            "name": "defaultTransferValidator"
          },
          {
            "type": "bool",
            "name": "useRouterForPairedTransfers"
          },
          {
            "type": "address",
            "name": "partnerFeeRecipient"
          },
          {
            "type": "uint256",
            "name": "partnerFeeBPS"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "pairedValueIn"
      },
      {
        "type": "uint256",
        "name": "infrastructureFeeBPS"
      },
      {
        "type": "address",
        "name": "router"
      }
    ]
  },
  {
    "name": "AccessControlBadConfirmation",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AccessControlUnauthorizedAccount",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "bytes32",
        "name": "neededRole"
      }
    ]
  },
  {
    "name": "CreatorTokenBase__InvalidTransferValidatorContract",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ERC20InsufficientAllowance",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "spender"
      },
      {
        "type": "uint256",
        "name": "allowance"
      },
      {
        "type": "uint256",
        "name": "needed"
      }
    ]
  },
  {
    "name": "ERC20InsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      },
      {
        "type": "uint256",
        "name": "balance"
      },
      {
        "type": "uint256",
        "name": "needed"
      }
    ]
  },
  {
    "name": "ERC20InvalidApprover",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "approver"
      }
    ]
  },
  {
    "name": "ERC20InvalidReceiver",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "receiver"
      }
    ]
  },
  {
    "name": "ERC20InvalidSender",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "sender"
      }
    ]
  },
  {
    "name": "ERC20InvalidSpender",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "spender"
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
    "name": "PausableFlags__NotPaused",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PausableFlags__Paused",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ShouldNotMintToBurnAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterERC20__CallerMustBeRouter",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterERC20__CannotWithdrawPairedToken",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterERC20__ERC20TransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterERC20__FailedToSetApproval",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterERC20__ForfeitAmountGreaterThanClaimable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterERC20__InitialPairedDepositCannotBeZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterERC20__InitialSupplyCannotBeZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterERC20__InsufficientBuyInput",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterERC20__InsufficientSellOutput",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterERC20__InvalidPairedValues",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterERC20__InvalidParameters",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterERC20__NativeTransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterERC20__NewHardCapGreaterThanCurrent",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterERC20__RenounceNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenMasterERC20__WithdrawOrTransferAmountGreaterThanShare",
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
        "name": "spender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "AutomaticApprovalOfTransferValidatorSet",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "autoApproved"
      }
    ]
  },
  {
    "name": "BuyParametersUpdated",
    "type": "event",
    "inputs": []
  },
  {
    "name": "CreatorEmissionsClaimed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "claimedAmount"
      },
      {
        "type": "uint256",
        "name": "forfeitedAmount"
      }
    ]
  },
  {
    "name": "CreatorEmissionsHardCapUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "newHardCapAmount"
      }
    ]
  },
  {
    "name": "CreatorShareTransferredToMarket",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "transferAmount"
      },
      {
        "type": "uint256",
        "name": "infrastructureAmount"
      },
      {
        "type": "uint256",
        "name": "partnerAmount"
      }
    ]
  },
  {
    "name": "CreatorShareWithdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "withdrawAmount"
      },
      {
        "type": "uint256",
        "name": "infrastructureAmount"
      },
      {
        "type": "uint256",
        "name": "partnerAmount"
      }
    ]
  },
  {
    "name": "OwnershipTransferStarted",
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
    "name": "RoleGranted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "RoleRevoked",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "address",
        "name": "account",
        "indexed": true
      },
      {
        "type": "address",
        "name": "sender",
        "indexed": true
      }
    ]
  },
  {
    "name": "SellParametersUpdated",
    "type": "event",
    "inputs": []
  },
  {
    "name": "SpendParametersUpdated",
    "type": "event",
    "inputs": []
  },
  {
    "name": "Transfer",
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
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "TransferValidatorUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "oldValidator"
      },
      {
        "type": "address",
        "name": "newValidator"
      }
    ]
  },
  {
    "name": "PAIRED_TOKEN",
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
    "name": "acceptOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
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
        "name": "spender"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_allowance"
      }
    ]
  },
  {
    "name": "approve",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "spender"
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "autoApproveTransfersFromValidator",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "balanceOf",
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
    "name": "buyTokens",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "buyer"
      },
      {
        "type": "uint256",
        "name": "pairedTokenIn"
      },
      {
        "type": "uint256",
        "name": "tokensToBuy"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "totalCost"
      },
      {
        "type": "uint256",
        "name": "refundByRouterAmount"
      }
    ]
  },
  {
    "name": "claimEmissions",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "claimTo"
      },
      {
        "type": "uint256",
        "name": "forfeitAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "decimals",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint8"
      }
    ]
  },
  {
    "name": "getBuyParameters",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "name": "_buyParameters",
        "components": [
          {
            "type": "uint16",
            "name": "buySpreadBPS"
          },
          {
            "type": "uint16",
            "name": "buyFeeBPS"
          },
          {
            "type": "uint96",
            "name": "buyCostPairedTokenNumerator"
          },
          {
            "type": "uint96",
            "name": "buyCostPoolTokenDenominator"
          },
          {
            "type": "bool",
            "name": "useTargetSupply"
          },
          {
            "type": "uint24",
            "name": "reserved"
          },
          {
            "type": "uint16",
            "name": "buyDemandFeeBPS"
          },
          {
            "type": "uint48",
            "name": "targetSupplyBaseline"
          },
          {
            "type": "uint8",
            "name": "targetSupplyBaselineScaleFactor"
          },
          {
            "type": "uint96",
            "name": "targetSupplyGrowthRatePerSecond"
          },
          {
            "type": "uint48",
            "name": "targetSupplyBaselineTimestamp"
          }
        ]
      }
    ]
  },
  {
    "name": "getCreatorEmissions",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "claimed"
      },
      {
        "type": "uint256",
        "name": "claimable"
      },
      {
        "type": "uint256",
        "name": "hardCap"
      },
      {
        "type": "uint48",
        "name": "lastClaim"
      },
      {
        "type": "uint128",
        "name": "creatorEmissionRateNumerator"
      },
      {
        "type": "uint128",
        "name": "creatorEmissionRateDenominator"
      }
    ]
  },
  {
    "name": "getDefaultTransferValidator",
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
    "name": "getParameterGuardrails",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint16",
        "name": "minBuySpreadBPS"
      },
      {
        "type": "uint16",
        "name": "maxBuySpreadBPS"
      },
      {
        "type": "uint16",
        "name": "maxBuyFeeBPS"
      },
      {
        "type": "uint16",
        "name": "maxBuyDemandFeeBPS"
      },
      {
        "type": "uint16",
        "name": "minSellSpreadBPS"
      },
      {
        "type": "uint16",
        "name": "maxSellSpreadBPS"
      },
      {
        "type": "uint16",
        "name": "maxSellFeeBPS"
      },
      {
        "type": "uint16",
        "name": "maxSpendCreatorShareBPS"
      }
    ]
  },
  {
    "name": "getPausableFlags",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "_pausableFlags"
      }
    ]
  },
  {
    "name": "getSellParameters",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "name": "_sellParameters",
        "components": [
          {
            "type": "uint16",
            "name": "sellSpreadBPS"
          },
          {
            "type": "uint16",
            "name": "sellFeeBPS"
          }
        ]
      }
    ]
  },
  {
    "name": "getSpendParameters",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "name": "_spendParameters",
        "components": [
          {
            "type": "uint16",
            "name": "creatorShareBPS"
          }
        ]
      }
    ]
  },
  {
    "name": "getTransferValidationFunction",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes4",
        "name": "functionSignature"
      },
      {
        "type": "bool",
        "name": "isViewFunction"
      }
    ]
  },
  {
    "name": "getTransferValidator",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "validator"
      }
    ]
  },
  {
    "name": "grantRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "hasRole",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
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
    "name": "name",
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
    "name": "pairedTokenShares",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "marketShare"
      },
      {
        "type": "uint256",
        "name": "creatorShare"
      },
      {
        "type": "uint256",
        "name": "infrastructureShare"
      },
      {
        "type": "uint256",
        "name": "partnerShare"
      }
    ]
  },
  {
    "name": "pause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_pausableFlags"
      }
    ],
    "outputs": []
  },
  {
    "name": "pendingOwner",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "renounceRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "callerConfirmation"
      }
    ],
    "outputs": []
  },
  {
    "name": "resetPairedTokenApproval",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "revokeRole",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      },
      {
        "type": "address",
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "sellTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "seller"
      },
      {
        "type": "uint256",
        "name": "tokensToSell"
      },
      {
        "type": "uint256",
        "name": "pairedTokenMinimumOut"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "pairedToken"
      },
      {
        "type": "uint256",
        "name": "pairedValueToSeller"
      },
      {
        "type": "uint256",
        "name": "transferByRouterAmount"
      }
    ]
  },
  {
    "name": "setAutomaticApprovalOfTransfersFromValidator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "autoApprove"
      }
    ],
    "outputs": []
  },
  {
    "name": "setBuyParameters",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_buyParameters",
        "components": [
          {
            "type": "uint16",
            "name": "buySpreadBPS"
          },
          {
            "type": "uint16",
            "name": "buyFeeBPS"
          },
          {
            "type": "uint96",
            "name": "buyCostPairedTokenNumerator"
          },
          {
            "type": "uint96",
            "name": "buyCostPoolTokenDenominator"
          },
          {
            "type": "bool",
            "name": "useTargetSupply"
          },
          {
            "type": "uint24",
            "name": "reserved"
          },
          {
            "type": "uint16",
            "name": "buyDemandFeeBPS"
          },
          {
            "type": "uint48",
            "name": "targetSupplyBaseline"
          },
          {
            "type": "uint8",
            "name": "targetSupplyBaselineScaleFactor"
          },
          {
            "type": "uint96",
            "name": "targetSupplyGrowthRatePerSecond"
          },
          {
            "type": "uint48",
            "name": "targetSupplyBaselineTimestamp"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setEmissionsHardCap",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "newHardCapAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "setSellParameters",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_sellParameters",
        "components": [
          {
            "type": "uint16",
            "name": "sellSpreadBPS"
          },
          {
            "type": "uint16",
            "name": "sellFeeBPS"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setSpendParameters",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_spendParameters",
        "components": [
          {
            "type": "uint16",
            "name": "creatorShareBPS"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setTransferValidator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "transferValidator_"
      }
    ],
    "outputs": []
  },
  {
    "name": "spendTokens",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "spender"
      },
      {
        "type": "uint256",
        "name": "tokensToSpend"
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
    "name": "symbol",
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
    "name": "targetSupply",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bool",
        "name": "useTargetSupply"
      },
      {
        "type": "uint256",
        "name": "target"
      }
    ]
  },
  {
    "name": "totalSupply",
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
    "name": "transfer",
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
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "transferCreatorShareToMarket",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "transferAmount"
      },
      {
        "type": "address",
        "name": "infrastructureFeeRecipient"
      },
      {
        "type": "address",
        "name": "partnerFeeRecipient"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "pairedToken"
      },
      {
        "type": "uint256",
        "name": "transferByRouterAmountInfrastructure"
      },
      {
        "type": "uint256",
        "name": "transferByRouterAmountPartner"
      }
    ]
  },
  {
    "name": "transferFrom",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
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
        "name": "value"
      }
    ],
    "outputs": [
      {
        "type": "bool"
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
    "name": "unpause",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "withdrawCreatorShare",
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
      },
      {
        "type": "address",
        "name": "infrastructureFeeRecipient"
      },
      {
        "type": "address",
        "name": "partnerFeeRecipient"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "pairedToken"
      },
      {
        "type": "uint256",
        "name": "transferByRouterAmountCreator"
      },
      {
        "type": "uint256",
        "name": "transferByRouterAmountInfrastructure"
      },
      {
        "type": "uint256",
        "name": "transferByRouterAmountPartner"
      }
    ]
  },
  {
    "name": "withdrawFees",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "infrastructureFeeRecipient"
      },
      {
        "type": "address",
        "name": "partnerFeeRecipient"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "pairedToken"
      },
      {
        "type": "uint256",
        "name": "transferByRouterAmountInfrastructure"
      },
      {
        "type": "uint256",
        "name": "transferByRouterAmountPartner"
      }
    ]
  },
  {
    "name": "withdrawUnrelatedToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "tokenAddress"
      },
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract