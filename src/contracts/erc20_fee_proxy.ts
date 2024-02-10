import { Contract } from '@/contract'
const ERC20_FEE_PROXY: Contract = {
	name: 'ERC20 Fee Proxy',
	address: '0xae23992483feda6e718a808ce824f6864f13b64b',
	is_deprecated: false,
	updated_at: 1707575178,
	abi: [
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: 'address',
					name: 'tokenAddress',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'to',
					type: 'address',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'amount',
					type: 'uint256',
				},
				{
					indexed: true,
					internalType: 'bytes',
					name: 'paymentReference',
					type: 'bytes',
				},
				{
					indexed: false,
					internalType: 'uint256',
					name: 'feeAmount',
					type: 'uint256',
				},
				{
					indexed: false,
					internalType: 'address',
					name: 'feeAddress',
					type: 'address',
				},
			],
			name: 'TransferWithReferenceAndFee',
			type: 'event',
		},
		{
			inputs: [
				{
					internalType: 'address',
					name: '_tokenAddress',
					type: 'address',
				},
				{
					internalType: 'address',
					name: '_to',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_amount',
					type: 'uint256',
				},
				{
					internalType: 'bytes',
					name: '_paymentReference',
					type: 'bytes',
				},
				{
					internalType: 'uint256',
					name: '_feeAmount',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: '_feeAddress',
					type: 'address',
				},
			],
			name: 'transferFromWithReferenceAndFee',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			stateMutability: 'payable',
			type: 'receive',
		},
	],
}
export default ERC20_FEE_PROXY
