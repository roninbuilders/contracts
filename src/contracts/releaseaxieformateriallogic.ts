import { Contract } from '@/contract'
export const RELEASEAXIEFORMATERIALLOGIC: Contract = {
	name: 'ReleaseAxieForMaterialLogic',
	address: '0x9dcba64a0bf08b90d271f582e5dd84ccb79be977',
	abi: [
		{
			inputs: [],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'floor',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'ceiling',
					type: 'uint256',
				},
			],
			name: 'ErrCeilingNotHigherThanFloor',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'estimatedRandomizationFee',
					type: 'uint256',
				},
			],
			name: 'ErrInsufficientUpfrontFee',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'axieId',
					type: 'uint256',
				},
			],
			name: 'ErrInvalidAxieStage',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'msgSig',
					type: 'bytes4',
				},
			],
			name: 'ErrInvalidInput',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrInvalidPercentValue',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrNotAuthorized',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'bytes32',
					name: 'reqHash',
					type: 'bytes32',
				},
			],
			name: 'ErrReleaseRequestNotFound',
			type: 'error',
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
					name: 'axieContractAddress',
					type: 'address',
				},
			],
			name: 'AxieContractAddressUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'user',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'axieId',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'uint256',
					name: 'seed',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'totalMaterial',
					type: 'uint256',
				},
			],
			name: 'AxieReleaseForMaterialFulfilled',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'user',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'bytes32',
					name: 'reqHash',
					type: 'bytes32',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: 'axieIds',
					type: 'uint256[]',
				},
			],
			name: 'AxieReleaseForMaterialRequested',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'user',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256[]',
					name: 'axieIds',
					type: 'uint256[]',
				},
			],
			name: 'AxiesReleased',
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
					internalType: 'address',
					name: 'materialContractAddress',
					type: 'address',
				},
			],
			name: 'MaterialContractAddressUpdated',
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
					internalType: 'uint256[]',
					name: 'ranges',
					type: 'uint256[]',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'levelAggregator',
					type: 'uint256',
				},
			],
			name: 'QtyBonusPercentByLevelGroupsUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					components: [
						{
							internalType: 'uint128',
							name: 'floor',
							type: 'uint128',
						},
						{
							internalType: 'uint128',
							name: 'ceiling',
							type: 'uint128',
						},
					],
					indexed: false,
					internalType: 'struct QtyRange[]',
					name: 'ranges',
					type: 'tuple[]',
				},
			],
			name: 'QtyByBreedCountsUpdated',
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
					name: 'treasuryAddress',
					type: 'address',
				},
			],
			name: 'TreasuryAddressUpdated',
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
					indexed: true,
					internalType: 'address',
					name: 'newCoordinator',
					type: 'address',
				},
			],
			name: 'VRFCoordinatorAddressUpdated',
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
			name: 'axieContract',
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
					name: 'axieNum',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'gasPrice',
					type: 'uint256',
				},
			],
			name: 'estimateFee',
			outputs: [
				{
					internalType: 'uint256',
					name: 'estimatedFee',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'callbackGasLimit',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getMaxGasOnReleaseOneAxie',
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
			name: 'getQtyBonusPercentByLevelGroups',
			outputs: [
				{
					internalType: 'uint256[]',
					name: 'percents',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256',
					name: 'levelAggregator',
					type: 'uint256',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'getQtyByBreedCounts',
			outputs: [
				{
					components: [
						{
							internalType: 'uint128',
							name: 'floor',
							type: 'uint128',
						},
						{
							internalType: 'uint128',
							name: 'ceiling',
							type: 'uint128',
						},
					],
					internalType: 'struct QtyRange[]',
					name: 'ranges',
					type: 'tuple[]',
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
					name: 'owner_',
					type: 'address',
				},
				{
					internalType: 'address[]',
					name: 'operators',
					type: 'address[]',
				},
				{
					internalType: 'address[4]',
					name: 'packedAddrs',
					type: 'address[4]',
				},
				{
					internalType: 'uint256',
					name: 'maxGasOnReleaseOneAxie',
					type: 'uint256',
				},
				{
					components: [
						{
							internalType: 'uint128',
							name: 'floor',
							type: 'uint128',
						},
						{
							internalType: 'uint128',
							name: 'ceiling',
							type: 'uint128',
						},
					],
					internalType: 'struct QtyRange[]',
					name: 'qtyByBreedCounts',
					type: 'tuple[]',
				},
				{
					internalType: 'uint16',
					name: 'levelAggregator',
					type: 'uint16',
				},
				{
					internalType: 'uint256[]',
					name: 'qtyBonusByLevels',
					type: 'uint256[]',
				},
			],
			name: 'initialize',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'materialContract',
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
					name: 'reqHash',
					type: 'bytes32',
				},
				{
					internalType: 'uint256',
					name: 'randomSeed',
					type: 'uint256',
				},
			],
			name: 'rawFulfillRandomSeed',
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
			name: 'renounceRole',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256[]',
					name: 'axieIds',
					type: 'uint256[]',
				},
			],
			name: 'requestReleaseAxie',
			outputs: [
				{
					internalType: 'bytes32',
					name: 'reqHash',
					type: 'bytes32',
				},
			],
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
			name: 'revokeRole',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract IAxie',
					name: 'addr',
					type: 'address',
				},
			],
			name: 'setAxieContract',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract IMaterial',
					name: 'addr',
					type: 'address',
				},
			],
			name: 'setMaterialContract',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'maxGas',
					type: 'uint256',
				},
			],
			name: 'setMaxGasOnReleaseOneAxie',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint16',
					name: 'levelAggregator',
					type: 'uint16',
				},
				{
					internalType: 'uint256[]',
					name: 'percents',
					type: 'uint256[]',
				},
			],
			name: 'setQtyBonusPercentByLevelGroups',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					components: [
						{
							internalType: 'uint128',
							name: 'floor',
							type: 'uint128',
						},
						{
							internalType: 'uint128',
							name: 'ceiling',
							type: 'uint128',
						},
					],
					internalType: 'struct QtyRange[]',
					name: 'ranges',
					type: 'tuple[]',
				},
			],
			name: 'setQtyByBreedCounts',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'address',
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
					internalType: 'address',
					name: 'vrfCoordinator_',
					type: 'address',
				},
			],
			name: 'setVRFCoordinator',
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
	],
}
