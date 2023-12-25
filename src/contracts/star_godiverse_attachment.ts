import { Contract } from '@/contract'
export const STAR_GODIVERSE_ATTACHMENT: Contract = {
	name: 'Star Godiverse Attachment',
	address: '0x44ba9561b502ebdceb786bd4323e0be815cadf21',
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
					indexed: false,
					internalType: 'uint256',
					name: '_attachCooldown',
					type: 'uint256',
				},
			],
			name: 'AttachGodiverseCooldownUpdated',
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
					name: '_starAddress',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_starDataAddress',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_starOrbitalTrackDataAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_godiverseAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: '_blacklistAddress',
					type: 'address',
				},
			],
			name: 'ContractSettingupdated',
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
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'enum StarMeta.GodiverseSlot',
					name: '_slot',
					type: 'uint8',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_slotIndex',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_godiverseId',
					type: 'uint256',
				},
			],
			name: 'StarAttachedGodiverse',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'enum StarMeta.GodiverseSlot',
					name: '_slot',
					type: 'uint8',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: '_slotIndex',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: '_godiverseId',
					type: 'uint256',
				},
			],
			name: 'StarDetachedGodiverse',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_tokenReceipt',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_starReceiptAddress',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_godiverseReceiptAddress',
					type: 'address',
				},
			],
			name: 'TokenReceiptContractsUpdated',
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
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
				{
					internalType: 'enum StarMeta.GodiverseSlot[]',
					name: '_slotArray',
					type: 'uint8[]',
				},
				{
					internalType: 'uint256[]',
					name: '_slotIndexArray',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '_godiverseIdArray',
					type: 'uint256[]',
				},
				{
					internalType: 'bool[]',
					name: '_isAttachArray',
					type: 'bool[]',
				},
			],
			name: 'attachAndDetachGodiverses',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'blacklistContract',
			outputs: [
				{
					internalType: 'contract IBlacklist',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'godiverseContract',
			outputs: [
				{
					internalType: 'contract IApeironGodiverseCollection',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'godiverseReceiptAddress',
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
			inputs: [
				{
					internalType: 'address',
					name: 'operator',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{
					internalType: 'uint256[]',
					name: 'ids',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: 'values',
					type: 'uint256[]',
				},
				{
					internalType: 'bytes',
					name: 'data',
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
					name: 'operator',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'id',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'value',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: 'data',
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
					internalType: 'address',
					name: '_tokenReceipt',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_starReceiptAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_godiverseReceiptAddress',
					type: 'address',
				},
			],
			name: 'setupTokenReceiptContracts',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'starContract',
			outputs: [
				{
					internalType: 'contract IApeironStar',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'starDataContract',
			outputs: [
				{
					internalType: 'contract IApeironStarData',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'starOrbitalTrackDataContract',
			outputs: [
				{
					internalType: 'contract IApeironStarOrbitalTrackData',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'starReceiptAddress',
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
					internalType: 'address',
					name: '_oldOwnerAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_newOwnerAddress',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_starId',
					type: 'uint256',
				},
			],
			name: 'starTransferReceiptHandle',
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
					name: '_starAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_starDataAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_starOrbitalTrackDataAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_godiverseAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_blacklistAddress',
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
	],
}
