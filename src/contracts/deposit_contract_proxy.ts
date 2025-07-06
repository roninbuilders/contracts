import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 35237,
  address: '0x6ac1c1ae47d4f007498141601d1e9ffcfac14162' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'Deposit Contract Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x5e6b2be422db1a30793d6d8fa68b7c5bf18660c5',
  created_at: 1748944261,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "_logic"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ]
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "BeaconUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beacon",
        "indexed": true
      }
    ]
  },
  {
    "name": "Upgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
        "indexed": true
      }
    ]
  },
  {
    "type": "fallback",
    "stateMutability": "payable"
  },
  {
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AddressCannotBeEOA",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AddressCannotBeZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AmountSentMustBeGreaterThanZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "CallerIsNotGenerator",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ClientAlreadyMigrated",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "client"
      }
    ]
  },
  {
    "name": "ClientAlreadyWhitelisted",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "client"
      }
    ]
  },
  {
    "name": "ClientFundTransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ClientNotWhitelisted",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "client"
      }
    ]
  },
  {
    "name": "ClientRemovalNotAllowed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "client"
      }
    ]
  },
  {
    "name": "ColdWalletCannotBeZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ContractAlreadyWhitelisted",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddress"
      }
    ]
  },
  {
    "name": "ContractNotWhitelisted",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddress"
      }
    ]
  },
  {
    "name": "FailedToClaimFreeNodeExpenses",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedToFetchMinBalance",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedToFetchSubscriptionInfo",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedToRemoveClient",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "client"
      }
    ]
  },
  {
    "name": "FailedToRemoveContract",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddress"
      }
    ]
  },
  {
    "name": "FailedToWhitelistContract",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "contractAddress"
      }
    ]
  },
  {
    "name": "FailedToWithdrawClientFund",
    "type": "error",
    "inputs": []
  },
  {
    "name": "GasLimitShouldBeGreaterThanZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "GasPriceShouldBeGreaterThanZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientFunds",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MigrationEndTimeShouldBeInFuture",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MigrationPeriodOver",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MinimumBalanceNotReached",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "client"
      }
    ]
  },
  {
    "name": "MinimumRequestsShouldBeGreaterThanZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoContractWhitelisted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PendingRequestsExist",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SubscriptionEndtimeShouldBeInFuture",
    "type": "error",
    "inputs": []
  },
  {
    "name": "VerificationGasShouldBeGreaterThanZero",
    "type": "error",
    "inputs": []
  },
  {
    "name": "AdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousAdmin"
      },
      {
        "type": "address",
        "name": "newAdmin"
      }
    ]
  },
  {
    "name": "BeaconUpgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "beacon",
        "indexed": true
      }
    ]
  },
  {
    "name": "CallbackGasLimitUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_contractAddress"
      },
      {
        "type": "uint128",
        "name": "_callbackGasLimit"
      }
    ]
  },
  {
    "name": "CallbackGasPriceUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_contractAddress"
      },
      {
        "type": "uint128",
        "name": "_callbackGasPrice"
      }
    ]
  },
  {
    "name": "ClientDeposited",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_depositer"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "ClientRemovedFromWhitelist",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_removedTime"
      },
      {
        "type": "bool",
        "name": "_forceRemove",
        "indexed": true
      },
      {
        "type": "uint128",
        "name": "_maxGasPrice"
      },
      {
        "type": "uint128",
        "name": "_maxGasLimit"
      },
      {
        "type": "uint128",
        "name": "_fund",
        "indexed": true
      },
      {
        "type": "uint128",
        "name": "_minBalanceLimit"
      },
      {
        "type": "uint64",
        "name": "_endDate"
      },
      {
        "type": "uint64",
        "name": "_request_count"
      },
      {
        "type": "uint64",
        "name": "_response_count"
      },
      {
        "type": "bool",
        "name": "_isSnap"
      }
    ]
  },
  {
    "name": "ClientWhitelisted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      },
      {
        "type": "uint256",
        "name": "_startTime"
      },
      {
        "type": "uint256",
        "name": "_endTime"
      },
      {
        "type": "bool",
        "name": "_isSnap"
      }
    ]
  },
  {
    "name": "ClientWithdrawal",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_withdrawer"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "ColdWalletSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_coldWalletAddress"
      }
    ]
  },
  {
    "name": "ContractDeletedFromWhitelist",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      },
      {
        "type": "address",
        "name": "_contractAddress"
      },
      {
        "type": "uint256",
        "name": "_removedTime"
      }
    ]
  },
  {
    "name": "ContractWhitelisted",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      },
      {
        "type": "address",
        "name": "_contractAddress"
      },
      {
        "type": "uint256",
        "name": "_timeStamp"
      }
    ]
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "version"
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
    "name": "Paused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "SupraCollected",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_fromClient"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "SupraRefunded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_toClient"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "Unpaused",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "Upgraded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "implementation",
        "indexed": true
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
    "name": "addClientToWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint128",
        "name": "_maxGasPrice"
      },
      {
        "type": "uint128",
        "name": "_maxGasLimit"
      }
    ],
    "outputs": []
  },
  {
    "name": "addContractToWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_contractAddress"
      },
      {
        "type": "uint128",
        "name": "_callbackGasPrice"
      },
      {
        "type": "uint128",
        "name": "_callbackGasLimit"
      }
    ],
    "outputs": []
  },
  {
    "name": "checkBalanceAllWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address[]"
      },
      {
        "type": "uint256[]"
      },
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "checkClientFund",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint128"
      }
    ]
  },
  {
    "name": "checkEffectiveBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "checkMaxGasLimitClient",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint128"
      }
    ]
  },
  {
    "name": "checkMaxGasPriceClient",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint128"
      }
    ]
  },
  {
    "name": "checkMinBalanceClient",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint128"
      }
    ]
  },
  {
    "name": "checkRequiredFund",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "checkSupraFund",
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
    "name": "claimFreeNodeExpenses",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "clientMigration",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "client"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "isMigrated"
      }
    ]
  },
  {
    "name": "coldWallet",
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
    "name": "collectFund",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "countTotalWhitelistedClient",
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
    "name": "countTotalWhitelistedContractByClient",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "depositFundClient",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "depositSupraFund",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "executeRefund",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_fundReceiver"
      },
      {
        "type": "uint128",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "generator",
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
    "name": "getContractDetails",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_contractAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint128"
      },
      {
        "type": "uint128"
      }
    ]
  },
  {
    "name": "getMinBalanceLimit",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint128",
        "name": "_maxGasPrice"
      },
      {
        "type": "uint128",
        "name": "_maxGasLimit"
      }
    ],
    "outputs": [
      {
        "type": "uint128"
      }
    ]
  },
  {
    "name": "getSubscriptionInfoByClient",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint64"
      },
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "getTransactionCounts",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "uint64"
      },
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newGenerator"
      },
      {
        "type": "address",
        "name": "_newRouter"
      },
      {
        "type": "uint128",
        "name": "_minRequests"
      },
      {
        "type": "uint128",
        "name": "_verificationGasValue"
      }
    ],
    "outputs": []
  },
  {
    "name": "isClientWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isContractEligible",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      },
      {
        "type": "address",
        "name": "_contractAddress"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isContractWhitelisted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      },
      {
        "type": "address",
        "name": "_contractAddress"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "isMinimumBalanceReached",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "listAllWhitelistedClient",
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
    "name": "listAllWhitelistedContractByClient",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "migrateClient",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint128",
        "name": "_maxGasPrice"
      },
      {
        "type": "uint128",
        "name": "_maxGasLimit"
      }
    ],
    "outputs": []
  },
  {
    "name": "migrationEndTime",
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
    "name": "minRequests",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint128"
      }
    ]
  },
  {
    "name": "oldDepositContract",
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
    "name": "pauseWithdrawal",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "paused",
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
    "name": "proxiableUUID",
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
    "name": "removeAllContractOfClient",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeClientFromWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      },
      {
        "type": "bool",
        "name": "_forceRemove"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeContractFromWhitelist",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_contractAddress"
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
    "name": "router",
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
    "name": "setColdWallet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newColdWallet"
      }
    ],
    "outputs": []
  },
  {
    "name": "setOldDepositContract",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_oldDepositContract"
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
        "name": "newOwner"
      }
    ],
    "outputs": []
  },
  {
    "name": "unpauseWithdrawal",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "updateCallbackGasLimit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_contractAddress"
      },
      {
        "type": "uint128",
        "name": "_callbackGasLimit"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateCallbackGasPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_contractAddress"
      },
      {
        "type": "uint128",
        "name": "_callbackGasPrice"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateCount",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      },
      {
        "type": "uint256",
        "name": "_txType"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateGeneratorRouter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newGenerator"
      },
      {
        "type": "address",
        "name": "_newRouter"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateMaxGasLimit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint128",
        "name": "_maxGasLimit"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateMaxGasPrice",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint128",
        "name": "_maxGasPrice"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateMigrationEndTime",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_migrationEndTime"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateMinRequests",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint128",
        "name": "_minRequests"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateSubscription",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_clientAddress"
      },
      {
        "type": "uint64",
        "name": "_newEndTime"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateVerificationGasValue",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint128",
        "name": "_verificationGasValue"
      }
    ],
    "outputs": []
  },
  {
    "name": "upgradeTo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      }
    ],
    "outputs": []
  },
  {
    "name": "upgradeToAndCall",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "newImplementation"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "verificationGasValue",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint128"
      }
    ]
  },
  {
    "name": "withdrawFundClient",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint128",
        "name": "_amount"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract