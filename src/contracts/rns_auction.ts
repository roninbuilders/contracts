import { Contract } from '@/contract'
export const RNS_AUCTION: Contract = {
	name: 'RNS Auction',
	address: '0x7b663d7252a8dcd213bbf8f812f3691b78ab62fb',
	abi: [
		{
			inputs: [],
			stateMutability: 'payable',
			type: 'constructor',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'id',
					type: 'uint256',
				},
			],
			name: 'AlreadyBidding',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ContractBidderIsForbidden',
			type: 'error',
		},
		{
			inputs: [],
			name: 'EventIsNotCreatedOrAlreadyStarted',
			type: 'error',
		},
		{
			inputs: [],
			name: 'InsufficientAmount',
			type: 'error',
		},
		{
			inputs: [],
			name: 'InvalidArrayLength',
			type: 'error',
		},
		{
			inputs: [],
			name: 'InvalidEventRange',
			type: 'error',
		},
		{
			inputs: [],
			name: 'NameNotReserved',
			type: 'error',
		},
		{
			inputs: [],
			name: 'NoOneBidded',
			type: 'error',
		},
		{
			inputs: [],
			name: 'NotYetEnded',
			type: 'error',
		},
		{
			inputs: [],
			name: 'NullAssignment',
			type: 'error',
		},
		{
			inputs: [],
			name: 'QueryIsNotInPeriod',
			type: 'error',
		},
		{
			inputs: [],
			name: 'RatioIsTooLarge',
			type: 'error',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'auctionId',
					type: 'bytes32',
				},
				{
					components: [
						{
							internalType: 'uint256',
							name: 'startedAt',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'endedAt',
							type: 'uint256',
						},
					],
					indexed: false,
					internalType: 'struct EventRange',
					name: 'range',
					type: 'tuple',
				},
			],
			name: 'AuctionEventSet',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: 'ratio',
					type: 'uint256',
				},
			],
			name: 'BidGapRatioUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'auctionId',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'id',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'price',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address payable',
					name: 'bidder',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'previousPrice',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'previousBidder',
					type: 'address',
				},
			],
			name: 'BidPlaced',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint8',
					name: 'version',
					type: 'uint8',
				},
			],
			name: 'Initialized',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'auctionId',
					type: 'bytes32',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: 'ids',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: 'startingPrices',
					type: 'uint256[]',
				},
			],
			name: 'LabelsListed',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'previousAdminRole',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'newAdminRole',
					type: 'bytes32',
				},
			],
			name: 'RoleAdminChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'sender',
					type: 'address',
				},
			],
			name: 'RoleGranted',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'sender',
					type: 'address',
				},
			],
			name: 'RoleRevoked',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'addr',
					type: 'address',
				},
			],
			name: 'TreasuryUpdated',
			type: 'event',
		},
		{
			inputs: [],
			name: 'DEFAULT_ADMIN_ROLE',
			outputs: [
				{
					internalType: 'bytes32',
					name: '',
					type: 'bytes32',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'DOMAIN_EXPIRY_DURATION',
			outputs: [
				{
					internalType: 'uint64',
					name: '',
					type: 'uint64',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'MAX_AUCTION_DOMAIN_EXPIRY',
			outputs: [
				{
					internalType: 'uint64',
					name: '',
					type: 'uint64',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'MAX_EXPIRY',
			outputs: [
				{
					internalType: 'uint64',
					name: '',
					type: 'uint64',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'MAX_PERCENTAGE',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'OPERATOR_ROLE',
			outputs: [
				{
					internalType: 'bytes32',
					name: '',
					type: 'bytes32',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256[]',
					name: 'ids',
					type: 'uint256[]',
				},
			],
			name: 'bulkClaimBidNames',
			outputs: [
				{
					internalType: 'uint256[]',
					name: 'claimedAts',
					type: 'uint256[]',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address[]',
					name: 'tos',
					type: 'address[]',
				},
				{
					internalType: 'uint256[]',
					name: 'ids',
					type: 'uint256[]',
				},
				{
					internalType: 'bool',
					name: 'allowFailure',
					type: 'bool',
				},
			],
			name: 'bulkClaimUnbiddedNames',
			outputs: [
				{
					internalType: 'bool[]',
					name: 'claimeds',
					type: 'bool[]',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'string[]',
					name: 'labels',
					type: 'string[]',
				},
			],
			name: 'bulkRegister',
			outputs: [
				{
					internalType: 'uint256[]',
					name: 'ids',
					type: 'uint256[]',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'startedAt',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'endedAt',
							type: 'uint256',
						},
					],
					internalType: 'struct EventRange',
					name: 'range',
					type: 'tuple',
				},
			],
			name: 'createAuctionEvent',
			outputs: [
				{
					internalType: 'bytes32',
					name: 'auctionId',
					type: 'bytes32',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'id',
					type: 'uint256',
				},
			],
			name: 'getAuction',
			outputs: [
				{
					components: [
						{
							internalType: 'bytes32',
							name: 'auctionId',
							type: 'bytes32',
						},
						{
							internalType: 'uint256',
							name: 'startingPrice',
							type: 'uint256',
						},
						{
							components: [
								{
									internalType: 'address payable',
									name: 'bidder',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'price',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'timestamp',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'claimedAt',
									type: 'uint256',
								},
							],
							internalType: 'struct INSAuction.Bid',
							name: 'bid',
							type: 'tuple',
						},
					],
					internalType: 'struct INSAuction.DomainAuction',
					name: 'auction',
					type: 'tuple',
				},
				{
					internalType: 'uint256',
					name: 'beatPrice',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'auctionId',
					type: 'bytes32',
				},
			],
			name: 'getAuctionEvent',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'startedAt',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'endedAt',
							type: 'uint256',
						},
					],
					internalType: 'struct EventRange',
					name: '',
					type: 'tuple',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getBidGapRatio',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getRNSUnified',
			outputs: [
				{
					internalType: 'contract INSUnified',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
			],
			name: 'getRoleAdmin',
			outputs: [
				{
					internalType: 'bytes32',
					name: '',
					type: 'bytes32',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'uint256',
					name: 'index',
					type: 'uint256',
				},
			],
			name: 'getRoleMember',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
			],
			name: 'getRoleMemberCount',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getTreasury',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'grantRole',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'hasRole',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'admin',
					type: 'address',
				},
				{
					internalType: 'address[]',
					name: 'operators',
					type: 'address[]',
				},
				{
					internalType: 'contract INSUnified',
					name: 'rnsUnified',
					type: 'address',
				},
				{
					internalType: 'address payable',
					name: 'treasury',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'bidGapRatio',
					type: 'uint256',
				},
			],
			name: 'initialize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'auctionId',
					type: 'bytes32',
				},
				{
					internalType: 'uint256[]',
					name: 'ids',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: 'startingPrices',
					type: 'uint256[]',
				},
			],
			name: 'listNamesForAuction',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'id',
					type: 'uint256',
				},
			],
			name: 'placeBid',
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'renounceRole',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'id',
					type: 'uint256',
				},
			],
			name: 'reserved',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'role',
					type: 'bytes32',
				},
				{
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'revokeRole',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'auctionId',
					type: 'bytes32',
				},
				{
					components: [
						{
							internalType: 'uint256',
							name: 'startedAt',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'endedAt',
							type: 'uint256',
						},
					],
					internalType: 'struct EventRange',
					name: 'range',
					type: 'tuple',
				},
			],
			name: 'setAuctionEvent',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'ratio',
					type: 'uint256',
				},
			],
			name: 'setBidGapRatio',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address payable',
					name: 'addr',
					type: 'address',
				},
			],
			name: 'setTreasury',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'interfaceId',
					type: 'bytes4',
				},
			],
			name: 'supportsInterface',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
	],
}
