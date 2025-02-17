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
		inputs: [],
		name: 'InvalidSender',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'to',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'RONTransferFailed',
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
				name: '_address',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'bool',
				name: '_status',
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
				name: '_constantFee',
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
				name: '_gasCost',
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
				name: '_gasCost',
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
				name: 'keyHashList',
				type: 'bytes32[]',
			},
			{
				indexed: false,
				internalType: 'address[]',
				name: 'oracleAddrList',
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
				name: 'keyHashList',
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
				internalType: 'struct SLA.RandomRequest',
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
				name: '_treasury',
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
				indexed: true,
				internalType: 'bool',
				name: '_status',
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
				name: '_keyHashList',
				type: 'bytes32[]',
			},
			{
				internalType: 'address[]',
				name: '_oracleAddrList',
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
				name: '_callbackGasLimit',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_gasPrice',
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
				name: '_proof',
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
				internalType: 'struct SLA.RandomRequest',
				name: '_req',
				type: 'tuple',
			},
		],
		name: 'fulfillRandomSeed',
		outputs: [
			{
				internalType: 'uint256',
				name: '_paymentAmount',
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
				name: '_consumer',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_nonce',
				type: 'uint256',
			},
		],
		name: 'getRandomRequestHash',
		outputs: [
			{
				internalType: 'bytes32',
				name: '_hash',
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
				name: '_consumer',
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
				name: '_admin',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_gasToEstimateRandomFee',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_gasAfterPaymentCalculation',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: '_constantFee',
				type: 'uint256',
			},
			{
				internalType: 'address',
				name: '_treasury',
				type: 'address',
			},
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_address',
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
				name: '_keyHash',
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
		inputs: [
			{
				internalType: 'bytes32[]',
				name: '_keyHashList',
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
				name: '_reqHash',
				type: 'bytes32',
			},
		],
		name: 'requestFinalized',
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
				name: '_consumer',
				type: 'address',
			},
			{
				internalType: 'address',
				name: '_refundAddress',
				type: 'address',
			},
		],
		name: 'requestRandomSeed',
		outputs: [
			{
				internalType: 'bytes32',
				name: '_reqHash',
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
				name: '_constantFee',
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
				name: '_gas',
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
				name: '_gas',
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
				name: '_treasury',
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
		inputs: [
			{
				internalType: 'address',
				name: '_address',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: '_status',
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
				name: '_status',
				type: 'bool',
			},
		],
		name: 'whitelistAllAddresses',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'whitelisted',
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
const RONIN_VRF_COORDINATOR_1: Contract<typeof abi> = {
	name: 'Ronin VRF Coordinator',
	address: '0xf9f93977d8289f1f7c88a1ca4274f79c46ee9cfb',
	is_deprecated: false,
	created_at: 1692000351,
	abi: abi,
}
export default RONIN_VRF_COORDINATOR_1
