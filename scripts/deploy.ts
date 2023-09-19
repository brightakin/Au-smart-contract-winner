import { ethers } from "hardhat";
const hre = require("hardhat");

async function main() {
  const emitEvent = await ethers.deployContract("Event");

  await emitEvent.waitForDeployment();

  const address = "0xcd889baaf54a4b4f475c47411e5851f39bd16dbf";

  const result = await emitEvent.emitEvent(address);

  console.log(result);
  console.log(`Deployed }`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
