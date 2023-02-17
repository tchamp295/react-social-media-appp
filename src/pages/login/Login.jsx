import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./Login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);
  const handleLogin = () => {
    login();
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>hello world</h1>
          <p>trycgfb hhfchfvkvvf ghftdfkk</p>
          <span>dont have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>login</h1>
          <form action="">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
