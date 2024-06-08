import "./Navbar.css";
import lightLogo from "../assets/LightLogo.png";
import darkLogo from "../assets/DarkLogo.png";
import questionMark from "../assets/QuestionMark.png";
import heart from "../assets/Heart.png";
import add from "../assets/Add.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbarclass">
      <img className="lightLogo" src={lightLogo} alt="light logo" />
      <Link to={"/"}>
        <h1 className="portugueseTitle">Portuguese</h1>
      </Link>
      <Link to={"/spanish-food"}>
        <h1 className="spanishTitle">Spanish</h1>
      </Link>
      <div className="logosDiv">
        <img src={heart} alt="heart" />
        <Link to="/add-food">
          <img src={add} alt="add food" />
        </Link>
        <Link to={"/about"}>
          <img style={{}} src={questionMark} alt="question Mark" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
