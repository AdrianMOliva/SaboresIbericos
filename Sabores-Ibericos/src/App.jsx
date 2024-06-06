import { useState } from "react";
import "./App.css";
import axios from "axios";
import PortuguesePage from "./pages/PortuguesePage.jsx";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SpanishPage from "./pages/SpanishPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

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
      <Routes>
        <Route path="/" element={<PortuguesePage food={food} />} />
        <Route path="/spanish-food" element={<SpanishPage food={food} />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
