import { Contract } from '@/contract'
const GIFTS: Contract = {
	name: 'Gifts',
	address: '0xc1f6fbc6da4234239f44becce0438545f8cdbf5e',
	is_deprecated: false,
	updated_at: 1707575173,
	abi: [
		{
			inputs: [
				{
					internalType: 'address',
					name: '_nativeTokenWrapper',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_restrictionController',
					type: 'address',
				},
			],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			inputs: [],
			name: 'FailedtoRefundNativeToken',
			type: 'error',
		},
		{
			inputs: [],
			name: 'GiftAlreadyCancelled',
			type: 'error',
		},
		{
			inputs: [],
			name: 'GiftAlreadyClaimed',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'available',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'required',
					type: 'uint256',
				},
			],
			name: 'InsufficientBalance',
			type: 'error',
		},
		{
			inputs: [],
			name: 'InvalidControllerAddress',
			type: 'error',
		},
		{
			inputs: [],
			name: 'InvalidGift',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'string',
					name: 'message',
					type: 'string',
				},
			],
			name: 'InvalidPayload',
			type: 'error',
		},
		{
			inputs: [],
			name: 'InvalidRestriction',
			type: 'error',
		},
		{
			inputs: [],
			name: 'InvalidVerifier',
			type: 'error',
		},
		{
			inputs: [],
			name: 'TooManyGifts',
			type: 'error',
		},
		{
			inputs: [],
			name: 'TooManyGiftsToCancel',
			type: 'error',
		},
		{
			inputs: [],
			name: 'TooManyRestrictions',
			type: 'error',
		},
		{
			inputs: [],
			name: 'TooManyTokens',
			type: 'error',
		},
		{
			inputs: [],
			name: 'Unauthorized',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'string',
					name: 'restriction',
					type: 'string',
				},
			],
			name: 'UnmetRestriction',
			type: 'error',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: '_restrictionController',
					type: 'address',
				},
			],
			name: 'ControllerUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: '_giftID',
					type: 'uint256',
				},
			],
			name: 'GiftCancelled',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: '_giftID',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_claimedBy',
					type: 'address',
				},
			],
			name: 'GiftClaimed',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: '_giftID',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_createdBy',
					type: 'address',
				},
			],
			name: 'GiftCreated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'previousOwner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'OwnershipTransferred',
			type: 'event',
		},
		{
			inputs: [],
			name: 'MAX_GIFTS_PER_CANCEL_TX',
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
			name: 'MAX_GIFTS_PER_CREATEGIFTS',
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
			name: 'MAX_RESTRICTIONS_PER_GIFT',
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
			name: 'MAX_TOKENS_PER_GIFT',
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
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_giftIDs',
					type: 'uint256[]',
				},
			],
			name: 'cancelGifts',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_giftID',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: '_receiver',
					type: 'address',
				},
				{
					internalType: 'bytes',
					name: '_signature',
					type: 'bytes',
				},
			],
			name: 'claimGift',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					components: [
						{
							components: [
								{
									internalType: 'address',
									name: 'assetContract',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'tokenId',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'amount',
									type: 'uint256',
								},
							],
							internalType: 'struct IGifts.Token[]',
							name: 'tokens',
							type: 'tuple[]',
						},
						{
							components: [
								{
									internalType: 'string',
									name: 'id',
									type: 'string',
								},
								{
									internalType: 'bytes',
									name: 'args',
									type: 'bytes',
								},
							],
							internalType: 'struct IGifts.Restriction[]',
							name: 'restrictions',
							type: 'tuple[]',
						},
						{
							internalType: 'address',
							name: 'verifier',
							type: 'address',
						},
					],
					internalType: 'struct IGifts.NewGiftPayload',
					name: '_newGift',
					type: 'tuple',
				},
			],
			name: 'createGift',
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [
				{
					components: [
						{
							components: [
								{
									internalType: 'address',
									name: 'assetContract',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'tokenId',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'amount',
									type: 'uint256',
								},
							],
							internalType: 'struct IGifts.Token[]',
							name: 'tokens',
							type: 'tuple[]',
						},
						{
							components: [
								{
									internalType: 'string',
									name: 'id',
									type: 'string',
								},
								{
									internalType: 'bytes',
									name: 'args',
									type: 'bytes',
								},
							],
							internalType: 'struct IGifts.Restriction[]',
							name: 'restrictions',
							type: 'tuple[]',
						},
						{
							internalType: 'address',
							name: 'verifier',
							type: 'address',
						},
					],
					internalType: 'struct IGifts.NewGiftPayload[]',
					name: '_newGift',
					type: 'tuple[]',
				},
			],
			name: 'createGifts',
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'emergencyExit',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_verifier',
					type: 'address',
				},
			],
			name: 'getGift',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'giftID',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'createdAt',
							type: 'uint256',
						},
						{
							internalType: 'address',
							name: 'creator',
							type: 'address',
						},
						{
							internalType: 'bool',
							name: 'claimed',
							type: 'bool',
						},
						{
							internalType: 'bool',
							name: 'cancelled',
							type: 'bool',
						},
						{
							components: [
								{
									internalType: 'string',
									name: 'id',
									type: 'string',
								},
								{
									internalType: 'bytes',
									name: 'args',
									type: 'bytes',
								},
							],
							internalType: 'struct IGifts.Restriction[]',
							name: 'restrictions',
							type: 'tuple[]',
						},
						{
							components: [
								{
									internalType: 'address',
									name: 'assetContract',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'tokenId',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'amount',
									type: 'uint256',
								},
							],
							internalType: 'struct IGifts.Token[]',
							name: 'tokens',
							type: 'tuple[]',
						},
					],
					internalType: 'struct IGifts.Gift',
					name: 'currentGift',
					type: 'tuple',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getUnclaimedGifts',
			outputs: [
				{
					components: [
						{
							internalType: 'uint256',
							name: 'giftID',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'createdAt',
							type: 'uint256',
						},
						{
							internalType: 'address',
							name: 'creator',
							type: 'address',
						},
						{
							internalType: 'bool',
							name: 'claimed',
							type: 'bool',
						},
						{
							internalType: 'bool',
							name: 'cancelled',
							type: 'bool',
						},
						{
							components: [
								{
									internalType: 'string',
									name: 'id',
									type: 'string',
								},
								{
									internalType: 'bytes',
									name: 'args',
									type: 'bytes',
								},
							],
							internalType: 'struct IGifts.Restriction[]',
							name: 'restrictions',
							type: 'tuple[]',
						},
						{
							components: [
								{
									internalType: 'address',
									name: 'assetContract',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'tokenId',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'amount',
									type: 'uint256',
								},
							],
							internalType: 'struct IGifts.Token[]',
							name: 'tokens',
							type: 'tuple[]',
						},
					],
					internalType: 'struct IGifts.Gift[]',
					name: 'giftsTemp',
					type: 'tuple[]',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'forwarder',
					type: 'address',
				},
			],
			name: 'isTrustedForwarder',
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
					name: '',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
				{
					internalType: 'uint256[]',
					name: '',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '',
					type: 'uint256[]',
				},
				{
					internalType: 'bytes',
					name: '',
					type: 'bytes',
				},
			],
			name: 'onERC1155BatchReceived',
			outputs: [
				{
					internalType: 'bytes4',
					name: '',
					type: 'bytes4',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: '',
					type: 'bytes',
				},
			],
			name: 'onERC1155Received',
			outputs: [
				{
					internalType: 'bytes4',
					name: '',
					type: 'bytes4',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: '',
					type: 'bytes',
				},
			],
			name: 'onERC721Received',
			outputs: [
				{
					internalType: 'bytes4',
					name: '',
					type: 'bytes4',
				},
			],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'owner',
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
			inputs: [],
			name: 'renounceOwnership',
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
		{
			inputs: [
				{
					internalType: 'address',
					name: 'newOwner',
					type: 'address',
				},
			],
			name: 'transferOwnership',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_restrictionController',
					type: 'address',
				},
			],
			name: 'updateController',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			stateMutability: 'payable',
			type: 'receive',
		},
	],
}
export default GIFTS
