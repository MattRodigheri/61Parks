import React from "react";
import "../styles/Login.css";

const Login = props => {
  return (
    <div
      className="form-container"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <form>
        <input type="text" defaultValue="Email" />
        <input type="text" defaultValue="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
