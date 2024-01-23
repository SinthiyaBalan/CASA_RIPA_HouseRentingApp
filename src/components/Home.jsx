import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Contact from '/src/components/Contact';
import Review from "./Review";
import { Link } from "react-router-dom";
import ExploreSurroundings from "./ExploreSurroundings";
import './Home.css';


function Home() {

  const [showBtn, setShowBtn] = useState("myBtn none");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowBtn("myBtn");
    } else {
      setShowBtn("none");
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
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
        <span onClick={toggleIsTruncated} style={{ backgroundColor: "#76a745"}} className="btn m-4 btn-info btn-xs">
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
        // style={{ height: "200px" }}
      >
       
        <div className="min-h-full">
          <img src={`https://ik.imagekit.io/Casaripadummy/Outside&Header%20Homepage/IMG_1663.jpeg?updatedAt=1695976723920`} alt="Image 1" style={{ height: "80%",width :"95%" } } />
        </div>
        <div className="min-h-full">
          <img src={`https://ik.imagekit.io/Casaripadummy/Outside&Header%20Homepage/IMG_7529.jpeg?updatedAt=1695976723184`} alt="Image 2" style={{ height: "80%",width :"95%" }} />
        </div>
        <div className="min-h-full">
          <img src={`https://ik.imagekit.io/Casaripadummy/Pool/IMG_8176.jpeg?updatedAt=1700848180088`} alt="Image 3" style={{ height: "80%",width :"95%"}} />
        </div>
        <div className="min-h-full">
          <img src={`https://ik.imagekit.io/Casaripadummy/Outside&Header%20Homepage/2013-05-20-09.36.jpeg?updatedAt=1695976723039`} alt="Image 3" style={{ height: "100%",width :"95%"}} />
        </div>
        {/* Add more images as needed */}
      </Carousel>

      <div>
        <h2 className="m-4 font-bold text-xl">Welcome to Casa Ripa</h2>
        <h4 className="font-custom text-justify text-lg m-4">
          Holiday Home @ Cupramontana, Le Marche, Italy.
        </h4>

        <p className="m-4 font-custom text-justify ">
        
            In the heart of Le Marche region our recently renovated and restored
            farmhouse sits just below the Hilltop of Cupramontana. <ReadMore>From here you
            can relax and take in the breathtaking and panoramic views over the
            surrounding countryside.
            The region of Le Marche is a beautiful hilly and mountainous region and 
            still relatively undiscovered by tourists, but yet it is only 30 minutes 
            away from Ancona Airport. Here you can spend your holiday without stress 
            and enjoy everything the region has to offer, from the wonderful food and 
            famous Verdicchio wine, the warmth and friendliness of the people, 
            the culture, nature and fabulous blue-flag beaches along the Adriatic Coast.
            We hope to welcome you to this paradise!
          </ReadMore>
        </p>

        <h2 className="m-4 font-bold text-lg">ENJOY OUR PARADISE</h2>

      <div className="flex justify-evenly flex-col lg:flex-row">
          
        <article className="beach">
        <Link to="/ExploreSurroundings" target="_top">
            <img
              src={'https://ik.imagekit.io/Casaripadummy/Beaches/IMG_3394.jpeg?updatedAt=1695976469464'}
              alt="Casa ripa beach image"
              target="_top"
              className="w-72 h-44 m-6 rounded-lg shadow-lg mb-4"
            />
         </Link>
            <h2 className="m-6 text-lg font-bold">Beach</h2>
        </article>

          <article className="places to visit">
          <Link to="/ExploreSurroundings" target="_top">
            <img
              src={`https://ik.imagekit.io/Casaripadummy/Explore%20Surrounding%20images/Santuranio.png?updatedAt=1705915322248`}
              alt="Casa ripa santuranio image"
              className="w-72 h-44 m-6 rounded-lg shadow-lg mb-4"
            />
           </Link>
            <h2 className="m-6 text-lg font-bold">
              Places to visit
            </h2>
          </article>

          <article className="Nature and activities">
          <Link to="/ExploreSurroundings" target="_top">
            <img
              src={`https://ik.imagekit.io/Casaripadummy/Explore%20Surrounding%20images/Sport.png?updatedAt=1705915322224`}
              alt="Casa ripa sport image"
              className="w-72 h-44 m-6 rounded-lg shadow-lg mb-4"
            />
           </Link>
            <h2 className="m-6 text-lg font-bold">Nature and Activities</h2>
          </article>
        </div>

        <div className="flex justify-evenly flex-col lg:flex-row">
          <article className="winery">
            <Link to="/ExploreSurroundings" target="_top">
              <img
                src={`https://ik.imagekit.io/Casaripadummy/Explore%20Surrounding%20images/Winery.png?updatedAt=1705922079954`}
                alt="Casa ripa winery image"
                target="_top"
                className="w-72 h-44 m-6 rounded-lg shadow-lg mb-4"
              />
            </Link>
            <h2 className="m-6 text-lg font-bold">Winery</h2>
          </article>
          
         <article className="Nature">
         <Link to="/ExploreSurroundings" target="_top">
            <img
              src={`https://ik.imagekit.io/Casaripadummy/Explore%20Surrounding%20images/cupromonta.jpg?updatedAt=1705918192589`}
              alt="Casa ripa nature image"
              className="w-72 h-44 m-6 rounded-lg shadow-lg mb-4"
            />
           </Link>
            <h2 className="m-6 text-lg font-bold">Near by Cupramontana</h2>
         </article> 

          <article className="restaurant">
          <Link to="/ExploreSurroundings">
            <img
              src={`https://ik.imagekit.io/Casaripadummy/Explore%20Surrounding%20images/Restaurant.png?updatedAt=1705915322240`}
              alt="Casa ripa restaurant image"
              className="w-72 h-44 m-6 rounded-lg shadow-lg mb-4"
            />
          </Link>
            <h2 className="m-6 text-lg font-bold">Restaurants and Shops</h2>
          </article>
        </div>
      </div>

      <Review />

      <button
        onClick={topFunction}
        id="myBtn"
        className={showBtn}
        title="Go to top"
      >
        Top
      </button>

    </div>



  );
}
export default Home;
