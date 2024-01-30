import { Contract } from '@/contract'
export const STORE_COMMISSION: Contract = {
	name: 'Store Commission',
	address: '0xb34364f33e660645432a6b9930786a357b8167be',
	abi: [
		{
			inputs: [],
			stateMutability: 'nonpayable',
			type: 'constructor',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'sig',
					type: 'bytes4',
				},
			],
			name: 'ErrEmptySchema',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'sig',
					type: 'bytes4',
				},
			],
			name: 'ErrInvalidArrayLength',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'bytes4',
					name: 'sig',
					type: 'bytes4',
				},
			],
			name: 'ErrInvalidTreasuryType',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrOverflowSumOfRatios',
			type: 'error',
		},
		{
			inputs: [],
			name: 'ErrWrongAllocationValues',
			type: 'error',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'uint256',
					name: 'merchantId',
					type: 'uint256',
				},
				{
					components: [
						{
							components: [
								{
									internalType: 'enum IStoreCommission.TreasuryType',
									name: 'treasuryType',
									type: 'uint8',
								},
								{
									internalType: 'uint256',
									name: 'ratio',
									type: 'uint256',
								},
							],
							internalType: 'struct IStoreCommission.CommissionInfo[]',
							name: 'commissions',
							type: 'tuple[]',
						},
						{
							internalType: 'uint256',
							name: 'sumRatios',
							type: 'uint256',
						},
					],
					indexed: false,
					internalType: 'struct IStoreCommission.CommissionSchema',
					name: 'commissionSchema',
					type: 'tuple',
				},
			],
			name: 'CommissionSchemaUpdated',
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
					internalType: 'enum IStoreCommission.TreasuryType[]',
					name: 'types',
					type: 'uint8[]',
				},
				{
					indexed: false,
					internalType: 'address payable[]',
					name: 'treasuries',
					type: 'address[]',
				},
			],
			name: 'TreasuriesUpdated',
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
					internalType: 'uint256',
					name: 'merchantId',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'price',
					type: 'uint256',
				},
				{
					internalType: 'address payable',
					name: 'treasury',
					type: 'address',
				},
			],
			name: 'getAllocations',
			outputs: [
				{
					components: [
						{
							internalType: 'enum IStoreCommission.TreasuryType',
							name: 'treasuryType',
							type: 'uint8',
						},
						{
							internalType: 'address payable',
							name: 'recipient',
							type: 'address',
						},
						{
							internalType: 'uint256',
							name: 'ratio',
							type: 'uint256',
						},
						{
							internalType: 'uint256',
							name: 'value',
							type: 'uint256',
						},
					],
					internalType: 'struct IStoreCommission.Allocation[]',
					name: 'allocs',
					type: 'tuple[]',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: 'merchantId',
					type: 'uint256',
				},
			],
			name: 'getCommissionSchema',
			outputs: [
				{
					components: [
						{
							components: [
								{
									internalType: 'enum IStoreCommission.TreasuryType',
									name: 'treasuryType',
									type: 'uint8',
								},
								{
									internalType: 'uint256',
									name: 'ratio',
									type: 'uint256',
								},
							],
							internalType: 'struct IStoreCommission.CommissionInfo[]',
							name: 'commissions',
							type: 'tuple[]',
						},
						{
							internalType: 'uint256',
							name: 'sumRatios',
							type: 'uint256',
						},
					],
					internalType: 'struct IStoreCommission.CommissionSchema',
					name: '',
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
					internalType: 'enum IStoreCommission.TreasuryType[]',
					name: 'types',
					type: 'uint8[]',
				},
			],
			name: 'getTreasuryAddresses',
			outputs: [
				{
					internalType: 'address[]',
					name: 'treasuries',
					type: 'address[]',
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
					internalType: 'enum IStoreCommission.TreasuryType[]',
					name: 'types',
					type: 'uint8[]',
				},
				{
					internalType: 'address payable[]',
					name: 'treasuries',
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
			inputs: [
				{
					internalType: 'uint256',
					name: 'merchantId',
					type: 'uint256',
				},
				{
					components: [
						{
							internalType: 'enum IStoreCommission.TreasuryType',
							name: 'treasuryType',
							type: 'uint8',
						},
						{
							internalType: 'uint256',
							name: 'ratio',
							type: 'uint256',
						},
					],
					internalType: 'struct IStoreCommission.CommissionInfo[]',
					name: 'info',
					type: 'tuple[]',
				},
			],
			name: 'setCommissionSchema',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'enum IStoreCommission.TreasuryType[]',
					name: 'types',
					type: 'uint8[]',
				},
				{
					internalType: 'address payable[]',
					name: 'treasuries',
					type: 'address[]',
				},
			],
			name: 'setTreasuryAddresses',
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
