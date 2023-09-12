import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import heroImage from "/src/assets/images/hero3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Winery from "/src/assets/images/Winery.png";
import Beach from "/src/assets/images/Beach.png";
import Nature from "/src/assets/images/Nature.png";
import Restaurant from "/src/assets/images/Restaurant.png";
import Santuranio from "/src/assets/images/Santuranio.png";
import Sport from "/src/assets/images/Sport.png";

function Home() {
  return (

    <div className="min-h-full">
       <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      showThumbs={false}
    >
      <div className="min-h-full">
        <img src={Nature} alt="Image 1" />
      </div>
      <div className="min-h-full">
        <img src={Sport} alt="Image 2" />
      </div>
      <div className="min-h-full">
        <img src={Beach} alt="Image 3" />
      </div>
      {/* Add more images as needed */}
    </Carousel>
      {/* <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(/src/assets/images/hero3.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
            {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
            {/* <button className="btn btn-primary">BOOK NOW</button> */}
          {/* </div>
        </div>
      // </div> */} 

      <div className="sm:width-full lg:m-7 ">
        <h2 className="m-4 font-bold text-3xl">Welcome to Casa Ripa</h2>
        <h4 className="font-custom text-justify m-4">
          Holiday Home @ Cupramontana, Le Marche, Italy
        </h4>
        <p className="font-custom text-justify m-4">
          In the heart of Le Marche region our recently renovated and restored
          farmhouse sits just below the Hilltop of Cupramontana. From here you
          can relax and take in the breathtaking and panoramic views over the
          surrounding countryside. <br/>
         
            <b>More</b>
            <FontAwesomeIcon icon={faCaretRight} />
          
        </p>
        <p className="font-custom text-justify m-4">
          We hope to welcome you to this paradise!
        </p>
        <h2 className="m-4 font-bold text-lg">ENJOY OUR PARADISE</h2>
        <div className="flex justify-evenly flex-col lg:flex-row">
          <div>
            <img
              src={Winery}
              alt="Casa ripa winery image"
              className="w-72 m-4 rounded-lg shadow-lg mb-4"
            />
            <h2 className="m-4 text-lg font-bold">Winery</h2>
            <p className="font-custom w-72 text-justify p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              porttitor accumsan tincidunt. Proin sagittis nisl in tortor
              hendrerit tincidunt.
              <br/>
         
         <b>More</b>
                <FontAwesomeIcon icon={faCaretRight} />
              
            </p>
          </div>
          <div>
            <img
              src={Beach}
              alt="Casa ripa beach image"
              className="w-72 m-4 rounded-lg shadow-lg mb-4"
            />
            <h2 className="m-4 text-lg font-bold">Beach</h2>
            <p className="font-custom w-72 text-justify p-4">
              The Adriatic coast is about 35km away and there are several
              beaches with umbrellas and sunbeds.
              <br/>
         
         <b>More</b>
                <FontAwesomeIcon icon={faCaretRight} />
             
            </p>
          </div>
          <div>
            <img
              src={Sport}
              alt="Casa ripa sport image"
              className="w-72 m-4 rounded-lg shadow-lg mb-4"
            />
            <h2 className="m-4 text-lg font-bold">Sport and Activities</h2>
            <p className="font-custom w-72 text-justify p-4">
              Discover the range of sports available to help you relax and keep
              fit around CASA RIPA
              <br/>
         
         <b>More</b>
                <FontAwesomeIcon icon={faCaretRight} />
             
            </p>
          </div>
        </div>
        <div className="flex justify-evenly flex-col lg:flex-row">
          <div>
            <img
              src={Santuranio}
              alt="Casa ripa santuranio image"
              className="w-72 m-4 rounded-lg shadow-lg mb-4"
            />
            <h2 className="m-4 text-lg font-bold">
              Santuario Madonna di Frasassi
            </h2>
            <p className="font-custom w-72 text-justify p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              porttitor accumsan tincidunt. Proin sagittis nisl in tortor
              hendrerit tincidunt.
              <br/>
         
         <b>More</b>
                <FontAwesomeIcon icon={faCaretRight} />
             
            </p>
          </div>
          <div>
            <img
              src={Nature}
              alt="Casa ripa nature image"
              className="w-72 m-4 rounded-lg shadow-lg mb-4"
            />
            <h2 className="m-4 text-lg font-bold">Near by Cupramontana</h2>
            <p className="font-custom w-72 text-justify p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              porttitor accumsan tincidunt. Proin sagittis nisl in tortor
              hendrerit tincidunt.
              <br/>
         
         <b>More</b>
                <FontAwesomeIcon icon={faCaretRight} />
             
            </p>
          </div>
          <div>
            <img
              src={Restaurant}
              alt="Casa ripa restaurant image"
              className="w-72 m-4 rounded-lg shadow-lg mb-4"
            />
            <h2 className="m-4 text-lg font-bold">Restaurants and Shops</h2>
            <p className="font-custom w-72 text-justify p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              porttitor accumsan tincidunt. Proin sagittis nisl in tortor
              hendrerit tincidunt.
              <br/>
         
         <b>More</b>
                <FontAwesomeIcon icon={faCaretRight} />
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
