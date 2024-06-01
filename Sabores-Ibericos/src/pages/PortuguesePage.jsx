import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./PortuguesePage.css";

function PortuguesePage({ food }) {
  const portugueseFood = food.filter((meal) => meal.country === "Portugal");
  console.log(portugueseFood);
  return (
    <>
      <Navbar />
      <div className="cardContainer">
        {portugueseFood.map((meal, i) => (
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
