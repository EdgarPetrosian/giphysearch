import axios from 'axios';
export const getRandomGiphy = async () => {
  try {
    const { data: { data: data } } = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=0qc40Qx0l2GXQVvCxMDxrpNAV2qtmMmp&tag=&rating=pg`);
    return data.images.original
  } catch (error) {
    console.error(error);
  }
  return null
}