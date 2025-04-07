import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 5207,
  address: '0x3d1b2cf77ac7cc2309601b6e78cb695cbac3c7fe' as const,
  contract_name: 'Tribally Game Battles',
  display_name: 'Tribally Game Battles',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1732063603,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "mainToken"
      },
      {
        "type": "address[]",
        "name": "owners"
      }
    ]
  },
  {
    "name": "AddOwner",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true
      }
    ]
  },
  {
    "name": "ChangeAlterToken",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newAlterToken",
        "indexed": true
      }
    ]
  },
  {
    "name": "ChangeTimestampDelay",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "timestampExpirationDelay"
      }
    ]
  },
  {
    "name": "CompanyAlterFeeChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "previousAlternativeFee"
      },
      {
        "type": "uint256",
        "name": "newAlternativeFee"
      }
    ]
  },
  {
    "name": "CompanyFeeChanged",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "previousCompanyFee"
      },
      {
        "type": "uint256",
        "name": "newCompanyFee"
      }
    ]
  },
  {
    "name": "CompanyTransferred",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "previousCompany",
        "indexed": true
      },
      {
        "type": "address",
        "name": "newCompany",
        "indexed": true
      }
    ]
  },
  {
    "name": "CustomBetCancelled",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "betId"
      },
      {
        "type": "address",
        "name": "client",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "joinIdRef"
      },
      {
        "type": "uint256",
        "name": "mainTokenRefunded"
      }
    ]
  },
  {
    "name": "CustomBetClosed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "betId"
      },
      {
        "type": "string",
        "name": "finalValue"
      },
      {
        "type": "bool",
        "name": "targetSideWon"
      }
    ]
  },
  {
    "name": "CustomBetCreated",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "id"
      },
      {
        "type": "string",
        "name": "eventId"
      },
      {
        "type": "bool",
        "name": "hidden"
      },
      {
        "type": "uint256",
        "name": "lockTime"
      },
      {
        "type": "uint256",
        "name": "expirationTime"
      },
      {
        "type": "string",
        "name": "targetValue"
      },
      {
        "type": "bool",
        "name": "targetSide"
      },
      {
        "type": "uint256",
        "name": "coefficient"
      },
      {
        "type": "address",
        "name": "creator",
        "indexed": true
      }
    ]
  },
  {
    "name": "CustomBetJoined",
    "type": "event",
    "inputs": [
      {
        "type": "bool",
        "name": "side"
      },
      {
        "type": "uint256",
        "name": "mainAmount"
      },
      {
        "type": "address",
        "name": "client",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "betId"
      },
      {
        "type": "uint256",
        "name": "joinId"
      },
      {
        "type": "uint256",
        "name": "joinIdRef"
      }
    ]
  },
  {
    "name": "CustomBetRefunded",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "betId"
      },
      {
        "type": "address",
        "name": "client",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "mainTokenRefunded"
      }
    ]
  },
  {
    "name": "CustomPrizeTaken",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "betId"
      },
      {
        "type": "address",
        "name": "client",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "bool",
        "name": "useAlterFee"
      }
    ]
  },
  {
    "name": "FeeTaken",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "targetAddress",
        "indexed": true
      },
      {
        "type": "bool",
        "name": "isAlternative"
      }
    ]
  },
  {
    "name": "RemoveOwner",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "ownerToRemove",
        "indexed": true
      }
    ]
  },
  {
    "name": "SetRouter",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newSwapRouter",
        "indexed": true
      }
    ]
  },
  {
    "name": "VotingResult",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "code"
      },
      {
        "type": "uint256",
        "name": "votingNumber"
      },
      {
        "type": "bool",
        "name": "passed"
      }
    ]
  },
  {
    "name": "VotingStarted",
    "type": "event",
    "inputs": [
      {
        "type": "string",
        "name": "code"
      },
      {
        "type": "uint256",
        "name": "votingNumber"
      },
      {
        "type": "address",
        "name": "initiator",
        "indexed": true
      }
    ]
  },
  {
    "name": "acquireNewAlternativeToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "acquireNewOwner",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "acquireOwnerToRemove",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "acquireTakeFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "acquireTransferCompany",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "addOwnerVoting",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "newOwner"
      },
      {
        "type": "uint256",
        "name": "createdDate"
      },
      {
        "type": "uint256",
        "name": "votingCode"
      }
    ]
  },
  {
    "name": "cancelCustomJoin",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "betId"
      },
      {
        "type": "uint256",
        "name": "joinIdRef"
      }
    ],
    "outputs": []
  },
  {
    "name": "changeAlterToken",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "newAlterToken"
      },
      {
        "type": "uint256",
        "name": "createdDate"
      },
      {
        "type": "uint256",
        "name": "votingCode"
      }
    ]
  },
  {
    "name": "changeAlternativeTokenStart",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "alternativeToken"
      }
    ],
    "outputs": []
  },
  {
    "name": "clientBetsLength",
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
    "name": "close",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "closeCustomBet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "betId"
      },
      {
        "type": "string",
        "name": "finalValue"
      },
      {
        "type": "bool",
        "name": "targetSideWon"
      }
    ],
    "outputs": []
  },
  {
    "name": "company",
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
    "name": "createCustomBet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "createRequest",
        "components": [
          {
            "type": "string",
            "name": "eventId"
          },
          {
            "type": "bool",
            "name": "hidden"
          },
          {
            "type": "uint256",
            "name": "lockTime"
          },
          {
            "type": "uint256",
            "name": "expirationTime"
          },
          {
            "type": "string",
            "name": "targetValue"
          },
          {
            "type": "bool",
            "name": "targetSide"
          },
          {
            "type": "uint256",
            "name": "coefficient"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "joinRequest",
        "components": [
          {
            "type": "bool",
            "name": "side"
          },
          {
            "type": "uint256",
            "name": "amount"
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
    "name": "customBetIdCounter",
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
    "name": "enableAlternativeToken",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bool",
        "name": "enable"
      }
    ],
    "outputs": []
  },
  {
    "name": "getAlternativeFee",
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
    "name": "getAlternativeIERC20Token",
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
    "name": "getClientBets",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "client"
      },
      {
        "type": "uint256",
        "name": "offset"
      },
      {
        "type": "uint256",
        "name": "size"
      }
    ],
    "outputs": [
      {
        "type": "uint256[]"
      }
    ]
  },
  {
    "name": "getCompanyFee",
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
    "name": "getCompanyFeeBalance",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getCustomBet",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "betId"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "string",
            "name": "eventId"
          },
          {
            "type": "bool",
            "name": "hidden"
          },
          {
            "type": "uint256",
            "name": "lockTime"
          },
          {
            "type": "uint256",
            "name": "expirationTime"
          },
          {
            "type": "string",
            "name": "targetValue"
          },
          {
            "type": "bool",
            "name": "targetSide"
          },
          {
            "type": "uint256",
            "name": "coefficient"
          },
          {
            "type": "string",
            "name": "finalValue"
          },
          {
            "type": "bool",
            "name": "targetSideWon"
          }
        ]
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      },
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getCustomClientJoins",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "client"
      },
      {
        "type": "uint256",
        "name": "betId"
      }
    ],
    "outputs": [
      {
        "type": "tuple[]",
        "components": [
          {
            "type": "uint256",
            "name": "id"
          },
          {
            "type": "address",
            "name": "client"
          },
          {
            "type": "uint256",
            "name": "freeAmount"
          },
          {
            "type": "uint256",
            "name": "lockedAmount"
          },
          {
            "type": "bool",
            "name": "targetSide"
          },
          {
            "type": "uint256",
            "name": "joinRefId"
          }
        ]
      }
    ]
  },
  {
    "name": "getCustomWonAmount",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "betId"
      },
      {
        "type": "address",
        "name": "client"
      }
    ],
    "outputs": [
      {
        "type": "uint256"
      }
    ]
  },
  {
    "name": "getMainIERC20Token",
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
    "name": "getTimestampExpirationDelay",
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
    "name": "isAlternativeTokenEnabled",
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
    "name": "joinCustomBet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "betId"
      },
      {
        "type": "tuple",
        "name": "joinRequest",
        "components": [
          {
            "type": "bool",
            "name": "side"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "ownerAddStart",
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
    "name": "ownerToRemoveStart",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "ownerToRemove"
      }
    ],
    "outputs": []
  },
  {
    "name": "owners",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "refundCustomBet",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "betId"
      },
      {
        "type": "address",
        "name": "client"
      }
    ],
    "outputs": []
  },
  {
    "name": "removeOwnerVoting",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "ownerToRemove"
      },
      {
        "type": "uint256",
        "name": "createdDate"
      },
      {
        "type": "uint256",
        "name": "votingCode"
      }
    ]
  },
  {
    "name": "setAlternativeFeeFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "alternativeFee"
      }
    ],
    "outputs": []
  },
  {
    "name": "setCompanyFee",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "companyFee"
      }
    ],
    "outputs": []
  },
  {
    "name": "setRouter",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "router"
      }
    ],
    "outputs": []
  },
  {
    "name": "setTimestampExpirationDelay",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "timestampExpirationDelay"
      }
    ],
    "outputs": []
  },
  {
    "name": "swapRouter",
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
    "name": "takeCustomPrize",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "betId"
      },
      {
        "type": "address",
        "name": "client"
      },
      {
        "type": "bool",
        "name": "useAlterFee"
      }
    ],
    "outputs": []
  },
  {
    "name": "takeFeeStart",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "targetAddress"
      },
      {
        "type": "bool",
        "name": "isAlternative"
      }
    ],
    "outputs": []
  },
  {
    "name": "takeFeeVoting",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "address",
        "name": "targetAddress"
      },
      {
        "type": "bool",
        "name": "isAlternative"
      },
      {
        "type": "uint256",
        "name": "createdDate"
      },
      {
        "type": "uint256",
        "name": "votingCode"
      }
    ]
  },
  {
    "name": "totalOwners",
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
    "name": "transferCompanyStart",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "newCompany"
      }
    ],
    "outputs": []
  },
  {
    "name": "transferCompanyVoting",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "newCompanyAddress"
      },
      {
        "type": "uint256",
        "name": "createdDate"
      },
      {
        "type": "uint256",
        "name": "votingCode"
      }
    ]
  },
  {
    "name": "voteNegative",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "votePositive",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "voted",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256"
      },
      {
        "type": "address"
      }
    ],
    "outputs": [
      {
        "type": "bool"
      }
    ]
  },
  {
    "name": "votingActive",
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
    "name": "votingInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "initiator"
      },
      {
        "type": "uint256",
        "name": "currentNumberOfVotesPositive"
      },
      {
        "type": "uint256",
        "name": "currentNumberOfVotesNegative"
      },
      {
        "type": "uint256",
        "name": "startedDate"
      },
      {
        "type": "string",
        "name": "votingCode"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract