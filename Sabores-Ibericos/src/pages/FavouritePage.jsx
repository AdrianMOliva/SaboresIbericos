import axios from "axios";
import favouriteImg from "../assets/FavouriteImg.png";
import { Link } from "react-router-dom";
import "./FavouritePage.css";

function FavouritePage({food}){
    const favouriteFood = food.filter((meal) => meal.toggled === true);

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
              meal: filteredFood[index].filteredFood[index],
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

      return(
<>
      
      <div className="cardContainer">
        {favouriteFood.map((meal, i) => (
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

export default FavouritePage;