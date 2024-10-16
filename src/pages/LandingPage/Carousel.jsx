import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import FetchDataPreview from '../../components/DataFetch/FetchData';

const CarouselComponent = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://via.placeholder.com/800x400?text=First+Slide" className="d-block w-50" alt="First Slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>First Slide Label</h5>
            <p>Description for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x400?text=Second+Slide" className="d-block w-50" alt="Second Slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second Slide Label</h5>
            <p>Description for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x400?text=Third+Slide" className="d-block w-50" alt="Third Slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third Slide Label</h5>
            <p>Description for the third slide.</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default CarouselComponent;