import React, { useEffect, useState } from "react";
import UserBar from "../components/UserBar";
import CardList from "../components/CardList";
import Timeline from "../components/Timeline";
import "./Profile.css";
import backdrop from "../assets/gorls.png";
import NavBar from "../components/NavBar";
const axios = require("axios").default;
let GLOBAL = require("../global");

export default function User(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/users/${props.user}`
      );
      setUser(result.data.data[0]);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <UserBar user={props.user} />
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
