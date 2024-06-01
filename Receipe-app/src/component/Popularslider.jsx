import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// Import css files
import "./popular.css";

import { Link } from "react-router-dom";

const PopularSlider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s"
      );
      const data = await api.json();

      console.log(data);
      setData(data.meals);
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="main-container-pop">
    <div className="text-h1">Popular Recipes</div>
      <div className="slogan">
        <p> Taste the diversity, savor the flavors, and enjoy cooking like never before!</p>
      </div>
      <div className="main-meal-one">
        {data.map((d) => {
          return (
            <Link to={`/${d.idMeal}`} key={d.idMeal}>
              <div className="box-one">
                <img
                  src={d.strMealThumb}
                  alt=""
                  style={{ width: "14.9rem", height: "15rem" }}
                />
                <div className="text-value">
                  <h1 className="name-h1">{d.strMeal}</h1>
                  <h3 className="cateogry-h3">Category: {d.strCategory}</h3>
                  <p className="area-p">Cuisine: {d.strArea}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
      
    </>
  );
};

export default PopularSlider;
