import { useState } from "react";
import SearchBar from "../components/SearchBar";
import "./SpanishPage.css";
import favouriteImg from "../assets/FavouriteImg.png";
import { Link } from "react-router-dom";
import deleteLogo from "../assets/delete.png";
import axios from "axios";

function SpanishPage({ food, toggledButtons, setToggledButtons }) {
  const [search, setSearch] = useState("");
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://sabores-ibericos.adaptable.app/foods/${id}`);

      const newFoodList = food.filter((meal) => meal.id !== id);

      setToggledButtons(Array(newFoodList.length).fill(false));
      console.log("success");
    } catch (error) {
      console.error("Error deleting the meal", error);
    }
  };

  const spanishFood = food.filter((meal) => meal.country === "Spain");

  const filteredFood = spanishFood.filter((meal) =>
    meal.foodName.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = async (index) => {
    const newToggledButtons = [...toggledButtons];
    newToggledButtons[index] = !newToggledButtons[index];

    try {
      const mealId = filteredFood[index].id;
      const response = await axios.put(
        `https://sabores-ibericos.adaptable.app/foods/${mealId}`,
        {
          id: filteredFood[index].id,
          toggled: newToggledButtons[index],
          country: filteredFood[index].country,
          foodName: filteredFood[index].foodName,
          description: filteredFood[index].description,
          region: filteredFood[index].region,
          meal: filteredFood[index].meal,
          image: filteredFood[index].image,
          national: filteredFood[index].national,
          restaurants: filteredFood[index].restaurants,
        }
      );

      if (response.status === 200) {
        setToggledButtons(newToggledButtons);
      }
      console.log(response);
    } catch (error) {
      console.error("Error updating toggle state:", error);
    }
  };

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
            <button
              className="deleteButton"
              onClick={() => handleDelete(meal.id)}
            >
              <img src={deleteLogo} alt="delete" />
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
