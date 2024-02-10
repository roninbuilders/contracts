import { Contract } from '@/contract'
const PRESAIL_DROPLET: Contract = {
	name: 'Presail Droplet',
	address: '0x4745e6b8d030b1b65964242b0005ed63c52bf333',
	is_deprecated: false,
	updated_at: 1707575173,
	abi: [
		{
			inputs: [
				{
					internalType: 'address payable[]',
					name: 'recipients',
					type: 'address[]',
				},
				{
					internalType: 'uint256[]',
					name: 'values',
					type: 'uint256[]',
				},
			],
			name: 'presailDistribute',
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract IERC20',
					name: 'token',
					type: 'address',
				},
				{
					internalType: 'address[]',
					name: 'recipients',
					type: 'address[]',
				},
				{
					internalType: 'uint256[]',
					name: 'values',
					type: 'uint256[]',
				},
			],
			name: 'presailDistributeToken',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'contract IERC20',
					name: 'token',
					type: 'address',
				},
				{
					internalType: 'address[]',
					name: 'recipients',
					type: 'address[]',
				},
				{
					internalType: 'uint256[]',
					name: 'values',
					type: 'uint256[]',
				},
			],
			name: 'presailDistributeTokenSimple',
			outputs: [],
			stateMutability: 'nonpayable',
			type: 'function',
		},
	],
}
export default PRESAIL_DROPLET
