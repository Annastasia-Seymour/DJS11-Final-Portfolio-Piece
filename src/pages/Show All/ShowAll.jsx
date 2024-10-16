import React from "react";
import FetchAllData from "../../components/DataFetch/FetchAllData"; // Adjust the path as needed
import './ShowAll.css'; // Create a CSS file for styling

const ShowAllPreview = () => {
  return (
    <div className="show-all-page">
      <FetchAllData />
    </div>
  );
};

export default ShowAllPreview;
