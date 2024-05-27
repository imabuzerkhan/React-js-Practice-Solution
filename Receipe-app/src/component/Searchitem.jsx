import React from 'react'
import Navbar from './Navbar'
import { useEffect , useState } from 'react';
import {Link , useParams} from 'react-router-dom'
import './Country.css'
const Searchitem = () => {
  const { searchTerm } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
     const fetchData = async () => {
      try {
        const api = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const response = await api.json();
        console.log(response)
        setData(response.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); // Set to an empty array if there's an error
      }
    };

    fetchData();
  }, [searchTerm]);

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
          <p style={{fontSize:"30px" , color:"white"}}>Sorry this dish is not availabe</p>
        )}
      </div>
    </>
  );
};

export default Searchitem
