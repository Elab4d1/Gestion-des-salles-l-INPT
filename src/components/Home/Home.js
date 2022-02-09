import logo from "../../assets/logo.png";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="center">
      <div className="image">
        <img src={logo} alt="logo" />
      </div>
      <div className="title">
        <h1>Sign in as</h1>
      </div>
      <div className="container">
        <Link to="/login" className="btn">
          Etudiant
        </Link>
        <Link to="/login" className="btn">
          Professeur
        </Link>
        <Link to="/login" className="btn">
          Administrateur
        </Link>
      </div>
    </div>
  );
};

export default Home;
