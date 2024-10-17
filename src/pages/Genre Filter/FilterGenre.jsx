import React from 'react';
import FetchFilter from '../../components/DataFetch/FetchFilter';
import Navbar from '../../components/Navigation/Navigation';

function FilterByGenrePage () {
    return (
    <div>
     <Navbar />
      <FetchFilter />
      <h1>I am the Filter Page</h1>
    </div>
  );
};

export default FilterByGenrePage;// this is he search page

