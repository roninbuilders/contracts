import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address payable',
				name: 'addr',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'salt',
				type: 'bytes32',
			},
		],
		name: 'deployNewInstance',
		outputs: [
			{
				internalType: 'address',
				name: 'dst',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'mainAddress',
		outputs: [
			{
				internalType: 'address payable',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
] as const
const PROXY_FACTORY: Contract<typeof abi> = {
	name: 'Proxy Factory',
	address: '0x84654be796dad370032391d5479f8f1fd9ddd14e',
	is_deprecated: false,
	created_at: 1724215734,
	abi: abi,
}
export default PROXY_FACTORY
