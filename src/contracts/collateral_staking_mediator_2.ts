import { Contract } from '@/contract'
const abi = [
	{
		payable: true,
		stateMutability: 'payable',
		type: 'fallback',
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
		name: 'accruedRewards',
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
		name: 'accruedRewardsRon',
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
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'activeCollateralizedValidators',
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
				name: 'stakingManager',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'stakingPool',
				type: 'address',
			},
		],
		name: 'canClaimRewards',
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
				name: 'stakingPool',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'stakingManager',
				type: 'address',
			},
		],
		name: 'claimPendingRewards',
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
				name: 'consensusAddrList',
				type: 'address[]',
			},
		],
		name: 'claimRewardsRon',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'collateralStakingManager',
		outputs: [
			{
				internalType: 'contract CollateralStakingManagerInterface',
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
		name: 'collateralizedDelegatingAmountPerValidator',
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
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'consensusAddr',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'consensusAddrTarget',
				type: 'address',
			},
		],
		name: 'delegateCollateralizedRon',
		outputs: [],
		payable: true,
		stateMutability: 'payable',
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
		name: 'delegateUncollateralizedRon',
		outputs: [],
		payable: true,
		stateMutability: 'payable',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'getActiveCollateralizedValidators',
		outputs: [
			{
				internalType: 'address[]',
				name: '',
				type: 'address[]',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'getOwner',
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
				name: 'stakingPool',
				type: 'address',
			},
		],
		name: 'getPendingRewards',
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
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'collateralStakingManager_',
				type: 'address',
			},
			{
				internalType: 'address payable',
				name: 'owner_',
				type: 'address',
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
		name: 'isCollateralStakingMediator',
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
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256',
			},
		],
		name: 'moveUncollateralizedErc20ToProtocol',
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
			{
				internalType: 'address',
				name: 'consensusAddrTarget',
				type: 'address',
			},
		],
		name: 'moveUncollateralizedRonToProtocol',
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
		name: 'poolToUndelegateCooldown',
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
		constant: false,
		inputs: [
			{
				internalType: 'address[]',
				name: 'consensusAddrList',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'redeemTokens',
				type: 'uint256[]',
			},
			{
				internalType: 'address payable',
				name: 'to',
				type: 'address',
			},
		],
		name: 'redeemCollateralizedRon',
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
				name: 'consensusAddrList',
				type: 'address[]',
			},
		],
		name: 'redelegateRewards',
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
				name: 'stakingPool',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'stakingManager',
				type: 'address',
			},
		],
		name: 'restakePendingRewards',
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
				name: 'consensusAddrSrc',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'consensusAddrDst',
				type: 'address',
			},
		],
		name: 'setValidatorTargetsForRestaking',
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
		name: 'stakeErc20',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256[]',
				name: 'tokenIds',
				type: 'uint256[]',
			},
		],
		name: 'stakeErc721',
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
		name: 'stakeUncollateralizedErc20',
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
		name: 'uncollateralizedDelegatingAmountPerValidator',
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
		name: 'uncollateralizedDelegatingAmountRon',
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
		name: 'uncollateralizedStakingAmount',
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
		constant: false,
		inputs: [
			{
				internalType: 'address[]',
				name: 'consensusAddrList',
				type: 'address[]',
			},
			{
				internalType: 'uint256[]',
				name: 'amounts',
				type: 'uint256[]',
			},
		],
		name: 'undelegateUncollateralizedRon',
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
			{
				internalType: 'address',
				name: 'receiver',
				type: 'address',
			},
		],
		name: 'unstakeErc20',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'uint256[]',
				name: 'tokenIds',
				type: 'uint256[]',
			},
			{
				internalType: 'address',
				name: 'receiver',
				type: 'address',
			},
		],
		name: 'unstakeErc721',
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
		name: 'unstakeUncollateralizedErc20',
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
		name: 'validatorToRestakingTarget',
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
		name: 'validatorUsedForCollateral',
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
		inputs: [],
		name: 'withdrawErc20Jaihoz',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const COLLATERAL_STAKING_MEDIATOR_2: Contract<typeof abi> = {
	name: 'Collateral Staking Mediator',
	address: '0x897e6e414e632c6edfc38185e4796661c66df3d3',
	is_deprecated: false,
	created_at: 1736875931,
	abi: abi,
}
export default COLLATERAL_STAKING_MEDIATOR_2
