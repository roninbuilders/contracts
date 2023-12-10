export const APEIRON_APOSTLE_SEASON_MINTING = {
	name: 'Apeiron Apostle Season Minting',
	address: '0x153a381d1207862ca003f68600462faa66a828a7',
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
					internalType: 'address',
					name: '_admin',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'bool',
					name: '_enabled',
					type: 'bool',
				},
			],
			name: 'AdminAccessSet',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'previousAdmin',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'newAdmin',
					type: 'address',
				},
			],
			name: 'AdminChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'beacon',
					type: 'address',
				},
			],
			name: 'BeaconUpgraded',
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
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_tokenOwnerAddress',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_dungeonApostleId',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_tokenId',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_gene',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_iv',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'bool',
					name: '_isFreeMint',
					type: 'bool',
				},
			],
			name: 'PurchaseSuccess',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint8',
					name: '_mintType',
					type: 'uint8',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_saleSchedule',
					type: 'uint256',
				},
			],
			name: 'SaleScheduleUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'implementation',
					type: 'address',
				},
			],
			name: 'Upgraded',
			type: 'event',
		},
		{
			inputs: [
				{
					internalType: 'uint8',
					name: '',
					type: 'uint8',
				},
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'addressFreeMintedMapping',
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
					internalType: 'uint8',
					name: '',
					type: 'uint8',
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
			],
			name: 'addressMintedClassMapping',
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
					internalType: 'uint8',
					name: '_mintType',
					type: 'uint8',
				},
				{
					internalType: 'address[]',
					name: '_address',
					type: 'address[]',
				},
				{
					internalType: 'uint256[]',
					name: '_freeMintCount',
					type: 'uint256[]',
				},
			],
			name: 'adminSetAddressFreeMintedMapping',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint8',
					name: '_mintType',
					type: 'uint8',
				},
				{
					internalType: 'address[]',
					name: '_address',
					type: 'address[]',
				},
				{
					internalType: 'uint256[][]',
					name: '_mintedClassArray',
					type: 'uint256[][]',
				},
			],
			name: 'adminSetAddressMintedClassMapping',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'apostleContract',
			outputs: [
				{
					internalType: 'contract ApeironApostle',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'earningAddress',
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
					internalType: 'uint8',
					name: '_mintType',
					type: 'uint8',
				},
				{
					internalType: 'address',
					name: '_address',
					type: 'address',
				},
			],
			name: 'getAddressMintedClassMapping',
			outputs: [
				{
					internalType: 'uint256[]',
					name: '',
					type: 'uint256[]',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint8',
					name: '_mintType',
					type: 'uint8',
				},
			],
			name: 'getMintPriceArray',
			outputs: [
				{
					internalType: 'uint256[]',
					name: '',
					type: 'uint256[]',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint8',
					name: '_mintType',
					type: 'uint8',
				},
				{
					internalType: 'address',
					name: '_address',
					type: 'address',
				},
			],
			name: 'getTotalAddressMintedByAddress',
			outputs: [
				{
					internalType: 'uint256',
					name: 'count',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'initialize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'admin',
					type: 'address',
				},
			],
			name: 'isAdmin',
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
			name: 'isEnabled',
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
					internalType: 'uint8',
					name: '',
					type: 'uint8',
				},
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'maxClassMintPerAddressMapping',
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
					internalType: 'uint8',
					name: '',
					type: 'uint8',
				},
			],
			name: 'maxFreeMintPerAddressMapping',
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
					internalType: 'uint8',
					name: '',
					type: 'uint8',
				},
			],
			name: 'maxMintPerAddressMapping',
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
					internalType: 'uint8',
					name: '',
					type: 'uint8',
				},
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'mintPriceMapping',
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
					name: '',
					type: 'uint256',
				},
			],
			name: 'mintedDungeonApostleIdMapping',
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
					internalType: 'address',
					name: '_user',
					type: 'address',
				},
				{
					internalType: 'uint8',
					name: '_mintType',
					type: 'uint8',
				},
				{
					internalType: 'enum ApostleMeta.ApostleClass',
					name: '_apostleClass',
					type: 'uint8',
				},
				{
					internalType: 'uint256',
					name: '_dungeonApostleId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_gene',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_iv',
					type: 'uint256',
				},
				{
					internalType: 'bool',
					name: '_isFreeMint',
					type: 'bool',
				},
				{
					internalType: 'uint256',
					name: '_userMaxFreeMintCount',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_userMaxSlotMintCount',
					type: 'uint256',
				},
			],
			name: 'requestPurchase',
			outputs: [],
			stateMutability: 'nonpayable',
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
					internalType: 'bool',
					name: 'enabled',
					type: 'bool',
				},
			],
			name: 'setAdmin',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'bool',
					name: '_isEnabled',
					type: 'bool',
				},
			],
			name: 'setEnabled',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint8',
					name: '_mintType',
					type: 'uint8',
				},
				{
					internalType: 'uint256',
					name: '_time',
					type: 'uint256',
				},
			],
			name: 'setForSaleSchedule',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint8',
					name: '_mintType',
					type: 'uint8',
				},
				{
					internalType: 'uint256[]',
					name: '_maxMintCountArray',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256',
					name: '_maxMintCount',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_maxFreeMintCount',
					type: 'uint256',
				},
				{
					internalType: 'uint256[]',
					name: '_mintPriceArray',
					type: 'uint256[]',
				},
			],
			name: 'setupMintTypeData',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'token',
			outputs: [
				{
					internalType: 'contract IERC20Upgradeable',
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
					name: '_nftAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_tokenAddress',
					type: 'address',
				},
			],
			name: 'updateContractSetting',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_earningAddress',
					type: 'address',
				},
			],
			name: 'updateEarningAddress',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'newImplementation',
					type: 'address',
				},
			],
			name: 'upgradeTo',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'newImplementation',
					type: 'address',
				},
				{
					internalType: 'bytes',
					name: 'data',
					type: 'bytes',
				},
			],
			name: 'upgradeToAndCall',
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: '_wallet',
					type: 'address',
				},
			],
			name: 'withdrawFunds',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
