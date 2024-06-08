import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AddFoodPage.css";
import axios from "axios";

function AddFoodPage({ food, setFood }) {
  const [foodName, setFoodName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [meal, setMeal] = useState("");
  const [national, setNational] = useState("");
  const [restaurants, setRestaurants] = useState("");

  const nav = useNavigate();

  const handleFoodName = (e) => setFoodName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handleRegion = (e) => setRegion(e.target.value);
  const handleMeal = (e) => setMeal(e.target.value);
  const handleNational = (e) => setNational(e.target.value);
  const handleRestaurants = (e) => setRestaurants(e.target.value);

  const handleAddFood = async (event) => {
    event.preventDefault();
    const newFood = {
      foodName,
      description,
      image,
      country,
      region,
      meal,
      national,
      restaurants,
    };

    try {
      const response = await axios.post(
        `https://sabores-ibericos.adaptable.app/foods`,
        newFood
      );
      console.log(response);
      console.log("success");
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleAddFood} className="formStyle">
        <label>
          Food Name:
          <input type="text" value={foodName} onChange={handleFoodName} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={handleDescription} />
        </label>
        <label>
          Image:
          <input type="text" value={image} onChange={handleImage} />
        </label>
        <label>
          Country:
          <select>
            <option value={country}>Portugal</option>
            <option value={country}>Spain</option>
          </select>
        </label>
        <label>
          Type of meal:
          <input type="text" value={meal} onChange={handleMeal} />
        </label>
        <label>
          Region:
          <input type="text" value={region} onChange={handleRegion} />
        </label>
        <label>
          Restaurants:
          <input type="text" value={restaurants} onChange={handleRestaurants} />
        </label>
        <label>
          National:
          <input type="checkbox" checked={national} onChange={handleNational} />
        </label>

        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddFoodPage;
