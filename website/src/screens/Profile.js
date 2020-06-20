import React from "react";
import "../App.css";
let GLOBAL = require("../global");

function Profile() {
  console.log((GLOBAL.googleID).length);
  return (
    <div className="App">
      <div>
        <h2>Profile</h2>
      </div>
    </div>
  );
}

export default Profile;
