import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import "./SpanishPage.css";
import favouriteImg from "../assets/FavouriteImg.png";
import { Link } from "react-router-dom";

function SpanishPage({ food }) {
  const [search, setSearch] = useState("");
  const [toggledButtons, setToggledButtons] = useState(
    Array(food.length).fill(false)
  );

  const handleChange = (index) => {
    const newToggledButtons = [...toggledButtons];
    newToggledButtons[index] = !newToggledButtons[index];
    setToggledButtons(newToggledButtons);
  };

  const spanishFood = food.filter((meal) => meal.country === "Spain");

  const filteredFood = spanishFood.filter((meal) =>
    meal.foodName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />

      <div className="cardContainer">
        {filteredFood.map((meal, i) => (
          <div className="card" key={i}>
            <button
              onClick={() => {
                handleChange(i);
              }}
              className={`btn-like ${toggledButtons[i] ? "on" : "off"}`}
            >
              <img src={favouriteImg} alt="like" />
            </button>
            <Link to={`/details/${meal.id}`}>
              <img className="cardImg" src={meal.image} alt={meal.foodName} />
            </Link>
            <div className="cardInfo">
              <Link to={`/details/${meal.id}`}>
                <h3>{meal.foodName}</h3>
              </Link>
              <p>Region: {meal.region}</p>
              <p>Meal: {meal.meal}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SpanishPage;
