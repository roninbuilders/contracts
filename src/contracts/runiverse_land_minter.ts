import { Contract } from '@/contract'
const abi = [
	{
		inputs: [
			{
				internalType: 'contract IRuniverseLand',
				name: '_runiverseLand',
				type: 'address',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		inputs: [],
		name: 'Address0Error',
		type: 'error',
	},
	{
		inputs: [],
		name: 'BadSignature',
		type: 'error',
	},
	{
		inputs: [],
		name: 'DeniedProcessDuringMinting',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'sended_values',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'expected',
				type: 'uint256',
			},
		],
		name: 'GivedValuesNotValid',
		type: 'error',
	},
	{
		inputs: [],
		name: 'IncorrectPurchaseLimit',
		type: 'error',
	},
	{
		inputs: [],
		name: 'MisconfiguredPrices',
		type: 'error',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'correct_date',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'current_date',
				type: 'uint256',
			},
		],
		name: 'WrongDateForProcess',
		type: 'error',
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
		inputs: [],
		name: 'claimlistMerkleRoot',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum IRuniverseLand.PlotSize',
				name: 'plotSize',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: 'numPlots',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'claimedMaxPlots',
				type: 'uint256',
			},
			{
				internalType: 'bytes32[]',
				name: '_merkleProof',
				type: 'bytes32[]',
			},
		],
		name: 'claimlistMint',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
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
		],
		name: 'claimlistMintedPerSize',
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
		name: 'claimsStartTime',
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
		name: 'claimsStarted',
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
	{
		inputs: [
			{
				internalType: 'contract IERC20',
				name: '_token',
				type: 'address',
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'forwardERC20s',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getAvailableLands',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: '_messageHash',
				type: 'bytes32',
			},
		],
		name: 'getEthSignedMessageHash',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '_message',
				type: 'string',
			},
		],
		name: 'getMessageHash',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'pure',
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
		name: 'getNonce',
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
		name: 'getPlotPrices',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getPlotsAvailablePerSize',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getSigner',
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
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256',
			},
		],
		name: 'getTokenIdPlotType',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getTotalMintedLands',
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
		name: 'getTotalMintedLandsBySize',
		outputs: [
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum IRuniverseLand.PlotSize',
				name: 'plotSize',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: 'numPlots',
				type: 'uint256',
			},
		],
		name: 'mint',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'mintlistMerkleRoot1',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'mintlistMerkleRoot2',
		outputs: [
			{
				internalType: 'bytes32',
				name: '',
				type: 'bytes32',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'enum IRuniverseLand.PlotSize',
				name: 'plotSize',
				type: 'uint8',
			},
			{
				internalType: 'uint256',
				name: 'numPlots',
				type: 'uint256',
			},
			{
				internalType: 'uint256',
				name: 'claimedMaxPlots',
				type: 'uint256',
			},
			{
				internalType: 'bytes32[]',
				name: '_merkleProof',
				type: 'bytes32[]',
			},
		],
		name: 'mintlistMint',
		outputs: [],
		stateMutability: 'payable',
		type: 'function',
	},
	{
		inputs: [
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
		],
		name: 'mintlistMintedPerSize',
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
		name: 'mintlistStartTime',
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
		name: 'mintlistStarted',
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
	{
		inputs: [
			{
				internalType: 'address',
				name: '_who',
				type: 'address',
			},
			{
				internalType: 'bytes32',
				name: '_leaf',
				type: 'bytes32',
			},
			{
				internalType: 'bytes32[]',
				name: '_merkleProof',
				type: 'bytes32[]',
			},
		],
		name: 'mintlisted',
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
		inputs: [
			{
				internalType: 'enum IRuniverseLand.PlotSize[]',
				name: 'plotSizes',
				type: 'uint8[]',
			},
			{
				internalType: 'address[]',
				name: 'recipients',
				type: 'address[]',
			},
		],
		name: 'ownerMint',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'plotGlobalOffset',
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
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'plotPrices',
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
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'plotSizeLocalOffset',
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
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'plotsMinted',
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
		name: 'publicMintStartTime',
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
		name: 'publicStarted',
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
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'runiverseLand',
		outputs: [
			{
				internalType: 'contract IRuniverseLand',
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
				internalType: 'bytes32',
				name: 'newMerkleRoot',
				type: 'bytes32',
			},
		],
		name: 'setClaimlistMerkleRoot',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_newClaimsStartTime',
				type: 'uint256',
			},
		],
		name: 'setClaimsStartTime',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_newGlobalIdOffset',
				type: 'uint256',
			},
		],
		name: 'setGlobalIdOffset',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: '_newPlotSizeLocalOffset',
				type: 'uint256[]',
			},
		],
		name: 'setLocalIdOffsets',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'newMerkleRoot',
				type: 'bytes32',
			},
		],
		name: 'setMintlistMerkleRoot1',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'bytes32',
				name: 'newMerkleRoot',
				type: 'bytes32',
			},
		],
		name: 'setMintlistMerkleRoot2',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_newAllowlistMintStartTime',
				type: 'uint256',
			},
		],
		name: 'setMintlistStartTime',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: '_newPrices',
				type: 'uint256[]',
			},
		],
		name: 'setPrices',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_newPublicMintStartTime',
				type: 'uint256',
			},
		],
		name: 'setPublicMintStartTime',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'contract IRuniverseLand',
				name: '_newRuniverseLandAddress',
				type: 'address',
			},
		],
		name: 'setRuniverseLand',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_signer',
				type: 'address',
			},
		],
		name: 'setSigner',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address payable',
				name: '_newVaultAddress',
				type: 'address',
			},
		],
		name: 'setVaultAddress',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'signer',
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
		inputs: [],
		name: 'vault',
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
	{
		inputs: [
			{
				internalType: 'string',
				name: '_message',
				type: 'string',
			},
			{
				internalType: 'bytes',
				name: '_signature',
				type: 'bytes',
			},
		],
		name: 'verify',
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
	{
		inputs: [
			{
				internalType: 'bytes',
				name: 'signature',
				type: 'bytes',
			},
			{
				internalType: 'enum IRuniverseLand.PlotSize',
				name: 'plotSize',
				type: 'uint8',
			},
		],
		name: 'verifyAndMint',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256',
			},
		],
		name: 'withdraw',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'withdrawAll',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const
const RUNIVERSE_LAND_MINTER: Contract<typeof abi> = {
	name: 'Runiverse Land Minter',
	address: '0x8bffe7c3fdb06c40e65bd50259f88a87233c7528',
	is_deprecated: false,
	created_at: 1724353840,
	abi: abi,
}
export default RUNIVERSE_LAND_MINTER
