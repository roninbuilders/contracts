import { Contract } from '@/contract'
const MYSTIC_GENE_VALIDATOR: Contract = {
	name: 'Mystic Gene Validator',
	address: '0x03cbdc84a8352735133b7989199c1b4d06fe2a77',
	is_deprecated: false,
	updated_at: 0,
	abi: [
		{
			inputs: [
				{
					internalType: 'contract IAxie',
					name: '_axieContract',
					type: 'address',
				},
			],
			payable: false,
			stateMutability: 'nonpayable',
			type: 'constructor',
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
			inputs: [
				{
					internalType: 'uint256',
					name: 'x',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: 'y',
					type: 'uint256',
				},
			],
			name: 'isMystic',
			outputs: [
				{
					internalType: 'bool',
					name: '',
					type: 'bool',
				},
			],
			payable: false,
			stateMutability: 'pure',
			type: 'function',
		},
		{
			constant: true,
			inputs: [
				{
					internalType: 'uint256',
					name: 'axieId',
					type: 'uint256',
				},
			],
			name: 'isMystic',
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
	],
}
export default MYSTIC_GENE_VALIDATOR
