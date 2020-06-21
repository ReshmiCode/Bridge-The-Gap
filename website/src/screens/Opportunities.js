import React from "react";
import OpportunityList from "../components/OpportunityList";
import "./Profile.css";

export default function Opportunities() {
  return (
    <div className="App">
      <h2> Opportunities </h2>
      <h3>Organizations</h3>
      <OpportunityList category="organizations" />
      <h3>Scholarships</h3>
      <OpportunityList category="scholarships" />
      <h3>Conferences</h3>
      <OpportunityList category="conferences" />
      <h3>Other Resources</h3>
      <OpportunityList category="other" />
    </div>
  );
}
