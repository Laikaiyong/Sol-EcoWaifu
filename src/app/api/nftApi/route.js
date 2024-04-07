import { interactForNFT } from "../../../services/solanaservice";

export async function POST(req) {
  const { imgUrl } = await req.json();

  try {
    const response = await fetch(imgUrl);
    if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    const buffer = await response.arrayBuffer(); // Get the response body as a Buffer

    const imgUri = await interactForNFT(buffer, "waifu");

    return new Response(
      JSON.stringify({
        status: 200,
        body: imgUri,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    // Handle any errors that occur during image upload
    console.error("Error uploading image:", error);
    return new Response({
      status: 500,
      body: { error: "Internal Server Error" },
    });
  }
}
