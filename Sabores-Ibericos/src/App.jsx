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

function App() {
  const [food, setFood] = useState([]);
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get(
          "https://sabores-ibericos.adaptable.app/foods"
        );

        setFood(response.data);
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
        <Route path="/" element={<PortuguesePage food={food} />} />
        <Route path="/spanish-food" element={<SpanishPage food={food} />} />
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
