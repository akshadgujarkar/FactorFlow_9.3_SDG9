// scripts/deploy.js
import hre from "hardhat";

async function main() {
  const CarbonCreditNFT = await hre.ethers.getContractFactory("CarbonCreditNFT");
  // Deploy without constructor arguments if none are required
  const carbon = await CarbonCreditNFT.deploy("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

  await carbon.waitForDeployment();
  console.log("Carbon Credit contract deployed to:", await carbon.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
