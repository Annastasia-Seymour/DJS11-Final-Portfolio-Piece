import React from "react";
import Episodes from "../../components/DataFetch/FetchSeason";
import Footer from "../../components/Footer/Footer";


function ShowDetails(){
    return(
        <div>
            <Episodes />
            <Footer />
        </div>
    );
}

export default ShowDetails;