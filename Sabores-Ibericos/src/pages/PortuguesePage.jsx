import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import "./PortuguesePage.css";
import { useState } from "react";

function PortuguesePage({ food }) {
  const [search, setSearch] = useState("");

  const portugueseFood = food.filter((meal) => meal.country === "Portugal");

  const filteredFood = portugueseFood.filter((meal) =>
    meal.foodName.toLowerCase().includes(search.toLowerCase())
  );

  console.log(portugueseFood);
  return (
    <>
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} />
      <div className="cardContainer">
        {filteredFood.map((meal, i) => (
          <div className="card" key={i}>
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
