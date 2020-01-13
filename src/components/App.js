import React from "react";
import "../App.css";

function App() {
  return (
    <div className="App">
      <form>
        <input type="text" defaultValue="Email" />
        <input type="text" defaultValue="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default App;
