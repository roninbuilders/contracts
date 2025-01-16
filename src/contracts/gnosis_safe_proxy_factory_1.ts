import { Contract } from '@/contract'
const abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'contract GnosisSafeProxy',
				name: 'proxy',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'singleton',
				type: 'address',
			},
		],
		name: 'ProxyCreation',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_singleton',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'initializer',
				type: 'bytes',
			},
			{
				internalType: 'uint256',
				name: 'saltNonce',
				type: 'uint256',
			},
		],
		name: 'calculateCreateProxyWithNonceAddress',
		outputs: [
			{
				internalType: 'address',
				name: 'safe',
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
				name: '_singleton',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: 'initializer',
				type: 'bytes',
			},
			{
				internalType: 'uint256',
				name: 'saltNonce',
				type: 'uint256',
			},
		],
		name: 'createProxyWithNonce',
		outputs: [
			{
				internalType: 'contract GnosisSafeProxy',
				name: 'proxy',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'proxyCreationCode',
		outputs: [
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [],
		name: 'proxyRuntimeCode',
		outputs: [
			{
				internalType: 'bytes',
				name: '',
				type: 'bytes',
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
		],
		name: 'userToProxy',
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
] as const
const GNOSIS_SAFE_PROXY_FACTORY_1: Contract<typeof abi> = {
	name: 'Gnosis Safe Proxy Factory',
	address: '0x4990d27658070dd1f1a0cdd7411c3567676352a6',
	is_deprecated: false,
	created_at: 1735558133,
	abi: abi,
}
export default GNOSIS_SAFE_PROXY_FACTORY_1
