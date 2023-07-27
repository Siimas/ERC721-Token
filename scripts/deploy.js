const { ethers } = require("hardhat");

async function main() { 
  const Cocas = await ethers.getContractFactory("Cocas");
  const cocas = await Cocas.deploy("Cocas", 'CC');

  const deploymentReceipt = await cocas.deploymentTransaction().wait(2);
  console.log(`Contract successfully deployed to ${deploymentReceipt.contractAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
