import { Contract } from '@/contract'
export const RNS_OPERATION: Contract = {
	name: 'RNS Operation',
	address: '0xd9b3cc879113c7abaa7694d25801bffd8fae0f27',
	abi: [
		{
			inputs: [
				{
					internalType: 'contract INSUnified',
					name: 'rns_',
					type: 'address',
				},
				{
					internalType: 'address',
					name: 'resolver_',
					type: 'address',
				},
				{
					internalType: 'contract INSAuction',
					name: 'auction_',
					type: 'address',
				},
				{
					internalType: 'contract INSDomainPrice',
					name: 'domainPrice_',
					type: 'address',
				},
			],
			stateMutability: 'nonpayable',
			type: 'constructor',
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
			name: 'auction',
			outputs: [
				{
					internalType: 'contract INSAuction',
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
					internalType: 'address[]',
					name: 'tos',
					type: 'address[]',
				},
				{
					internalType: 'string[]',
					name: 'labels',
					type: 'string[]',
				},
				{
					internalType: 'uint64',
					name: 'duration',
					type: 'uint64',
				},
			],
			name: 'bulkMint',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'string[]',
					name: 'labels',
					type: 'string[]',
				},
				{
					internalType: 'uint256[]',
					name: 'yearlyUSDPrices',
					type: 'uint256[]',
				},
			],
			name: 'bulkOverrideRenewalFees',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'string[]',
					name: 'labels',
					type: 'string[]',
				},
				{
					internalType: 'bool',
					name: 'shouldProtect',
					type: 'bool',
				},
			],
			name: 'bulkSetProtected',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [],
			name: 'domainPrice',
			outputs: [
				{
					internalType: 'contract INSDomainPrice',
					name: '',
					type: 'address',
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
					internalType: 'address[]',
					name: 'tos',
					type: 'address[]',
				},
				{
					internalType: 'string[]',
					name: 'labels',
					type: 'string[]',
				},
				{
					internalType: 'bool',
					name: 'allowFailure',
					type: 'bool',
				},
			],
			name: 'reclaimUnbiddedNames',
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
			inputs: [],
			name: 'resolver',
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
			name: 'rns',
			outputs: [
				{
					internalType: 'contract INSUnified',
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
					internalType: 'string[]',
					name: 'labels',
					type: 'string[]',
				},
			],
			name: 'toIds',
			outputs: [
				{
					internalType: 'uint256[]',
					name: 'ids',
					type: 'uint256[]',
				},
			],
			stateMutability: 'pure',
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
	],
}
