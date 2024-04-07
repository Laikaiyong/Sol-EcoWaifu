// src/services/solanaService.js
import * as solanaWeb3 from "@solana/web3.js";
import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
  toMetaplexFile,
  toBigNumber,
} from "@metaplex-foundation/js";
// import * as fs from "fs";
import secret from "./guideSecret.json";
import wallet from "./guideSecret.json";

// We're going to import our keypair from the wallet file
// put wallet variable in the bracket
const keypair = solanaWeb3.Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection to devnet SOL tokens
const devConnection = new solanaWeb3.Connection("https://api.devnet.solana.com");
async function airdrop() {
  try {
    // We're going to claim 2 devnet SOL tokens
    const txhash = await connection.requestAirdrop(
      keypair.publicKey,
      2 * solanaWeb3.LAMPORTS_PER_SOL
    );
    console.log(`Success! Check out your TX here:
    https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
}

const QUICKNODE_RPC =
  "https://cosmological-fabled-night.solana-devnet.quiknode.pro/20c9b7a0655b68d7c6b3b46c4be95d91a9a06763/";
const SOLANA_CONNECTION = new solanaWeb3.Connection(QUICKNODE_RPC, "confirmed");
//enter the secret key from guideSecret.json
const WALLET = solanaWeb3.Keypair.fromSecretKey(new Uint8Array(secret));

const METAPLEX = Metaplex.make(SOLANA_CONNECTION)
  .use(keypairIdentity(WALLET))
  .use(
    bundlrStorage({
      address: "https://devnet.bundlr.network",
      providerUrl: QUICKNODE_RPC,
      timeout: 60000,
    })
  );

//CONFIGURATION. feel free to change the values
const CONFIG = {
  imgType: "image/jpeg",
  imgName: "Sol EcoWaifu",
  description: "Waifu",
  attributes: [
    { trait_type: "Speed", value: "Quick" },
    { trait_type: "Type", value: "Pixelated" },
    { trait_type: "Background", value: "Transparent" },
  ],
  sellerFeeBasisPoints: 500, //500 bp = 5%
  symbol: "SEW",
  creators: [{ address: WALLET.publicKey, share: 100 }],
};

async function uploadImage(imgBuffer, fileName) {
  console.log(`Step 1 - Uploading Image`);
  // const imgBuffer = fs.readFileSync(filePath + fileName);

  const imgMetaplexFile = toMetaplexFile(imgBuffer, fileName);
  const imgUri = await METAPLEX.storage().upload(imgMetaplexFile);
  console.log(`   Image URI:`, imgUri);
  return imgUri;
}

async function uploadMetadata(imgUri, imgType, nftName, description, attributes) {
  console.log(`Step 2 - Uploading Metadata`);
  const { uri } = await METAPLEX.nfts().uploadMetadata({
    name: nftName,
    description: description,
    image: imgUri,
    attributes: attributes,
    properties: {
      files: [
        {
          type: imgType,
          uri: imgUri,
        },
      ],
    },
  });
  console.log("   Metadata URI:", uri);
  return uri;
}

async function mintNft(metadataUri, name, sellerFee, symbol, creators) {
  console.log(`Step 3 - Minting NFT`);
  const { nft } = await METAPLEX.nfts().create({
    uri: metadataUri,
    name: name,
    sellerFeeBasisPoints: sellerFee,
    symbol: symbol,
    creators: creators,
    isMutable: false,
  });
  console.log(`   Success!🎉`);
  console.log(`   Minted NFT: https://explorer.solana.com/address/${nft.address}?cluster=devnet`);
}

// Setup connection
const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("devnet"), "confirmed");

// Adjust your interactWithContract function to accept a signer directly
export const interactWithContract = async (signer, programIdString, instructionData) => {
  const programId = new solanaWeb3.PublicKey(programIdString);

  let transaction = new solanaWeb3.Transaction();
  let instruction = new solanaWeb3.TransactionInstruction({
    keys: [{ pubkey: signer.publicKey, isSigner: true, isWritable: true }],
    programId,
    data: instructionData, // This should be a Buffer
  });

  transaction.add(instruction);

  try {
    let signature = await solanaWeb3.sendAndConfirmTransaction(connection, transaction, [signer]);
    return signature;
  } catch (error) {
    console.error("Error sending transaction:", error);
    throw error;
  }
};

export const interactForNFT = async (imgBuffer, fileName) => {
  //Step 1 - Upload Image
  const imgUri = await uploadImage(imgBuffer, fileName);
  //Step 2 - Upload Metadata
  const metadataUri = await uploadMetadata(
    imgUri,
    CONFIG.imgType,
    CONFIG.imgName,
    CONFIG.description,
    CONFIG.attributes
  );

  //Step 3 - Mint NFT
  mintNft(
    metadataUri,
    CONFIG.imgName,
    CONFIG.sellerFeeBasisPoints,
    CONFIG.symbol,
    CONFIG.creators
  );
};
