import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'address',
				name: '_router',
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
		constant: true,
		inputs: [],
		name: 'baseDecimals',
		outputs: [
			{
				internalType: 'uint8',
				name: '',
				type: 'uint8',
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
				name: 'cToken',
				type: 'address',
			},
		],
		name: 'getUnderlyingDecimals',
		outputs: [
			{
				internalType: 'uint8',
				name: '',
				type: 'uint8',
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
				internalType: 'contract CTokenInterface',
				name: 'cToken',
				type: 'address',
			},
		],
		name: 'getUnderlyingPrice',
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
		name: 'owner',
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
		name: 'router',
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
				name: 'cToken',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'input',
				type: 'address',
			},
			{
				internalType: 'address',
				name: 'output',
				type: 'address',
			},
		],
		name: 'setKatanaPair',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const KATANA_TWAP_ORACLE: Contract<typeof abi> = {
	name: 'Katana TWAP Oracle',
	address: '0x3ea08443db91f3cbf1fbcad2b2d1ca3f4c582fbf',
	is_deprecated: false,
	created_at: 1684958659,
	abi: abi,
}
export default KATANA_TWAP_ORACLE
