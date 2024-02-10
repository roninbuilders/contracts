import { Contract } from '@/contract'
const LAND_DELEGATION: Contract = {
	name: 'Land Delegation',
	address: '0x0f514dbc18345e1109370d14c0562c92193f4281',
	is_deprecated: false,
	updated_at: 1705561070,
	abi: [
		{
			inputs: [],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			inputs: [],
			name: 'ErrAlreadySteward',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrAssigneeNonZeroBalance',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: 'from',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'landId',
					type: 'uint256',
				},
			],
			name: 'ErrCannotTransferLand',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'landId',
					type: 'uint256',
				},
			],
			name: 'ErrDelegationNotFound',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrExceedsMaxBatchSize',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'landId',
					type: 'uint256',
				},
			],
			name: 'ErrInDelegationDuration',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'landId',
					type: 'uint256',
				},
			],
			name: 'ErrInRevokeCooldown',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrInvalidConfig',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrInvalidDuration',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrInvalidInput',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'landId',
					type: 'uint256',
				},
			],
			name: 'ErrLandAlreadyInDelegation',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'landId',
					type: 'uint256',
				},
			],
			name: 'ErrLandNotFound',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrSelfDelegation',
			type: 'error',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'min',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'max',
					type: 'uint256',
				},
			],
			name: 'DelegateDurationRangeChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'landId',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'assignee',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'duration',
					type: 'uint256',
				},
			],
			name: 'Delegated',
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
					internalType: 'contract IERC721',
					name: 'newLandContract',
					type: 'address',
				},
			],
			name: 'LandContractChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'contract ILandStakingPool',
					name: 'newLandStaking',
					type: 'address',
				},
			],
			name: 'LandStakingContractChanged',
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
					indexed: true,
					internalType: 'uint256',
					name: 'landId',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
			],
			name: 'Retrieved',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: 'newDuration',
					type: 'uint256',
				},
			],
			name: 'RevokeCooldownDurationChanged',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'landId',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'owner',
					type: 'address',
				},
			],
			name: 'Revoked',
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
					internalType: 'address',
					name: 'account',
					type: 'address',
				},
			],
			name: 'Unpaused',
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
			inputs: [
				{
					internalType: 'uint256',
					name: '_landId',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: '_assignee',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_duration',
					type: 'uint256',
				},
			],
			name: 'delegateLand',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_landIds',
					type: 'uint256[]',
				},
				{
					internalType: 'address',
					name: '_assignee',
					type: 'address',
				},
				{
					internalType: 'uint256[]',
					name: '_durations',
					type: 'uint256[]',
				},
			],
			name: 'delegateLandBatch',
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
			],
			name: 'delegationAmountsMap',
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
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'delegationMap',
			outputs: [
				{
					internalType: 'uint256',
					name: 'expiryTimestamp',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'assignedTimestamp',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: 'assignee',
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
					name: '_owner',
					type: 'address',
				},
				{
					internalType: 'contract IERC721',
					name: '_landContract',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_revokeCooldownDuration',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_minDelegateDuration',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_maxDelegateDuration',
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
					internalType: 'contract ILandStakingPool',
					name: '_landStakingContract',
					type: 'address',
				},
			],
			name: 'initializeV2',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_assignee',
					type: 'address',
				},
			],
			name: 'isSteward',
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
			name: 'landContract',
			outputs: [
				{
					internalType: 'contract IERC721',
					name: '',
					type: 'address',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'maxDelegateDuration',
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
			name: 'minDelegateDuration',
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
			stateMutability: 'pure',
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
					name: '_landId',
					type: 'uint256',
				},
			],
			name: 'retrieveLand',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_landIds',
					type: 'uint256[]',
				},
			],
			name: 'retrieveLandBatch',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'revokeCooldownDuration',
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
					name: '_landId',
					type: 'uint256',
				},
			],
			name: 'revokeLand',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_landIds',
					type: 'uint256[]',
				},
			],
			name: 'revokeLandBatch',
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
			inputs: [
				{
					internalType: 'uint256',
					name: '_minDelegateDuration',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_maxDelegateDuration',
					type: 'uint256',
				},
			],
			name: 'setDelegateDurationRange',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract IERC721',
					name: '_landContract',
					type: 'address',
				},
			],
			name: 'setLandContract',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract ILandStakingPool',
					name: '_landStakingContract',
					type: 'address',
				},
			],
			name: 'setLandStakingContract',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_revokeCooldownDuration',
					type: 'uint256',
				},
			],
			name: 'setRevokeCooldownDuration',
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
			],
			name: 'stewardMap',
			outputs: [
				{
					internalType: 'bool',
					name: 'assigned',
					type: 'bool',
				},
				{
					internalType: 'address',
					name: 'landOwner',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'furthestExpiryTimestamp',
					type: 'uint256',
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
			name: 'unpause',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
export default LAND_DELEGATION
