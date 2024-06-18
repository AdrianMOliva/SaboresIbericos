import SearchBar from "../components/SearchBar";
import "./PortuguesePage.css";
import favouriteImg from "../assets/FavouriteImg.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import deleteLogo from "../assets/delete.png";
import axios from "axios";

function PortuguesePage({ food }) {
  const [search, setSearch] = useState("");
  const [toggledButtons, setToggledButtons] = useState(
    Array(food.length).fill(false)
  );

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://sabores-ibericos.adaptable.app/foods/${id}`);

      const newFoodList = food.filter((meal) => meal.id !== id);

      setToggledButtons(Array(newFoodList.length).fill(false));
    } catch (error) {
      console.error("Error deleting the meal", error);
    }
  };

  const portugueseFood = food.filter((meal) => meal.country === "Portugal");

  const filteredFood = portugueseFood.filter((meal) =>
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
          toggled: newToggledButtons[index],
          country: food.country,
          foodName: food.foodName,
          description: food.description,
          region: food.region,
          meal: food.meal,
          image: food.image,
          national: food.national,
          restaurants: food.restaurants,
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

export default PortuguesePage;
