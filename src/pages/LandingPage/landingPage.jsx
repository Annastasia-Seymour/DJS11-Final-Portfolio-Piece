import React from "react";
import Footer from "../../components/Footer/Footer";
import FetchRandomPreview from "../../components/DataFetch/FetchData";

function LandingPage () {
 

  return (
    <div>

      <div className="content-wrapper">
          <div className="trending-div"> 
          <FetchRandomPreview />
      </div>
      <Footer />
      </div>
    </div>
  );
};



export default LandingPage