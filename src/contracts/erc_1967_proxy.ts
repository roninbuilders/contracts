import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 32746,
  address: '0x38883dff2cd70774f9a89e1dbaa2da7d074664dc' as const,
  contract_name: 'ERC1967Proxy',
  display_name: 'ERC1967 Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x799e902e91f14cd4d20d3fc797751728532ebf6f',
  created_at: 1744014083,
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
    "name": "AdminAccessSet",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "_admin"
      },
      {
        "type": "bool",
        "name": "_enabled"
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
    "name": "ExpeditionClaimableNow",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "expeditionId",
        "indexed": true
      }
    ]
  },
  {
    "name": "JoinedExpedition",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "expeditionId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "planetIds"
      },
      {
        "type": "uint256[]",
        "name": "optionalAssetIds"
      },
      {
        "type": "uint256",
        "name": "keyAmount"
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
    "name": "UpdatedExpedition",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "expeditionId"
      },
      {
        "type": "uint256",
        "name": "startFrom"
      },
      {
        "type": "uint256",
        "name": "endTo"
      },
      {
        "type": "tuple",
        "name": "requiredPlanets",
        "components": [
          {
            "type": "string",
            "name": "name"
          },
          {
            "type": "address",
            "name": "addr"
          },
          {
            "type": "uint256",
            "name": "minAmount"
          },
          {
            "type": "uint256",
            "name": "maxAmount"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "optionalAsset",
        "components": [
          {
            "type": "string",
            "name": "name"
          },
          {
            "type": "address",
            "name": "addr"
          },
          {
            "type": "uint256",
            "name": "minAmount"
          },
          {
            "type": "uint256",
            "name": "maxAmount"
          }
        ]
      },
      {
        "type": "uint256",
        "name": "requiredKeyAmount"
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
    "name": "exchangeKeyToToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_expeditionId"
      },
      {
        "type": "uint256",
        "name": "_keyAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "exchangeTokenToKey",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_expeditionId"
      },
      {
        "type": "uint256",
        "name": "_keyAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "getExpeditionInfoList",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_expeditionId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "startFrom"
          },
          {
            "type": "uint256",
            "name": "endTo"
          },
          {
            "type": "tuple",
            "name": "requiredPlanet",
            "components": [
              {
                "type": "string",
                "name": "name"
              },
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "uint256",
                "name": "minAmount"
              },
              {
                "type": "uint256",
                "name": "maxAmount"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "optionalAsset",
            "components": [
              {
                "type": "string",
                "name": "name"
              },
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "uint256",
                "name": "minAmount"
              },
              {
                "type": "uint256",
                "name": "maxAmount"
              }
            ]
          },
          {
            "type": "uint256[]",
            "name": "optionalAssetWhitelistIds"
          },
          {
            "type": "uint256[]",
            "name": "apostleWhitelistClasses"
          },
          {
            "type": "uint256",
            "name": "requiredKeyAmount"
          },
          {
            "type": "bool",
            "name": "isClaimableNow"
          }
        ]
      }
    ]
  },
  {
    "name": "getExpeditionState",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "_expeditionId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getUserExpedition",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      },
      {
        "type": "uint256",
        "name": "_expeditionId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "joinedAt"
          },
          {
            "type": "uint256[]",
            "name": "planetIds"
          },
          {
            "type": "uint256[]",
            "name": "optionalAssetIds"
          },
          {
            "type": "uint256",
            "name": "keyAmount"
          }
        ]
      }
    ]
  },
  {
    "name": "getUserExpeditionIds",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "_user"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "initialize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "isAdmin",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "joinExpedition",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_expeditionId"
      },
      {
        "type": "uint256[]",
        "name": "_planetIds"
      },
      {
        "type": "uint256[]",
        "name": "_assetIds"
      },
      {
        "type": "uint256",
        "name": "_keyAmount"
      }
    ],
    "outputs": []
  },
  {
    "name": "lastExpeditionId",
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
    "name": "renounceOwnership",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "setAdmin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "admin"
      },
      {
        "type": "bool",
        "name": "enabled"
      }
    ],
    "outputs": []
  },
  {
    "name": "setExpeditionClaimable",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_expeditionId"
      }
    ],
    "outputs": []
  },
  {
    "name": "setupExpeditionInfo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_expeditionId"
      },
      {
        "type": "tuple",
        "name": "_info",
        "components": [
          {
            "type": "uint256",
            "name": "startFrom"
          },
          {
            "type": "uint256",
            "name": "endTo"
          },
          {
            "type": "tuple",
            "name": "requiredPlanet",
            "components": [
              {
                "type": "string",
                "name": "name"
              },
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "uint256",
                "name": "minAmount"
              },
              {
                "type": "uint256",
                "name": "maxAmount"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "optionalAsset",
            "components": [
              {
                "type": "string",
                "name": "name"
              },
              {
                "type": "address",
                "name": "addr"
              },
              {
                "type": "uint256",
                "name": "minAmount"
              },
              {
                "type": "uint256",
                "name": "maxAmount"
              }
            ]
          },
          {
            "type": "uint256[]",
            "name": "optionalAssetWhitelistIds"
          },
          {
            "type": "uint256[]",
            "name": "apostleWhitelistClasses"
          },
          {
            "type": "uint256",
            "name": "requiredKeyAmount"
          },
          {
            "type": "bool",
            "name": "isClaimableNow"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "setupPeerContracts",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_stakingAndKeys"
      },
      {
        "type": "address",
        "name": "_tokenReceipt"
      },
      {
        "type": "address",
        "name": "_blacklist"
      }
    ],
    "outputs": []
  },
  {
    "name": "stakeFT",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_assetAddress"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "stakeNFT",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_expeditionId"
      },
      {
        "type": "address",
        "name": "_assetAddress"
      },
      {
        "type": "uint256[]",
        "name": "_tokenIds"
      }
    ],
    "outputs": []
  },
  {
    "name": "stakingAndKeysAddress",
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
    "name": "unstakeFT",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_assetAddress"
      },
      {
        "type": "uint256",
        "name": "_amount"
      }
    ],
    "outputs": []
  },
  {
    "name": "unstakeNFT",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "_expeditionId"
      },
      {
        "type": "address",
        "name": "_assetAddress"
      },
      {
        "type": "uint256[]",
        "name": "_tokenIds"
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
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract