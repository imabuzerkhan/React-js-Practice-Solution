import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Trending.css";

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

  return (
    <div className="main-container-pop">
      <div className="text-h11">Trending Recipes</div>
      <div className="slogan1">
        <p>Stay ahead of the culinary curve with our trending recipes!</p>
      </div>
      <div className="main-meal-one1">
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
      </div>
    </div>
  );
};

export default Trendingslider;
