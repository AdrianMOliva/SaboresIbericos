import "./Navbar.css";
import lightLogo from "../assets/LightLogo.png";
import darkLogo from "../assets/DarkLogo.png";
import questionMark from "../assets/QuestionMark.png";
import heart from "../assets/Heart.png";
import add from "../assets/Add.png";
function Navbar() {
  return (
    <div className="navbarclass">
      <img className="lightLogo" src={lightLogo} alt="light logo" />
      <h1 className="portugueseTitle">Portuguese</h1>
      <h1 className="spanishTitle">Spanish</h1>
      <div className="logosDiv">
        <img src={heart} alt="heart" />
        <img src={add} alt="add food" />
        <img src={questionMark} alt="question Mark" />
      </div>
    </div>
  );
}

export default Navbar;
