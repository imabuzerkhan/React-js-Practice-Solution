import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Meal = () => {
  const { idMeal } = useParams();
  const [data, setData] = useState([]);
  const [active , SetActive] = useState('ingredient')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );
        const data = await api.json();

        console.log(data);
        setData(data.meals[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [idMeal]);


  
  return (
    <>
      <Navbar />
      <div className="main-box">
      <h1>{data.strMeal}</h1>
        <div className="meal-box">
          
          <img className="Meal-image" src={data.strMealThumb} alt="" />
          <div className="button-div">
          <button className="btn" onClick={()=>SetActive('ingredient')}>Ingredient</button>
    <button className="btn" onClick={()=>SetActive('instruction')}>Instruction</button>
{
  active === 'ingredient' ? (
    <div>
      <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>{data.strIngredient1} - {data.strMeasure1}</div>
      <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>{data.strIngredient2} - {data.strMeasure2}</div>
      <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>{data.strIngredient3} - {data.strMeasure3}</div>
      <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>{data.strIngredient4} - {data.strMeasure4}</div>
      <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>{data.strIngredient5} - {data.strMeasure5}</div>
      <div style={{fontSize:'1.5rem', fontWeight:'bold'}}>{data.strIngredient6} - {data.strMeasure6}</div>
    </div>
) : (
  <p>{data.strInstructions} </p>
)
}
          </div>
        </div>
      </div>
    </>
  );
};

export default Meal;
