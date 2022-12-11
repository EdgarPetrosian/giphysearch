import { useState, useEffect, useRef } from 'react';
import ImageItem from '../components/ImageItem';
import LoadingSpinner from '../components/LoadingSpinner';
import { getGiphsRandomDataApi } from '../services/getGifsData'

const Home = () => {
  const [giphyUrl, setGipgyUrl] = useState<string>('');
  const [loading, setLoading] = useState(false)
  const ref = useRef(true);
  const useFirstRender = () => {
    const firstRender = ref.current;
    ref.current = false;
    return firstRender;
  }

  const isFocused = useFirstRender();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getGiphsRandomDataApi();
      setGipgyUrl(data.images.original.url || '')
      setLoading(false);
    }
    const interval = setInterval(() => {
      fetchData();
    }, 15000);
    if (isFocused) {
      fetchData();
    }
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="App">
      {loading ? <LoadingSpinner /> : <ImageItem key={giphyUrl} url={giphyUrl} width={"1000px"} height={"500px"} />}
    </div>
  );
}

export default Home;
