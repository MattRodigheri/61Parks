import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withAuth } from "@okta/okta-react";
import { useAuth } from "../auth";
import Login from "./Login.js";
import About from "./About.js";
import "../styles/App.css";
import arches from "../assets/arches.jpg";
import bryce from "../assets/bryce.jpg";
import joshua from "../assets/joshua.jpg";
import smokey from "../assets/smokey.jpg";
import teton from "../assets/teton.jpg";
import yellowstone from "../assets/yellowstone.jpg";
import zion from "../assets/zion.jpg";

//     this.state = {
//       headerLink: "About",
//       page: "about"
//     };

//     this.changeLink = this.changeLink.bind(this);
//   }
const App = withAuth(({ auth }) => {
  // changeLink() {
  //   let endpoint;
  //   let url = window.location.href.split("/");
  //   if (url[url.length - 1] === "") {
  //     endpoint = "About";
  //     this.setState({
  //       headerLink: endpoint,
  //       page: `/${endpoint.toLowerCase()}`
  //     });
  //   } else {
  //     endpoint = "Home";
  //     this.setState({
  //       headerLink: endpoint,
  //       page: "/"
  //     });
  //   }
  // }

  const backgroundImages = [
    arches,
    bryce,
    joshua,
    smokey,
    teton,
    yellowstone,
    zion
  ];

  const [backgroundImage, setBackgroundImage] = useState("");

  const getBackgroundImage = () => {
    let bg =
      backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    if (!backgroundImage) {
      setBackgroundImage(bg);
    }
  };

  useEffect(() => {
    getBackgroundImage();
  }, [backgroundImage]);

  const [authenticated, user] = useAuth(auth);

  return (
    <Router>
      <div>
        <header>
          <h1 className="title">62Parks</h1>
          <nav className="about-link">
            {/* <Link to={this.state.page}> */}
            {/* <h3>{this.state.headerLink}</h3> */}
            {/* </Link> */}
          </nav>
        </header>
        <Switch>
          <Route path="/about">
            <About
              image={backgroundImage}
              // changeLink={this.changeLink}
            />
          </Route>
          <Route path="/">
            <Login
              image={backgroundImage}
              // changeLink={this.changeLink}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
});

export default App;
