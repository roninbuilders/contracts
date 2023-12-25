import { Contract } from '@/contract'
export const DEFAULT_CALLBACK_HANDLER: Contract = {
	name: 'Default Callback Handler',
	address: '0x1ac114c2099afaf5261731655dc6c306bfcd4dbd',
	abi: [
		{
			inputs: [],
			name: 'NAME',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [],
			name: 'VERSION',
			outputs: [
				{
					internalType: 'string',
					name: '',
					type: 'string',
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
					internalType: 'uint256[]',
					name: '',
					type: 'uint256[]',
				},
				{
					internalType: 'uint256[]',
					name: '',
					type: 'uint256[]',
				},
				{
					internalType: 'bytes',
					name: '',
					type: 'bytes',
				},
			],
			name: 'onERC1155BatchReceived',
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
			name: 'onERC1155Received',
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
				{
					internalType: 'bytes',
					name: '',
					type: 'bytes',
				},
			],
			name: 'tokensReceived',
			outputs: [],
			stateMutability: 'pure',
			type: 'function',
		},
	],
}
