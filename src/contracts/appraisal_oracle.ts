import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		constant: true,
		inputs: [
			{
				internalType: 'address',
				name: '_address',
				type: 'address',
			},
		],
		name: '_isAppraiser',
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
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'newAppraiser',
				type: 'address',
			},
		],
		name: '_setAppraiser',
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
				name: 'newAdmin',
				type: 'address',
			},
		],
		name: 'setAdmin',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [
			{
				components: [
					{
						internalType: 'address[]',
						name: 'appraisalTokens',
						type: 'address[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalLengths',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalTokenIds',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256[]',
						name: 'appraisalValues',
						type: 'uint256[]',
					},
					{
						internalType: 'uint256',
						name: 'appraisalGoodUntil',
						type: 'uint256',
					},
					{
						internalType: 'bytes',
						name: 'signature',
						type: 'bytes',
					},
				],
				internalType: 'struct AppraisalStruct.Wire',
				name: 'wire',
				type: 'tuple',
			},
		],
		name: 'verifyAppraisals',
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
				internalType: 'bytes32',
				name: 'hash',
				type: 'bytes32',
			},
			{
				internalType: 'bytes',
				name: 'signature',
				type: 'bytes',
			},
		],
		name: 'verifySignature',
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
] as const
const APPRAISAL_ORACLE: Contract<typeof abi> = {
	name: 'Appraisal Oracle',
	address: '0x4f6da48bf7b065634995c5d177e6beb162a5602f',
	is_deprecated: false,
	updated_at: 1707758820,
	abi: abi,
}
export default APPRAISAL_ORACLE
