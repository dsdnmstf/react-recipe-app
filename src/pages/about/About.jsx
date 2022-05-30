import React from "react";
import { AboutContainer, InfoContainer, StyledImage } from "./AboutStyles";

import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer wrap="wrap">
      <StyledImage src={codingSvg} />
      <div>
        <h1>
          About Software Developer <span>Mustafa DASDAN</span>
        </h1>
      </div>
      <InfoContainer>
        <h2>Hi, I'am Mustafa</h2>
        <h3>I’m a Full-Stack Devoloper.</h3>
        <h4>
          I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL,
          Python, AWS Services.
        </h4>
        <h2>
          <a href="mailto:dsdnmstf@gmail.com">Send email</a> :
          dsdnmstf@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
