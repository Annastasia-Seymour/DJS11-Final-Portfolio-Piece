import React, { useState } from "react";
import Header from '../../components/Header/Header.jsx';
import Footer from "../../components/Footer/Footer";
import FetchDataPreview from "../../components/DataFetch/FetchData";

function LandingPage () {
  const [shows , setShows] = useState ([]);
  return (
    <div>
     {/* <Header /> */}
      <div className="content-wrapper">
        <div className="preview-div">
          {/* Placeholder content for div 1 */}
          <h2>This is where the show preview will go</h2> 
         
        </div>
        <div className="div2">
          {/* Placeholder content for div 2 */}
          <h2>Trending now</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};



export default LandingPage