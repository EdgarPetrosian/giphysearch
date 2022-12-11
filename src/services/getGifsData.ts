import React from 'react';
import axios from 'axios';
// Requesting GIFs data by search query
const getGifsData = async (query: React.SetStateAction<string | null>) => { 
  try {
    const {data:res} = await axios.get( `https://api.giphy.com/v1/gifs/search?api_key=0qc40Qx0l2GXQVvCxMDxrpNAV2qtmMmp&q=${query}&limit=25&offset=0&rating=pg&lang=en`,);
    const {meta, data} = res;
    if (meta?.status === 200) {
      return data;
    }
  } catch (error) {
    console.error(error);
  }
  return [];
};

export default getGifsData;