import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 6168,
  address: '0xe3a360efad2f1dabfbfa3c354840dd64c7f9f0fb' as const,
  contract_name: 'DuelArenaBattle',
  display_name: 'Duel Arena Battle',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1735578030,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "_owner"
      },
      {
        "type": "address",
        "name": "_judge"
      },
      {
        "type": "address",
        "name": "_withdrawJudge"
      }
    ]
  },
  {
    "name": "BattleAlreadyClaimed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BattleAlreadyMatched",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BattleAlreadyNullified",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BattleNotMatched",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BattleSelfForbidden",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ClaimFromNonParticipant",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EthFeeNumerTooHigh",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EthStakeMustMatchMsgValue",
    "type": "error",
    "inputs": []
  },
  {
    "name": "EthStakeNotUnique",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExceedsMaximumUniqueStakes",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExistingStakes",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FeeTooLow",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ForgedSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ForgedWithdrawSignature",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidShortString",
    "type": "error",
    "inputs": []
  },
  {
    "name": "MustHaveStake",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotAllowedParticipant",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyInitiatorCanNullify",
    "type": "error",
    "inputs": []
  },
  {
    "name": "StringTooLong",
    "type": "error",
    "inputs": [
      {
        "type": "string",
        "name": "str"
      }
    ]
  },
  {
    "name": "TransferFailed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UniqueJudge",
    "type": "error",
    "inputs": []
  },
  {
    "name": "UserAlreadyWithdrawn",
    "type": "error",
    "inputs": []
  },
  {
    "name": "WithdrawFromNonParticipant",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ZeroAddressNotAllowed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "BattleCanceled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "battleId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "caller",
        "indexed": true
      }
    ]
  },
  {
    "name": "BattleInitialized",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "battleId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "playerOne",
        "indexed": true
      },
      {
        "type": "address",
        "name": "playerTwo",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "assetEnum"
      },
      {
        "type": "address[]",
        "name": "contractAddr"
      },
      {
        "type": "uint256[]",
        "name": "amtOrTokenId"
      }
    ]
  },
  {
    "name": "BattleJoined",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "battleId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "playerOne",
        "indexed": true
      },
      {
        "type": "address",
        "name": "playerTwo",
        "indexed": true
      },
      {
        "type": "uint256[]",
        "name": "assetEnum"
      },
      {
        "type": "address[]",
        "name": "contractAddr"
      },
      {
        "type": "uint256[]",
        "name": "amtOrTokenId"
      }
    ]
  },
  {
    "name": "BattleNullified",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "battleId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "caller",
        "indexed": true
      },
      {
        "type": "address",
        "name": "counterparty",
        "indexed": true
      }
    ]
  },
  {
    "name": "BattleWon",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "battleId",
        "indexed": true
      },
      {
        "type": "address",
        "name": "winner",
        "indexed": true
      }
    ]
  },
  {
    "name": "EIP712DomainChanged",
    "type": "event",
    "inputs": []
  },
  {
    "name": "EthFeeNumerChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "ethFeeNumer",
        "indexed": true
      }
    ]
  },
  {
    "name": "FeeChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "feeChanged",
        "indexed": true
      }
    ]
  },
  {
    "name": "JudgeChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newJudge",
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
    "name": "WithdrawJudgeChanged",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newWithdrawJudge",
        "indexed": true
      }
    ]
  },
  {
    "name": "battles",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      }
    ],
    "outputs": [
      {
        "type": "bool",
        "name": "claimed"
      },
      {
        "type": "bool",
        "name": "matched"
      },
      {
        "type": "bool",
        "name": "nullified"
      },
      {
        "type": "uint256",
        "name": "value"
      },
      {
        "type": "tuple",
        "name": "one",
        "components": [
          {
            "type": "bool",
            "name": "isWinner"
          },
          {
            "type": "bool",
            "name": "hasWithdrawn"
          },
          {
            "type": "address",
            "name": "user"
          },
          {
            "type": "tuple[]",
            "name": "stakes",
            "components": [
              {
                "type": "uint8",
                "name": "asset"
              },
              {
                "type": "address",
                "name": "contractAddr"
              },
              {
                "type": "uint256",
                "name": "amtOrTokenId"
              }
            ]
          }
        ]
      },
      {
        "type": "tuple",
        "name": "two",
        "components": [
          {
            "type": "bool",
            "name": "isWinner"
          },
          {
            "type": "bool",
            "name": "hasWithdrawn"
          },
          {
            "type": "address",
            "name": "user"
          },
          {
            "type": "tuple[]",
            "name": "stakes",
            "components": [
              {
                "type": "uint8",
                "name": "asset"
              },
              {
                "type": "address",
                "name": "contractAddr"
              },
              {
                "type": "uint256",
                "name": "amtOrTokenId"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "calcEthFee",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "battleId"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "changeEthFeeNumer",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "feeNumer"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "fee"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeJudge",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newJudge"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeWithdrawJudge",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newWithdrawJudge"
      }
    ],
    "outputs": []
  },
  {
    "name": "claimProceeds",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "battleId"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  },
  {
    "name": "eip712Domain",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "bytes1",
        "name": "fields"
      },
      {
        "type": "string",
        "name": "name"
      },
      {
        "type": "string",
        "name": "version"
      },
      {
        "type": "uint256",
        "name": "chainId"
      },
      {
        "type": "address",
        "name": "verifyingContract"
      },
      {
        "type": "bytes32",
        "name": "salt"
      },
      {
        "type": "uint256[]",
        "name": "extensions"
      }
    ]
  },
  {
    "name": "emergencyRefund",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "battleId"
      }
    ],
    "outputs": []
  },
  {
    "name": "emergencyWithdraw",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "payee"
      }
    ],
    "outputs": []
  },
  {
    "name": "emergencyWithdrawERC20",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "payee"
      },
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": []
  },
  {
    "name": "emergencyWithdrawERC721",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "payee"
      },
      {
        "type": "address",
        "name": "nft"
      },
      {
        "type": "uint256",
        "name": "tokenId"
      }
    ],
    "outputs": []
  },
  {
    "name": "escrowAddr",
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
    "name": "ethFeeNumer",
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
    "name": "getBattle",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "battleId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "bool",
            "name": "claimed"
          },
          {
            "type": "bool",
            "name": "matched"
          },
          {
            "type": "bool",
            "name": "nullified"
          },
          {
            "type": "uint256",
            "name": "value"
          },
          {
            "type": "tuple",
            "name": "one",
            "components": [
              {
                "type": "bool",
                "name": "isWinner"
              },
              {
                "type": "bool",
                "name": "hasWithdrawn"
              },
              {
                "type": "address",
                "name": "user"
              },
              {
                "type": "tuple[]",
                "name": "stakes",
                "components": [
                  {
                    "type": "uint8",
                    "name": "asset"
                  },
                  {
                    "type": "address",
                    "name": "contractAddr"
                  },
                  {
                    "type": "uint256",
                    "name": "amtOrTokenId"
                  }
                ]
              }
            ]
          },
          {
            "type": "tuple",
            "name": "two",
            "components": [
              {
                "type": "bool",
                "name": "isWinner"
              },
              {
                "type": "bool",
                "name": "hasWithdrawn"
              },
              {
                "type": "address",
                "name": "user"
              },
              {
                "type": "tuple[]",
                "name": "stakes",
                "components": [
                  {
                    "type": "uint8",
                    "name": "asset"
                  },
                  {
                    "type": "address",
                    "name": "contractAddr"
                  },
                  {
                    "type": "uint256",
                    "name": "amtOrTokenId"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "getClaimTypedDataHash",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "tuple",
        "name": "claim",
        "components": [
          {
            "type": "uint256",
            "name": "battleId"
          },
          {
            "type": "address",
            "name": "account"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes32"
      }
    ]
  },
  {
    "name": "initBattle",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "challenging"
      },
      {
        "type": "tuple[]",
        "name": "stakes",
        "components": [
          {
            "type": "uint8",
            "name": "asset"
          },
          {
            "type": "address",
            "name": "contractAddr"
          },
          {
            "type": "uint256",
            "name": "amtOrTokenId"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "joinBattle",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "battleId"
      },
      {
        "type": "tuple[]",
        "name": "stakes",
        "components": [
          {
            "type": "uint8",
            "name": "asset"
          },
          {
            "type": "address",
            "name": "contractAddr"
          },
          {
            "type": "uint256",
            "name": "amtOrTokenId"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "judge",
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
    "name": "nextBattleId",
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
    "name": "nullifyBattle",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint256",
        "name": "battleId"
      }
    ],
    "outputs": []
  },
  {
    "name": "onERC721Received",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address"
      },
      {
        "type": "uint256"
      },
      {
        "type": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes4"
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
    "name": "withdrawFee",
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
    "name": "withdrawJudge",
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
    "name": "withdrawStake",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "battleId"
      },
      {
        "type": "bytes",
        "name": "signature"
      }
    ],
    "outputs": []
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract