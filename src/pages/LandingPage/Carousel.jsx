import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'


const CarouselComponent = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://via.placeholder.com/800x400?text=First+Slide" className="custom-image" alt="First Slide" />
         
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x400?text=Second+Slide" className="custom-image" alt="Second Slide" />
          
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x400?text=Third+Slide" className="custom-image" alt="Third Slide" />
         
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