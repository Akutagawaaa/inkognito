const hre = require("hardhat");


async function main() {
  // Fetch the contract to deploy
  const Contract = await hre.ethers.getContractFactory("IdentiFi");

  // Deploy the contract
  console.log("Deploying contract...");
  const contract = await Contract.deploy();

  // Wait for the deployment to be confirmed
  await contract.deployed();

  console.log(`Contract deployed to: ${contract.address}`);
}

// Error handling for asynchronous errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
