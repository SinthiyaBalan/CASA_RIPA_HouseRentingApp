import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Winery from "/src/assets/images/Winery.png";
import Beach from "/src/assets/images/Beach.png";
import Nature from "/src/assets/images/Nature.png";
import Restaurant from "/src/assets/images/Restaurant.png";
import Santuranio from "/src/assets/images/Santuranio.png";
import Sport from "/src/assets/images/Sport.png";

function ExploreSurroundings() {
  return (
    <>
    <div className='min-h-full'>
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
</>
  )
}

export default ExploreSurroundings
