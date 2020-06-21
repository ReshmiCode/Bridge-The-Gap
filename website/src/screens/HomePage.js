import React from "react";
import SignInWithGoogle from "../components/SignInWithGoogle";
import backdrop from "../assets/gorls.png";
let GLOBAL = require("../global");

function HomePage() {
  GLOBAL.googleID = "";
  const button = {
    width: 200,
    height: 50,
    margin: 10,
    borderRadius: 15,
    backgroundColor: "#ffa090",
    border: "none",
  };

  return (
    <div className="App">
      <h1 style={{ paddingTop: 25 }}> Bridge The Gap </h1>
      <p style={{ margin: 25 }}>
        {" "}
        Connect with other women in tech and learn about career opportunities!{" "}
      </p>
      <SignInWithGoogle />
      <iframe
        width="75%"
        height="550"
        src="https://www.youtube.com/embed/sjCK1cpL7_o"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Demo Video"
        style={{ margin: 20 }}
      ></iframe>
      <button
        href="https://devpost.com/software/bridge-the-gap"
        target="_blank"
        style={button}
      >
        Learn More
      </button>
      <button
        href="https://github.com/ReshmiCode/Bridge-The-Gap"
        target="_blank"
        style={button}
      >
        Source Code
      </button>
      <img
        src={backdrop}
        alt="Women in  Tech"
        resizeMode={"cover"}
        style={{ width: "100%", paddingTop: 20 }}
        source={{ backdrop }}
      />
      <p>
        {" "}
        Made with 💖 by Medha Jonnada, Megan Tran, Reshmi Ranjith, and Saloni
        Shivdasani{" "}
      </p>
    </div>
  );
}

export default HomePage;
