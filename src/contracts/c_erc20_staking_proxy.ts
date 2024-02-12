import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'underlying_',
				type: 'address',
			},
			{
				internalType: 'contract ComptrollerInterface',
				name: 'comptroller_',
				type: 'address',
			},
			{
				internalType: 'string',
				name: 'name_',
				type: 'string',
			},
			{
				internalType: 'string',
				name: 'symbol_',
				type: 'string',
			},
			{
				internalType: 'address payable',
				name: 'admin_',
				type: 'address',
			},
			{
				internalType: 'contract CollateralStakingManagerInterface',
				name: 'collateralStakingManagerInterface_',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'implementation_',
				type: 'address',
			},
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldImplementation',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newImplementation',
				type: 'address',
			},
		],
		name: 'NewImplementation',
		type: 'event',
	},
	{
		payable: true,
		stateMutability: 'payable',
		type: 'fallback',
	},
	{
		constant: false,
		inputs: [
			{
				internalType: 'address',
				name: 'implementation_',
				type: 'address',
			},
		],
		name: '_setImplementation',
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
		constant: true,
		inputs: [],
		name: 'collateralStakingManagerInterface',
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
		inputs: [],
		name: 'comptroller',
		outputs: [
			{
				internalType: 'contract ComptrollerInterface',
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
		name: 'currentCollateralAmount',
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
		name: 'globalCollateralLimit',
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
		constant: true,
		inputs: [],
		name: 'isCErc20Staking',
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
		name: 'name',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'symbol',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		payable: false,
		stateMutability: 'view',
		type: 'function',
	},
	{
		constant: true,
		inputs: [],
		name: 'underlying',
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
] as const
const C_ERC20_STAKING_PROXY: Contract<typeof abi> = {
	name: 'C Erc20 Staking Proxy',
	address: '0xc737cca751142ac9b51cb8ef475042dfcea9287a',
	is_deprecated: false,
	updated_at: 1707758987,
	abi: abi,
}
export default C_ERC20_STAKING_PROXY
