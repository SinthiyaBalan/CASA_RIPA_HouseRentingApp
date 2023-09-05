import React from "react";
import heroImage from "/src/assets/images/hero3.jpg";

function Home() {
  return (
    <div className="min-h-screen">
      {/* <div>
        <img src={heroImage} alt="Casa ripa hero image"/>
        </div> */}
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(/src/assets/images/hero3.jpg)" }}
      >
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
        <h4>Holiday Home @ Cupramontana, Le Marche, Italy</h4>
        <p>
          In the heart of Le Marche region our recently renovated and restored
          farmhouse sits just below the Hilltop of Cupramontana. From here you
          can relax and take in the breathtaking and panoramic views over the
          surrounding countryside. The region of Le Marche is a beautiful hilly
          and mountainous region and still relatively undiscovered by tourists,
          but yet it is only 30 minutes away from Ancona Airport. Here you can
          spend your holiday without stress and enjoy everything the region has
          to offer, from the wonderful food and famous Verdicchio wine, the
          warmth and friendliness of the people, the culture, nature and
          fabulous blue-flag beaches along the Adriatic Coast. We hope to
          welcome you to this paradise!
        </p>
      </div>
    </div>
  );
}

export default Home;
