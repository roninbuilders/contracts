import { Contract } from '@/contract'
const COMP_COMPTROLLER: Contract = {
	name: 'Comp Comptroller',
	address: '0xa7c5a879a1c6241eb74aef98445a1ffda4894db0',
	is_deprecated: false,
	updated_at: 1707575170,
	abi: [
		{
			inputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'constructor',
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
					internalType: 'uint256',
					name: 'oldCompAccrued',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'newCompAccrued',
					type: 'uint256',
				},
			],
			name: 'CompAccruedAdjusted',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'contract CTokenInterface',
					name: 'cToken',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'newSpeed',
					type: 'uint256',
				},
			],
			name: 'CompBorrowSpeedUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'recipient',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: 'CompGranted',
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
					internalType: 'uint256',
					name: 'oldCompReceivable',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'newCompReceivable',
					type: 'uint256',
				},
			],
			name: 'CompReceivableUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'contract CTokenInterface',
					name: 'cToken',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'newSpeed',
					type: 'uint256',
				},
			],
			name: 'CompSupplySpeedUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: 'contributor',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'newSpeed',
					type: 'uint256',
				},
			],
			name: 'ContributorCompSpeedUpdated',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'contract CTokenInterface',
					name: 'cToken',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'borrower',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'compDelta',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'compBorrowIndex',
					type: 'uint256',
				},
			],
			name: 'DistributedBorrowerComp',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'contract CTokenInterface',
					name: 'cToken',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: 'supplier',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'compDelta',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'compSupplyIndex',
					type: 'uint256',
				},
			],
			name: 'DistributedSupplierComp',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'uint256',
					name: 'error',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'info',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'detail',
					type: 'uint256',
				},
			],
			name: 'Failure',
			type: 'event',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'contract CompUnitroller',
					name: 'compUnitroller',
					type: 'address',
				},
			],
			name: '_become',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: 'recipient',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
			],
			name: '_grantComp',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'contract CTokenInterface[]',
					name: 'cTokens',
					type: 'address[]',
				},
				{
					internalType: 'uint256[]',
					name: 'supplySpeeds',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: 'borrowSpeeds',
					type: 'uint256[]',
				},
			],
			name: '_setCompSpeeds',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'contract ComptrollerInterface',
					name: 'newComptroller',
					type: 'address',
				},
			],
			name: '_setComptroller',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: 'contributor',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: 'compSpeed',
					type: 'uint256',
				},
			],
			name: '_setContributorCompSpeed',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'admin',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: 'holder',
					type: 'address',
				},
				{
					internalType: 'contract CTokenInterface[]',
					name: 'cTokens',
					type: 'address[]',
				},
			],
			name: 'claimComp',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address[]',
					name: 'holders',
					type: 'address[]',
				},
				{
					internalType: 'contract CTokenInterface[]',
					name: 'cTokens',
					type: 'address[]',
				},
				{
					internalType: 'bool',
					name: 'borrowers',
					type: 'bool',
				},
				{
					internalType: 'bool',
					name: 'suppliers',
					type: 'bool',
				},
			],
			name: 'claimComp',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: 'holder',
					type: 'address',
				},
			],
			name: 'claimComp',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'compAccrued',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'compBorrowSpeeds',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'compBorrowState',
			outputs: [
				{
					internalType: 'uint224',
					name: 'index',
					type: 'uint224',
				},
				{
					internalType: 'uint32',
					name: 'block',
					type: 'uint32',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
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
			name: 'compBorrowerIndex',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'compContributorSpeeds',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'compInitialIndex',
			outputs: [
				{
					internalType: 'uint224',
					name: '',
					type: 'uint224',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'compRate',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
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
			name: 'compSupplierIndex',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'compSupplySpeeds',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'compSupplyState',
			outputs: [
				{
					internalType: 'uint224',
					name: 'index',
					type: 'uint224',
				},
				{
					internalType: 'uint32',
					name: 'block',
					type: 'uint32',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'comptroller',
			outputs: [
				{
					internalType: 'contract ComptrollerInterface',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'comptrollerImplementation',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: 'cToken',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'borrower',
					type: 'address',
				},
			],
			name: 'distributeBorrowerComp',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: 'cToken',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'supplier',
					type: 'address',
				},
			],
			name: 'distributeSupplierComp',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'getBlockNumber',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'getCompAddress',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: 'cToken',
					type: 'address',
				},
			],
			name: 'initializeMarket',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			name: 'lastContributorBlock',
			outputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'pendingAdmin',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: true,
			inputs: [],
			name: 'pendingComptrollerImplementation',
			outputs: [
				{
					internalType: 'address',
					name: '',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'view',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: 'cToken',
					type: 'address',
				},
			],
			name: 'updateCompBorrowIndex',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: 'cToken',
					type: 'address',
				},
			],
			name: 'updateCompSupplyIndex',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: 'contributor',
					type: 'address',
				},
			],
			name: 'updateContributorRewards',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
export default COMP_COMPTROLLER
