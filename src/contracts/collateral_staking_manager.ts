import { Contract } from '@/contract'
const abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'bool',
				name: 'newValue',
				type: 'bool',
			},
		],
		name: 'MoveCollateralPausedChanged',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'newAdmin',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'previousAdmin',
				type: 'address',
			},
		],
		name: 'NewAdmin',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
		],
		name: 'NewCollateralStakingMediator',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'previousImpl',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newImpl',
				type: 'address',
			},
		],
		name: 'NewCollateralStakingMediatorImplementation',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'newRedelegatingManager',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'previousRedelegatingManager',
				type: 'address',
			},
		],
		name: 'NewRedelegatingManager',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'newRestakingManager',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'previousRestakingManager',
				type: 'address',
			},
		],
		name: 'NewRestakingManager',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'newRestakingPool',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'previousRestakingPool',
				type: 'address',
			},
		],
		name: 'NewRestakingPool',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'newRestakingUnderlying',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'previousRestakingUnderlying',
				type: 'address',
			},
		],
		name: 'NewRestakingUnderlying',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'newPercentage',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'previousPercentage',
				type: 'uint256',
			},
		],
		name: 'NewRewardsRoyaltiesPercentage',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'newRoninStaking',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'previousRoninStaking',
				type: 'address',
			},
		],
		name: 'NewRoninStaking',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'newRoninValidatorSet',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'previousRoninValidatorSet',
				type: 'address',
			},
		],
		name: 'NewRoninValidatorSet',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'newReceiver',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'previousReceiver',
				type: 'address',
			},
		],
		name: 'NewRoyaltiesReceiver',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'cErcStakingMarket',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'stakingPool',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'underlyingToken',
				type: 'address',
			},
		],
		name: 'NewStakingMarket',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'validator',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'bool',
				name: 'supported',
				type: 'bool',
			},
		],
		name: 'ValidatorSupported',
		type: 'event',
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
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'cErcStakingMarket',
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
		inputs: [],
		name: 'collateralStakingMediatorImplementation',
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
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'decreaseTotalDelegatingAmount',
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
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'decreaseTotalRestakingAmount',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'consensusAddr',
				type: 'address',
			},
		],
		name: 'delegateInitialUncollateralizedRon',
		outputs: [],
		payable: true,
		stateMutability: 'payable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'feeDenominator',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
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
				internalType: 'address',
				name: 'user',
				type: 'address',
			},
		],
		name: 'getCollateralStakingMediator',
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
				internalType: 'address payable',
				name: 'user',
				type: 'address',
			},
		],
		name: 'getOrCreateCollateralStakingMediator',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'implementation',
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
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'increaseTotalAccruedRewards',
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
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'increaseTotalAccruedRewardsRon',
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
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'increaseTotalDelegatingAmount',
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
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'increaseTotalRestakingAmount',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address payable',
				name: 'royaltiesReceiver_',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'collateralStakingMediatorImplementation_',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: 'rewardsRoyaltiesPercentage_',
				type: 'uint256',
			},
		],
		name: 'initialize',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'isCollateralStakingManager',
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
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: 'marketPoolWire',
		outputs: [
			{
				internalType: 'address',
				name: 'stakingPool',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'underlyingToken',
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
		name: 'moveUncollateralizedPaused',
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
		inputs: [],
		name: 'redelegatingManager',
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
		name: 'restakingManager',
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
		name: 'restakingPoolErc20',
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
		name: 'restakingUnderlying',
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
		name: 'rewardsRoyaltiesPercentage',
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
		constant: true,
		inputs: [],
		name: 'roninStaking',
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
		name: 'roninValidatorSet',
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
		name: 'royaltiesReceiver',
		outputs: [
			{
				internalType: 'address payable',
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
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'newImplementation',
				type: 'address',
			},
		],
		name: 'setCollateralStakingMediatorImplementation',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'bool',
				name: 'value',
				type: 'bool',
			},
		],
		name: 'setMoveUncollateralizedPaused',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'newRedelegatingManager',
				type: 'address',
			},
		],
		name: 'setRedelegatingManager',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'newManager',
				type: 'address',
			},
		],
		name: 'setRestakingManager',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'restakingPool',
				type: 'address',
			},
		],
		name: 'setRestakingPoolErc20',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'underlying',
				type: 'address',
			},
		],
		name: 'setRestakingUnderlying',
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
				name: 'newPercentage',
				type: 'uint256',
			},
		],
		name: 'setRewardRoyaltiesPercentage',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'newRoninStaking',
				type: 'address',
			},
		],
		name: 'setRoninStaking',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'newRoninValidatorSet',
				type: 'address',
			},
		],
		name: 'setRoninValidatorSet',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address payable',
				name: 'newReceiver',
				type: 'address',
			},
		],
		name: 'setRoyaltiesReceiver',
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
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'stakeInitialUncollateralizedErc20',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'market',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'stakingPool',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'underlyingToken',
				type: 'address',
			},
			{
				internalType: 'bool',
				name: 'isErc721',
				type: 'bool',
			},
			{
				internalType: 'bool',
				name: 'isErc20',
				type: 'bool',
			},
		],
		name: 'supportCErcStakingMarket',
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
				name: 'validators',
				type: 'address[]',
			},
			{
				internalType: 'bool[]',
				name: 'supported',
				type: 'bool[]',
			},
		],
		name: 'supportValidators',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
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
		name: 'supportedValidators',
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
		inputs: [],
		name: 'totalAccruedRewards',
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
		constant: true,
		inputs: [],
		name: 'totalAccruedRewardsRon',
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
		constant: true,
		inputs: [],
		name: 'totalDelegatingAmountRon',
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
		constant: true,
		inputs: [],
		name: 'totalRestakingAmount',
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
] as const
const COLLATERAL_STAKING_MANAGER: Contract<typeof abi> = {
	name: 'Collateral Staking Manager',
	address: '0x8ccd796547fcdcc96a9f464dfc02a20d3189c75a',
	is_deprecated: false,
	created_at: 1689704978,
	abi: abi,
}
export default COLLATERAL_STAKING_MANAGER
