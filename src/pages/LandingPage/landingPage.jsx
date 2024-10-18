import React from "react";
import FetchRandomPreview from "../../components/DataFetch/FetchData";

function LandingPage () {
 

  return (
    <div>

      <div className="content-wrapper">
          <div className="trending-div"> 
          <FetchRandomPreview />
      </div>
    
      </div>
    </div>
  );
};



export default LandingPage