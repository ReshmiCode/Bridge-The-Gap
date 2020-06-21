import React, { useEffect, useState } from "react";
import ProfileBar from "../components/ProfileBar";
import CardList from "../components/CardList";
import Timeline from "../components/Timeline";
import "./Profile.css";
import backdrop from "../assets/gorls.png";
const axios = require("axios").default;
let GLOBAL = require("../global");

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/users/${GLOBAL.googleID}`
      );
      setUser(result.data.data[0]);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <ProfileBar />
      <h3>Things I Can Help With:</h3>
      {user && <CardList cards={user.pushList} />}
      <h3>Things I Want Help With:</h3>
      {user && <CardList cards={user.pullList} />}
      <h3>My Journey:</h3>
      <Timeline />
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
