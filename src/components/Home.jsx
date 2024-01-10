import React from "react";
import amazon from "../assets/Images/amazon.png";
import flipkart from "../assets/Images/flipkart.png";
import brand from "../assets/Images/shoe_image.png";

const Home = () => {
  return (
    <>
      <section className="home">
        <div>
          <h1>
            YOUR FEET DESERVE <br /> THE BEST
          </h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div>
            <span>
              <button>Shop Now</button>
              <button>Category</button>
            </span>
            <p>Also Available On</p>
            <span>
              <img src={amazon} alt="amazon" />
              <img src={flipkart} alt="flipkart" />
            </span>
          </div>
        </div>

        <img src={brand} alt="Shoes" />
      </section>
    </>
  );
};

export default Home;
