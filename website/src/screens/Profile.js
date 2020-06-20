import React from "react";
import "../App.css";
let GLOBAL = require("../global");

function Profile() {
  console.log((GLOBAL.googleID).length);
  return (
    <div className="App">
      <p> Profile </p>
    </div>
  );
}

export default Profile;
