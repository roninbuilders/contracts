import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'initialOwner',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
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
		inputs: [
			{
				internalType: 'contract TransparentUpgradeableProxy',
				name: 'proxy',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'newAdmin',
				type: 'address',
			},
		],
		name: 'changeProxyAdmin',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract TransparentUpgradeableProxy',
				name: 'proxy',
				type: 'address',
			},
		],
		name: 'getProxyAdmin',
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
				internalType: 'contract TransparentUpgradeableProxy',
				name: 'proxy',
				type: 'address',
			},
		],
		name: 'getProxyImplementation',
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
		name: 'renounceOwnership',
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
		inputs: [
			{
				internalType: 'contract TransparentUpgradeableProxy',
				name: 'proxy',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'implementation',
				type: 'address',
			},
		],
		name: 'upgrade',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract TransparentUpgradeableProxy',
				name: 'proxy',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'implementation',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'data',
				type: 'bytes',
			},
		],
		name: 'upgradeAndCall',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
] as const
const PROXY_ADMIN_11: Contract<typeof abi> = {
	name: 'Proxy Admin',
	address: '0x7ae8657c598dd03e5463c67a17173a0d49b1bc4e',
	is_deprecated: false,
	created_at: 1714837374,
	abi: abi,
}
export default PROXY_ADMIN_11
