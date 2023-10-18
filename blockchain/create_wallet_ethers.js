const { ethers } = require("ethers");


const wallet = ethers.Wallet.createRandom();
console.log(wallet);
console.log(wallet._signingKey());
console.log(wallet.mnemonic());

