import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'OnlyCoordinatorCanFulfill',
		type: 'error',
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
				internalType: 'bytes32',
				name: '_requestHash',
				type: 'bytes32',
			},
		],
		name: 'RequestTicketMinting',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'enum ApeironApostleTicketMinting.TICKET_MINT_TYPE',
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
				name: '_userAddress',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: '_requestHash',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: '_successApostleIdArray',
				type: 'uint256[]',
			},
			{
				indexed: false,
				internalType: 'uint256[]',
				name: '_failTicketIdArray',
				type: 'uint256[]',
			},
		],
		name: 'TicketMintSummary',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: '_userAddress',
				type: 'address',
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
		],
		name: 'TicketMintingSuccess',
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
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		name: 'TicketMintingRequestStructMap',
		outputs: [
			{
				internalType: 'address',
				name: 'userAddress',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'isDone',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'addonGasPrice',
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
				name: '_reqHash',
				type: 'bytes32',
			},
		],
		name: 'adminProcessTicketMint',
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
		name: 'callbackGaslimit',
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
				internalType: 'enum ApeironApostleTicketMinting.TICKET_MINT_TYPE',
				name: '_mintType',
				type: 'uint8',
			},
		],
		name: 'getSkillIds',
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
				internalType: 'bytes32',
				name: '_reqHash',
				type: 'bytes32',
			},
		],
		name: 'getTicketMintingStructsByRequestId',
		outputs: [
			{
				components: [
					{
						internalType: 'enum ApeironApostleTicketMinting.TICKET_MINT_TYPE',
						name: 'mintType',
						type: 'uint8',
					},
					{
						internalType: 'address',
						name: 'ticketContractAddress',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'ticketId',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'gene',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'apostleId',
						type: 'uint256',
					},
				],
				internalType: 'struct ApeironApostleTicketMinting.TicketMintingStruct[]',
				name: '',
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
				name: '_userAddress',
				type: 'address',
			},
		],
		name: 'getUserUnfinishedRequestedHash',
		outputs: [
			{
				internalType: 'bytes32[]',
				name: '',
				type: 'bytes32[]',
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
		inputs: [
			{
				internalType: 'bytes32',
				name: '_reqHash',
				type: 'bytes32',
			},
			{
				internalType: 'uint256',
				name: '_randomSeed',
				type: 'uint256',
			},
		],
		name: 'rawFulfillRandomSeed',
		outputs: [],
		stateMutability: 'nonpayable',
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
				internalType: 'address[]',
				name: '_ticketContractAddressArray',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_ticketIdArray',
				type: 'uint256[]',
			},
			{
				internalType: 'uint256[]',
				name: '_ticketCountArray',
				type: 'uint256[]',
			},
		],
		name: 'requestTicketMinting',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'payable',
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
				internalType: 'enum ApeironApostleTicketMinting.TICKET_MINT_TYPE',
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
				internalType: 'address',
				name: '_vrfCoordinator',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_callbackGaslimit',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_addonGasPrice',
				type: 'uint256',
			},
		],
		name: 'setupVRFCoordinator',
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
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'ticketContractIdToApostleClassMapping',
		outputs: [
			{
				internalType: 'enum ApostleMeta.ApostleClass',
				name: '',
				type: 'uint8',
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
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'ticketContractIdToMintTypeMapping',
		outputs: [
			{
				internalType: 'enum ApeironApostleTicketMinting.TICKET_MINT_TYPE',
				name: '',
				type: 'uint8',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum ApeironApostleTicketMinting.TICKET_MINT_TYPE',
				name: '',
				type: 'uint8',
			},
		],
		name: 'ticketMintTypeGeneMapping',
		outputs: [
			{
				internalType: 'uint256',
				name: 'minIV',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'maxIV',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'minSkillLevel',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'maxSkillLevel',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'totalSkillLevel',
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
				internalType: 'uint256',
				name: '_ronToUseInRandomness',
				type: 'uint256',
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
				internalType: 'enum ApostleMeta.ApostleClass[]',
				name: '_classArray',
				type: 'uint8[]',
			},
			{
				internalType: 'address[]',
				name: '_ticketContractAddressArray',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_ticketIdArray',
				type: 'uint256[]',
			},
		],
		name: 'updateTicketContractIdToApostleClassMapping',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum ApeironApostleTicketMinting.TICKET_MINT_TYPE[]',
				name: '_mintTypeArray',
				type: 'uint8[]',
			},
			{
				internalType: 'address[]',
				name: '_ticketContractAddressArray',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: '_ticketIdArray',
				type: 'uint256[]',
			},
		],
		name: 'updateTicketContractIdToMintTypeMapping',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum ApeironApostleTicketMinting.TICKET_MINT_TYPE',
				name: '_mintType',
				type: 'uint8',
			},
			{
				components: [
					{
						internalType: 'uint256[]',
						name: 'classArray',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: 'minIV',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'maxIV',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'minSkillLevel',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'maxSkillLevel',
						type: 'uint256',
					},
					{
						internalType: 'uint256[]',
						name: 'skillIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: 'totalSkillLevel',
						type: 'uint256',
					},
				],
				internalType: 'struct ApeironApostleTicketMinting.TicketMintTypeGeneStruct',
				name: '_ticketMintTypeGeneStruct',
				type: 'tuple',
			},
		],
		name: 'updateTicketMintTypeInfo',
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
		name: 'userRequestedHashMap',
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
		name: 'vrfCoordinator',
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
		stateMutability: 'payable',
		type: 'receive',
	},
] as const
const APEIRON_APOSTLE_TICKET_MINTING: Contract<typeof abi> = {
	name: 'Apeiron Apostle Ticket Minting',
	address: '0xbc0aa2f6ddef4e2f8b87d2a829bb60a153b7ed5e',
	is_deprecated: false,
	created_at: 1702972150,
	abi: abi,
}
export default APEIRON_APOSTLE_TICKET_MINTING
