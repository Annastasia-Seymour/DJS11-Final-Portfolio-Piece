import React from "react";
import Footer from "../../components/Footer/Footer";
import FetchDataPreview from "../../components/DataFetch/FetchData";

function LandingPage () {
 

  return (
    <div>

      <div className="content-wrapper">
          <div className="trending-div"> 
          <FetchDataPreview />
      </div>
      <Footer />
      </div>
    </div>
  );
};



export default LandingPage