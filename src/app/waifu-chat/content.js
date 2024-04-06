"use client";

import React, { useState, useEffect } from "react";
import { ProductCardList } from "../../component/Products/ProductCardList";
import { CharacterRoom, getQuotedTexts } from "@virtual-protocol/react-virtual-ai";

export const HomePageContent = function () {
    const [messages, setMessages] = useState([]);
  return (
    <>
    <CharacterRoom
      userName="User"
      virtualName="Waifu"
      virtualId={1}
      metadata={{
        apiKey: process.env.NEXT_PUBLIC_VIRTUAL_IO_API_KEY,
        apiSecret: process.env.NEXT_PUBLIC_VIRTUAL_IO_API_SECRET,
        userUid: "1",
        userName: "User",
      }}
      onUserMessageCreated={async (v) => {
        setMessages((prev) => [...prev, "You: " + v.text]);
      }}
      onVirtualMessageCreated={async (v) => {
        setMessages((prev) => [...prev, "Waifu: " + getQuotedTexts(v.text ?? "").join(" ")]);
      }}
    //   configs={{
    //     skipTTS: true
    //   }}
    />
    <div className="absolute top-16 left-57 w-full h-[50%] gap-2">
    {messages.map((m, index) => <p className="bg-stone-100 bg-opacity-40 inline-block p-1 m-1"  key={index + m}>{m}</p>)}
    </div>
    </>
  );
};
