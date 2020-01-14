import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login.js";
import About from "./About.js";
import "../App.css";

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1 className="title">62Parks</h1>
          <nav className="about-link">
            <Link to="/about">
              <h3>About</h3>
            </Link>
          </nav>
        </header>
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
