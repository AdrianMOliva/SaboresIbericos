import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./FoodDetailsPage.css";
import { useNavigate } from "react-router-dom";
function FoodDetailsPage({ food, setFood }) {
  const { foodId } = useParams();
  const [oneFood, setOneFood] = useState({});
  useEffect(() => {
    const meal = food.find((meal) => meal.id === parseInt(foodId));
    setOneFood(meal);
  }, [food, foodId]);
  const nav = useNavigate();
  return (
    <div className="container">
      <h1></h1>
      <div className="pageContainer">
        <img src={oneFood.image} alt="food image" />

        <div className="infoContainer">
          <h2>{oneFood.foodName}</h2>
          <p>
            <span>Description: </span>
            {oneFood.description}
          </p>

          <p>
            <span>Region: </span>
            {oneFood.region}
          </p>
          <p>
            <span>Type of meal: </span>
            {oneFood.meal}
          </p>
          <p>
            <span>Restaurants: </span>
            {oneFood.restaurants}
          </p>
        </div>
        <button
          className="backButton"
          onClick={() => {
            oneFood.country === "Spain" ? nav("/spanish-food") : nav("/");
          }}
        >
          {"<<back"}
        </button>
      </div>
    </div>
  );
}

export default FoodDetailsPage;
