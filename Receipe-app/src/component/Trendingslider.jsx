import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./Trending.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Trendingslider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s"
      );
      const data = await api.json();
      setData(data.meals);
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="main-container-pop">
      <div className="text-h11">Trending Recipes</div>
      <div className="slogan1">
        <p>Stay ahead of the culinary curve with our trending recipes!</p>
      </div>
      <Slider {...settings} className="main-meal-one1">
        {data.map((d) => (
          <Link to={`/${d.idMeal}`} key={d.idMeal}>
            <div className="box-one1">
              <img src={d.strMealThumb} alt={d.strMeal} />
              <div className="text-value">
                <h1 className="name-h11">{d.strMeal}</h1>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Trendingslider;
