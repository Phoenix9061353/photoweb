import React from 'react';

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div className='search'>
      <input onChange={inputHandler} type='text' placeholder='Photo Type' />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
