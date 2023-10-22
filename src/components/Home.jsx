import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Winery from "/src/assets/images/Winery.png";
import Beach from "/src/assets/images/Beach.png";
import Nature from "/src/assets/images/Nature.png";
import Restaurant from "/src/assets/images/Restaurant.png";
import Santuranio from "/src/assets/images/Santuranio.png";
import Sport from "/src/assets/images/Sport.png";

import Contact from '/src/components/Contact';


import Review from "./Review";
import { Link } from "react-router-dom";
import ExploreSurroundings from "./ExploreSurroundings";


function Home() {
  const top = () => {
    window.scrollTo(0, 0);
  };
  function ReadMore({ children, maxCharacterCount = 150 }) {
    const text = children;
    const [isTruncated, setIsTruncated] = useState(true);
    const resultString = isTruncated ? text.slice(0, 150) : text;
    function toggleIsTruncated() {
      setIsTruncated(!isTruncated);
    }
    return (
      <p className="has-text-left">
        {resultString}
        <span onClick={toggleIsTruncated} className="btn m-4 btn-info btn-xs">
          {isTruncated ? "Read More" : "Read Less"}
        </span>
      </p>
    );
  }

  return (
    <div>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={false}
        interval={5000}
        showThumbs={false}
        style={{ height: "400px" }}
      >
        <div>
          <img src={Nature} alt="Image 1" style={{ height: "100%",width :"95%" } } />
        </div>
        <div className="min-h-full">
          <img src={Sport} alt="Image 2" style={{ height: "100%",width :"95%" }} />
        </div>
        <div className="min-h-full">
          <img src={Beach} alt="Image 3" style={{ height: "100%",width :"95%"}} />
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

      <div>
        <h2 className="m-6 font-bold text-lg">Welcome to Casa Ripa</h2>
        <h4 className="font-custom text-justify m-6">
          Holiday Home @ Cupramontana, Le Marche, Italy
        </h4>

        <p className="m-6 font-custom text-justify ">
          <ReadMore>
            In the heart of Le Marche region our recently renovated and restored
            farmhouse sits just below the Hilltop of Cupramontana. From here you
            can relax and take in the breathtaking and panoramic views over the
            surrounding countryside. We hope to welcome you to this paradise!
          </ReadMore>
        </p>

        <h2 className="m-6 font-bold text-lg">ENJOY OUR PARADISE</h2>

      <div className="flex justify-evenly flex-col lg:flex-row">
          
        <article className="beach">
            <img
              src={Beach}
              alt="Casa ripa beach image"
              className="w-72 m-6 rounded-lg shadow-lg mb-4"
            />
            <h2 className="m-6 text-lg font-bold">Beach</h2>
            <p className="font-custom w-72 text-justify ml-4 p-2">
              The Adriatic coast is about 35km away and there are several
              beaches with umbrellas and sunbeds.
              <br />
              <b>More</b>
              <FontAwesomeIcon icon={faCaretRight} />
            </p>
          </article>

          <article className="places to visit">
            <img
              src={Santuranio}
              alt="Casa ripa santuranio image"
              className="w-72 m-4 rounded-lg shadow-lg mb-4"
            />
            <h2 className="m-6 text-lg font-bold">
              Places to visit
            </h2>
            <p className="font-custom w-72 text-justify ml-4 p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              porttitor accumsan tincidunt. Proin sagittis nisl in tortor.
              <br />
              <b>More</b>
              <FontAwesomeIcon icon={faCaretRight} />
            </p>
          </article>

          <article className="Nature and activities">
            <img
              src={Sport}
              alt="Casa ripa sport image"
              className="w-72 m-6 rounded-lg shadow-lg mb-4"
            />
            <h2 className="m-6 text-lg font-bold">Nature and Activities</h2>
            <p className="font-custom w-72 text-justify ml-4 p-2">
              Discover the range of sports available to help you relax and keep
              fit around CASA RIPA
              <br />
              <b>More</b>
              <FontAwesomeIcon icon={faCaretRight} />
            </p>
          </article>
        </div>

        <div className="flex justify-evenly flex-col lg:flex-row">
          <article className="winery">
            <Link to="/ExploreSurroundings">
              <img
                src={Winery}
                alt="Casa ripa winery image"
                className="w-72 m-6 rounded-lg shadow-lg mb-4"
              />
            </Link>
            <h2 className="m-6 text-lg font-bold">Winery</h2>
            <p className="font-custom w-72 text-justify ml-4 p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              porttitor accumsan tincidunt. 
              <br />
              <b>More</b>
              <FontAwesomeIcon icon={faCaretRight} />
            </p>
          </article>
          
         <article className="Nature">
            <img
              src={Nature}
              alt="Casa ripa nature image"
              className="w-72 m-6 rounded-lg shadow-lg mb-4"
            />
            <h2 className="m-6 text-lg font-bold">Near by Cupramontana</h2>
            <p className="font-custom w-72 text-justify ml-4 p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              porttitor accumsan tincidunt. Proin sagittis nisl in tortor
              hendrerit tincidunt.
              <br />
              <b>More</b>
              <FontAwesomeIcon icon={faCaretRight} />
            </p>
          </article> 

          <article className="restaurant">
            <img
              src={Restaurant}
              alt="Casa ripa restaurant image"
              className="w-72 m-6 rounded-lg shadow-lg mb-4"
            />
            <h2 className="m-6 text-lg font-bold">Restaurants and Shops</h2>
            <p className="font-custom w-72 text-justify ml-4 p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              porttitor accumsan tincidunt. Proin sagittis nisl in tortor
              hendrerit tincidunt.
              <br />
              <b>More</b>
              <FontAwesomeIcon icon={faCaretRight} />
            </p>
          </article>
        </div>
      </div>



      <Review />

      <button onClick={top} className="btn btn-sm m-2 btn-neutral">
        Top
      </button>

    </div>



  );
}
export default Home;
