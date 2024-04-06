// src/services/solanaService.js
import * as solanaWeb3 from '@solana/web3.js';
import {
  Metaplex,
  keypairIdentity,
  bundlrStorage,
  toMetaplexFile,
  toBigNumber,
} from "@metaplex-foundation/js";
// import * as fs from "fs";
// import secret from "./guideSecret.json";

const QUICKNODE_RPC =
  "https://crimson-capable-daylight.solana-devnet.quiknode.pro/59063ba707783cfe415ba42e08858e330a9f5273/";
const SOLANA_CONNECTION = new solanaWeb3.Connection(QUICKNODE_RPC, "confirmed");
//enter the secret key from guideSecret.json
// const WALLET = solanaWeb3.Keypair.fromSecretKey(new Uint8Array());
const WALLET = solanaWeb3.Keypair.generate();
// const WALLET = solanaWeb3.Keypair.fromSecretKey(new Uint8Array(process.env.NEXT_PUBLIC_SECRET_KEY));

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
  uploadPath: "uploads/",
  imgFileName: "image.png",
  imgType: "image/png",
  imgName: "QuickNode Pixel",
  description: "Pixel infrastructure for everyone!",
  attributes: [
    { trait_type: "Speed", value: "Quick" },
    { trait_type: "Type", value: "Pixelated" },
    { trait_type: "Background", value: "QuickNode Blue" },
  ],
  sellerFeeBasisPoints: 500, //500 bp = 5%
  symbol: "QNPIX",
  creators: [{ address: WALLET.publicKey, share: 100 }],
};

async function uploadImage(
  filePath,
  fileName
) {
  console.log(`Step 1 - Uploading Image`);
  const imgBuffer = fs.readFileSync(filePath + fileName);
  const imgMetaplexFile = toMetaplexFile(imgBuffer, fileName);
  const imgUri = await METAPLEX.storage().upload(imgMetaplexFile);
  console.log(`   Image URI:`, imgUri);
  return imgUri;
}

async function uploadMetadata(
  imgUri,
  imgType,
  nftName,
  description,
  attributes
) {
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

async function mintNft(
  metadataUri,
  name,
  sellerFee,
  symbol,
  creators
) {
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
  console.log(
    `   Minted NFT: https://explorer.solana.com/address/${nft.address}?cluster=devnet`
  );
}

// Setup connection
const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed');


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
    let signature = await solanaWeb3.sendAndConfirmTransaction(
      connection,
      transaction,
      [signer]
    );
    return signature;
  } catch (error) {
    console.error("Error sending transaction:", error);
    throw error;
  }
};


export const interactForNFT = async () => {
    //Step 1 - Upload Image
  const imgUri = await uploadImage(CONFIG.uploadPath, CONFIG.imgFileName);
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
}