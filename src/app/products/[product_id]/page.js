"use client";

import { products } from "../../../provider/productprovider";
import { useUploadThing } from "../../../utils/uploadthing";

import { Badge, Button, Card, Modal, Rating } from "flowbite-react";
import { useState, useEffect } from "react";
import { generateWaifuPic } from "../../../services/huggingfaceservice";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { sol } from "@metaplex-foundation/js";

export default function ProductDetails({ params }) {
  const { publicKey, sendTransaction, connected } = useWallet();
  const { connection } = useConnection();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0.0);
  const [nftHash, setNftHash] = useState("");
  const product = products.find((product) => product.product_id === params.product_id);

  const image = "/logo.png";
  const [src, setSrc] = useState(""); // initial src will be empty
  const [files, setFiles] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [txnConfirmed, setTxnConfirmed] = useState(false);

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res) => {
      alert("uploaded successfully!");

      setImgUrl(res[0].url);
    },
    onUploadError: () => {
      alert("error occurred while uploading");
    },
    onUploadBegin: () => {
      alert("upload has begun");
    },
  });

  const RECIPIENT_PUBLIC_KEY = new PublicKey("6DvfoE1pA8C4jKhgAA28WbDpNGQiSQewua16TvTiradz");
  const SOL_AMOUNT = 0.01;

  const generateNFTReq = async (imgUrl) => {
    const res = await fetch("/api/nftApi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imgUrl: imgUrl }),
    });
    const data = await res.json();
    console.log(data + "Img Url sent to NFT API");
  };

  function blobToFile(blob) {
    const file = new File([blob], "waifu.jpeg", {
      type: blob.type,
      lastModified: new Date().getTime(),
    });
    return file;
  }

  const sendSol = async (solAmount) => {
    if (!connected || !publicKey) {
      alert("Wallet not connected");
      return;
    }

    console.log(solAmount);

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: RECIPIENT_PUBLIC_KEY,
        lamports: solAmount * LAMPORTS_PER_SOL,
      })
    );

    try {
      const signature = await sendTransaction(transaction, connection, {
        timeout: 30000,
      });
      await connection.confirmTransaction(signature, "confirmed");
      setTxnConfirmed(true);
      console.log("Transaction successful with signature:", signature);
      // alert('Transaction successful!');
    } catch (error) {
      console.error("Error sending SOL:", error);
      // alert("Transaction successful:", error.message);
    }
  };

  useEffect(() => {
    setPrice(parseFloat(product.product_price));
  }, []);

  useEffect(() => {
    // Call generateNFTReq when src is available
    if (src) {
      fetch(src)
        .then((res) => res.blob())
        .then((blob) => {
          const file = blobToFile(blob);
          // console.log(file); // Here's your File object
          // Now you can use this File object for further operations, like uploading to S3
          setFiles([file]);
          startUpload(files);
        })
        .catch((error) => console.error("Error:", error));
    }
    if (isUploading) {
      console.log("Uploading");
    }
  }, [src]); // Trigger the effect whenever src changes

  useEffect(() => {
    if (imgUrl) {
      generateNFTReq(imgUrl);
    }
  }, [imgUrl]);
  return (
    <div className="p-6">
      <section className="mb-6">
        <h1 className="py-4 text-4xl font-bold text-gray-900 dark:text-white font">
          {product.product_title}
        </h1>
        <div className="flex flex-row gap-4">
          <Badge color="info" size="md">
            Special Edition
          </Badge>
          <Badge color="warning" size="md">
            Sale
          </Badge>
        </div>
      </section>
      <section>
        <div className="grid grid-col-1 sm:grid-cols-5 gap-6">
          <div className="col-span-2 max-w-md">
            <img
              className="w-full h-full object-cover transform transition duration-300 ease-in-out hover:scale-110 rounded-xl"
              src={product.img_src}
              alt={product.product_title}
            />
          </div>
          <div className="col-span-3 p-8 bg-white rounded-xl shadow-lg text-black">
            <div className="min-w-min">{product.product_description}</div>
            <h2 className="text-2xl font-bold mt-4 text-black">{product.product_price} SOL</h2>
            <div className="mt-4">
              <label htmlFor="quantity" className="mr-2">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="1"
                className="border rounded-md p-2"
              />
            </div>
            <RatingExample />
            <div className="my-4">
              <Button
                onClick={() => {
                  sendSol(price);
                  setNftHash(Math.floor(Math.random() * 1000));
                  generateWaifuPic(setSrc);
                }}>
                Purchase
              </Button>
              {/* <AddToCart sendSol={() => sendSol(0.00012)} productPrice={0.00012} /> */}
            </div>
          </div>
        </div>
        <div>
          {src && (
            <>
              <h1 className="py-4 text-4xl font-bold text-gray-900 dark:text-white font">
                Mint your waifu
              </h1>
              <Card className="max-w-sm align-center" imgAlt="Waifu" imgSrc={src}>
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Waifu #{nftHash}
                  </h5>
                </a>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    Claim Waifu
                  </span>
                  <div className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                    <NFTMinting />
                  </div>
                </div>
              </Card>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

const AddToCart = function (sendSol, productPrice) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Purchase</Button>
      <Modal show={isOpen} onClose={() => setOpen(false)}>
        <Modal.Header>Purchase Confirmation</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {"Purchase item for " + 0.00012 + " SOL"}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-center align-middle">
          <Button
            onClick={() => {
              productPrice = 0.00012;
              sendSol;
              setOpen(false);
            }}>
            Yes
          </Button>
          <Button color="gray" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const RatingExample = function () {
  return (
    <div className="flex flex-col justify-center gap-4">
      <Rating>
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.1 out of 5</p>
      </Rating>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">190 ratings</p>
      <Rating.Advanced percentFilled={17}>5 star</Rating.Advanced>
      <Rating.Advanced percentFilled={70}>4 star</Rating.Advanced>
      <Rating.Advanced percentFilled={8}>3 star</Rating.Advanced>
      <Rating.Advanced percentFilled={4}>2 star</Rating.Advanced>
      <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
    </div>
  );
};

const NFTMinting = function () {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => interactForNFT()}>Mint your NFT now</Button>
      <Modal show={isOpen} onClose={() => setOpen(false)}>
        <Modal.Header>Purchase Confirmation</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {"Mint item for " + 0.00028 + " SOL"}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-center align-middle">
          <Button
            onClick={() => {
              productPrice = 0.00012;
              sendSol;
              setOpen(false);
            }}>
            Yes
          </Button>
          <Button color="gray" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
