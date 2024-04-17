# Ronin Contracts Addresses and ABI's

This project provides a community-maintained list of contract addresses and ABI's for the Ronin Network. It is intended to be a useful resource for developers working with the Ronin Network.

## Installation

To install the project, run the following command:

```bash
npm i @roninbuilders/contracts

```

### Usage viem
Here's an example of how to use this project to fetch balances of different tokens for a specific address using the viem package:

```bash
npm i @roninbuilders/contracts viem
```

```typescript
import { formatEther } from "viem";
import { AXIE_PROXY, USD_COIN, WRAPPED_ETHER } from "@roninbuilders/contracts"

// Initialize your viemClient here

// Fetch RON balance
const ronBalance = await viemClient.getBalance({ address });
console.log(`RON: ${formatEther(ronBalance)}`);

// Fetch WRAPPED_ETHER balance
const wethBalance = await viemClient.readContract({
  address: WRAPPED_ETHER.address,
  abi: WRAPPED_ETHER.abi,
  functionName: 'balanceOf',
  args: [address]
});
console.log(`WETH: ${formatEther(wethBalance)}`);

// Fetch Axies balance 
const axiesBalance = await viemClient.readContract({
  address: AXIE_PROXY.address,
  abi: AXIE_PROXY.abi,
  functionName: 'balanceOf',
  args: [address]
});
console.log(`Axies: ${axiesBalance.toString()}`);

// Fetch USDC balance
const usdcBalance = await viemClient.readContract({
  address: USD_COIN.address,
  abi: USD_COIN.abi,
  functionName: 'balanceOf',
  args: [address]
});
console.log(`USDC balance: ${formatEther(usdcBalance)}`);

```

### Usage with ethers
First, install the necessary packages:
```bash
npm i @roninbuilders/contracts ethers@6.9.0
```
Then, you can use the following code to fetch balances of different tokens for a specific address:
```typescript
import { AXIE_PROXY, USD_COIN, WRAPPED_ETHER } from "@roninbuilders/contracts"

// Initialize your ethers provider here

// Fetch RON balance
const balance = await ethers.provider.getBalance(address)
const balanceInEther = ethers.utils.formatEther(balance)
console.log(`RON: ${balanceInEther}`)

// Fetch WRAPPED_ETHER balance
const wethContract = new ethers.Contract(WRAPPED_ETHER.address, WRAPPED_ETHER.abi, ethers.provider)
const wethBalance = await wethContract.balanceOf(address)
const wethBalanceInEther = ethers.utils.formatEther(wethBalance)
console.log(`WETH: ${wethBalanceInEther}`)

// Fetch Axies balance 
const axieContract = new ethers.Contract(AXIE_PROXY.address, AXIE_PROXY.abi, ethers.provider)
const axiesBalance = await axieContract.balanceOf(address)
console.log(`Axies: ${axiesBalance.toString()}`)

// Fetch USDC balance
const usdcContract = new ethers.Contract(USD_COIN.address, USD_COIN.abi, ethers.provider)
const usdcBalance = await usdcContract.balanceOf(address)
const usdcBalanceFormated = ethers.utils.formatUnits(usdcBalance, 6) // 6 decimals
console.log(`USDC balance: ${usdcBalanceFormated}`)

```

### Contributing

We welcome contributions from the community. To get started, please fork this repository, make your changes, and open a pull request. We appreciate any contributions you can make, whether it's fixing bugs, improving documentation, or adding new features.

Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) guide for details on our code of conduct, and the process for submitting pull requests to us.