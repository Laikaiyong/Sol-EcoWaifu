import { HfInference } from '@huggingface/inference'

export const generateWaifuPic= async (setWaifuPic) => {
    try {

        const hf = new HfInference(process.env.NEXT_PUBLIC_HUGGING_FACE_API);
        const item = await hf.textToImage({
          inputs: 'masterpiece, best quality, 1girl, purple hair, sweater, looking at viewer, upper body, beanie, outdoors, watercolor, night, turtleneck',
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