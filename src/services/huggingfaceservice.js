import { HfInference } from "@huggingface/inference";

export const generateWaifuPic= async (setWaifuPic) => {
    try {
        
        const hf = new HfInference(process.env.NEXT_PUBLIC_HUGGING_FACE_API);
        const index =Math.floor(Math.random() * 10);

        const color = [
          "black", "red", "blue", "green", "brown", "yellow", "white", "grey", "pink", "purple"
        ]
        const topAttire = [
          "cap", "beanie", "hat", "baseball cap", "cowboy hat", "panama", "cloche", "ivy cap", "turban", "top"
        ]

          // const text = await hf.textGeneration({
          //   model: 'gpt2',
          //   inputs: 'The answer to one common color is '
          // })

          // const color = text.generated_text.split('The answer to one common color is ')[1].split(" ")[0]

          // console.log(color );
        const item = await hf.textToImage({
          inputs: color[index] + ' hair, 1 girl, ' + topAttire[index] + ', masterpiece, best quality, outdoors',
          // model: 'stabilityai/stable-diffusion-2',
          model: 'hakurei/waifu-diffusion',
          // parameters: {
          //   negative_prompt: 'blurry',
          // }
        })
        const img = URL.createObjectURL(item);
        setWaifuPic(img); // after component is mount, src will change
      } catch (error) {
        console.error('Error fetching data:', error);
      }
};
