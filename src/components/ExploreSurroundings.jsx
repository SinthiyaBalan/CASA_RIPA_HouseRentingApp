import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import './ExploreSurroundings.css';

function ExploreSurroundings() {
  function ReadMore({ children, maxCharacterCount = 100 }) {
    const text = children;
    const [isTruncated, setIsTruncated] = useState(true);
    const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text;
    function toggleIsTruncated() {
      setIsTruncated(!isTruncated);
    }
    return (
      <p className="has-text-left">
        {resultString}
        <span onClick={toggleIsTruncated} className="btn  btn-info btn-xs">
          {isTruncated ? "Read More" : "Read Less"}
        </span>
      </p>
    );
  }
  return (
    <>
      <div className="min-h-full">
        <h2 className="m-4 font-bold text-center text-lg">
          ENJOY OUR PARADISE
        </h2>
        <div className="card m-6 lg:card-side bg-base-100 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Beach</h2>
            <p>
              The Adriatic coast is about 35km away and there are several
              beaches with umbrellas and sunbeds. To the south, just outside
              Ancona, is the National Park of Monte Conero. This park is located
              near one of the most beautiful coastlines on the Adriatic Sea.
              Over 20km you will find bays with pebble beaches, such as Porto
              Novo, Sirolo and Numana, where you can swim, sunbathe and sample
              the delicious fresh seafood. Senigallia, north of Ancona, is known
              for its long sandy beaches. About 10km from Cupramontana is Lake
              Castreccioni, also known as Lake Cingoli. Here you can swim, hire
              a pedal boat or a canoe. In Apiro, a village about 8km from
              Cupramontana, you can find the Eldorado Water Park. Only open in
              summer, but everyday there is plenty of entertainment with music
              and dancing and the park has several waterslides, including the
              highest in Europe
            </p>
            {/* <div className="card-actions justify-end"></div> */}
          </div>
          <figure>
            <img src={`https://ik.imagekit.io/Casaripadummy/Beaches/IMG_6850.jpeg?updatedAt=1695976473752`} alt="Beach" />
          </figure>
        </div>
      </div>
      <div className="card m-6 lg:card-side bg-base-100 shadow-2xl" id="1">
        <figure id="1">
          <img src={`https://ik.imagekit.io/Casaripadummy/Explore%20Surrounding%20images/winery.jpg?updatedAt=1705919487489`}  alt="Winery" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Winery</h2>
          <p>
            For those who enjoy wine, there are several wineries, where you can
            sample wine and take a guided tour of the vineyard.
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>

      <div className="card m-6 lg:card-side bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title">Cupramontana</h2>
          <p>
            The village of Cupramontana lies at 505 meters altitude and has
            beautiful views in all directions: valleys, mountains and the sea in
            the distance. With about 5000 inhabitants, Cupramontana is one of
            the larger villages in the area. There are several supermarkets,
            bakeries, shops and bars with terraces. Additionally, the village
            has a number of good restaurants serving delicious food at
            reasonable prices. Numerous festivals are held in Cupramontana and
            the surrounding villages throughout the summer, so there is always
            something to do. The most famous and oldest 'La Sagra dell'uva' is
            held in Cupramontana each year on the first weekend of October.
          </p>
          
        </div>
        <figure>
          <img src={`https://ik.imagekit.io/Casaripadummy/Explore%20Surrounding%20images/8943303_orig.jpg?updatedAt=1705919487694`} alt="Nature" />
        </figure>
      </div>
      <div className="card m-6 lg:card-side bg-base-100 shadow-2xl">
        <figure className="figure large">
          <img src={`https://ik.imagekit.io/Casaripadummy/Explore%20Surrounding%20images/Santuranio.png?updatedAt=1705915322248`} alt="Santuranio" />
          <img src={`https://ik.imagekit.io/Casaripadummy/Explore%20Surrounding%20images/cupromonta1.jpg?updatedAt=1705920157283`} alt="Santuranio2" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Nearby Cupramontano</h2>
          <p>
            Several historical sites are well worth a visit, for example the
            former monastry Eremo dei Frati Bianchi (white Friars) from the 12th
            century, the church of San Giacomo della Romita built before the
            13th century but rebuilt in its present form in the 18th century and
            the restored abbey of Beato Angelo built in the 12th century. Other
            historic villages in the area are Staffolo and Cingoli. Cingoli is
            also known as the 'balcony of the Marches' because of the panoramic
            views across the Marches to the coast. In Jesi, a medieval walled
            city just 15km away, you can shop and visit the world famous
            Pergolesi Theatre. Here you can enjoy opera, ballet and classical
            music in an Italian atmosphere. Only 15 minutes drive away is the
            Regional Park "Gola della Rossa e di Frasassi". This is the green
            heart of Le Marche and the largest protected area in this region.
            Here you can explore the caves of Frasassi, a remarkable karst cave
            system, considered by many as the finest show caves in Europe.
            Accompanied by a guide (different languages), you can take a tour of
            these magnificent caves. Also in the regional park are several
            hiking trails that lead you along the sights of the park.{" "}
          </p>
          Temple of Valadier and church of the Madonna of Frasassi:
          <br />
          Close to the caves of Frasassi is the 700 m walkway along a
          well-passable road to the temple of Valadier and the shrine of the
          Madonna of Frasassi. The octagonal church with a dome dates back to
          1828 and was created by Giuseppe Valadier on behalf of Pope Leone XII,
          who himself came from a small town close to the caves. In the cave
          next to it is the church of Madonna of Frasassi, built centuries ago
          under the overhanging rock
    
        </div>
      </div>
      <div className="card m-6 lg:card-side bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title">Scooty Rental</h2>
          <p>
            Rent an Italian scooter and discover the beautiful landscape! Maps
            and other information will be provided so you can find the most
            beautiful roads of Le Marche yourself without any problem. On
            request organized trips can be arranged.
          </p>
       
        </div>
        <figure>
          <img src={`https://ik.imagekit.io/Casaripadummy/Explore%20Surrounding%20images/scooty%20rental.jpg?updatedAt=1705916580202`} alt="Rental" />
          
        </figure>
      </div>
      <div className="card m-6 lg:card-side bg-base-100 shadow-2xl">
        <figure className="figure large">
          <img src={`https://ik.imagekit.io/Casaripadummy/Explore%20Surrounding%20images/Restaurant.png?updatedAt=1705915322240`} alt="Shopping" />
          <img src={`https://ik.imagekit.io/Casaripadummy/Explore%20Surrounding%20images/1496625.jpg?updatedAt=1705920342156`} alt="Shopping" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shopping</h2>

          <p>
            For shopping Le Marche is a true paradise. Many famous brands like
            Prada, Armani, Tod's and Hugo Boss have outlet stores where you can
            buy clothing, shoes and bags at discounted prices. The most popular
            outlet stores are:
            <br />
            Tod's in Sant'Elpidio a Mare (FM)
            <br />
            Shoes, also accessories from Hogan and Fay clothing
            <br />
            Geox in Loc. Villa Luciani, Montegranaro (FM)
            <br />
            Shoes for men, women and children
            <br />
            Prada, Car Shoes, Miu Miu in Sant'Elpidio a Mare (FM)
            <br />
            Clothing, Shoes and bags
            <br />
            Armani in Sant'Elpidio a Mare (FM)
            <br />
            Clothing for men and women
            <br />
            Hugo Boss in Morrovalle (MC)
            <br />
            Shoes and clothing for men and women
            <br />
            Outlet Itierre in Civitanova Marche (MC)
            <br />
            Clothing, shoes, bags and accessories from Gianfranco Ferrè, Just
            Cavalli, Galliano and Versace
          </p>
          
        </div>
      </div>
    </>
  );
}

export default ExploreSurroundings;
