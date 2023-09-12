import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Review() {
  return (
    <div>
<div>
<a href="#" class="block w-3/4 ml-5 mb-10 mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center lg:w-2/4 lg:ml-72 lg:mb-10 lg:mt-10">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white tracking-wide">GUEST REVIEW</h5>
    <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/> <FontAwesomeIcon icon={faStar}/>
    <p class="font-normal text-gray-700 dark:text-gray-400">“ We LOVED CASA RIPA! Thank you for the great accommodation, it exceeded all our expectations! The service has been very professional and they have answered all requests quickly and thoroughly. So I would recommend you to everyone."</p>
</a>

    </div>
    </div>
  )
}

export default Review