import React from 'react'
import heroImage from '/src/assets/images/hero3.jpg'

function Home() {
  return (
    <div className='min-h-screen'>
        {/* <div>
        <img src={heroImage} alt="Casa ripa hero image"/>
        </div> */}
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/src/assets/images/hero3.jpg)'}}>
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
      {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
      {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
      {/* <button className="btn btn-primary">BOOK NOW</button> */}
    </div>
  </div>
</div>

      <div>
        <h2>Welcome to Casa Ripa</h2>
      </div>

    </div>
    
  )
}

export default Home