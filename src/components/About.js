import React from "react";
import myImage from '../assets/elle-about.png';
import TypeWriter from "typewriter-effect";
import '../styles/About.css';


export default function About() {
  return (
   <div className="about-ct">
    <div className="left-cl">
        <TypeWriter className="typewriter-text"
        onInit={(typewriter) => {
          typewriter
          .typeString("Hi! I am Nurellezia bt Suleiman")
          .pauseFor(50)
          .deleteAll()
          .typeString("Hi! I am Nurellezia bt Suleiman")
          .start();
        }
        }
        options={{
          strings: ["Hi! I am Nurellezia bt Suleiman"],
          autoStart: true,
          loop: true,
          cursor: "",
          typeSpeed: 40, 
          deleteSpeed: 20, 
          delay: 500, 
          wrapperClassName: "typewriter-text",
        }

        }
        />
      <div className="text-description"> 
      <h2>A Software Engineer Graduate from UNIMAS</h2>
      <h2>Dedicated, Driven and Hardworking Person</h2>
      <h2>Let's get in touch!</h2></div>
     
    </div>
    <div className="right-cl">
        <div className="profile-img-container">
          <img src={myImage} alt="Nurellezia" className="profile-img"></img>
        </div>
    </div>
   </div>
  );
}
