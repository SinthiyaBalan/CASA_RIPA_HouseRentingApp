import React from 'react'
import ImageGallery from 'react-image-gallery';
import { images } from '../data/gallery-image.js';
import './Gallery.css';
import "react-image-gallery/styles/css/image-gallery.css";

function Gallery() {

  return (
    <div className="gallery-container">
      {/* <header>
        <div className="header-wrapper">
          <h2>Photo Gallery</h2>
        </div>
      </header> */}
      <div className="image-gallery-wrapper">
        <ImageGallery items={images} 
          autoPlay={false}
          showThumbnails={true} /> 
      </div>
    </div>
  )
}

export default Gallery