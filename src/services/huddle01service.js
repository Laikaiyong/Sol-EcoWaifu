import { AccessToken, Role } from '@huddle01/server-sdk/auth';

export const createRoom = async () => {
  const response = await fetch("https://api.huddle01.com/api/v1/create-room", {
    method: "POST",
    body: JSON.stringify({
      title: "Huddle01 Eco Product Selling",
    }),
    headers: {
      "Content-type": "application/json",
      "x-api-key": process.env.HUDDLE_API_KEY,
    },
    cache: "no-cache",
  });
 
  const data = await response.json();
  const roomId = data.data.roomId;

  return roomId;
};