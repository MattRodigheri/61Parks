import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login.js";
import About from "./About.js";
import "../App.css";

function App() {
  return (
    <Router>
      <h1 className="title">62Parks</h1>
      <div>
        <nav>
          <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
