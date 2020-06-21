import React from "react";
import CardList from "../components/CardList";

function Opportunities() {
  return (
    <div className="App">
      <h2> Opportunities </h2>
      <h3>Organizations</h3>
      <CardList />
      <h3>Scholarships</h3>
      <CardList />
      <h3>Conferences</h3>
      <CardList />
      <h3>Other Resources</h3>
      <CardList />
    </div>
  );
}

export default Opportunities;
