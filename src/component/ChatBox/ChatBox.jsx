import { useDataMessage, useLocalPeer } from '@huddle01/react/hooks';
import { useState } from 'react';
import { emoji, useReward } from 'react-rewards';
import LocalMessageBubble from './LocalMessageBubble';
import RemoteMessageBubble from './RemoteMessageBubble';
import { Button, Tooltip } from 'flowbite-react';
import { HiUserCircle} from "react-icons/hi";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
  sendAndConfirmTransaction,
  Keypair,
  clusterApiUrl,
} from "@solana/web3.js";

function useCustomReward(emoji) {
  const { reward, isAnimating } = useReward(
    "rewardId",
    "emoji",
    {
      emoji: [emoji],
      lifetime: 50,
      elementCount: 60,
      startVelocity: 60,
      zIndex: 9999,
      angle: 135,
      position: 'absolute',
    }
  );

  return { reward, isAnimating };
}


function ChatBox({ role }) {
  const { publicKey, sendTransaction, connected } = useWallet();
  const { connection } = useConnection();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const fireReward = useCustomReward("🔥");
  const giftReward = useCustomReward("🎁");
  const clapReward = useCustomReward("👏");
  const valueReward = useCustomReward("💎");
  const rejectReward = useCustomReward("❌");
  const greatReward = useCustomReward("💯");

  const sendSolAndReward = (reward) => {
    reward();
    setTimeout(sendSol, 850);
  };

  const { peerId } = useLocalPeer();
  const { sendData } = useDataMessage({
    onMessage: (payload, from, label) => {
      if (label === "chat") {
        setMessages((prev) => [...prev, { text: payload, sender: from }]);
      }
    },
  });

  const RECIPIENT_PUBLIC_KEY = new PublicKey(
    "6DvfoE1pA8C4jKhgAA28WbDpNGQiSQewua16TvTiradz"
  );
  const sendSol = async () => {
    if (!connected || !publicKey) {
      alert("Wallet not connected");
      return;
    }

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: RECIPIENT_PUBLIC_KEY,
        lamports: 1 * LAMPORTS_PER_SOL,
      })
    );

    try {
      const signature = await sendTransaction(transaction, connection, {
        timeout: 30000,
      });
      await connection.confirmTransaction(signature, "confirmed");
      console.log("Transaction successful with signature:", signature);
      // alert('Transaction successful!');
    } catch (error) {
      console.error("Error sending SOL:", error);
      // alert("Transaction successful:", error.message);
    }
  };


  const sendMessage = () => {
    sendData({
      to: "*",
      payload: text,
      label: "chat",
    });
    setText("");
  };

  return (
    <div className="flex flex-col w-full p-6">
      <div className="border-2 border-blue-400 rounded-lg flex flex-col dark:bg-transparent bg-blue-200">
        <h1 className="text-center py-3 text-2xl font-bold my-2 border-b border-blue-400 dark:text-white">
          Chat Room
        </h1>
        <div className="flex-1 p-4 border-b border-blue-400 dark:bg-transparent bg-gray-100">
          {messages.map((message, index) =>
            message.sender === peerId ? (
              <LocalMessageBubble key={index} message={message} />
            ) : (
              <RemoteMessageBubble key={index} message={message} />
            )
          )}
        </div>
        <div className="flex p-1 bg-black">
          <input
            type="text"
            className="self-end w-full bg-black text-white outline-none p-2 text-sm"
            placeholder="Type Message..."
            value={text}
            onChange={(event) => setText(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                sendMessage();
              }
            }}
          />
          <button
            onClick={() => {
              sendMessage();
            }}>
            <svg
              width="24"
              height="24"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              stroke-width="0.00024000000000000003">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.265 4.42619C1.04293 2.87167 2.6169 1.67931 4.05323 2.31397L21.8341 10.1706C23.423 10.8727 23.423 13.1273 21.8341 13.8294L4.05323 21.686C2.6169 22.3207 1.04293 21.1283 1.265 19.5738L1.99102 14.4917C2.06002 14.0087 2.41458 13.6156 2.88791 13.4972L8.87688 12L2.88791 10.5028C2.41458 10.3844 2.06002 9.99129 1.99102 9.50829L1.265 4.42619ZM21.0257 12L3.2449 4.14335L3.89484 8.69294L12.8545 10.9328C13.9654 11.2106 13.9654 12.7894 12.8545 13.0672L3.89484 15.3071L3.2449 19.8566L21.0257 12Z"
                  fill="#ffffff"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
      {role === "listen" && (
        <div className="py-4 flex flex-row gap-2 justify-center">
          <Tooltip content="Lit">
            <button
              type="button"
              onClick={()=>sendSolAndReward(fireReward.reward)}
              disabled={fireReward.isAnimating}
              className="bg-blue-500 dark:bg-blue-200 rounded-xl p-2 text-xl">
              <span id="rewardId" />🔥
            </button>
          </Tooltip>
          <Tooltip content="Gift">
          <button
            type="button"
            onClick={() => sendSolAndReward(giftReward.reward)}
            disabled={giftReward.isAnimating}
            className="bg-blue-500 dark:bg-blue-200 rounded-xl p-2 text-xl"
          >
            <span id="rewardId" />🎁
          </button>
        </Tooltip>
        <Tooltip content="Clap">
          <button
            type="button"
            onClick={() => sendSolAndReward(clapReward.reward)}
            disabled={clapReward.isAnimating}
            className="bg-blue-500 dark:bg-blue-200 rounded-xl p-2 text-xl"
          >
            <span id="rewardId" />👏
          </button>
        </Tooltip>
        <Tooltip content="Value">
          <button
            type="button"
            onClick={() => sendSolAndReward(valueReward.reward)}
            disabled={valueReward.isAnimating}
            className="bg-blue-500 dark:bg-blue-200 rounded-xl p-2 text-xl"
          >
            <span id="rewardId" />💎
          </button>
        </Tooltip>
        <Tooltip content="Reject">
          <button
            type="button"
            onClick={() => sendSolAndReward(rejectReward.reward)}
            disabled={rejectReward.isAnimating}
            className="bg-blue-500 dark:bg-blue-200 rounded-xl p-2 text-xl"
          >
            <span id="rewardId" />❌
          </button>
        </Tooltip>
        <Tooltip content="Great">
          <button
            type="button"
            onClick={() => sendSolAndReward(greatReward.reward)}
            disabled={greatReward.isAnimating}
            className="bg-blue-500 dark:bg-blue-200 rounded-xl p-2 text-xl"
          >
            <span id="rewardId" />💯
          </button>
        </Tooltip>
        </div>
      )}
    </div>
  );
}

export default ChatBox;
