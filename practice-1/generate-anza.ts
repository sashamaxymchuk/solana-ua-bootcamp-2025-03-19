import { Keypair } from "@solana/web3.js";

let keypair: Keypair;
let publickey: string;

do {
    keypair = Keypair.generate();
    publickey = keypair.publicKey.toBase58();
} while (!publickey.startsWith("Anza"));

console.log("The public key is: ", keypair.publicKey.toBase58());
console.log("The secret key is: ", keypair.secretKey);
console.log("Finished ✅")
