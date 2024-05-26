import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Trendingslider = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s"
      );
      const data = await api.json();

      // console.log(data.meals);
      setData(data.meals);
    };

    fetchData();
  }, []);

  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    pauseOnHover: true,
  };

  return (
    <>
      <div
        style={{
          width: "98%",
          margin: "auto",
        }}
      >
        <Slider
          {...settings}
          style={{
            margin: "1rem",
          }}
        >
          {data.map((d) => {
            return (
              <Link to={`/${d.idMeal} `} key={d.idMeal}>
              <div className="box">
                <img
                  src={d.strMealThumb}
                  alt=""
                  style={{ width: "10rem", height: "10rem" }}
                  className="image-slider"
                />
              </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Trendingslider;
