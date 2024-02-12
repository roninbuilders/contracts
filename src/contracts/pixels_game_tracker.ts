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
				indexed: false,
				internalType: 'address',
				name: 'userAddress',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'blockTimestamp',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'string',
				name: 'uid',
				type: 'string',
			},
		],
		name: 'DailyLogDone',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		name: '_userDays',
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
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		name: '_userUid',
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
				internalType: 'string',
				name: 'uid',
				type: 'string',
			},
		],
		name: 'dailyLog',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'userAddress',
				type: 'address',
			},
		],
		name: 'hasSignInToday',
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
const PIXELS_GAME_TRACKER: Contract<typeof abi> = {
	name: 'Pixels Game Tracker',
	address: '0x02790f32ad7e7eaaecfb0ad21950829932f1a2ee',
	is_deprecated: false,
	updated_at: 1707758983,
	abi: abi,
}
export default PIXELS_GAME_TRACKER
