import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 37784,
  address: '0x33acb3c515f09967feb55cece0381d7efee58d39' as const,
  contract_name: 'TransparentUpgradeableProxy',
  display_name: 'Game Registry Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0xde27b5b666140a8a1220ba1dfc57a15d404eba45',
  created_at: 1762883053,
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
        "type": "address",
        "name": "admin_"
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
    "name": "admin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "admin_"
      }
    ]
  },
  {
    "name": "changeAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newAdmin"
      }
    ],
    "outputs": []
  },
  {
    "name": "implementation",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "implementation_"
      }
    ]
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi,
  proxy_abi: [
  {
    "name": "AlreadyProcessed",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      }
    ]
  },
  {
    "name": "ChainIdOverflow",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "chainId"
      }
    ]
  },
  {
    "name": "ComponentIdNotRegistered",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "componentId"
      }
    ]
  },
  {
    "name": "ComponentNotRegistered",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "component"
      }
    ]
  },
  {
    "name": "CounterOverflow",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "counter"
      }
    ]
  },
  {
    "name": "GuidCounterSet",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidBatchData",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "entityCount"
      },
      {
        "type": "uint256",
        "name": "dataCount"
      }
    ]
  },
  {
    "name": "InvalidBlockNumber",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidCaller",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidChain",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "chainId"
      }
    ]
  },
  {
    "name": "InvalidDeregisterCaller",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidExpirationBlockNumber",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidExpirationTimestamp",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidOperatorAddress",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidSystem",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "systemId"
      }
    ]
  },
  {
    "name": "MissingRole",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "account"
      },
      {
        "type": "bytes32",
        "name": "expectedRole"
      }
    ]
  },
  {
    "name": "OperatorAlreadyRegistered",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OperatorExpired",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OperatorNotRegistered",
    "type": "error",
    "inputs": []
  },
  {
    "name": "PlayerSignerMismatch",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "expected"
      },
      {
        "type": "address",
        "name": "actual"
      }
    ]
  },
  {
    "name": "PrefixOverflow",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "prefix"
      }
    ]
  },
  {
    "name": "RegisterOperatorInCooldown",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TokenIdExceedsMaxValue",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ]
  },
  {
    "name": "BatchComponentValueRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "componentId",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "entities"
      }
    ]
  },
  {
    "name": "BatchComponentValueSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "componentId",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "entities"
      },
      {
        "type": "bytes[]",
        "name": "data"
      }
    ]
  },
  {
    "name": "BatchMultiComponentValueRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "componentIds"
      },
      {
        "type": "uint256[]",
        "name": "entities"
      }
    ]
  },
  {
    "name": "BatchMultiComponentValueSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "componentIds"
      },
      {
        "type": "uint256[]",
        "name": "entities"
      },
      {
        "type": "bytes[]",
        "name": "data"
      }
    ]
  },
  {
    "name": "ComponentRegistered",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "componentId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "componentAddress",
        "indexed": true
      }
    ]
  },
  {
    "name": "ComponentValueRemoved",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "componentId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "entity",
        "indexed": true
      }
    ]
  },
  {
    "name": "ComponentValueSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "componentId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "entity",
        "indexed": true
      },
      {
        "type": "bytes",
        "name": "data"
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
    "name": "Multichain1155TransferBatchReceived",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "systemId",
        "indexed": true
      },
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
        "name": "fromChainId"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "Multichain1155TransferBatchSent",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "systemId",
        "indexed": true
      },
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
        "name": "toChainId"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ]
  },
  {
    "name": "Multichain1155TransferSingleReceived",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "systemId",
        "indexed": true
      },
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
        "name": "fromChainId"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "Multichain1155TransferSingleSent",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "systemId",
        "indexed": true
      },
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
        "name": "toChainId"
      },
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "Multichain721TransferReceived",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "systemId",
        "indexed": true
      },
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
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "toChainId"
      }
    ]
  },
  {
    "name": "Multichain721TransferSent",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "systemId",
        "indexed": true
      },
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
        "name": "tokenId"
      },
      {
        "type": "uint256",
        "name": "toChainId"
      }
    ]
  },
  {
    "name": "OperatorDeregistered",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "address",
        "name": "player"
      }
    ]
  },
  {
    "name": "OperatorRegistered",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      },
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "uint256",
        "name": "expiration"
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
    "name": "PublishBatchComponentValueSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "componentId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "chainId"
      },
      {
        "type": "uint256",
        "name": "requestTime"
      },
      {
        "type": "uint256[]",
        "name": "entities"
      },
      {
        "type": "bytes[]",
        "name": "data"
      }
    ]
  },
  {
    "name": "PublishBatchSetComponentValue",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "componentIds"
      },
      {
        "type": "uint256[]",
        "name": "entities"
      },
      {
        "type": "uint256",
        "name": "fromChainId"
      },
      {
        "type": "uint256",
        "name": "requestTime"
      },
      {
        "type": "bytes[]",
        "name": "data"
      }
    ]
  },
  {
    "name": "PublishComponentValueSet",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "componentId",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "entity",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "chainId"
      },
      {
        "type": "uint256",
        "name": "requestTime"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ]
  },
  {
    "name": "RoleAdminChanged",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "previousAdminRole",
        "indexed": true
      },
      {
        "type": "bytes32",
        "name": "newAdminRole",
        "indexed": true
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
    "name": "SystemRegistered",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "id",
        "indexed": true
      },
      {
        "type": "address",
        "name": "systemAddress",
        "indexed": true
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
    "name": "DEFAULT_ADMIN_ROLE",
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
    "name": "OPERATOR_MESSAGE_BLOCK_LIMIT",
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
    "name": "REGISTER_OPERATOR_COOLDOWN_LIMIT",
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
    "name": "batchGetComponentValues",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "entities"
      },
      {
        "type": "uint256[]",
        "name": "componentIds"
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
    "name": "batchGetEntitiesHasComponents",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "entities"
      },
      {
        "type": "uint256[]",
        "name": "componentIds"
      }
    ],
    "outputs": [
      {
        "type": "bool[]"
      }
    ]
  },
  {
    "name": "batchPublishComponentValueSet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "componentId"
      },
      {
        "type": "uint256[]",
        "name": "entities"
      },
      {
        "type": "bytes[]",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "requestId"
      }
    ]
  },
  {
    "name": "batchPublishSetComponentValue",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "entities"
      },
      {
        "type": "uint256[]",
        "name": "componentIds"
      },
      {
        "type": "bytes[]",
        "name": "values"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "requestId"
      }
    ]
  },
  {
    "name": "batchRegisterComponentValueRemoved",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "entities"
      }
    ],
    "outputs": []
  },
  {
    "name": "batchRegisterComponentValueSet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "entities"
      },
      {
        "type": "bytes[]",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "batchSetComponentValue",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256[]",
        "name": "entities"
      },
      {
        "type": "uint256[]",
        "name": "componentIds"
      },
      {
        "type": "bytes[]",
        "name": "values"
      }
    ],
    "outputs": []
  },
  {
    "name": "deliverMultichain1155TransferBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "systemId"
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
        "name": "fromChainId"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "deliverMultichain1155TransferSingle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "systemId"
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
        "name": "fromChainId"
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
    "outputs": []
  },
  {
    "name": "deliverMultichain721Transfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "requestId"
      },
      {
        "type": "uint256",
        "name": "systemId"
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
        "name": "fromChainId"
      },
      {
        "type": "tuple",
        "name": "componentData",
        "components": [
          {
            "type": "uint256[]",
            "name": "entities"
          },
          {
            "type": "uint256[]",
            "name": "componentIds"
          },
          {
            "type": "bytes[]",
            "name": "data"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "deregisterOperator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "operatorToDeregister"
      }
    ],
    "outputs": []
  },
  {
    "name": "deregisterOperatorBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "operators"
      }
    ],
    "outputs": []
  },
  {
    "name": "generateGUIDDeprecated",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getComponent",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "componentId"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getComponentIdFromAddress",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "componentAddr"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getComponentValue",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "entity"
      },
      {
        "type": "uint256",
        "name": "componentId"
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "getEntityComponentCount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "entity"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getEntityComponents",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "entity"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getEntityHasComponent",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "entity"
      },
      {
        "type": "uint256",
        "name": "componentId"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "getGuidCounter",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint96"
      }
    ]
  },
  {
    "name": "getOperatorAccountRegistrationMessageToSign",
    "type": "function",
    "stateMutability": "pure",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      },
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "uint256",
        "name": "expiration"
      },
      {
        "type": "uint256",
        "name": "blockNumber"
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "getPlayerAccount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "operatorAddress"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getRegisteredOperators",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "player"
      }
    ],
    "outputs": [
      {
        "type": "address[]"
      }
    ]
  },
  {
    "name": "getRoleAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "role"
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "getSystem",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "systemId"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getUnarchivedEntityComponents",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "entity"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
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
    "name": "hasAccessRole",
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
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      }
    ],
    "outputs": []
  },
  {
    "name": "isTrustedForwarder",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "forwarder"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "lastRegisterOperatorTime",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
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
    "name": "publishComponentValueSet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "componentId"
      },
      {
        "type": "uint256",
        "name": "entity"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "requestId"
      }
    ]
  },
  {
    "name": "registerComponent",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "componentId"
      },
      {
        "type": "address",
        "name": "componentAddress"
      }
    ],
    "outputs": []
  },
  {
    "name": "registerComponentValueRemoved",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "entity"
      }
    ],
    "outputs": []
  },
  {
    "name": "registerComponentValueSet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "entity"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ],
    "outputs": []
  },
  {
    "name": "registerOperator",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes",
        "name": "signature"
      },
      {
        "type": "address",
        "name": "player"
      },
      {
        "type": "address",
        "name": "operator"
      },
      {
        "type": "uint256",
        "name": "expiration"
      },
      {
        "type": "uint256",
        "name": "blockNumber"
      }
    ],
    "outputs": []
  },
  {
    "name": "registerOperatorBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "players"
      },
      {
        "type": "address[]",
        "name": "operators"
      },
      {
        "type": "uint256[]",
        "name": "expirations"
      }
    ],
    "outputs": []
  },
  {
    "name": "registerSystem",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "systemId"
      },
      {
        "type": "address",
        "name": "systemAddress"
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
        "name": "account"
      }
    ],
    "outputs": []
  },
  {
    "name": "requestIdProcessed",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
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
    "name": "sendMultichain1155TransferBatch",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "systemId"
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
        "name": "toChainId"
      },
      {
        "type": "uint256[]",
        "name": "ids"
      },
      {
        "type": "uint256[]",
        "name": "amounts"
      }
    ],
    "outputs": []
  },
  {
    "name": "sendMultichain1155TransferSingle",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "systemId"
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
        "name": "toChainId"
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
    "outputs": []
  },
  {
    "name": "sendMultichain721Transfer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "systemId"
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
        "name": "toChainId"
      }
    ],
    "outputs": []
  },
  {
    "name": "setGuidCounter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint96",
        "name": "guidValue"
      }
    ],
    "outputs": []
  },
  {
    "name": "setPaused",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "_paused"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract