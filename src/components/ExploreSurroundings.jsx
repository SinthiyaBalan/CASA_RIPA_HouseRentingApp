import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Winery from "/src/assets/images/Winery.png";
import Beach from "/src/assets/images/Beach.png";
import Nature from "/src/assets/images/Nature.png";
import Restaurant from "/src/assets/images/Restaurant.png";
import Santuranio from "/src/assets/images/Santuranio.png";
import Sport from "/src/assets/images/Sport.png";

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
        <span
          onClick={toggleIsTruncated}
          className="btn btn-outline btn-info btn-xs"
        >
          {isTruncated ? "Read More" : "Read Less"}
        </span>
      </p>
    );
  }
  return (
    <>
      <div className="min-h-full">
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
              <ReadMore>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                porttitor accumsan tincidunt. Proin sagittis nisl in tortor
                hendrerit tincidunt. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nulla porttitor accumsan tincidunt. Proin
                sagittis nisl in tortor hendrerit tincidunt.
              </ReadMore>
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
              <ReadMore>
                The Adriatic coast is about 35km away and there are several
                beaches with umbrellas and sunbeds. The Adriatic coast is about
                35km away and there are several beaches with umbrellas and
                sunbeds. The Adriatic coast is about 35km away and there are
                several beaches with umbrellas and sunbeds.
              </ReadMore>

              {/* <FontAwesomeIcon icon={faCaretRight} /> */}
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
              <ReadMore>
                Discover the range of sports available to help you relax and
                keep fit around CASA RIPA Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Soluta repellat fugiat, harum
                tempore nisi perspiciatis similique. Libero ex id quisquam,
                suscipit, consequatur dolor cum quis voluptas odit incidunt
                fugit ipsum.
              </ReadMore>
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
              <ReadMore>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                porttitor accumsan tincidunt. Proin sagittis nisl in tortor
                hendrerit tincidunt. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quia, neque praesentium dolore quibusdam
                voluptatibus molestiae voluptas rerum quasi alias enim odio
                voluptatum cumque sint vero ipsam nesciunt ullam unde
                recusandae.
              </ReadMore>
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
              <ReadMore>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                porttitor accumsan tincidunt. Proin sagittis nisl in tortor
                hendrerit tincidunt. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Sint, nihil fugiat doloremque obcaecati,
                voluptas cum repudiandae laborum consequatur ullam adipisci sunt
                vel corrupti ex suscipit ratione, repellendus dolores sapiente
                numquam.
              </ReadMore>
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
              <ReadMore>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                porttitor accumsan tincidunt. Proin sagittis nisl in tortor
                hendrerit tincidunt. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Dolores at maiores ipsa amet. Blanditiis eum
                quos tempora velit distinctio voluptatibus officiis
                reprehenderit sunt commodi, natus alias delectus provident quis
                explicabo?
              </ReadMore>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreSurroundings;
