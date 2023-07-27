const { ethers } = require("hardhat");
const cocasJSON = require("../artifacts/contracts/Cocas.sol/Cocas.json")

async function main() { 
  const abi = cocasJSON.abi
  const provider = new ethers.InfuraProvider("sepolia", process.env.SEPOLIA_PROJECT_ID)
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
  const signer = wallet.connect(provider)
  const cocas = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer)
  await cocas.mint("https://ipfs.io/ipfs/QmWwNN9ZmgosNZg7Uh2nxxZvhnRW8CKdUooLntuMbgsMPd")
  console.log("NFT Minted!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
