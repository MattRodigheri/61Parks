import React from "react";
import "../styles/Login.css";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    // this.props.changeLink();
  }

  render() {
    return (
      <div
        className="form-container"
        style={{ backgroundImage: `url(${this.props.image})` }}
      >
        <form>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
