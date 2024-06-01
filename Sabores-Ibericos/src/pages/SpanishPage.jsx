import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./SpanishPage.css";

function SpanishPage({ food }) {
  const spanishFood = food.filter((meal) => meal.country === "Spain");
  console.log(spanishFood);
  return (
    <>
      <Navbar />
      <div className="cardContainer">
        {spanishFood.map((meal, i) => (
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

export default SpanishPage;
