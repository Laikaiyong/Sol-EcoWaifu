import { getCookie} from 'cookies-next'
import ChatBox from "../../../component/ChatBox/ChatBox";
import RemotePeer from "../../../component/RemotePeer/RemotePeer";
import {
  useLocalAudio,
  useLocalPeer,
  useLocalScreenShare,
  useLocalVideo,
  usePeerIds,
  useRoom,
} from "@huddle01/react/hooks";
import { AccessToken, Role } from "@huddle01/server-sdk/auth";
import { Inter } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";
import { createRoom } from "../../../services/huddle01service";
const inter = Inter({ subsets: ["latin"] });

export const HostBlock = () => {
    const [displayName, setDisplayName] = useState("");
  const [room, setRoom] = useState("");
  // const token = await getToken(room);
  const videoRef = useRef(null);
  const screenRef = useRef(null);
  
  
  const { joinRoom, state } = useRoom({
    onJoin: (room) => {
      console.log("onJoin", room);
      updateMetadata({ displayName });
    },
    onPeerJoin: (peer) => {
      console.log("onPeerJoin", peer);
    },
  });
  const { enableVideo, isVideoOn, stream, disableVideo } = useLocalVideo();
  const { enableAudio, disableAudio, isAudioOn } = useLocalAudio();
  const { startScreenShare, stopScreenShare, shareStream } =
  useLocalScreenShare();
  const { updateMetadata } = useLocalPeer();
  const { peerIds } = usePeerIds();

    return (
        <main
        className={`flex min-h-screen flex-col items-center p-4 ${inter.className}`}>
          <p className="dark:text-white text-black">Room ID: {room}</p>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:text-white dark:border-white dark: border-2 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <code className="font-mono font-bold">{state}</code>
          </p>
          <div className="fixed bottom-0 left-0 flex flex-col h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            {state === "idle" && (
              <>
                <input
                  disabled={state !== "idle"}
                  placeholder="Display Name"
                  type="text"
                  className="border-2 border-blue-400 rounded-lg p-2 mx-2 bg-black text-white"
                  value={displayName}
                  onChange={(event) => setDisplayName(event.target.value)}
                />

                <button
                  disabled={!displayName}
                  type="button"
                  className="bg-blue-500 p-2 mx-2 rounded-lg"
                  onClick={async () => {
                    const room = await createRoom();
                    setRoom(room);
                    await fetch(
                      `/api?roomId=${room}`
                    )

                    const token = getCookie('huddle-jwt')?.toString() ?? "";
                    await joinRoom({
                      roomId: room,
                      token,
                    });
                  }}>
                  Join Room
                </button>
              </>
            )}

            {state === "connected" && (
              <div className="flex flex-row py-3">
                <button
                  className="bg-blue-500 p-2 mx-2 rounded-lg"
                  onClick={async () => {
                    isVideoOn ? await disableVideo() : await enableVideo();
                  }}>
                  {isVideoOn ? "Disable Video" : "Enable Video"}
                </button>
                <button
                  className="bg-blue-500 p-2 mx-2 rounded-lg"
                  onClick={async () => {
                    isAudioOn ? await disableAudio() : await enableAudio();
                  }}>
                  {isAudioOn ? "Disable Audio" : "Enable Audio"}
                </button>
                <button
                  className="bg-blue-500 p-2 mx-2 rounded-lg"
                  onClick={async () => {
                    shareStream
                      ? await stopScreenShare()
                      : await startScreenShare();
                    }}>
                  {shareStream ? "Disable Screen" : "Enable Screen"}
                </button>
              </div>
            )}

            {state === "connected" && <ChatBox role="host"/>}
          </div>
        </div>

        <div className="w-full mt-8 flex gap-4 justify-between items-stretch">
          <div className="flex-1 justify-between items-center flex flex-col">
            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
              <div className="relative flex gap-2">
                {isVideoOn && (
                  <div className="w-1/2 mx-auto border-2 rounded-xl border-blue-400">
                    <video
                      ref={videoRef}
                      className="aspect-video rounded-xl"
                      autoPlay
                      muted
                    />
                  </div>
                )}
                {shareStream && (
                  <div className="w-1/2 mx-auto border-2 rounded-xl border-blue-400">
                    <video
                      ref={screenRef}
                      className="aspect-video rounded-xl"
                      autoPlay
                      muted
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 mb-32 grid gap-2 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
              {peerIds.map((peerId) =>
                peerId ? <RemotePeer key={peerId} peerId={peerId} /> : null
              )}
            </div>
          </div>
        </div>
      </main>
    )
}