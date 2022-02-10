import classe from "../../assets/class.png";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import password from "../../assets/password.png";
import "./login.css";
import { useState } from "react";

const Login = () => {
  const [pw, setPw] = useState("");
  const [us, setUs] = useState("");
  const [isError, setIsError] = useState(false);
  const checkForm = (e) => {
    if (!pw.length || !us.length) {
      e.preventDefault();
      setIsError(true);
    }
  };

  return (
    <div className="flex">
      <div className="classe-image">
        <img src={classe} alt="classe" />
      </div>
      <div className="form">
        <div className="image">
          <img src={logo} alt="logo" />
        </div>
        <form>
          <div className="username">
            <img src={user} alt="" />
            <input
              type="text"
              name="username"
              value={us}
              onChange={(e) => setUs((user) => e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="password">
            <img src={password} alt="" />
            <input
              type="password"
              name="password"
              value={pw}
              onChange={(e) => setPw((ps) => e.target.value)}
              placeholder="Password"
            />
          </div>
          {isError && (
            <div className="error">
              {!pw.length && !us.length
                ? "Veuillez remplir le nom d'utilisateur et le mot de passe"
                : !pw.length
                ? "Veuillez remplir le mot de passe"
                : !us.length
                ? "Veuillez remplir le nom d'utilisateur"
                : ""}
            </div>
          )}
          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className="center">
            <input
              className="submit"
              onClick={checkForm}
              type="submit"
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
