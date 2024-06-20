import "./NotFoundPage.css";
import errorImg from "../assets/Error404.gif";
function NotFoundPage() {
  return (
    <div className="notFoundPage">
      <div>
        <br></br>
        <br></br>
        <h1>Error 404</h1>
      </div>

      <img src={errorImg} alt="error Image" />
    </div>
  );
}

export default NotFoundPage;
