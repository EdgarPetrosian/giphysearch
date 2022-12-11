import { useState, useEffect } from 'react';
import ImageItem from '../components/ImageItem';
import LoadingSpinner from '../components/LoadingSpinner';
import getGifsData from '../services/getGifsData';
import { IImageItem } from "../types";
import useDebounce from "../hooks/useDebounce";

const Search = () => {
  const [search, setSearch] = useState<string>('Christmass')
  const [giphsData, setGipgsData] = useState([]);
  const [loading, setLoading] = useState(false)

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const giphObject = await getGifsData(debouncedSearch);
      setGipgsData(giphObject)
      setLoading(false);
    }
    if (debouncedSearch) fetchData();
  }, [debouncedSearch])

  const listItems = giphsData.map((data): IImageItem => <ImageItem key={data.images.original.hash} url={data.images.original.url} width={"500px"} height={"300px"} />)

  return (
    <div className={"container"}>
      <input
        className="input"
        type="search"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="search">
        {loading ? <LoadingSpinner /> : listItems}
      </div>
    </div>
  );
}

export default Search;
