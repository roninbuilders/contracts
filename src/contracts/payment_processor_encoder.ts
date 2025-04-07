import type { Contract } from '@/contract'
import type { Abi } from 'abitype'
const contract = {
  id: 27687,
  address: '0x9a1d00c3a699f491037745393a0592ac6b62421d' as const,
  contract_name: 'PaymentProcessorEncoder',
  display_name: 'Payment Processor Encoder',
  is_deprecated: false,
  is_proxy: false,
  proxy_to: false,
  created_at: 1742222711,
  abi: [
  {
    "name": "encodeAcceptOfferAdvancedCalldata",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "tuple",
        "name": "advancedBid",
        "components": [
          {
            "type": "uint256",
            "name": "offerType"
          },
          {
            "type": "tuple",
            "name": "advancedOrder",
            "components": [
              {
                "type": "tuple",
                "name": "saleDetails",
                "components": [
                  {
                    "type": "uint256",
                    "name": "protocol"
                  },
                  {
                    "type": "address",
                    "name": "maker"
                  },
                  {
                    "type": "address",
                    "name": "beneficiary"
                  },
                  {
                    "type": "address",
                    "name": "marketplace"
                  },
                  {
                    "type": "address",
                    "name": "fallbackRoyaltyRecipient"
                  },
                  {
                    "type": "address",
                    "name": "paymentMethod"
                  },
                  {
                    "type": "address",
                    "name": "tokenAddress"
                  },
                  {
                    "type": "uint256",
                    "name": "tokenId"
                  },
                  {
                    "type": "uint256",
                    "name": "amount"
                  },
                  {
                    "type": "uint256",
                    "name": "itemPrice"
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
                    "type": "uint256",
                    "name": "marketplaceFeeNumerator"
                  },
                  {
                    "type": "uint256",
                    "name": "maxRoyaltyFeeNumerator"
                  },
                  {
                    "type": "uint256",
                    "name": "requestedFillAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "minimumFillAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "protocolFeeVersion"
                  }
                ]
              },
              {
                "type": "tuple",
                "name": "signature",
                "components": [
                  {
                    "type": "uint256",
                    "name": "v"
                  },
                  {
                    "type": "bytes32",
                    "name": "r"
                  },
                  {
                    "type": "bytes32",
                    "name": "s"
                  }
                ]
              },
              {
                "type": "tuple",
                "name": "cosignature",
                "components": [
                  {
                    "type": "address",
                    "name": "signer"
                  },
                  {
                    "type": "address",
                    "name": "taker"
                  },
                  {
                    "type": "uint256",
                    "name": "expiration"
                  },
                  {
                    "type": "uint256",
                    "name": "v"
                  },
                  {
                    "type": "bytes32",
                    "name": "r"
                  },
                  {
                    "type": "bytes32",
                    "name": "s"
                  }
                ]
              },
              {
                "type": "tuple",
                "name": "permitContext",
                "components": [
                  {
                    "type": "address",
                    "name": "permitProcessor"
                  },
                  {
                    "type": "uint256",
                    "name": "permitNonce"
                  }
                ]
              }
            ]
          },
          {
            "type": "tuple",
            "name": "sellerPermitSignature",
            "components": [
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          }
        ]
      },
      {
        "type": "tuple",
        "name": "bulkOrderProof",
        "components": [
          {
            "type": "uint256",
            "name": "orderIndex"
          },
          {
            "type": "bytes32[]",
            "name": "proof"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "feeOnTop",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "tokenSetProof",
        "components": [
          {
            "type": "bytes32[]",
            "name": "proof"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "encodeAcceptOfferCalldata",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256",
        "name": "offerType"
      },
      {
        "type": "tuple",
        "name": "saleDetails",
        "components": [
          {
            "type": "uint256",
            "name": "protocol"
          },
          {
            "type": "address",
            "name": "maker"
          },
          {
            "type": "address",
            "name": "beneficiary"
          },
          {
            "type": "address",
            "name": "marketplace"
          },
          {
            "type": "address",
            "name": "fallbackRoyaltyRecipient"
          },
          {
            "type": "address",
            "name": "paymentMethod"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256",
            "name": "itemPrice"
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
            "type": "uint256",
            "name": "marketplaceFeeNumerator"
          },
          {
            "type": "uint256",
            "name": "maxRoyaltyFeeNumerator"
          },
          {
            "type": "uint256",
            "name": "requestedFillAmount"
          },
          {
            "type": "uint256",
            "name": "minimumFillAmount"
          },
          {
            "type": "uint256",
            "name": "protocolFeeVersion"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "signature",
        "components": [
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "tokenSetProof",
        "components": [
          {
            "type": "bytes32[]",
            "name": "proof"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "cosignature",
        "components": [
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "address",
            "name": "taker"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "feeOnTop",
        "components": [
          {
            "type": "address",
            "name": "recipient"
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
        "type": "bytes"
      }
    ]
  },
  {
    "name": "encodeBulkAcceptOffersAdvancedCalldata",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "tuple[]",
        "name": "advancedBidsArray",
        "components": [
          {
            "type": "uint256",
            "name": "offerType"
          },
          {
            "type": "tuple",
            "name": "advancedOrder",
            "components": [
              {
                "type": "tuple",
                "name": "saleDetails",
                "components": [
                  {
                    "type": "uint256",
                    "name": "protocol"
                  },
                  {
                    "type": "address",
                    "name": "maker"
                  },
                  {
                    "type": "address",
                    "name": "beneficiary"
                  },
                  {
                    "type": "address",
                    "name": "marketplace"
                  },
                  {
                    "type": "address",
                    "name": "fallbackRoyaltyRecipient"
                  },
                  {
                    "type": "address",
                    "name": "paymentMethod"
                  },
                  {
                    "type": "address",
                    "name": "tokenAddress"
                  },
                  {
                    "type": "uint256",
                    "name": "tokenId"
                  },
                  {
                    "type": "uint256",
                    "name": "amount"
                  },
                  {
                    "type": "uint256",
                    "name": "itemPrice"
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
                    "type": "uint256",
                    "name": "marketplaceFeeNumerator"
                  },
                  {
                    "type": "uint256",
                    "name": "maxRoyaltyFeeNumerator"
                  },
                  {
                    "type": "uint256",
                    "name": "requestedFillAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "minimumFillAmount"
                  },
                  {
                    "type": "uint256",
                    "name": "protocolFeeVersion"
                  }
                ]
              },
              {
                "type": "tuple",
                "name": "signature",
                "components": [
                  {
                    "type": "uint256",
                    "name": "v"
                  },
                  {
                    "type": "bytes32",
                    "name": "r"
                  },
                  {
                    "type": "bytes32",
                    "name": "s"
                  }
                ]
              },
              {
                "type": "tuple",
                "name": "cosignature",
                "components": [
                  {
                    "type": "address",
                    "name": "signer"
                  },
                  {
                    "type": "address",
                    "name": "taker"
                  },
                  {
                    "type": "uint256",
                    "name": "expiration"
                  },
                  {
                    "type": "uint256",
                    "name": "v"
                  },
                  {
                    "type": "bytes32",
                    "name": "r"
                  },
                  {
                    "type": "bytes32",
                    "name": "s"
                  }
                ]
              },
              {
                "type": "tuple",
                "name": "permitContext",
                "components": [
                  {
                    "type": "address",
                    "name": "permitProcessor"
                  },
                  {
                    "type": "uint256",
                    "name": "permitNonce"
                  }
                ]
              }
            ]
          },
          {
            "type": "tuple",
            "name": "sellerPermitSignature",
            "components": [
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "bulkOrderProofs",
        "components": [
          {
            "type": "uint256",
            "name": "orderIndex"
          },
          {
            "type": "bytes32[]",
            "name": "proof"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "feesOnTop",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "tokenSetProofs",
        "components": [
          {
            "type": "bytes32[]",
            "name": "proof"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "encodeBulkAcceptOffersCalldata",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256[]",
        "name": "offerTypeArray"
      },
      {
        "type": "tuple[]",
        "name": "saleDetailsArray",
        "components": [
          {
            "type": "uint256",
            "name": "protocol"
          },
          {
            "type": "address",
            "name": "maker"
          },
          {
            "type": "address",
            "name": "beneficiary"
          },
          {
            "type": "address",
            "name": "marketplace"
          },
          {
            "type": "address",
            "name": "fallbackRoyaltyRecipient"
          },
          {
            "type": "address",
            "name": "paymentMethod"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256",
            "name": "itemPrice"
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
            "type": "uint256",
            "name": "marketplaceFeeNumerator"
          },
          {
            "type": "uint256",
            "name": "maxRoyaltyFeeNumerator"
          },
          {
            "type": "uint256",
            "name": "requestedFillAmount"
          },
          {
            "type": "uint256",
            "name": "minimumFillAmount"
          },
          {
            "type": "uint256",
            "name": "protocolFeeVersion"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "signatures",
        "components": [
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "tokenSetProofsArray",
        "components": [
          {
            "type": "bytes32[]",
            "name": "proof"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "cosignaturesArray",
        "components": [
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "address",
            "name": "taker"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "feesOnTopArray",
        "components": [
          {
            "type": "address",
            "name": "recipient"
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
        "type": "bytes"
      }
    ]
  },
  {
    "name": "encodeBulkBuyListingsAdvancedCalldata",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "tuple[]",
        "name": "advancedListingsArray",
        "components": [
          {
            "type": "tuple",
            "name": "saleDetails",
            "components": [
              {
                "type": "uint256",
                "name": "protocol"
              },
              {
                "type": "address",
                "name": "maker"
              },
              {
                "type": "address",
                "name": "beneficiary"
              },
              {
                "type": "address",
                "name": "marketplace"
              },
              {
                "type": "address",
                "name": "fallbackRoyaltyRecipient"
              },
              {
                "type": "address",
                "name": "paymentMethod"
              },
              {
                "type": "address",
                "name": "tokenAddress"
              },
              {
                "type": "uint256",
                "name": "tokenId"
              },
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "uint256",
                "name": "itemPrice"
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
                "type": "uint256",
                "name": "marketplaceFeeNumerator"
              },
              {
                "type": "uint256",
                "name": "maxRoyaltyFeeNumerator"
              },
              {
                "type": "uint256",
                "name": "requestedFillAmount"
              },
              {
                "type": "uint256",
                "name": "minimumFillAmount"
              },
              {
                "type": "uint256",
                "name": "protocolFeeVersion"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "signature",
            "components": [
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "cosignature",
            "components": [
              {
                "type": "address",
                "name": "signer"
              },
              {
                "type": "address",
                "name": "taker"
              },
              {
                "type": "uint256",
                "name": "expiration"
              },
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "permitContext",
            "components": [
              {
                "type": "address",
                "name": "permitProcessor"
              },
              {
                "type": "uint256",
                "name": "permitNonce"
              }
            ]
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "bulkOrderProofs",
        "components": [
          {
            "type": "uint256",
            "name": "orderIndex"
          },
          {
            "type": "bytes32[]",
            "name": "proof"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "feesOnTop",
        "components": [
          {
            "type": "address",
            "name": "recipient"
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
        "type": "bytes"
      }
    ]
  },
  {
    "name": "encodeBulkBuyListingsCalldata",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "tuple[]",
        "name": "saleDetailsArray",
        "components": [
          {
            "type": "uint256",
            "name": "protocol"
          },
          {
            "type": "address",
            "name": "maker"
          },
          {
            "type": "address",
            "name": "beneficiary"
          },
          {
            "type": "address",
            "name": "marketplace"
          },
          {
            "type": "address",
            "name": "fallbackRoyaltyRecipient"
          },
          {
            "type": "address",
            "name": "paymentMethod"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256",
            "name": "itemPrice"
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
            "type": "uint256",
            "name": "marketplaceFeeNumerator"
          },
          {
            "type": "uint256",
            "name": "maxRoyaltyFeeNumerator"
          },
          {
            "type": "uint256",
            "name": "requestedFillAmount"
          },
          {
            "type": "uint256",
            "name": "minimumFillAmount"
          },
          {
            "type": "uint256",
            "name": "protocolFeeVersion"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "signatures",
        "components": [
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "cosignatures",
        "components": [
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "address",
            "name": "taker"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "feesOnTop",
        "components": [
          {
            "type": "address",
            "name": "recipient"
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
        "type": "bytes"
      }
    ]
  },
  {
    "name": "encodeBuyListingAdvancedCalldata",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "tuple",
        "name": "advancedListing",
        "components": [
          {
            "type": "tuple",
            "name": "saleDetails",
            "components": [
              {
                "type": "uint256",
                "name": "protocol"
              },
              {
                "type": "address",
                "name": "maker"
              },
              {
                "type": "address",
                "name": "beneficiary"
              },
              {
                "type": "address",
                "name": "marketplace"
              },
              {
                "type": "address",
                "name": "fallbackRoyaltyRecipient"
              },
              {
                "type": "address",
                "name": "paymentMethod"
              },
              {
                "type": "address",
                "name": "tokenAddress"
              },
              {
                "type": "uint256",
                "name": "tokenId"
              },
              {
                "type": "uint256",
                "name": "amount"
              },
              {
                "type": "uint256",
                "name": "itemPrice"
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
                "type": "uint256",
                "name": "marketplaceFeeNumerator"
              },
              {
                "type": "uint256",
                "name": "maxRoyaltyFeeNumerator"
              },
              {
                "type": "uint256",
                "name": "requestedFillAmount"
              },
              {
                "type": "uint256",
                "name": "minimumFillAmount"
              },
              {
                "type": "uint256",
                "name": "protocolFeeVersion"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "signature",
            "components": [
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "cosignature",
            "components": [
              {
                "type": "address",
                "name": "signer"
              },
              {
                "type": "address",
                "name": "taker"
              },
              {
                "type": "uint256",
                "name": "expiration"
              },
              {
                "type": "uint256",
                "name": "v"
              },
              {
                "type": "bytes32",
                "name": "r"
              },
              {
                "type": "bytes32",
                "name": "s"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "permitContext",
            "components": [
              {
                "type": "address",
                "name": "permitProcessor"
              },
              {
                "type": "uint256",
                "name": "permitNonce"
              }
            ]
          }
        ]
      },
      {
        "type": "tuple",
        "name": "bulkOrderProof",
        "components": [
          {
            "type": "uint256",
            "name": "orderIndex"
          },
          {
            "type": "bytes32[]",
            "name": "proof"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "feeOnTop",
        "components": [
          {
            "type": "address",
            "name": "recipient"
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
        "type": "bytes"
      }
    ]
  },
  {
    "name": "encodeBuyListingCalldata",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "tuple",
        "name": "saleDetails",
        "components": [
          {
            "type": "uint256",
            "name": "protocol"
          },
          {
            "type": "address",
            "name": "maker"
          },
          {
            "type": "address",
            "name": "beneficiary"
          },
          {
            "type": "address",
            "name": "marketplace"
          },
          {
            "type": "address",
            "name": "fallbackRoyaltyRecipient"
          },
          {
            "type": "address",
            "name": "paymentMethod"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256",
            "name": "itemPrice"
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
            "type": "uint256",
            "name": "marketplaceFeeNumerator"
          },
          {
            "type": "uint256",
            "name": "maxRoyaltyFeeNumerator"
          },
          {
            "type": "uint256",
            "name": "requestedFillAmount"
          },
          {
            "type": "uint256",
            "name": "minimumFillAmount"
          },
          {
            "type": "uint256",
            "name": "protocolFeeVersion"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "signature",
        "components": [
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "cosignature",
        "components": [
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "address",
            "name": "taker"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "feeOnTop",
        "components": [
          {
            "type": "address",
            "name": "recipient"
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
        "type": "bytes"
      }
    ]
  },
  {
    "name": "encodeDestroyCosignerCalldata",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "address",
        "name": "cosigner"
      },
      {
        "type": "tuple",
        "name": "signature",
        "components": [
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "encodeRevokeOrderDigestCalldata",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "bytes32",
        "name": "digest"
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "encodeRevokeSingleNonceCalldata",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "uint256",
        "name": "nonce"
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "encodeSweepCollectionAdvancedCalldata",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "tuple",
        "name": "advancedSweep",
        "components": [
          {
            "type": "tuple",
            "name": "feeOnTop",
            "components": [
              {
                "type": "address",
                "name": "recipient"
              },
              {
                "type": "uint256",
                "name": "amount"
              }
            ]
          },
          {
            "type": "tuple",
            "name": "sweepOrder",
            "components": [
              {
                "type": "uint256",
                "name": "protocol"
              },
              {
                "type": "address",
                "name": "tokenAddress"
              },
              {
                "type": "address",
                "name": "paymentMethod"
              },
              {
                "type": "address",
                "name": "beneficiary"
              }
            ]
          },
          {
            "type": "tuple[]",
            "name": "items",
            "components": [
              {
                "type": "tuple",
                "name": "sweepItem",
                "components": [
                  {
                    "type": "address",
                    "name": "maker"
                  },
                  {
                    "type": "address",
                    "name": "marketplace"
                  },
                  {
                    "type": "address",
                    "name": "fallbackRoyaltyRecipient"
                  },
                  {
                    "type": "uint256",
                    "name": "tokenId"
                  },
                  {
                    "type": "uint256",
                    "name": "amount"
                  },
                  {
                    "type": "uint256",
                    "name": "itemPrice"
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
                    "type": "uint256",
                    "name": "marketplaceFeeNumerator"
                  },
                  {
                    "type": "uint256",
                    "name": "maxRoyaltyFeeNumerator"
                  },
                  {
                    "type": "uint256",
                    "name": "protocolFeeVersion"
                  }
                ]
              },
              {
                "type": "tuple",
                "name": "signature",
                "components": [
                  {
                    "type": "uint256",
                    "name": "v"
                  },
                  {
                    "type": "bytes32",
                    "name": "r"
                  },
                  {
                    "type": "bytes32",
                    "name": "s"
                  }
                ]
              },
              {
                "type": "tuple",
                "name": "cosignature",
                "components": [
                  {
                    "type": "address",
                    "name": "signer"
                  },
                  {
                    "type": "address",
                    "name": "taker"
                  },
                  {
                    "type": "uint256",
                    "name": "expiration"
                  },
                  {
                    "type": "uint256",
                    "name": "v"
                  },
                  {
                    "type": "bytes32",
                    "name": "r"
                  },
                  {
                    "type": "bytes32",
                    "name": "s"
                  }
                ]
              },
              {
                "type": "tuple",
                "name": "permitContext",
                "components": [
                  {
                    "type": "address",
                    "name": "permitProcessor"
                  },
                  {
                    "type": "uint256",
                    "name": "permitNonce"
                  }
                ]
              },
              {
                "type": "tuple",
                "name": "bulkOrderProof",
                "components": [
                  {
                    "type": "uint256",
                    "name": "orderIndex"
                  },
                  {
                    "type": "bytes32[]",
                    "name": "proof"
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  },
  {
    "name": "encodeSweepCollectionCalldata",
    "type": "function",
    "stateMutability": "view",
    "inputs": [
      {
        "type": "address"
      },
      {
        "type": "tuple",
        "name": "feeOnTop",
        "components": [
          {
            "type": "address",
            "name": "recipient"
          },
          {
            "type": "uint256",
            "name": "amount"
          }
        ]
      },
      {
        "type": "tuple",
        "name": "sweepOrder",
        "components": [
          {
            "type": "uint256",
            "name": "protocol"
          },
          {
            "type": "address",
            "name": "tokenAddress"
          },
          {
            "type": "address",
            "name": "paymentMethod"
          },
          {
            "type": "address",
            "name": "beneficiary"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "items",
        "components": [
          {
            "type": "address",
            "name": "maker"
          },
          {
            "type": "address",
            "name": "marketplace"
          },
          {
            "type": "address",
            "name": "fallbackRoyaltyRecipient"
          },
          {
            "type": "uint256",
            "name": "tokenId"
          },
          {
            "type": "uint256",
            "name": "amount"
          },
          {
            "type": "uint256",
            "name": "itemPrice"
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
            "type": "uint256",
            "name": "marketplaceFeeNumerator"
          },
          {
            "type": "uint256",
            "name": "maxRoyaltyFeeNumerator"
          },
          {
            "type": "uint256",
            "name": "protocolFeeVersion"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "signatures",
        "components": [
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      },
      {
        "type": "tuple[]",
        "name": "cosignatures",
        "components": [
          {
            "type": "address",
            "name": "signer"
          },
          {
            "type": "address",
            "name": "taker"
          },
          {
            "type": "uint256",
            "name": "expiration"
          },
          {
            "type": "uint256",
            "name": "v"
          },
          {
            "type": "bytes32",
            "name": "r"
          },
          {
            "type": "bytes32",
            "name": "s"
          }
        ]
      }
    ],
    "outputs": [
      {
        "type": "bytes"
      }
    ]
  }
] as const satisfies Abi
} as const satisfies Contract
export default contract