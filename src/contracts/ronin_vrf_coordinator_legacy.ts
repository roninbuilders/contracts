import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'CallerIsNotAConsumer',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrUnauthorizedConsumer',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InsufficientFee',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidArrayLength',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidGasPrice',
		type: 'error',
	},
	{
		inputs: [],
		name: 'InvalidProofSeed',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'InvalidRefundAddress',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'expectedSender',
				type: 'address',
			},
		],
		name: 'InvalidSender',
		type: 'error',
	},
	{
		inputs: [],
		name: 'Locked',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RandomRequestAlreadyFinalized',
		type: 'error',
	},
	{
		inputs: [],
		name: 'RequestHashNotFound',
		type: 'error',
	},
	{
		inputs: [],
		name: 'WrongRandomRequest',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'addr',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'bool',
				name: 'status',
				type: 'bool',
			},
		],
		name: 'AddressWhitelisted',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'constantFee',
				type: 'uint256',
			},
		],
		name: 'ConstantFeeUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'gasCost',
				type: 'uint256',
			},
		],
		name: 'GasAfterPaymentCalculationUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'gasCost',
				type: 'uint256',
			},
		],
		name: 'GasToEstimateRandomFeeUpdated',
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
				indexed: false,
				internalType: 'bytes32[]',
				name: 'keyHashes',
				type: 'bytes32[]',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'oracleAddrs',
				type: 'address[]',
			},
		],
		name: 'OraclesAdded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'bytes32[]',
				name: 'keyHashes',
				type: 'bytes32[]',
			},
		],
		name: 'OraclesRemoved',
		type: 'event',
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
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'Paused',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'requestHash',
				type: 'bytes32',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'randomSeed',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'requestValue',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'refundAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'paymentAmount',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'constantFee',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'callbackResult',
				type: 'bool',
			},
		],
		name: 'RandomSeedFulfilled',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'reqHash',
				type: 'bytes32',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'blockNumber',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'callbackGasLimit',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'gasPrice',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'gasFee',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'requester',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'consumer',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'refundAddr',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'constantFee',
						type: 'uint256',
					},
				],
				indexed: false,
				internalType: 'struct LibSLA.RandomRequest',
				name: 'request',
				type: 'tuple',
			},
		],
		name: 'RandomSeedRequested',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'treasury',
				type: 'address',
			},
		],
		name: 'TreasuryUpdated',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'account',
				type: 'address',
			},
		],
		name: 'Unpaused',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bool',
				name: 'status',
				type: 'bool',
			},
		],
		name: 'WhitelistAllChanged',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'bytes32[]',
				name: 'keyHashList',
				type: 'bytes32[]',
			},
			{
				internalType: 'address[]',
				name: 'oracleAddrList',
				type: 'address[]',
			},
		],
		name: 'addOracles',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'constantFee',
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
				name: 'callbackGasLimit',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'gasPrice',
				type: 'uint256',
			},
		],
		name: 'estimateRequestRandomFee',
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
				components: [
					{
						internalType: 'uint256[2]',
						name: 'pk',
						type: 'uint256[2]',
					},
					{
						internalType: 'uint256[2]',
						name: 'gamma',
						type: 'uint256[2]',
					},
					{
						internalType: 'uint256',
						name: 'c',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 's',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'seed',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'uWitness',
						type: 'address',
					},
					{
						internalType: 'uint256[2]',
						name: 'cGammaWitness',
						type: 'uint256[2]',
					},
					{
						internalType: 'uint256[2]',
						name: 'sHashWitness',
						type: 'uint256[2]',
					},
					{
						internalType: 'uint256',
						name: 'zInv',
						type: 'uint256',
					},
				],
				internalType: 'struct VRF.Proof',
				name: 'proof',
				type: 'tuple',
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'blockNumber',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'callbackGasLimit',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'gasPrice',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'gasFee',
						type: 'uint256',
					},
					{
						internalType: 'address',
						name: 'requester',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'consumer',
						type: 'address',
					},
					{
						internalType: 'address',
						name: 'refundAddr',
						type: 'address',
					},
					{
						internalType: 'uint256',
						name: 'nonce',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'constantFee',
						type: 'uint256',
					},
				],
				internalType: 'struct LibSLA.RandomRequest',
				name: 'req',
				type: 'tuple',
			},
		],
		name: 'fulfillRandomSeed',
		outputs: [
			{
				internalType: 'uint256',
				name: 'paymentAmount',
				type: 'uint256',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'gasAfterPaymentCalculation',
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
		name: 'gasToEstimateRandomFee',
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
				internalType: 'address',
				name: 'consumer',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
			},
		],
		name: 'getRandomRequestHash',
		outputs: [
			{
				internalType: 'bytes32',
				name: 'hash',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'consumer',
				type: 'address',
			},
		],
		name: 'getRandomRequestNonce',
		outputs: [
			{
				internalType: 'uint256',
				name: 'nonce',
				type: 'uint256',
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
				internalType: 'uint256',
				name: 'gasToEstimateRandomFee_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'gasAfterPaymentCalculation_',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'constantFee_',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'treasury_',
				type: 'address',
			},
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'initializeV2',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'isWhitelisted',
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
				internalType: 'uint256[2]',
				name: 'publicKey',
				type: 'uint256[2]',
			},
		],
		name: 'keyHash',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'keyHash',
				type: 'bytes32',
			},
		],
		name: 'oracleAddress',
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
		inputs: [],
		name: 'pause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'paused',
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
				internalType: 'bytes32[]',
				name: 'keyHashList',
				type: 'bytes32[]',
			},
		],
		name: 'removeOracles',
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
		inputs: [
			{
				internalType: 'bytes32',
				name: 'reqHash',
				type: 'bytes32',
			},
		],
		name: 'requestFinalized',
		outputs: [
			{
				internalType: 'bool',
				name: 'finalized',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'callbackGasLimit',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'gasPrice',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: 'consumer',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'refundAddress',
				type: 'address',
			},
		],
		name: 'requestRandomSeed',
		outputs: [
			{
				internalType: 'bytes32',
				name: 'reqHash',
				type: 'bytes32',
			},
		],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'constantFee_',
				type: 'uint256',
			},
		],
		name: 'setConstantFee',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'gas',
				type: 'uint256',
			},
		],
		name: 'setGasAfterPaymentCalculation',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'gas',
				type: 'uint256',
			},
		],
		name: 'setGasToEstimateRandomFee',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'treasury_',
				type: 'address',
			},
		],
		name: 'setTreasury',
		outputs: [],
		stateMutability: 'nonpayable',
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
	{
		inputs: [],
		name: 'treasury',
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
		name: 'unpause',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'addr',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'status',
				type: 'bool',
			},
		],
		name: 'whitelist',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bool',
				name: 'status',
				type: 'bool',
			},
		],
		name: 'whitelistAllAddresses',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'whitelistedAll',
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
] as const
const RONIN_VRF_COORDINATOR_LEGACY: Contract<typeof abi> = {
	name: 'Ronin VRF Coordinator Legacy',
	address: '0x309971c1bb60dea6d1d85f2424773fc4e2c92e93',
	is_deprecated: false,
	created_at: 1711104211,
	abi: abi,
}
export default RONIN_VRF_COORDINATOR_LEGACY
