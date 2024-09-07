require('@nomiclabs/hardhat-ethers');
const fileSystem = require('fs')
const privateKey = fileSystem.readFileSync('privateKey.txt').toString()
//used to fetch tokens from the ethereum sepolia testnet

module.exports = {

//metamaskDataContent
defaultNetwork: 'localhost',
networks:{
  hardhat:{
    chainId:1337
  },
  EthereumSepolia:{
    url: 'https://sepolia.infura.io/v3/6fd055dc428a4257af23e6c45119c621',
    accounts: [`0x${privateKey}`],
    gasPrice: 1000000
  }
},
  solidity: "0.8.24",
  
  allowUnlimitedContractSize: true,
  throwOnTransactionFailures: true,
  throwOnCallFailures: true,
  loggingEnabled: true
};