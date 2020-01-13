import React from "react";
import Header from "./Header.js";
import Login from "./Login.js";
import "../App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      {/* <div className="App">
        <form>
          <input type="text" defaultValue="Email" />
          <input type="text" defaultValue="Password" />
          <input type="submit" value="Login" />
        </form>
      </div>*/}
    </div>
  );
}

export default App;
