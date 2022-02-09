import classe from "../../assets/class.png";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import password from "../../assets/password.png";
import "./login.css";

const Login = () => {
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
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="password">
            <img src={password} alt="" />
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className="center">
            <input className="submit" type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
