import React from "react";
import ProfileBar from "../components/ProfileBar";
import CardList from "../components/CardList";
import Timeline from "../components/Timeline";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="App">
      <ProfileBar />
      <h3>Things I Can Help With:</h3>
      <CardList type="push"/>
      <h3>Things I Want Help With:</h3>
      <CardList type="pull"/>
      <h3>My Journey:</h3>
      <Timeline />
    </div>
  );
}
