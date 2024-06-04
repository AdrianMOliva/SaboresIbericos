import "./AboutPage.css";
import womanImage from "../assets/image woman.png";
import manImage from "../assets/image man.png";

function AboutPage() {
  return (
    <div className="aboutPage">
      <h2> Welcome to Sabores Ibéricos!</h2>
      <br></br>
      <p>
        Your guide to the best of Spanish and Portuguese cuisine! Our mission is
        to take you on a culinary journey through the Iberian Peninsula,
        showcasing the finest dishes and the top restaurants where you can
        experience them.
      </p>
      <br></br>
      <h3>Who made it?</h3>
      <div>
        <img src={womanImage} alt="woman image" />
        <a
          href="https://github.com/laurampinto"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/lauramopinto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </div>
      <br />
      <div>
        <img src={manImage} alt="man image" />
        <a
          href="https://github.com/AdrianMOliva"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/adri%C3%A1n-mart%C3%ADn-oliva-b78194209/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default AboutPage;
