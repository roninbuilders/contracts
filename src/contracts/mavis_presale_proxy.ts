import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 29551,
  address: '0x92ecc6673efa6152e19af45905191815a3a6ebb7' as const,
  contract_name: 'BeaconProxy',
  display_name: 'Mavis Presale Proxy',
  is_deprecated: false,
  is_proxy: true,
  proxy_to: '0x0688ec464c01c9c9ded6815ffd90be555774ff86',
  created_at: 1741697378,
  abi: [
  {
    "type": "constructor",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "beacon"
      },
      {
        "type": "bytes",
        "name": "data"
      }
    ]
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
    "name": "ERC1967InvalidBeacon",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "beacon"
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
    "name": "FailedInnerCall",
    "type": "error",
    "inputs": []
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
    "type": "fallback",
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
    "name": "DepositFailed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "token"
      },
      {
        "type": "uint256",
        "name": "amount"
      }
    ]
  },
  {
    "name": "EnforcedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrCeilingNotHigherThanFloor",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "floor"
      },
      {
        "type": "uint256",
        "name": "ceiling"
      }
    ]
  },
  {
    "name": "ErrFeeExceedsPrice",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ErrHasValueWhilePaidByERC20",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "currency"
      },
      {
        "type": "uint256",
        "name": "value"
      }
    ]
  },
  {
    "name": "ErrInsufficientTxValue",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "actual"
      },
      {
        "type": "uint256",
        "name": "expected"
      }
    ]
  },
  {
    "name": "ErrInvalidCurrency",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ExpectedPause",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FundsAlreadyDistributed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientAmountTokenIn",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InsufficientPayment",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "expected"
      },
      {
        "type": "uint256",
        "name": "actual"
      }
    ]
  },
  {
    "name": "InsufficientTicketsToReveal",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "expected"
      },
      {
        "type": "uint64",
        "name": "actual"
      }
    ]
  },
  {
    "name": "InvalidDistributionType",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "expected"
      },
      {
        "type": "uint8",
        "name": "actual"
      }
    ]
  },
  {
    "name": "InvalidInitialization",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidNumWinningTickets",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "totalSupply"
      },
      {
        "type": "uint256",
        "name": "numWinningTickets"
      }
    ]
  },
  {
    "name": "InvalidPath",
    "type": "error",
    "inputs": []
  },
  {
    "name": "InvalidRaffleType",
    "type": "error",
    "inputs": [
      {
        "type": "uint8",
        "name": "expected"
      },
      {
        "type": "uint8",
        "name": "actual"
      }
    ]
  },
  {
    "name": "LengthMismatch",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      }
    ]
  },
  {
    "name": "MathOverflowedMulDiv",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoLosingTicketsOrAllRefunded",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NoWinningTicketsOrAllRedeemed",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotFutureTimestamp",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "NotInPresaleTimeWindow",
    "type": "error",
    "inputs": [
      {
        "type": "uint256",
        "name": "start"
      },
      {
        "type": "uint256",
        "name": "end"
      },
      {
        "type": "uint256",
        "name": "current"
      }
    ]
  },
  {
    "name": "NotInitializing",
    "type": "error",
    "inputs": []
  },
  {
    "name": "NotSupportInterface",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "target"
      },
      {
        "type": "bytes4",
        "name": "expected"
      }
    ]
  },
  {
    "name": "NotZeroAddress",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      }
    ]
  },
  {
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error",
    "inputs": []
  },
  {
    "name": "OnlyEOAAllowed",
    "type": "error",
    "inputs": [
      {
        "type": "address",
        "name": "caller"
      }
    ]
  },
  {
    "name": "RaffleAlreadyFinished",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RaffleNotYetFinished",
    "type": "error",
    "inputs": []
  },
  {
    "name": "ReachedBuyableLimit",
    "type": "error",
    "inputs": [
      {
        "type": "uint32",
        "name": "limit"
      },
      {
        "type": "uint64",
        "name": "alreadyBought"
      }
    ]
  },
  {
    "name": "ReachedRevealableLimit",
    "type": "error",
    "inputs": [
      {
        "type": "uint64",
        "name": "limit"
      },
      {
        "type": "uint64",
        "name": "alreadyRevealed"
      }
    ]
  },
  {
    "name": "ReentrancyGuardReentrantCall",
    "type": "error",
    "inputs": []
  },
  {
    "name": "RequestAlreadyFulfilled",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
      }
    ]
  },
  {
    "name": "RequestHashNotFound",
    "type": "error",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
      }
    ]
  },
  {
    "name": "SaleAlreadyStarted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SaleCancelled",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SaleNotStarted",
    "type": "error",
    "inputs": []
  },
  {
    "name": "SoldOut",
    "type": "error",
    "inputs": []
  },
  {
    "name": "TimestampOverlapped",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      }
    ]
  },
  {
    "name": "UnauthorizedCaller",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      }
    ]
  },
  {
    "name": "ZeroAddress",
    "type": "error",
    "inputs": [
      {
        "type": "bytes4",
        "name": "sig"
      }
    ]
  },
  {
    "name": "ZeroAmountRequested",
    "type": "error",
    "inputs": []
  },
  {
    "name": "FactoryUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newFactory",
        "indexed": true
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
    "name": "KatanaRouterUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newKatanaRouter",
        "indexed": true
      }
    ]
  },
  {
    "name": "LosingTicketRefunded",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "numLosingTickets",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "refundedAmount"
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
    "name": "PresaleCancelled",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "operator",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "timestamp"
      }
    ]
  },
  {
    "name": "PresaleConfigUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "uint40",
            "name": "startPurchaseTs"
          },
          {
            "type": "uint40",
            "name": "startRaffleTs"
          },
          {
            "type": "uint40",
            "name": "startDistributionTs"
          },
          {
            "type": "uint64",
            "name": "ticketSupply"
          },
          {
            "type": "uint64",
            "name": "numWinningTickets"
          },
          {
            "type": "uint8",
            "name": "raffleType"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "uint32",
            "name": "limitBoughtPerWallet"
          },
          {
            "type": "uint64",
            "name": "limitRevealedPerWallet"
          },
          {
            "type": "uint64",
            "name": "maxRevealPerTx"
          },
          {
            "type": "uint8",
            "name": "distributionType"
          },
          {
            "type": "address",
            "name": "nftPresale"
          },
          {
            "type": "tuple",
            "name": "paymentInfo",
            "components": [
              {
                "type": "address",
                "name": "currency"
              },
              {
                "type": "uint80",
                "name": "price"
              },
              {
                "type": "uint16",
                "name": "_reserved"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "allocations",
            "components": [
              {
                "type": "address",
                "name": "recipient"
              },
              {
                "type": "uint16",
                "name": "feeBps"
              },
              {
                "type": "uint8",
                "name": "party"
              },
              {
                "type": "uint72",
                "name": "_reserved"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "PresaleFundDistributed",
    "type": "event",
    "inputs": [
      {
        "type": "uint256",
        "name": "amount"
      },
      {
        "type": "tuple[]",
        "name": "shares",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "value"
          }
        ]
      }
    ]
  },
  {
    "name": "RaffleRequested",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestHash",
        "indexed": true
      },
      {
        "type": "address",
        "name": "requester"
      },
      {
        "type": "uint64",
        "name": "actualNumTicketsReveal"
      },
      {
        "type": "uint64",
        "name": "requestedNumTicketsReveal"
      }
    ]
  },
  {
    "name": "TicketPurchased",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "requestQuantity"
      },
      {
        "type": "uint64",
        "name": "actualQuantity"
      },
      {
        "type": "uint256",
        "name": "actualPrice"
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
    "name": "UserConfigCustomized",
    "type": "event",
    "inputs": [
      {
        "type": "address[]",
        "name": "users"
      },
      {
        "type": "tuple[]",
        "name": "configs",
        "components": [
          {
            "type": "uint80",
            "name": "price"
          },
          {
            "type": "uint32",
            "name": "limit"
          },
          {
            "type": "uint144",
            "name": "_reserved"
          }
        ]
      },
      {
        "type": "bool[]",
        "name": "priceRemoved"
      },
      {
        "type": "bool[]",
        "name": "limitRemoved"
      }
    ]
  },
  {
    "name": "VRFCoordinatorAddressUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "newCoordinator",
        "indexed": true
      }
    ]
  },
  {
    "name": "WRONUpdated",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "wron",
        "indexed": true
      }
    ]
  },
  {
    "name": "WinningTicketRedeemed",
    "type": "event",
    "inputs": [
      {
        "type": "address",
        "name": "user",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint64",
        "name": "redeemedAmount",
        "indexed": true
      },
      {
        "type": "tuple[]",
        "name": "shares",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "value"
          }
        ]
      },
      {
        "type": "uint256[]",
        "name": "mintedTokenIds"
      },
      {
        "type": "uint256[]",
        "name": "mintedTokenAmounts"
      }
    ]
  },
  {
    "name": "WinningTicketsRevealed",
    "type": "event",
    "inputs": [
      {
        "type": "bytes32",
        "name": "requestHashed",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "randomSeed",
        "indexed": true
      },
      {
        "type": "address",
        "name": "requester",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "numWinningTicketsRevealed"
      },
      {
        "type": "address[]",
        "name": "winners"
      },
      {
        "type": "uint256[]",
        "name": "pickedIdx"
      }
    ]
  },
  {
    "name": "distributePresaleFund",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "estimateVRFRequestGas",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "numRevealTickets"
      },
      {
        "type": "uint256",
        "name": "gasPrice"
      }
    ],
    "outputs": [
      {
        "type": "uint256",
        "name": "callbackGasLimit"
      },
      {
        "type": "uint256",
        "name": "estimatedRandomFee"
      }
    ]
  },
  {
    "name": "forceCancelPresale",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "forceRedeemFor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "users"
      },
      {
        "type": "uint64[]",
        "name": "amounts"
      },
      {
        "type": "bytes[]",
        "name": "extraDatas"
      }
    ],
    "outputs": []
  },
  {
    "name": "forceRefundFor",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "users"
      }
    ],
    "outputs": []
  },
  {
    "name": "getCustomizedConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "result",
        "components": [
          {
            "type": "uint80",
            "name": "price"
          },
          {
            "type": "uint32",
            "name": "limit"
          },
          {
            "type": "uint144",
            "name": "_reserved"
          }
        ]
      }
    ]
  },
  {
    "name": "getFactory",
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
    "name": "getGlobalConfig",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "uint40",
            "name": "startPurchaseTs"
          },
          {
            "type": "uint40",
            "name": "startRaffleTs"
          },
          {
            "type": "uint40",
            "name": "startDistributionTs"
          },
          {
            "type": "uint64",
            "name": "ticketSupply"
          },
          {
            "type": "uint64",
            "name": "numWinningTickets"
          },
          {
            "type": "uint8",
            "name": "raffleType"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "uint32",
            "name": "limitBoughtPerWallet"
          },
          {
            "type": "uint64",
            "name": "limitRevealedPerWallet"
          },
          {
            "type": "uint64",
            "name": "maxRevealPerTx"
          },
          {
            "type": "uint8",
            "name": "distributionType"
          },
          {
            "type": "address",
            "name": "nftPresale"
          },
          {
            "type": "tuple",
            "name": "paymentInfo",
            "components": [
              {
                "type": "address",
                "name": "currency"
              },
              {
                "type": "uint80",
                "name": "price"
              },
              {
                "type": "uint16",
                "name": "_reserved"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "allocations",
            "components": [
              {
                "type": "address",
                "name": "recipient"
              },
              {
                "type": "uint16",
                "name": "feeBps"
              },
              {
                "type": "uint8",
                "name": "party"
              },
              {
                "type": "uint72",
                "name": "_reserved"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "getGlobalTracking",
    "type": "function",
    "stateMutability": "view",
    "inputs": [],
    "outputs": [
      {
        "type": "tuple",
        "name": "tracking",
        "components": [
          {
            "type": "uint256",
            "name": "fundsRaised"
          },
          {
            "type": "uint256",
            "name": "fundsDistributed"
          },
          {
            "type": "uint64",
            "name": "totalRevealed"
          },
          {
            "type": "uint64",
            "name": "totalSold"
          }
        ]
      }
    ]
  },
  {
    "name": "getKatanaRouter",
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
    "name": "getPurchaseSlotAt",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "index"
      }
    ],
    "outputs": [
      {
        "type": "address"
      }
    ]
  },
  {
    "name": "getPurchaseSlots",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "uint256",
        "name": "offset"
      },
      {
        "type": "uint256",
        "name": "limit"
      }
    ],
    "outputs": [
      {
        "type": "address[]",
        "name": "buyers"
      }
    ]
  },
  {
    "name": "getRequestInfo",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "name": "result",
        "components": [
          {
            "type": "address",
            "name": "requester"
          },
          {
            "type": "uint64",
            "name": "ticketsToBeRevealed"
          },
          {
            "type": "bool",
            "name": "isFinalized"
          },
          {
            "type": "bool",
            "name": "checkRevealLimit"
          }
        ]
      }
    ]
  },
  {
    "name": "getTicketsNotYetRevealed",
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
    "name": "getUserTracking",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address",
        "name": "user"
      }
    ],
    "outputs": [
      {
        "type": "tuple",
        "components": [
          {
            "type": "uint64",
            "name": "alreadyBought"
          },
          {
            "type": "uint64",
            "name": "alreadyRevealed"
          },
          {
            "type": "uint64",
            "name": "alreadyRedeemed"
          },
          {
            "type": "uint64",
            "name": "alreadyRefunded"
          },
          {
            "type": "uint64",
            "name": "totalWonTickets"
          }
        ]
      }
    ]
  },
  {
    "name": "getWRON",
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
        "name": "vrfCoordinator"
      },
      {
        "type": "address",
        "name": "katanaRouter"
      },
      {
        "type": "address",
        "name": "wron"
      }
    ],
    "outputs": []
  },
  {
    "name": "isSaleCancelled",
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
    "name": "purchaseTickets",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "address",
        "name": "subscriber"
      },
      {
        "type": "uint64",
        "name": "quantity"
      }
    ],
    "outputs": []
  },
  {
    "name": "raffle",
    "type": "function",
    "stateMutability": "payable",
    "inputs": [
      {
        "type": "uint64",
        "name": "numRevealTickets"
      }
    ],
    "outputs": [
      {
        "type": "bytes32",
        "name": "requestHash"
      }
    ]
  },
  {
    "name": "rawFulfillRandomSeed",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "bytes32",
        "name": "reqHash"
      },
      {
        "type": "uint256",
        "name": "randomSeed"
      }
    ],
    "outputs": []
  },
  {
    "name": "redeemWinningTickets",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint64",
        "name": "amount"
      },
      {
        "type": "bytes",
        "name": "extraData"
      }
    ],
    "outputs": []
  },
  {
    "name": "refundLosingTickets",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [],
    "outputs": []
  },
  {
    "name": "swapAndPurchaseTickets",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address",
        "name": "subscriber"
      },
      {
        "type": "uint64",
        "name": "quantity"
      },
      {
        "type": "uint256",
        "name": "amountInMax"
      },
      {
        "type": "uint256",
        "name": "deadline"
      },
      {
        "type": "address[]",
        "name": "path"
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
    "name": "updateDistributionInfo",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "uint40",
        "name": "startDistributionTs"
      },
      {
        "type": "address",
        "name": "nftContract"
      }
    ],
    "outputs": []
  },
  {
    "name": "updateGlobalConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "tuple",
        "name": "config",
        "components": [
          {
            "type": "uint40",
            "name": "startPurchaseTs"
          },
          {
            "type": "uint40",
            "name": "startRaffleTs"
          },
          {
            "type": "uint40",
            "name": "startDistributionTs"
          },
          {
            "type": "uint64",
            "name": "ticketSupply"
          },
          {
            "type": "uint64",
            "name": "numWinningTickets"
          },
          {
            "type": "uint8",
            "name": "raffleType"
          },
          {
            "type": "address",
            "name": "creator"
          },
          {
            "type": "uint32",
            "name": "limitBoughtPerWallet"
          },
          {
            "type": "uint64",
            "name": "limitRevealedPerWallet"
          },
          {
            "type": "uint64",
            "name": "maxRevealPerTx"
          },
          {
            "type": "uint8",
            "name": "distributionType"
          },
          {
            "type": "address",
            "name": "nftPresale"
          },
          {
            "type": "tuple",
            "name": "paymentInfo",
            "components": [
              {
                "type": "address",
                "name": "currency"
              },
              {
                "type": "uint80",
                "name": "price"
              },
              {
                "type": "uint16",
                "name": "_reserved"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "allocations",
            "components": [
              {
                "type": "address",
                "name": "recipient"
              },
              {
                "type": "uint16",
                "name": "feeBps"
              },
              {
                "type": "uint8",
                "name": "party"
              },
              {
                "type": "uint72",
                "name": "_reserved"
              }
            ]
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "updateUserConfig",
    "type": "function",
    "stateMutability": "nonpayable",
    "inputs": [
      {
        "type": "address[]",
        "name": "users"
      },
      {
        "type": "tuple[]",
        "name": "configs",
        "components": [
          {
            "type": "uint80",
            "name": "price"
          },
          {
            "type": "uint32",
            "name": "limit"
          },
          {
            "type": "uint144",
            "name": "_reserved"
          }
        ]
      }
    ],
    "outputs": []
  },
  {
    "name": "vrfCoordinator",
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
    "type": "receive",
    "stateMutability": "payable"
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract