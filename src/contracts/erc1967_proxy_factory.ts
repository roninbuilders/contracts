import { Contract } from '@/contract'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'implementation',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'proxy',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'deployer',
				type: 'address',
			},
		],
		name: 'ProxyDeployed',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_implementation',
				type: 'address',
			},
			{
				internalType: 'bytes',
				name: '_data',
				type: 'bytes',
			},
			{
				internalType: 'bytes32',
				name: 'salt',
				type: 'bytes32',
			},
		],
		name: 'deployProxyByImplementation',
		outputs: [
			{
				internalType: 'address',
				name: 'deployedProxy',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const ERC1967_PROXY_FACTORY: Contract<typeof abi> = {
	name: 'ERC1967 Proxy Factory',
	address: '0x6d3aef8815e89e9117179d36673bf7584825db7d',
	is_deprecated: false,
	created_at: 1717479951,
	abi: abi,
}
export default ERC1967_PROXY_FACTORY
