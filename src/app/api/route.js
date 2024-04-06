// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { AccessToken, Role } from '@huddle01/server-sdk/auth';
import { cookies } from 'next/headers'

export async function GET(
  req,
) {
  const roomId = req.nextUrl.searchParams.get("roomId");
  const listen = req.nextUrl.searchParams.get("listen");
  const accessToken = new AccessToken({
    apiKey: process.env.HUDDLE_API_KEY,
    roomId: roomId,
    role: Role.HOST,
    permissions: {
      admin: true,
      canConsume: true,
      canProduce: true,
      canProduceSources: {
        cam: true,
        mic: true,
        screen: true,
      },
      canRecvData: true,
      canSendData: true,
      canUpdateMetadata: true,
    }
  });

  const token = await accessToken.toJwt();

  if (listen == "true")
  {

    cookies().set({
      name: 'huddle-listen-jwt',
      value: token
    })
  } else {

    cookies().set({
      name: 'huddle-jwt',
      value: token
    })
  }

  return Response.json(token);
}
