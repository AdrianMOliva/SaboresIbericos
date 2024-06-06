import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import "./PortuguesePage.css";
import favouriteImg from "../assets/FavouriteImg.png";
import { useState } from "react";

function PortuguesePage({ food }) {
  const [search, setSearch] = useState("");
  const [toggledButtons, setToggledButtons] = useState(
    Array(food.length).fill(false)
  );

  const handleChange = (index) => {
    const newToggledButtons = [...toggledButtons];
    newToggledButtons[index] = !newToggledButtons[index];
    setToggledButtons(newToggledButtons);
  };
  const portugueseFood = food.filter((meal) => meal.country === "Portugal");

  const filteredFood = portugueseFood.filter((meal) =>
    meal.foodName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
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
            <img className="cardImg" src={meal.image} alt={meal.foodName} />
            <div className="cardInfo">
              <h3>{meal.foodName}</h3>
              <p>Region: {meal.region}</p>
              <p>Meal: {meal.meal}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default PortuguesePage;
