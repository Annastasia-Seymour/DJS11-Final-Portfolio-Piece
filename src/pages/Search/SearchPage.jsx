import React from 'react';
import FetchFilter from '../../components/DataFetch/FetchFilter';
import Navbar from '../../components/Navigation/Navigation';

function SearchPage () {
  

  return (
    <div>
     <Navbar />
      <FetchFilter />
      <h1>I am the SearchPage</h1>
    </div>
  );
};

export default SearchPage;// this is he search page

