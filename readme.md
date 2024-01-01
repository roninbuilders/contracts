# Ronin contracts addresses and ABI's

This is a community list of contracts addresess and abi's that might be useful for developers. Let us know if something is not up to date or missing.

## Install

```bash
npm i @roninbuilders/contracts
```

### Usage viem

```bash
npm i @roninbuilders/contracts viem
```

```typescript
import { formatEther } from "viem";
import { AXIE_PROXY, USD_COIN, WRAPPED_ETHER } from "@roninbuilders/contracts"

// get RON balance
const ronBalance = await viemClient.getBalance({
    address,
});
console.log(`RON: ${formatEther(ronBalance)}`);

// get WRAPPED_ETHER balance
const wethBalance = await viemClient.readContract({
    address: WRAPPED_ETHER.address,
    abi: WRAPPED_ETHER.abi,
    functionName: 'balanceOf',
    args: [address]
}) as bigint
console.log(`WETH: ${formatEther(wethBalance)}`)

// get axies balance 
const axiesBalance = await viemClient.readContract({
    address: AXIE_PROXY.address,
    abi: AXIE_PROXY.abi,
    functionName: 'balanceOf',
    args: [address]
}) as bigint
console.log(`Axies: ${axiesBalance.toString()}`)

// get USDC balance
const usdcBalance = await viemClient.readContract({
    address: USD_COIN.address,
    abi: USD_COIN.abi,
    functionName: 'balanceOf',
    args: [address]
}) as bigint
console.log(`USDC balance: ${formatEther(usdcBalance)}`)

```

### Usage ethers

```bash
npm i @roninbuilders/contracts ethers@6.9.0
```

```typescript
import { AXIE, USD_COIN, WRAPPED_ETHER } from "@roninbuilders/contracts"

// get RON balance
const balance = await hre.ethers.provider.getBalance(address)
const balanceInEther = hre.ethers.formatEther(balance)
console.log(`RON: ${balanceInEther}`)

// get eth balance
const wethContract = new hre.ethers.Contract(WRAPPED_ETHER.address, WRAPPED_ETHER.abi, hre.ethers.provider)
const wethBalance = await wethContract.balanceOf(address)
const wethBalanceInEther = hre.ethers.formatEther(wethBalance)
console.log(`WETH: ${wethBalanceInEther}`)

// get axies balance 
const axieContract = new hre.ethers.Contract(AXIE_PROXY.address, AXIE_PROXY.abi, hre.ethers.provider)
const axiesBalance = await axieContract.balanceOf(address)
console.log(`Axies: ${axiesBalance.toString()}`)

// get USDC balance
const usdcContract = new hre.ethers.Contract(USD_COIN.address, USD_COIN.abi, hre.ethers.provider)
const usdcBalance = await usdcContract.balanceOf(address)
const usdcBalanceFormated = hre.ethers.formatUnits(usdcBalance, 6) // 6 decimals
console.log(`USDC balance: ${usdcBalanceFormated}`)

```
