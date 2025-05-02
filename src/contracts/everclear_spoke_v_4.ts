import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 32917,
  address: '0xc192b47fd86c52d987fff2579b64c28037bf7567' as const,
  contract_name: 'EverclearSpokeV4',
  display_name: 'Everclear Spoke V4',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1744210391,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": []
  },
  {
    "name": "AddressEmptyCode",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      }
    ]
  },
  {
    "name": "AddressInsufficientBalance",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      }
    ]
  },
  {
    "name": "ECDSAInvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ECDSAInvalidSignatureLength",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "length"
      }
    ]
  },
  {
    "name": "ECDSAInvalidSignatureS",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "s"
      }
    ]
  },
  {
    "name": "ERC1967InvalidImplementation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "implementation"
      }
    ]
  },
  {
    "name": "ERC1967NonPayable",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EverclearSpoke_ExecuteIntentCalldata_ExternalCallFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EverclearSpoke_ExecuteIntentCalldata_InvalidStatus",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_intentId"
      }
    ]
  },
  {
    "name": "EverclearSpoke_FeeAdapter_NotAuthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EverclearSpoke_FillIntent_InsufficientFunds",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "_requested"
      },
      {
        "type": "uint256",
        "name": "_available"
      }
    ]
  },
  {
    "name": "EverclearSpoke_FillIntent_IntentExpired",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_intentId"
      }
    ]
  },
  {
    "name": "EverclearSpoke_FillIntent_InvalidStatus",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_intentId"
      }
    ]
  },
  {
    "name": "EverclearSpoke_FillIntent_MaxFeeExceeded",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "_fee"
      },
      {
        "type": "uint24",
        "name": "_maxFee"
      }
    ]
  },
  {
    "name": "EverclearSpoke_InvalidMessageType",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EverclearSpoke_InvalidSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EverclearSpoke_InvalidVarUpdate",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EverclearSpoke_NewIntent_CalldataExceedsLimit",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EverclearSpoke_NewIntent_InvalidIntent",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EverclearSpoke_NewIntent_MaxFeeExceeded",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "_fee"
      },
      {
        "type": "uint24",
        "name": "_maxFee"
      }
    ]
  },
  {
    "name": "EverclearSpoke_NewIntent_ZeroAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EverclearSpoke_Pause_NotAuthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EverclearSpoke_Paused",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EverclearSpoke_ProcessFillViaRelayer_NotRelayer",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EverclearSpoke_ProcessFillViaRelayer_TTLExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EverclearSpoke_ProcessFillViaRelayer_WrongDomain",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EverclearSpoke_ProcessIntentQueue_NotFound",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_intentId"
      },
      {
        "type": "uint256",
        "name": "_position"
      }
    ]
  },
  {
    "name": "EverclearSpoke_ProcessQueue_InvalidAmount",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "_first"
      },
      {
        "type": "uint256",
        "name": "_last"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ]
  },
  {
    "name": "EverclearSpoke_ProcessQueue_ZeroAmount",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EverclearSpoke_Unauthorized",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EverclearSpoke_WrongDestination",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EverclearSpoke_ZeroAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FailedInnerCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidAccountNonce",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "uint256",
        "name": "currentNonce"
      }
    ]
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
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
    "name": "Queue_EmptyQueue",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SafeERC20FailedOperation",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ]
  },
  {
    "name": "UUPSUnauthorizedCallContext",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UUPSUnsupportedProxiableUUID",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "slot"
      }
    ]
  },
  {
    "name": "AssetMintFailed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_asset",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "uint8",
        "name": "_strategy"
      }
    ]
  },
  {
    "name": "AssetTransferFailed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_asset",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_recipient",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ]
  },
  {
    "name": "Deposited",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_depositant",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_asset",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ]
  },
  {
    "name": "ExternalCalldataExecuted",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_intentId",
        "indexed": true
      },
      {
        "type": "bytes",
        "name": "_returnData"
      }
    ]
  },
  {
    "name": "FeeAdapterUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_newFeeAdapter"
      }
    ]
  },
  {
    "name": "FillQueueProcessed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_messageId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_firstIdx"
      },
      {
        "type": "uint256",
        "name": "_lastIdx"
      },
      {
        "type": "uint256",
        "name": "_quote"
      }
    ]
  },
  {
    "name": "GatewayUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldGateway"
      },
      {
        "type": "address",
        "name": "_newGateway"
      }
    ]
  },
  {
    "name": "Initialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint64",
        "name": "version"
      }
    ]
  },
  {
    "name": "IntentAdded",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_intentId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_queueIdx"
      },
      {
        "type": "tuple",
        "name": "_intent",
        "components": [
          {
            "type": "bytes32",
            "name": "initiator"
          },
          {
            "type": "bytes32",
            "name": "receiver"
          },
          {
            "type": "bytes32",
            "name": "inputAsset"
          },
          {
            "type": "bytes32",
            "name": "outputAsset"
          },
          {
            "type": "uint24",
            "name": "maxFee"
          },
          {
            "type": "uint32",
            "name": "origin"
          },
          {
            "type": "uint64",
            "name": "nonce"
          },
          {
            "type": "uint48",
            "name": "timestamp"
          },
          {
            "type": "uint48",
            "name": "ttl"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint32[]",
            "name": "destinations"
          },
          {
            "type": "bytes",
            "name": "data"
          }
        ]
      }
    ]
  },
  {
    "name": "IntentFilled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_intentId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_solver",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_totalFeeDBPS"
      },
      {
        "type": "uint256",
        "name": "_queueIdx"
      },
      {
        "type": "tuple",
        "name": "_intent",
        "components": [
          {
            "type": "bytes32",
            "name": "initiator"
          },
          {
            "type": "bytes32",
            "name": "receiver"
          },
          {
            "type": "bytes32",
            "name": "inputAsset"
          },
          {
            "type": "bytes32",
            "name": "outputAsset"
          },
          {
            "type": "uint24",
            "name": "maxFee"
          },
          {
            "type": "uint32",
            "name": "origin"
          },
          {
            "type": "uint64",
            "name": "nonce"
          },
          {
            "type": "uint48",
            "name": "timestamp"
          },
          {
            "type": "uint48",
            "name": "ttl"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint32[]",
            "name": "destinations"
          },
          {
            "type": "bytes",
            "name": "data"
          }
        ]
      }
    ]
  },
  {
    "name": "IntentQueueProcessed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_messageId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_firstIdx"
      },
      {
        "type": "uint256",
        "name": "_lastIdx"
      },
      {
        "type": "uint256",
        "name": "_quote"
      }
    ]
  },
  {
    "name": "LighthouseUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldLightHouse"
      },
      {
        "type": "address",
        "name": "_newLightHouse"
      }
    ]
  },
  {
    "name": "MessageGasLimitUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "_oldGasLimit"
      },
      {
        "type": "uint256",
        "name": "_newGasLimit"
      }
    ]
  },
  {
    "name": "MessageReceiverUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldMessageReceiver"
      },
      {
        "type": "address",
        "name": "_newMessageReceiver"
      }
    ]
  },
  {
    "name": "ModuleSetForStrategy",
    "type": "event",
    "inputs": [
      {
        "type": "uint8",
        "name": "_strategy"
      },
      {
        "type": "address",
        "name": "_module"
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
    "inputs": []
  },
  {
    "name": "Settled",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_intentId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_account"
      },
      {
        "type": "address",
        "name": "_asset"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ]
  },
  {
    "name": "StrategySetForAsset",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_asset"
      },
      {
        "type": "uint8",
        "name": "_strategy"
      }
    ]
  },
  {
    "name": "Unpaused",
    "type": "event",
    "inputs": []
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
    "name": "WatchtowerUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_oldWatchtower"
      },
      {
        "type": "address",
        "name": "_newWatchtower"
      }
    ]
  },
  {
    "name": "Withdrawn",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_withdrawer",
        "indexed": true
      },
      {
        "type": "address",
        "name": "_asset",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ]
  },
  {
    "name": "DOMAIN",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32"
      }
    ]
  },
  {
    "name": "EVERCLEAR",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint32"
      }
    ]
  },
  {
    "name": "FILL_INTENT_FOR_SOLVER_TYPEHASH",
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
    "name": "PERMIT2",
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
    "name": "PROCESS_FILL_QUEUE_VIA_RELAYER_TYPEHASH",
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
    "name": "PROCESS_INTENT_QUEUE_VIA_RELAYER_TYPEHASH",
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
    "name": "UPGRADE_INTERFACE_VERSION",
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
    "name": "balances",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_asset"
      },
      {
        "type": "bytes32",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "_amount"
      }
    ]
  },
  {
    "name": "callExecutor",
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
    "name": "deposit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_asset"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "executeIntentCalldata",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_intent",
        "components": [
          {
            "type": "bytes32",
            "name": "initiator"
          },
          {
            "type": "bytes32",
            "name": "receiver"
          },
          {
            "type": "bytes32",
            "name": "inputAsset"
          },
          {
            "type": "bytes32",
            "name": "outputAsset"
          },
          {
            "type": "uint24",
            "name": "maxFee"
          },
          {
            "type": "uint32",
            "name": "origin"
          },
          {
            "type": "uint64",
            "name": "nonce"
          },
          {
            "type": "uint48",
            "name": "timestamp"
          },
          {
            "type": "uint48",
            "name": "ttl"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint32[]",
            "name": "destinations"
          },
          {
            "type": "bytes",
            "name": "data"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "feeAdapter",
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
    "name": "fillIntent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "_intent",
        "components": [
          {
            "type": "bytes32",
            "name": "initiator"
          },
          {
            "type": "bytes32",
            "name": "receiver"
          },
          {
            "type": "bytes32",
            "name": "inputAsset"
          },
          {
            "type": "bytes32",
            "name": "outputAsset"
          },
          {
            "type": "uint24",
            "name": "maxFee"
          },
          {
            "type": "uint32",
            "name": "origin"
          },
          {
            "type": "uint64",
            "name": "nonce"
          },
          {
            "type": "uint48",
            "name": "timestamp"
          },
          {
            "type": "uint48",
            "name": "ttl"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint32[]",
            "name": "destinations"
          },
          {
            "type": "bytes",
            "name": "data"
          }
        ]
      },
      {
        "type": "uint24",
        "name": "_fee"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "_fillMessage",
        "components": [
          {
            "type": "bytes32",
            "name": "intentId"
          },
          {
            "type": "bytes32",
            "name": "solver"
          },
          {
            "type": "bytes32",
            "name": "initiator"
          },
          {
            "type": "uint24",
            "name": "fee"
          },
          {
            "type": "uint48",
            "name": "executionTimestamp"
          }
        ]
      }
    ]
  },
  {
    "name": "fillIntentForSolver",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_solver"
      },
      {
        "type": "tuple",
        "name": "_intent",
        "components": [
          {
            "type": "bytes32",
            "name": "initiator"
          },
          {
            "type": "bytes32",
            "name": "receiver"
          },
          {
            "type": "bytes32",
            "name": "inputAsset"
          },
          {
            "type": "bytes32",
            "name": "outputAsset"
          },
          {
            "type": "uint24",
            "name": "maxFee"
          },
          {
            "type": "uint32",
            "name": "origin"
          },
          {
            "type": "uint64",
            "name": "nonce"
          },
          {
            "type": "uint48",
            "name": "timestamp"
          },
          {
            "type": "uint48",
            "name": "ttl"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint32[]",
            "name": "destinations"
          },
          {
            "type": "bytes",
            "name": "data"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "_nonce"
      },
      {
        "type": "uint24",
        "name": "_fee"
      },
      {
        "type": "bytes",
        "name": "_signature"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "_fillMessage",
        "components": [
          {
            "type": "bytes32",
            "name": "intentId"
          },
          {
            "type": "bytes32",
            "name": "solver"
          },
          {
            "type": "bytes32",
            "name": "initiator"
          },
          {
            "type": "uint24",
            "name": "fee"
          },
          {
            "type": "uint48",
            "name": "executionTimestamp"
          }
        ]
      }
    ]
  },
  {
    "name": "fillQueue",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "first"
      },
      {
        "type": "uint256",
        "name": "last"
      }
    ]
  },
  {
    "name": "gateway",
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_feeAdapter"
      }
    ],
    "outputs": []
  },
  {
    "name": "intentQueue",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "first"
      },
      {
        "type": "uint256",
        "name": "last"
      }
    ]
  },
  {
    "name": "lighthouse",
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
    "name": "messageGasLimit",
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
    "name": "messageReceiver",
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
    "name": "modules",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint8",
        "name": "_strategy"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "_module"
      }
    ]
  },
  {
    "name": "newIntent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32[]",
        "name": "_destinations"
      },
      {
        "type": "bytes32",
        "name": "_receiver"
      },
      {
        "type": "address",
        "name": "_inputAsset"
      },
      {
        "type": "bytes32",
        "name": "_outputAsset"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "uint24",
        "name": "_maxFee"
      },
      {
        "type": "uint48",
        "name": "_ttl"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "_intentId"
      },
      {
        "type": "tuple",
        "name": "_intent",
        "components": [
          {
            "type": "bytes32",
            "name": "initiator"
          },
          {
            "type": "bytes32",
            "name": "receiver"
          },
          {
            "type": "bytes32",
            "name": "inputAsset"
          },
          {
            "type": "bytes32",
            "name": "outputAsset"
          },
          {
            "type": "uint24",
            "name": "maxFee"
          },
          {
            "type": "uint32",
            "name": "origin"
          },
          {
            "type": "uint64",
            "name": "nonce"
          },
          {
            "type": "uint48",
            "name": "timestamp"
          },
          {
            "type": "uint48",
            "name": "ttl"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint32[]",
            "name": "destinations"
          },
          {
            "type": "bytes",
            "name": "data"
          }
        ]
      }
    ]
  },
  {
    "name": "newIntent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32[]",
        "name": "_destinations"
      },
      {
        "type": "address",
        "name": "_receiver"
      },
      {
        "type": "address",
        "name": "_inputAsset"
      },
      {
        "type": "address",
        "name": "_outputAsset"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "uint24",
        "name": "_maxFee"
      },
      {
        "type": "uint48",
        "name": "_ttl"
      },
      {
        "type": "bytes",
        "name": "_data"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "_intentId"
      },
      {
        "type": "tuple",
        "name": "_intent",
        "components": [
          {
            "type": "bytes32",
            "name": "initiator"
          },
          {
            "type": "bytes32",
            "name": "receiver"
          },
          {
            "type": "bytes32",
            "name": "inputAsset"
          },
          {
            "type": "bytes32",
            "name": "outputAsset"
          },
          {
            "type": "uint24",
            "name": "maxFee"
          },
          {
            "type": "uint32",
            "name": "origin"
          },
          {
            "type": "uint64",
            "name": "nonce"
          },
          {
            "type": "uint48",
            "name": "timestamp"
          },
          {
            "type": "uint48",
            "name": "ttl"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint32[]",
            "name": "destinations"
          },
          {
            "type": "bytes",
            "name": "data"
          }
        ]
      }
    ]
  },
  {
    "name": "newIntent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32[]",
        "name": "_destinations"
      },
      {
        "type": "address",
        "name": "_receiver"
      },
      {
        "type": "address",
        "name": "_inputAsset"
      },
      {
        "type": "address",
        "name": "_outputAsset"
      },
      {
        "type": "uint256",
        "name": "_amount"
      },
      {
        "type": "uint24",
        "name": "_maxFee"
      },
      {
        "type": "uint48",
        "name": "_ttl"
      },
      {
        "type": "bytes",
        "name": "_data"
      },
      {
        "type": "tuple",
        "name": "_permit2Params",
        "components": [
          {
            "type": "uint256",
            "name": "nonce"
          },
          {
            "type": "uint256",
            "name": "deadline"
          },
          {
            "type": "bytes",
            "name": "signature"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "_intentId"
      },
      {
        "type": "tuple",
        "name": "_intent",
        "components": [
          {
            "type": "bytes32",
            "name": "initiator"
          },
          {
            "type": "bytes32",
            "name": "receiver"
          },
          {
            "type": "bytes32",
            "name": "inputAsset"
          },
          {
            "type": "bytes32",
            "name": "outputAsset"
          },
          {
            "type": "uint24",
            "name": "maxFee"
          },
          {
            "type": "uint32",
            "name": "origin"
          },
          {
            "type": "uint64",
            "name": "nonce"
          },
          {
            "type": "uint48",
            "name": "timestamp"
          },
          {
            "type": "uint48",
            "name": "ttl"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint32[]",
            "name": "destinations"
          },
          {
            "type": "bytes",
            "name": "data"
          }
        ]
      }
    ]
  },
  {
    "name": "nonce",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint64"
      }
    ]
  },
  {
    "name": "nonces",
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
    "name": "pause",
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
    "name": "processFillQueue",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint32",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "processFillQueueViaRelayer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "_domain"
      },
      {
        "type": "uint32",
        "name": "_amount"
      },
      {
        "type": "address",
        "name": "_relayer"
      },
      {
        "type": "uint256",
        "name": "_ttl"
      },
      {
        "type": "uint256",
        "name": "_nonce"
      },
      {
        "type": "uint256",
        "name": "_bufferDBPS"
      },
      {
        "type": "bytes",
        "name": "_signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "processIntentQueue",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "tuple[]",
        "name": "_intents",
        "components": [
          {
            "type": "bytes32",
            "name": "initiator"
          },
          {
            "type": "bytes32",
            "name": "receiver"
          },
          {
            "type": "bytes32",
            "name": "inputAsset"
          },
          {
            "type": "bytes32",
            "name": "outputAsset"
          },
          {
            "type": "uint24",
            "name": "maxFee"
          },
          {
            "type": "uint32",
            "name": "origin"
          },
          {
            "type": "uint64",
            "name": "nonce"
          },
          {
            "type": "uint48",
            "name": "timestamp"
          },
          {
            "type": "uint48",
            "name": "ttl"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint32[]",
            "name": "destinations"
          },
          {
            "type": "bytes",
            "name": "data"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "processIntentQueueViaRelayer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint32",
        "name": "_domain"
      },
      {
        "type": "tuple[]",
        "name": "_intents",
        "components": [
          {
            "type": "bytes32",
            "name": "initiator"
          },
          {
            "type": "bytes32",
            "name": "receiver"
          },
          {
            "type": "bytes32",
            "name": "inputAsset"
          },
          {
            "type": "bytes32",
            "name": "outputAsset"
          },
          {
            "type": "uint24",
            "name": "maxFee"
          },
          {
            "type": "uint32",
            "name": "origin"
          },
          {
            "type": "uint64",
            "name": "nonce"
          },
          {
            "type": "uint48",
            "name": "timestamp"
          },
          {
            "type": "uint48",
            "name": "ttl"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint32[]",
            "name": "destinations"
          },
          {
            "type": "bytes",
            "name": "data"
          }
        ]
      },
      {
        "type": "address",
        "name": "_relayer"
      },
      {
        "type": "uint256",
        "name": "_ttl"
      },
      {
        "type": "uint256",
        "name": "_nonce"
      },
      {
        "type": "uint256",
        "name": "_bufferDBPS"
      },
      {
        "type": "bytes",
        "name": "_signature"
      }
    ],
    "outputs": []
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
    "name": "receiveMessage",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes"
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
    "name": "setModuleForStrategy",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint8",
        "name": "_strategy"
      },
      {
        "type": "address",
        "name": "_module"
      }
    ],
    "outputs": []
  },
  {
    "name": "setStrategyForAsset",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_asset"
      },
      {
        "type": "uint8",
        "name": "_strategy"
      }
    ],
    "outputs": []
  },
  {
    "name": "status",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "_intentId"
      }
    ],
    "outputs": [
      {
        "type": "uint8",
        "name": "status"
      }
    ]
  },
  {
    "name": "strategies",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_asset"
      }
    ],
    "outputs": [
      {
        "type": "uint8",
        "name": "_strategy"
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
    "name": "updateFeeAdapter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_feeAdapter"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateGateway",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newGateway"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateMessageGasLimit",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_newGasLimit"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateMessageReceiver",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newMessageReceiver"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateSecurityModule",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_newSecurityModule"
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
    "name": "watchtower",
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
    "name": "withdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_asset"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract