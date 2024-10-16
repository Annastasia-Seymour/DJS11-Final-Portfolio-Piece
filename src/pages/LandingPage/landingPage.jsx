import React, { useState } from "react";
import Header from '../../components/Header/Header.jsx';
import Footer from "../../components/Footer/Footer";
import FetchDataPreview from "../../components/DataFetch/FetchData";
import { Carousel } from "react-bootstrap";

function LandingPage () {
 

  return (
    <div>

      <div className="content-wrapper">
        <div className="preview-div">
          {/* Placeholder content for div 1 */}
          <h2>This is where the show preview will go</h2> 
                  
        </div>
        <div className="trending-div">
          {/* Placeholder content for div 2 */}
          <FetchDataPreview />
        </div>
      </div>
      <Footer />
      
    </div>
  );
};



export default LandingPage