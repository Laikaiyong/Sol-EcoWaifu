"use client";
import { HuddleClient, HuddleProvider } from "@huddle01/react";

const HuddleContext = ({ children }) => {
  const huddleClient = new HuddleClient({
    projectId: process.env.NEXT_PUBLIC_HUDDLE_PROJECT_ID,
  });

  return <HuddleProvider client={huddleClient}>{children}</HuddleProvider>;
};

export default HuddleContext;
