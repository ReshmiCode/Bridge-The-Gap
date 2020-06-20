import React from "react";
import ProfileBar from "../components/ProfileBar";
import CardList from "../components/CardList";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="App">
      <ProfileBar />
      <h3>Things I Can Help With:</h3>
      <CardList />
      <h3>Things I Want Help With:</h3>
      <CardList />
    </div>
  );
}
