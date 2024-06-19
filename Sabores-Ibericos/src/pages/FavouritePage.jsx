import axios from "axios";
import favouriteImg from "../assets/FavouriteImg.png";
import { Link } from "react-router-dom";
import "./FavouritePage.css";

function FavouritePage({food, toggledButtons, setToggledButtons}){
    const favouriteFood = food.filter((meal) => meal.toggled === true);

    const handleChange = async (index) => {
        const newToggledButtons = [...toggledButtons];
        newToggledButtons[index] = !newToggledButtons[index];
    
        try {
          const mealId = favouriteFood[index].id;
          const response = await axios.put(
            `https://sabores-ibericos.adaptable.app/foods/${mealId}`,
            {
              id: favouriteFood[index].id,
              toggled: newToggledButtons[index],
              country: favouriteFood[index].country,
              foodName: favouriteFood[index].foodName,
              description: favouriteFood[index].description,
              region: favouriteFood[index].region,
              meal: favouriteFood[index].meal,
              image: favouriteFood[index].image,
              national: favouriteFood[index].national,
              restaurants: favouriteFood[index].restaurants,
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