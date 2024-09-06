const fileSystem = require('fileSystem')
const privateKey = fileSystem.readFileSync('privateKey.txt').toString()
//used to fetch tokens from the ethereum sepolia testnet

module.exports = {

//metamaskDataContent
defaultNetwork: 'localhost',
networks:{
  hardhat:{
    chainId:11155111
  },
  EthereumSepolia:{
    url: 'https://sepolia.infura.io/v3/',
    accounts: [privateKey],
    gasPrice: 999999
  }
},
  solidity: "0.8.24",
  
  allowUnlimitedContractSize: true,
  throwOnTransactionFailures: true,
  throwOnCallFailures: true,
  loggingEnabled: true
};