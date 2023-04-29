import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import Picture from '../components/Picture';
import { v4 as uuidv4 } from 'uuid';
import { AUTH } from '../Auth';

const Homepage = () => {
  const [input, setInput] = useState('');
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [cSearch, setCSearch] = useState('');
  const auth = AUTH;
  const initialURL = 'https://api.pexels.com/v1/curated?page=1&per_page=15';
  const searchURL = `https://api.pexels.com/v1/search?query=${cSearch}&per_page=15&page=1`;

  //fetch data from pexels api
  const search = async (url) => {
    //讓Load More的page數維持正確（這裡default是1）
    setPage(2);
    const dataFetch = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: auth,
      },
    });
    const parseData = await dataFetch.json();
    setData(parseData.photos);
  };

  //Load more picture(if needed)
  const loadMorePic = async () => {
    let newURL;
    const btnLoad = document.querySelector('.btn--load');
    btnLoad.innerHTML = 'Loading...';
    btnLoad.setAttribute('disabled', true);
    if (cSearch === '') {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${cSearch}&per_page=15&page=${page}`;
    }
    setPage(page + 1);
    const dataFetch = await fetch(newURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: auth,
      },
    });
    const parseData = await dataFetch.json();
    //將後續的Pic data與之前的串接
    setData(data.concat(parseData.photos));
    btnLoad.innerHTML = 'Load More';
    btnLoad.removeAttribute('disabled');
  };

  //use useEffect to display default page
  useEffect(() => {
    search(initialURL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (cSearch !== '') {
      search(searchURL);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cSearch]);

  return (
    <div className='main-container'>
      <Search
        search={() => {
          setCSearch(input);
        }}
        setInput={setInput}
      />
      <div className='pictures'>
        {data &&
          data.map((d) => {
            return <Picture data={d} key={uuidv4()} />;
          })}
      </div>
      <div className='morePicture'>
        <button className='btn--load' onClick={loadMorePic}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Homepage;
