import React from "react";
import './ShowAll.css';
import FetchAllData from "../../components/DataFetch/FetchAllData";
import './ShowAll.css'; // Create a CSS file for styling

function ShowAllPreview () {
  return(
    <div> 
      <h1>
       I am the Show all page!
      </h1>
      <FetchAllData />
    </div>
  );

}
export default ShowAllPreview;
