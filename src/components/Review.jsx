import React , { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from '../data/review.json';
import './ReviewSlider.css';

function Review() {

  const [index, setIndex] = useState(0);
  const {name, job, text} = people.reviews[index];

  const checkNumber = (number) => {
    if(number > people.reviews.length - 1){
      return 0;
    }
    else if(number < 0){
      return people.reviews.length - 1;
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    }) 
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    }) 
  }

  
  return (
    <div className='review-container'>
    
    <article className="review">
    <h2 className='review-title'>GUEST REVIEW</h2>
    <div className="img-container">
      {/* <img src={image} alt={name} className="person-img"/> */}
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
      </div>
      
      {/* <p className="jon">{job}</p> */}
      <p className="info">{text}</p>
      <h4 className="author">{name}</h4>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>  
      </div>
      
  </article>
  </div>
  )
}

export default Review