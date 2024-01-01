import { Contract } from '@/contract'
export const LAND_ITEM_LOGIC: Contract = {
	name: 'Land Item Logic',
	address: '0x8e5aaacbb46b970059bbedb1d455a8f220de1215',
	abi: [
		{
			anonymous: false,
			inputs: [],
			name: '',
			outputs: null,
			payable: false,
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internal_type: '',
					name: '_oldAdmin',
					type: 'address',
				},
				{
					indexed: true,
					internal_type: '',
					name: '_newAdmin',
					type: 'address',
				},
			],
			name: 'AdminChanged',
			outputs: null,
			payable: false,
			stateMutability: '',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internal_type: '',
					name: '_oldAdmin',
					type: 'address',
				},
			],
			name: 'AdminRemoved',
			outputs: null,
			payable: false,
			stateMutability: '',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internal_type: '',
					name: '_owner',
					type: 'address',
				},
				{
					indexed: true,
					internal_type: '',
					name: '_approved',
					type: 'address',
				},
				{
					indexed: true,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'Approval',
			outputs: null,
			payable: false,
			stateMutability: '',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internal_type: '',
					name: '_owner',
					type: 'address',
				},
				{
					indexed: true,
					internal_type: '',
					name: '_operator',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_approved',
					type: 'bool',
				},
			],
			name: 'ApprovalForAll',
			outputs: null,
			payable: false,
			stateMutability: '',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internal_type: '',
					name: '_minter',
					type: 'address',
				},
			],
			name: 'MinterAdded',
			outputs: null,
			payable: false,
			stateMutability: '',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internal_type: '',
					name: '_minter',
					type: 'address',
				},
			],
			name: 'MinterRemoved',
			outputs: null,
			payable: false,
			stateMutability: '',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
				{
					indexed: true,
					internal_type: '',
					name: '_nonce',
					type: 'uint256',
				},
			],
			name: 'NonceUpdated',
			outputs: null,
			payable: false,
			stateMutability: '',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [],
			name: 'Paused',
			outputs: null,
			payable: false,
			stateMutability: '',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_owner',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_operator',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_funcSig',
					type: 'bytes4',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_approved',
					type: 'bool',
				},
			],
			name: 'PermissionSet',
			outputs: null,
			payable: false,
			stateMutability: '',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_owner',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_operator',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_approved',
					type: 'bool',
				},
			],
			name: 'PermissionSetAll',
			outputs: null,
			payable: false,
			stateMutability: '',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internal_type: '',
					name: '_spender',
					type: 'address',
				},
			],
			name: 'SpenderUnwhitelisted',
			outputs: null,
			payable: false,
			stateMutability: '',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internal_type: '',
					name: '_spender',
					type: 'address',
				},
			],
			name: 'SpenderWhitelisted',
			outputs: null,
			payable: false,
			stateMutability: '',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_operator',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_approved',
					type: 'bool',
				},
			],
			name: 'TokenOperatorSet',
			outputs: null,
			payable: false,
			stateMutability: '',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_operator',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_funcSig',
					type: 'bytes4',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_approved',
					type: 'bool',
				},
			],
			name: 'TokenPermissionSet',
			outputs: null,
			payable: false,
			stateMutability: '',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internal_type: '',
					name: '_from',
					type: 'address',
				},
				{
					indexed: true,
					internal_type: '',
					name: '_to',
					type: 'address',
				},
				{
					indexed: true,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'Transfer',
			outputs: null,
			payable: false,
			stateMutability: '',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [],
			name: 'Unpaused',
			outputs: null,
			payable: false,
			stateMutability: '',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_addedMinters',
					type: 'address[]',
				},
			],
			name: 'addMinters',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_name',
					type: 'string',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_symbol',
					type: 'string',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_baseTokenURI',
					type: 'string',
				},
			],
			name: 'addTokenType',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_tokenType',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [],
			name: 'admin',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_to',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'approve',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_owner',
					type: 'address',
				},
			],
			name: 'balanceOf',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_balance',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [],
			name: 'baseTokenURI',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'string',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_recipients',
					type: 'address[]',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_tokenTypes',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_tokenIds',
					type: 'uint256[]',
				},
			],
			name: 'batchMint',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_newAdmin',
					type: 'address',
				},
			],
			name: 'changeAdmin',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_itemId',
					type: 'uint256',
				},
			],
			name: 'deconstructItemId',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_tokenType',
					type: 'uint256',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'pure',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_tokenType',
					type: 'uint256',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_name',
					type: 'string',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_symbol',
					type: 'string',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_baseTokenURI',
					type: 'string',
				},
			],
			name: 'editTokenMetadata',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'getApproved',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_tokenType',
					type: 'uint256',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'getItemId',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [],
			name: 'getTokenTypeCount',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_owner',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_operator',
					type: 'address',
				},
			],
			name: 'isApprovedForAll',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_approved',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_operator',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_funcSig',
					type: 'bytes4',
				},
			],
			name: 'isAuthorized',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_operator',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_funcSig',
					type: 'bytes4',
				},
			],
			name: 'isFunctionOperatorOfToken',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_addr',
					type: 'address',
				},
			],
			name: 'isMinter',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_owner',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_operator',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_funcSig',
					type: 'bytes4',
				},
			],
			name: 'isPermissionSet',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_owner',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_operator',
					type: 'address',
				},
			],
			name: 'isPermissionSetAll',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_operator',
					type: 'address',
				},
			],
			name: 'isTokenOperator',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_to',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_tokenType',
					type: 'uint256',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'mint',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_to',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_tokenType',
					type: 'uint256',
				},
			],
			name: 'mintNew',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'address',
				},
			],
			name: 'minter',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'uint256',
				},
			],
			name: 'minters',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [],
			name: 'name',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'string',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'uint256',
				},
			],
			name: 'nonces',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'bytes4',
				},
			],
			name: 'operatorPermission',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'ownerOf',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_owner',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [],
			name: 'pause',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [],
			name: 'paused',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [],
			name: 'removeAdmin',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_removedMinters',
					type: 'address[]',
				},
			],
			name: 'removeMinters',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_from',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_to',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'safeTransferFrom',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_from',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_to',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_data',
					type: 'bytes',
				},
			],
			name: 'safeTransferFrom',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_operator',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_approved',
					type: 'bool',
				},
			],
			name: 'setAllPermissionFor',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_operator',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_approved',
					type: 'bool',
				},
			],
			name: 'setApprovalForAll',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_baseTokenURI',
					type: 'string',
				},
			],
			name: 'setBaseTokenURI',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_operator',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_funcSig',
					type: 'bytes4',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_approved',
					type: 'bool',
				},
			],
			name: 'setFunctionOperatorForToken',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_operator',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_funcSig',
					type: 'bytes4',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_approved',
					type: 'bool',
				},
			],
			name: 'setPermissionFor',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_operator',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_approved',
					type: 'bool',
				},
			],
			name: 'setTokenOperator',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'stateOf',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'bytes',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_interfaceId',
					type: 'bytes4',
				},
			],
			name: 'supportsInterface',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_supported',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [],
			name: 'symbol',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'string',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'uint256',
				},
			],
			name: 'tokenBalance',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_index',
					type: 'uint256',
				},
			],
			name: 'tokenByIndex',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'uint256',
				},
			],
			name: 'tokenMetadata',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: 'name',
					type: 'string',
				},
				{
					indexed: false,
					internal_type: '',
					name: 'symbol',
					type: 'string',
				},
				{
					indexed: false,
					internal_type: '',
					name: 'baseTokenURI',
					type: 'string',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_owner',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_index',
					type: 'uint256',
				},
			],
			name: 'tokenOfOwnerByIndex',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'uint256',
				},
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'bytes4',
				},
			],
			name: 'tokenPermission',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'uint256',
				},
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'uint256',
				},
			],
			name: 'tokenPermissionInfos',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: 'operator',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: 'funcSig',
					type: 'bytes4',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'tokenURI',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_uri',
					type: 'string',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [],
			name: 'totalSupply',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_supply',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_from',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_to',
					type: 'address',
				},
				{
					indexed: false,
					internal_type: '',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'transferFrom',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [],
			name: 'unpause',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_spender',
					type: 'address',
				},
			],
			name: 'unwhitelist',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '_spender',
					type: 'address',
				},
			],
			name: 'whitelist',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			anonymous: false,
			constant: true,
			inputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'address',
				},
			],
			name: 'whitelisted',
			outputs: [
				{
					indexed: false,
					internal_type: '',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
	],
}