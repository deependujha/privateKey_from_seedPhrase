import 'dotenv/config';
import { Wallet } from 'ethers';

let seedPhrase = process.env.SEED_PHRASE || ''; // write your seed phrase here

const mnemonicWallet = Wallet.fromMnemonic(seedPhrase);

const privateKey = mnemonicWallet.privateKey;
const publicKey = mnemonicWallet.publicKey;
const address = mnemonicWallet.address;

console.log(`your private key is: ${privateKey}`);
console.log(`your public key is: ${publicKey}`);
console.log(`your address is: ${address}`);
