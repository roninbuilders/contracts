import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'payable',
		type: 'constructor',
	},
	{
		inputs: [
			{
				internalType: 'enum ContractType',
				name: 'contractType',
				type: 'uint8',
			},
		],
		name: 'ErrContractTypeNotFound',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
			{
				internalType: 'uint256',
				name: 'currentBalance',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'sendAmount',
				type: 'uint256',
			},
		],
		name: 'ErrInsufficientBalance',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
		],
		name: 'ErrLengthMismatch',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'currentPeriod',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'latestRewardedPeriod',
				type: 'uint256',
			},
		],
		name: 'ErrPeriodAlreadyRewarded',
		type: 'error',
	},
	{
		inputs: [],
		name: 'ErrPeriodCountIsZero',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'currentPeriod',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'latestRewardedPeriod',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'periodCount',
				type: 'uint256',
			},
		],
		name: 'ErrPeriodNotHappen',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
		],
		name: 'ErrRecipientRevert',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
			{
				internalType: 'enum RoleAccess',
				name: 'expectedRole',
				type: 'uint8',
			},
		],
		name: 'ErrUnauthorized',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
		],
		name: 'ErrUnauthorizedCall',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'bytes4',
				name: 'msgSig',
				type: 'bytes4',
			},
			{
				internalType: 'enum ContractType',
				name: 'expectedContractType',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: 'actual',
				type: 'address',
			},
		],
		name: 'ErrUnexpectedInternalCall',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'ErrZeroCodeContract',
		type: 'error',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'BridgeRewardScatterFailed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'BridgeRewardScattered',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'period',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'operator',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'BridgeRewardSlashed',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'requestingPeriod',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'latestPeriod',
				type: 'uint256',
			},
		],
		name: 'BridgeRewardSyncTooFarPeriod',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [],
		name: 'BridgeTrackingIncorrectlyResponded',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'enum ContractType',
				name: 'contractType',
				type: 'uint8',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'ContractUpdated',
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
				indexed: true,
				internalType: 'address',
				name: 'from',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'balanceBefore',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'SafeReceived',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'newRewardPerPeriod',
				type: 'uint256',
			},
		],
		name: 'UpdatedRewardPerPeriod',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'currentPeriod',
				type: 'uint256',
			},
		],
		name: 'execSyncRewardAuto',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum ContractType',
				name: 'contractType',
				type: 'uint8',
			},
		],
		name: 'getContract',
		outputs: [
			{
				internalType: 'address',
				name: 'contract_',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getLatestRewardedPeriod',
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
				name: 'operator',
				type: 'address',
			},
		],
		name: 'getRewardInfo',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'claimed',
						type: 'uint256',
					},
					{
						internalType: 'uint256',
						name: 'slashed',
						type: 'uint256',
					},
				],
				internalType: 'struct IBridgeRewardEvents.BridgeRewardInfo',
				name: 'rewardInfo',
				type: 'tuple',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getRewardPerPeriod',
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
		name: 'getTotalRewardScattered',
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
		name: 'getTotalRewardToppedUp',
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
				name: 'bridgeManagerContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'bridgeTrackingContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'bridgeSlashContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'validatorSetContract',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'dposGA',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'rewardPerPeriod',
				type: 'uint256',
			},
		],
		name: 'initialize',
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'initializeREP2',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'initializeV2',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'receiveRON',
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum ContractType',
				name: 'contractType',
				type: 'uint8',
			},
			{
				internalType: 'address',
				name: 'addr',
				type: 'address',
			},
		],
		name: 'setContract',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'rewardPerPeriod',
				type: 'uint256',
			},
		],
		name: 'setRewardPerPeriod',
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'periodCount',
				type: 'uint256',
			},
		],
		name: 'syncRewardManual',
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const BRIDGE_REWARD: Contract<typeof abi> = {
	name: 'Bridge Reward',
	address: '0x8048b12511d9be6e4e094089b12f54923c4e2f83',
	is_deprecated: false,
	created_at: 1722410264,
	abi: abi,
}
export default BRIDGE_REWARD
