import { Contract } from '@/contract'
const CONSUMER_TEST: Contract = {
	name: 'Consumer Test',
	address: '0x35dc49cafab1e2e46723ad5e0a82e71cff73558e',
	is_deprecated: false,
	updated_at: 1707575179,
	abi: [
		{
			inputs: [
				{
					internalType: 'address',
					name: '_vrfCoordinator',
					type: 'address',
				},
			],
			stateMutability: 'payable',
			type: 'constructor',
		},
		{
			inputs: [],
			name: 'OnlyCoordinatorCanFulfill',
			type: 'error',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '_callbackGaslimit',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_gasPrice',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: '_refundAddr',
					type: 'address',
				},
				{
					internalType: 'uint256[]',
					name: '_tokenIds',
					type: 'uint256[]',
				},
			],
			name: 'bulkTestRequestRandomness',
			outputs: [],
			stateMutability: 'payable',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_tokenIds',
					type: 'uint256[]',
				},
			],
			name: 'getManyOracleAddressOf',
			outputs: [
				{
					internalType: 'address[]',
					name: '_oracleAddresses',
					type: 'address[]',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256[]',
					name: '_tokenIds',
					type: 'uint256[]',
				},
			],
			name: 'getManyRandomResults',
			outputs: [
				{
					internalType: 'uint256[]',
					name: '_randomResults',
					type: 'uint256[]',
				},
			],
			stateMutability: 'view',
			type: 'function',
		},
		{
			inputs: [
				{
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'oracleAddr',
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
					name: '',
					type: 'bytes32',
				},
			],
			name: 'randomHashOfToken',
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
					internalType: 'uint256',
					name: '',
					type: 'uint256',
				},
			],
			name: 'randomResult',
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
					name: '_reqHash',
					type: 'bytes32',
				},
				{
					internalType: 'uint256',
					name: '_randomSeed',
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
					internalType: 'uint256',
					name: '_callbackGasLimit',
					type: 'uint256',
				},
				{
					internalType: 'uint256',
					name: '_gasPrice',
					type: 'uint256',
				},
				{
					internalType: 'address',
					name: '_refundAddr',
					type: 'address',
				},
				{
					internalType: 'uint256',
					name: '_tokenId',
					type: 'uint256',
				},
			],
			name: 'testRequestRandomnessWithNotConsumerAddress',
			outputs: [],
			stateMutability: 'payable',
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
export default CONSUMER_TEST
