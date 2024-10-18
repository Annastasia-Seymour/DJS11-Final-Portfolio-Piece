import React from "react";
import FetchRandomPreview from "../../components/DataFetch/FetchData";
import './landingPage.css'

function LandingPage () {
 

  return (
    

      <div className="content-wrapper">
          <div className="trending-div"> 
          <FetchRandomPreview />
      </div>
    
      </div>
  
  );
};



export default LandingPage