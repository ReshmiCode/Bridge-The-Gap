import React from "react";
import OpportunityList from "../components/OpportunityList";
import "./Profile.css";
import backdrop from "../assets/gorls.png";
import NavBar from "../components/NavBar";

export default function Opportunities() {
  return (
    <div className="App">
      <NavBar />
      <h2> Opportunities </h2>
      <h3>Organizations</h3>
      <OpportunityList category="organizations" />
      <h3>Scholarships</h3>
      <OpportunityList category="scholarships" />
      <h3>Conferences</h3>
      <OpportunityList category="conferences" />
      <h3>Other Resources</h3>
      <OpportunityList category="other" />
      <img
        src={backdrop}
        alt="Women in  Tech"
        resizeMode={"cover"}
        style={{ width: "100%", paddingTop: 20 }}
        source={{ backdrop }}
      />
    </div>
  );
}
