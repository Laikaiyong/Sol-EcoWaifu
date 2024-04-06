import { HfInference } from '@huggingface/inference'

export const generateWaifuPic= async (setWaifuPic) => {
    try {
        
        const hf = new HfInference(process.env.NEXT_PUBLIC_HUGGING_FACE_API);

          // const text = await hf.textGeneration({
          //   model: 'gpt2',
          //   inputs: 'The answer to one common color is '
          // })

          // const color = text.generated_text.split('The answer to one common color is ')[1].split(" ")[0]

          // console.log(color );
        const item = await hf.textToImage({
          inputs: 'masterpiece, best quality, 1girl, blue hair',
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

// export const generateWaifuPic= async (setWaifuPic) => {
//     try {

//         const hf = new HfInference(process.env.NEXT_PUBLIC_HUGGING_FACE_API);
//         const item = await hf.textToImage({
//           inputs: 'masterpiece, best quality, 1girl, purple hair, sweater, looking at viewer, upper body, beanie, outdoors, watercolor, night, turtleneck',
//           // model: 'stabilityai/stable-diffusion-2',
//           model: 'hakurei/waifu-diffusion',
//           // parameters: {
//           //   negative_prompt: 'blurry',
//           // }
//         })
//         const img = URL.createObjectURL(item);
//         setWaifuPic(img); // after component is mount, src will change
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
// };