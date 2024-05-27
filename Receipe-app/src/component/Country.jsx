import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "./Country.css"; // Import the CSS file

const Country = () => {
  const { name } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
     const fetchData = async () => {
      try {
        const api = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
        );
        const response = await api.json();
        setData(response.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); // Set to an empty array if there's an error
      }
    };

    fetchData();
  }, [name]);

  return (
    <>
      <Navbar />
      <div className="main-card-container">
        {data ? (
          data.map((d) => (
            <Link to={`/${d.idMeal}`} className="main-card-box" key={d.idMeal}>
              <div className="card">
                <img src={d.strMealThumb} alt="" />
                <h3>{d.strMeal}</h3>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Country;
