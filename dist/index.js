"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const ethers_1 = require("ethers");
let seedPhrase = process.env.SEED_PHRASE || ''; // write your seed phrase here
// const hdNode = utils.HDNode.fromMnemonic(seedPhrase);
const hdNode = ethers_1.Wallet.fromMnemonic(seedPhrase);
const privateKey = hdNode.privateKey;
const publicKey = hdNode.publicKey;
const address = hdNode.address;
console.log(`your private key is: ${privateKey}`);
console.log(`your public key is: ${publicKey}`);
console.log(`your address is: ${address}`);
