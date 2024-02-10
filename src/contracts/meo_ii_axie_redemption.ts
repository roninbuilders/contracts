import { Contract } from '@/contract'
const MEO_II_AXIE_REDEMPTION: Contract = {
	name: 'Meo II Axie Redemption',
	address: '0xbcba374d3ae40a19e41c00331b66642945a773f2',
	is_deprecated: false,
	updated_at: 1707575181,
	abi: [
		{
			inputs: [
				{
					internalType: 'contract IAxie',
					name: '_axieContract',
					type: 'address',
				},
				{
					internalType: 'contract IERC20Burnable',
					name: '_axieEggCoin',
					type: 'address',
				},
			],
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
					name: '_oldAdmin',
					type: 'address',
				},
				{
					indexed: true,
					internalType: 'address',
					name: '_newAdmin',
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
					name: '_oldAdmin',
					type: 'address',
				},
			],
			name: 'AdminRemoved',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_operator',
					type: 'address',
				},
			],
			name: 'OperatorAdded',
			type: 'event',
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: 'address',
					name: '_operator',
					type: 'address',
				},
			],
			name: 'OperatorRemoved',
			type: 'event',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'address[]',
					name: '_addedOperators',
					type: 'address[]',
				},
			],
			name: 'addOperators',
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
			constant: true,
			inputs: [],
			name: 'axieContract',
			outputs: [
				{
					internalType: 'contract IAxie',
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
			name: 'axieEggCoin',
			outputs: [
				{
					internalType: 'contract IERC20Burnable',
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
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'bodies',
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
			constant: false,
			inputs: [
				{
					internalType: 'address',
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
			constant: true,
			inputs: [],
			name: 'coinRequiredPerAxie',
			outputs: [
				{
					internalType: 'uint8',
					name: '',
					type: 'uint8',
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
			name: 'operator',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
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
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'operators',
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
			inputs: [
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
			],
			name: 'partGeneDetails',
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
			constant: false,
			inputs: [
				{
					internalType: 'address',
					name: '_owner',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_seed',
					type: 'uint256',
				},
			],
			name: 'redeemAxie',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [],
			name: 'removeAdmin',
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
					name: '_removedOperators',
					type: 'address[]',
				},
			],
			name: 'removeOperators',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'contract IAxie',
					name: '_axieContract',
					type: 'address',
				},
			],
			name: 'setAxieContract',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'contract IERC20Burnable',
					name: '_axieEggCoin',
					type: 'address',
				},
			],
			name: 'setAxieEggCoin',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_bodies',
					type: 'uint256[]',
				},
			],
			name: 'setBodies',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'uint8',
					name: '_coinRequiredPerAxie',
					type: 'uint8',
				},
			],
			name: 'setCoinRequiredPerAxie',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			constant: false,
			inputs: [
				{
					internalType: 'uint256',
					name: '_partType',
					type: 'uint256',
				},
				{
					internalType: 'uint256[]',
					name: '_partGeneDetails',
					type: 'uint256[]',
				},
			],
			name: 'setPartGeneDetails',
			outputs: [],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
export default MEO_II_AXIE_REDEMPTION
