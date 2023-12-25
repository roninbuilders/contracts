import { Contract } from '@/contract'
export const PORTAL: Contract = {
	name: 'Portal',
	address: '0x5937874f2d7a26a0295d7c983a12c845f13c8d30',
	abi: [
		{
			inputs: [],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: 'nonce',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					components: [
						{
							internalType: 'enum MarketAsset.TokenStandard',
							name: 'erc',
							type: 'uint8',
						},
						{
							internalType: 'address',
							name: 'addr',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'id',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'quantity',
							type: 'uint256',
						},
					],
					indexed: false,
					internalType: 'struct MarketAsset.Asset[]',
					name: 'assets',
					type: 'tuple[]',
				},
			],
			name: 'Deposited',
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
					indexed: false,
					internalType: 'uint256',
					name: 'timeWindow',
					type: 'uint256',
				},
			],
			name: 'MinWithdrawalPeriodUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'Paused',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'usdc',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'rune',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256[5]',
					name: 'runeWithdrawalFeesInUsdc',
					type: 'uint256[5]',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'charm',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256[5]',
					name: 'charmWithdrawalFeesInUsdc',
					type: 'uint256[5]',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'paymentToken',
					type: 'address',
				},
			],
			name: 'PaymentUpdated',
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
					indexed: false,
					internalType: 'contract IKatanaRouter',
					name: 'routerContract',
					type: 'address',
				},
			],
			name: 'RouterContractUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'SLPContractUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'TreasuryUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'Unpaused',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: 'nonce',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					components: [
						{
							internalType: 'enum MarketAsset.TokenStandard',
							name: 'erc',
							type: 'uint8',
						},
						{
							internalType: 'address',
							name: 'addr',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'id',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'quantity',
							type: 'uint256',
						},
						{
							internalType: 'enum PortalAsset.Rarity',
							name: 'rarity',
							type: 'uint8',
						},
					],
					indexed: false,
					internalType: 'struct PortalAsset.AssetWithRarity[]',
					name: 'assets',
					type: 'tuple[]',
				},
				{
					indexed: false,
					internalType: 'bytes',
					name: 'extraData',
					type: 'bytes',
				},
			],
			name: 'Withdrew',
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
			name: 'DOMAIN_SEPARATOR',
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
			name: 'PORTAL_OPERATOR',
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
			name: 'burnSLP',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'burnedSLP',
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
					components: [
						{
							internalType: 'enum MarketAsset.TokenStandard',
							name: 'erc',
							type: 'uint8',
						},
						{
							internalType: 'address',
							name: 'addr',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'id',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'quantity',
							type: 'uint256',
						},
						{
							internalType: 'enum PortalAsset.Rarity',
							name: 'rarity',
							type: 'uint8',
						},
					],
					internalType: 'struct PortalAsset.AssetWithRarity[]',
					name: '_assets',
					type: 'tuple[]',
				},
				{
					internalType: 'address',
					name: '_paymentToken',
					type: 'address',
				},
				{
					internalType: 'address[]',
					name: '_path',
					type: 'address[]',
				},
			],
			name: 'calculateWithdrawalFee',
			outputs: [
				{
					internalType: 'uint256',
					name: '_paymentAmount',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_paymentAmountInUsdc',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'charm',
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
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'charmWithdrawalFeesInUsdc',
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
					components: [
						{
							internalType: 'enum MarketAsset.TokenStandard',
							name: 'erc',
							type: 'uint8',
						},
						{
							internalType: 'address',
							name: 'addr',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'id',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'quantity',
							type: 'uint256',
						},
					],
					internalType: 'struct MarketAsset.Asset[]',
					name: '_assets',
					type: 'tuple[]',
				},
			],
			name: 'deposit',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_owner',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_nonce',
					type: 'uint256',
				},
			],
			name: 'getPortalInfo',
			outputs: [
				{
					components: [
						{
							internalType: 'enum PortalHistory.Request',
							name: 'kind',
							type: 'uint8',
						},
						{
							internalType: 'uint256',
							name: 'nonce',
							type: 'uint256',
						},
						{
							internalType: 'address',
							name: 'owner',
							type: 'address',
						},
						{
							components: [
								{
									internalType: 'enum MarketAsset.TokenStandard',
									name: 'erc',
									type: 'uint8',
								},
								{
									internalType: 'address',
									name: 'addr',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'quantity',
									type: 'uint256',
								},
							],
							internalType: 'struct MarketAsset.Asset[]',
							name: 'assets',
							type: 'tuple[]',
						},
						{
							internalType: 'bytes',
							name: 'extraData',
							type: 'bytes',
						},
					],
					internalType: 'struct PortalHistory.PortalInfo',
					name: '_info',
					type: 'tuple',
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
					internalType: 'uint256',
					name: '_minWithdrawalPeriod',
					type: 'uint256',
				},
				{
					internalType: 'contract IKatanaRouter',
					name: '_routerContract',
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
					internalType: 'address',
					name: '',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_treasury',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_owner',
					type: 'address',
				},
				{
					internalType: 'address[]',
					name: '_operators',
					type: 'address[]',
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
					internalType: 'address',
					name: '',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'lastWithdrawalTimestamp',
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
			name: 'minWithdrawalPeriod',
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
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'nonce',
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
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'pause',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'paused',
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
			inputs: [],
			name: 'paymentToken',
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
			name: 'renounceRole',
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
			name: 'revokeRole',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'routerContract',
			outputs: [
				{
					internalType: 'contract IKatanaRouter',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'rune',
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
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'runeWithdrawalFeesInUsdc',
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
					internalType: 'uint256',
					name: '_timeWindow',
					type: 'uint256',
				},
			],
			name: 'setMinWithdrawalPeriod',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_usdc',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_rune',
					type: 'address',
				},
				{
					internalType: 'uint256[5]',
					name: '_runeWithdrawalFeesInUsdc',
					type: 'uint256[5]',
				},
				{
					internalType: 'address',
					name: '_charm',
					type: 'address',
				},
				{
					internalType: 'uint256[5]',
					name: '_charmWithdrawalFeesInUsdc',
					type: 'uint256[5]',
				},
				{
					internalType: 'address',
					name: '_paymentToken',
					type: 'address',
				},
			],
			name: 'setPayment',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract IKatanaRouter',
					name: '_routerContract',
					type: 'address',
				},
			],
			name: 'setRouterContract',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_slp',
					type: 'address',
				},
			],
			name: 'setSLP',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_treasury',
					type: 'address',
				},
			],
			name: 'setTreasury',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'slp',
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
			inputs: [],
			name: 'treasury',
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
			name: 'unpause',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'usdc',
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
					components: [
						{
							internalType: 'address',
							name: 'owner',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'nonce',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'expiredAt',
							type: 'uint256',
						},
						{
							components: [
								{
									internalType: 'enum MarketAsset.TokenStandard',
									name: 'erc',
									type: 'uint8',
								},
								{
									internalType: 'address',
									name: 'addr',
									type: 'address',
								},
								{
									internalType: 'uint256',
									name: 'id',
									type: 'uint256',
								},
								{
									internalType: 'uint256',
									name: 'quantity',
									type: 'uint256',
								},
								{
									internalType: 'enum PortalAsset.Rarity',
									name: 'rarity',
									type: 'uint8',
								},
							],
							internalType: 'struct PortalAsset.AssetWithRarity[]',
							name: 'assets',
							type: 'tuple[]',
						},
						{
							internalType: 'bytes',
							name: 'extraData',
							type: 'bytes',
						},
					],
					internalType: 'struct PortalExchange.WithdrawalStatement',
					name: '_withdrawal',
					type: 'tuple',
				},
				{
					internalType: 'bytes',
					name: '_signature',
					type: 'bytes',
				},
				{
					internalType: 'address[]',
					name: '_path',
					type: 'address[]',
				},
			],
			name: 'withdraw',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'withdrawNativeToken',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract IERC20',
					name: '_token',
					type: 'address',
				},
			],
			name: 'withdrawToken',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
