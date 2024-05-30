import React from "react";
import "./Banner.css";
import myImage from "../assets/banner.png";

const Banner = () => {
  return (
    <>
      <div className="main-iamge-container">
        <div className="new-container">
        <div className="banner-text">
          <h1>
            Discover Delicious <br />
            Recipes for Every Taste <br />
            and Occasion
          </h1>
          <p>
            Welcome to RecipeMaster, your ultimate kitchen companion! Explore a
            vast collection of recipes to suit every taste and occasion. Join
            our community of food lovers and transform your meals from ordinary
            to extraordinary.
          </p>
          <button>Find more</button>
        </div>
        <div className="image">
          <img  src={myImage} alt="" />
        </div>
      </div>
        </div>
       
    </>
  );
};

export default Banner;
