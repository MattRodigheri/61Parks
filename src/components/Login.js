import React from "react";
import "../App.css";

function Login() {
  return (
    <div className="form-container">
      <form>
        <input type="text" defaultValue="Email" />
        <input type="text" defaultValue="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
