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
      <div className="text-h1">Food Item</div>
      <div className="main-meal-one">
        {data.map((d) => {
          return (
            <Link to={`/${d.idMeal}`} key={d.idMeal}>
              <div className="box-one">
                <img
                  src={d.strMealThumb}
                  alt=""
                  style={{ width: "18rem", height: "17rem" }}
                />
                <div className="text-value">
                <h1 className="name-h1">{d.strMeal}</h1>
                <h3 className="cateogry-h3">Category: {d.strCategory}</h3>
                <p className="area-p">Food: {d.strArea}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default PopularSlider;
