import { useState } from "react";
import "./App.css";
import axios from "axios";
import PortuguesePage from "./pages/PortuguesePage.jsx";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SpanishPage from "./pages/SpanishPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import FoodDetailsPage from "./pages/FoodDetailsPage.jsx";
import AddFoodPage from "./pages/AddFoodPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import FavouritePage from "./pages/FavouritePage.jsx";

function App() {
  const [food, setFood] = useState([]);
  const [toggledButtons, setToggledButtons] = useState([]);
  
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get(
          "https://sabores-ibericos.adaptable.app/foods"
        );

        setFood(response.data);
        setToggledButtons(Array(response.data.length).fill(false));
      } catch (err) {
        console.log("there is an error", err);
      }
    };
    fetchFood();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PortuguesePage food={food} toggledButtons={toggledButtons} setToggledButtons={setToggledButtons} />} />
        <Route path="/spanish-food" element={<SpanishPage food={food} toggledButtons={toggledButtons} setToggledButtons={setToggledButtons}/>} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/details/:foodId"
          element={<FoodDetailsPage food={food} setFood={setFood} />}
        />
        <Route
          path="/add-food"
          element={<AddFoodPage food={food} setFood={setFood} />}
        />
        <Route path="/favourites" element={<FavouritePage food={food} toggledButtons={toggledButtons} setToggledButtons={setToggledButtons}/>}/>
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
