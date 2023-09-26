import React from "react";
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
        <span onClick={toggleIsTruncated} className="btn  btn-info btn-xs">
          {isTruncated ? "Read More" : "Read Less"}
        </span>
      </p>
    );
  }
  return (
    <>
      <div className="min-h-full">
        <h2 className="m-4 font-bold text-center text-lg">ENJOY OUR PARADISE</h2>
        <div className="card m-4 lg:card-side bg-base-100 shadow-xl" id="1">
          <figure id="1">
            <img src={Winery} alt="Winery" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Winery</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui
              quasi quisquam ratione neque quae in possimus asperiores
              blanditiis assumenda eveniet necessitatibus vero debitis, maxime,
              tenetur nesciunt dolor molestiae at?
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card m-4 lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Beach</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui
              quasi quisquam ratione neque quae in possimus asperiores
              blanditiis assumenda eveniet necessitatibus vero debitis, maxime,
              tenetur nesciunt dolor molestiae at?
            </p>
            <div className="card-actions justify-end"></div>
          </div>
          <figure>
            <img src={Beach} alt="Beach" />
          </figure>
        </div>
      </div>
      <div className="card m-4 lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={Sport} alt="Sport" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Sport</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse fuga
            a architecto aliquam? In ratione consequatur sapiente molestiae,
            expedita cum, libero recusandae vitae et temporibus, nam aperiam
            quaerat repudiandae iure?
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="card m-4 lg:card-side bg-base-100 shadow-xl">

  <div className="card-body">
    <h2 className="card-title">Nature</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit aperiam fuga illo esse ea iusto nobis. Officia nostrum illum voluptatum ducimus laudantium libero reprehenderit esse possimus atque, assumenda, soluta repellat.</p>
    <div className="card-actions justify-end">
    </div>
  </div>
  <figure><img src={Nature} alt="Nature"/></figure>
</div>
<div className="card m-4 lg:card-side bg-base-100 shadow-xl">
  <figure><img src={Santuranio} alt="Santuranio"/></figure>
  <div className="card-body">
    <h2 className="card-title">Santuranio</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus cupiditate, veritatis deleniti ut ex libero recusandae minus. Consequuntur dolore illo itaque tempore vel. Perspiciatis rerum qui reiciendis quae, eos suscipit.</p>
    <div className="card-actions justify-end">
  
    </div>
  </div>
</div>
<div className="card m-4 lg:card-side bg-base-100 shadow-xl">

  <div className="card-body">
    <h2 className="card-title">Restaurant</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa temporibus placeat eius ratione omnis commodi eaque quae illum itaque, neque reiciendis ducimus ipsam sed perferendis. Obcaecati magnam rerum neque.</p>
    <div className="card-actions justify-end">
  
    </div>
  </div>
  <figure><img src={Restaurant} alt="Restaurant"/></figure>
</div>
    </>
  );
}

export default ExploreSurroundings;
