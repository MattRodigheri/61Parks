import React from "react";
import "../styles/About.css";

const About = props => {
  return (
    <div className="About" style={{ backgroundImage: `url(${props.image})` }}>
      <article>
        <p>
          This project was born out of my love of the outdoors and therefore my
          great appreciation for the&nbsp;
          <a href="https://www.nps.gov" target="_blank" className="nps-link">
            U.S. National Park Service
          </a>
          .
        </p>
        <p>
          The preservation of the American wilderness has never been more
          important. With the constant threat of its destruction for potential
          short-term capital gain from mining, drilling, etc., our National Park
          System provides a bastion of hope for the perseverance of greater
          values.
        </p>
        <p>
          Our national parks also provide a legacy of care and concern for our
          natural and political history and serve as a reminder of things larger
          of ourselves.
        </p>
        <p>
          The epic beauty of the natural world is so well exemplified in parks
          like Yosemite, Bryce Canyon, Death Valley, and so many others, that
          our national parks deserve, at minimum, to be preserved and conserved
          as best as possible to allow current and future generations to learn
          from and appreciate the magnitude and minutiae of the unique natural
          wonders that we are lucky enough to be the caretakers of.
        </p>
      </article>
    </div>
  );
};

export default About;
